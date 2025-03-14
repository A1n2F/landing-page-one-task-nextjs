"use client"

import Image from "next/image"

import plusIconImg from "../assets/icons/plusIcon.svg"
import minusIconImg from "../assets/icons/minusIconImg.svg"
import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

const items = [
    {
        questions: "What payment methods do you accept?",
        answer: "We Accept all major credit cards, PayPal, and various others payments methods depending on your location. Please contact our support.",
    },
    {
        questions: "How does the pricing work for teams",
        answer: "We Accept all major credit cards, PayPal, and various others payments methods depending on your location. Please contact our support.",
    },
    {
        questions: "Can I change my plan later?",
        answer: "We Accept all major credit cards, PayPal, and various others payments methods depending on your location. Please contact our support.",
    },
    {
        questions: "Is my data secure?",
        answer: "We Accept all major credit cards, PayPal, and various others payments methods depending on your location. Please contact our support.",
    },
]

const AccordianItem = ({ questions, answer}: {questions: string, answer: string}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)} key={answer}>
            <div className="flex items-center cursor-pointer">
                <span className="flex-1 text-lg font-bold">{questions}</span>
                {isOpen ? (
                    <Image
                    src={minusIconImg}
                    alt="Minus Icon"
                    className="w-5 h-5 text-white"
                    />
                ): 
                    <Image
                        src={plusIconImg}
                        alt="Plus Icon"
                    />
                }
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px"
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                        >
                            {answer}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export function FAQs() {
    return (
        <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
            <div className="px-4 container mx-auto">
                <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] sm:mx-auto font-bold tracking-tighter">Frequently asked questions</h2>
                <div className="mt-12 max-w-[648px] mx-auto">
                    {items.map(({ questions, answer},i) => (
                        <AccordianItem
                            questions={questions}
                            answer={answer}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}