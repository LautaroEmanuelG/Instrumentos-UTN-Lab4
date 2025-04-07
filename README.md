# 🎵 Laboratorio de Computación 4 - Trabajo Práctico React 🎸

## 📚 Descripción del Proyecto

Este proyecto fue desarrollado como parte del **Trabajo Práctico de React** para la materia **Laboratorio de Computación 4** de la **UTN – FRM – TUP**, bajo la supervisión del docente **Ing. Gerardo Magni**.

El objetivo principal fue crear una aplicación en React que permita listar instrumentos musicales a partir de un archivo JSON (`instrumentos.json`). La aplicación incluye componentes reutilizables, estilos personalizados y lógica para mostrar información relevante de cada instrumento.

---

## 🛠️ Funcionalidades Implementadas

### 📋 Lista de Instrumentos

- Se genera una lista o grilla con todos los instrumentos musicales.
- Cada instrumento se muestra en un componente individual llamado `InstrumentoCard`.

### 🚚 Envío Gratis

- Si el costo de envío es igual a `"G"`, se muestra la leyenda **"Envío gratis a todo el país"** con un ícono de camión y texto en color verde.
- Si el costo de envío tiene un valor numérico, se muestra el costo en color naranja.

### 💅 Estilos Personalizados

- Los estilos fueron diseñados para aproximarse a la imagen proporcionada en el enunciado.
- Se utilizaron colores, tamaños y alineaciones consistentes para mejorar la experiencia visual.

---

## 📂 Estructura del Proyecto

### 🧩 Componentes

- **`InstrumentoCard`**: Componente que representa cada instrumento musical. Muestra:
  - Imagen del instrumento.
  - Nombre, precio, cantidad vendida y descripción.
  - Información sobre el costo de envío.

### 🎨 Estilos

- Los estilos están definidos en el archivo `style.css` y se aplican a los componentes para lograr un diseño limpio y moderno.

---

## 📷 Ejemplo Visual

A continuación, se muestra un ejemplo de cómo se renderizan los instrumentos en la aplicación:

![Ejemplo de Lista de Instrumentos](./img/example-image.png)

---

## 📝 Enunciado Original

> Dado el conjunto de datos JSON contenido en el archivo `instrumentos.json`, genere los componentes, rutas, etc., de React necesarios para mostrar:
>
> - Una lista o grilla con la totalidad de los instrumentos de tal manera de aproximarse lo mejor posible a la siguiente imagen.
> - Nota: Si el costo de envío es igual a `"G"`, deberá mostrar la leyenda **"Envío gratis a todo el país"** como se ve en la imagen ilustrativa.

---

## 🚀 Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Tipado estático para mejorar la calidad del código.
- **Vite**: Herramienta de desarrollo rápida para proyectos modernos de frontend.
- **CSS**: Para los estilos personalizados.

---

## 📦 Instalación y Uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/instrumentos-utn-lab4.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

---

## 👨‍🏫 Créditos

- **Docente**: Ing. Gerardo Magni
- **Materia**: Laboratorio de Computación 4
- **Universidad**: UTN – FRM – TUP
- **Grupo**: Mucho Gusto
