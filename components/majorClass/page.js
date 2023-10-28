import Image from 'next/image'
import Link from 'next/link'
import rplImage from '@/public/icon/rpl-img.svg'

const MajorCLass = () => {
    return (
        <div id='major' className="lg:px-40 py-12 px-10 font-bold lg:space-y-6 lg:-mt-8">
        <h1 data-aos="fade-right" className='lg:text-5xl text-4xl lg:my-12 text-center'>Program Keahlian yang Tersedia</h1>
        <div className='grid lg:grid-cols-2 lg:space-x-12 lg:text-[28px] lg:space-y-0 space-y-4 text-xl mt-12'>
          <div>
            <div data-aos="fade-up" className='flex justify-center items-center bg-nav rounded-3xl py-20 px-6 lg:px-0'>
              <Link rel='preload' href={'/pplg'} className='hover:scale-90 duration-500'>
                <Image src={rplImage} width={400} height={400} alt='rpl-image' />
              </Link>
            </div>
              <div data-aos="fade-right" className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
                <div>
                  <p className='lg:text-lg text-[15px] font-normal'>PPLG</p>
                  <h1 className='lg:leading-7 leading-[22px]'>PENGEMBANGAN<br /> PERANGKAT LUNAK & GIM</h1>
                </div>
                <Link rel='preload' href={'/pplg'} className='p-4 bg-nav border border-ijo rounded-xl hover:scale-110 hover:shadow-2xl duration-500'>
                  <Image src={'icon/arrowIcon.svg'} width={25} height={25} alt='arrow-icon' className='hover:-rotate-45 duration-300' />
                </Link>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" className='flex justify-center items-center bg-nav rounded-3xl lg:py-8 lg:px-0 p-12 '>
              <Link rel='preload' href={'/tjkt'} className='hover:scale-90 duration-500'>
                <Image src={'icon/tkj-img.svg'} width={320} height={320} alt='tjkt-image' />
              </Link>
            </div>
            <div data-aos="fade-right" className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
                <div>
                  <p className='lg:text-lg text-[15px] font-normal'>TJKT</p>
                  <h1 className='lg:leading-7 leading-[22px]'>TEKNIK JARINGAN<br /> KOMPUTER & TELEKOMUNIKASI</h1>
                </div>
                  <Link rel='preload' href={'/tjkt'} className='p-4 bg-nav border border-ijo rounded-xl hover:scale-110 hover:shadow-2xl duration-500'>
                    <Image src={'icon/arrowIcon.svg'} width={25} height={25} alt='arrow-icon' className='hover:-rotate-45 duration-300' />
                  </Link>
            </div>
          </div>
        </div>
    </div>
    )
}

export default MajorCLass