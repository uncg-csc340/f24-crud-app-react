import React, { useState, useEffect } from 'react';
import StudentService from '../StudentService';
import { Link, useNavigate, useParams } from 'react-router-dom';


const StudentDetailsComponent = () => {
    const { studentId } = useParams();
    const [student, setStudent] = useState([]);

    useEffect(() => {
        StudentService.getStudentById(studentId).then((res) => {
            setStudent(res.data);
        });
    }, [studentId]);

    return (
        <div>
            <h2 className="text-center">Student Details</h2>
            <Link to="/add-student" className="btn btn-outline-primary">Add Student</Link>
            <div className="card text-center">
            <div className="card-header">{student.studentId}  </div>
            <div className="card-body">
                 <h5 className="card-title">{student.name}</h5>
                 <p className="card-text" >{student.major}</p>
                 <p className="card-text" >{student.gpa}</p>
                 <Link to={`/update-student/${student.studentId}`} className="btn btn-outline-info">Update</Link>
                 </div>
                    <div className="card-footer text-body-secondary">
                     <Link to="/students" className="card-link">Students List</Link>
                    </div>
                </div>
        </div>
    );
};



export default StudentDetailsComponent;