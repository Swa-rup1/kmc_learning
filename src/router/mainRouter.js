import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../component/Home";
import Variable from "../component/Variables/Variable";
import Object from "../component/Object";
import Array from "../component/Array/Array";
import Filter from "../component/Array/Filter";
import Reduce from "../component/Array/Reduce";
import Foreach from "../component/Array/Foreach";
// const router = createBrowserRouter([

// ])

export const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/variable" element={<Variable />} />
      <Route path="/object" element={<Object />} />
      <Route path="/array" element={<Array />} />
      <Route path="/reduce" element={<Reduce />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/foreach" element={<Foreach />} />
    </Route>
  )
);
