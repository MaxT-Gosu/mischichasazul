// db.js - Base de datos de modelos y su contenido
const modelosDB = [
    {
        id: 1,
        nombre: "Valeria",
        fotoPortada: "https://simp1.cuckcapital.cr/images/2022-10-10_10-06.md.png",
        badge: "Hot", // Puede ser "Hot", "Nueva", o "" (vacío si no tiene)
        categoria: "trans", // <--- Etiqueta asignada para identificar en Top Trans
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
			"https://simp6.cuckcapital.cr/images3/scene00001dd4cae1859cd9120.md.jpg",
			"https://simp6.cuckcapital.cr/images3/scene56821080ae41f3040589e.md.jpg",
		    "https://simp6.cuckcapital.cr/images3/scene59851c11cdb80a3d2693e.md.jpg",
			
        ],
        videos: [
            "https://www.burstcloud.co/embed/335d3c5388aefc23a4afcacff2d84173e0f032a0d922e50249ce3c20f4f96aca/691851021239988224-P4cgjlay(1).mp4",
			"https://www.burstcloud.co/embed/72ce3384a737331d2b428bce63fb5243b3dde290b661f6c036c89deb39a41de8/693315955991785472-5Meguirj.mp4",
			"https://www.burstcloud.co/embed/db719201ee4e08d53eb0fbb8839e16eb7b0275a4f98f339e0372062d0cbb7eff/694732882609975296.mp4"
        ]
    },
	{
        id: 4,
        nombre: "qwe",
        fotoPortada: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
        badge: "",
        categoria: "", // <--- Otra de prueba asignada a trans
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
			"https://tucontenido.b-cdn.net/tuconte/spitreligion/Spitireligion%20riding.mp4"
        ]
    },
	{
        id: 6,
        nombre: "kenalialuv",
        fotoPortada: "https://simp4.cuckcapital.cr/9BD6F307-BC48-4369-96CF-317BE381A216.md.jpg",
        badge: "",
        categoria: "Latina",
        descripcion: "Amante del fitness y las sesiones de fotos atrevidas.",
        fotos: [
            "https://simp6.cuckcapital.cr/images/Screenshot_20230311_090809.md.jpg",
            "https://simp6.cuckcapital.cr/images/Screenshot_20230311_090836.md.jpg",
			"https://simp6.cuckcapital.cr/images/Screenshot_20230311_090856.md.jpg",
			"https://simp6.cuckcapital.cr/images/b3dae269-728f-474f-9a11-f87dd01ece06.md.jpg",
			"https://simp6.cuckcapital.cr/images/FkrosSkXkAQ8ODb.md.jpg",
			"https://simp6.cuckcapital.cr/images3/doubleflash1e00df206428c070.png",
			"https://simp4.cuckcapital.cr/2024/pussyspread33e16ed7fd343c36.png",
			"https://simp6.cuckcapital.cr/images/IMG_004209d19e6aec94a7b1.jpg",
			"https://simp6.cuckcapital.cr/images2/IMG_08931ebd5a9541899ec5.md.jpg",
			"https://simp6.cuckcapital.cr/images3/4369c5cb062c25d10.png"
        ],
        videos: [
            "https://www.burstcloud.co/embed/bdbafe890e73858b3e29bd29efadafa678bbe480b0395fc4a991725ab3be546e/0Ha4znrst2j6g5tskajt5%20720P.mp4",
			"https://www.burstcloud.co/embed/cc223c544162420f918443f0c687655423e16b508fd51695b96751110050a7ae/0Hjf3i94i1h047mcrtkbu%20Source.mp4",
			"https://www.burstcloud.co/embed/0203d183809a17ade51ec1c1b54b3a15a26f624cf549c2f03d570ac438de64de/1000001590.mp4",
			"https://www.burstcloud.co/embed/6f996ed2228c213b96f874fa20c7d29d6f3f8b0562eed0c19ff5e0ec5a6a8b37/1000001597.mp4",
			"https://www.burstcloud.co/embed/ec515af342cc2d160cd36baa3d583207039a32a2a8d6d1cf3be6109fe5eaebe4/He%2BTried%2BTo%2BWatch%2BPorn%2C%2BWhen%2BMy%2BMouth%2BIs%2BAvailable%2BHow%2BRude.%2BFirst%2BTime%2B(On%2BCamera)%2BShooting%2BA%2BLoad%2BIn%2BMy%2BMou.mp4",
			"https://www.burstcloud.co/embed/4972972375f0bfad81a737e749f29a9114ad06bdec5fc6029fcfbd9b2e292ecf/Kenalialuv%20-%20Reze.mp4",
			"https://www.burstcloud.co/embed/85cc270573f6cf0a9f796da3c8ce13c3c57386a78d8742091a4d58489bfca8c7/Kenalialuv.mp4"
        ]
    },
	{
        id: 7,
        nombre: "chloewildd",
        fotoPortada: "https://simp2.cuckcapital.cr/FLViwejWUAUsPF2.md.jpg",
        badge: "Nueva",
        categoria: "Cam Girls",
        descripcion: "Amante del fitness y las sesiones de fotos atrevidas.",
        fotos: [
            "https://simp3.cuckcapital.cr/images/2160x1215_c0058d3a9f6a7c6b8f2d11dcfd224409.md.jpg",
            "https://simp3.cuckcapital.cr/images/2160x1215_00b3a8d368facf4815d961725af71cf9.md.jpg",
			"https://simp3.cuckcapital.cr/images/2160x1215_4358e7f16309353102c383ff54cf40ab.md.jpg",
			"https://simp3.cuckcapital.cr/images/1215x2160_d59f86e8effa5f0132812eae35ed7a7a.md.jpg",
			"https://simp3.cuckcapital.cr/images/1892x1215_bdb7c50af5cb4be7fb6ddce794037b69.md.jpg",
			"https://simp3.cuckcapital.cr/images/1215x2160_aa67fca5614f01163ed95ae1455c5b1f.md.jpg",
			"https://simp3.cuckcapital.cr/images/2160x1215_9970f0e95019a2537f3993bd6c4a5c0f.md.jpg",
			"https://simp3.cuckcapital.cr/images/1920x1258_4d77a71aa30158957e2b61c6aa679b4f.md.jpg",
			"https://simp3.cuckcapital.cr/images/1620x2160_f63ece4966d1c0dbb25393c59b3b83a1.md.jpg",
			"https://simp3.cuckcapital.cr/images/2160x1215_1c762244f70658f37fabe9d1efff3026.md.jpg",
			"https://simp3.cuckcapital.cr/images/1215x2160_5c1c59cf2de692d38d74187f5308c415.md.jpg",
			"https://simp3.cuckcapital.cr/images/768x1024_88bea6b46b018090d74828c363d10ecf.md.jpg",
			"https://simp4.cuckcapital.cr/Screenshot_20221020_211151_Opera.md.jpg",
			"https://simp6.cuckcapital.cr/images4/46bcd7b2-1c2a-4b75-884b-5acba76e3ec1.jpg",
			"https://simp6.cuckcapital.cr/images4/b2a6e1ee-c207-497b-b046-5b0e18e508a2.jpg",
			"https://simp6.cuckcapital.cr/images4/6279b746-be10-405b-9750-1a03fd329ddd.jpg",
			"https://simp6.cuckcapital.cr/images4/9dad8ecd-3f16-474f-866d-0ac88c80b31f.jpg",
			"https://simp6.cuckcapital.cr/images3/2160x1216_8f2e1af9af3df65d40c16d7fe82a609fb71e442d0753cfaf.md.jpg",
			
			
        ],
        videos: [
            "https://www.burstcloud.co/embed/3d8d8dd9ab34da354aceb86f22a58c4bde3f94c164adbcce3753beb2bfeb0476/Chloewildd%2B2025-02-08%2B00.17.mp4",
			"https://www.burstcloud.co/embed/4566c8c3a4c714512ea384eabbc994e47d904e064f9f227819f502ebee6fd137/gKLkfVCcyiZ.mp4",
			"https://www.burstcloud.co/embed/7d7c663fe2f8dcd80d368116b0d220b83b544e2310f07c4a8a2995dbb84fffda/gKLkfVCcyiZ.mp4",
			"https://www.burstcloud.co/embed/7ae82925acda3d517e07ad98b2f8752b2554c40dca6c8d9846f866e006062826/Chloewildd%2B2025-12-14%2BPart%2B8.mp4"

        ]
    }
];