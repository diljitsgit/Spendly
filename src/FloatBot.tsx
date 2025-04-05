import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleMore } from "lucide-react";
import { chatService } from "./lib/axios";

export default function FloatingChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: "chatbot",
            text: "Hi! I'm your finance buddy 🤖. Ask me anything!",
        },
    ]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        const botReply = await fetchBotReply(input);
        console.log(botReply);
        setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    };

    const fetchBotReply = async (prompt: string) => {
        // Simulated API call (replace with real endpoint if available)
        const result = await chatService.sendMessage(1, prompt);
        return result.response;
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="relative">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute bottom-16 right-0 w-80 h-[30rem] bg-dbackground ring-black/5 border-[1px] dark:border-outline border-outline/30 text-white rounded-xl shadow-xl flex flex-col overflow-hidden"
                        >
                            <div className="bg-white/5 p-3 font-semibold">
                                💬 Spendly Chat
                            </div>
                            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`max-w-[80%] px-3 py-2 rounded-lg ${
                                            msg.from === "user"
                                                ? "bg-primary/60 ml-auto text-white"
                                                : "bg-gray-700 text-gray-100"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t border-gray-700 flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-white text-sm"
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
                                >
                                    Send
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating button - always fixed at bottom-right */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
                >
                    <MessageCircleMore />
                </motion.button>
            </div>
        </div>
    );
}
