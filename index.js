const mysql = require('mysql2');
const express = require('express');
require('dotenv').config();
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 8080;



const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE   
});






console.log();


   conexion.connect((err) => {
    if (err) {
        console.error(`error de conexion: ${err.stack}`)
        return;
    }
    console.log(`conectado a la base de datos ${process.env.DATABASE}`);
});




app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
//CONFIGURACION DEL MOTOR DE PLANTILLAS

app.set('view engine', 'hbs' );
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res, next) =>{
    let sql ='SELECT * FROM trabajopp';

     conexion.query(sql, (err, result) => {
     if (err) throw err;
     res.render('index',{
        titulo: 'formulario para productos',
        results: result,
        
    })
});


app.get('/page', (req,res) =>{
    
    res.render('page',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});

// app.get('/', (req,res) =>{
    
     
//     let sql ='SELECT * FROM trabajopp';

//      conexion.query(sql, (err, result) => {
//      if (err) throw err;
//      res.render('index',{
//         titulo: 'formulario para productos',
//         results: result,
//     });
//   });



//  });
// app.get('/', (req,res) =>{
// res.render('index',{
// titulo: 'formulario para productos',
//      });
 });

app.listen(PORT, () => {
    console.log(`el servidor esta funcionando en el puerto ${PORT}`)
 });





 
 app.post('/page' , (req,res) => {
    
    
   
     const {producto,precio} = req.body; 
        
        console.log(producto, precio);
     
         if (producto =='' || precio == ''){
            let validacion = 'rellenar los campos necesarios..';
    
            res.render('page', {
                titulo: 'formulario para productos',
                validacion
            });
         } else{
            res.render('validacion', {
                titulo: 'formulario enviado',
                style:'styles.css',
          }) ;
         }
    
        let datos = {
            producto: producto,     //La primera palabra es el nombre de la base de datos y el siguiente es el valor que tiene en el programa//
            precio: precio
        }
         
          let sql ='INSERT INTO trabajopp set ?';
    
          conexion.query(sql, datos, (err, result) => {
            if (err) throw err;
            return
          });


         
 
        // res.send(`Datos recibidos: producto: ${producto} precio: ${precio}`); 
       
 });
     



        















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
//       })