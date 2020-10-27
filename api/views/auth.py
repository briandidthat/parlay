from flask import Blueprint, jsonify
from exceptions import InvalidUsage

auth = Blueprint('auth',import_name=__name__)


@auth.route("/home", methods=['GET'])
def home():
    return "HIIIIIIIIIIIIIIIIIIII"