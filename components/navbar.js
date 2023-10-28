'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <div data-aos="fade-down" className="fixed w-full top-0 z-[99] p-6 lg:px-16 2xl:px-40 lg:py-0">
          <div className="bg-nav py-4 lg:px-8 px-6 rounded-xl lg:rounded-t-none lg:border-[0.5px] border-[#dfdfdf] border-t-0">
            <nav className="flex h-9 items-center justify-between text-sm font-semibold" aria-label="Global">
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:space-x-2">
                <Link href={`/guru`} className="hover:bg-ijo hover:text-kuning px-4 py-2 rounded-xl duration-500">Educators</Link>
                <Link href={`/#major`} className="hover:bg-ijo hover:text-kuning px-4 py-2 rounded-xl duration-500">Major Class</Link>
                <Link href={`/blogs`} className="hover:bg-ijo hover:text-kuning px-4 py-2 rounded-xl duration-500">Article</Link>
              </div>
              <div className="flex self-center justify-center lg:min-w-0 lg:flex-1" aria-label="Global">
                <Link href={`/`} className="-m-1.5 p-1.5 flex items-center space-x-2">
                  <Image src={'Logo/logo-smk.svg'} height={40} width={40} alt="logo-smk" />
                  <Image src={'Logo/Logo-itskanda.svg'} height={130} width={130} alt="L" />
                </Link>
              </div>
              <div className="flex lg:hidden" onClick={handleClick}>
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:items-center lg:space-x-2">
                <Link href={`/products`} className="hover:bg-ijo hover:text-kuning px-4 py-2 rounded-xl duration-500">Products</Link>
                <Link href={`/achievements`} className="hover:bg-ijo hover:text-kuning px-4 py-2 rounded-xl duration-500">Achievements</Link>
                <Link href={`/faq`} className="hover:bg-ijo hover:text-kuning px-4 py-2 rounded-xl duration-500">FAQs</Link>
              </div>
            </nav>
            <div role="dialog" aria-modal="true" aria-label="mobile">
              <div focus="true" className={`${active ? "" : "hidden"} fixed inset-0 z-10 overflow-y-auto bg-nav px-6 py-6 lg:hidden m-6 h-fit rounded-xl shadow-2xl`}>
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <Link href={`/`} className="-m-1.5 p-1.5 flex items-center space-x-2">
                      <Image src={'Logo/logo-smk.svg'} height={50} width={50} alt="logo-smk" />
                    </Link>
                  </div>
                  <div className="absolute right-4" onClick={handleClick}>
                    <button type="button" className="m-2.5 inline-flex items-center justify-center rounded-full p-2.5 bg-ijo text-kuning">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mobile mt-4 md:px-6 flow-root">
                  <div className="-my-6 text-2xl">
                    <div className="flex flex-wrap gap-4 py-12 font-semibold text-3xl text-kuning">
                      <Link onClick={handleClick} href={`/#major`} className="p-4 rounded-xl bg-ijo leading-7">Major Class</Link>
                      <Link onClick={handleClick} href="/guru" className="p-4 rounded-xl bg-ijo leading-7">Educators</Link>
                      <Link onClick={handleClick} href="/achievements" className="p-4 rounded-xl bg-ijo leading-7">Achievements</Link>
                      <Link onClick={handleClick} href={`/blogs`} className="p-4 rounded-xl bg-ijo leading-7">Article</Link>
                      <Link onClick={handleClick} href={`/products`} className="p-4 rounded-xl bg-ijo leading-7">Products</Link>
                      <Link onClick={handleClick} href={`/faq`} className="p-4 rounded-xl bg-ijo leading-7">FAQ</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${active ? "" : "hidden"}hidden justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky" onClick={handleClick}></div>
    </>
  );
};
