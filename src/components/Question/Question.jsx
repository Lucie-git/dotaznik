import { QuestionBody } from '../QuestionBody/QuestionBody';
import { Option } from '../Option/Option';
import './style.css';
import { useState } from 'react';

// 5. V komponentě `Question` si vytvořte funkci `handleSelect`. Všem komponentám `Option` pak skrze prop `onSelected` tuto funkci předejte. Funkce `handleSelect` nechť nastaví stav `answered` na hodnotu `true`. Takto zajístíme, že kdykoliv uživatel klikne na nějakou možnost, stav se nám nastaví na `true` a tím se změní ikonka v těle otázky na fajfku.

export const Question = ({ text }) => {
  const [answered, setAnswered] = useState(false);

  const handleSelect = () => {
    setAnswered(true);
  };

  return (
    <div className="question">
      <QuestionBody iconType={answered ? `symbolTick` : `symbolQuestion`} text={text} />
      <div className="question__options">
        <Option onSelected={handleSelect} type="smileyStrongYes" text="Souhlasím" />
        <Option onSelected={handleSelect} type="smileyYes" text="Spíše souhlasím" />
        <Option onSelected={handleSelect} type="smileyNeutral" text="Nevím" />
        <Option onSelected={handleSelect} type="smileyNo" text="Spíše nesouhlasím" />
        <Option onSelected={handleSelect} type="smileyStrongNo" text="Nesouhlasím" />
      </div>
    </div>
  );
};
