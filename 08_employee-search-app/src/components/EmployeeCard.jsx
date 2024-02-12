import { Fragment, useState } from "react";
import {
  styled,
  //  alpha
} from "@mui/material/styles";
import {
  Grid,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Avatar,
  Typography,
  Tooltip,
  IconButton,
  Box,
} from "@mui/material";
import SchemaIcon from "@mui/icons-material/Schema";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

import ApprovalHierachyModal from "./ApprovalHierachyModal";

// import AvatarImage from "../assets/21027.jpg";

const Card = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== "isAvailabled",
})(({ theme, isAvailabled }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    height: "100%",
    color: isAvailabled
      ? theme.palette.common.black
      : theme.palette.error.contrastText,
    backgroundColor: isAvailabled
      ? theme.palette.common.white
      : theme.palette.error.light,
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    },
  };
});

const CardContent = styled(MuiCardContent)({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  position: "relative",
});

export default function EmployeeCard({
  avatarUrl,
  nickname,
  prefix,
  name,
  lastname,
  eid,
  email,
  position,
  section,
  department,
  division,
  isAvailabled,
}) {
  const [openedModal, setOpenedModal] = useState(false);

  const handleOpenModal = () => {
    setOpenedModal(true);
  };

  const handleCloseModal = () => {
    setOpenedModal(false);
  };

  return (
    <Fragment>
      <Card elevation={4} isAvailabled={isAvailabled}>
        <Box sx={{ position: "relative" }}>
          <Avatar
            variant="square"
            src={avatarUrl}
            alt={`${name}-avatar`}
            sx={{
              objectFit: "contain",
              width: { xs: 80, sm: 130 },
              height: "100%",
            }}
          >
            <BrokenImageIcon sx={{ fontSize: 100 }} />
          </Avatar>
          {nickname && (
            <Typography
              color="white"
              variant="subtitle1"
              align="center"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                background: (theme) =>
                  `linear-gradient(to top, ${
                    isAvailabled
                      ? theme.palette.primary.main
                      : theme.palette.error.light
                  }, transparent )`,
                textShadow: (theme) =>
                  `1px 1px  ${theme.palette.secondary.main}`,
                width: { xs: 80, sm: 130 },
                pt: 1,
              }}
            >
              {nickname}
            </Typography>
          )}
        </Box>
        <CardContent>
          {isAvailabled && (
            <Tooltip title="การอนมัติ">
              <IconButton
                onClick={handleOpenModal}
                sx={{ position: "absolute", bottom: 0, right: 0 }}
              >
                <SchemaIcon
                  sx={{
                    transform: "rotate(270deg)",
                    color: (theme) => theme.palette.secondary.light,
                  }}
                />
              </IconButton>
            </Tooltip>
          )}
          <Typography variant="subtitle1">{`${prefix}${name} ${lastname} (${eid})`}</Typography>
          <Typography variant="subtitle2">{email}</Typography>
          <Typography variant="subtitle2">{position}</Typography>
          <Grid container>
            <Grid item xs={12} lg={2}>
              <Typography variant="subtitle2">
                <strong>Section: </strong>
              </Typography>
            </Grid>
            <Grid item xs ml={{ xs: 2, md: 0 }}>
              <Typography variant="subtitle2">
                {section ? section : "N/A"}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={2.5} xl={2}>
              <Typography variant="subtitle2">
                <strong>Department: </strong>
              </Typography>
            </Grid>
            <Grid item xs ml={{ xs: 2, md: 0 }}>
              <Typography variant="subtitle2">
                {department ? department : "N/A"}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={2}>
              <Typography variant="subtitle2">
                <strong>Division: </strong>
              </Typography>
            </Grid>
            <Grid item xs ml={{ xs: 2, md: 0 }}>
              <Typography variant="subtitle2">
                {division ? division : "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <ApprovalHierachyModal
        opened={openedModal}
        handleClose={handleCloseModal}
        fullname={`${prefix}${name} ${lastname}`}
        eid={eid}
      />
    </Fragment>
  );
}
