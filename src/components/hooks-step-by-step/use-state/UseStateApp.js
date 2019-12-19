import React, { useState } from 'react';
import { useForm } from "./useForm";
const UseStateApp = () => {
     // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });
   const [values, handleChange] = useForm({ email: "", password: "" });
  const [people, setPeople] = useState([
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ]);
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const onChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (person.firstName.trim() === '' || person.lastName.trim() === '') return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    };

    setPeople([...people, newPerson]);
    setPerson({ firstName: '', lastName: '' });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add a person: </h2>
          <hr />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                style={{backgroundColor: "#a7e0e6"}}
                name="firstName"
                placeholder="First Name.."
                value={person.firstName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                style={{backgroundColor: "#a7e0e6"}}
                name="lastName"
                placeholder="Last Name.."
                value={person.lastName}
                onChange={onChange}
              />
            </div>
            
            <button  className="button muted-button" type="submit">
              Add person
            </button>
            
          </form>
            <>
            <h2> custom useState: </h2> 
            <input     style={{backgroundColor: "#a7e0e6"}} 
               type="text" name="email" value={values.email}
               onChange={handleChange} />
            <input
              style={{backgroundColor: "#a7e0e6"}}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
        </>
        </div>
        <div className="col">
          <h2>People: </h2>
          <hr />
          {people.map((p) => (
            <div key={Math.random() * 1000000000}>
              <p>
                {p.firstName} {p.lastName}
              </p>
            </div>
          ))}
             <div>
             <br/> <br/> <br/>
             <h2> custom useState  result: </h2>
                <br/>
                 <>email is - {values.email}</> {" "} <br/>
                <> password is  - {values.password}</><br/>
              
                <>{JSON.stringify(values)}</>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default UseStateApp;