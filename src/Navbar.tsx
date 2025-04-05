import github_logo from "./assets/github-mark-white.svg";

export default function Navbar({
    changeThemeDrill,
}: {
    changeThemeDrill: () => void;
}) {
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
