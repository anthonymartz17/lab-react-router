import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/NotFound.jsx";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NewPetForm from "./components/new-pet-form/NewPetForm";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
	const [employees] = useState(employeeData);
	const [owners] = useState(ownerData);
	const [pets, setPets] = useState(petData);
  console.log(pets)
	return (
		<div className="wrapper">
			<Router>
				<Nav />
				<Routes>
					<Route
						path="/"
						element={<Home employees={employees} owners={owners} pets={pets} />}
					/>
					<Route path="/staff" element={<StaffList employees={employees} />} />
					<Route path="pets" element={<PetsList pets={pets} />} />
          <Route path="/pets/:petKind" element={<PetsList pets={pets} />} />
          <Route path="/pets/newPet" element={<NewPetForm
            employees={employees}
            pets={pets}
            setPets={setPets} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
