import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PropsType {
  message: string;
}

const MessageRow = (props: PropsType) => {
  const { message } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 1,
        backgroundColor: "#394867",
        p: 1,
        borderRadius: 5,
      }}
    >
      <Avatar />
      <Typography sx={{ ml: 1 }}>{message}</Typography>
    </Box>
  );
};

export default MessageRow;
