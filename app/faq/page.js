import Header from "@/components/header/page";
import Card from "@/components/faq/card";
import Footer from "@/components/footer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata = {
  title: "FAQs | ITSKANDA",
  description: "SKANDA TI WEBSITE",
};

async function Content() {
  const faq = await prisma.faqs.findMany();

  const renderCard = () => {
    return faq.map((faq) => (
      <Card key={faq.id} question={faq.question} answer={faq.answer} />
    ));
  };

  return (
    <>
      <Header judul={`Questions? We've got answers.`} />
      <div className="lg:px-32 px-10 pb-20 lg:-mt-40 -mt-60 font-medium">
        <div className="lg:flex lg:justify-center lg:space-x-28 space-y-8 lg:space-y-0">
          <div className="lg:w-1/3 lg:space-y-2">
            <h1
              data-aos="fade-right"
              className="font-bold lg:text-6xl text-4xl"
            >
              FAQs
            </h1>
            <p data-aos="fade-left">Frequently Asked Questions</p>
          </div>
          <div className="lg:w-2/3 space-y-3">{renderCard()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Content;
