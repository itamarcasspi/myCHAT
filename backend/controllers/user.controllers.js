import User from "../models/users.models.js";

export const getUsersForSideBar = async (req,res) => {
    try {

        const loggedUserId = req.user._id;
        
        const filteredUsers = await User.find({_id: { $ne: loggedUserId}}).select("-password");
        
        res.status(200).json(filteredUsers);
    } catch(error){
        console.log("Error: getUserForSideBar controller",error.message);
        res.status(500).json({error: "Internal server error"});
    }
} 