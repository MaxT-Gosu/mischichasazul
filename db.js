// db.js - Base de datos de modelos y su contenido
const modelosDB = [
    {
        id: 1,
        nombre: "Valeria",
        fotoPortada: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
        badge: "Hot", // Puede ser "Hot", "Nueva", o "" (vacío si no tiene)
        categoria: "Latina", // Te servirá si luego quieres poner filtros
        descripcion: "Bienvenidos a mi galería privada. Aquí verás mi contenido más exclusivo.",
        // Enlaces a sus fotos exclusivas
        fotos: [
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
        ],
        // Enlaces a sus videos (pueden ser de servidores externos o de tu github)
        videos: [
            "https://www.w3schools.com/html/mov_bbb.mp4", // Video de ejemplo
            "https://www.w3schools.com/html/movie.mp4"
        ]
    },
    {
        id: 2,
        nombre: "Camila",
        fotoPortada: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        badge: "Nueva",
        categoria: "Europea",
        descripcion: "Subiendo videos nuevos todos los días 🔥",
        fotos: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
        ],
        videos: []
    },
    {
        id: 3,
        nombre: "Sofía",
        fotoPortada: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
        badge: "",
        categoria: "Latina",
        descripcion: "Amante del fitness y las sesiones de fotos atrevidas.",
        fotos: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
        ],
        videos: [
            "https://www.w3schools.com/html/movie.mp4"
        ]
    }
    // Puedes seguir agregando las modelos que quieras aquí abajo...
];