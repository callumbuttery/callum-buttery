export default function NavBar() {
    return (
        <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="">
            <nav className="bg-transparent h-24 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-transparent">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex mx-auto justify-center w-full">
                        <ul className="pt-7 flex p-4 mt-4 md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium ">
                            <li>
                                <a href="#" className="text-lg block py-2 pl-5 pr-5 text-white hover:text-[#ffd60a] hover:bg-[#ffd60a] md:hover:bg-transparent md:p-0" aria-current="page">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg block py-2 pl-5 pr-5 text-white hover:text-[#ffd60a] hover:bg-[#ffd60a] md:hover:bg-transparent md:p-0">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg block py-2 pl-5 pr-5 text-white hover:text-[#ffd60a] hover:bg-[#ffd60a] md:hover:bg-transparent md:p-0">CV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}