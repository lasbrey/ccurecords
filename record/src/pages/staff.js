import React, { useState, useEffect } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'

import response from '../utils/tableData'

function Staff() {

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])

  // pagination setup
  const resultsPerPage = 5
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

 

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])


  return (
    <>
      <PageTitle>Academic Staff</PageTitle>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>STAFF</TableCell>
              <TableCell>FACULTY</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((ted, i) => (
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
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}

export default Staff
