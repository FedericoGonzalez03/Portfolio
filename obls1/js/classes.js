/*  Federico González Salomón 288123
    Maximiliano Botto Devicenzi 277791   */

class Empleado{
    constructor(nombre, cedula, departamento, edad){
        this.nombre = nombre;
        this.cedula = cedula;
        this.departamento = departamento;
        this.edad = edad;
    }
}
class Rubro{
    constructor(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion; 
    }
}
class Oferta{
    constructor(detalle, precio, empleado, rubro, departamento){
        this.detalle = detalle;
        this.precio = precio;
        this.empleado = empleado;
        this.rubro = rubro;
        this.departamento = departamento
    }
}
class Sistema{
    constructor(){
        this.Empleados = [];
        this.Rubro = [];
        this.Oferta = [];
    }
}