import './App.css';
import Header from "./Components/Header"
import Main from "./Components/Main"
import "./Components/style.css"
function App() {
  return (
    <div className="App">
       <div style={{border: 'solid 5px ' , maxWidth: '100vw',}}>
          <h1 className="title red" >Boudaya khaled </h1>
      </div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
