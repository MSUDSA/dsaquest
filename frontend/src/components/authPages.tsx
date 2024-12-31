import Login from "../auth/login"
import Signup from "../auth/signup"


const LoginSignUp = () => {
  return (
    <div className="h-1/2 flex flex-col justify-center items-center">
      <h2>DSAQUEST</h2>
      <Login></Login>
    </div>
  )
}
export default LoginSignUp