import Image from "next/image"

import social1Img from "../assets/icons/socials.png"
import social2Img from "../assets/icons/socials-1.png"
import social3Img from "../assets/icons/Socials-2.png"
import social4Img from "../assets/icons/Socials-3.png"
import social5Img from "../assets/icons/Socials-4.png"
import social6Img from "../assets/icons/Socials-5.png"

export function Footer() {
    return (
        <footer className="bg-black text-white/60 py-5 border-t border-white/20">
            <div className="px-4 container mx-auto">
                <div className="flex  flex-col gap-4 sm:flex-row sm:justify-between">
                    <div className="text-center">@ 2024 Your Company, Inc. All rights reserved</div>
                    <ul className="flex justify-center gap-2.5">
                        <li><Image src={social1Img} alt=""/></li>
                        <li><Image src={social2Img} alt=""/></li>
                        <li><Image src={social3Img} alt=""/></li>
                        <li><Image src={social4Img} alt=""/></li>
                        <li><Image src={social5Img} alt=""/></li>
                        <li><Image src={social6Img} alt=""/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}