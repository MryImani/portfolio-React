const InfoBox = (props) => {
    return (

        <div>
          <h3>{props.title}</h3>
          <div>{props.children}</div>
        </div>
    );
}

export default InfoBox;