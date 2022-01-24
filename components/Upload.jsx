import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
export default function Upload() {
    const [imageIsLoaded, setImageIsLoaded] = useState(false)
    const animationControls = useAnimation();
    useEffect(
        () => {
            if (imageIsLoaded) {
                animationControls.start("visible");
            }
        },
        [imageIsLoaded]
    );
    return (
        <div className="">
            <div className="flex justify-between mb-4">
                <div className="font-bold text-lg text-white">Upload File</div>
                <div className="text-gray-500">Drag or <span className="text-gray-300 cursor-pointer">choose</span> your file to upload</div>
            </div>
            <div className="w-full h-[400px] overflow-hidden rounded-md drop-shadow-xl relative">
                <motion.div initial={"hidden"}
                    animate={animationControls}
                    variants={animationVariants}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <Image onLoad={event => {
                        const target = event.target;
                        // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
                        if (target.src.indexOf('data:image/gif;base64') < 0) {
                            setImageIsLoaded(true)
                        }
                    }} layout="fill" objectFit="cover" alt="" src="https://images.unsplash.com/photo-1640231912426-0d5feab0b9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" />
                </motion.div>
                <FontAwesomeIcon className="absolute text-white top-2 right-2 cursor-pointer" icon={faWindowClose}></FontAwesomeIcon>

            </div>

        </div>
    );
}
