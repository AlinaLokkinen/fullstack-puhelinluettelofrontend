import DeleteButton from "./Deletebutton";

const Person = ({ p }) => {
  return (
    <>
      <div key={p.name}>
        {p.name} {p.phone}
        <DeleteButton p={p} />
      </div>
    </>
  );
};
export default Person;
