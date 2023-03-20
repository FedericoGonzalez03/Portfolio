import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TextField, Autocomplete, Button, Divider } from "@mui/material";

const empresas = [];

function App() {

  return (
    <div className="App">
      <section>
        <h2>Alta de Cliente</h2>
        <form action="">
          <TextField
            id="razonBusiness"
            className="inp"
            color="error"
            label="Razon Social"
            variant="standard"
          />

          <TextField
            id="telBusiness"
            className="inp"
            color="error"
            label="Telefono"
            variant="standard"
          />

          <TextField
            id="mailBusiness"
            className="inp"
            color="error"
            label="Mail"
            variant="standard"
          />

          <Button color="info" className="btn" variant="contained"
          onClick={()=>{
            const razon = document.querySelector('#razonBusiness').value;
            const tel = document.querySelector('#telBusiness').value;
            const mail = document.querySelector('#mailBusiness').value;
            const data = 
              {razon: razon,
              tel: tel,
              mail: mail}

            fetch('https://www.myrestapis.space/collecting/add-business', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then(response => {
              console.log('response', response);
            })
            .catch(error => {
              console.log('error', error);
            });

          }}>
            Agregar
          </Button>
        </form>
      </section>
      <Divider></Divider>
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
          <Button color="info" className="btn" variant="contained"
          onClick={()=>{
            fetch('https://myrestapis.space/collecting/buss').then(res => res.json()).then(data =>{
              console.log('data', data)
            })
          }}>
            Agregar
          </Button>
        </form>
      </section>
    </div>
  );
}

export default App;
