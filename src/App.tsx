import React from 'react';
import './App.css';

//ボタンコンポーネント
function MyButton() {
  return (
    <button>
      button
    </button>
  );
}

interface Products {
  title: string;
  isFruit: boolean;
  id: number;
}

const products = [
  { title: 'りんご', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


//Appコンポーネント
export default function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
    </>
  );
}