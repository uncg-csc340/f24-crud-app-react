package com.csc340.crud_api_jpa_demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * StudentService.java
 * Centralizes data access to the Student Database.
 */
@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    /**
     * Fetch all Students.
     *
     * @return the list of all Students.
     */
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    /**
     * Fetch a unique student.
     *
     * @param studentId the unique Student id.
     * @return a unique Student object.
     */
    public Student getStudentById(int studentId) {
        return studentRepository.findById(studentId).orElse(null);
    }

    /**
     * Fetch all students whose major matches the search term.
     *
     * @param major the search key.
     * @return the list of matching Students.
     */
    public List<Student> getStudentsByMajor(String major) {
        return studentRepository.getStudentsByMajor(major);
    }


    /**
     * Fetch all students with a GPA above a threshold.
     *
     * @param gpa the threshold
     * @return the list of matching Students
     */
    public List<Student> getHonorsStudents(double gpa) {
        return studentRepository.getHonorsStudents(gpa);
    }

    /**
     * Add a new Student to the database.
     *
     * @param student the new Student to add.
     */
    public void addNewStudent(Student student) {
        studentRepository.save(student);
    }

    /**
     * Update an existing Student.
     *
     * @param studentId the unique Student Id.
     * @param student   the new Student details.
     */
    public void updateStudent(int studentId, Student student) {
        Student existing = getStudentById(studentId);
        existing.setName(student.getName());
        existing.setMajor(student.getMajor());
        existing.setGpa(student.getGpa());

        //Technically the 4 lines above are not necessary because the save method merges by default.
        studentRepository.save(existing);
    }

    /**
     * Delete a unique Student.
     *
     * @param studentId the unique Student Id.
     */
    public void deleteStudentById(int studentId) {
        studentRepository.deleteById(studentId);
    }
}