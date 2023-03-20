import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TextField, Autocomplete, Button } from "@mui/material";

const empresas = [];

function App() {

  return (
    <div className="App">
      <section>
        <h2>Alta de empresa</h2>
        <form action="">
          <TextField
            className="inp"
            color="error"
            label="Razon Social"
            variant="standard"
          />
          <Autocomplete
            className="inp"
            options={empresas}
            renderInput={(params) => (
              <TextField
                color="error"
                variant="standard"
                {...params}
                label="Es cliente de"
              />
            )}
          />
          <TextField
            className="inp"
            color="error"
            label="Direccion"
            variant="standard"
          />
          <TextField
            className="inp"
            color="error"
            label="Telefono"
            variant="standard"
          />

          <TextField
            className="inp"
            color="error"
            label="Fecha (día / día1-día2 / día-fin)"
            variant="standard"
          />

          <TextField
            className="inp"
            color="error"
            label="Horario (hora1 - hora2)"
            variant="standard"
          />

          <TextField
            className="inp"
            color="error"
            label="Demora (minutos)"
            variant="standard"
          />
          <TextField
            className="inp"
            color="error"
            label="Latitud"
            variant="standard"
          />
          <TextField
            className="inp"
            color="error"
            label="Longitud"
            variant="standard"
          />
          <Button color="info" className="btn" variant="contained">
            Agregar
          </Button>
        </form>
      </section>
      <section>
        <h2>Alta de empresa</h2>
        <form action="">
          <TextField
            className="inp"
            color="error"
            label="Razon Social"
            variant="standard"
          />
          <Autocomplete
            className="inp"
            options={empresas}
            renderInput={(params) => (
              <TextField
                color="error"
                variant="standard"
                {...params}
                label="Es cliente de"
              />
            )}
          />
          <TextField
            className="inp"
            color="error"
            label="Direccion"
            variant="standard"
          />
          <TextField
            className="inp"
            color="error"
            label="Telefono"
            variant="standard"
          />

          <TextField
            className="inp"
            color="error"
            label="Fecha (día / día1-día2 / día-fin)"
            variant="standard"
          />

          <TextField
            className="inp"
            color="error"
            label="Horario (hora1 - hora2)"
            variant="standard"
          />

          <TextField
            className="inp"
            color="error"
            label="Demora (minutos)"
            variant="standard"
          />
          <TextField
            className="inp"
            color="error"
            label="Latitud"
            variant="standard"
          />
          <TextField
            className="inp"
            color="error"
            label="Longitud"
            variant="standard"
          />
          <Button color="info" className="btn" variant="contained">
            Agregar
          </Button>
        </form>
      </section>
    </div>
  );
}

export default App;
