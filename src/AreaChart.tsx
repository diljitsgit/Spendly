import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function SpendSaveChart() {
    const data = [
        { name: "Week 1", spent: 400, saved: 200 },
        { name: "Week 2", spent: 300, saved: 250 },
        { name: "Week 3", spent: 500, saved: 300 },
        { name: "Week 4", spent: 450, saved: 350 },
    ];

    return (
        <div className="bg-white/5 p-6 rounded-2xl shadow-lg">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="spentColor"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#ef4444"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#ef4444"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="savedColor"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#22c55e"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#22c55e"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="spent"
                        stroke="#ef4444"
                        fillOpacity={1}
                        fill="url(#spentColor)"
                    />
                    <Area
                        type="monotone"
                        dataKey="saved"
                        stroke="#22c55e"
                        fillOpacity={1}
                        fill="url(#savedColor)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
