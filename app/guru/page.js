import Footer from "@/components/footer";
import CardGuru from "@/components/guru/card";
import Header from "@/components/header/page";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata = {
  title: "Teacher | ITSKANDA",
  description: "SKANDA TI WEBSITE",
};

async function guruPage() {
  const guru = await prisma.guru.findMany();

  const renderGuru = () => {
    return guru.map((guru) => <CardGuru key={guru.id} guru={guru} />);
  };

  return (
    <>
      <Header judul={"Teaching Staff"} desc={`${guru.length} Educators`} />
      <div className="lg:px-24 px-10 pb-14 -mt-60 md:-mt-40">
        <p data-aos="fade-right" className="font-light italic">
          || klik untuk melihat profile lengkap
        </p>
        <div className="grid lg:grid-cols-2 mt-12 lg:gap-6 gap-y-5">
          {renderGuru()}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default guruPage;
