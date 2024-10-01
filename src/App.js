import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import UserTable from "./components/userTable/userTable";
import AddUser from "./components/addUser/addUser";
import EditUser from "./components/editUser/editUser";
import ViewSingleUser from "./components/viewSingleUser/viewSingleUser";

const App = () => (
    <div className="App">
    <Router>
        <Routes>
            <Route path="/" element={<UserTable/>} />
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/edit-user/:userId" element={<EditUser />} />
            <Route path="/view-user/:userId" element={<ViewSingleUser />} />
        </Routes>
    </Router>
</div>
)
;

export default App;
