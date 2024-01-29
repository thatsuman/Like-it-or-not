import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    // const result = await signInWithPopup(auth, provider);
    await signInWithPopup(auth, provider);
    // After sign in navigate() redirects to home page
    navigate("/");
  };
  return (
    <div>
      <p>Sign In with Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Signin;
