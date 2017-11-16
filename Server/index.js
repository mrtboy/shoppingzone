import express from "express";
import consign from "consign";


const app = express();

consign()
    .include("models")
    .then("repositories")
    .then("libs/middlewares.js")
    .then("controllers")
    .then("libs/boot.js")
    .into(app);