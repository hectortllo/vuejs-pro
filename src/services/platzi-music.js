//Centralizar todas las peticiones a la API
import trae from "trae";
import configService from "./config";

const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
});

export default platziMusicService;
