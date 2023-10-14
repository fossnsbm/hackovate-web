"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';

const HeaderSection = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });
    // Set the target date and time for the countdown
    const targetDate = new Date('2023-10-21T00:00:00');
    useEffect(() => {
        // Function to update the countdown
        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeDifference: number = targetDate.getTime() - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            setCountdown({
                days,
                hours,
                minutes,
            });
        };

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <section className='lg:px-36 px-12 pt-16'style={{ backgroundImage: 'url("assets/red-grid.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="Herostyles__StyledHeroContainer-sc-ofav2u-1 cQvurY pt-12 md:pt-14">
                <div className="Herostyles__StyledHeroContent-sc-ofav2u-2 iUyscg">
                    <h1 className="Herostyles__StyledHeroTitle-sc-ofav2u-3 bAidkr">
                        <strong>Join us</strong> in sparking innovation and coding excellence!
                    </h1>
                    <div className="Herostyles__StyledHeroPresented-sc-ofav2u-4 hlOluo">
                        <div className="Sponsorsstyles__StyledSponsors-sc-1s3hmyw-0 hYucrB">
                            <div className='font-bold text-xl md:space-x-24 mb-10 mt-10 md:flex space-y-4 md:space-y-0'>
                                <div> <FontAwesomeIcon icon={faCalendar} /> Oct 23, 2023</div>
                                <div> <FontAwesomeIcon icon={faBuilding} /> FOC-B1-L101</div>
                                <div> <FontAwesomeIcon icon={faClock} /> 9AM - 12 PM</div>
                            </div>
                            <div className="Sponsorsstyles__StyledSponsorsTitle-sc-1s3hmyw-1 Cxcci">Organized by</div>
                            <div className="Sponsorsstyles__StyledSponsorsList-sc-1s3hmyw-2 gDStNp">

                                <Image
                                    src="/assets/fossLogo.png"
                                    alt="Foss-Logo"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="/assets/wifLogo.png"
                                    alt="wifLogo"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="/assets/devlab-Logo.png"
                                    alt="devlabLogo"
                                    width={100}
                                    height={100}

                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Herostyles__StyledHeroCountdown-sc-ofav2u-5 iRMidE md:mt-16">
                    <div className="Herostyles__StyledCountdownHeader-sc-ofav2u-6 SUZBL">HACKOVATE registration
                        is open for</div>
                    <div className="Herostyles__StyledCountdown-sc-ofav2u-7 gvCEVc">
                        <div className="Herostyles__StyledCountdownItem-sc-ofav2u-8 jnVmAU font-mono">
                            <p>
                                <span>{countdown.days}</span>
                                Days
                            </p>
                        </div>
                        <div className="Herostyles__StyledCountdownItem-sc-ofav2u-8 jnVmAU font-mono">
                            <p>
                                <span>{countdown.hours}</span>
                                Hours
                            </p>
                        </div>
                        <div className="Herostyles__StyledCountdownItem-sc-ofav2u-8 jnVmAU font-mono">
                            <p>
                                <span>{countdown.minutes}</span>
                                Minutes
                            </p>
                        </div>
                    </div>
                    <div className="Herostyles__StyledCountdownLoading-sc-ofav2u-9 fbTMEX">
                        <div className="Herostyles__StyledCountdownLoadingBorder-sc-ofav2u-10 fxwEcz">
                            <svg viewBox="0 0 474 36" preserveAspectRatio="none">
                                <rect x=".5" y=".5" width="473" height="35" rx="8" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6,6" vector-effect="non-scaling-stroke"></rect>
                            </svg>
                        </div>
                        <div className="Herostyles__StyledCountdownLoadingContainer-sc-ofav2u-11 jkWZUQ">
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: countdown.days >= 7 ? '#EC4237' : '',
                            }}></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: countdown.days >= 6 ? '#EC4237' : '',
                            }}></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: countdown.days >= 5 ? '#EC4237' : '',
                            }}></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: countdown.days >= 4 ? '#EC4237' : '',
                            }}></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: countdown.days >= 3 ? '#EC4237' : '',
                            }}></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: countdown.days >= 2 ? '#EC4237' : '',
                            }}></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA" style={{
                                backgroundColor: (countdown.minutes >= 1 && countdown.days >= 1) ? '#EC4237' : '',
                            }}></div>

                        </div>
                    </div>
                    <Link href="/events/hackovate/register" className="ButtonMainstyles__StyledButtonMain-sc-1f8wtna-0 kMzRJv ">
                        <p className='font-bold'>Register now!</p>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default HeaderSection;