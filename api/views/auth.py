from api import db
from models import User, Role
from exceptions import InvalidUsage
from flask import Blueprint, jsonify, request
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity


auth = Blueprint('auth', import_name=__name__)


@auth.route("/login", methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).first()

    if not user and not check_password_hash(user.password, password):
        raise InvalidUsage("Invalid login credentials.", status_code=401)

    access_token = create_access_token(user)

    return jsonify(access_token=access_token), 200


@auth.route("/register", methods=['POST'])
def register():
    email = request.json.get("email", None)
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username).first()

    if user:  # if user already exists in the system, raise error
        raise InvalidUsage("This user already exists.", status_code=409)
    else:
        user = User(email, username, password)

    db.session.add(user)
    role = Role.query.filter_by(name="USER").first()
    user.roles.append(role)
    db.session.commit()

    access_token = create_access_token(username)

    return jsonify(access_token=access_token), 201


@auth.errorhandler(InvalidUsage):
def invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response