import React from "react";
import Staffer from "../staff/Staffer";
import "../staff/StaffList.css";

const charMap = new Map();
const ranges = [[48, 48+10], [65, 65+26], [97, 97+26]]
for (let [s, e] of ranges) {
  for (let i = s; i < e; i++) {
    charMap.set(charMap.size, String.fromCharCode(i))
  }
}

export const NewPetForm = ({
  employees,
  pets,
  setPets
}) => {
  const [ newPetForm, setNewPetForm ] = React.useState({
    id: "",
    name: "",
    kind: "",
    breed: "",
    employeeId: ""
  })
  console.log(`newPetForm`, newPetForm)
  employees.sort((a, b) => a.firstName.localeCompare(b.firstName))

  function handleInputChange(e) {
    setNewPetForm({...newPetForm, [e.target.id]: e.target.value})
  }

  function generatePetID() {
    const randomID = [];
    while (randomID.length !== 7) {
      randomID.push(charMap.get(Math.floor(Math.random()*62)))
    }
    return randomID.join("")
  }

  function handleSubmit(e) {
    e.preventDefault();
    newPetForm.id = generatePetID();
    setPets([...pets, newPetForm])
    setNewPetForm({
      id: "",
      name: "",
      kind: "",
      breed: "",
      employeeId: ""
    })
  }

  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
    <section className="staff-list">
      <form
        className="new-pet-form"
        onSubmit={handleSubmit} >
        <label>Name:{" "}
          <input
            id="name"
            type="text"
            value={newPetForm.name}
            onChange={handleInputChange}
            required />
        </label>
        <br />
        <label>Kind:{" "}
          <select
            id="kind"
            type="text"
            value={newPetForm.kind}
            onChange={handleInputChange}
            required
          >
            <option value="">--Kind--</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </label>
        <br />
        <label>Breed:{" "}
          <input
            id="breed"
            type="text"
            value={newPetForm.breed}
            onChange={handleInputChange}
            required />
        </label>
        <br />
        <label>Employee:{" "}
          <select
            id="employeeId"
            type="text"
            value={newPetForm.employeeId}
            onChange={handleInputChange}
            required
          >
            <option value="">--Employee--</option>
            {employees.map(emp => (
              <option value={emp.id} key={emp.id}>{emp.prefix} {emp.firstName} {emp.lastName}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Add Pet</button>
      </form>
    </section>
  );
};

export default NewPetForm;
