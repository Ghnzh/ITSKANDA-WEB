const BoxModel = ({text}) => {
    return (
        <>
        <div 
        data-aos="fade-up" 
        className={
            text.job === '& Lainnya'
            ? 'md:px-6 p-3 rounded-xl bg-ijo border-nav text-nav border-[0.5px]'
            : 'md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'
        }>
        {text.job}
        </div>
        </>
    )
}

export default BoxModel