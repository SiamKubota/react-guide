import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import { styled } from "@mui/material/styles";

// const StyledConnector = styled("div")({
//   width: 50,
//   height: 50,
//   borderRadius: "50%",
//   backgroundColor: "red",
// });

const APPROVAL_HIERACHY = [
  {
    approverunId: 4622307,
    bU1ID: "SKC",
    bU2ID: "SKC|SEVP",
    bU3ID: "SKC|SEVP|DY50000000",
    bU4ID: "SKC|SEVP|DY50000000|DY50000005",
    bU5ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000",
    bU6ID: "",
    bU7ID: "",
    bU8ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000|0|0|DY52000100",
    bU9ID: "",
    bU10ID: "",
    employeeId: "21027",
    empName: "ชัชชัย ธงถาวรสุวรรณ",
    costCenter: "DY52000100",
    empLevel: "S3",
    empJobRoleId: "SKCN0783",
    empJobRoleName: "Frontend Developer",
    action: "Main",
    step: "1",
    bossId: "11574",
    bossName: "เมธี ศรีสุพรรณดิฐ",
    bossCostCenter: "DY52000000",
    bossPositionId: "Div_Mgr",
    bossEmail: "methee.s@kubota.com",
    bossJobRoleId: "SKCN0804",
    bossJobRoleName: "Digital Technology Division Manager",
    bossLevel: "M2",
    actorJobRoleId: "",
    actorJobRoleName: "",
    actorCostcenter: null,
    actorPosition: "",
    mainId: null,
    mainName: null,
    mainCostcenter: null,
    mainPosition: null,
    startDate: null,
    endDate: null,
  },
  {
    approverunId: 4625700,
    bU1ID: "SKC",
    bU2ID: "SKC|SEVP",
    bU3ID: "SKC|SEVP|DY50000000",
    bU4ID: "SKC|SEVP|DY50000000|DY50000005",
    bU5ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000",
    bU6ID: "",
    bU7ID: "",
    bU8ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000|0|0|DY52000100",
    bU9ID: "",
    bU10ID: "",
    employeeId: "21027",
    empName: "ชัชชัย ธงถาวรสุวรรณ",
    costCenter: "DY52000100",
    empLevel: "S3",
    empJobRoleId: "SKCN0783",
    empJobRoleName: "Frontend Developer",
    action: "Acting",
    step: "2",
    bossId: "16160",
    bossName: "โคซุเกะ นิชิมารุ",
    bossCostCenter: "DY50000001",
    bossPositionId: "Dep_Mgr",
    bossEmail: "kosuke.nishimaru@kubota.com",
    bossJobRoleId: "SKCN1095",
    bossJobRoleName:
      "ผู้จัดการอาวุโสประจำสำนักงานผู้ช่วยกรรมการผู้จัดการใหญ่ สายงานวางแผนและควบคุม/CFO",
    bossLevel: "M2",
    actorJobRoleId: "SKCN0287",
    actorJobRoleName:
      "ผู้ช่วยกรรมการผู้จัดการใหญ่ ผู้จัดการทั่วไปสายงานวางแผนและควบคุม/CFO",
    actorCostcenter: null,
    actorPosition: "VP_Dep",
    mainId: null,
    mainName: null,
    mainCostcenter: null,
    mainPosition: null,
    startDate: null,
    endDate: null,
  },
  {
    approverunId: 4629619,
    bU1ID: "SKC",
    bU2ID: "SKC|SEVP",
    bU3ID: "SKC|SEVP|DY50000000",
    bU4ID: "SKC|SEVP|DY50000000|DY50000005",
    bU5ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000",
    bU6ID: "",
    bU7ID: "",
    bU8ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000|0|0|DY52000100",
    bU9ID: "",
    bU10ID: "",
    employeeId: "21027",
    empName: "ชัชชัย ธงถาวรสุวรรณ",
    costCenter: "DY52000100",
    empLevel: "S3",
    empJobRoleId: "SKCN0783",
    empJobRoleName: "Frontend Developer",
    action: "Main",
    step: "3",
    bossId: "14804",
    bossName: "วราภรณ์ โอสถาพันธุ์",
    bossCostCenter: "DY10000200",
    bossPositionId: "SEVP",
    bossEmail: "waraporn.o@kubota.com",
    bossJobRoleId: "SKCN0126",
    bossJobRoleName: "กรรมการรองผู้จัดการใหญ่อาวุโส",
    bossLevel: "M4",
    actorJobRoleId: "",
    actorJobRoleName: "",
    actorCostcenter: null,
    actorPosition: "",
    mainId: null,
    mainName: null,
    mainCostcenter: null,
    mainPosition: null,
    startDate: null,
    endDate: null,
  },
  {
    approverunId: 4630555,
    bU1ID: "SKC",
    bU2ID: "SKC|SEVP",
    bU3ID: "SKC|SEVP|DY50000000",
    bU4ID: "SKC|SEVP|DY50000000|DY50000005",
    bU5ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000",
    bU6ID: "",
    bU7ID: "",
    bU8ID: "SKC|SEVP|DY50000000|DY50000005|DY52000000|0|0|DY52000100",
    bU9ID: "",
    bU10ID: "",
    employeeId: "21027",
    empName: "ชัชชัย ธงถาวรสุวรรณ",
    costCenter: "DY52000100",
    empLevel: "S3",
    empJobRoleId: "SKCN0783",
    empJobRoleName: "Frontend Developer",
    action: "Main",
    step: "4",
    bossId: "16308",
    bossName: "จูนจิ โอตะ",
    bossCostCenter: "DY10000100",
    bossPositionId: "President",
    bossEmail: "junji.ota@kubota.com",
    bossJobRoleId: "SKCN0125",
    bossJobRoleName: "กรรมการผู้จัดการใหญ่",
    bossLevel: "M4",
    actorJobRoleId: "",
    actorJobRoleName: "",
    actorCostcenter: null,
    actorPosition: "",
    mainId: null,
    mainName: null,
    mainCostcenter: null,
    mainPosition: null,
    startDate: null,
    endDate: null,
  },
];

