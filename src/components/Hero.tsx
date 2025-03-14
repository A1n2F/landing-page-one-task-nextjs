"use client"

import Image from "next/image"
import arrowRight from "../assets/icons/arrowRight.svg"
import cursorImg from "../assets/images/cursor.png"
import messageImg from "../assets/images/message.png"

import { motion } from "framer-motion"

export function Hero() {
    return (
        <div className="relative overflow-clip bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24]">
            
            <div className="absolute w-[750px] h-[375px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2
            border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
            
            <div className="relative px-4 container mx-auto">
                <div className="flex items-center justify-center">
                    <a href="#" className="inline-flex gap-3 py-1 px-2 rounded-lg border border-white/30">
                        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 2.0 is here</span>
                        <span className="inline-flex items-center gap-1">
                            <span>Read More</span>
                            <Image
                                src={arrowRight}
                                alt="arrow icon"
                            />
                        </span>
                    </a>
                </div>
                
                <div className="flex justify-center my-8">
                    <div className="inline-flex relative">
                        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
                            One Task <br /> at a Time
                        </h1>

                        <motion.div className="absolute right-[476px] top-[108px] hidden sm:inline"
                        drag
                        dragSnapToOrigin
                        >
                            <Image
                                src={cursorImg}
                                alt="cursor image"
                                width={200}
                                height={200}
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>

                        <motion.div className="absolute top-[56px] left-[498px] hidden sm:inline"
                        drag
                        dragSnapToOrigin
                        >
                            <Image
                                src={messageImg}
                                alt="message image"
                                width={200}
                                height={200}
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>

                    </div>
                </div>

                <div className="flex justify-center">
                    <p className="text-xl text-center max-w-md">
                        Celebrate the joy of accomplishment with an app designed to track your progress, 
                        motivate your efforts, and celebrate your successes.
                    </p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button className="bg-white text-black py-3 px-5 rounded-lg font-medium cursor-pointer
                    hover:bg-[#DEDEDE] transition-colors">
                        Get for free
                    </button>
                </div>
            </div>


        </div>
    )
}