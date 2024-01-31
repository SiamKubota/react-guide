import Grid from "@mui/material/Grid";
import MuiCard from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)({
  display: "flex",
  alignItems: "center",
  height: "100%",
});

export default function EmployeeLists(props) {
  const { employees = [] } = props;

  return (
    <Grid container spacing={2}>
      {employees.map((employee) => (
        <Grid key={employee.eid} item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              alt="employee_avatar"
              image={employee.picture_url}
              sx={{ objectFit: "contain", width: { xs: 80, sm: 120 } }}
            />
            <CardContent>
              <Typography variant="subtitle1">
                {`${employee.titleTH}${employee.nameTH} ${
                  employee.lastnameTH
                } ${
                  employee.nicknameTH ? `(${employee.nicknameTH})` : ""
                }`}{" "}
              </Typography>
              <Typography variant="subtitle2">{employee.eid}</Typography>
              <Typography variant="subtitle2">{employee.jobNameTH}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
