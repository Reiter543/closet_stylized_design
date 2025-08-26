# Closet Stylized Design

Closet Stylized Design es una aplicación web interactiva que permite a los usuarios diseñar y personalizar prendas de vestir en 3D, así como crear bordados personalizados y gestionar un catálogo de diseños de moda.

## Estructura del Proyecto

### Archivos Principales
- `index.html` - Página principal del sitio
- `closet_stylized.html` - Interfaz principal de diseño de prendas
- `diseño.html` - Editor de diseño con visualización 3D
- `bordados.html` - Editor de bordados personalizados
- `galeria.html` - Galería de diseños de la comunidad
- `carrito.html` - Gestión del carrito de compras
- `inicio_de_sesion.html` - Página de autenticación
- `moodboard.html` - Espacio para colaboraciones
- `restricciones.html` - Guía de diseño y restricciones
- `encabezado.html` - Componente de navegación

### Estilos y Scripts
- `static/css/closet_stylized.css` - Estilos principales
- `static/js/closet_stylized.js` - Funcionalidad principal

### Catálogo de Prendas
Ubicación: `prendas_CS/`

#### Archivos HTML y CSS
- Chaquetas:
  - `basketball_jacket.html` / `basketball_jacket.css`
  - `leather_jacket.html` / `leather_jacket.css`
  - `chaqueta.html` / `chaqueta.css`
- Camisas:
  - `camisa.html` / `camisa.css`
- Pantalones:
  - `pantalon.html` / `pantalon.css`
  - `man_short.html` / `man_short.css`
  - `short.html` / `short.css`
- Otros:
  - `falda.html` / `falda.css`
  - `vestido.html` / `vestido.css`

#### Modelos 3D
Cada prenda incluye sus archivos 3D (GLTF) y texturas:
- `basketball_jacket/`
- `camisa_shirt/`
- `falda-_skirt/`
- `leather_jacket/`
- `man_shorts/`
- `metaretail_chaqueta_roja_con_percha/`
- `pantalon_gris_nexus_tours/`
- `shorts/`
- `vestido/`

## Requisitos

- Navegador web moderno con soporte para:
  - WebGL
  - JavaScript ES6+
  - Model Viewer (para visualización 3D)

## Instalación y Ejecución

1. Clona el repositorio:
```bash
git clone https://github.com/Reiter543/closet_stylized_design.git
```

2. Navega al directorio del proyecto:
```bash
cd closet_stylized_design
```

3. Abre el archivo `index.html` en tu navegador web o utiliza un servidor web local:
   - Para Python:
     ```bash
     python -m http.server 8000
     ```
   - Para Node.js:
     ```bash
     npx http-server
     ```

4. Accede a la aplicación en tu navegador:
```
http://localhost:8000
```

## Características Principales

- Visualización 3D de prendas
- Editor de diseños personalizado
- Herramienta de bordados
- Galería de diseños comunitarios
- Carrito de compras
- Sistema de autenticación de usuarios
- Espacio colaborativo (Moodboard)
- Guía de diseño y restricciones

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Model Viewer (para modelos 3D)
- GLTF (formato de modelos 3D)

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Créditos

Los modelos 3D utilizados en este proyecto están bajo sus respectivas licencias, que se pueden encontrar en los archivos `license.txt` dentro de cada carpeta de modelo.
