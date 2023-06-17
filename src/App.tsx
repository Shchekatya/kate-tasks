import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";

interface FormRowProps {
  children: React.ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return <div className="form-row">{children}</div>;
};

const createRow = (name?: string, surname?: string) => ({
  name: name ?? "",
  surname: surname ?? "",
});

const defaultValue = [createRow()];

function App() {
  const [state, setState] = useState(defaultValue);

  const handleSubmit = () => {
    console.log(state);
  };

  const handleAddRow: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event);
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

      <form className="form" noValidate autoComplete="off">
        <Button onClick={handleSubmit}>Submit</Button>

        {state.map((item, i) => (
          <FormRow key={i}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              value={item.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="surname"
              label="Surname"
              value={item.surname}
              variant="outlined"
              onChange={handleChange}
            />
            <div className="form-row__buttons">
              <Button onClick={handleAddRow}>Add</Button>
              <Button onClick={handleDeleteRow}>Delete</Button>
            </div>
          </FormRow>
        ))}
      </form>
    </div>
  );
}

export default App;
