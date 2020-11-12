from api import db
from werkzeug.security import generate_password_hash
from sqlalchemy.dialects.mysql import UUID


class User(db.Model):
    """
    User model class database mapping.
    - serialize() returns a dictionary representation of class attributes for jsonification.
    """
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    roles = db.relationship('Role', secondary="user_role", lazy="select", backref=db.backref('user', lazy=True))

    def __init__(self, email, username, password):
        self.email = email
        self.username = username
        self.password = generate_password_hash(password)

    def serialize(self):
        return {
            "user_id": self.id,
            "email": self.email,
            "username": self.username
        }


class Role(db.Model):
    __tablename__ = "role"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, nullable=False, unique=True)

    def __init__(self, name):
        self.name = name


user_role = db.Table('user_role',
                     db.Column('user_id', db.Integer, db.ForeignKey(
                         'user.id'), primary_key=True),
                     db.Column('role_id', db.Integer, db.ForeignKey(
                         'role.id'), primary_key=True)
                     )
