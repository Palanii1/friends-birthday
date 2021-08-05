
import React, { useState } from 'react';
import { data } from './data';




function App() {

    const [people, setPeople] = useState(data);

    const[text, setText] = useState("5 birthdays today");

    const handleClick = () => {
      if (text === "5 birthdays today"){
        setPeople([])
        setText ("0 birthdays today");
      } 
    }
    

  return (
    <div className="parent">
      <div className="container">
        <h2>{ text }</h2> 
        {people.map((person) => {
                const { id, image, name, age } = person
                return (

                    <div key={id} className="item">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="words">
                            <div className="name"><h4>{name}</h4></div>
                            <div className="age"><h5>{age}</h5></div>   
                        </div>
                    </div>
                );
            })}
            <button className="btn" onClick = { handleClick }>Clear All</button>
      </div>
    </div>
  );
}

export default App;
