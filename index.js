
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = 3000 || 8080;


// const conexion = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE   
// });


// console.log();


//    conexion.connect((err) => {
//     if (err) {
//         console.error(`error de conexion: ${err.stack}`)
//         return;
//     }
//     console.log(`conectado a la base de datos ${process.env.DATABASE}`);
// });



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
//CONFIGURACION DEL MOTOR DE PLANTILLAS

app.set('view engine', 'hbs' );
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res, next) =>{
    res.render('index', {
        titulo:'Bienvenidos a Nuestra Pagina ',
        style:'styles.css'
    })
});

app.get('/page', (req,res) =>{
    
    res.render('page',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});





//// EJEMPLO POST Y GET ETC////











// app.get('/productos', (req,res) =>{
    
     
//         let sql ='SELECT * FROM productos';

//          conexion.query(sql, (err, result) => {
//          if (err) throw err;
//          res.render('productos',{
//             titulo: 'formulario para productos',
//             results: result,
//         });
//       });
    
    
    
//      });
//  app.get('/productos', (req,res) =>{
//   res.render('productos',{
//     titulo: 'formulario para productos',
//          });
//      });
    


// app.post('/formulario' , (req,res) => {
    
//     console.log(req.body);
//     //desestructuracion de datos
//     const {nombre, apellido, dni} =req.body;

     
    
//     //Asingo datos a las variables enviadas
//   let nombre = req.body.nombre;
//   let precio= req.body.precio;
//  const {nombre,precio} = req.body; 
    
//     console.log(nombre, precio);
 
//      if (nombre =='' || precio == ''){
//         let validacion = 'rellenar los campos necesarios..';

//         res.render('formulario', {
//             titulo: 'formulario para productos',
//             validacion
//         });
//      } else{
//         res.render('formulario', {
//             titulo: 'formulario enviado'
//       })  
//      }

//     let datos = {
//         nombre: nombre,     //La primera palabra es el nombre de la base de datos y el siguiente es el valor que tiene en el programa//
//         precio: precio
//     }
     
//       let sql ='INSERT INTO productos set ?';

//       conexion.query(sql, datos, (err, result) => {
//         if (err) throw err;
//         res.render('formulario',{
//             titulo: 'formulario para productos'
//         });
//       });