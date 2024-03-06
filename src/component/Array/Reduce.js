import React from "react";

const Reduce = () => {
  const arr = [12, 23, 45, 67, 2, 90, 29];

  const pricedata = [
    {
      price: 12,
      id: 1,
      name: "xyz",
    },

    {
      price: 24,
      id: 2,
      name: "asd",
    },

    {
      price: 98,
      id: 3,
      name: "qwe",
    },

    {
      price: 100,
      id: 4,
      name: "swe",
    },
  ];

  const price_sum = pricedata.reduce((p, c) => {
    console.log("sum: ", p, c.price);
    return p + c.price;
  });
  console.log("sum", price_sum);

  // To find sum
  // const sum = arr.reduce((p, c) => {
  //   console.log("sum: ", p,c);
  //   return p + c;
  // }, 0);
  // console.log("sum: ", sum);

  // To find max value
  // const max = arr.reduce((p, c) => {
  //   return p > c ? p : c;
  // }, 0);
  // console.log("max: ", max);

  // To find  min value

  // const min = arr.reduce((p, c) => {
  //   return p < c ? p : c;
  // }, 12);
  // console.log("min: ", min);

  return (
    <>
      <div>Reduce</div>;<div>Reduce</div>
    </>
  );
};

export default Reduce;
