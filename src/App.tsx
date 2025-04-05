"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

export default App;