export default function ApprovalHierachyModal({
  opened,
  handleClose,
  fullname,
  eid,
}) {
  return (
    <Dialog open={opened} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h6">
          <strong>Approval Hierachy</strong>
        </Typography>
        <Typography variant="subtitle2">
          {fullname} ({eid})
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 5, right: 5 }}
        >
          <CloseIcon color="error" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stepper orientation="vertical">
          {APPROVAL_HIERACHY.map((step) => (
            <Step key={step.approverunId} active completed={false}>
              <StepLabel>
                <strong>
                  {step.action} - {step.bossName} ({step.bossId})
                </strong>
              </StepLabel>
              <StepContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
                  mb={0.5}
                >
                  <AlternateEmailIcon
                    fontSize="small"
                    sx={{ color: (theme) => theme.palette.grey[600] }}
                  />
                  <Typography variant="subtitle2">{step.bossEmail}</Typography>
                  <Tooltip title="Copy">
                    <IconButton
                      onClick={() => {
                        navigator.clipboard.writeText(step.bossEmail);
                      }}
                      size="small"
                      sx={{ color: (theme) => theme.palette.grey[400] }}
                    >
                      <ContentCopyIcon sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box
                  sx={{ display: "flex", alignContent: "center", columnGap: 1 }}
                >
                  <BusinessCenterIcon
                    fontSize="small"
                    sx={{ color: (theme) => theme.palette.grey[600] }}
                  />
                  <Typography variant="subtitle2">
                    {step.bossJobRoleName}
                  </Typography>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </DialogContent>
    </Dialog>
  );
}

ApprovalHierachyModal.propTypes = {
  opened: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  fullname: PropTypes.string.isRequired,
  eid: PropTypes.string.isRequired,
};

ApprovalHierachyModal.defaultProps = {
  opened: false,
};
