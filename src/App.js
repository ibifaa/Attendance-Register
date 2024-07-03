import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import studentsData from './data';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState(studentsData);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const updateStatus = (id, status) => {
    setStudents(
      students.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
    setFilteredStudents(
      filteredStudents.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const handleFilter = (studentID) => {
    if (studentID === "") {
      setFilteredStudents([]);
    } else {
      setFilteredStudents(students.filter(student => student.id === parseInt(studentID, 10)));
    }
  };

  return (
    <div className="App md-p-5 p-3 ">
      <div className='container m-5 bg-white rounded h-75 mx-auto' >
    <div className='top'>
      <Header onFilter = {handleFilter}/>
    </div>
    
    <div>
      <Body students={filteredStudents} updateStatus={updateStatus}/>
    </div>
    
    </div>
    </div>
  );
}

export default App;
