import React from "react";
import Var from "../Variables/Var";
import Let from "../Variables/Let";
import { useNavigate } from "react-router-dom";
const Variable = () => {
  const navigate = useNavigate();
  const handelBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button type="button" onClick={handelBack}>
        Back to Home
      </button>
      <hr />
      <p>This is Var Componenet</p>
      <Var />
      <hr />
      <p>This is Let Componenet</p>
      <Let />
    </div>
  );
};

export default Variable;
