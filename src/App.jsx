import { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import People from "./components/People";
import peopleService from "./services/people";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState();
  const [newPerson, setNewPerson] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const errorStyle = {
    color: "red",
    background: "lightgrey",
    border: "1px",
    borderStyle: "solid",
    borderColor: "red",
    borderRadius: "3px",
    width: "50%",
    padding: "10px",
  };

  const successStyle = {
    color: "green",
    background: "lightgrey",
    border: "1px",
    borderStyle: "solid",
    borderColor: "green",
    borderRadius: "3px",
    width: "50%",
    padding: "10px",
  };

  useEffect(() => {
    peopleService.getAll().then((initialPeople) => {
      setPersons(initialPeople);
    });
  }, []);


  const addPerson = (e) => {
    e.preventDefault();

    if (newPerson.name !== '' && newPerson.name !== undefined && newPerson.phone !== '' && newPerson.phone !== undefined) {
      setError(false);
      const personObject = {
        name: newPerson.name,
        phone: newPerson.phone,
      };
      peopleService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setMessage(`'${newPerson.name}' added successfully.`);
          setNewPerson('');
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setError(!error);
          setMessage(`Could not add ${newPerson.name}`);
          setTimeout(() => {
            setMessage(null);
            setError(!error);
          }, 5000);
        });
    } else {
      if (error === false) {
        setError(true);
      }

      setMessage(`Please fill in the name and phone number of the person you want to add.`);
      setTimeout(() => {
        setMessage(null);
        setError(false);
      }, 5000);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {message && (
        <Notification
          style={!error ? successStyle : errorStyle}
          message={message}
        />
      )}
      <AddPerson
        newPerson={newPerson}
        addPerson={addPerson}
        setNewPerson={setNewPerson}
      />
      {persons ? <People persons={persons} /> : <p>No people to show</p>}
    </div>
  );
};

export default App;
