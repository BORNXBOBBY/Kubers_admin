import React, { useContext, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import Header from "../../Header/Header";
import { getRequest } from "../../Constant/apiCall";

export default function Users(props) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await getRequest('/auth/users', true)
    const responseData  = await res.json()
    console.log('res', responseData, res.status)
    if(res.status === 200)  setUsers(responseData)

  }

  useEffect(() => {
    getUsers()
  }, [])
 

  
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <Typography variant="h4" className="mt-2">
              Users
            </Typography>
          </div>
          <div className="table-responsive mt-5">
            <table className="table ">
              <tbody className="text-center">
                <tr className="headHover text-white">
                  {/* <th>Date Of Creation </th> */}
                  <th>Full Name</th>
                  <th>Email </th>
                  <th>Mobile</th>
                  <th>Invited By</th>
                </tr>

                {users.map((item, id) => (
                  <tr className="tableHover">
                    <td style={{textTransform:'capitalize'}} >
                      {item.full_name}
                    </td>
                    <td>{item.email}</td>
                    <td>
                      {item.mobile ? item.mobile : 'No Data'}
                    </td>
                    <td>
                        {item.invited_by ? item.invited_by : 'No Data'}

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
