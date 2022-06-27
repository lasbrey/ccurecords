// import React from "react";
// import PageTitle from "../components/Typography/PageTitle";
// import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";
// import XLSX from "xlsx";
// import { make_cols } from '../components/excel/makeColumns';
// import { SheetJSFT } from '../components/excel/type';
 
// class importUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: {},
//       data: [],
//       cols: []
//     }
//     this.handleFile = this.handleFile.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
 
//   handleChange(e) {
//     const files = e.target.files;
//     if (files && files[0]) this.setState({ file: files[0] });
//   };
 
//   handleFile() {
//     /* Boilerplate to set up FileReader */
//     const reader = new FileReader();
//     const rABS = !!reader.readAsBinaryString;
 
//     reader.onload = (e) => {
//       /* Parse data */
//       const bstr = e.target.result;
//       const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_json(ws);
//       /* Update state */
//       this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
//         console.log(JSON.stringify(this.state.data, null, 2));
//       });
 
//     };
 
//     if (rABS) {
//       reader.readAsBinaryString(this.state.file);
//     } else {
//       reader.readAsArrayBuffer(this.state.file);
//     };
//   }
 
//   render() {
//     return (
//       <div>
//         <label htmlFor="file">Upload an excel to Process Triggers</label>
//         <br />
//         <input accept={SheetJSFT} onChange={this.handleChange}
//           className="form-control
//     block
//     w-full
//     px-3
//     py-1.5
//     text-base
//     font-normal
//     text-gray-700
//     bg-white bg-clip-padding
//     border border-solid border-gray-300
//     rounded
//     transition
//     ease-in-out
//     m-0
//     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//           type="file"
//           id="formFile" />
//         <br />
//         <input type='submit' 
//           value="Process Triggers"
//           onClick={this.handleFile} />
//           </div>
      
//     )
//   }
// }
 
// export default importUser;

