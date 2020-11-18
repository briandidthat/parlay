import json
import requests
from api import cache
from exceptions import InvalidUsage
from flask import Blueprint, Response, current_app, jsonify


nyt = Blueprint("nyt", __name__)

books_url = current_app.config['NYT_BOOKS_URL']
articles_url = current_app.config['NYT_ARTICLES_URL']


def with_key(url: str, domain: str, suffix: str = None) -> str:
    """
    Convenience function that will return properly formatted url string based on the suffix and domain params.
    - domain: str, required.
    - suffix: str, will default to None if not passed.
    """
    api_key: str = current_app.config.get(f'{domain}_API_KEY')
    full_url: str = ""
    if suffix is None:
        full_url = f"{url}?api-key={api_key}"
    else:
        full_url = f"{url}?{suffix}&api-key={api_key}"

    return full_url


@nyt.route("/api/books/best-sellers")
def get_best_sellers():
    try:
        # check if books are already cached, if so we will return them 
        books = cache.get("books")
        print("returning from cache")
        if books is None:  # if books is not in cache, make the api request and cache the results
            r = requests.get(with_key(books_url, "NYT"))
            if r.status_code != 200:  # anything other than a 200 should return an exception to user
                raise InvalidUsage(str(r), status_code=r.status_code)
            else:
                response_obj = r.json()
                # since the response contains a list of best sellers categories, grab those categories and use them as a key
                categories = response_obj["results"]["lists"]
                books = []
                for category in categories:
                    for book in category["books"]:
                        books.append(book)

                # store books list in cache for quick response
                cache.set("books", books)
        return jsonify(results=books), 200
    except requests.exceptions.RequestException as e:
        raise Exception(e)
