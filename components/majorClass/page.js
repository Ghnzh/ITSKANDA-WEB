import Image from 'next/image'
import Link from 'next/link'
import rplImage from '@/public/icon/rpl-img.svg'

const MajorCLass = () => {
    return (
        <div id='major' className="lg:px-40 pt-12 px-10 font-bold lg:space-y-6 lg:-mt-8">
        <h1 data-aos="fade-right" className='lg:text-5xl text-4xl lg:my-12 text-center'>Program Keahlian yang Tersedia</h1>
        <div className='grid lg:grid-cols-2 lg:space-x-12 lg:text-[28px] lg:space-y-0 space-y-4 text-xl mt-12'>
          <Link href={'/pplg'}>
            <div data-aos="fade-up" className='flex justify-center items-center bg-nav rounded-3xl py-20 px-6 lg:px-0 border-[0.5px] border-ijo'>
                <Image src={rplImage} width={400} height={400} alt='rpl-image' className='hover:scale-90 duration-500' />
            </div>
              <div data-aos="fade-right" className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
                <div>
                  <p className='lg:text-lg text-[15px] font-normal'>PPLG</p>
                  <h1 className='lg:leading-7 leading-[22px]'>PENGEMBANGAN<br /> PERANGKAT LUNAK & GIM</h1>
                </div>
                <div className='p-4 bg-nav border border-ijo rounded-xl hover:scale-110 hover:shadow-2xl duration-500'>
                  <Image src={'icon/arrowIcon.svg'} width={25} height={25} alt='arrow-icon' className='hover:-rotate-45 duration-300' />
                </div>
            </div>
          </Link>
          <Link href={'/tjkt'}>
            <div data-aos="fade-up" className='flex justify-center items-center bg-nav rounded-3xl lg:py-8 lg:px-0 border-[0.5px] border-ijo p-12 '>
                <Image src={'icon/tkj-img.svg'} width={320} height={320} alt='tjkt-image' className='hover:scale-90 duration-500' />
            </div>
            <div data-aos="fade-right" className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
                <div>
                  <p className='lg:text-lg text-[15px] font-normal'>TJKT</p>
                  <h1 className='lg:leading-7 leading-[22px]'>TEKNIK JARINGAN<br /> KOMPUTER & TELEKOMUNIKASI</h1>
                </div>
                  <div className='p-4 bg-nav border border-ijo rounded-xl hover:scale-110 hover:shadow-2xl duration-500'>
                    <Image src={'icon/arrowIcon.svg'} width={25} height={25} alt='arrow-icon' className='hover:-rotate-45 duration-300' />
                  </div>
            </div>
          </Link>
        </div>
    </div>
    )
}

export default MajorCLass