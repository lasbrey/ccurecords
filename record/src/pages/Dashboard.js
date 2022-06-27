import React, { useState, useEffect } from "react";
import InfoCard from "../components/Cards/InfoCard";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import axios from "axios";
import { ReactComponent as Staffers } from "../utils/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Pagination,
} from "@windmill/react-ui";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [staff, setStaff] = useState([]);
  console.log(staff);
  // pagination setup
  const resultsPerPage = 5;
  const totalResults = staff.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }
  //get staff && on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    getAllStaff();
  });

  const getAllStaff = () => {
    axios.get(`http://localhost:5000/userdata`).then((res) => {
      const staffDetails = res.data;
      setStaff(staffDetails);
    });
  };

  useEffect(() => {
    setData(staff.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Teaching Staff" value={totalResults}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Faculties " value="4">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Departments" value="20">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Non-Teaching staff " value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>STAFF</TableCell>
              <TableCell>FACULTY</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>CATEGORY</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {staff.map((ted, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">
                        {ted.firstName} {ted.lastName}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {ted.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{ted.faculty}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{ted.DateOfBirth}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{ted.category}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Dashboard;
