'use client'
import {motion} from "framer-motion";

export default function AboutPage() {
    return (
        <motion.main className="text-white"
                     initial={{backgroundPosition: "100px 0, 0 0"}}
                     animate={{backgroundPosition: ["100px 0, 0 0", "100px 100%, 0 100%"]}}
                     transition={{
                         ease: "linear",
                         duration: 55,
                         repeat: Infinity
                     }}>
            XD
        </motion.main>
            )
            }