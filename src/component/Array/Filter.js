import React from "react";

const Filter = () => {
  const data = [
    {
      name: "Ram",
      Std_ID: 1,
      phone_no: 9748569896,
      address: "Koteshwor",
    },
    {
      name: "Syham",
      Std_ID: 2,
      phone_no: 9630147410,
      address: "Ratnapark",
    },
    {
      name: "Hari",
      Std_ID: 3,
      phone_no: 9741014741,
      address: "Bagbazar",
    },
    {
      name: "Ganesh",
      Std_ID: 4,
      phone_no: 9856741230,
      address: "Chabahil",
    },

    {
      name: "Ganesh",
      Std_ID: 5,
      phone_no: 9515951595,
      address: "Chabahil",
    },
  ];

  const [isData, setIsData] = React.useState(data);

  const filterdata = isData?.filter((item) => item.Std_ID === 1);

  const HandleDelete = (Std_ID) => {
    const deleteData = isData?.filter((item) => item.Std_ID != Std_ID);
    setIsData(deleteData);
  };
  // console.log(
  //   "filter",
  //   isData?.filter((item) => item.Std_ID === 1)
  // );

  return (
    <div>
      <div>Filter</div>

      {/* Using Filter */}
      <div>
        Name: {filterdata?.[0]?.name} <br />
        Address: {filterdata?.[0]?.address}
      </div>
      <hr />

      {/* Using Map */}
      <div>
        {filterdata?.map((item, index) => (
          <div key={index + 1}>
            <div>Name: {item.name}</div>
            <div>Address: {item.address}</div>
          </div>
        ))}
      </div>
      <br />
      <hr />
      {/* Usestate Mapping */}

      <div>
        {isData?.map((item) => (
          <div key={item.Std_ID}>
            <div>Name: {item.name}</div>
            <div>Address: {item.address}</div>
            <button onClick={() => HandleDelete(item.id)}>Delete</button>

            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
