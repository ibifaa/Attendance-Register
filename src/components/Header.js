import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Header({onFilter}) {
  const [studentID, setStudentID] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setStudentID(value);
    onFilter(value);
  };
  return (
    <div className="container mx-auto">
        <h3 className="heading">Attendance</h3>
      <form className="max-auto">
        <header className="header">
          <div className=" input-div d-flex flex-column justify-content-start text-start  ">
            {/* <label>ID</label> */}
            <input className="w-100 md-p-1 p-0"type="text" placeholder="ID" onChange={handleInputChange}/>
          </div>
          <div className=" input-div d-flex flex-column justify-content-start text-start">
            {/* <label>class</label> */}
            <input className="w-100 p-1"type="text" placeholder="Class" />
          </div>

          <div className="input-div d-flex flex-column justify-content-start text-start">
            {/* <label>Date</label> */}
            <input className="w-100 p-1"type="date" placeholder="Date" />
          </div>
        </header>
        <main>
            
        </main>
      </form>
    </div>
  );
}

export default Header;
