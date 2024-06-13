import React from "react";
import Conversation from "./Conversation.jsx";

import useGetConversations from "../../hooks/useGetConversations.jsx";

const AllConversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations: ", conversations);
  return (
    <div className="py-0 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};

export default AllConversations;
