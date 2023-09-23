"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import MessageRow from "./MessageRow";

interface PropsType {
  isExpanded: boolean;
}

const ChatArea = (props: PropsType) => {
  const { isExpanded } = props;
  const [userInput, setUserInput] = React.useState("");
  const [userInputArray, setUserInputArray] = React.useState<string[]>([]);

  const defaultBoxStyle = {
    overflowY: "auto",
    marginBottom: 2,
  };
  const fullScreenStyle = {
    ...defaultBoxStyle,
    height: "440px",
  };
  const smallScreenStyle = {
    ...defaultBoxStyle,
    height: "290px",
    width: "300px",
  };

  const handleClick = () => {
    setUserInputArray([...userInputArray, userInput]);
    // setUserInput("");
  };

  return (
    <div>
      <Box sx={isExpanded ? fullScreenStyle : smallScreenStyle}>
        {userInputArray.map((message, id) => (
          <MessageRow key={id} message={message} />
        ))}
      </Box>
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <SendIcon sx={{ color: "white" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ChatArea;
