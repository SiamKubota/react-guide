import { useState } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

import EmployeeLists from "../components/EmployeeLists";

import { DT_DIVISION_EMPLOYEES } from "../utils/mock";

export default function EmployeeSearchedPage() {
  const [search, setSearch] = useState("");

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearchingHandler = () => {
    alert(search);
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          position: "sticky",
          top: 25,
          mt: 3,
          backgroundColor: "white",
        }}
      >
        <TextField
          label="ค้นหา"
          color="secondary"
          placeholder="พิมพ์คำค้นหา เช่น ชื่อ, สกุล, หน่วยงาน"
          fullWidth
          value={search}
          onChange={onChangeSearchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={onClickSearchingHandler}
                sx={{
                  pr: 1,
                  cursor: "pointer",
                }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>
      <Paper
        sx={(theme) => ({
          bgcolor: alpha(theme.palette.primary.main, 0.25),
          my: 5,
          mx: { xs: 2, sm: 10, lg: 20 },
        })}
      >
        <EmployeeLists employees={DT_DIVISION_EMPLOYEES} />
      </Paper>
    </>
  );
}
