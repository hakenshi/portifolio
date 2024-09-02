'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import PalmTree from "@/components/PalmTree";
import VaporwaveSun from "@/components/VaporwaveSun";

export default function Home() {
  return (
      <>
          <motion.main className="text-white"
                       initial={{backgroundPosition: "100px 0, 0 0"}}
                       animate={{backgroundPosition: ["100px 0, 0 0", "100px 100%, 0 100%"]}}
                       transition={{
                           ease: "linear",
                           duration: 55,
                           repeat: Infinity
                       }}>
              <section
                  className={`flex flex-col items-center justify-center h-[80vh] font-bold text-4xl md:text-7xl gap-2`}>
                  <h1 className="z-30 font-[axis] text-shadow text-stroke">WELCOME TO MY</h1>
                  <span className="font-[axis] z-30 text-shadow text-stroke">PORTIFOLIO</span>
                  <div className={"w-full flex justify-center items-center gap-5 absolute z-20"}>
                    <VaporwaveSun />
                  </div>
                  <div className={"w-full flex justify-center items-center gap-5 absolute z-10"}>
                      <div className={"palmtree-right"}>
                          <PalmTree/>
                      </div>
                      <div className={"palmtree-left"}>
                          <PalmTree/>
                      </div>
                  </div>
              </section>
          </motion.main>
      </>
  );
}
