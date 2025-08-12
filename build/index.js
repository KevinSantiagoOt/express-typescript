"use strict";
// EN INDEX SIEMPRE ESTA EL CÓDIGO FUENTE
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Importamos Express
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)(); // Creamos una aplicación con Express
app.use(express_1.default.json()); // Le decimos a nuestra app que va a usar express.jason que transforma la req.body a un json
const PORT = 3000; // Le indicamos a que puerto se va a levantar el servidor
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here!');
    res.send('pongg');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
