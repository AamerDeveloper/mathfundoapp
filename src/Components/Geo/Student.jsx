import React from "react";
import { data } from "../../Services/StuData";

export const Student = () => {
  console.log(data);
  return (
    <React.Fragment >
      <h1>Student List</h1>

      <table>
              <tr>
                  <th>Full Name</th>
                  <th>Age</th>
                  <th>Gender</th>
       </tr>
        {data.map((item) => (
          <tr>
            <td>
              {item.fname} {item.lname}
            </td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};
