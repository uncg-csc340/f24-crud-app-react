import React, { useState, useEffect } from 'react';
import StudentService from '../StudentService';
import { Link } from 'react-router-dom';

const StudentListComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getStudents().then((res) => {
            setStudents(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Student List</h2>
            <div className="row">
                <Link to="/add-student" className="btn btn-outline-primary">Add Student</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Student Major</th>
                            <th>Student GPA</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                                <tr key={student.studentId}>
                                <td><Link to={`${student.studentId}`}>{student.studentId}</Link></td>
                                <td>{student.name}</td>
                                <td>{student.major}</td>
                                <td>{student.gpa}</td>
                                <td>
                                    <Link to={`/update-student/${student.studentId}`} className="btn btn-info">Update</Link>
                                    <button className="btn btn-danger" onClick={() => StudentService.deleteStudent(student.studentId)
                                    .then(() => setStudents(students.filter(s => s.studentId !== student.studentId)))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentListComponent;