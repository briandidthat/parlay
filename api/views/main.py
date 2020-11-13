from flask import Blueprint, jsonify, request
from api import role_required

main = Blueprint("main", import_name=__name__)


@main.route("/home", methods=["GET"])
@role_required("USER")
def home():
    response = {
        "response": "The app is working fine.",
        "status": 200
    }

    return jsonify(response), 200