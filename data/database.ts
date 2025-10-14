export interface Service {
  id: string;
  category: string;
  featured: boolean;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  tags: string[];
  lifestyleFocus: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  seasonality: {
    allYear: string[];
    specialSeasons: {
      id: string;
      label: string;
      type: string;
      value: any;
      description: string;
      specificServices: string[];
    }[];
  };
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
    name: string;
    description: string;
    mission: string;
    vision: string;
    inspiration: string;
    values: CompanyValue[];
    socials: {
        instagram: string;
        facebook: string;
        whatsapp: string;
    }
}

export const companyInfo: CompanyInfo = {
    name: "Cartagena Entertainment Rent and Pleasure",
    description: "Somos más que una empresa de alquiler: somos tus arquitectos de momentos inolvidables en el corazón del Caribe. Nos especializamos en curar experiencias de lujo que combinan aventura, confort y exclusividad.",
    mission: "Ofrecer experiencias de lujo y entretenimiento que superen todas las expectativas, a través de una exclusiva gama de yates, propiedades y vehículos. Estamos respaldados por un firme compromiso con la calidad, la seguridad y la responsabilidad, garantizando que cada momento sea inolvidable.",
    vision: "Ser la empresa líder global en el mercado del lujo y el entretenimiento, reconocida por nuestra excelencia en el servicio, la calidad de nuestra flota y nuestra capacidad para crear experiencias personalizadas. Aspiramos a ser el referente principal para quienes buscan placer y aventura en el Caribe.",
    inspiration: "Nos guiamos por la energía vibrante de la cultura caribeña. Los colores de nuestro logo son un homenaje a las noches mágicas del Festival de la Luna Verde de San Andrés, una celebración que resalta las tradiciones, la alegría y el entusiasmo de las raíces afrocaribeñas. Esta riqueza cultural es la que inspira cada experiencia que creamos.",
    values: [
        { icon: "fas fa-star", title: "Compromiso con la Excelencia", description: "Nos esforzamos por ofrecer servicios de la más alta calidad." },
        { icon: "fas fa-shield-alt", title: "Seguridad ante Todo", description: "Tu seguridad y tranquilidad son nuestra máxima prioridad." },
        { icon: "fas fa-gem", title: "Pasión por el Lujo", description: "Creamos experiencias únicas para quienes buscan lo mejor." },
        { icon: "fas fa-hand-holding-heart", title: "Atención Personalizada", description: "Nos dedicamos a entender y satisfacer tus deseos." },
        { icon: "fas fa-leaf", title: "Responsabilidad Social", description: "Respetamos el entorno natural y cultural que nos rodea." },
        { icon: "fas fa-lightbulb", title: "Innovación Constante", description: "Nos adaptamos a tus necesidades con creatividad." },
        { icon: "fas fa-handshake", title: "Integridad y Transparencia", description: "Actuamos con honestidad y ética en todo momento." },
        { icon: "fas fa-users", title: "Trabajo en Equipo", description: "Fomentamos un ambiente de colaboración y respeto." },
        { icon: "fas fa-smile-beam", title: "Alegría y Entusiasmo", description: "Transmitimos la energía vibrante del Caribe." }
    ],
    socials: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/573000000000" // Placeholder number
    }
};

