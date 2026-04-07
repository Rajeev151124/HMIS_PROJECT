import React, { useState } from "react";
import axios from "axios";

function App() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    disease: ""
  });

  const register = async () => {
    await axios.post("http://<EC2-IP>:3000/patients", patient);
    alert("Patient saved!");
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>HMIS System</h1>

      <h2>Register Patient</h2>

      <input placeholder="Name"
        onChange={e => setPatient({...patient, name:e.target.value})} />

      <input placeholder="Age"
        onChange={e => setPatient({...patient, age:e.target.value})} />

      <input placeholder="Disease"
        onChange={e => setPatient({...patient, disease:e.target.value})} />

      <button onClick={register}>Submit</button>
    </div>
  );
}

export default App;
