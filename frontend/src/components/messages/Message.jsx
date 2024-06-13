import { parse } from "dotenv";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";

const Message = (message) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isSender = authUser._id === message.message.senderId;
  const sender_reciever_suffix = isSender ? "start" : "end";
  // const profilep = isSender ? authUser.profilePic : selectedConversation.profilePic;
  const profilep = "https://i.pravatar.cc/150?u=Itamar Caspi";

  const parseTimestamp = () => {
    let timestampString = message.message.createdAt;
    // Parse the timestamp string into a Date object
    let dateObject = new Date(timestampString);
    let hours = dateObject.getUTCHours(); // Use getHours() if you want local time
    let minutes = dateObject.getUTCMinutes(); // Use getMinutes() if you want local time
    let formattedTime =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0");
    return formattedTime;
  };

  return (
    <div>
      <div className={`chat chat-${sender_reciever_suffix}`}>
        <div className="chat-image avatar">
          <div className="w-10 h-10 rounded-full ">
            <img alt="Tailwind CSS chat bubble component" src={profilep} />
          </div>
        </div>

        <div className={`chat-bubble text-white  ${isSender ?``: `bg-gray-500`}`}>
          {message.message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {parseTimestamp()}
        </div>
      </div>
    </div>

    // <div>
    //   <div className="chat chat-start">
    //     <div className="chat-image avatar">
    //       <div className="w-10 rounded-full">
    //         <img alt="Tailwind CSS chat bubble component" src={profilep} />
    //       </div>
    //     </div>
    //     <div className="chat-header">
    //       Obi-Wan Kenobi
    //       <time className="text-xs opacity-50">12:45</time>
    //     </div>
    //     <div className="chat-bubble">You were the Chosen One!</div>
    //     <div className="chat-footer opacity-50">Delivered</div>
    //   </div>
    // </div>
  );
};

export default Message;
