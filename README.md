# Re:Zero API - Frontend

Este proyecto es la interfaz web del proyecto **Re:Zero API**, una aplicación Angular que consume una API basada en los personajes del anime Re:Zero kara Hajimeru Isekai Seikatsu.

## 🌐 Demo Local

Puedes correr el proyecto localmente con:

```bash
npm install
ng serve
```

Luego abre tu navegador en:  
[http://localhost:4200](http://localhost:4200)

## 🧩 Funcionalidades

- Visualización de personajes con:
  - Nombre
  - Habilidad
  - Facción
  - Temporada
  - Imagen
- Filtro por temporada (Season 1, Season 2, etc.)
- Diseño inspirado en la API de Rick and Morty
- Adaptación temática con colores de Subaru (naranja y negro)

## 🔧 Tecnologías Usadas

- **Angular 14**
- **TypeScript**
- **HTML/CSS**
- **API REST en Spring Boot (Backend)**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   └── characters/        # Página principal con tarjetas de personajes
│   ├── services/              # Servicio para obtener personajes desde la API
├── assets/                    # Imágenes, estilos globales
└── environments/              # Configuración de entornos
```

## 🚀 Pendientes / Mejoras Futuras

- Paginación para manejar muchos personajes
- Mejoras de estilo visual
- Filtros adicionales por habilidad, facción o nombre
- Página de detalle para cada personaje
- Modo oscuro / claro

## 🔗 Repositorio del Backend

Este frontend se conecta al siguiente backend:  
[🔗 Re:Zero API (Spring Boot)](https://github.com/Nickman054/re-zero-api)

---

## 🤝 Contribuciones

¡Sugerencias, issues y mejoras son bienvenidas!

---

**Autor:** [Nicolas](https://github.com/Nickman054)  
Versión del proyecto: `v1.0`
