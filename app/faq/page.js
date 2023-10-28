import Header from "@/components/header/page";
import faqList from "../json/faq.json";
import Card from "@/components/faq/card";
import Footer from "@/components/footer";

function Content() {

    const renderCard = () => {
        return faqList.map((faq) => <Card 
            key={faq.id} 
            title={faq.title} 
            content={faq.content} 
        />);
      }

  return (
    <>
    <Header judul={`Questions? We've got answers.`} />
    <div className='lg:px-32 px-10 pb-20 lg:-mt-40 -mt-52 font-medium'>
      <div className='lg:flex lg:justify-center lg:space-x-28 space-y-8 lg:space-y-0'>
        <div className="lg:w-1/3 lg:space-y-2">
            <h1 data-aos="fade-right" className='font-bold lg:text-6xl text-4xl'>FAQs</h1>
            <p data-aos="fade-left">Frequently Asked Questions</p>
        </div>
        <div className="lg:w-2/3 space-y-3">
          {renderCard()}
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Content;