"use client"
import Image from "next/image"

import { motion } from "framer-motion"

import acmeLogo from "../assets/images/acme.png"
import apexLogo from "../assets/images/apex.png"
import celestiaLogo from "../assets/images/celestia.png"
import pulseLogo from "../assets/images/pulse.png"
import echoLogo from "../assets/images/echo.png"
import quantumLogo from "../assets/images/quantum.png"

const images = [
    {src: acmeLogo, alt: "acme logo"},
    {src: apexLogo, alt: "apex logo"},
    {src: celestiaLogo, alt: "celestia logo"},
    {src: pulseLogo, alt: "pulse logo"},
    {src: echoLogo, alt: "echo logo"},
    {src: quantumLogo, alt: "quantum logo"},
]

export function LogoTicker() {
    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="  mx-auto">
                <h2 className="text-xl text-center text-white/70">Trusted by the world’s most innovative teams</h2>
                <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute
                before:h-full after:h-full before:w-5 after:w-5 relative after:right-0
                before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]
                after:bg-[linear-gradient(left,#000,rgb(0,0,0,0))]">
                    <motion.div className="flex gap-16 flex-none pr-16"
                    transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: "-50%" }}
                    >
                        {images.map(({src, alt}) => (
                            <Image
                                src={src}
                                alt={alt}
                                className="flex-none w-auto h-8"
                                key={alt}
                            />
                        ))}

                        {images.map(({src, alt}) => (
                            <Image
                                src={src}
                                alt={alt}
                                className="flex-none w-auto h-8"
                                key={alt}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}