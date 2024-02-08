import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import SchemaIcon from "@mui/icons-material/Schema";

import ApprovalHierachyModal from "./ApprovalHierachyModal";

const Card = styled(MuiCard)({
  display: "flex",
  alignItems: "center",
  height: "100%",
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
  eid,
  position,
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
      <Card>
        <CardMedia
          component="img"
          image={avatarUrl}
          alt="employee_avatar"
          sx={{ objectFit: "contain", width: { xs: 80, sm: 120 } }}
        />
        <CardContent>
          <Typography variant="subtitle1">{`${prefix}${name} ${lastname} ${
            nickname ? `(${nickname})` : ""
          }`}</Typography>
          <Typography variant="subtitle2">{eid}</Typography>
          <Typography variant="subtitle2">{position}</Typography>
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
  eid: PropTypes.string,
  position: PropTypes.string,
};

EmployeeCard.defaultProps = {
  avatarUrl: "",
};
