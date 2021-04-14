import './App.css';
import {ToDo} from "./app/columns/ToDo";
import {CardDetails} from "./app/columns/CardDetails";
import {Route} from "react-router-dom";
import {InProgress} from "./app/columns/InProgress";
import {Blocked} from "./app/columns/Blocked";
import {FollowUp} from "./app/columns/FollowUp";
import {Done} from "./app/columns/Done";

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
                    <InProgress />
                </div>
                <div className="col-sm">
                    <Blocked />
                </div>
                <div className="col-sm">
                    <FollowUp />
                </div>
                <div className="col-sm">
                    <Done />
                </div>
            </div>
        </div>


        <Route exact path="/cards/:id" component={CardDetails}/>
    </>
  );
}

export default App;
