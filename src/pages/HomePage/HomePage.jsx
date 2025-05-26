import { Question } from '../../components/Question/Question';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Question text="Kdo jinému jámu kopá, sám do ní padá." />
    </div>
  );
};
