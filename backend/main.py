from app import create_app, db
from app.models.models import User
import os
from flask import request


app = create_app()


@app.route('/')
def index():
    return "Hello, world!"

@app.route('/signup', methods = ['POST'])
def signup():
    name, email, password = request.get_json()["name"], request.get_json()["email"], request.get_json()["password"]
    user = User.query.get(email)
    if user:
        return f"User already exists"
    else:
        user = User(name = name, email = email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return f"Signup Success!"
    

@app.route("/login", methods = ["POST"])
def login():
    email, password = request.get_json()["email"], request.get_json()["password"]

    user = User.query.get(email)
    if not user:
        return f"User does not exist"
    else:
        valid = user.check_password(password)
        if valid:
            return user.get_profile()
        else:
            return f"Password incorrect"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port= os.getenv("BACKEND_PORT"))