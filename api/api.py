from functools import wraps
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, get_jwt_claims, verify_jwt_in_request


# instantiate db
db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.DevelopmentConfig')

    db.init_app(app)

    jwt = JWTManager(app)

    # will allow us to pass userId and roles via the token
    @jwt.user_claims_loader
    def add_claims_to_access_token(user):
        return {
            "username": user.username,
            "roles": [role.name for role in user.roles]
        }

    @jwt.user_identity_loader
    def user_identity_lookup(user):
        return user.username

    # import views (blueprints) containing routes
    from views import auth, main

    # register blueprints
    app.register_blueprint(auth)
    app.register_blueprint(main)

    return app


# custom decorator to enforce role restriction on routes
def role_required(name):
    def decorator(fn):
        @wraps
        def wrapper(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt_claims()
            if name not in claims['roles']:
                return jsonify(message="Unauthorized Access."), 403
            result = fn(*args, **kwargs)
            return result
        return wrapper
    return decorator


if __name__ == "__main__":
    app = create_app()
