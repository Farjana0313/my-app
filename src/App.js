import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir'];
  const products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$70.99' },
    { name: 'pdf', price: '$60.99' },
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }

        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person name="Rakib"></Person>
        <Person name={nayoks[1]}></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{ user.name }</li>)
      }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  console.log(props);
  return <h1 style={personStyle}>Name: {props.name}</h1>
}

export default App;
