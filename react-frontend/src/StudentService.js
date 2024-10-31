import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/students";

class StudentService {
    getStudents() {
        return axios.get(STUDENT_API_BASE_URL+"/all");
    }

    createStudent(student) {
        return axios.post(STUDENT_API_BASE_URL+"/new", student);
    }

    getStudentById(studentId) {
        return axios.get(`${STUDENT_API_BASE_URL}/${studentId}`);
    }

    updateStudent(student, studentId) {
        return axios.put(`${STUDENT_API_BASE_URL}/update/${studentId}`, student);
    }

    deleteStudent(studentId) {
        return axios.delete(`${STUDENT_API_BASE_URL}/delete/${studentId}`);
    }
}

export default new StudentService();