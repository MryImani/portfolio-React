import './Skill.css'
import ProgressBar from '../progressBar/ProgressBar'
const Skill = (props) => {
    return (
      <div className="progress">
        <span className="skill">
          {props.skill} <i className="val">{props.percent}%</i>
        </span>
        <ProgressBar completed={props.percent} />
      </div>
    );
}

export default Skill;