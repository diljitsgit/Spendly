export default function Footer() {
    return (
        <footer className="bg-[#0e0e0e] text-gray-400 py-10 px-6 md:px-20 w-screen">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Spendly
                    </h3>
                    <p className="text-sm">
                        Smarter Money Habits, One Nudge at a Time.
                    </p>
                </div>

                {/* <div className="flex gap-6 text-sm">
                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>
                    <a href="#features" className="hover:text-white transition">
                        Features
                    </a>
                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </div> */}
            </div>

            <div className="text-center text-xs mt-8 text-gray-600">
                © 2025 Spendly. All rights reserved.
            </div>
        </footer>
    );
}
