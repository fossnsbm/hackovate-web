"use client";

import LongFooter from "@/components/LongFooter";
import NavBar from "@/components/NavBar";
import Guidelines from "@/components/comp-hack/Guidelines";
import Issues from "@/components/comp-hack/Issues";
import Scenario from "@/components/comp-hack/Scenario";


const startHacking = () => {
    return (
        <>
            <NavBar />
            <Guidelines />
            <Scenario />
            <Issues />
            <LongFooter />
        </>
    );
};

export default startHacking;
