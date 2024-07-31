import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from "../../data/customersData";

export default function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomerById(id).then(setCustomer);
  }, [])

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{customer.address}</td>
        </tr>
        <tr>
          <th scope="row">Service History</th>
          <th scope="row">Status</th>
        </tr>
        {customer.serviceTickets
          .map((st) => 
        (
          <tr key={st.id}>
            <td>{st.description}</td>
            <td>{st.dateCompleted == null ? "Open" : `Completed ${st.dateCompleted.split("T")[0]}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
