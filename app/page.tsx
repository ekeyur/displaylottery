import Navbar from '@/components/Navbar'
import {
 TvIcon
} from "@heroicons/react/24/outline";
import SimpleCarousel from '@/components/SimpleCarousel';
import PricingPlans from '@/components/PricingPlans';
import Footer from '@/components/Footer';
import ImageWithFallback from '@/components/ImageWithFallback';



export default function Home() {
  return (
    <main className="flex h-screen justify-between bg-white">
      <Navbar />

      <div className="z-10 w-full h-full font-mono">
        <section
          id="home"
          className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center pt-20 px-4"
        >
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Convinience store displays
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Explore a variety of displays tailored for your convenience
                store needs, including lottery displays and food menu boards.
                Enjoy the absence of exorbitant upfront fees and account
                activation charges.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#contact"
                  className="inline-block rounded bg-fuchsia-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="h-full w-full object-cover sm:h-[calc(100%_-_0rem)] sm:self-end sm:rounded-ss-[10px] md:h-[calc(100%_-_0rem)] md:rounded-ss-[20px]">
            <SimpleCarousel images={carouselImages} interval={10_000} />
          </div>
        </section>

        <section className="overflow-hidden bg-white sm:grid sm:items-center pt-8 px-4">
          <div className="w-full bg-fuchsia-300 flex justify-center items-center py-8 px-4 rounded-md">
            <div className="max-w-4xl flex gap-2">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <ImageWithFallback
                    className="bg-gray-200 object-contain shadow-sm rounded-full"
                    height={50}
                    width={50}
                    src="/assets/rajesh.jpeg"
                    fallbackSrc="/coming-soon.svg"
                    alt=""
                  />
                <div>
                  <blockquote>
                    <p className="text-xs font-normal text-gray-900 sm:text-sm xl:text-lg xl:leading-8">
                      “The implementation of the lottery display has
                      significantly enhanced our lottery sales while
                      simultaneously freeing up valuable counter. Additionally,
                      we leverage the menu board display to effectively present
                      our deli menu, contributing to an overall streamlined and
                      efficient operation.”
                    </p>
                  </blockquote>
                  <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">
                    Rajesh Patel
                  </p>
                  <p className="text-sm font-normal text-gray-700 mt-0.5">
                    President, QuickStop # 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="overflow-hidden bg-white sm:grid sm:items-center py-16 px-4 flex flex-col sm:flex-row justify-center"
        >
          <p className="text-3xl px-8 pt-4 font-bold text-fuchsia-900">
            Pricing
          </p>
          <p className="text-md px-8 pt-4 text-gray-500">
            Initial setup fee of $200 per display (includes equipment) and
            monthly subscription based on the package selected.
          </p>
          <div className="flex flex-col">
            <PricingPlans plans={lotteryPlans} />
            <PricingPlans plans={menuboardPlans} />
          </div>
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}


var features = [
  {
    name: "Lottery Display",
    description:
      "Use your own tv setup. We will send you the equipment at a reasonable price. Manage tickets using google worksheets. No more remembering passwords. Place advertisement on empty slots.",
    icon: TvIcon,
  },
  {
    name: "Menu Display",
    description:
      "Display your vibrant food menus on a tv display where customers can easily see prices and order food. Same tv can display breakfast menu in the morning, lunch menu in the afternoon and dinner menu in the evening.",
    icon: TvIcon,
  },
];
var carouselImages = [
  "/assets/lotto-screen.png",
  "/assets/menu1.png",
  "/assets/menu2.png",
  "/assets/menu3.png",
];

var lotteryPlans = [
  {
    title: "Lottery Display",
    description: "No advertisement",
    price: "20$",
    features: [{ isChecked: false, text: "Advertise products" }],
  },
  {
    title: "Lottery Display",
    description: "Product advertisement",
    price: "25$",
    features: [{ isChecked: true, text: "Advertise products" }],
  },
];
var menuboardPlans = [
  {
    title: "Menu Board",
    description: "1 edit every six months",
    price: "10$",
    features: [
      { isChecked: true, text: "Pick any template" },
      { isChecked: true, text: "Landscape or portrait" },
      {
        isChecked: true,
        text: "Unlimited displays",
      },
    ],
  },
  {
    title: "Menu Board",
    description: "1 edit per month",
    price: "15$",
    features: [
      { isChecked: true, text: "Pick any template" },
      { isChecked: true, text: "Landscape or portrait" },
      {
        isChecked: true,
        text: "Unlimited displays",
      },
    ],
  },
  {
    title: "Menu Board",
    description: "4 edits per month",
    price: "25$",
    features: [
      { isChecked: true, text: "Pick any template" },
      { isChecked: true, text: "Landscape or portrait" },
      {
        isChecked: true,
        text: "Unlimited displays",
      },
    ],
  },
];