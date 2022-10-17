window.onload = inicio;

function inicio() {

    document.addEventListener('DOMContentLoaded', listar())
}

function listar() {

    fetch('listar.php')
        .then(res => res.json())
        .then(datas => {


            let str = new Array;

            datas.map(elems => {
                let pProd = {
                    id: JSON.parse(elems.id),
                    nombre: JSON.parse(elems.producto).nombre,
                    precio: '$ ' + JSON.parse(elems.producto).precio + '/kg',
                    stock: JSON.parse(elems.producto).stock + 'kg'
                };

                str.push(pProd)

            })
            console.log(str)

            new gridjs.Grid({

                data: str,          //   El contenido de la tabla son los datos de str
                pagination: {       //
                    enabled: true,  //   La tabla va a tener paginación
                    limit: 10,       //   de máximo x elementos por página
                    summary: false  //   esta opción dice elementos mostrados/totales
                },
                search: {
                    enabled: true,

                },
                style: {
                    td: {
                        border: '1px solid #ccc'
                    },
                    table: {
                        'font-size': '15px'
                    }
                },
                language: {
                    'search': {
                        'placeholder': 'Buscar...'
                    }
                }
            }).render(document.getElementById('tabla'));


        })

}