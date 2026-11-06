# MovieLand

A modern movie discovery web app built with React and Vite, designed for quick searching and browsing movie information using the OMDb API.

<p align="center">
  <img src="https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.3.6-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/OMDb-API-FFCC00?style=for-the-badge" alt="OMDb API" />
</p>

## Overview

MovieLand is a clean and responsive movie search app that lets users:

- Search for movies by title
- View movie posters, release year, and type
- Browse results in a polished card layout
- Experience a dark cinematic UI

This project is ideal for showcasing frontend skills, API integration, and interactive UI design in a compact React application.

## Features

- Fast movie search with live keyword input
- Responsive movie card grid
- Dark-themed, modern interface
- OMDb API integration
- Built with reusable React components

## Tech Stack

- React
- Vite
- JavaScript
- OMDb API
- CSS Modules / custom styling

## Project Structure

```bash
src/
├── App.jsx
├── App.css
├── assets/
│   ├── MovieCard.jsx
│   └── search.svg
├── main.jsx
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/KartikR888/movie-land.git
cd movie-land
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## API Configuration

This app uses the OMDb API with the following endpoint pattern:

```bash
https://omdbapi.com/?apikey=e2eb8b44&s=${title}
```

> Replace or secure the API key as needed for production use.

## Screenshots

Add a screenshot here once the app is running locally:

```md
![MovieLand Preview](./assets/preview.png)
```

## License

This project is open source and available under the MIT License.

## Author

Built by [KartikR888](https://github.com/KartikR888/)

## Connect

- GitHub: [KartikR888](https://github.com/KartikR888/)
- Portfolio / project links: add your links here
