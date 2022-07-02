import React, { useEffect, useState } from "react";

const Lessons = () => {
  const [turma, setTurma] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/halymms/backendHyym/turmas")
      .then((res) => res.json())
      .then(data => setTurma(data))
  });

  console.log('dado turma', turma)

  return (
    <section class="padding-default grades">
      <h1>Grades Data</h1>

      <br />
      <div>
        <table className="classroom-data-table">
          <thead className="classroom-data-head">
            <tr className="classroom-data-row">
              <th className="classroom-data-title">Grades</th>
              <th className="classroom-data-title">Designed Room</th>
              <th className="classroom-data-title">Shift</th>
            </tr>
          </thead>
          <tbody>
            {turma?.map((turmas, i) => (
              <tr key={i}>
                <td className="classroom-data-info">{turmas.serie}</td>
                <td className="classroom-data-info">{turmas.turma}</td>
                <td className="classroom-data-info">{turmas.turno}</td>
              </tr>
             ))} 
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Lessons;
