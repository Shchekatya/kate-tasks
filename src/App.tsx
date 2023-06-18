import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import FormRow from "./components/form-row/form-row";

const createRow = (name?: string, surname?: string) => ({
  name: name ?? "",
  surname: surname ?? "",
});

const defaultValue = createRow();

function App() {
  const [state, setState] = useState([defaultValue]);

  const handleSubmit = () => {
    console.log(state);
  };

  const handleAddRow: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event);
    setState([...state, defaultValue]);
  };

  const handleDeleteRow: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.name, event.target.value);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <form className="form" noValidate autoComplete="off" id="form">
        <Button onClick={handleSubmit}>Submit</Button>

        {state.map((item, i) => (
          <FormRow
            key={i}
            item={item}
            handleDeleteRow={handleDeleteRow}
            handleChange={handleChange}
            handleAddRow={handleAddRow}
            index={i}
          />
        ))}
      </form>
    </div>
  );
}

export default App;
