import image from './grocery.jpg';
import './App.css';
import GroceryList from './GroceruList';
import GroseryImage from './GroseryImage';

function App() {
   const showAlert = () =>{
     alert ("clicked!");
   }

   const showHi= () =>{
    alert ("Hi!");
  }

  const showBye= () =>{
    alert ("Bye!");
  }

  // function showAlert(){
  //   alert("Clicked!")
  // }

  return (
    <div >
      
        <img src={image} alt="grocery" />
        <GroceryList/>
        <GroseryImage/>
        <button onClick={showAlert}>BUTTON</button>
        <button onClick={showHi}>Hi</button>
        <button onClick={showBye}>Bye</button>
    </div>
  );
}

export default App;
