import Image from 'next/image'
import jobList from '@/app/json/job.json'
import BoxModel from '@/components/boxCard/cardJob'
import RunningText from '@/components/runningText/page'
import Facility from '@/components/facility/page'
import MajorCLass from '@/components/majorClass/page'
import Footer from '@/components/footer'

export const metadata = {
  title: 'ITSKANDA',
  description: 'SKANDA TI WEBSITE',
}

function Home() {

  const renderJob = () => {
    return jobList.map((job) => <BoxModel key={job.id} text={job} />);
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
    <div className='lg:px-40 lg:mt-72 md:mt-20 lg:py-8 px-10 -mt-20 space-y-20 font-medium'>
      <div className='lg:flex lg:space-x-28 lg:space-y-0 space-y-6'>
        <h1 data-aos="fade-right" className='lg:w-2/5 font-bold lg:text-[40px] text-4xl'>Kenapa Belajar Teknologi?</h1>
        <p data-aos="fade-left" className='lg:w-3/5 lg:text-xl lg:max-w-xl'>
          <span>Teknologi terus berkembang dengan cepat. Dengan belajar teknologi, kamu akan dapat mengikuti perkembangan terbaru dan terus memperbarui keterampilan kamu.</span>
          <br />
          <br />
          <span> Oleh karena itu, Kami Menyiapkan pembelajaran yang komprehensif dan berorientasi pada masa depan untuk memastikan bahwa kamu memiliki keterampilan yang relevan dan diperlukan di dunia teknologi yang terus berkembang ini.</span>
        </p>
      </div>

      <div className='lg:flex lg:space-x-28 lg:space-y-0 space-y-6'>
        <h1 data-aos="fade-right" className='lg:w-2/5 font-bold lg:text-[40px] text-4xl'>Prospek Kerja Bidang IT</h1>
          <div data-aos="fade-left" className='lg:w-3/5 lg:text-xl lg:max-w-xl lg:space-y-6 space-y-4'>
            <p>Ada banyak peluang kerja yang tersedia bagi pelajar IT, beberapa di antaranya adalah:</p>
            <div className='flex flex-row flex-wrap md:gap-3 gap-2 font-semibold md:text-xl'>
             {renderJob()}
            </div>  
          </div>
        </div>
    </div>
    <RunningText />
    <Facility />
    <MajorCLass />
    <Footer />
    </>
  )
}

export default Home
