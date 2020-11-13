from models import User, Role
from api import db, role_required
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

    if not user or not check_password_hash(user.password, password):
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

    access_token = create_access_token(user)

    return jsonify(access_token=access_token), 201



@auth.route("/users", methods=["GET"])
@role_required("ADMIN")
def get_users():
    users = User.query.all()

    return jsonify(users=[u.serialize() for u in users]), 200


@auth.route("/users/delete/<int:userid>", methods=["PUT"])
@role_required("ADMIN")
def remove_user(user_id):
    user = User.query.get(user_id)

    if not user:
        raise InvalidUsage("There is no existing user associated with that id.", status_code=404)

    User.query.delete(user)
    db.session.commit()