import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";


const useGetConversations= () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const {authUser} = useAuthContext();
  const {onlineUsers} = useSocketContext();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, [onlineUsers]);

  return { loading, conversations };
};

export default useGetConversations;
