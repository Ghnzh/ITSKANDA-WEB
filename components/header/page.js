const Header = ({judul, desc}) => {
    return (
        <div data-aos="fade-down" className="h-screen text-center">
            <div className="h-[60%] w-full bg-ijo flex flex-col items-center justify-center pt-4">
            <h1 data-aos="fade-right" className="text-[40px] font-bold lg:mt-6 md:text-5xl lg:text-6xl text-kuning max-w-md lg:max-w-full">{judul}</h1>
            <p data-aos="fade-left" className="text-cream text-lg lg:text-xl lg:mt-2">{desc}</p>
            </div>
            <div className='w-full lg:-mt-52 -mt-14'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 260" fill="none">
                <path d="M1280 200.675L1237.33 214.031C1194.67 226.887 1109.33 254.346 1024 247.232C938.667 240.616 853.333 200.675 768 200.675C682.667 200.675 597.333 240.616 512 253.972C426.667 266.828 341.333 254.346 256 240.616C170.667 226.887 85.3334 214.405 42.6666 207.29L0 200.675V0.970184H42.6666C85.3334 0.970184 170.667 0.970184 256 0.970184C341.333 0.970184 426.667 0.970184 512 0.970184C597.333 0.970184 682.667 0.970184 768 0.970184C853.333 0.970184 938.667 0.970184 1024 0.970184C1109.33 0.970184 1194.67 0.970184 1237.33 0.970184H1280V200.675Z" fill="#2F4E37"/>
            </svg>
            </div>
        </div>
    )
}

export default Header