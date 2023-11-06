/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isChatClicked, setIsChatClicked] = useState(false);
  const [contacts, setContacts] = useState();
  const [selectedContact, setSelectedContact] = useState();
  const [isleftSideBar, setIsLeftSideBar] = useState(false);
  const [isRightSideBar, setIsRightSideBar] = useState(false);
  const [leftSideBarHead, setLeftSideBarHead] = useState();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (user && user.photoURL) {
      // Fetch the image and set it in the state
      fetch(user.photoURL)
        .then((response) => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error("Network response was not ok.");
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [user]);

  const googleSignIn = (googleAuthProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetch("/public/contacts.json")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const authInfo = {
    googleSignIn,
    logOut,
    loading,
    setLoading,
    user,
    isChatClicked,
    setIsChatClicked,
    contacts,
    selectedContact,
    setSelectedContact,
    leftSideBarHead,
    setLeftSideBarHead,
    isleftSideBar,
    setIsLeftSideBar,
    imageUrl,
    isRightSideBar,
    setIsRightSideBar,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
