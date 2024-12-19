from app import db

class User(db.model):
    email=""
    name=""
    password=""
    


    def is_authenticated(self):
        pass

    def set_password(self, password):
        pass

    