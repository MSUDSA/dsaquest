import { userAuth } from "../lib/auth"
import db from "./mock_db.json" 
export const BuildMockFunction = ({}) => {
    return function mockFunction({} ={}) {
        return  Object.freeze({
            getAppName: () => console.log("This is working...")
        })
    }
}


function signUserIn({ email, password }: userAuth) {
    const res = db.Users.find((user) => user.email === email)
    if (res) {
        if (res.password === password) {
            return {
                "email": res.email,
                "name": res.name,
                "streak": res.streak,
                "last_login": res.last_login,  
                "status_code": 200, 
                "success": "Successfully logged in"}
        } else {
            return {"error": "Password incorrect", 
                "status_code": 401}
        }
    } else {
        return {"error": "User does not exist", "status_code": 401}
    }

}

function signUserUp({ name, email, password }: userAuth) {
    const res = db.Users.find((user) => user.email === email)
    if (!res) {
        db.Users.push({ name, email, password, streak : 1, last_login : 1,})
        return {"success": "Signup Success!", 'status_code': 200}
    } else {
        return {"error": "User already exists", "status_code": 401}
    }
}

