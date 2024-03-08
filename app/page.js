import Image from "next/image"
import chefsHat from "../public/chefs_hat.png"
import iphone from "../public/Rounded_Screenshot.png"
import foodwaste from "../public/FOODWASTE.png"
import {
  BoltIcon,
  PencilSquareIcon,
  SparklesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Mission", href: "#mission" },
]

const features = [
  {
    name: "Superior Item Logger",
    description:
      "By focusing on human-centered design, we created the fastest and most efficient way to log your foods into an app.",
    icon: BoltIcon,
  },
  {
    name: "Recipes On-Demand",
    description:
      "Advanced recipe search tool, based on the items that you have. Find new and exciting ways to combine and consume your foods.",
    icon: PencilSquareIcon,
  },
  {
    name: "AI Magic",
    description:
      "Snap a pic of your groceries, and our AI will recognize the common items, and log them automatically.",
    icon: SparklesIcon,
  },
  {
    name: "Curated Content",
    description:
      "Vast collection of ingredient-level data makes logging more rewarding and educational. Storage tips, cooking techniques, and more.",
    icon: LightBulbIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6"
          aria-label="Global"
        >
          <a href="#" className="-m-1.5 p-1.5">
            <Image width={100} height={100} src={chefsHat} alt="" />
          </a>
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Take control of your kitchen with FlavrAi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Log items with minimal effort, and never lose track what is
              spoiling. Discover personalized recipes and learn about your food
              on a deep level. Gain the skills you need to be efficient in your
              kitchen!{" "}
              <a
                target="_blank"
                href="https://youtu.be/6eOLDqO_HO8?si=H9pxHYqK8AlyVZuR"
                className=" text-blue-700"
              >
                Watch the demo here <span aria-hidden="true">→</span>
              </a>
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {/* <div class="flex lg:flex-row md:flex-col"> */}
              <a
                target="_blank"
                href="https://testflight.apple.com/join/rkACgNHx"
                class="bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-500 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs mb-1">Try it on</span>
                  <span class="title-font font-medium">TestFlight</span>
                </span>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.pantrypal"
                class="bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-500 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs mb-1">Try it on</span>
                  <span class="title-font font-medium">Google Play</span>
                </span>
              </a>
              {/* </div> */}
              {/* <a
                target="_blank"
                href="https://testflight.apple.com/join/rkACgNHx"
                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our Beta! (iPhones only)
              </a> */}
              {/* <a
                target="_blank"
                href="https://youtu.be/6eOLDqO_HO8?si=H9pxHYqK8AlyVZuR"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Watch the Demo <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <Image width={316} height={684} src={iphone} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Features
            </h2>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div id="mission" className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our mission is to help households minimize their food waste
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every year in America, 128 million household kitchens generate
              more than 86 billion pounds of wasted food, significantly
              impacting our planet&apos;s health. Reducing personal food waste
              stands out as the top action you can take in the fight against
              climate change. Enter FlavrAi: Your ally in making a difference.{" "}
              <a
                target="_blank"
                href="https://refed.org/food-waste/climate-and-resources/"
                className="text-blue-700"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                target="_blank"
                href="https://testflight.apple.com/join/rkACgNHx"
                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our Beta! (iPhones only)
              </a> */}
              {/* <a
                target="_blank"
                href="https://refed.org/food-waste/climate-and-resources/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={foodwaste}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
}
