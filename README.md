# 🧭 UdeAJobs Platform — Technical Documentation

Este repositorio contiene la **documentación técnica y arquitectónica** de _Freelancers Platform_, un sistema basado en **arquitectura de células** diseñado para conectar candidatos y empleadores de manera moderna, modular y escalable.

---

## 🌐 Documentación en línea

La documentación completa está disponible en GitHub Pages:

👉 **[Ver documentación en línea](https://team-das.github.io/C4-Architecture/)**  

> Accede a los diagramas C4, descripciones de células y estructura general del sistema desde una interfaz web interactiva.


## 📘 Acerca del proyecto

Freelancers Platform está estructurado en **células independientes**, donde cada célula agrupa los servicios necesarios para operar un dominio específico del sistema (identidad, perfiles, proyectos, ciclo de vida, etc.).  
Este modelo permite una arquitectura más **resiliente**, **autónoma** y **escalable**.

La documentación contenida en este repositorio busca ofrecer una **visión clara del sistema**, sus **componentes**, **interacciones** y **decisiones de diseño**.

---

## 🧩 Contenido principal

| Sección | Descripción |
|----------|-------------|
| 🗺️ **C4 Diagrams** | Diagramas de arquitectura (Contexto, Contenedores, Componentes y Código). |
| ⚙️ **Arquitectura de Células** | Descripción del enfoque celular y su aplicación en el proyecto. |
| 🔐 **Identity Cell** | Diagramas y estructura del dominio de autenticación y autorización. |
| 💼 **Projects Cell** | Estructura y relaciones dentro del dominio de proyectos. |
| 👤 **Profile Cell** | Modelado y servicios del dominio de gestión de perfiles. |
| 🔄 **Life Cycle Cell** | Flujo y ciclo de vida de postulaciones, notificaciones y comunicación. |
| 🧭 **Cell Router** | Componente de enrutamiento global entre las células. |

---

## 🖥️ Visualización

Esta documentación cuenta con una **interfaz web interactiva** creada con **React + TypeScript + Vite**, que permite navegar fácilmente entre los diagramas y descripciones del sistema.

Para ejecutarla localmente:

```bash
# Instalar dependencias
npm install

# Iniciar entorno de desarrollo
npm run dev

