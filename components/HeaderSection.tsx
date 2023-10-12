import Image from 'next/image';

const HeaderSection = () => {
    return (
        <section className='lg:mx-36 mx-12 mt-16'>

            <div className="Herostyles__StyledHeroContainer-sc-ofav2u-1 cQvurY">
                <div className="Herostyles__StyledHeroContent-sc-ofav2u-2 iUyscg">
                    <h1 className="Herostyles__StyledHeroTitle-sc-ofav2u-3 bAidkr">
                        <strong>Join us</strong> in soarking innovation and coding excellence!
                    </h1>
                    <div className="Herostyles__StyledHeroPresented-sc-ofav2u-4 hlOluo">
                        <div className="Sponsorsstyles__StyledSponsors-sc-1s3hmyw-0 hYucrB">
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
                                        alt="Foss-Logo"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/assets/devlabLogo.png"
                                        alt="Foss-Logo"
                                        width={100}
                                        height={100}
                        
                                    />
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Herostyles__StyledHeroCountdown-sc-ofav2u-5 iRMidE">
                    <div className="Herostyles__StyledCountdownHeader-sc-ofav2u-6 SUZBL">HACKOVATE registration
                        is open now!</div>
                    <div className="Herostyles__StyledCountdown-sc-ofav2u-7 gvCEVc">
                        <div className="Herostyles__StyledCountdownItem-sc-ofav2u-8 jnVmAU">
                            <p>
                                <span>00</span>
                                Days
                            </p>
                        </div>
                        <div className="Herostyles__StyledCountdownItem-sc-ofav2u-8 jnVmAU">
                            <p>
                                <span>00</span>
                                Hours
                            </p>
                        </div>
                        <div className="Herostyles__StyledCountdownItem-sc-ofav2u-8 jnVmAU">
                            <p>
                                <span>00</span>
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
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                            <div className="Herostyles__StyledCountdownLoadingItem-sc-ofav2u-12 jSlIIA"></div>
                        </div>
                    </div>
                    <a href="/auth/" className="ButtonMainstyles__StyledButtonMain-sc-1f8wtna-0 kMzRJv">Register now!</a>
                </div>
            </div>

        </section>
    )
}

export default HeaderSection;