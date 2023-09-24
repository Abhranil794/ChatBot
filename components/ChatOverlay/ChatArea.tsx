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
    marginBottom: 1,
    color: "white",
  };
  const fullScreenStyle = {
    ...defaultBoxStyle,
    height: "460px",
  };
  const smallScreenStyle = {
    ...defaultBoxStyle,
    height: "300px",
    width: "300px",
  };

  const handleSend = () => {
    setUserInputArray([...userInputArray, userInput]);
    setUserInput("");
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // console.log("User pressed: ", event.key);
    // if (event.key === "Enter") {}
    if (event.key === "Enter" && userInput !== "") {
      handleSend();
    }
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
        // multiline
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={userInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton disabled={!userInput} onClick={handleSend}>
                <SendIcon sx={userInput ? { color: "white" } : {}} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ChatArea;
