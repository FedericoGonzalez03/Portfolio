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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { width } from "@mui/system";

function App() {
  const [empresas, setEmpresas] = useState([]);
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://myrestapis.space/collecting/buss")
      .then((res) => res.json())
      .then((data) => {
        setEmpresas(data);
        console.log("empresas", JSON.stringify(data));
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
    location.href = location.href;
  };

  const throwErrorDialog = () => {
    setTitle("ERROR");
    setMsg("Ingrese los datos correctamente.");
    setOpen(true);
  };

  return (
    <div className="App">
      <section>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon="▼"
          >
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                color: "#0288d1",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {" "}
              Alta de Cliente{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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

                  if (razon == "" || tel == "" || mail == "") {
                    throwErrorDialog();
                  } else {
                    fetch("https://myrestapis.space/collecting/add-business", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    })
                      .then((response) => {
                        if (response.ok == true) {
                          setTitle("TODO OK");
                          setMsg("Datos subidos correctamente!");
                          setOpen(true);
                        } else {
                          throwErrorDialog();
                        }
                      })
                      .catch((error) => {
                        console.log("error", error);
                      });
                  }
                }}
              >
                Agregar
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </section>
      <Divider className="divider"></Divider>
      <section>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon="▼"
          >
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                color: "#0288d1",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {" "}
              Alta de Empresa{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form id="form" action="">
              <InputLabel className="lbl">Es cliente de:</InputLabel>
              <Select
                id="buss"
                color="error"
                className="inp"
                label="Es cliente de:"
                variant="standard"
                native
              >
                {empresas.map((emp) => {
                  return (
                    <option color="error" key={emp.id} value={emp.id}>
                      {emp.razonSocial}
                    </option>
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
                  if (
                    razon == "" ||
                    dir == "" ||
                    tel == "" ||
                    fecha == "" ||
                    horario == "" ||
                    demora == "" ||
                    lat == "" ||
                    long == ""
                  ) {
                    throwErrorDialog();
                  } else {
                    fetch("https://myrestapis.space/collecting/add-company", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    })
                      .then((response) => {
                        if (response.ok == true) {
                          setTitle("TODO OK");
                          setMsg("Datos subidos correctamente!");
                          setOpen(true);
                        } else {
                          throwErrorDialog();
                        }
                      })
                      .catch((error) => {
                        console.log("error", error);
                      });
                  }
                }}
              >
                Agregar
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {msg}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autoFocus>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </form>
          </AccordionDetails>
        </Accordion>
      </section>
      <Divider className="divider"></Divider>
      <section>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon="▼"
          >
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                color: "#0288d1",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              Emitir Factura
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Working on
          </AccordionDetails>
        </Accordion>
      </section>
      <Divider
         className="divider"
      ></Divider>
      <section>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon="▼"
          >
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                color: "#0288d1",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              Emitir Pago
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Working on
          </AccordionDetails>
        </Accordion>
      </section>
      <Divider className="divider"></Divider>
      <section>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon="▼"
          >
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                color: "#0288d1",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              Activar/Desactivar Empresa
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Working on
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
}

export default App;
