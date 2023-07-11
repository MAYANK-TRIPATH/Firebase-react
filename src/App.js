import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Signup"
import SigninPage from "./pages/Signin"
import './App.css';

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "Mayanktripathi@gmail.com",
      "Mayank@#23"
    ).then((value) => console.log(value));
  };

  return (
    <div className="App">
     <SignupPage /> 
     <SigninPage /> 
    </div>
  );
}

export default App;
