import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ShowPhoto() {
    return (
        <div className="">
            <div className="font-bold text-lg text-white mb-4">Preview</div>
            <div className="h-[370px] rounded-xl py-3  bg-[rgb(52,52,52)]">
                <div className="flex mb-2 justify-between  px-4">
                    <div className="flex gap-4">
                        <div className="relative">
                            <Image src="https://i.imgur.com/z4YSzDD.jpg" class="rounded-full" alt="" height={40} width={40} />
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">
                                Owned by
                            </div>
                            <div className="text-white text-md">Yuri Gorait</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon className="cursor-pointer text-white" icon={faHeart}></FontAwesomeIcon>
                        <FontAwesomeIcon className="cursor-pointer text-white" icon={faEllipsisH}></FontAwesomeIcon>
                    </div>

                </div>
                <div className="w-full h-2/3 overflow-hidden relative">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        src="https://images.unsplash.com/photo-1640231912426-0d5feab0b9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                    />
                </div>
                <div className="px-4 mt-2">
                    <div className="text-lg text-white">Non Fungible Token</div>
                    <div className="text-sm  text-gray-500">Not for sale <span className="text-gray-200">04 out of 100</span></div>
                </div>
            </div>
        </div>
    );
}
