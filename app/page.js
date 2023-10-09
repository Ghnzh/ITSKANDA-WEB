import Image from 'next/image'
import Footer from '@/components/footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>

    {/* Section 1 */}
    <div className="h-screen text-center">
        <div className="h-[70%] w-full bg-ijo flex flex-col items-center justify-center pt-4">
          <h1 data-aos="fade-left" className="text-4xl font-bold md:text-5xl lg:text-6xl capitalize text-kuning max-w-md md:max-w-[800px]">raih masa Depan dengan Belajar teknologi</h1>
          <p data-aos="fade-right" className="text-sm text-cream md:text-xl max-w-[325px] md:max-w-2xl mt-8">Transformasi Digital Membangun Masa Depan Yang Penuh Inovasi dan Peluang Tanpa batas</p>
        </div>
        <div className='w-full lg:-mt-32 -mt-14'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 260" fill="none">
              <path d="M1280 200.675L1237.33 214.031C1194.67 226.887 1109.33 254.346 1024 247.232C938.667 240.616 853.333 200.675 768 200.675C682.667 200.675 597.333 240.616 512 253.972C426.667 266.828 341.333 254.346 256 240.616C170.667 226.887 85.3334 214.405 42.6666 207.29L0 200.675V0.970184H42.6666C85.3334 0.970184 170.667 0.970184 256 0.970184C341.333 0.970184 426.667 0.970184 512 0.970184C597.333 0.970184 682.667 0.970184 768 0.970184C853.333 0.970184 938.667 0.970184 1024 0.970184C1109.33 0.970184 1194.67 0.970184 1237.33 0.970184H1280V200.675Z" fill="#2F4E37"/>
          </svg>
        </div>
        <div className="mx-auto lg:-mt-52 md:-mt-40 -mt-24 px-8 w-full">
          <img data-aos="fade-up" src="Unsplash/gambar1.jpg"  className='rounded-2xl mx-auto h-5/6'/>
        </div>
    </div>

    {/* Section 2 */}
    <div className='lg:px-40 lg:mt-72 md:mt-20 lg:py-8 px-10 -mt-20 space-y-12 font-medium'>
      <div className='lg:flex lg:justify-center lg:space-x-28 lg:space-y-0 space-y-4'>
        <h1 className='lg:w-1/3 font-bold lg:text-5xl text-4xl'>Why?</h1>
        <p className='lg:w-2/3 lg:text-[18px] lg:max-w-xl'>
          <span>Teknologi terus berkembang dengan cepat. Dengan belajar teknologi, kamu akan dapat mengikuti perkembangan terbaru dan terus memperbarui keterampilan kamu.</span>
          <br />
          <br />
          <span> Oleh karena itu, Kami Menyiapkan pembelajaran yang komprehensif dan berorientasi pada masa depan untuk memastikan bahwa kamu memiliki keterampilan yang relevan dan diperlukan di dunia teknologi yang terus berkembang ini.</span>
        </p>
      </div>

      <div className='lg:flex lg:justify-center lg:space-x-28 lg:space-y-0 space-y-4'>
        <h1 className='lg:w-1/3 font-bold lg:text-5xl text-4xl'>Future Job</h1>
          <div className='lg:w-2/3 lg:text-[18px] lg:max-w-xl lg:space-y-6 space-y-4'>
            <p>Ada banyak peluang kerja yang tersedia bagi pelajar IT, beberapa di antaranya adalah:</p>
            <ul className='flex flex-row flex-wrap md:gap-3 gap-2 font-semibold md:text-[22px]'>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>Adminitrasi Sistem</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>AI</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>IoT</li>  
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>Cyber Security</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>Web Developer</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>UI/UX Design</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>Cloud Engineer</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>DevOps</li>
              <li className='md:px-6 p-3 rounded-xl bg-nav border-ijo border-[0.5px]'>IT Support</li>
              <li className='md:px-6 p-3 rounded-xl bg-ijo border-nav text-nav border-[0.5px]'>& Lainnya</li>
            </ul>  
          </div>
        </div>
    </div>

    {/* Running Text */}
    <div className="marquee lg:my-12 my-16 bg-ijo text-cream">
      <div className="marquee__inner">
        <p className="marquee__line lg:text-6xl md:text-5xl text-[34px] lg:p-6 md:p-5 p-2 ">• SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT • SMKN 2 PRESENT </p>
        {/* <p className="marquee__line">• SMKN 2 PRESENT </p> */}
      </div>
    </div>

    {/* Section 3 */}
    <div className="lg:px-40 lg:py-12 px-10 text-ijo font-bold">
        <h1 className="lg:text-5xl text-4xl">Facility</h1>
        <div className="grid lg:grid-cols-3 bg-nav lg:mt-10 mt-6 rounded-xl lg:text-2xl text-xl lg:py-8 lg:px-0 px-8">
          <div className="flex lg:px-8 lg:py-0 py-6 space-x-5 items-center border-ijo lg:border-r-[0.5px] lg:border-b-0 border-b-[0.5px]">
            <img className='w-12' src='icon/wifi.svg' />
            <div>
              <h1>Wi-Fi</h1>
              <p className='text-sm font-normal -mt-1'>Fast & Unlimited</p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-0 py-6 px-2 space-x-5 items-center border-ijo lg:border-r-[0.5px] lg:border-b-0 border-b-[0.5px]">
            <img className='w-12' src='icon/comp-icon.svg' />
            <div>
              <h1>Lab Computer</h1>
              <p className='text-sm font-normal -mt-1'>High Specification</p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-0 py-6 px-2 space-x-5 items-center">
            <img className='w-12' src='icon/cisco-icon.svg' />
            <div>
              <h1>Cisco Academy</h1>
              <p className='text-sm font-normal -mt-1'>Networking World</p>
            </div>
          </div>
        </div>
    </div>

    {/* Section 4 */}
    <div id='major' className="lg:px-40 py-12 px-10 font-bold lg:space-y-6 lg:-mt-8">
        <h1 className='lg:text-5xl text-4xl lg:my-12 text-center'>Program Keahlian yang Tersedia</h1>
        <div className='grid lg:grid-cols-2 lg:space-x-12 lg:text-[28px] lg:space-y-0 space-y-4 text-xl mt-12'>
          <div>
            <div className='flex justify-center items-center bg-nav rounded-3xl py-20 px-6 lg:px-0'>
              <Image src={'icon/rpl-img.svg'} width={400} height={400} alt='rpl-image' />
            </div>
              <div className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
                <div>
                  <p className='lg:text-lg text-[15px] font-normal'>PPLG</p>
                  <h1 className='lg:leading-7 leading-[22px]'>PENGEMBANGAN<br /> PERANGKAT LUNAK & GIM</h1>
                </div>
                <Link href={'/pplg'} className='p-4 bg-nav border border-ijo rounded-xl hover:scale-110 hover:shadow-2xl duration-500'>
                  <Image src={'icon/arrowIcon.svg'} width={25} height={25} alt='arrow-icon' className='hover:-rotate-45 duration-300' />
                </Link>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center bg-nav rounded-3xl lg:py-8 lg:px-0 p-12 '>
              <Image src={'icon/tkj-img.svg'} width={320} height={320} alt='tjkt-image' />
            </div>
            <div className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
                <div>
                  <p className='lg:text-lg text-[15px] font-normal'>TJKT</p>
                  <h1 className='lg:leading-7 leading-[22px]'>TEKNIK JARINGAN<br /> KOMPUTER & TELEKOMUNIKASI</h1>
                </div>
                  <Link href={'/tjkt'} className='p-4 bg-nav border border-ijo rounded-xl hover:scale-110 hover:shadow-2xl duration-500'>
                    <Image src={'icon/arrowIcon.svg'} width={25} height={25} alt='arrow-icon' className='hover:-rotate-45 duration-300' />
                  </Link>
            </div>
          </div>
        </div>
    </div>
      <Footer />
    </>
  )
}
