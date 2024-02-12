const productos = [
    {
        id: 1,
        nombre: "gloss transparente",
        precio: 2000,
        stock: 2,
        categoria: "Labiales"
    },
    {
        id: 2,
        nombre: "delineador liquido",
        precio: 1200,
        stock: 5,
        categoria: "Deloineadores"
    },
    {
        id: 3,
        nombre: "labial rojo",
        precio: 1200,
        stock: 5,
        categoria: "Labiales"
    },
    {
        id: 4,
        nombre: "delineador lapiz",
        precio: 1300,
        stock: 4,
        categoria: "Delineadores"
    },
    {
        id: 5,
        nombre: "base liquida",
        precio: 1700,
        stock: 5,
        categoria: "Bases"
    },
    {
        id: 6,
        nombre: "base compacta",
        precio: 1900,
        stock: 2,
        categoria: "Bases"
    },
    {
        id: 7,
        nombre: "gloss rosado",
        precio: 2100,
        stock: 9,
        categoria: "Labiales"
    },
    {
        id: 8,
        nombre: "delineador gel",
        precio: 2300,
        stock: 4,
        categoria: "Delineadores"
    },
    {
        id: 9,
        nombre: "labial rosado",
        precio: 2300,
        stock: 2,
        categoria: "Labiales"
    },
    {
        id: 10,
        nombre: "labial beige",
        precio: 2300,
        stock: 8,
        categoria: "Labiales"
    }
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
