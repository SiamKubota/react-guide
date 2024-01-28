import { Fragment, useState } from "react";

import { useTheme, styled, alpha } from "@mui/material/styles";
import { Paper, Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { animated, useSpring, useTransition } from "@react-spring/web";

import EmployeeLists from "../components/EmployeeLists";

import { DT_DIVISION_EMPLOYEES } from "../utils/mock";

const AnimatedContainer = animated(Container);
const SlidedContainer = styled(AnimatedContainer, {
  shouldForwardProp: (prop) => prop !== "isSearching",
})(({ theme, isSearching, sx, style }) => ({
  ...sx,
  ...style,
  backgroundColor: isSearching ? theme.palette.grey[50] : "transparent",
  transition: "background-color .2s linear",
  borderRadius: 8,
  "&.MuiContainer-root": {
    padding: theme.spacing(0.5),
    // paddingLeft: 0,
    // paddingRight: 0,
  },
}));

// const Animated

export default function EmployeeSearch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const theme = useTheme();
  const [springs, api] = useSpring(() => {
    return {
      from: {
        y: "35vh",
      },
    };
  });

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const onSearchingHandler = () => {
    api.start({
      to: { y: "0vh" },
    });
    const availabledEmps = DT_DIVISION_EMPLOYEES.filter(
      (emp) => emp.stts === "A"
    );
    const resignedEmps = DT_DIVISION_EMPLOYEES.filter(
      (emp) => emp.stts === "C"
    );
    setData([...availabledEmps, ...resignedEmps]);
  };

  return (
    <Fragment>
      <SlidedContainer
        maxWidth="xs"
        isSearching={!!data.length}
        sx={{
          position: "sticky",
          top: 25,
          mt: 3,
        }}
        style={springs}
      >
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
              <InputAdornment
                position="end"
                onClick={onSearchingHandler}
                sx={{ pr: 1, cursor: "pointer" }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SlidedContainer>
      {/* <Container > */}
      <Paper
        sx={(theme) => ({
          bgcolor: alpha(theme.palette.primary.main, 0.25),
          my: 5,
          mx: { xs: 2, sm: 10, lg: 20 },
        })}
      >
        <EmployeeLists employees={data} />
      </Paper>
      {/* </Container> */}
    </Fragment>
  );
}
