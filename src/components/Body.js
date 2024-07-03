import React from 'react'

function Body({students, updateStatus}) {
    console.log(students)
  return (
    <div className="d-flex justify-content-between">
      <table>
        <thead>
          <tr className='flex'>
            <th className="">S/N</th>
            <th className="">Name</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>
                <select
                  value={student.status}
                  onChange={(e) => updateStatus(student.id, e.target.value)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
      


export default Body
