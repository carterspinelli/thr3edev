import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el equivalente a __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateASVMImage() {
  // Crear canvas con dimensiones para una imagen de portafolio
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Dibujar fondo degradado
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e3a8a'); // azul oscuro
  gradient.addColorStop(0.5, '#1d4ed8'); // azul medio
  gradient.addColorStop(1, '#10b981'); // verde

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Dibujar círculos decorativos
  for (let i = 0; i < 12; i++) {
    const radius = Math.random() * 100 + 50;
    const x = Math.random() * width;
    const y = Math.random() * height;
    
    ctx.globalAlpha = 0.1;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
  
  // Restaurar opacidad
  ctx.globalAlpha = 1.0;

  try {
    // Cargar logo y colocarlo en el centro
    const logo = await loadImage(path.join(__dirname, '../public/images/clients/asvm_logo.png'));
    const logoWidth = width * 0.7;
    const logoHeight = (logo.height / logo.width) * logoWidth;
    const logoX = (width - logoWidth) / 2;
    const logoY = (height - logoHeight) / 2;
    
    ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

    // Guardar imagen
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, '../public/images/asvm-project.png'), buffer);
    console.log('✅ Imagen de ASVM generada exitosamente');
  } catch (error) {
    console.error('❌ Error al generar la imagen:', error);
  }
}

generateASVMImage();