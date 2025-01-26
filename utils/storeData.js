const stores = [
    {
        id: 1,
        name: "Productos Alimenticios",
        description: "Productos frescos y de calidad",
        products: [
            //Del Cárnico
            {
                id: 1,
                name: "Lomo Ahumado Bandeja ",
                price: 1850,
                image: "lasqueado.jpg",
                description: "Lomo ahumado lasqueado bandeja de 500 gr sellada",
                category: "Del Cárnico"
            },
            {
                id: 2,
                name: "Lomo Ahumado corte x lb",
                price: 1680,
                image: "lomoahumado.jpg",
                description: "Corte de lomo x lb",
                category: "Del Cárnico"
            },
            //Del Líquido
            {
                id: 3,
                name: "Jugo Multifrutas ",
                price: 1500,
                image: "multifrutas.jpg",
                description: "Jugo de lata Multifruta 6 uds",
                category: "Del Líquido"
            },
            {
                id: 4,
                name: "jugo 200 ml",
                price: 1140,
                image: "200ml.jfif",
                description: "jugo 200 ml 6 uds ",
                category: "Del Líquido"
            },
            // Del Otro
            {
                id: 5,
                name: "Fideos",
                price: 400,
                image: "fideos.jpg",
                description: "Fideos de alta Calidad 500 gr",
                category: "Del Otro"
            },    
           //De Electrodomésticos
           {
            id: 60,
            name: "Ventilador de pedestal",
            price: 20400,
            image: "ventilador.jpg",
            description: "Ventilador tipo ciclón Milexus",
            category: "De Electrodomésticos"
        },
        {
            id: 61,
            name: "Split milexus ",
            price: 129200,
            image: "split.jpg",
            description: "Milexus 1200 btu",
            category: "De Electrodomésticos"
        },
        {
            id: 62,
            name: "Frezeer  ",
            price: 119000,
            image: "nevera.jpg",
            description: "Milexus 5pies ",
            category: "De Electrodomésticos"
        },
        {
            id:63,
            name: "Tv de 32",
            price: 88400,
            image: "32.jpg",
            description: "Tv inteligente 32 pulgadas",
            category: "De Electrodomésticos"
        },
        {
            id: 64,
            name: "Tv de 55  ",
            price: 153000,
            image: "55.jpg",
            description: "Tv inteligente Milexus 55 pulgadas",
            category: "De Electrodomésticos"
        },
        {
            id: 65,
            name: "Batidora Milexus ",
            price: 15300,
            image: "batidora.jpg",
            description: "Batidora 2 en 1 (+ moledor de sazones)",
            category: "De Electrodomésticos"
        },
        {
            id: 72,
            name: "Generador Eléctrico  ",
            price: 120000,
            image: "pulsarr.jpg",
            description: "Generador eléctrico Pulsar 1200 w",
            category: "De Electrodomésticos"
        },  
        {
            id: 66,
            name: " Cefetera Milexus ",
            price: 15300,
            image: "cafetera.jpg",
            description: "Cafetera Electrica de 6 tazas",
            category: "De Electrodomésticos"
            }
        ]
    }
];

const CUP_RATE =1;

const paymentMethods = {
    cup: {
        name: " CUP",
        currency: "CUP",
        rate: CUP_RATE
    }
};
