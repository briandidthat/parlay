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
