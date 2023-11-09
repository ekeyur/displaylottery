import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen justify-between bg-white">
      <Navbar />
      <div className="z-10 w-full h-full font-mono">
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center py-48 px-4">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Save counter space. Display lottery on a tv screen.
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Save counter space for high margin items and display lottery on tv screen separately where it is easily viewable by the customers. For empty slots display store product advertisements.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded bg-fuchsia-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <Image
            height={500}
            width={600}
            alt="lotto display screen"
            src="/lotto-screen.png"
            className="h-full w-full object-cover sm:h-[calc(100%_-_0rem)] sm:self-end sm:rounded-ss-[10px] md:h-[calc(100%_-_0rem)] md:rounded-ss-[20px]"
          />
        </section>

        <section>

        </section>
      </div>
    </main>
  );
}
