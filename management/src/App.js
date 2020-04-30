import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customer = [
{
  'id' : 1,
  'img' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birth' : '881031',
  'gender' : '여자',
  'job' : '회사원'
},
{
  'id' : 2,
  'img' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동2',
  'birth' : '881031',
  'gender' : '여자',
  'job' : '회사원'
},
{
  'id' : 3,
  'img' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동3',
  'birth' : '881031',
  'gender' : '여자',
  'job' : '회사원'
}
]

function App() {
  return (
    <div className="gray-background">
      {
        customer.map(c => {
      
      return ( <Customer
        id = {c.id}
        img = {c.img}
        name = {c.name}
        birth = {c.birth}
        gender = {c.gender}
        job = {c.job}
      />); })
      }
    </div>
  );
}

export default App;
