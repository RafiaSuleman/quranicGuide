import React from "react";
import Link from "next/link";
const plans = [
  {
    title: "Basic",
    price: "$29",
    duration: "/month",
    description: "Perfect for beginners starting their Quran learning journey.",
    features: [
      "2 Live Classes per Week",
      "Beginner Tajweed",
      "Weekly Practice",
      "Email Support",
    ],
    popular: false,
  },
  {
    title: "Standard",
    price: "$49",
    duration: "/month",
    description: "Our most popular plan for consistent Quran learning.",
    features: [
      "4 Live Classes per Week",
      "Advanced Tajweed",
      "Homework & Assessments",
      "One-on-One Feedback",
      "Priority Support",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "$79",
    duration: "/month",
    description: "Personalized learning with dedicated Quran teachers.",
    features: [
      "Daily Live Classes",
      "One-on-One Sessions",
      "Tafseer Classes",
      "Quranic Arabic",
      "24/7 Support",
      "Progress Reports",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="min-h-screen bg-[#F7E7CE] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#191970]">
            Choose Your Learning Plan
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
            Flexible and affordable pricing designed to help students of all
            ages learn the Quran with confidence and expert guidance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-4 border-[#191970]"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#191970] px-5 py-2 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h2 className="text-3xl font-bold text-[#191970]">
                {plan.title}
              </h2>

              <div className="mt-6 flex items-end">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>

                <span className="ml-2 text-lg text-gray-500">
                  {plan.duration}
                </span>
              </div>

              <p className="mt-5 text-gray-600">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3 text-xl text-green-600">✔</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contactus">
                <button className="mt-10 w-full rounded-xl bg-[#191970] py-3 text-lg font-semibold text-white transition hover:bg-[#14145f]">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ / CTA */}
        <div className="mt-24 rounded-3xl bg-[#191970] p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Begin Your Quran Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
            Join hundreds of students learning the Quran with experienced
            teachers. Choose a plan that fits your goals and start learning
            today.
          </p>

          <Link href="/contactus">
            <button className="mt-10 w-full rounded-xl bg-white py-3 text-lg font-semibold text-[#191970]  transition">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
