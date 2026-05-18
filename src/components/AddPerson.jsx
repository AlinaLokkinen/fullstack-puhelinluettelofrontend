const AddPerson = ({newPerson, addPerson, setNewPerson}) => {

    
  return (
    <>
      <form onSubmit={addPerson}>
        <div style={{display: 'flex', flexDirection: 'column', width: '50%', marginTop: '10px'}}>
          name:{" "}
          <input
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
          />
          phone number:{" "}
          <input
            onChange={(e) =>
              setNewPerson({ ...newPerson, phone: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddPerson;
