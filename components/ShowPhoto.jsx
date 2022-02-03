import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export default function ShowPhoto() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (imageIsLoaded) {
      animationControls.start("visible");
    }
  }, [imageIsLoaded]);
  return (
    <div className="">
      <div className="font-bold text-lg text-white mb-4">Preview</div>
      <div className="h-[370px] rounded-xl py-3  bg-[rgb(52,52,52)]">
        <div className="flex mb-2 justify-between  px-4">
          <div className="flex gap-4">
            <div className="relative">
              <Image
                src="https://i.imgur.com/z4YSzDD.jpg"
                className="rounded-full"
                alt=""
                height={40}
                width={40}
              />
            </div>
            <div>
              <div className="text-gray-500 text-sm">Owned by</div>
              <div className="text-white text-md">Yuri Gorait</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon
              className="cursor-pointer text-white"
              icon={faHeart}></FontAwesomeIcon>
            <FontAwesomeIcon
              className="cursor-pointer text-white"
              icon={faEllipsisH}></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-full h-2/3 overflow-hidden relative drop-shadow-xl">
          <motion.div
            initial={"hidden"}
            animate={animationControls}
            variants={animationVariants}
            transition={{ ease: "easeOut", duration: 1 }}>
            <Image
              layout="fill"
              onLoad={(event) => {
                const target = event.target;
                // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
                if (target.src.indexOf("data:image/gif;base64") < 0) {
                  setImageIsLoaded(true);
                }
              }}
              objectFit="cover"
              alt=""
              src="https://images.unsplash.com/photo-1640231912426-0d5feab0b9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            />
          </motion.div>
        </div>
        <div className="px-4 mt-2">
          <div className="text-lg text-white">Non Fungible Token</div>
          <div className="text-sm  text-gray-500">
            Not for sale <span className="text-gray-200">04 out of 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
