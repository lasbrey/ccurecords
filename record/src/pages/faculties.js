import React from "react";
import PageTitle from "../components/Typography/PageTitle";

function Faculties() {
  return (
    <>
      <PageTitle>Faculties</PageTitle>
      <div className="bg-white p-4">
        <ul className="">
          <li className="p-3">Arts, Social and Management Sciences</li>
          <li className="p-3">Natural and Applied Sciences</li>
          <li className="p-3">Education</li>
        </ul>
      </div>
    </>
  );
}

export default Faculties;

