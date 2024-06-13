import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti"
import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../../context/AuthContext";


const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  //Unselect a conversation when logging out (unmounting)
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    }
  },[]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected/>
      ) : (
        <>
          <div className="bg-slate-900 px-4 py-2 mb-2 bg-opacity-40">
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages></Messages>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName}!</p>
        <p>Select a user to start messaging!</p>
        <TiMessages className="text-3x1 md:text-6x1 text-center"></TiMessages>
      </div>
    </div>
  );
};

