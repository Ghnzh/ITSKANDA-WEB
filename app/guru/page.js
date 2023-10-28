import Footer from "@/components/footer"
import CardGuru from '@/components/guru/card';
import guruList from '@/app/json/guru.json'
import Header from "@/components/header/page";

export const metadata = {
    title: 'Teacher | ITSKANDA',
    description: 'SKANDA TI WEBSITE',
  }

function guruPage() {

     const renderGuru = () => {
        return guruList.map((guru) => <CardGuru key={guru.id} guru={guru} />);
      }

    return (
        <>
        <Header 
            judul={'Teaching Staff'} 
            desc={`${guruList.length} Educators`}
        />
        <div className="lg:px-24 px-10 pb-14 -mt-60 md:-mt-40">
            <p data-aos="fade-right" className="font-light italic">|| klik untuk melihat profile lengkap</p>
            <div className="grid lg:grid-cols-2 mt-12 lg:gap-6 gap-y-5">
                {renderGuru()}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default guruPage