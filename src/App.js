import './App.css';
import {ToDo} from "./app/columns/ToDo";
import {CardDetails} from "./app/columns/CardDetails";
import {Route} from "react-router-dom";

export const API_HOST = "http://localhost:8000/api"
export const API_VERSION = "v1"

function App() {
  return (
    <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm">
                    <ToDo />
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>


        <Route exact path="/cards/:id" component={CardDetails}/>
    </>
  );
}

export default App;
