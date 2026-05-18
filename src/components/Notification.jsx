const Notification = ({ message, style }) => {
  if (message !== null) {
    return <> <p style={style}>{message}</p> </>;
  } else {
    return null;
  }
};

export default Notification;
