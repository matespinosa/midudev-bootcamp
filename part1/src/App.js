import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Este es un curso de Fullstack de React</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message='Estamos Trabajando' />
      <Mensaje color="blue" message="En un curso de React" />
      <Mensaje color="green" message="Yupi"/>
      <Description />
    </div>
  );
}

export default App;
