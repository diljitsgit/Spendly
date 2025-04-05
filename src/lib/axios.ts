import axios from "axios";

const API_URL = "https://spendly-backend.onrender.com/"; // Replace with your Render URL

export const chatService = {
    sendMessage: async (userId: 1, message: string) => {
        try {
            console.log("Hello");
            const response = await axios.post({ API_URL } + "/chat", {
                user_id: userId,
                message: message,
            });
            console.log(response);
            return response.data;
        } catch (error) {
            console.error("Chat API Error:", error);
            throw error;
        }
    },
};
