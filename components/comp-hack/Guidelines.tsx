import Container from "../Container";
import { useState, useEffect } from "react";

const Guidelines = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        const targetText = 'GuideLines';
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
                <div className="pb-14 pt-32 md:pt-40">
                    <div className="flex">
                    <p className="text-[#F0D268] text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase">
                        {text}
                    </p>
                    <a href="https://github.com/fossnsbm/hackovate-challenges" target="_blank" className="ButtonMainstyles__StyledButtonMain-sc-1f8wtna-0 kMzRJv ms-10 blinking-glow-button" style={{fontWeight:"bold"}}>View on Github</a>
                    </div>
                   
                    <div className="mt-8">
                        <ul className="list-disc pl-6 space-y-5">
                            <li className="text-base md:text-lg lg:text-2xl">
                                You have 2 hours to complete 5 issues.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Fork the repository first (only fork the main branch).
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                You have five issues to complete. Try to complete them <span className="text-[#F0D268]">one by one from issue #1</span>
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                You need to create pull requests for each issue.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Ensure that you create a pull request for the specific branch created for you, with your GitHub username, in the <a href="https://github.com/fossnsbm/hackovate-challenges" className="text-[#F0D268]">fossnsbm/hackovate-challenges</a> repository.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Pull request topic should follow the format <span className="text-[#F0D268]">`#{'<'}issue-number{'>'}-{'<'}GitHub-username{'>'}`</span> <br />
                                Example: #2-ravindu0823.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Add a specific<span className="text-[#F0D268]"> issue number label</span> to your PR that we already created for you.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Your code should fulfill all the functionalities and requirements mentioned in this particular issue.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Your code should be genuine; if it{"'"}s like spam, AI-generated, or likewise, your PR will be automatically rejected.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                Utilize HTML, CSS, and JavaScript as the core technologies in your source code. You are allowed to incorporate external libraries such as Tailwind CSS, Bootstrap, etc., to enhance your development. Feel free to explore and use CDNs as per your preference.
                            </li>
                            <li className="text-base md:text-lg lg:text-2xl">
                                If your pull request does not meet these guidelines, it will be rejected.
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default Guidelines;