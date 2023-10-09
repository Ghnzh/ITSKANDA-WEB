import Footer from "@/components/footer"
import CardGuru from '@/components/cardGuru';
import guruList from '@/app/json/guru.json'

export default function guruPage() {

     const renderGuru = () => {
        return guruList.map((guru) => <CardGuru key={guru.id} guru={guru} />);
      }

    return (
        <>
        <div className="h-screen text-center">
            <div className="h-[70%] bg-ijo flex flex-col items-center justify-center pt-4">
                <h1 data-aos="fade-right"  className="text-[44px] font-bold md:text-5xl lg:text-6xl text-kuning">Teaching Staff</h1>
                <p data-aos="fade-left" className="text-cream text-lg lg:text-xl lg:mt-4">15 Educators</p>
            </div>
        </div>

        <div className="bg-cream lg:p-14 px-10 py-12 -mt-[280px] rounded-t-3xl z-50">
            {/* <p className="font-light italic">|| klik untuk melihat profile lengkap</p> */}
            <div className="grid lg:grid-cols-2 mt-12 lg:gap-6 gap-y-5">
                {renderGuru()}
            </div>
        </div>
        <Footer />
        </>
    )
}