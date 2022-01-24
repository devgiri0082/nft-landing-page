import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className="w-full px-8 py-4 bg-[rgb(32,32,33)] flex justify-between">
            <div className="flex gap-4 items-center">
                <div className="text-white text-lg font-bold bg-[rgb(40,40,40)] rounded-full flex justify-center items-center px-1 py-2">NFT</div>
                <div className="w-full">
                    <div className="relative w-full">
                        <FontAwesomeIcon className="absolute text-gray-400 top-3 left-4" icon={faSearch}></FontAwesomeIcon>
                        <input placeholder="search by item, creator or collection" type="text" className="bg-[rgb(47,46,46)] h-10 w-[400px] px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
                    </div>
                </div>
                <div className="text-gray-300">Artwork</div>
                <div className="text-gray-300">Artists</div>
            </div>
            <div className="bg-[rgb(254,0,155)] px-4 py-2 flex justify-center items-center rounded-md text-white">Add wallet</div>
        </div>
    )
}
