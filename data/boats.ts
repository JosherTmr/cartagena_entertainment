export interface Boat {
    id: string;
    name: string;
    type: 'Yate' | 'Powercat' | 'Lancha' | 'Jetsky' | 'Velero';
    price: number;
    dimensions: string;
    features: string[];
    description: string;
    image: string;
}

export const boats: Boat[] = [
    {
        id: 'azimut-grande-27',
        name: 'Azimut Grande 27',
        type: 'Yate',
        price: 4500000,
        dimensions: '27 metros (88 pies)',
        features: ['5 Camarotes', 'Jacuzzi en cubierta', 'Estabilizadores', 'Velocidad máxima 28 nudos'],
        description: 'Una obra maestra del diseño italiano. El Azimut Grande 27 ofrece un volumen interior incomparable y espacios exteriores diseñados para el máximo confort. Su uso extensivo de fibra de carbono reduce el peso y aumenta el volumen.',
        image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 'lagoon-sixty-7',
        name: 'Lagoon Sixty 7',
        type: 'Powercat',
        price: 2800000,
        dimensions: '20 metros (67 pies)',
        features: ['Espacios abiertos', 'Gran autonomía', 'Diseño elegante', 'Cocina gourmet'],
        description: 'El Lagoon Sixty 7 es la máxima expresión de elegancia y confort en un catamarán a motor. Diseñado para largas travesías con una estabilidad excepcional y espacios que fluyen entre el interior y el exterior.',
        image: 'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 'pershing-8x',
        name: 'Pershing 8X',
        type: 'Yate',
        price: 6200000,
        dimensions: '25.5 metros (83 pies)',
        features: ['Velocidad 45 nudos', 'Diseño deportivo', 'Music Hull', 'Escalera de fibra de carbono'],
        description: 'La revolución de la fibra de carbono. El Pershing 8X es ligero, rápido y potente. Su diseño aerodinámico y sus alas laterales le dan un aspecto agresivo y elegante a la vez.',
        image: 'https://images.pexels.com/photos/6667260/pexels-photo-6667260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 'boston-whaler-320',
        name: 'Boston Whaler 320 Vantage',
        type: 'Lancha',
        price: 350000,
        dimensions: '9.8 metros (32 pies)',
        features: ['Insumergible', 'Pesca y recreo', 'Doble consola', 'Motores Mercury Verado'],
        description: 'La leyenda insumergible. El 320 Vantage es versátil, ideal tanto para la pesca deportiva seria como para el entretenimiento familiar. Con acabados premium y una navegación suave.',
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 'yamaha-fx-cruiser',
        name: 'Yamaha FX Cruiser SVHO',
        type: 'Jetsky',
        price: 19000,
        dimensions: '3.58 metros',
        features: ['Motor Supercharged', 'Pantalla táctil', 'Audio integrado', 'Asiento Cruiser'],
        description: 'La moto de agua de lujo definitiva. Potencia sobrealimentada, manejo preciso y comodidad para largas distancias. Equipada con las últimas tecnologías para una experiencia en el agua inigualable.',
        image: 'https://images.pexels.com/photos/2446639/pexels-photo-2446639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 'bali-4-8',
        name: 'Bali 4.8',
        type: 'Velero',
        price: 950000,
        dimensions: '14.8 metros (48 pies)',
        features: ['Puerta oscilobatiente', 'Flybridge panorámico', '6 cabinas', 'Espacio proa rígido'],
        description: 'Innovación en cada detalle. El Bali 4.8 maximiza el espacio habitable con su concepto de "Open Space". Ideal para charter o para grandes familias que buscan confort y ventilación natural.',
        image: 'https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];
