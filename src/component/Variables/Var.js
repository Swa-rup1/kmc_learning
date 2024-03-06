import React from "react";

const Var = () => {
  var name = "xyz";
  var address = "KTM";
  {
    var name = "abc";
  }

  const handleVar = () => {
    // alert();
    console.log("name", name, address);
    address = "Lalitpur";
  };

  return (
    <div className="box">
      <button type="button" onClick={handleVar}>
        Go back
      </button>
      <div>{name}</div>
      <div>{address}</div>
    </div>
  );
};

export default Var;
