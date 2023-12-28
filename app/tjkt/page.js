import Footer from "@/components/footer";
import Header from "@/components/header/page";
import Card from "@/components/boxCard/card";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata = {
  title: "TJKT | ITSKANDA",
  description: "SKANDA TI WEBSITE",
};

async function Page() {
  const dataTJKT = await prisma.tjkt.findMany();

  const renderMapel = () => {
    return dataTJKT.map((mapel) => <Card key={mapel.id} text={mapel} />);
  };

  return (
    <>
      <Header judul="TJKT" desc="Teknik Jaringan Komputer dan Telekomunikasi" />
      <div className="lg:px-24 px-10 pb-14 -mt-60 md:-mt-40">
        <div className="lg:flex lg:space-x-12 lg:space-y-0 space-y-6">
          <h1
            data-aos="fade-right"
            className="lg:w-2/5 font-bold lg:text-[40px] text-4xl"
          >
            Apa Itu TJKT?
          </h1>
          <p data-aos="fade-left" className="lg:w-3/5 lg:text-xl font-medium">
            merupakan program keahlian yang membekali peserta didik dengan
            keterampilan, pengetahuan, dan sikap agar kompeten dalam merakit,
            menginstall program, merawat dan memperbaiki komputer serta
            jaringannya.
            <br />
            <br />
            Lulusan program keahlian ini memiliki kemampuan melakukan installasi
            jaringan komputer, baik itu jaringan komputer dalam rumah /kantor,
            antar kantor, antar kota, antar provinsi, bahkan antar negara.
          </p>
        </div>
        <h1
          data-aos="fade-right"
          className="font-bold lg:text-[40px] text-4xl mt-16"
        >
          Materi
        </h1>
        <p data-aos="fade-left" className="lg:text-xl mt-2">
          Yang Diajarkan Yaitu :
        </p>
        <div className="flex flex-row flex-wrap md:gap-3 gap-2 font-semibold md:text-xl mt-6">
          {renderMapel()}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