export const services: Service[] = [
    {
        "id": "alquiler-yates-lujo",
        "category": "Navegación",
        "featured": true,
        "title": "Alquiler de Yates de Lujo",
        "shortDescription": "Navega con estilo y confort en nuestras exclusivas embarcaciones por el Caribe.",
        "fullDescription": "Disfruta de una experiencia exclusiva en nuestras embarcaciones de lujo, equipadas con todas las comodidades para navegar por las aguas cristalinas del Caribe. Perfecto para eventos privados, celebraciones o simplemente relajarte con estilo.",
        "image": "https://images.pexels.com/photos/163236/luxury-yacht-yacht-yachting-yacht-charter-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-ship",
        "tags": ["yate", "lujo", "eventos", "islas", "privado"],
        "lifestyleFocus": "El mar es tuyo. Vívelo sin límites."
      },
      {
        "id": "alquiler-veleros-catamaranes",
        "category": "Navegación",
        "featured": true,
        "title": "Alquiler de Veleros y Catamaranes",
        "shortDescription": "Vive la elegancia de navegar a vela en embarcaciones de alta gama.",
        "fullDescription": "Vive la tranquilidad y la elegancia de navegar en veleros y catamaranes de alta gama, ideales para explorar las islas cercanas o disfrutar de un día inolvidable en el mar.",
        "image": "https://images.pexels.com/photos/989214/pexels-photo-989214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-sailboat",
        "tags": ["velero", "catamaran", "tranquilidad", "exploracion"],
        "lifestyleFocus": "Conecta con el viento, el mar y la exclusividad."
      },
      {
        "id": "powercats-botes-deportivos",
        "category": "Navegación",
        "featured": false,
        "title": "Powercats y Botes Deportivos",
        "shortDescription": "Velocidad y aventura en embarcaciones de última generación.",
        "fullDescription": "Para los amantes de la velocidad y la aventura, ofrecemos botes deportivos y powercats de última generación, diseñados para combinar rendimiento y confort.",
        "image": "https://images.pexels.com/photos/248646/pexels-photo-248646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-jet-ski",
        "tags": ["velocidad", "aventura", "adrenalina", "botes"],
        "lifestyleFocus": "La adrenalina también puede ser un lujo."
      },
      {
          "id": "romance-en-el-mar",
          "category": "Experiencias Exclusivas",
          "featured": false,
          "title": "Cena Romántica en Yate",
          "shortDescription": "Una velada inolvidable bajo las estrellas para celebrar el amor.",
          "fullDescription": "Sorprende a tu pareja con una cena gourmet privada a bordo de un yate de lujo. Incluye chef exclusivo, decoración especial y un recorrido por la bahía de Cartagena al atardecer.",
          "image": "https://images.pexels.com/photos/3779693/pexels-photo-3779693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "icon": "fas fa-heart",
          "tags": ["romance", "parejas", "cena", "amor y amistad"],
          "lifestyleFocus": "Crea un momento que durará para siempre."
      },
      {
        "id": "pesca-deportiva",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Pesca Deportiva de Altura",
        "shortDescription": "Vive la emoción de la pesca en el Caribe con guías expertos.",
        "fullDescription": "Experimenta la emoción de la pesca en las aguas del Caribe con nuestro servicio de pesca deportiva, que incluye equipos de alta calidad y guías expertos para garantizar una experiencia única.",
        "image": "https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-fish",
        "tags": ["pesca", "aventura", "deporte", "alta mar"],
        "lifestyleFocus": "Una captura legendaria te espera."
      },
      {
        "id": "charters-panama",
        "category": "Viajes Exclusivos",
        "featured": false,
        "title": "Charters a Panamá",
        "shortDescription": "Explora nuevos horizontes con nuestros exclusivos charters a Panamá.",
        "fullDescription": "Explora nuevos horizontes con nuestros exclusivos charters a Panamá, una experiencia de lujo que combina comodidad, aventura y paisajes espectaculares.",
        "image": "https://images.pexels.com/photos/1283209/pexels-photo-1283209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-route",
        "tags": ["viaje", "panama", "lujo", "internacional"],
        "lifestyleFocus": "Tu horizonte se expande donde tú decides."
      },
      {
        "id": "alquiler-mansiones",
        "category": "Alojamiento de Lujo",
        "featured": true,
        "title": "Alquiler de Mansiones de Lujo",
        "shortDescription": "Hospédate en impresionantes mansiones con vistas paradisíacas.",
        "fullDescription": "Hospédate en nuestras impresionantes mansiones, equipadas con instalaciones de primera clase, vistas paradisíacas y un ambiente privado para disfrutar de momentos inolvidables.",
        "image": "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-house-chimney-window",
        "tags": ["alojamiento", "mansiones", "privacidad", "lujo"],
        "lifestyleFocus": "Tu palacio privado en el corazón del Caribe."
      },
      {
        "id": "alquiler-autos-gama-alta",
        "category": "Transporte de Lujo",
        "featured": false,
        "title": "Alquiler de Automóviles de Alta Gama",
        "shortDescription": "Muévete con estilo y sofisticación en nuestra flota de automóviles de lujo.",
        "fullDescription": "Muévete con estilo y sofisticación en nuestra flota de automóviles de lujo, ideales para cualquier ocasión especial o simplemente para disfrutar del confort en tu día a día.",
        "image": "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-car",
        "tags": ["autos", "transporte", "lujo", "estilo"],
        "lifestyleFocus": "El lujo te acompaña en cada trayecto."
      },
      {
        "id": "eventos-privados",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Eventos Privados y Celebraciones",
        "shortDescription": "Organizamos eventos personalizados en yates o mansiones de lujo.",
        "fullDescription": "Organizamos eventos personalizados a bordo de nuestras embarcaciones o en nuestras propiedades de lujo, desde bodas y aniversarios hasta reuniones corporativas exclusivas.",
        "image": "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-champagne-glasses",
        "tags": ["eventos", "bodas", "corporativo", "celebraciones"],
        "lifestyleFocus": "Momentos que se convierten en leyendas."
      },
      {
        "id": "tours-personalizados",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Tours Personalizados",
        "shortDescription": "Diseñamos recorridos únicos por el Caribe adaptados a tus intereses.",
        "fullDescription": "Diseñamos experiencias únicas que incluyen recorridos personalizados por las islas del Caribe, visitas culturales y actividades exclusivas adaptadas a tus intereses.",
        "image": "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-map-signs",
        "tags": ["tours", "cultura", "aventura", "personalizado"],
        "lifestyleFocus": "Tu curiosidad es el mapa. Nosotros somos la brújula."
      },
      {
        "id": "servicio-concierge",
        "category": "Servicios Premium",
        "featured": false,
        "title": "Servicios Concierge",
        "shortDescription": "Atendemos todas tus necesidades para una experiencia impecable.",
        "fullDescription": "Nuestro equipo de concierge está disponible para atender todas tus necesidades, desde reservas especiales hasta planificación de itinerarios, asegurando que tu experiencia sea impecable.",
        "image": "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-concierge-bell",
        "tags": ["concierge", "asistencia", "reservas", "premium"],
        "lifestyleFocus": "Tus deseos, nuestra misión."
      },
      {
        "id": "escolta-privada",
        "category": "Seguridad y Lujo",
        "featured": false,
        "title": "Servicio de Escolta Privada",
        "shortDescription": "Disfruta con total tranquilidad y protección discreta y profesional.",
        "fullDescription": "Ofrecemos un Servicio de Escolta Privada diseñado para proteger tu bienestar mientras disfrutas de nuestras experiencias de alto nivel. Incluye personal altamente capacitado, discreción, cobertura completa y vehículos blindados opcionales.",
        "image": "https://images.pexels.com/photos/70235/pexels-photo-70235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-user-shield",
        "tags": ["seguridad", "proteccion", "privacidad", "escolta"],
        "lifestyleFocus": "El lujo no solo se vive, también se protege."
      },
      {
        "id": "venta-embarcaciones",
        "category": "Venta",
        "featured": false,
        "title": "Venta de Embarcaciones de Lujo",
        "shortDescription": "Adquiere el yate, velero o catamarán de tus sueños con nuestro asesoramiento.",
        "fullDescription": "Te ofrecemos la oportunidad de adquirir tu propia embarcación. Nuestro servicio de Venta de Embarcaciones de Lujo está diseñado para satisfacer las expectativas más altas, con un catálogo exclusivo y asesoramiento personalizado.",
        "image": "https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-file-signature",
        "tags": ["venta", "yates", "inversion", "propiedad"],
        "lifestyleFocus": "El primer paso hacia la vida náutica que siempre soñaste."
      },
      {
        "id": "chef-exclusivo",
        "category": "Experiencias Exclusivas",
        "featured": true,
        "title": "Chef Exclusivo a Bordo",
        "shortDescription": "Alta cocina en tu yate o mansión. Menús personalizados para una experiencia gourmet.",
        "fullDescription": "Ofrecemos un Servicio de Chef Exclusivo diseñado para llevar la alta cocina directamente a tu experiencia, con menús personalizados, ingredientes de primera calidad y experiencias temáticas.",
        "image": "https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-utensils",
        "tags": ["gastronomia", "chef", "gourmet", "exclusivo"],
        "lifestyleFocus": "El sabor del lujo, servido en tu mesa."
      }
];

