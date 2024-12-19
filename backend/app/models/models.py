from app import db
from werkzeug.security import generate_password_hash, check_password_hash






class User(db.Model):
    email = db.Column(db.String(40), unique = True, nullable = False, primary_key = True)
    name = db.Column(db.String(40), unique = True, nullable = False)
    password_hash = db.Column(db.String(128), nullable = False)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"{self.name} is a user with {self.email} email."


    