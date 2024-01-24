import { Fragment, useState } from "react";

import { Paper, Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import EmployeeLists from "../components/EmployeeLists";

export default function EmployeeSearch() {
  const [search, setSearch] = useState("");

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Fragment>
      <Container maxWidth="xs" sx={{ position: "sticky", top: 25 }}>
        <Paper>
          <TextField
            color="secondary"
            value={search}
            onChange={onChangeSearchInput}
            fullWidth
            // variant="standard"
            label="ค้นหา"
            placeholder="พิมพ์คำค้นหา เช่น ชื่อ ,สกุล ,หน่วยงาน"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ pr: 1 }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Paper sx={{ height: "500vh" }}>
          <EmployeeLists />
        </Paper>
      </Container>
    </Fragment>
  );
}
