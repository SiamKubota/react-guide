import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

import EmployeeCard from "./EmployeeCard";

export default function EmployeeLists(props) {
  const { employees = [] } = props;

  return (
    <Grid container rowSpacing={2} columnSpacing={4} px={2} pb={2}>
      {employees.map((employee) => {
        const {
          eid,
          picture_url,
          titleTH,
          nameTH,
          lastnameTH,
          nicknameTH,
          jobNameTH,
        } = employee;
        return (
          <Grid key={employee.eid} item xs={12} sm={6}>
            <EmployeeCard
              eid={eid}
              avatarUrl={picture_url}
              prefix={titleTH}
              name={nameTH}
              lastname={lastnameTH}
              nickname={nicknameTH}
              position={jobNameTH}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

EmployeeLists.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      eid: PropTypes.string.isRequired,
      nameTH: PropTypes.string.isRequired,
    })
  ),
};
