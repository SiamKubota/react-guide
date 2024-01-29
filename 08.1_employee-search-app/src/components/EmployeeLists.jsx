export default function EmployeeLists(props) {
  const { employees = [] } = props;

  return (
    <div>
      {employees.map((employee) => (
        <p>{employee.eid}</p>
      ))}
    </div>
  );
}
