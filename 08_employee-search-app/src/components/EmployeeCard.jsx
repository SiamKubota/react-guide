import { styled } from "@mui/material/styles";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import SchemaIcon from "@mui/icons-material/Schema";

// import AvatarImage from "../assets/21027.jpg";

const Card = styled(MuiCard)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "red",
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
  prefix,
  name,
  lastname,
  nickname,
  eid,
  position,
}) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={avatarUrl}
        alt="employee_avatar"
        sx={{ objectFit: "contain", width: { xs: 80, sm: 120 } }}
      />
      <CardContent>
        <Tooltip title="การอนมัติ">
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <SchemaIcon
              sx={{
                transform: "rotate(90deg)",
                color: (theme) => theme.palette.secondary.light,
              }}
            />
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle1">{`${prefix}${name} ${lastname} ${
          nickname ? `(${nickname})` : ""
        }`}</Typography>
        <Typography variant="subtitle2">{eid}</Typography>
        <Typography>{position}</Typography>
      </CardContent>
    </Card>
  );
}
