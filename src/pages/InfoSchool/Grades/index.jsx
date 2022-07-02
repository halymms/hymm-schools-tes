import React, { useEffect, useState } from "react";

const Grades = () => {
  const [nota, setNota] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/halymms/backendHyym/notas")
      .then((res) => res.json())
      .then(data => setNota(data))
  });

  return (
    <section class="padding-default grades">
      <h1>Student's Data</h1>
      <br />
      <div>
        <table className="classroom-data-table">
          <thead className="classroom-data-head">
            <tr className="classroom-data-row">
              <th className="classroom-data-title">Student Name</th>
              <th className="classroom-data-title">Grade</th>
              <th className="classroom-data-title">GPA</th>
            </tr>
          </thead>
          <tbody>
            {nota?.map((notas, i) => (
              <tr key={i}>
                <td className="classroom-data-info">{notas.nomeAluno}</td>
                <td className="classroom-data-info">{notas.serie}</td>
                <td className="classroom-data-info">{notas.nota}</td>
              </tr>
             ))} 
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Grades;
