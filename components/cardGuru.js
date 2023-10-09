import Image from "next/image";

function CardGuru({guru}) {
  return (
    <>
    {/* {guru && guru.map((guru) => ( */}
      <div data-aos="fade-up" className="p-6 rounded-xl bg-nav hover:bg-ijo hover:text-nav hover:scale-105 hover:shadow-2xl duration-500 cursor-pointer">
      <h1 data-aos="fade-right" className="text-xl lg:text-3xl font-bold ">{guru.nama}</h1>
      <p data-aos="fade-left" className="lg:font-medium">{guru.bidangStudi}</p>
      </div> 
    {/* ))}  */}

  </>
  );
}

export default CardGuru;
