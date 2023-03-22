import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  TextField,
  Autocomplete,
  Button,
  Divider,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const empresas = [];

function App() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetch("https://myrestapis.space/collecting/buss")
      .then((res) => res.json())
      .then((data) => {
        setEmpresas(data);
        console.log("empresas", JSON.stringify(data));
      });
  }, []);

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

          <Button
            color="info"
            className="btn"
            variant="contained"
            onClick={() => {
              const razon = document.querySelector("#razonBusiness").value;
              const tel = document.querySelector("#telBusiness").value;
              const mail = document.querySelector("#mailBusiness").value;
              const data = { razon: razon, tel: tel, mail: mail };
              //.. http NO https
              fetch("https://myrestapis.space/collecting/add-business", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => {
                  console.log("response", response);
                })
                .catch((error) => {
                  console.log("error", error);
                });
            }}
          >
            Agregar
          </Button>
        </form>
      </section>
      <Divider></Divider>
      <section>
        <h2>Alta de empresa</h2>
        <form id="form" action="">
          <InputLabel className="lbl">Es cliente de:</InputLabel>
          <Select
            id="buss"
            color="error"
            className="inp"
            label="Es cliente de:"
            variant="standard"
          >
            {empresas.map((emp) => {
              return (
                <MenuItem color="error" key={emp.id} value={emp.id}>
                  {emp.razonSocial}
                </MenuItem>
              );
            })}
          </Select>

          <TextField
            id="razon"
            className="inp"
            color="error"
            label="Razon Social"
            variant="standard"
          />

          <TextField
            id="dir"
            className="inp"
            color="error"
            label="Direccion"
            variant="standard"
          />
          <TextField
            id="tel"
            className="inp"
            color="error"
            label="Telefono"
            variant="standard"
          />

          <TextField
            id="fecha"
            className="inp"
            color="error"
            label="Fecha (día / día1-día2 / día-fin)"
            variant="standard"
          />

          <TextField
            id="horario"
            className="inp"
            color="error"
            label="Horario (hora1 - hora2)"
            variant="standard"
          />

          <TextField
            id="demora"
            className="inp"
            color="error"
            label="Demora (minutos)"
            variant="standard"
          />
          <TextField
            id="lat"
            className="inp"
            color="error"
            label="Latitud"
            variant="standard"
          />
          <TextField
            id="long"
            className="inp"
            color="error"
            label="Longitud"
            variant="standard"
          />
          <Button
            color="info"
            className="btn"
            variant="contained"
            onClick={() => {
              const buss = document.querySelector("#buss").value,
                razon = document.querySelector("#razon").value,
                dir = document.querySelector("#dir").value,
                tel = document.querySelector("#tel").value,
                fecha = document.querySelector("#fecha").value,
                horario = document.querySelector("#horario").value,
                demora = document.querySelector("#demora").value,
                lat = document.querySelector("#lat").value,
                long = document.querySelector("#long").value;

              let data = {
                razon: razon,
                business: buss,
                direccion: dir,
                tel: tel,
                fecha: fecha,
                horario: horario,
                demora: demora,
                lat: lat,
                long: long,
              };
              fetch("https://myrestapis.space/collecting/add-company", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => {
                  console.log("response", response);
                })
                .catch((error) => {
                  console.log("error", error);
                });
            }}
          >
            Agregar
          </Button>
        </form>
      </section>
    </div>
  );
}

export default App;
