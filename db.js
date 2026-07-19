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
        nombre: "lilijunex",
        fotoPortada: "https://simp6.cuckcapital.cr/images/7qermhv7auy91.md.webp",
        badge: "",
        categoria: "Latina",
        descripcion: "Amante del fitness y las sesiones de fotos atrevidas.",
        fotos: [
            "https://simp6.cuckcapital.cr/images3/scene000019cd3eb9e7786fed4.md.jpg",
            "https://simp6.cuckcapital.cr/images3/scene205213c0a30fb71ac5d01.md.jpg",
			"https://simp6.cuckcapital.cr/images3/scene0000156c1d805f51a3d9b.md.jpg",
			"https://simp6.cuckcapital.cr/images3/scene0234194498ff5c979aba5.md.jpg",
			"https://simp6.cuckcapital.cr/images3/scene000017b8244a08faffbc8.md.jpg",
			"https://simp6.cuckcapital.cr/images3/scene0243193a2474162176e65.md.jpg",
			
        ],
        videos: [
            "https://www.burstcloud.co/embed/335d3c5388aefc23a4afcacff2d84173e0f032a0d922e50249ce3c20f4f96aca/691851021239988224-P4cgjlay(1).mp4"
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
    },
	{
        id: 5,
        nombre: "spitreligion",
        fotoPortada: "https://simp6.cuckcapital.cr/images2/IMG_38705439888e5cc6e6b1.md.jpg",
        badge: "",
        categoria: "Latina",
        descripcion: "Amante del fitness y las sesiones de fotos atrevidas.",
        fotos: [
            "https://t93.pixhost.to/thumbs/469/441368248_ge1ckplwkaairol.jpg",
            "https://t93.pixhost.to/thumbs/469/441368250_gepyux8xiaamut7.jpg",
			"https://t93.pixhost.to/thumbs/469/441368251_gepyux9w4aan9oj.jpg",
			"https://simp6.cuckcapital.cr/images3/spitreliigion15ef34896794f2291.md.png",
			"https://simp6.cuckcapital.cr/images3/GaquLmAXgAAz-Me92dfb7ebcb20c405.md.jpg",
			"https://simp6.cuckcapital.cr/images3/10000033026755f706b183271e.jpg",
			"https://simp6.cuckcapital.cr/images3/1000003303d6b0cdd0b92a4be2.jpg",
			"https://simp6.cuckcapital.cr/images3/10000033044093dd12b3aa1b7f.md.jpg",
			"https://simp6.cuckcapital.cr/images3/IMG_5569a334057d72d9129d.md.jpg",
			"https://simp6.cuckcapital.cr/images3/G7Npq_-W4AA3zPv4d99a33f1fe17c76.md.jpg",
			"https://simp6.cuckcapital.cr/images3/G7Npq_9W0AAx6xW6431d84b0f870f8c.md.jpg",
			"https://simp6.cuckcapital.cr/images3/G31ZjUTW0AA4SXpda42179515309a59.md.jpg",
			"https://simp6.cuckcapital.cr/images3/G31ZjURWcAA_Z8Ibaed51410213a948.md.jpg",
			"https://simp6.cuckcapital.cr/images3/2316x2406_e2ab140dead577e77dbc68280b1db93bbfb571eb12b772d6.md.jpg",
			"https://simp6.cuckcapital.cr/images3/2316x2316_b2b866e3d3c44ea430a79a222ba72718c4bd2c85d9343dbd.md.jpg",
			"https://simp6.cuckcapital.cr/images3/2316x2316_6aa5128dbf255af0e26fff2d945d31ad6eb4fcd50c980366.md.jpg",
			"https://simp6.cuckcapital.cr/images3/858x1475_ecc5dd17387a0e4b108e0d4f2cd0bbade6af0690ad38bd46.md.jpg",
			"https://simp6.cuckcapital.cr/images3/914x1273_ef4887e90def8b60b88a8829538aaeeffa5fdc0ec7b6984d.md.jpg"
			
			
			
        ],
        videos: [
            "https://tucontenido.b-cdn.net/tuconte/spitreligion/0hw840cfpggb0010mi8y9_source.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/0hzce9lk8sns3fxzh2t58_source.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/406258ae86d0aba7244cbf52824b7441.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/8730ab0e92780a2e32e10bbc155e8d45.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/8fdfe3135098c0665462a8cecac69bc2.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/921c0fd4a6f9ae93173b005c260a51ea.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/ca9ec4cf7376d004e8ce0925bc570345.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/d28f7762db985ae023b9903be3c59110.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/EmilyyManson.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/NAsvkk1SDi2.mp4",
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/Spitireligion%20riding.mp4",
			
        ]
    }
    // Puedes seguir agregando las modelos que quieras aquí abajo...
];