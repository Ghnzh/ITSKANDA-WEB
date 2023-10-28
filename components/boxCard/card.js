const Card = ({text}) => {
    return (
        <>
        <div 
        data-aos="fade-up" 
        className={'md:px-7 p-4 rounded-xl bg-nav border-ijo border capitalize'}
        >
        {text.mapel}
        </div>
        </>
    )
}

export default Card