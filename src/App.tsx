import React from 'react';
import './App.css';

//フルーツボタンコンポーネント　ボタンを押すとcheckAnswerにfalse
function FruitButton({ checkAnswer }: { checkAnswer: (isFruit: boolean) => void }): React.ReactElement {
  return (
    <button onClick={() => checkAnswer(true)}>Fruit</button>
  );
}

//野菜ボタンコンポーネント　ボタンを押すとcheckAnswerにfalse
function VegetableButton({ checkAnswer }: { checkAnswer: (isFruit: boolean) => void }): React.ReactElement {
  return (
    <button onClick={() => checkAnswer(false)}>Vegetable</button>
  );
}

function Rand_fruit() {
  const [result, setResult] = React.useState<string | null>(null);
  const getRandomInt = (max: number) => Math.floor(Math.random() * max);
  let fruitId: number = getRandomInt(10) + 1;
  //Idに対応する要素を取得
  const id_data = data.find(product => product.id === fruitId);
  const title = id_data ? id_data.title : 'No product found';

  function checkAnswer(isFruit: boolean) {
    if (id_data) {
      const correctAnswer = id_data.isFruit;
      if (isFruit === correctAnswer) {
        setResult(`Correct! ${id_data.title} is ${correctAnswer ? 'a fruit' : 'not a fruit'}.`);
      } else {
        setResult(`Incorrect. ${id_data.title} is ${correctAnswer ? 'a fruit' : 'not a fruit'}.`);
      }
    } else {
      setResult('No product found');
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{title} is fruit?</h2>
      <FruitButton checkAnswer={checkAnswer} />
      <VegetableButton checkAnswer={checkAnswer} />
      {result && <p>{result}</p>}
    </div>
  );
}

interface Product {
  title: string;
  isFruit: boolean;
  id: number;
}

const data:Product[] = [
  { title: 'Apple', isFruit: true, id: 1 },
  { title: 'Strawberry', isFruit: false, id: 2 },
  { title: 'Banana', isFruit: false, id: 3 },
  { title: 'Lemon', isFruit: true, id: 4 },
  { title: 'Papaya', isFruit: false, id: 5 },
  { title: 'Tomato', isFruit: false, id: 6 },
  { title: 'Melon', isFruit: false, id: 7 },
  { title: 'Passion Fruit', isFruit: false, id: 8 },
  { title: 'Pineapple', isFruit: false, id: 9 },
  { title: 'Watermelon', isFruit: false, id: 10 },
];


//Appコンポーネント
export default function App() {
  return (
    <>
      <Rand_fruit />
    </>
  );
}