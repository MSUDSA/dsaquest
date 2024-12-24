from app import create_app, db
from app.models.models import User
import os
from flask import request, abort, jsonify

app = create_app()

@app.route('/')
def index():
    return "Hello, world!"

@app.route('/signup', methods = ['POST'])
def signup():
    data = request.get_json()
    name, email, password = data['email'], data['password']
    user = User.query.get(email)
    if not user:
        user = User(name=name, email=email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return jsonify({"success": f"Signup Success!"})
    abort(404, description=jsonify({"error": f"User already exists"}))

@app.route("/login", methods = ["POST"])
def login():
    data = request.get_json()
    email, password = data["email"], data["password"]

    user = User.query.get(email)
    if not user:
        return jsonify({"error": f"User does not exist", "status_code": 404})
    else:
        valid = user.check_password(password)
        if valid:
            return jsonify({**user.get_profile(), "status_code": 404})
        else:
            return jsonify({"error": "Password incorrect", "status_code": 404})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port= os.getenv("BACKEND_PORT", 8081))