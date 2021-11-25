import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const auth = getAuth();

const useAuthProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [admin, setAdmin] = useState(false);

  //Register User
  const registerUser = (email, password, history, fullName) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updateName(fullName);
        saveUser(email, fullName);
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Update Display Name
  const updateName = (fullName) => {
    updateProfile(auth.currentUser, {
      displayName: fullName,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // Admin Loading
  // useEffect(() => {
  //   axios
  //     .get(`https://guarded-savannah-06230.herokuapp.com/user/${user?.email}`)
  //     .then((res) => {
  //       setAdmin(res.data.admin);
  //     });
  // }, [user?.email]);

  // Login
  const login = (email, password, redirect, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        history.push(redirect);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Observer
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        axios
          .get(
            `https://guarded-savannah-06230.herokuapp.com/user/${user?.email}`
          )
          .then((res) => {
            setAdmin(res.data.admin);
          })
          .finally(() => setAdminLoading(false));
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);

  // Log Out
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  // Save User In Database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("https://guarded-savannah-06230.herokuapp.com/user", user);
  };

  return { registerUser, login, user, logOut, isLoading, admin, adminLoading };
};

export default useAuthProvider;
