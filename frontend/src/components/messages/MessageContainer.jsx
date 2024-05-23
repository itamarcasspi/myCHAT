import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti"

const MessageContainer = () => {
  const noSelecetedChat = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noSelecetedChat ? (
        <NoChatSelected/>
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 bg-opacity-40">
            <span className="text-gray-900 font-bold">Eli Copter</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Eli Copter</p>
        <p>Select a user to start messaging!</p>
        <TiMessages className="text-3x1 md:text-6x1 text-center"></TiMessages>
      </div>
    </div>
  );
};

