import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CSSProperties } from "react";
import { colors } from "../utils/Constants";

interface CustomDialogProps {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
  dialogTitle?: string;
  dialogContent?: string;
}

export default function CustomDialog({
  open,
  handleClose,
  handleAgree,
  dialogTitle,
  dialogContent,
}: CustomDialogProps) {
  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{
        style: {
          minHeight: "150px",
        },
      }}
    >
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}

      <DialogContent>
        <DialogContentText style={dialogStyle}>
          {dialogContent || (
            <h4>
              Are you sure want to delete this? This action can not be undone.
            </h4>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} style={cancelButtonStyle}>
          Cancel
        </Button>
        <Button onClick={handleAgree} autoFocus style={submitButtonStyle}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const cancelButtonStyle: CSSProperties = {
  backgroundColor: "#D10000",
  color: colors.white,
  textTransform: "none",
};

const submitButtonStyle: CSSProperties = {
  backgroundColor: colors.blue,
  color: colors.white,
  textTransform: "none",
};

const dialogStyle: CSSProperties = {
  color: colors.black,
};
