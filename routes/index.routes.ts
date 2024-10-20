import Express from "express";
import { routesReservas } from "./reservas";
import { routesUsuarios } from "./usuarios";
import { routesVehiculos } from "./vehiculos";


export const routes = () =>{
    const router = Express.Router();

  // Generación del primero recurso:
  // Endpoint o url: http://localhost:3000/hola-mundo
  router.get("/", (req, res) => {
    res.send({ message: "Bienvenido a la API " });
  });

  router.use(routesReservas());
  router.use(routesUsuarios());
  router.use(routesVehiculos())
  // TODO: OTRAS RUTAS
  //  router.use(());

  return router;
};