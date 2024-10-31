import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentListComponent from './components/StudentListComponent';
import StudentDetailsComponent from './components/StudentDetailsComponent'
import AddStudentComponent from './components/AddStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<StudentListComponent />} />
                    <Route path="/students" element={<StudentListComponent />} />
                    <Route path="/students/:studentId" element={<StudentDetailsComponent />} />
                    <Route path="/add-student" element={<AddStudentComponent />} />
                    <Route path="/update-student/:id" element={<UpdateStudentComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
