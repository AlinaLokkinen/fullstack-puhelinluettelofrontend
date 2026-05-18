import Person from "../components/Person";

const People = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((p) => {
        return <Person p={p} />;
      })}
    </>
  );
};

export default People;
