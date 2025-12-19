'use client'

const Home = () => {
    return (
        <section className="h-screen scroll-smooth text-center lg:flex w-full flex-col items-center justify-center gap-12 px-10 lg:flex-row md:gap-50 overflow-hidden mt-30 lg:mt-0  ">

            {/* Text Content */}
            <div className="mx-auto lg:mx-0 max-w-xl text-center lg:text-left space-y-4">
                {/* Greeting */}
                <h1 className="text-4xl font-sans font-bold leading-tight sm:text-5xl md:text-6xl">
                    Hi 👋, <br /> I&apos;m{' '}
                    <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Monal Kavithra
                    </span>
                </h1>

                {/* Role with subtle highlight */}
                <h2 className="mt-2 hidden lg:block text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    <span className="text-purple-500">Web Developer</span> &nbsp;·&nbsp; <span className="text-blue-500">UI/UX Engineer</span>
                </h2>

                {/* Short, punchy description */}
                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Crafting <span className="font-medium text-purple-500">modern web applications</span> with clean, responsive designs. Passionate about <span className="font-medium text-blue-500">AI & Machine Learning</span>.
                </p>

                {/* Profile Blob small*/}
                <div className="mt-4 flex relative lg:hidden justify-center items-center">
                    <div
                        className="
                            blob
                            relative
                            h-50 w-50 sm:h-80 sm:w-80 md:h-96 md:w-96
                            rounded-full
                            overflow-hidden
                            border-2 border-purple-300 dark:border-purple-700
                            shadow-xl
                            animate-[blobMorph_10s_ease-in-out_infinite]
                            profile
                        "
                    ></div>

                </div>

                {/* Call-to-Actions */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                        View My Work
                    </button>
                    <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all duration-200">
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Profile Blob */}
            <div className="hidden relative lg:flex justify-center items-center">
                <div
                    className="
                            blob
                            relative
                            h-54 w-54 sm:h-80 sm:w-80 md:h-96 md:w-96
                            rounded-full
                            overflow-hidden
                            border-2 border-purple-300 dark:border-purple-700
                            shadow-xl
                            animate-[blobMorph_10s_ease-in-out_infinite]
                        "
                >
                    <div
                        className="
                            blob
                            relative
                            h-50 w-50 sm:h-80 sm:w-80 md:h-96 md:w-96
                            rounded-full
                            overflow-hidden
                            border-2 border-purple-300 dark:border-purple-700
                            shadow-xl
                            animate-[blobMorph_10s_ease-in-out_infinite]
                            profile
                        "
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default Home
