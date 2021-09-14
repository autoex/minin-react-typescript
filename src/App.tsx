import React from 'react';
import NavBar from "./components/navbar/Navbar";
import './index.css'
import Todo from "./pages/todo/Todo";
import About from "./pages/about/About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App: React.FC = () => {


    return (
        <>
            <Router>
                <NavBar/>
                <div className="container">

                    <Switch>
                    <Route path={'/about'} component={About} />
                    <Route path={'/'} exact component={Todo} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;