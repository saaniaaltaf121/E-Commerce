import React from 'react';
import Card from './card'; // Adjust the path if needed
import { faTruck, faUndo, faTags, faHeadset } from '@fortawesome/free-solid-svg-icons';

// Define the data array
const data = [
  {
    icon: faTruck,
    title: "Free Delivery",
    desc: "Order from all items"
  },
  {
    icon: faUndo,
    title: "Return and Refund",
    desc: "Money back guarantee"
  },
  {
    icon: faTags,
    title: "Member Discount",
    desc: "On Order Over $99.00"
  },
  {
    icon: faHeadset,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day"
  }
];

// Define the Feature component
const Feature = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
