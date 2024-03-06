import React from "react";

const Foreach = () => {
  const arr = [12, 23, 45, 67, 2, 90, 29];
  let new_arr = [];
  const adddata = arr?.forEach((item) => {
    const afteradd = item + 2;
    return new_arr.push(afteradd);
  });
  console.log("new_arr", new_arr);

  return (
    <>
      <div>Foreach</div>
      <div>
        {new_arr?.map((item, index) => (
          <div key={index + 1}>
            <div>new-arr: {item}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Foreach;
