"use client";

import LongFooter from "@/components/LongFooter";
import NavBar from "@/components/NavBar";
import Guidelines from "@/components/comp-hack/Guidelines";
import Issues from "@/components/comp-hack/Issues";
import Scenario from "@/components/comp-hack/Scenario";
import GiftsChart from "@/components/comp-hack/GiftsChart";


const startHacking = () => {
    return (
        <>
            <NavBar />
            <Guidelines />
            <Scenario />
            <Issues />
            <GiftsChart />
            <div className="ms-10 md:ms-36 pb-0 md:pb-6 pt-10 md:pt-28 animate-pulse italic">
                <p className="text-[#F0D268] text-gray text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase">
                    Happy Hacking!
                </p>
            </div>
            <LongFooter />
        </>
    );
};

export default startHacking;
