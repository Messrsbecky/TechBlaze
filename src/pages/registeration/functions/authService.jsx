//addition
import axiosInstance from "./axiosConfig";
import { toast } from "react-toastify";
import { auth, provider } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// Sign Up
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await axiosInstance.post(`/users/${user.uid}.json`, { email });

    toast.success("User created successfully!");
    return user;
  } catch (error) {
    toast.error("Email already in use");
    throw error;
  }
};

// Log In
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("User logged in successfully!");
    return userCredential.user;
  } catch (error) {
    toast.error("Log in failed, check your details");
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success("Success!");
    return result.user;
  } catch (error) {
    toast.error("Error, Please try again");
    throw error;
  }
};
