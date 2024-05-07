import React from "react";
import "./dataTable.scss";

function DataTable({ data }) {
  return (
    (data.map((item, index) =>(
    <table key={index} className="data-table">
      <tbody>
        <tr>
          <th>Camera</th>
          <td style={{color: "red"}}>{item.camera}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{item.location}</td>
 
        </tr>
        <tr>
          <th>Name</th>
          <td>{item.name}</td>
       
        </tr>
        <tr>
          <th>Status</th>
          <td>{item.alert}</td>
  
        </tr>
      </tbody>
    </table>
    )))
  );
}

export default DataTable;
