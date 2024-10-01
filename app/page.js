"use client" // Add this line at the top to make it a client component

import Image from "next/image"
import { useState } from "react"
import chefsHat from "../public/foodbankicon.png"
import iphone from "../public/feedlink_cover.png"
import {
  BoltIcon,
  PencilSquareIcon,
  LightBulbIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Privacy Policy", href: "#privacy-policy" },
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
    name: "Curated Content",
    description:
      "Vast collection of ingredient-level data makes logging rewarding and educational. Storage tips, health facts, and best flavor pairings.",
    icon: LightBulbIcon,
  },
  {
    name: "Help Food Banks",
    description:
      "When you mark whether you liked a food box item or not, you help your food bank gain crucial insights into how they are doing!",
    icon: HandThumbUpIcon,
  },
]

export default function Example() {
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false) // Loading state

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form behavior (page reload)

    // Simple email validation (can be improved)
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.")
      return
    }

    setIsLoading(true) // Set loading state to true

    try {
      // Send a POST request to your backend
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
        setEmail("") // Reset email field
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.message || "Something went wrong.")
        setSuccessMessage("") // Clear success message if any
      }
    } catch (error) {
      setErrorMessage("Error submitting form. Please try again.")
      setSuccessMessage("") // Clear success message if any
      console.error("Error submitting email:", error)
    } finally {
      setIsLoading(false) // Reset loading state
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
            <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The FeedLink App
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Log your food box items and other groceries with ease, and find
              the right recipes. Help your food bank with feedback!{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=enLHlkADZTs"
                className=" text-blue-700"
              >
                Watch the demo here <span aria-hidden="true">→</span>
              </a>
            </p>

            {/* Adjusted Section: Email Subscription Form */}
            <div className="mt-8">
              {" "}
              {/* Reduced margin for less prominence */}
              <h2 className="text-xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                Sign Up for Early Access
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Want to try out the app? Enter your email below, and we’ll email
                you everything you need to log in.
              </p>
              <form onSubmit={handleSubmit} className="mt-2 sm:flex">
                <div className="w-full sm:flex sm:items-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update the state when input changes
                    className="w-full px-3 py-2 placeholder-gray-400 text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:max-w-xs"
                    placeholder="Enter your email"
                    required
                    disabled={isLoading} // Disable input when loading
                  />

                  <button
                    type="submit"
                    className={`mt-2 w-full sm:ml-2 sm:mt-0 sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading} // Disable button when loading
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Loading...
                      </span>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>

                {/* Success/Error Messages */}
                {successMessage && (
                  <p className="mt-2 text-sm text-green-600">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
                )}
              </form>
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
