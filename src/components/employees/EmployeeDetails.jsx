import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeById } from "../../data/employeesData";

export default function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployeeById(id).then(setEmployee);
  }, [])

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Employee</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
        </tr>
        <tr>
          <th scope="row">Service Tickets</th>
          <th scope="row">Status</th>
        </tr>
        {employee.serviceTickets
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
