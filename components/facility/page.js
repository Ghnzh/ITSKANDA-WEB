import Image from "next/image"

const Facility = () => {
    return (
    <div className="lg:px-40 lg:py-12 px-10 text-ijo font-bold">
        <h1 data-aos="fade-right" className="lg:text-5xl text-4xl">Facility</h1>
        <div data-aos="fade-up" className="grid lg:grid-cols-3 bg-nav lg:mt-10 mt-6 rounded-xl lg:text-2xl text-xl lg:py-8 lg:px-0 px-8 border-[0.5px] border-ijo">
          <div className="flex lg:px-8 lg:py-0 py-6 space-x-5 items-center border-ijo lg:border-r-[0.5px] lg:border-b-0 border-b-[0.5px]">
            <Image
            width={20}
            height={20} 
            alt={'wifi-icon'} 
            className={'w-12'} 
            src={'icon/wifi.svg'} />
            <div>
              <h1>Wi-Fi</h1>
              <p className='text-sm font-normal -mt-1'>Fast & Unlimited</p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-0 py-6 px-2 space-x-5 items-center border-ijo lg:border-r-[0.5px] lg:border-b-0 border-b-[0.5px]">
            <Image
            width={20}
            height={20} 
            alt={'lab-icon' }
            className={'w-12' }
            src={'icon/comp-icon.svg'} />
            <div>
              <h1>Lab Computer</h1>
              <p className='text-sm font-normal -mt-1'>High Specification</p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-0 py-6 px-2 space-x-5 items-center">
            <Image
            width={20}
            height={20} 
            alt={'cisco-icon'} 
            className={'w-12'} 
            src={'icon/cisco-icon.svg'} />
            <div>
              <h1>Cisco Academy</h1>
              <p className='text-sm font-normal -mt-1'>Networking World</p>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Facility