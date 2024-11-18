"use client" // Add this line at the top to make it a client component

import Image from "next/image"
import { useState } from "react"
import chefsHat from "../public/foodbankicon.png"
import iphone from "../public/feedlink_cover.png"
import appstore from "../public/appstore.svg"
import foodwaste from "../public/FOODWASTE.png"
import {
  BoltIcon,
  PencilSquareIcon,
  LightBulbIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Mission", href: "#mission" },
  { name: "Privacy Policy", href: "#privacy-policy" },
]

const features = [
  {
    name: "Superior Item Logger",
    description:
      "The fastest and most efficient way to log your foods. Keep track of what you have, and what you waste.",
    icon: BoltIcon,
  },
  {
    name: "Recipes On-Demand",
    description:
      "Advanced recipe search tool, based on the items that you have. Find new ways to combine your foods.",
    icon: PencilSquareIcon,
  },
  {
    name: "Curated Content",
    description:
      "Vast collection of food data makes logging rewarding. Storage tips, health facts, and best flavor pairings.",
    icon: LightBulbIcon,
  },
  {
    name: "Reduce Food Waste",
    description:
      "By practicing a cycle of logging your foods, setting SMART goals, and continuous learning, you will waste less food.",
    icon: HandThumbUpIcon,
  },
]

export default function Example() {
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(
        "https://flavr-413021.ue.r.appspot.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )

      if (response.ok) {
        setSuccessMessage("Thank you for signing up!")
        setErrorMessage("")
        setEmail("")
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.message || "Something went wrong.")
        setSuccessMessage("")
      }
    } catch (error) {
      setErrorMessage("Error submitting form. Please try again.")
      setSuccessMessage("")
      console.error("Error submitting email:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6"
          aria-label="Global"
        >
          <div className="flex items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <Image width={125} height={125} src={chefsHat} alt="" />
            </a>
            <span className="ml-1 text-2xl font-bold text-gray-900 font-poppins">
              FeedLink App
            </span>
          </div>
          <div className="hidden sm:flex gap-x-12">
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
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 mt-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Reduce Your Food Waste
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Log and track your foods, find relevant recipes, and learn kitchen
              skills.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=BgyIAUYUVHU"
                className="text-blue-700 hover:underline"
              >
                Watch the demo
              </a>{" "}
              or{" "}
              <a
                href="/FeedLink_Overview.pdf"
                download
                className="text-blue-700 hover:underline"
              >
                download the concept slides
              </a>
            </p>
            <div className="mt-6">
              <a
                href="https://apps.apple.com/us/app/feedlink/id6476418658"
                target="_blank"
              >
                <Image width={125} height={125} src={appstore} alt="" />
              </a>
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
              Our mission is to reduce household food waste
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every year, American households waste approximately 86 billion
              pounds of food, even as 18 million households face food
              insecurity. By reducing your food waste, you’re not only helping
              the planet and saving money, but you’re also contributing to a
              more equitable and sustainable food system for everyone.{" "}
              <a
                target="_blank"
                href="https://refed.org/food-waste/climate-and-resources/"
                className="text-blue-700"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Image
              src={foodwaste}
              alt="App screenshot"
              width={850}
              height={400}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>

      <div id="privacy-policy" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Privacy Policy
            </h2>
            <div className="mt-10">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                1. No Data Collection
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                FeedLink does not collect any personal data, usage data, or
                location data. The app operates solely on your device and does
                not transmit information to any external servers.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                2. No Third-Party Sharing
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Since FeedLink does not collect any data, we do not share any
                personal information with third-party service providers or
                partners.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                3. No Cookies or Tracking
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                FeedLink does not use cookies, tracking technologies, or any
                form of analytics tools.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                4. Future Changes
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                As we continue to develop FeedLink, we may introduce new
                features that involve data collection. In that event, we will
                update this Privacy Policy to reflect the changes.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                5. Contact
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                For any questions, contact Hernan Berisso at
                hberissodev@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
