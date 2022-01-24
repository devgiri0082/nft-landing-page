import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function Upload() {
    return (
        <div className="">
            <div className="flex justify-between mb-4">
                <div className="font-bold text-lg text-white">Upload File</div>
                <div className="text-gray-500">Drag or <span className="text-gray-300 cursor-pointer">choose</span> your file to upload</div>
            </div>
            <div className="w-full h-[400px] overflow-hidden rounded-md relative">

                <Image layout="fill" objectFit="cover" alt="" src="https://images.unsplash.com/photo-1640231912426-0d5feab0b9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" />
                <FontAwesomeIcon className="absolute text-white top-2 right-2 cursor-pointer" icon={faWindowClose}></FontAwesomeIcon>
            </div>

        </div>
    );
}
