import { Icon } from '../Icon/Icon';
import './style.css';

export const QuestionBody = ({ iconType, text }) => {
  return (
    <div className="question__body">
      <p className="question__text">{text}</p>
      <Icon type={iconType} />
    </div>
  );
};
