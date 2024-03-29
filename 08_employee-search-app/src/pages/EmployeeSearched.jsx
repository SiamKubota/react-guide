import {
  Fragment,
  useState,
  //  useEffect
} from "react";
import { useTranslation } from "react-i18next";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  InputAdornment,
  ButtonGroup,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";

import { animated, useSpring } from "@react-spring/web";

import EmployeeLists from "../components/EmployeeLists";

import { DT_DIVISION_EMPLOYEES } from "../utils/mock";

const AnimatedContainer = animated(Container);
const SlidedContainer = styled(AnimatedContainer, {
  shouldForwardProp: (prop) => prop !== "isSearching",
})(({ theme, isSearching, sx, style }) => ({
  ...sx,
  ...style,
  backgroundColor: isSearching ? theme.palette.grey[200] : "transparent",
  borderRadius: 8,
  zIndex: 1,
  // transition:
  //   "background-color 500ms linear, color 500ms linear, shadow 500ms linear",
  transitionProperty: "background-color, color, shadow",
  transitionDuration: "500ms",
  transitionTimingFunction: "linear",
  "&.MuiContainer-root": {
    padding: theme.spacing(0.5),
    ...(isSearching && {
      boxShadow: `2px 2px 8px ${alpha(theme.palette.common.black, 0.5)}`,
      "& .MuiSvgIcon-root, & .MuiTypography-root": {
        color: theme.palette.secondary.main,
      },
      "& .MuiInputBase-root": {
        backgroundColor: theme.palette.common.white,
        "& .MuiSvgIcon-root": { color: theme.palette.grey[500] },
      },
    }),
  },
}));

export default function EmployeeSearch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [springs, api] = useSpring(() => {
    return {
      from: {
        y: "35vh",
      },
    };
  });

  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   const getEmployees = async () => {
  //     const response = await fetch(
  //       "https://d701apsi01-la01skc.azurewebsites.net/skcapi/empsearch",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5fc2tjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE3MDY0OTM5MDIsImlzcyI6Imh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjpbImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiLCJodHRwczovL3A3MDFhcHNpMDEtbGEwMXNrYy5henVyZXdlYnNpdGVzLm5ldCIsImh0dHBzOi8vcDcwMWFwc2kwMS1sYTAxc2tjLmF6dXJld2Vic2l0ZXMubmV0IiwiaHR0cHM6Ly9wNzAxYXBzaTAxLWxhMDFza2MuYXp1cmV3ZWJzaXRlcy5uZXQiXX0.zuJQz3puQFhULfTo33vzLjlkmlPjw6VKxah5_YoW9Js",
  //         },
  //         body: JSON.stringify({
  //           keyword: "Digital Technology",
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     console.log("data: ", data);
  //   };

  //   getEmployees();
  // }, []);

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const onSearchingHandler = () => {
    api.start({
      to: { y: "0vh" },
    });
    // const sortedEmployees = DT_DIVISION_EMPLOYEES.toSorted((a) => {
    //   if (a.stts === "C") return 1;
    //   else return -1;
    // });
    // console.log("testEmps: ", testEmps);
    const availabledEmps = DT_DIVISION_EMPLOYEES.filter(
      (emp) => emp.stts.toLowerCase() === "a"
    );
    const resignedEmps = DT_DIVISION_EMPLOYEES.filter(
      (emp) => emp.stts.toLowerCase() === "c"
    );
    setData([...availabledEmps, ...resignedEmps]);
  };

  const onChangeLanguage = (lang) => () => {
    if (i18n.language === lang) return;
    i18n.changeLanguage(lang);
  };

  return (
    <Fragment>
      <SlidedContainer
        maxWidth="sm"
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
            justifyContent: {
              xs: data.length ? "flex-start" : "center",
              sm: "center",
            },
            alignItems: "center",
            columnGap: 2,
          }}
          mt={1}
          mb={2}
          ml={{ xs: data.length ? 1 : 0, sm: 0 }}
        >
          <GroupsIcon sx={{ fontSize: 48 }} />
          <Typography variant="h4">{t("appName")}</Typography>
          {data.length ? (
            <ButtonGroup
              size="small"
              orientation="vertical"
              variant="outlined"
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <Button
                onClick={onChangeLanguage("th")}
                variant={i18n.language === "th" ? "contained" : "outlined"}
              >
                ไทย
              </Button>

              <Button
                onClick={onChangeLanguage("en")}
                variant={i18n.language === "en" ? "contained" : "outlined"}
              >
                ENG
              </Button>
            </ButtonGroup>
          ) : null}
        </Box>
        <TextField
          color="secondary"
          value={search}
          onChange={onChangeSearchInput}
          fullWidth
          // variant="filled"
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
          mx: { xs: 2, sm: 8, lg: 15 },
        })}
      >
        <EmployeeLists employees={data} />
      </Paper>
      {/* </Container> */}
    </Fragment>
  );
}
