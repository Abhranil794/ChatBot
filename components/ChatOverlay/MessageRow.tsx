interface PropsType {
  message: string;
}

const MessageRow = (props: PropsType) => {
  const { message } = props;
  return <div>message: {message}</div>;
};

export default MessageRow;
