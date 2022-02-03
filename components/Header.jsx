import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallets/Connectors";
import Image from "next/image";

export default function Header() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="w-full px-8 py-4 bg-[rgb(32,32,33)] flex justify-between">
      <div className="flex gap-4 items-center">
        <div className="text-white text-lg font-bold bg-[rgb(40,40,40)] rounded-full flex justify-center items-center px-1 py-2">
          NFT
        </div>
        <div className="w-full">
          <div className="relative w-full">
            <FontAwesomeIcon
              className="absolute text-gray-400 top-3 left-4"
              icon={faSearch}></FontAwesomeIcon>
            <input
              placeholder="search by item, creator or collection"
              type="text"
              className="bg-[rgb(47,46,46)] h-10 w-[400px] px-12 rounded-lg focus:outline-none hover:cursor-pointer"
              name=""
            />
          </div>
        </div>
        <div className="text-gray-300">Artwork</div>
        <div className="text-gray-300">Artists</div>
      </div>
      {!active && (
        <div
          onClick={connect}
          className="bg-[rgb(254,0,155)] cursor-pointer hover:bg-[rgb(254,0,180)] px-4 py-2 flex justify-center items-center rounded-md text-white">
          Connect wallet
        </div>
      )}
      {active && (
        <div className="relative group">
          <Image
            onClick={disconnect}
            src="https://i.imgur.com/z4YSzDD.jpg"
            className="rounded-full cursor-pointer"
            alt=""
            height={40}
            width={40}
          />
          <div className="absolute transition-all duration-500 ease-in-out cursor-pointer  opacity-0 group-hover:opacity-80 flex flex-col text-white justify-center items-center bg-[rgb(100,100,100)] -left-[350px] shadow-lg rounded-lg px-4 py-2 ">
            <div>Account Address:</div>
            {account}
            <div className="absolute -top-3 right-10 text-[rgb(100,100,100)]">
              &#9650;
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
