"use client";
import { Collection, table } from "@/lib/table";
import compoundAbi from "./compound_abi.json";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ethMantissa, formatNumber, getApy } from "@/lib/utils";
import Header from "./components/header";
import Loading from "./components/loading";

export default function Home() {

  const [collectionv2, setCollectionv2] = useState({} as Collection);

  useEffect(() => {
    calculateV2();
  }, []);

  async function calculateV2() {
    table.map(async (s) => {
      // let url = "YOUR_API_PROVIDER";
      // let provider = new ethers.providers.JsonRpcProvider(url);

      let provider =new ethers.providers.Web3Provider(window.ethereum)
      const contractVote = new ethers.Contract(
        s.address,
        compoundAbi,
        provider
      );
      try {
        const _supply = await contractVote.supplyRatePerBlock();
        const _borrow = await contractVote.borrowRatePerBlock();

        const supplyApy = getApy(parseInt(_supply._hex, 16))
        const borrowApy = getApy(parseInt(_borrow._hex, 16))

        const _tsupply = await contractVote.totalSupply();
        const _tborrow = await contractVote.totalBorrows();
        const _exchangeRateStored = await contractVote.exchangeRateStored();

        const exchange = parseInt(_exchangeRateStored._hex, 16) / ethMantissa;
        const totalBorrow = parseInt(_tborrow._hex, 16) / 10 ** s.decimals;
        const totalSupply =
          (parseInt(_tsupply._hex, 16) * exchange) / 10 ** s.decimals;

        const util = (totalBorrow / totalSupply) * 100;

        setCollectionv2((v2) => ({
          ...v2,
          [s.pool as keyof Collection]: {
            supplyApy,
            borrowApy,
            totalSupply,
            totalBorrow,
            util,
          },
        }));
      } catch (err) {
        console.log("Error: ", err);
      }
    });
  }

  return (
    <>
      <Header />
      {table.map((asset, index) => {
        let symbol = asset.pool;
        let loading = Object.keys(collectionv2).length != table.length;
        return loading ? (
          <Loading key={"table-key-" + index} />
        ) : (
          <div
            className={`grid grid-cols-6 gap-4 border-x-2 border-b-2 border-black last:rounded-b-md justify-items-center bg-white
            hover:bg-[#A388EE]`}
            key={"table-key-" + index}
          >
            <div className="px-6 py-4 font-semibold whitespace-nowrap">
              {symbol}
            </div>
            <div
              className={`px-6 py-4 font-semibold whitespace-nowrap hover:text-lg ${
                collectionv2[symbol].util > 80
                  ? "text-[#FF6B6B]"
                  : "text-[#90EE90]"
              }`}
            >
              {collectionv2[symbol].util.toFixed(2)}%
            </div>
            <div className="px-6 py-4 font-semibold whitespace-nowrap hover:text-lg">
              {collectionv2[symbol].supplyApy.toFixed(2)}%
            </div>
            <div className="px-6 py-4 font-semibold whitespace-nowrap  hover:text-lg">
              {collectionv2[symbol].borrowApy.toFixed(2)}%
            </div>
            <div className="px-6 py-4 font-semibold whitespace-nowrap  hover:text-lg">
              {formatNumber(collectionv2[symbol].totalSupply)} {symbol}
            </div>
            <div className="px-6 py-4 font-semibold whitespace-nowrap  hover:text-lg">
              {formatNumber(collectionv2[symbol].totalBorrow)} {symbol}
            </div>
          </div>
        );
      })}
    </>
  );
}
