import { Grid, Typography } from "@mui/material";

export default function EmployeeLists({ employees = [] }) {
  if (!employees.length)
    return (
      <Grid container justifyContent="center" mt={6}>
        <Typography variant="h3">Search something</Typography>
      </Grid>
    );

  return (
    <Grid container>
      <Grid item></Grid>
    </Grid>
  );
}
