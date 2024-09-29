import Image from "next/image"
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

const privacyPolicy = [
  {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Information We Collect",
        content:
          "Currently, FeedLink does not collect any personal data. However, in future updates, we may collect personal information such as your name, email, and address if you choose to register an account. Additionally, we may collect device information and app usage data to improve the service.",
      },
      {
        heading: "2. Use of Information",
        content:
          "Even though we don’t currently collect data, if that changes, we will use your data to: provide and improve our services, personalize your experience based on the food items you log, and send updates and notifications regarding app features and services.",
      },
      {
        heading: "3. Sharing of Information",
        content:
          "FeedLink does not share your personal data with third parties. In future versions, we may share anonymized, aggregated data with service providers or food banks to provide insights into food consumption preferences.",
      },
      {
        heading: "4. Data Security",
        content:
          "We use industry-standard measures to protect your information and ensure your data is secure. While we don’t currently store data, any future data collection will be encrypted and securely stored.",
      },
      {
        heading: "5. Data Retention",
        content:
          "If we begin to collect data, it will be retained for as long as necessary to provide the service or as required by law. You will have the option to request the deletion of your personal data.",
      },
      {
        heading: "6. Children’s Privacy",
        content:
          "FeedLink does not knowingly collect personal information from children under the age of 13. If we become aware of any data collection from children, we will take immediate steps to delete it.",
      },
      {
        heading: "7. Your Rights",
        content:
          "You have the right to access any personal data we hold about you, request the correction or deletion of your data, and opt-out of receiving communications from us.",
      },
      {
        heading: "8. Third-Party Services",
        content:
          "FeedLink may integrate with third-party services like analytics or cloud providers. Any data shared with these services will be governed by their privacy policies, which we encourage you to review.",
      },
      {
        heading: "9. Changes to This Policy",
        content:
          "We may update this Privacy Policy to reflect changes in our practices. Any changes will be communicated through the app, and the updated policy will be posted with a new effective date.",
      },
      {
        heading: "10. Contact",
        content:
          "For any questions or concerns regarding this Privacy Policy, please contact us at hberissodev@gmail.com or at 200 E 36th St, New York, NY 11016.",
      },
    ],
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
            {privacyPolicy[0].sections.map((section, index) => (
              <div key={index} className="mt-10">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {section.heading}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
