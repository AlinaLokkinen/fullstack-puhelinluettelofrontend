import peopleService from "../services/people";

const DeleteButton = ({ p }) => {
  const handeDeletePerson = () => {
    if (confirm(`Do you want to delete ${p.name}?`)) {
      peopleService.remove(p.id).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <>
      <button onClick={() => handeDeletePerson(p.id)}>Delete</button>
    </>
  );
};

export default DeleteButton;
