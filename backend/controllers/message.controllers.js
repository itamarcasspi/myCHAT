import Conversation from '../models/conversation.models.js'
import Message from '../models/message.models.js'

export const sendMessage = async (req,res) => {
    console.log("Message sent",req.params.id);

    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id;
        

        //Figure out the conversation between the users (or create one)
        let curr_conversation = await Conversation.findOne({
            participants: {$all: [senderId,recieverId]}
        })

        if(!curr_conversation)
        {
            curr_conversation = await Conversation.create({
                participants: [senderId,recieverId]
            })
        }
        //Create the current message to be added to the conversation
        const curr_message = new Message({
            senderId,
            recieverId,
            message
        });
        if(curr_message)
        {
            curr_conversation.messages.push(curr_message._id);

            await Promise.all([curr_message.save(),curr_conversation.save()]);

        }

        res.status(201).json(curr_message);

    } catch (error) {
        console.log("Error: ",error.message);

        res.status(500).json({error:"Internet server error (message not sent)"});
    }
}

export const getMessages = async (req,res) =>{
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    }catch (error) {
        console.log("Error in getMessages controler: ",error.message);

        res.status(500).json({error:"Internet server error; Cannot retrieve messages"});
    }
}

