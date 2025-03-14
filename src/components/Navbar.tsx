import Image from "next/image"
import logoImg from "../assets/images/logosaas.png"
import menuImg from "../assets/icons/menu.svg"

export function Navbar() {
    return (
        <div className="bg-black">
            <div className="px-4 container mx-auto">
                <div className="py-4 flex items-center justify-between">
                    <div className="relative">
                            <Image
                                src={logoImg}
                                alt="logo Image"
                                className="w-12 h-12 relative"
                            />     
                    </div>

                    <div className="border border-white opacity-30 w-10 h-10 inline-flex items-center justify-center rounded-lg sm:hidden">
                        <Image
                            src={menuImg}
                            alt="menu icon"
                            className="text-white"
                        />   
                    </div>

                    <nav className="gap-6 items-center hidden sm:flex">
                        <a href="#" className="text-white opacity-60 hover:opacity-100 transition-all">About</a>
                        <a href="#" className="text-white opacity-60 hover:opacity-100 transition-all">Features</a>
                        <a href="#" className="text-white opacity-60 hover:opacity-100 transition-all">Updates</a>
                        <a href="#" className="text-white opacity-60 hover:opacity-100 transition-all">Help</a>
                        <a href="#" className="text-white opacity-60 hover:opacity-100 transition-all">Costumers</a>
                        
                        <button className="bg-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#DEDEDE] transition-colors">
                            Get for free
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}