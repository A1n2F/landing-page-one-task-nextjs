import Image from "next/image"

import frameImg from "../assets/icons/frame.png"
import { Feature } from "./Feature"

const features = [
    {
        title: "Integration ecosystem",
        description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    },
    {
        title: "Goal setting and tracking",
        description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
    {
        title: "Secure data encryption",
        description: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    },
]

export function Features() {
    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="px-4 container mx-auto">
                <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center mt-5 text-xl text-white/70">
                        Enjoy customizable lists, team work tools, and smart tracking all in one place. 
                        Set tasks, get reminders, and see your progress simply and quickly.
                    </p>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row md:max-w-[1120px] md:mx-auto gap-4">
                    {features.map(({title, description}) => (
                        <Feature 
                            key={title}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}