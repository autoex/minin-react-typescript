import React from 'react';
import NavBar from "./components/navbar/Navbar";
import './index.css'
import ToDoForm from "./todo__form/ToDoForm";

const App: React.FC = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
               <ToDoForm />
            </div>
        </>
    );
};

export default App;