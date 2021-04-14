import './App.css';
import {ToDo} from "./app/columns/ToDo";
import {CardDetails} from "./app/columns/CardDetails";
import {Route} from "react-router-dom";

function App() {
  return (
    <>
        <ToDo />
        <Route exact path="/" component={CardDetails}/>
    </>
  );
}

export default App;
