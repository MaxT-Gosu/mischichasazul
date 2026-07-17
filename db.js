// db.js - Base de datos de modelos y su contenido
const modelosDB = [
    {
        id: 1,
        nombre: "Valeria",
        fotoPortada: "https://simp1.cuckcapital.cr/images/2022-10-10_10-06.md.png",
        badge: "Hot", // Puede ser "Hot", "Nueva", o "" (vacío si no tiene)
        categoria: "Latina", // Te servirá si luego quieres poner filtros
        descripcion: "Bienvenidos a mi galería privada. Aquí verás mi contenido más exclusivo.",
        // Enlaces a sus fotos exclusivas
        fotos: [
            "https://simp1.cuckcapital.cr/images/2022-10-10_10-03.md.png",
            "https://simp1.cuckcapital.cr/images/2022-10-10_10-05_1.md.png",
            "https://simp1.cuckcapital.cr/images/2022-10-10_10-08.md.png"
        ],
        // Enlaces a sus videos (pueden ser de servidores externos o de tu github)
        videos: [
            "https://appcine.b-cdn.net/tuconte/gilticus.mp4", // Video de ejemplo
            "https://www.burstcloud.co/embed/9c7fa55ec5e216b50f7d58ddf2b0b7afcedead66b5cf1a0da6ddf46c054f14ef/2.mp4"
        ]
    },
    {
        id: 2,
        nombre: "iaribroin",
        fotoPortada: "https://simp6.cuckcapital.cr/images4/20260311_00433836f9304564435504.md.jpg",
        badge: "Nueva",
        categoria: "Estadounidense",
        descripcion: "Subiendo videos nuevos todos los días 🔥",
        fotos: [
            "https://simp6.cuckcapital.cr/images3/photo_2024-08-30_00-11-38e59190eecc2983fe.md.jpg",
			"https://simp6.cuckcapital.cr/images3/photo_2024-08-30_00-13-4587f3005df3c12249.md.jpg",
			"https://simp6.cuckcapital.cr/images3/photo_2024-08-30_00-13-4345f6ad93f4139f43.md.jpg",
			"https://simp6.cuckcapital.cr/images3/hD7fPzcf_oafe1a108de0255b0.md.jpg",
			"https://simp6.cuckcapital.cr/images3/169796146888ec91751a25f4a218.md.jpg",
			"https://simp6.cuckcapital.cr/images3/iara-broin-v0-84csolqv0n3g14962ccca537eecf6.md.jpg",
			"https://simp6.cuckcapital.cr/images3/20260101_2325513e4b8cfd505bd0b5.md.jpg",
			"https://simp6.cuckcapital.cr/images3/G91-qGwWEAAiEhQc3ef996e074efcaa.md.jpg",
			"https://simp6.cuckcapital.cr/images4/20260327_2243387f248a67f68bd3b1.md.jpg",
			"https://simp6.cuckcapital.cr/images4/iarabroin_2026-05-23_25b3a050e2047f70e.md.jpg"
			
			
			
			
        ],
        videos: [
		    "https://www.burstcloud.co/embed/267f4840f666da070b89c730752d55d7d24368bc9c2b12a5c85f2d77d3b0f363/4ac7bea6-dcd7-40ba-a0d1-c311bb334e24.mp4",
			"https://www.burstcloud.co/embed/cd272c665c3d32426ae09ebe7883498b8d302e222e513fc933b671c433732401/VID_20260608_233151_443.mp4",
			"https://www.burstcloud.co/embed/6766dd5feb8774b61458471f6b769b7455b4d33cd0feb0d4733894b571f6cd66/VID_20260715_234616_833-HePxBIpK.mp4"
		]
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
    },
	{
        id: 4,
        nombre: "qwe",
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