'use client'

import { useState } from "react";
import Image from "next/image";

function CardGuru({guru}) {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div>
        <div data-aos="fade-up" className="bg-nav hover:bg-ijo hover:text-nav cursor-pointer px-8 py-6 rounded-xl w-full text-left border border-ijo" onClick={handleClick}>
              <h1 className="lg:text-3xl text-lg font-bold">{guru.nama}</h1>
              <h1 className="lg:text-lg ">{guru.bidangStudi}</h1>
        </div>
        <div role="dialog" aria-modal="true">
          <div focus="true" className={`${active ? "" : "hidden"}`}>
            <div class="fixed inset-0 flex items-center justify-center z-50">
              <div class="fixed inset-0 backdrop-blur-sm"></div>
              <div class="bg-cream border border-ijo p-6 lg:p-12 mt-12 rounded-xl w-[90%] lg:w-1/2 relative z-10">
                <div class="flex justify-end" onClick={handleClick}>
                    <button class="bg-kuning text-ijo p-3 lg:-mt-16 lg:-mr-16 rounded-full border border-ijo h-fit hover:rotate-90 duration-500"><span className="sr-only">Close menu</span>
                      <svg className="w-6 lg:w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg></button>
                </div>
                <div className="lg:flex lg:space-x-5 space-y-4 lg:space-y-0 -mt-4">
                  <div>
                    <div className="lg:px-6 px-4 py-2 rounded-lg bg-kuning w-fit relative z-10 font-medium">
                      <h1 className="text-[12px] lg:text-base">Foto</h1>
                    </div>
                    <div className="-mt-2 ml-4 p-3 lg:p-6 bg-white rounded-xl w-fit">
                      <Image src={guru.img} width={150} height={150} alt={guru.nama} className="w-[100px] lg:w-[250px]" />
                    </div>
                  </div>
                  <div className="space-y-4 lg:w-full">
                    <div>
                      <div className="lg:px-6 px-4 py-2 rounded-lg bg-kuning w-fit relative z-10 font-medium">
                        <h1 className="text-[12px] lg:text-base">Nama & Bidang Studi</h1>
                      </div>
                      <div className="-mt-2 ml-4 px-6 py-4 bg-white rounded-xl">
                        <h1 className="font-bold text-sm lg:text-base">{guru.nama}</h1>
                        <p className="text-[12px] lg:text-base font-medium">{guru.bidangStudi}</p>
                      </div>
                    </div>
                    <div>
                      <div className="lg:px-6 px-4 py-2 rounded-lg bg-kuning w-fit relative z-10 font-medium">
                        <h1 className="text-[12px] lg:text-base">Tempat & Tanggal Lahir</h1>
                      </div>
                      <div className="-mt-2 ml-4 px-6 py-4 bg-white rounded-xl">
                        <h1 className="font-bold text-sm lg:text-base">{guru.ttl}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="lg:px-6 px-4 py-2 rounded-lg bg-kuning w-fit relative z-10 font-medium">
                      <h1 className="text-[12px] lg:text-base">Moto</h1>
                    </div>
                    <div className="-mt-2 ml-4 px-6 py-4 bg-white rounded-xl">
                      <h1 className="font-bold text-sm lg:text-base text-center">" {guru.moto} "</h1>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
    </div>
  </>
  );
}

export default CardGuru;
