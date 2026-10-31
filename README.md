# VOLIUZ Web — Next.js

Proyecto inicial organizado a partir de las cuatro vistas HTML exportadas desde Google Stitch.

## Vistas disponibles

- Inicio: http://localhost:3000/
- Directorio: http://localhost:3000/directorio
- Transparencia / metodología: http://localhost:3000/transparencia
- Portal PyMEs: http://localhost:3000/pymes

## Requisitos

- Node.js 20.9 o superior (recomendado: versión LTS)
- npm

## Ejecutar en Windows (VS Code)

1. Extrae la carpeta `VOLIUZ-NextJS` dentro de tu carpeta de trabajo, por ejemplo:
   `C:\Users\luisl\OneDrive\Escritorio\UNI\VOLIUZ-NextJS`
2. Abre esa carpeta en Visual Studio Code: **Archivo → Abrir carpeta**.
3. Abre la terminal integrada: **Terminal → Nuevo terminal**.
4. Instala dependencias:

   ```bash
   npm install
   ```

5. Inicia el servidor:

   ```bash
   npm run dev
   ```

6. Abre http://localhost:3000 en Chrome.

Para detener el servidor, vuelve a la terminal y presiona `Ctrl + C`.

## Estructura

```text
VOLIUZ-NextJS/
├── public/
│   └── stitch/             # HTML originales exportados desde Stitch
├── src/
│   ├── app/                # Rutas de Next.js
│   │   ├── directorio/
│   │   ├── pymes/
│   │   ├── transparencia/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── StitchView.tsx  # Visor reutilizable de las vistas
├── package.json
└── README.md
```

## Nota técnica importante

En esta primera integración se conservan los cuatro HTML originales dentro de `public/stitch` y Next.js los presenta mediante un visor reutilizable. Esto permite arrancar el proyecto y revisar las cuatro pantallas sin alterar el código que generó Stitch. El siguiente paso de desarrollo será migrar gradualmente cada vista a componentes React/TSX nativos, mover estilos y recursos a la estructura de Next.js y conectar las funcionalidades reales (formularios, filtros, autenticación, persistencia y calculadora).

Los enlaces de navegación internos de las vistas originales deben apuntar a `/`, `/directorio`, `/transparencia` y `/pymes`. Los enlaces que Stitch dejó como `#` todavía pueden ser botones o acciones visuales sin funcionalidad conectada.
