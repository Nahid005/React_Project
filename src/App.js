import logo from './logo.svg';
import './App.css';
import Hello from './main-file/Hello'
import Welcome from './main-file/Welcome'
import Header from './component/header_component/Header'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hello name="Nahid Hassan"></Hello>
      <Welcome name="Nahid Hassan"></Welcome>
    </div>
  );
}

export default App;
