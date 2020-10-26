from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy()
from views import auth

# instantiate db
db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.DevelopmentConfig')

    # register auhtentication blueprint
    app.register_blueprint(auth)

    return app

if __name__ == "__main__":
   app = create_app()