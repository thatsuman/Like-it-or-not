import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  // Hooks to update user profile pics and name for each time different user signs in
  const [userData] = useAuthState(auth);

  //Sign out handler function
  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!userData ? (
          <Link to="/signin">Sign In</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>

      {/* Display user details logic */}
      <div className="user">
        {userData ? (
          <>
            <p>{userData?.displayName}</p>
            <img
              src={userData?.photoURL || ""}
              width="20"
              height="20"
              alt="User"
            />
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