export const destinations: Destination[] = [
    {
        "id": "cartagena",
        "name": "Cartagena de Indias",
        "description": "El corazón vibrante del Caribe, donde la historia colonial se encuentra con el lujo moderno.",
        "image": "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "seasonality": {
          "allYear": [
            "alquiler-yates-lujo", "alquiler-veleros-catamaranes", "powercats-botes-deportivos",
            "pesca-deportiva", "alquiler-mansiones", "alquiler-autos-gama-alta", "eventos-privados",
            "tours-personalizados", "servicio-concierge", "escolta-privada", "venta-embarcaciones",
            "chef-exclusivo"
          ],
          "specialSeasons": [
            { "id": "semana-santa", "label": "Semana Santa", "type": "dateRange", "value": { "start": "2026-03-29", "end": "2026-04-05" }, "description": "Una semana de alta demanda, ideal para escapes de lujo y eventos exclusivos.", "specificServices": ["eventos-privados", "chef-exclusivo"] },
            { "id": "amor-y-amistad", "label": "Amor y Amistad", "type": "specificDate", "value": "09-20", "description": "Celebra el amor con experiencias románticas únicas.", "specificServices": ["romance-en-el-mar"] }
          ]
        }
      },
      {
        "id": "islas-rosario-baru",
        "name": "Islas del Rosario y Barú",
        "description": "Un paraíso de aguas cristalinas, playas de arena blanca y arrecifes de coral.",
        "image": "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "seasonality": {
          "allYear": [
            "alquiler-yates-lujo", "alquiler-veleros-catamaranes", "powercats-botes-deportivos",
            "pesca-deportiva", "eventos-privados", "tours-personalizados", "chef-exclusivo"
          ],
          "specialSeasons": []
        }
      },
      {
        "id": "panama-san-blas",
        "name": "Panamá y San Blas",
        "description": "Una aventura internacional hacia un archipiélago de ensueño con cultura Guna Yala.",
        "image": "https://images.pexels.com/photos/1654210/pexels-photo-1654210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "seasonality": {
          "allYear": [ "charters-panama" ],
          "specialSeasons": []
        }
      }
];
