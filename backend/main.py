from app import create_app, db
from app.models import User
import os
from flask import request


app = create_app()


@app.route('/')
def index():
    return "Hello, world!"

@app.route('/signup', method = ['POST'])
def signup():
    name, email, password = request.data["name"], request.data["email"], request.data["password"]
    user = User.query.get(email)
    if user:
        return f"User already exists"
    else:
        user = User(name = name, email = email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return f"Signup Success!"
    

@app.route("/login", method = ["POST"])
def login():
    email, password = request.data["email"], request.data["password"]

    user = User.query.get(email)
    if not user:
        return f"User does not exist"
    else:
        valid = user.check_password(password)
        if valid:
            return repr(user)
        else:
            return f"Password incorrect"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port= os.getenv("BACKEND_PORT"))