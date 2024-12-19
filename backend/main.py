from flask import Flask
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("POSTGRES_URL") 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db = SQLAlchemy(app)



@app.route('/')
def index():
    return "Hello, world!"




if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=os.getenv("BACKEND_PORT"))