import React from 'react';

const Hero = () => {
    return (
        <main className="relative pt-28 pb-14 bg-hero-background bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-white flex flex-col gap-5 justify-center items-center max-w-screen-xl mx-auto">
                <div id="logo" className='w-full'>
                    <img className="mx-auto w-2/5"  src="https://jetlevel.com/wp-content/uploads/elementor/thumbs/logo-1-e1710877312297-qlgf0c3jj2c1ku6jq6hdej8sx2inzrzlqvtpb6j0i4.png" title="logo" alt="site logo" />
                </div>

                {/* Iframe */}
                <div id="iframe" className='w-11/12 bg-white h-40'></div>
                <h1 className='text-[50px] leading-[55px] pt-6 text-center'>
                    Fly with <span className='border-b-[3px] h-2 border-transparent border-b-[#0071ba]'>Confidence!</span>
                </h1>
                <h2 className='text-3xl leading-[30px] pt-6 text-center'>
                    Charter Your Private Jet Today and Experience Seamless, Personalized Travel
                </h2>
            </div>
        </main>
    );
};

export default Hero;
