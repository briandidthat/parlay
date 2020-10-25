from flask import Flask, jsonify



def create_app():
    app = Flask(__name__)
    app.config.from_object('config.DevelopmentConfig')

    return app
    

if __name__ == "__main__":
    app = create_app()