import { useState } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";

import { animated, useSpring } from "@react-spring/web";

import EmployeeLists from "../components/EmployeeLists";

import { DT_DIVISION_EMPLOYEES } from "../utils/mock";

const AnimatedContainer = animated(Container);
const SlidedContainer = styled(AnimatedContainer)(
  ({ theme, sx, style, isSearching }) => {
    return {
      ...sx,
      ...style,
      backgroundColor: isSearching ? theme.palette.grey[200] : "transparent",
      borderRadius: 8,
      "&.MuiContainer-root": {
        padding: theme.spacing(0.5),
      },
      ...(isSearching
        ? {
            boxShadow: `2px 2px 8px ${alpha(theme.palette.common.black, 0.5)}`,
            "& .MuiSvgIcon-root, & .MuiTypography-root": {
              color: theme.palette.secondary.main,
            },
            "& .MuiInputBase-root": {
              backgroundColor: theme.palette.common.white,
              "& .MuiSvgIcon-root": {
                color: theme.palette.grey[500],
              },
            },
          }
        : null),
    };
  }
);

export default function EmployeeSearchedPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
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

  const onClickSearchingHandler = () => {
    // alert(search);
    api.start({
      to: { y: "0vh" },
    });
    setData(DT_DIVISION_EMPLOYEES);
  };

  return (
    <>
      <SlidedContainer
        maxWidth="xs"
        isSearching={data.length}
        sx={{
          position: "sticky",
          top: 10,
        }}
        style={springs}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 2,
          }}
          mt={1}
          mb={2}
        >
          <GroupsIcon sx={{ fontSize: 48 }} />
          <Typography variant="h4" align="center">
            Employees Search
          </Typography>
        </Box>
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
      </SlidedContainer>
      <Paper
        sx={(theme) => ({
          bgcolor: alpha(theme.palette.primary.main, 0.25),
          my: 5,
          mx: { xs: 2, sm: 10, lg: 20 },
        })}
      >
        <EmployeeLists employees={data} />
      </Paper>
    </>
  );
}
