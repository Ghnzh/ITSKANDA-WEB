import Image from 'next/image'
import Footer from '@/components/footer'
import Link from 'next/link'
import jobList from '@/app/json/job.json'
import BoxModel from '@/components/boxCard/cardJob'
import RunningText from '@/components/runningText/page'


function Home() {

  const renderJob = () => {
    return jobList.map((job) => <BoxModel text={job} />);
  }

  return (
    <>

    <div data-aos="fade-down" className="h-screen text-center">
        <div className="h-[70%] w-full bg-ijo flex flex-col items-center justify-center pt-4">
          <h1 data-aos="fade-right" className="text-4xl font-bold md:text-5xl lg:text-6xl capitalize text-kuning max-w-md md:max-w-[800px]">raih masa Depan dengan Belajar teknologi</h1>
          <p data-aos="fade-left" className="text-sm text-cream md:text-xl max-w-[325px] md:max-w-2xl mt-8">Transformasi Digital Membangun Masa Depan Yang Penuh Inovasi dan Peluang Tanpa batas</p>
        </div>
        <div className='w-full lg:-mt-32 -mt-14'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 260" fill="none">
              <path d="M1280 200.675L1237.33 214.031C1194.67 226.887 1109.33 254.346 1024 247.232C938.667 240.616 853.333 200.675 768 200.675C682.667 200.675 597.333 240.616 512 253.972C426.667 266.828 341.333 254.346 256 240.616C170.667 226.887 85.3334 214.405 42.6666 207.29L0 200.675V0.970184H42.6666C85.3334 0.970184 170.667 0.970184 256 0.970184C341.333 0.970184 426.667 0.970184 512 0.970184C597.333 0.970184 682.667 0.970184 768 0.970184C853.333 0.970184 938.667 0.970184 1024 0.970184C1109.33 0.970184 1194.67 0.970184 1237.33 0.970184H1280V200.675Z" fill="#2F4E37"/>
          </svg>
        </div>
        <div className="mx-auto lg:-mt-52 md:-mt-40 -mt-24 px-8 w-full">
        <Image src={'/Unsplash/gambar1.jpg'} height={200} width={1000} alt='hero-img' data-aos="fade-down" className='rounded-2xl mx-auto'/>
        </div>
    </div>

    <div className='lg:px-40 lg:mt-72 md:mt-20 lg:py-8 px-10 -mt-20 space-y-12 font-medium'>
      <div className='lg:flex lg:justify-center lg:space-x-28 lg:space-y-0 space-y-4'>
        <h1 data-aos="fade-right" className='lg:w-1/3 font-bold lg:text-5xl text-4xl'>Why?</h1>
        <p data-aos="fade-left" className='lg:w-2/3 lg:text-[18px] lg:max-w-xl'>
          <span>Teknologi terus berkembang dengan cepat. Dengan belajar teknologi, kamu akan dapat mengikuti perkembangan terbaru dan terus memperbarui keterampilan kamu.</span>
          <br />
          <br />
          <span> Oleh karena itu, Kami Menyiapkan pembelajaran yang komprehensif dan berorientasi pada masa depan untuk memastikan bahwa kamu memiliki keterampilan yang relevan dan diperlukan di dunia teknologi yang terus berkembang ini.</span>
        </p>
      </div>

      <div className='lg:flex lg:justify-center lg:space-x-28 lg:space-y-0 space-y-4'>
        <h1 data-aos="fade-right" className='lg:w-1/3 font-bold lg:text-5xl text-4xl'>Future Job</h1>
          <div data-aos="fade-left" className='lg:w-2/3 lg:text-[18px] lg:max-w-xl lg:space-y-6 space-y-4'>
            <p>Ada banyak peluang kerja yang tersedia bagi pelajar IT, beberapa di antaranya adalah:</p>
            <ul className='flex flex-row flex-wrap md:gap-3 gap-2 font-semibold md:text-[22px]'>
             {renderJob()}
            </ul>  
          </div>
        </div>
    </div>

    <RunningText />

    <div className="lg:px-40 lg:py-12 px-10 text-ijo font-bold">
        <h1 data-aos="fade-right" className="lg:text-5xl text-4xl">Facility</h1>
        <div data-aos="fade-up" className="grid lg:grid-cols-3 bg-nav lg:mt-10 mt-6 rounded-xl lg:text-2xl text-xl lg:py-8 lg:px-0 px-8">
          <div className="flex lg:px-8 lg:py-0 py-6 space-x-5 items-center border-ijo lg:border-r-[0.5px] lg:border-b-0 border-b-[0.5px]">
            <img alt='wifi-icon' className='w-12' src='icon/wifi.svg' />
            <div>
              <h1>Wi-Fi</h1>
              <p className='text-sm font-normal -mt-1'>Fast & Unlimited</p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-0 py-6 px-2 space-x-5 items-center border-ijo lg:border-r-[0.5px] lg:border-b-0 border-b-[0.5px]">
            <img alt='lab-icon' className='w-12' src='icon/comp-icon.svg' />
            <div>
              <h1>Lab Computer</h1>
              <p className='text-sm font-normal -mt-1'>High Specification</p>
            </div>
          </div>
          <div className="flex lg:px-8 lg:py-0 py-6 px-2 space-x-5 items-center">
            <img alt='cisco-icon' className='w-12' src='icon/cisco-icon.svg' />
            <div>
              <h1>Cisco Academy</h1>
              <p className='text-sm font-normal -mt-1'>Networking World</p>
            </div>
          </div>
        </div>
    </div>

    <div id='major' className="lg:px-40 py-12 px-10 font-bold lg:space-y-6 lg:-mt-8">
        <h1 data-aos="fade-right" className='lg:text-5xl text-4xl lg:my-12 text-center'>Program Keahlian yang Tersedia</h1>
        <div className='grid lg:grid-cols-2 lg:space-x-12 lg:text-[28px] lg:space-y-0 space-y-4 text-xl mt-12'>
          <div>
            <div data-aos="fade-up" className='flex justify-center items-center bg-nav rounded-3xl py-20 px-6 lg:px-0'>
              <Link href={'/pplg'} className='hover:scale-90 duration-500'>
                <Image src={'icon/rpl-img.svg'} width={400} height={400} alt='rpl-image' />
              </Link>
            </div>
              <div data-aos="fade-right" className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
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
            <div data-aos="fade-up" className='flex justify-center items-center bg-nav rounded-3xl lg:py-8 lg:px-0 p-12 '>
              <Link href={'/tjkt'} className='hover:scale-90 duration-500'>
                <Image src={'icon/tkj-img.svg'} width={320} height={320} alt='tjkt-image' />
              </Link>
            </div>
            <div data-aos="fade-right" className='py-6 flex justify-around items-center lg:space-x-16 space-x-8'>
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

export default Home
