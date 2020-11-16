import requests
from exceptions import InvalidUsage
from flask import Blueprint, Response, current_app, jsonify


nyt = Blueprint("nyt", __name__)

articles_url = current_app.config['NYT_ARTICLES_URL']
books_url = current_app.config['NYT_BOOKS_URL']


def with_key(url: str, domain: str, suffix: str = None) -> str:
    """
    Convenience function that will return properly formatted url string based on the suffix and domain params.
    - domain: str, required.
    - suffix: str, will default to None if not passed.
    """
    api_key: str = current_app.config.get(f'{domain}_API_KEY')
    full_url: str = ""
    if suffix is None:
        full_url += f"{url}?api-key={api_key}"
    else:
        full_url += f"{url}?{suffix}&api-key={api_key}"

    return full_url


@nyt.route("/api/books/")
def get_best_sellers():
    try:
        r = requests.get(with_key(books_url, "NYT"))
        if r.status_code != 200:
            raise InvalidUsage(str(r), status_code=r.status_code)

        return jsonify(data=r.json()), 200
    except requests.exceptions.RequestException as e:
        raise Exception(e)
