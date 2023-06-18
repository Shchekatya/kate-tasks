import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";

type TFormProp = {
  item: {
    name: string;
    surname: string;
  };
  handleAddRow: MouseEventHandler<HTMLButtonElement>;
  handleDeleteRow: MouseEventHandler<HTMLButtonElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  index: number;
};

function FormRow(props: TFormProp) {
  const handleYesRow: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(props.index);
  };
  return (
    <div className="form-row">
      <TextField
        fullWidth
        name="name"
        label="Name"
        variant="outlined"
        value={props.item.name}
        onChange={props.handleChange}
      />
      <TextField
        fullWidth
        name="surname"
        label="Surname"
        value={props.item.surname}
        variant="outlined"
        onChange={props.handleChange}
      />
      <div className="form-row__buttons">
        <Button onClick={props.handleAddRow}>Add</Button>
        <Button onClick={props.handleDeleteRow}>Delete</Button>
        <Button onClick={handleYesRow}>Yes</Button>
      </div>
    </div>
  );
}

export default FormRow;
