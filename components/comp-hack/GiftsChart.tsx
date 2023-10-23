import Container from "../Container";
import { useState, useEffect } from "react";
import Image from "next/image";

const GiftsChart = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const targetText = 'Achievements-Chart';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex <= targetText.length) {
                setText(targetText.slice(0, currentIndex));
                currentIndex += 1;
            } else {
                clearInterval(intervalId);
            }
        }, 100); // Adjust the interval based on your preference

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <Container>
                <div className="pt-8 md:pt-24">
                    <h1 className="text-gray text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#F0D268]">
                        {text}
                    </h1>
                    <div className="mt-16 text-base md:text-lg lg:text-2xl text-justify">
                        <table className="w-full border-collapse">
                            <tbody>
                                <tr>
                                    <td className="border p-2 flex items-center justify-center">
                                        {/* Use an image component or an img tag */}
                                        <Image
                                            src="/assets/sp.jpg"
                                            alt="Foss-Logo"
                                            width={250}
                                            height={250}
                                        />
                                    </td>
                                    <td className="border ps-20">
                                        {/* Add your text content */}
                                        ISSUE #1 - First 20 Approved PRs (GitHub Sp Stickers)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2 flex items-center justify-center">
                                        {/* Use an image component or an img tag */}
                                        <Image
                                            src="/assets/npms.webp"
                                            alt="Foss-Logo"
                                            width={250}
                                            height={250}
                                        />
                                    </td>
                                    <td className="border ps-20">
                                        {/* Add your text content */}
                                        ISSUE #2 - First 15 Approved PRs (NPM Stickers)
                                    </td>
                                </tr>
                                <tr>
                                <td className="border p-2 flex items-center justify-center">
                                        {/* Use an image component or an img tag */}
                                        <Image
                                            src="/assets/pack.jpg"
                                            alt="Foss-Logo"
                                            width={250}
                                            height={250}
                                        />
                                    </td>
                                    <td className="border ps-20">
                                        {/* Add your text content */}
                                        ISSUE #3 - First 10 Approved PRs (Sticker Pack)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2 flex items-center justify-center">
                                        {/* Use an image component or an img tag */}
                                        <Image
                                            src="/assets/mona.jpg"
                                            alt="Foss-Logo"
                                            width={250}
                                            height={250}
                                        />
                                    </td>
                                    <td className="border ps-20">
                                        {/* Add your text content */}
                                        ISSUE #4 - First 2 Approved PRs (Mona Figure)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border p-2 flex items-center justify-center">
                                        {/* Use an image component or an img tag */}
                                        <Image
                                            src="/assets/suprise.jpg"
                                            alt="Foss-Logo"
                                            width={250}
                                            height={250}
                                        />
                                    </td>
                                    <td className="border ps-20">
                                        {/* Add your text content */}
                                        ISSUE #5 - First Approved PR (Surprise Gift)
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default GiftsChart;
