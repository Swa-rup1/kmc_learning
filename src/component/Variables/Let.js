import React from "react";

const Let = () => {
  let name = "ram";
  let address = "Saltar";
  {
    let name = "Harii";
    console.log("Block", name);
  }
  console.log("letname", name);

  const handlelet = () => {
    // alert();
    console.log("name", name, address);
    address = "Damauli";
  };

  return (
    <div className="box">
      <button type="button" onClick={handlelet}>
        Click on
      </button>
      <div>{name}</div>
      <div>{address}</div>
    </div>
  );
};

export default Let;
