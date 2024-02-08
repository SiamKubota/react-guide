import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ApprovalHierachyModal(props) {
  const { onClose, open, fullname, eid } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>
        <Typography variant="h6">
          <strong>Approval Hierachy</strong>
        </Typography>
        <Typography variant="subtitle2">
          {fullname} ({eid})
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon color="error" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stepper orientation="vertical">
          <Step active>
            <StepLabel>
              <Typography>TEST</Typography>
            </StepLabel>
          </Step>
        </Stepper>
      </DialogContent>
    </Dialog>
  );
}
