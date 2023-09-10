import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate'

function App() {
  const x=[
    {
      itemName:"Surf",
      itemPrice:20
    },
  ];
  return (
    <>
    <Item itemName={x[0].itemName}>This is the game </Item>
    <div className="App">
      Hello Jee
    </div>
    <ItemDate/>
    </>
  );
}

export default App;
