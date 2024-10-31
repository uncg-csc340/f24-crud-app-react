import React, { useState } from 'react';
import StudentService from '../StudentService';
import { useNavigate } from 'react-router-dom';

const AddStudentComponent = () => {
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [gpa, setGpa] = useState('');
    const navigate = useNavigate();

    const saveStudent = (e) => {
        e.preventDefault();
        const student = { name, major, gpa };
        StudentService.createStudent(student).then(() => {
            navigate('/students');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Student</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Student Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Major: </label>
                                    <input placeholder="Major" name="major" className="form-control"
                                        value={major} onChange={(e) => setMajor(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> GPA: </label>
                                    <input placeholder="GPA" name="gpa" className="form-control"
                                        value={gpa} onChange={(e) => setGpa(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveStudent}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudentComponent;