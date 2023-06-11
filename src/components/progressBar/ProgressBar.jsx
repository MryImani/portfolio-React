const ProgressBar = (props) => {
  

  const fillerStyles = {
    width: `${props.completed}%`,
    backgroundColor: "#a94dc5",
    borderRadius: 0,
    textAlign: "right",
    color: "#a94dc5",
  };



  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar" role="progressbar" style={fillerStyles}>
        <span>{`${props.completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
