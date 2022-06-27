import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";

function Departments() {
  return (
    <>
      <PageTitle>Departments</PageTitle>
      
      <div className="bg-white p-4">
        <ul className="">
          <li className="p-3">Department of Mathematics & Computer Science</li>
          <li className="p-3">Department of Chemical Sciences</li>
          <li className="p-3">Department of Biological Sciences</li>
          <li className="p-3">Department of Social Sciences</li>
          <li className="p-3">Department of Management Sciences</li>
          <li className="p-3">Humanities</li>
        </ul>
      </div>
    </>
  );
}

export default Departments;
