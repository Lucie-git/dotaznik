import { Icon } from '../Icon/Icon';
import './style.css';

// 3. Zařiďte následující: pokud je ve stavu `answered` hodnota `false`, chceme, aby komponenta `QuestionBody` měla ikonku `symbolQuestion`. Pokud je stav `true`, chceme, aby typ ikonky byl `symbolTick`.

export const QuestionBody = ({ iconType, text }) => {
  return (
    <div className="question__body">
      <p className="question__text">{text}</p>
      <Icon type={iconType} />
    </div>
  );
};
