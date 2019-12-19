import React, { useState } from 'react';
 
const AdvancedUseStateApp = () => {

    // useState with boolean 
      const [toggled, toggle] = useState(false);

      // useState with object 
      const [name, setName] = useState({ firstName: '', lastName: '' })
        // useState with array 
      const [items, setItems] = useState([])

   const addItem = () => {
      setItems([
        ...items,
        {
          id: items.length,
          value: Math.floor(Math.random() * 10) + 1
        }
      ])
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
              <button className="button muted-button" onClick={() => toggle(toggled => !toggled)}>
                    Toggle sunshine
             </button>
            
             <form>
             
             <h2>  useState with object form: </h2>
              <div className="inner-wrap">
                <input
                style={{backgroundColor: "#a7e0e6"}}
                  type="text"
                  value={name.firstName}
                  onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input
                 style={{backgroundColor: "#a7e0e6"}}
                  type="text"
                  value={name.lastName}
                  onChange={e => setName({ ...name, lastName: e.target.value })}
                />
               </div>
	        	</form>
          <div> 
                <h2>  useState with arry form: </h2> 
                <button  className="button muted-button" onClick={addItem}>Add a number</button>
          </div>
          
        </div>
        <div className="col">
         <div  >{toggled && <>☀️🌞😎💩</>}</div>
           <br/>  <br/>
            <div>
             <h2>  useState with object result: </h2>
            <br/>
               <>first name is - {name.firstName}</> {" "} <br/>
                <>last name is - {name.lastName}</><br/>
              
                <>{JSON.stringify(name)}</>
            </div>   
             <div>
                  <h2>  useState with arry result: </h2> 
                  <ul>
                    {items.map(item => (
                      <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
             </div> 
             
        </div>
      </div>
    </div>
  );
};

export default AdvancedUseStateApp;