import { Grid } from "@mui/material";

import EmployeeCard from "./EmployeeCard";

export default function EmployeeLists({ employees = [] }) {
  if (!employees.length) return null;
  // return (
  //   <Grid container justifyContent="center" mt={6}>
  //     <Typography variant="h3">Search something</Typography>
  //   </Grid>
  // );

  return (
    <Grid container rowSpacing={2} columnSpacing={4} px={2} pb={2}>
      {employees.map((employee) => (
        <Grid key={employee.eid} rowSpacing={2} item xs={12} md={6}>
          <EmployeeCard
            avatarUrl={employee.picture_url}
            nickname={employee.nicknameTH}
            prefix={employee.titleTH}
            name={employee.nameTH}
            lastname={employee.lastnameTH}
            eid={employee.eid}
            email={employee.email}
            position={employee.jobNameTH}
            section={employee.bU8NameEN}
            department={employee.bU6NameEN}
            division={employee.bU5NameEN}
            isAvailabled={employee.stts.toLowerCase() === "a"}
          />
        </Grid>
      ))}
    </Grid>
  );
}
