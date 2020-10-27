from werkzeug.security import generate_password_hash
from api import db

class User(db.Model):
    """
    Returns a user representation class.
    - serialize() returns a dictionary representation of class attributes for jsonification.
    """
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(50), nullable = False)

    def __init__(self, email, username, password):
        self.email = email
        self.username = username
        self.password = generate_password_hash(password)

    def serialize(self):
        return {
            "user_id": self.id,
            "username": self.username
        }

