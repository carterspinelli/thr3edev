import React, { useEffect, useRef } from "react";

export function ASVMImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext("2d");
    if (!context) return;
    
    // Establecer dimensiones
    canvas.width = 1200;
    canvas.height = 630;
    
    // Fondo degradado
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#1e3a8a"); // blue-900
    gradient.addColorStop(0.5, "#1d4ed8"); // blue-700
    gradient.addColorStop(1, "#10b981"); // green-500
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Cargar el logo de ASVM
    const image = new Image();
    image.src = "/images/clients/asvm_logo.png";
    
    image.onload = () => {
      // Calcular posición central con escala
      const scale = 0.65;
      const imgWidth = image.width * scale;
      const imgHeight = image.height * scale;
      const x = (canvas.width - imgWidth) / 2;
      const y = (canvas.height - imgHeight) / 2;
      
      // Dibujar el logo
      context.globalAlpha = 0.9;
      context.drawImage(image, x, y, imgWidth, imgHeight);
      
      // Restaurar opacidad
      context.globalAlpha = 1.0;
      
      // Círculos decorativos
      for (let i = 0; i < 10; i++) {
        const radius = Math.random() * 100 + 50;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        context.globalAlpha = 0.1;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
      }
      
      // Guardar la imagen
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "asvm-portfolio.png";
      link.href = dataUrl;
      
      // Guardar la imagen en la carpeta pública
      fetch(dataUrl)
        .then(res => res.blob())
        .then(blob => {
          const formData = new FormData();
          formData.append("image", blob, "asvm-portfolio.png");
          
          // Aquí normalmente habría una petición al servidor, pero en este caso,
          // simplemente dejamos que se descargue
          // fetch('/api/upload', { method: 'POST', body: formData });
          
          // Exportar imagen
          document.getElementById("download-link")?.setAttribute("href", dataUrl);
        });
    };
  }, []);
  
  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
      <a id="download-link" download="asvm-portfolio.png">Descargar imagen</a>
    </div>
  );
}