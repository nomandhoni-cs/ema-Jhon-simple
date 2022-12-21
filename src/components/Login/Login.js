import React, { useContext } from 'react'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
initializeApp(firebaseConfig);
const Login = () => {
  //Checkbox for new user
  const [newUser, setNewUser] = React.useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  if(location.state?.from){
    navigate(location.state.from)
}
  // Sign in with google popup
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          token: user.accessToken
        };
        setUser(signedInUser);
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  }
  // Update name
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, { 
      displayName: name
    }).then(() => {
      console.log('User name updated successfully');
    }).catch((error) => {
      console.log(error);
    });
  }

    // Sign in with email and password
    const handleInputFieldBlur = (e) => {
      let isFormValid;
      if (e.target.name === "name") {
        isFormValid = e.target.value.length > 3;
      }
      if (e.target.name === "email") {
        isFormValid = /^\S+@\S+\.\S+$/.test(e.target.value);
      }
      if (e.target.name === "password") {
        const isPasswordValid = e.target.value.length > 5;
        const isPasswordHasNumber = /[0-9]/.test(e.target.value);
        isFormValid = isPasswordValid && isPasswordHasNumber;
      }
      if(isFormValid) {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    };
    // Sign in with email and password
    const signInWithEmailPassword = () => {
      if (user.email && user.password) {
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            const {email, photoURL, displayName,accessToken
            } = userCredential.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL,
              token: accessToken
            };
            setUser(signedInUser);
            console.log(user.name)
            console.log(userCredential.user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Email or password is incorrect");
            // ..
          });
      }
    };
    // Create account with email and password
    const createAccountWithEmailPassword = () => {
      if (user.email && user.password) {
        createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        updateUserName(user.name);
            // Signed in
            const {email, photoURL, accessToken
            } = userCredential.user;
            const signedInUser = {
              isSignedIn: true,
              name: user.name,
              email: email,
              photo: photoURL,
              token: accessToken
  
            };
            setUser(signedInUser);
            console.log(user.name)
            console.log(userCredential.user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Email already exists");
            // ..
          });
      }
    };
    // Sign Out
    const signOut = () => {
      auth.signOut().then(() => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          token: ''
        }
        setUser(signedOutUser);
        setNewUser(false);
      }).catch((error) => {
        console.log(error);
      });
    }
  const handleNewUser = (e) =>{
    const userStatus = e.target.checked;
    setNewUser(e.target.checked)
    console.log(userStatus);
  }
  // New - old user
  const formControl = (e) =>{
    if(newUser) {
      createAccountWithEmailPassword();
    }
    else{
      signInWithEmailPassword();
    }
    e.preventDefault();
  }
  const userForm = 
  (<>
  <form action="" onSubmit={formControl}>
  <input type="checkbox" onChange={handleNewUser} name="checkbox" id="" />
  <label htmlFor="checkbox">New user?</label>
  <br />
  {
    newUser? <input type="text" name="name" required placeholder='Enter your name' id="name" onBlur={handleInputFieldBlur} /> : null
  }
  <br />
  <br />
  <input type="email" name="email" required placeholder='Enter your email' id="email" onBlur={handleInputFieldBlur}/>
  <br />
  <br />
  <input type="password" name="password" required placeholder='Enter your password' id="password" onBlur={handleInputFieldBlur}/>
  <br />
  <br />
  {
    newUser? <input type="submit" value="Sign Up" /> : <input type="submit" value="Log In" />
  }
  <br />
  <br />
</form>
<button onClick={signInWithGoogle}>Sign in with Google</button>
  </>)
  return (
    <div style={{textAlign: 'center'}}>
      {
        user.isSignedIn? <button onClick={signOut}>Sign Out</button> : userForm
      }
    </div>
  )
}
export default Login