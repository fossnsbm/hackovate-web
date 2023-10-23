import Container from "../Container";
import { useState, useEffect } from "react";

const Scenario = () => {
    const [text, setText] = useState('');

  useEffect(() => {
      const targetText = 'Scenario';
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
                <div className="pt-8 md:pt-12">
                    <h1 className="text-gray text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#F0D268]">
                        {text}
                    </h1>
                    <div className="mt-10 text-base md:text-lg lg:text-2xl text-justify">
                        <div>
                            The Dark Web is a decentralized network of Internet websites that
                            tries to make users as anonymous as possible by routing all their
                            communications through multiple servers and encrypting them at
                            every step. Due to its anonymous nature, the dark web is also used
                            for illegal purposes. This includes buying and selling illegal
                            drugs, weapons, passwords, and stolen identities, as well as
                            trading in illegal weapons and other harmful substances.
                        </div>
                        <div className="mt-5">
                            A hitman wants to buy some guns for his illegal contract, so he
                            tries to buy them at a dark-web illegal gun store. As a software
                            developer, you are the one responsible for developing this web
                            application.
                        </div>
                    </div>

                    <div className="md:flex mt-10 md:mx-56">
                        <div className="border border-white rounded-lg mb-4 md:mb-0 py-10 px-20">
                            <div className="font-bold text-xl uppercase">Guns Prices:</div>
                            <ul>
                                <li className="mt-5">Assault-Rifle: $1000</li>
                                <li className="mt-5">Sniper: $2000</li>
                                <li className="mt-5">Shotgun: $1500</li>
                                <li className="mt-5">Revolver: $500</li>
                                <li className="mt-5">Machine-Gun: $2500 </li>
                                <li className="mt-5">Pistol: $50 </li>
                                <li className="mt-5">RPG: $3000</li>
                                <li className="mt-5">Laser-Gun: $3500</li>
                            </ul>
                        </div>
                        <div className="border border-white rounded-lg p-14 ms-auto py-10 px-16">
                            <div className="font-bold text-xl uppercase">Inventories Prices:</div>
                            <ul>
                                <li className="mt-5">Medi-Kit: $500</li>
                                <li className="mt-5">Molotov: $1000 </li>
                                <li className="mt-5">Grenade: $1500 </li>
                                <li className="mt-5">Knife: $2000 </li>
                                <li className="mt-5">Sword: $2500 </li>
                                <li className="mt-5">Armour: $3000 </li>
                                <li className="mt-5">C4: $3500</li>
                                <li className="mt-5">Landmine: $4000</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Scenario;
