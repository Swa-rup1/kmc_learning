import React from "react";

const Object = () => {
  const info = {
    name: "Sagar Pun",
    address: "Pulchok",
  };

  info.name = "Suvarna";
  info.contact = 9874125632;
  delete info.address;
  console.log("address", info.address, "name", info.name);

  return (
    <div>
      <div>good`</div>
    </div>
  );
};

export default Object;
