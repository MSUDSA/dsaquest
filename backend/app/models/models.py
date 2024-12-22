from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timezone


class User(db.Model):
    email = db.Column(db.String(40), unique = True, nullable = False, primary_key = True)
    name = db.Column(db.String(40), unique = True, nullable = False)
    password_hash = db.Column(db.String(255), nullable = False)
    last_login = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    streak = db.Column(db.Integer, default = 0)
    

    def on_login(self):
        self.__update_last_login()
        self.__update_streak()
        db.session.commit()


    def __update_last_login(self):
        self.last_login = datetime.now(timezone.utc)

    def __update_streak(self):
        seconds_since_last_login = datetime.now(timezone.utc).timestamp() - self.last_login.timestamp()
        if seconds_since_last_login > 60*60*24 and seconds_since_last_login < 60*60*36:
            self.streak +=1
        elif seconds_since_last_login > 60*60*36:
            self.streak = 0
        
    
    def set_password(self, password):
        self.password_hash = str(generate_password_hash(password))

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"{self.name} is a user with {self.email} email."

    def get_profile(self):
        return {
            "email": self.email,
            "name": self.name,
            "streak": self.streak,
            "last_login": self.last_login  
        }
    


    