
import { useState } from "react";
import styles from "./App.module.css"

function App() {

  const [fullname, setFullname] = useState("")

  const handleSubmit = (event)=>
  {
    event.preventDefault();
    setFullname(event.target.firstName.value+" "+event.target.lastName.value);

  }


  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label >First Name:</label>
        <input id="firstName" type="text" name="firstName" required></input>
        <br/>
        <label >Last Name:</label>
        <input id="lastName" type="text" name="lastName" required></input>
        <br/>
        <button type="submit">Submit</button>
      </form>

      {fullname!=""&&<div>Full Name: {fullname}</div>}

      
      
    </div>
  );
}

export default App;
