"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import ChatArea from "./ChatArea";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChatBot = () => {
  const [open, setOpen] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const smallScreenDialogStyle = {
    marginTop: 10,
    marginLeft: 100,
    color: "black",
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const isFullScreen = () => {
    setIsExpanded(!isExpanded);
  };

  const ExpandCollapseIcon = isExpanded ? CloseFullscreenIcon : OpenInFullIcon;

  return (
    <div>
      <Button
        sx={{ float: "right", width: "6%", borderRadius: "50%", padding: 0 }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <img
          src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg"
          alt="chat"
          style={{ borderRadius: "50%" }}
        />
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen={isExpanded}
        sx={isExpanded ? {} : smallScreenDialogStyle}
        PaperProps={{
          style: {
            backgroundColor: "#272829",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#793FDF",
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, color: "white" }}
            id="customized-dialog-title"
          >
            Modal title
          </DialogTitle>
          <Box>
            <IconButton
              aria-label="expand"
              onClick={isFullScreen}
              sx={{ color: "white" }}
            >
              <ExpandCollapseIcon />
            </IconButton>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <DialogContent>
          <ChatArea isExpanded={isExpanded} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ChatBot;
