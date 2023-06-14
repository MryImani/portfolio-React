const ResumeItem = (props) => {
    return (
        <div className="resume-item pb-0">
          <h4>{props.title}</h4>
          {props.children}
        </div>
    );
}

export default ResumeItem;