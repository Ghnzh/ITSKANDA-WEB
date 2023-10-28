export const metadata = {
    title: '404 | ITSKANDA',
    description: 'SKANDA TI WEBSITE',
  }

export default function errorPage() {
    return(
        <section className="h-screen bg-ijo text-kuning flex items-end p-12 lg:p-16">
            <div>
                <h1 className="font-bold text-5xl lg:text-7xl lg:mb-2">404</h1>
                <p className="md:text-xl">Maaf, Halaman ini Belum Tersedia</p>
            </div>
        </section>
    )
}