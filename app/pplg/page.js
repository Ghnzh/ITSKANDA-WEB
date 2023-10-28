import Footer from "@/components/footer"
import Header from "@/components/header/page"
import dataPPLG from '@/app/json/pplg.json'
import Card from "@/components/boxCard/card";

function Page() {

    const renderMapel = () => {
        return dataPPLG.map((mapel) => <Card key={mapel.id} text={mapel} />);
      }

    return (
        <>
        <Header 
            judul="PPLG" 
            desc="Pengembangan Perangkat Lunak dan Gim" 
        />
        <div className="lg:px-24 px-10 pb-14 -mt-60 md:-mt-40">
            <div className='lg:flex lg:space-x-12 lg:space-y-0 space-y-6'>
                <h1 data-aos="fade-right" className='lg:w-2/5 font-bold lg:text-[40px] text-4xl'>Apa Itu PPLG?</h1>
                <p data-aos="fade-left" className='lg:w-3/5 lg:text-xl'>
                Jurusan ini mempelajari dan mendalami cara-cara mengembangkan perangkat lunak. Mulai dari pembuatan, pemeliharaan, manajemen kualitas, dan manajemen organisasi pengembangan perangkat lunak. 
                    <br />
                    <br />
                    Selain itu, jurusan PPLG juga berhubungan dengan software komputer seperti pembuatan aplikasi, website, game dan semua yang berhubungan dengan pemrograman. Singkatnya, jurusan PPLG erat kaitannya dengan coding, desain, dan algoritma.
                </p>
            </div>
            <h1 
            data-aos="fade-right" 
            className='font-bold lg:text-[40px] text-4xl mt-16'>Materi</h1>
            <p 
            data-aos="fade-left" 
            className='lg:text-xl mt-2'>
                Yang Diajarkan Yaitu :
            </p>
            <div className="flex flex-row flex-wrap md:gap-3 gap-2 font-semibold md:text-xl mt-6">
                {renderMapel()}
            </div>
        </div>
        <Footer />  
        </>
    )
}

export default Page