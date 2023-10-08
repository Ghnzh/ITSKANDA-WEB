import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <section>
      <div className='w-full lg:-mb-48 -mb-2 rotate-180'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 260" fill="none">
            <path d="M1280 200.675L1237.33 214.031C1194.67 226.887 1109.33 254.346 1024 247.232C938.667 240.616 853.333 200.675 768 200.675C682.667 200.675 597.333 240.616 512 253.972C426.667 266.828 341.333 254.346 256 240.616C170.667 226.887 85.3334 214.405 42.6666 207.29L0 200.675V0.970184H42.6666C85.3334 0.970184 170.667 0.970184 256 0.970184C341.333 0.970184 426.667 0.970184 512 0.970184C597.333 0.970184 682.667 0.970184 768 0.970184C853.333 0.970184 938.667 0.970184 1024 0.970184C1109.33 0.970184 1194.67 0.970184 1237.33 0.970184H1280V200.675Z" fill="#2F4E37"/>
        </svg>
      </div>
      <div className="bg-ijo lg:px-28 px-12 -mt-12">
        <div className="flex justify-between bg-ijo text-white relative z-99">
          <Link href={`/`} className="flex items-center space-x-2">
            <Image src={'Logo/logo-smk.svg'} height={40} width={40} alt="logo-smk" />
            <p className="font-semibold lg:text-2xl text-gray-100">IT SKANDA</p>
          </Link>
          <div className="flex lg:space-x-8 space-x-5 py-8 text-sm">
            <Link href="#" className="flex items-center space-x-3">
              <Image src={'icon/tweet.svg'} width={20} height={20} alt="icon-socmed"/>
              <p className="hidden lg:block">Twitter</p>
            </Link>
            <Link href="#" className="flex items-center space-x-3">
              <Image src={'icon/instagram.svg'} width={20} height={20} alt="icon-socmed"/>
              <p className="hidden lg:block">Instagram</p>
            </Link>
            <Link href="#" className="flex items-center space-x-3">
              <Image src={'icon/youtube.svg'} width={20} height={20} alt="icon-socmed"/>
              <p className="hidden lg:block">Youtube</p>  
            </Link>
            <Link href="#" className="flex items-center space-x-3">
              <Image src={'icon/facebook.svg'} width={20} height={20} alt="icon-socmed"/>
              <p className="hidden lg:block">Facebook</p>
            </Link>
          </div>
        </div>
         <div className="relative z-99 flex justify-center border-t-[0.3px] border-gray-500 lg:py-8 py-6 lg:">
          <h1 className="font-light text-[12px] text-gray-400">Made with 💖 by madebygannn</h1>
          {/* <h1 className="lg:text-[12px] text-[10px] font-light text-gray-400">© 2022 SMKN 2 PEKANBARU | All Rights Reserved.</h1> */}
        </div>  
      </div>
      </section>
    </>
  );
}
