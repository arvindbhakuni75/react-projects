import React from "react";
import Table from "react-bootstrap/Table";

function ListRendring() {
  const user = [
    {
      name: "Aro",
      email: "aro@gmail",
      address: [
        { Hn: 10, city: "Almora", country: "India" },
        { Hn: 105, city: "Ranikhet", country: "India" },
        { Hn: 85, city: "Rudrapur", country: "India" },
      ],
    },
    {
      name: "Laxita",
      email: "laxita@gmail",
      address: [
        { Hn: 10, city: "Nainital", country: "India" },
        { Hn: 105, city: "Haldwani", country: "India" },
        { Hn: 85, city: "Noida", country: "India" },
      ],
    },
    {
      name: "Arvind",
      email: "ar@gmail",
      address: [
        { Hn: 10, city: "Almora", country: "India" },
        { Hn: 105, city: "Nainital", country: "India" },
        { Hn: 85, city: "Grugram", country: "India" },
      ],
    },
  ];

  return (
    <div>
      <h1>List with Nested Array</h1> <br />
      <br />
      <Table variant="dark" striped>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {user.map((item, id) => (
            <tr key={id}>
              <td>{id +1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table variant="dark" striped>
                  <tbody>
                    {item.address.map((data, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListRendring;
