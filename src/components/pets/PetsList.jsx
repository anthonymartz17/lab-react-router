import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const navigate = useNavigate()
  const [ filteredPets, setFilteredPets ] = useState(pets)
  const { petKind } = useParams();
  const [ cats, dogs ] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  function filterPets(petKind) {
    switch(petKind) {
      case "cats":
        setFilteredPets(cats);
        break;
      case "dogs":
        setFilteredPets(dogs);
        break
      case "all":
        setFilteredPets(pets);
        break
      default:
        navigate("*")
    }
  }

  useEffect(() => {
    filterPets(petKind)
  }, [petKind])

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {filteredPets.map((pet) => (
          <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;


// Original Cat and Dog Maps
{/* All cats section */}
{/* {cats.map((cat) => (
  <Pet key={cat.id} kind="cat" pet={cat} />
))} */}

{/* All dogs section */}
{/* {dogs.map((dog) => (
  <Pet key={dog.id} kind="dog" pet={dog} />
))} */}


