import { styled } from "@mui/material/styles";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// import AvatarImage from "../assets/21027.jpg";

const Card = styled(MuiCard)(({ theme }) => {
  console.log("theme: ", theme);
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
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
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
        <Typography variant="subtitle1">{`${prefix}${name} ${lastname} ${
          nickname ? `(${nickname})` : ""
        }`}</Typography>
        <Typography variant="subtitle2">{eid}</Typography>
        <Typography>{position}</Typography>
      </CardContent>
    </Card>
  );
}
