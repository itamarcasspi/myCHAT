import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";


const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender
  }) => {
    const validated = validateRegInfo({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!validated) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({fullName,username,password,confirmPassword,gender,})
      });
      const data = await res.json();
      if (data.error){
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user",JSON.stringify(data));
      setAuthUser(data);
        

    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
      
    }finally{
      setLoading(false);
    }
  };

  return {loading , signup};


};

export default useSignup;

function validateRegInfo({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    
    console.log("Not all fields have been filled",!fullName,!username, !password, !confirmPassword,!gender);
    return false;
  }
  const containsNumbers = (str) => {
    const regex = /\d/; // \d matches any digit (equivalent to [0-9])
    return regex.test(str);
  };
  if (containsNumbers(fullName)) {
    toast.error("Full name can not contain any numbers.");
    return false;
  }
  if (username.length > 10) {
    toast.error("Username can not be longer than 10 characters.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters long.");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Passwords do not match.");
    return false;
  }
  return true;
}
