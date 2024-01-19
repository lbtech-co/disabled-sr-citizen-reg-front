import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CSSProperties } from "react";
import { colors } from "../constants/constants";

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
          minHeight: "130px",
          padding: "10px",
        },
      }}
    >
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}

      <DialogContent>
        <DialogContentText style={dialogStyle}>
          {dialogContent || (
            <span style={{ fontSize: "18px" }}>
              Are you sure want to delete this? This action can not be undone.
            </span>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={dialogActionStyle}>
        <Button onClick={handleClose} style={cancelButtonStyle}>
          Cancel
        </Button>
        <Button onClick={handleAgree} autoFocus style={submitButtonStyle}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const cancelButtonStyle: CSSProperties = {
  backgroundColor: colors.red,
  color: colors.white,
  textTransform: "none",
};

const dialogActionStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
};

const submitButtonStyle: CSSProperties = {
  backgroundColor: colors.blue,
  color: colors.white,
  textTransform: "none",
};

const dialogStyle: CSSProperties = {
  color: colors.black,
};
