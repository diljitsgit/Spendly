"use client";

import { useState } from "react";
import github_logo from "./assets/github-mark-white.svg";

function App() {
    const [theme, setTheme] = useState("dark");

    function changeTheme() {
        if (theme == "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <>
            <div className={theme + " overflow-x-hidden"}>
                <div className="bg-lbackground dark:bg-dbackground w-screen overflow-x-hidden">
                    <Navbar changeThemeDrill={changeTheme}></Navbar>
                    <HeroSection></HeroSection>
                    <AboutUs></AboutUs>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

function Navbar({ changeThemeDrill }: { changeThemeDrill: () => void }) {
    return (
        <>
            <div className="block w-screen h-[50px] bg-background px-10 border-b-[1px] border-outline">
                <div className="flex justify-between items-center h-[50px] lg:w-[70%] w-[100%] m-auto">
                    <span className="flex h-[50px] justify-center items-center">
                        <img
                            src="/Spendly.png"
                            className="h-[50px]"
                            alt="logo"
                        />
                        <h1 className="text-black dark:text-white font-info text-2xl">
                            Spendly
                        </h1>
                    </span>
                    <div className="flex gap-3 justify-between items-center">
                        <Toggle click={changeThemeDrill}></Toggle>
                        <a
                            href="https://github.com/diljitsgit/Spendly"
                            target="_blank"
                        >
                            <img
                                src={github_logo}
                                alt="Github Icon"
                                className="size-5 invert dark:invert-0"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

function Toggle({ click }: { click: () => void }) {
    return (
        <>
            <>
                <button
                    type="button"
                    className="hidden font-medium rounded-full text-slate-50 hover:bg-primary transition ease-in-out duration-500 dark:block"
                    onClick={click}
                >
                    <span className="group inline-flex shrink-0 justify-center items-center size-9">
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                    </span>
                </button>
                <button
                    type="button"
                    className="block dark:hidden font-medium rounded-full text-slate-50 hover:bg-primary transition ease-in-out duration-500"
                    onClick={click}
                >
                    <span className="group inline-flex shrink-0 justify-center items-center size-9 invert">
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={4} />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                    </span>
                </button>
            </>
        </>
    );
}

function HeroSection() {
    return (
        <>
            <section className="relative py-12 sm:py-16 lg:pb-40">
                <div className="absolute bottom-0 right-0 overflow-hidden -z-1">
                    <img
                        className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75 dark:invert"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
                        alt=""
                    />
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                            <h1 className="dark:text-white text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                A Platform that makes you{" "}
                                <span className="text-primary">
                                    Financially respinsible.
                                </span>
                            </h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vehicula massa in enim luctus.
                                Rutrum arcu.
                            </p>

                            <a
                                href="#"
                                title=""
                                className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Try our Platform
                            </a>
                        </div>

                        <div className="xl:col-span-1">
                            <img
                                className="w-full mx-auto"
                                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function AboutUs() {
    return (
        <section className="bg-lbackground dark:bg-dbackground text-white py-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-6xl font-bold mb-6 text-black dark:text-white">
                    About <span className="text-primary">Spendly</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                    Spendly is your AI-powered financial assistant, helping
                    young adults build better money habits. Our mission is
                    simple — reduce impulse spending, increase savings, and make
                    financial wellness feel easy and rewarding.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="bg-dbackground p-6 rounded-xl shadow-md border border-outline">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            🎯 Our Goal
                        </h3>
                        <p className="text-gray-400">
                            Encourage mindful spending and help users set
                            achievable financial goals.
                        </p>
                    </div>
                    <div className="bg-dbackground p-6 rounded-xl shadow-md border border-outline">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            🧠 Smart Nudges
                        </h3>
                        <p className="text-gray-400">
                            Personalized insights and gentle nudges keep you on
                            track, without judgment.
                        </p>
                    </div>
                    <div className="bg-dbackground p-6 rounded-xl shadow-md border border-outline">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            🔐 Privacy First
                        </h3>
                        <p className="text-gray-400">
                            We use mock data and encryption to prioritize your
                            privacy and build trust.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-[#0e0e0e] text-gray-400 py-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left: Logo & Tagline */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Spendly
                    </h3>
                    <p className="text-sm">
                        Smarter Money Habits, One Nudge at a Time.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <div className="flex gap-6 text-sm">
                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>
                    <a href="#features" className="hover:text-white transition">
                        Features
                    </a>
                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </div>

                {/* Right: Social Icons
                <div className="flex gap-4 text-xl">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaLinkedin />
                    </a>
                </div> */}
            </div>

            <div className="text-center text-xs mt-8 text-gray-600">
                © {new Date().getFullYear()} Spendly. All rights reserved.
            </div>
        </footer>
    );
}

export default App;
