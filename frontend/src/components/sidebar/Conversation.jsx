import React, { useState } from "react";
import useConversation from "../../../zustand/useConversation";
import { useSocketContext } from "../../../context/SocketContext";

const Conversation = ({conversation}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-gray-500 rounded p-2 py-1 curser-pointer
        ${isSelected ? "bg-gray-500" : ""}
      `}
      onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={"https://i.pravatar.cc/150?u="+conversation.fullName} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-700">{conversation.fullName}</p>
                <span className="text-x1">{":)"}</span>
            </div>

        </div>
        
      </div>
      <div className="divider my-0 py-0 h-0 "/>
    </>
  );
};

export default Conversation;
