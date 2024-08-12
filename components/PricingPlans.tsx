import React from "react";

type propType = {
  title: string;
  description: string;
  price: string;
  features: featureType[];
};
type featureType = { isChecked: boolean; text: string };

const PlanCard = ({ title, description, price, features }: propType) => {
  const getIconClassName = (isChecked: boolean) => {
    return isChecked ? "text-green-700" : "text-red-700";
  };

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          {title}
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">{description}</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-fuchsia-900 sm:text-4xl">
            {price}
          </strong>

          <span className="text-sm font-medium text-gray-700">/month</span>
        </p>

        {/* <a
          className="mt-4 block rounded border border-fuchsia-600 bg-fuchsia-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a> */}
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">
          What&apos;s included:
        </p>

        <ul className="mt-2 space-y-2 sm:mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`h-5 w-5 ${getIconClassName(feature.isChecked)}`}
              >
                {feature.isChecked ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>

              <span className="text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingPlans = ({ plans }: { plans: propType[] }) => {
  return (
    <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
