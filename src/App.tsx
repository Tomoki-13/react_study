import React from 'react';
import './App.css';

//フルーツボタンコンポーネント　ボタンを押すとcheckAnswerにtrue
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
  //正解かどうかを記録
  const [result, setResult] = React.useState<string | null>(null);
  //log表示
  const [history, setHistory] =  React.useState<{ title: string, Fruit: boolean, YourAnswer: boolean,isCorrect: boolean }[]>([]);

  const getRandomInt = (max: number) => Math.floor(Math.random() * max);
  let fruitId: number = getRandomInt(10) + 1;
  //Idに対応する要素を取得
  const id_data = data.find(product => product.id === fruitId);
  const title = id_data ? id_data.title : 'No product found';

  function checkAnswer(isFruit: boolean) {
    if (id_data) {
      const correctAnswer = id_data.isFruit;
      //isFruit === correctAnswerならtrue
      const isCorrect = isFruit === correctAnswer;
      //出力のセット
      if (isCorrect) {
        setResult(`Correct! ${id_data.title} is ${correctAnswer ? 'a fruit' : 'not a fruit'}.`);
      } else {
        setResult(`Incorrect. ${id_data.title} is ${correctAnswer ? 'a fruit' : 'not a fruit'}.`);
      }
      setHistory(prevHistory => [...prevHistory, { title: id_data.title, Fruit: correctAnswer, YourAnswer: isFruit, isCorrect }]);
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

      <table style={{ margin: '0 auto', marginTop: '20px', borderCollapse: 'collapse', width: '80%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Id</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Product</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Fruit</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>YourAnswer</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Result</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{index+1}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.title}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.Fruit ? 'Fruit' : 'Vegetable'}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.YourAnswer ? 'Fruit' : 'Vegetable'}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.isCorrect ? 'Correct' : 'Incorrect'}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
