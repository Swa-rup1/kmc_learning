import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Variable",
      path: "/variable",
    },

    {
      name: "Object",
      path: "/object",
    },

    {
      name: "Array",
      path: "/array",
    },
  ];

  return (
    <div>
      {data?.map((item) => (
        <div key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default Home;
