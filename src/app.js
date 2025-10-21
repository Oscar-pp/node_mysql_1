import { createConnection } from "mysql2";

// EVITAR MOSTRAR DATOS SENSIBLES HARDCODEADOS
// const configConnection = {
//     host : 'localhost',
//     port : 3306,
//     user : 'node',
//     password : 'node',
//     database : 'agenda'
// }
process.loadEnvFile();
const configConnection = {
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};
// Crear la conexión
const connection = createConnection(configConnection);

// Definir la query
const query = "Select * From contactos";
connection.query(query, (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});

// Julieta Venegas que su telefono sea del trabajo
const query1 =
  'update contactos set tipo = "trabajo" where nombre = "Julieta" and apellido = "Venegas";';
connection.query(query1, (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});

// Añadimos otro contacto "Michael Jordan 66666 personal"
const query2 =
  'insert into contactos (nombre, apellido, telefono, tipo) values ("Michael", "Jordan", "66666", "personal")';
connection.query(query2, (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});
// Borramos a Mike Jagger
const query3 =
  'delete from contactos where nombre = "Mike" and apellido="Jagger"';
connection.query(query3, (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});

// Ver como han quedado los datos
const query4 = "Select * From contactos";
connection.query(query4, (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});