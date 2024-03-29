from os import environ, path
from dotenv import load_dotenv


basedir = path.abspath(path.dirname(path.dirname(__file__)))
load_dotenv(dotenv_path=path.join(basedir, '.env'))

class Config:
    """
    Base Config class will contain most of the basic configuration attributes and will be changed accordingly
    based on the environment.
    """
    DEBUG = False
    TESTING = False
    SECRET_KEY = environ.get('SECRET_KEY')


class TestConfig(Config):
    TESTING = True


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'
    SQLALCHEMY_TRACK_MODIFICATIONS =  False
    NYT_API_KEY = environ.get('NYT_API_KEY')
    NYT_BOOKS_URL = environ.get('NYT_BOOKS_URL')
    NYT_ARTICLES_URL = environ.get('NYT_ARTICLES_URL')
    CACHE_TYPE = "simple"
    CACHE_DEFAULT_TIMEOUT = 300