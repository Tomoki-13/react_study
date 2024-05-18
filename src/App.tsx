import React from 'react';
import './App.css';

//ボタンコンポーネント
function MyButton(): React.ReactElement {
  const [count, setCount] = React.useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function Rand_fruit() {
  const getRandomInt = (max: number) => Math.floor(Math.random() * max);
  let fluitid:number = getRandomInt(10)+1;
  //id_data product.id === fluitid elsement
  const id_data = data.find(product => product.id === fluitid);
  const title = id_data ? id_data.title : 'No product found';
  return (
    <h2>{title} is fluit?</h2>
  );
}

interface Product {
  title: string;
  isFruit: boolean;
  id: number;
}

const data:Product[] = [
  { title: 'りんご', isFruit: true, id: 1 },
  { title: 'いちご', isFruit: false, id: 2 },
  { title: 'バナナ', isFruit: false, id: 3 },
  { title: 'レモン', isFruit: true, id: 4 },
  { title: 'パパイヤ', isFruit: false, id: 5 },
  { title: 'トマト', isFruit: false, id: 6 },
  { title: 'メロン', isFruit: false, id: 7 },
  { title: 'パッションフルーツ', isFruit: false, id: 8 },
  { title: 'パイナップル', isFruit: false, id: 9 },
  { title: 'スイカ', isFruit: false, id: 10 },
];


//Appコンポーネント
export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <Rand_fruit />
    </>
  );
}