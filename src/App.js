import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'




function App() {
    library.add(fas, far)
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<Labs />}/>
                    <Route path="/hello" element={<HelloWorld />}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>

                </Routes>


            </div>

        </BrowserRouter>


    );
}

export default App;
