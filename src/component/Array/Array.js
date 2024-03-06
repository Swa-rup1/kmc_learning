import React from "react";
import { useNavigate } from "react-router-dom";

const Array = () => {
  const arraymethod = [
    {
      name: "Map",
      roll_no: 1,
      path: "/array",
    },

    {
      name: "reduce",
      roll_no: 2,
      path: "/reduce",
    },

    {
      name: "Filter",
      roll_no: 3,
      path: "/filter",
    },

    {
      name: "foreach",
      roll_no: 4,
      path: "/foreach",
    },
  ];
  // console.log("data", data);
  // console.log("name", data?.[0]);

  const navigate = useNavigate(); // use useNavigate hook here

  const HandleClick = (item) => {
    console.log("event", item);
    navigate(item?.path); // use navigate function from useNavigate
  };
  return (
    //to print object1 name
    // <div> {data?.[0]?.name}</div>,
    // map-filter-reduce-foreach --array retrive methods

    <div>
      {/* {arraymethod?.[0]?.name}  */}
      {/* to show the name of first object in array */}

      <h1>Map Method </h1>
      {arraymethod?.map((item) => (
        <div
          key={item.roll_no}
          onClick={() => HandleClick(item)}
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              border: "1px solid",
              padding: "8px",
              borderCollapse: "collapse",
              fontSize: "16px",
              width: "200px", // Adjust width as needed
            }}
          >
            Name: {item.name}
          </div>
          {/* <table
            style={{
              border: "1px solid",
              padding: "2px",
              borderCollapse: "collapse",
              fontSize: "12px",
              width: "200px", // Adjust width as needed
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid", padding: "7px" }}>Name</th>
                <th style={{ border: "1px solid", padding: "7px" }}>Roll</th>
              </tr>
            </thead>
            <tbody>
              {arraymethod.map((item) => (
                <tr key={item.id}>
                  <td style={{ border: "1px solid", padding: "7px" }}>
                    {item.name}
                  </td>
                  <td style={{ border: "1px solid", padding: "7px" }}>
                    {item.roll_no}
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}

          {/* <div>Name: {item.name}</div>
          <div>Roll: {item.roll_no}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Array;
