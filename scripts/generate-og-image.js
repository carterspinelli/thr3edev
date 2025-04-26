import fs from 'fs';
import { createCanvas } from 'canvas';

// Crear un canvas del tamaño adecuado para Open Graph
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// Fondo negro
context.fillStyle = '#000000';
context.fillRect(0, 0, width, height);

// Configurar el texto para el logo
context.font = 'bold 140px Arial, sans-serif';
context.textAlign = 'center';
context.textBaseline = 'middle';

// Texto "thr"
context.fillStyle = '#ffffff';
context.fillText('thr', 510, 315);

// Texto "3" en azul
context.fillStyle = '#0e62fe';
context.fillText('3', 595, 315);

// Texto "e.dev"
context.fillStyle = '#ffffff';
context.fillText('e.dev', 690, 315);

// Guardar la imagen
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/images/og-image.png', buffer);

console.log('Imagen Open Graph generada: public/images/og-image.png');