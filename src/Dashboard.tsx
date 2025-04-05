// import { FaChartPie, FaPiggyBank, FaRobot, FaPlus } from "react-icons/fa";

import { JSX, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SpendSaveChart from "./AreaChart";
import FloatingChatbot from "./FloatBot";

export default function Dashboard() {
    const [theme, setTheme] = useState("dark");

    function changeTheme() {
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <div className={theme}>
            <div className="min-h-screen bg-lbackground dark:bg-dbackground text-white font-sans">
                <Navbar changeThemeDrill={changeTheme}></Navbar>
                <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <FrostedCard>
                        <h2 className="text-2xl text-primary font-semibold mb-4">
                            Monthly Overview
                        </h2>
                        <div className="flex justify-between w-[70%] m-auto">
                            <div className="flex-col items-center justify-center text-center">
                                <p className="font-info">Spent</p>
                                <span className="text-3xl text-primary font-semibold">
                                    <CountUpNumber target="100"></CountUpNumber>
                                </span>
                            </div>
                            <div className="flex-col items-center justify-center text-center">
                                <p className="font-info">Saved</p>
                                <span className="text-3xl text-primary font-semibold">
                                    <CountUpNumber target="1300"></CountUpNumber>
                                </span>
                            </div>
                            <div className="flex-col items-center justify-center text-center">
                                <p className="font-info">Saving Rate</p>
                                <span className="text-3xl text-primary font-semibold">
                                    <CountUpNumber target="18"></CountUpNumber>
                                </span>
                            </div>
                        </div>
                    </FrostedCard>

                    <FrostedCard>
                        <h2 className="text-2xl text-primary font-semibold mb-4">
                            Progress
                        </h2>
                        <div className="mb-2">
                            <p className="font-info p-1">Weekly Budget</p>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                                <div className="bg-green-500 h-3 rounded-full w-3/4"></div>
                            </div>
                        </div>
                        <div>
                            <p className="font-info p-1">Food Delivery Spend</p>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                                <div className="bg-red-500 h-3 rounded-full w-2/3"></div>
                            </div>
                        </div>
                    </FrostedCard>

                    <FrostedCard>
                        <h2 className="text-xl font-semibold mb-4">
                            🤖 AI Nudges
                        </h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                🔔 You’ve spent ₹2000 on food delivery this
                                week!
                            </li>
                            <li>💡 Try cooking twice to save ₹600</li>
                            <li>🏆 Save ₹100 more to unlock your badge!</li>
                        </ul>
                    </FrostedCard>

                    <FrostedCard className="lg:col-span-2 ">
                        <h2 className="text-3xl text-primary font-semibold mb-4">
                            Spending Trends
                        </h2>
                        <div className="text-gray-400 text-sm">
                            <SpendSaveChart />
                        </div>
                    </FrostedCard>

                    <FrostedCard>
                        <h2 className="text-xl font-semibold mb-4">
                            💼 Savings Goals
                        </h2>
                        <p>📱 Save ₹5000 for iPhone</p>
                        <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                            <div className="bg-green-400 h-3 rounded-full w-1/4"></div>
                        </div>
                    </FrostedCard>
                </main>

                <CardBoard></CardBoard>

                <FloatingChatbot></FloatingChatbot>

                <Footer></Footer>
            </div>
        </div>
    );
}

function FrostedCard({
    children,
    className,
}: {
    children: JSX.Element | JSX.Element[];
    className?: string;
}) {
    return (
        <div
            className={
                "isolate rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5 border-[1px] dark:border-outline border-outline/30 p-6 text-black dark:text-white " +
                className
            }
        >
            {children}
        </div>
    );
}

function CardBoard() {
    const [cards, setCards] = useState<string[]>([]);

    const addCard = (text: string) => setCards([...cards, text]);
    const removeCard = (index: number) =>
        setCards(cards.filter((_, i) => i !== index));

    return (
        <div className="rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5 border-[1px] dark:border-outline border-outline/30 p-6 text-black dark:text-white w-full max-w-md ">
            <h2 className="text-xl font-bold mb-4">🗂️ Task Board</h2>
            <CardForm onAdd={addCard} />
            <div className="space-y-3">
                {cards.map((card, i) => (
                    <Card key={i} title={card} onRemove={() => removeCard(i)} />
                ))}
            </div>
        </div>
    );
}

function CardForm({ onAdd }: { onAdd: (text: string) => void }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!input.trim()) return;
        onAdd(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add card..."
                className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg w-full"
            />
            <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
            >
                Add
            </button>
        </form>
    );
}

function Card({ title, onRemove }: { title: string; onRemove: () => void }) {
    return (
        <>
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 shadow-md flex justify-between items-center">
                <span>{title}</span>
                <button
                    onClick={onRemove}
                    className="text-red-400 hover:text-red-500 text-sm font-bold"
                >
                    ×
                </button>
            </div>
        </>
    );
}

function CountUpNumber({
    target,
    className,
}: {
    target: string;
    className?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const start = 0;
        const end = parseInt(target);
        if (start === end) return;

        const totalFrames = Math.round(500 / 16); // ~60fps
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(end * progress);
            setCount(current);

            if (progress >= 1) clearInterval(counter);
        }, 16);

        return () => clearInterval(counter);
    }, [target]);

    return <span className={className}>{count.toLocaleString()}</span>;
}
