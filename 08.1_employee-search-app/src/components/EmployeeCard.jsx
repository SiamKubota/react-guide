import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import SchemaIcon from "@mui/icons-material/Schema";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

import ApprovalHierachyModal from "./ApprovalHierachyModal";

const Card = styled(MuiCard)(({ theme, isAvailabled }) => {
  return {
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: isAvailabled
      ? theme.palette.common.white
      : theme.palette.error.light,
  };
});

const CardContent = styled(MuiCardContent)({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  // marginTop: 16,
  position: "relative",
});

export default function EmployeeCard({
  avatarUrl,
  prefix,
  name,
  lastname,
  nickname,
  email,
  eid,
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
      <Card isAvailabled={isAvailabled}>
        <Box sx={{ position: "relative" }}>
          {/* <CardMedia
            component="img"
            image={avatarUrl}
            alt="employee_avatar"
            sx={{ objectFit: "contain", width: { xs: 80, sm: 120 } }}
          /> */}
          <Avatar
            variant="square"
            src={avatarUrl}
            alt={`${name}-avatar`}
            sx={{
              objectFit: "contain",
              height: "100%",
              width: { xs: 80, sm: 120 },
            }}
          >
            <BrokenImageIcon sx={{ fontSize: 100 }} />
          </Avatar>
          {nickname && (
            <Typography
              color="white"
              align="center"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: { xs: 80, sm: 120 },
                background: (theme) =>
                  `linear-gradient(to top, ${
                    isAvailabled
                      ? theme.palette.primary.main
                      : theme.palette.error.light
                  }, transparent)`,
                textShadow: (theme) =>
                  `1px 1px ${theme.palette.secondary.main}`,
                pt: 1,
              }}
            >
              {nickname}
            </Typography>
          )}
        </Box>
        <CardContent>
          <Typography variant="subtitle1">{`${prefix}${name} ${lastname} (${eid})`}</Typography>

          <Typography variant="subtitle2">{email}</Typography>
          <Typography variant="subtitle2">{position}</Typography>
          <Grid container>
            <Grid item xs={12} lg={2}>
              <Typography variant="subtitle2">
                <strong>Section: </strong>
              </Typography>
            </Grid>
            <Grid item xs ml={{ xs: 2, lg: 0 }}>
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
            <Grid item xs ml={2}>
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
            <Grid item xs ml={{ xs: 2, lg: 0 }}>
              <Typography variant="subtitle2">{division}</Typography>
            </Grid>
          </Grid>
          {isAvailabled && (
            <IconButton
              onClick={handleOpenModal}
              sx={{ position: "absolute", bottom: 0, right: 0 }}
            >
              <SchemaIcon
                color="secondary"
                sx={{
                  transform: "rotate(-90deg)",
                }}
              />
            </IconButton>
          )}
        </CardContent>
      </Card>

      <ApprovalHierachyModal
        onClose={handleCloseModal}
        open={openedModal}
        fullname={`${prefix}${name} ${lastname}`}
        eid={eid}
      />
    </Fragment>
  );
}

EmployeeCard.propTypes = {
  avatarUrl: PropTypes.string,
  prefix: PropTypes.oneOf(["นาย", "นาง", "นางสาว"]),
  name: PropTypes.string,
  lastname: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
  eid: PropTypes.string,
  position: PropTypes.string,
  section: PropTypes.string,
  department: PropTypes.string,
  division: PropTypes.string,
  isAvailabled: PropTypes.bool,
};

EmployeeCard.defaultProps = {
  avatarUrl: "",
};
