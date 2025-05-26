import { Icon } from '../Icon/Icon';
import './style.css';

export const Option = ({ type, text, onSelected }) => {
  return (
    <div className="option" onClick={onSelected}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
