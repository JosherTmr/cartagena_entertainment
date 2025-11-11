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
  inclusions?: string[];
  highlights?: { icon: string; text: string; }[];
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

export interface GoogleReview {
    author: string;
    rating: number;
    text: string;
}

export interface SocialPost {
    id: string;
    image: string;
    caption: string;
    url: string;
}

export interface LifestyleInfo {
    googleScore: {
        rating: number;
        reviewCount: number;
    };
    instagramPosts: SocialPost[];
    googleReviews: GoogleReview[];
    facebookPosts: SocialPost[];
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
        googleReviews: string;
    },
    lifestyle: LifestyleInfo;
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
        instagram: "https://www.instagram.com/entertain_ctg/",
        facebook: "https://www.facebook.com/ctg.entertain",
        whatsapp: "https://wa.me/573000000000", // Placeholder number
        googleReviews: "https://www.google.com/maps/search/?api=1&query=Google", // Placeholder link
    },
    lifestyle: {
        googleScore: {
            rating: 4.9,
            reviewCount: 87
        },
        instagramPosts: [
            { id: "1", image: "https://images.pexels.com/photos/2405033/pexels-photo-2405033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Atardeceres que se convierten en recuerdos eternos. #LujoCaribe", url: "https://instagram.com" },
            { id: "2", image: "https://images.pexels.com/photos/1579602/pexels-photo-1579602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "La mesa está servida. Nuestro chef exclusivo eleva la gastronomía a otro nivel. #ExperienciaGourmet", url: "https://instagram.com" },
            { id: "3", image: "https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Su palacio flotante privado le espera para conquistar el horizonte. #YatesDeLujo", url: "https://instagram.com" }
        ],
        googleReviews: [
            { author: "Alejandro V.", rating: 5, text: "Una experiencia de otro nivel. El servicio de concierge anticipó cada uno de nuestros deseos. La privacidad y el lujo son su sello distintivo. ¡Inolvidable!" },
            { author: "Sofia L.", rating: 5, text: "El yate era espectacular y la tripulación, de primera. Pasamos un día mágico en las Islas del Rosario. Definitivamente, la mejor opción en Cartagena." },
            { author: "Martin R.", rating: 5, text: "Alquilamos una mansión para un evento familiar y superó todas las expectativas. La atención al detalle es impresionante. Cuidan de todo para que solo te dediques a disfrutar." }
        ],
        facebookPosts: [
            { id: "fb1", image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Detrás de cada gran experiencia, hay un equipo dedicado a la perfección. Conoce cómo nuestro equipo de concierge se convierte en el arquitecto de tus momentos más memorables...", url: "https://facebook.com" },
            { id: "fb2", image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "No es solo un lugar para dormir, es un santuario de paz. Descubre los secretos de diseño y confort de nuestras mansiones privadas frente al mar. El verdadero lujo reside en los detalles...", url: "https://facebook.com" },
            { id: "fb3", image: "https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", caption: "Nuestra última adquisición para la flota de alta gama está lista para dominar el asfalto. Potencia, elegancia y la última tecnología para que tus traslados sean una declaración de estilo...", url: "https://facebook.com" }
        ]
    }
};

// --- SECCIÓN ACTUALIZADA CON TONO DE LUJO Y EXTRAVAGANCIA ---
export const services: Service[] = [
    {
        "id": "alquiler-yates-lujo",
        "category": "Navegación",
        "featured": true,
        "title": "Alquiler de Yates de Lujo",
        "shortDescription": "Reine sobre las aguas del Caribe a bordo de su palacio flotante privado.",
        "fullDescription": "Reclame su soberanía sobre el mar. Nuestras embarcaciones insignia no son simples yates, son santuarios de opulencia equipados con tecnología de punta y un confort sublime. Perfectos para orquestar celebraciones legendarias o para un escape donde el único límite es el horizonte.",
        "image": "https://images.pexels.com/photos/163236/luxury-yacht-yacht-yachting-yacht-charter-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-ship",
        "tags": ["yate", "lujo", "eventos", "islas", "privado"],
        "lifestyleFocus": "El mar es suyo. Vívelo sin límites."
      },
      {
        "id": "alquiler-veleros-catamaranes",
        "category": "Navegación",
        "featured": true,
        "title": "Alquiler de Veleros y Catamaranes",
        "shortDescription": "Sincronice con el pulso del océano en una danza silenciosa y elegante a bordo de naves de diseño superior.",
        "fullDescription": "Experimente la quintaesencia de la navegación. Sienta cómo el viento impulsa naves de diseño superior, donde la elegancia atemporal se fusiona con el confort moderno. Ideal para almas que buscan una conexión auténtica con el mar y explorar bahías secretas con una gracia inigualable.",
        "image": "https://images.pexels.com/photos/989214/pexels-photo-989214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-sailboat",
        "tags": ["velero", "catamaran", "tranquilidad", "exploracion"],
        "lifestyleFocus": "Conecte con el viento, el mar y la exclusividad."
      },
      {
        "id": "powercats-botes-deportivos",
        "category": "Navegación",
        "featured": true,
        "title": "Powercats y Botes Deportivos",
        "shortDescription": "Desate la potencia y conquiste el horizonte. Adrenalina pura envuelta en diseño de vanguardia y confort absoluto.",
        "fullDescription": "Para aquellos que viven a un ritmo superior. Nuestra flota de botes deportivos y powercats son bestias de alto rendimiento diseñadas para dominar las olas. Sienta la adrenalina de la velocidad sin sacrificar un ápice de lujo y estabilidad. El poder en su estado más puro.",
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
          "shortDescription": "Una velada inolvidable bajo un manto de estrellas para sellar un amor legendario.",
          "fullDescription": "Sorprenda a su pareja con una sinfonía romántica en alta mar. Un yate de lujo se transforma en su nido de amor privado, con un chef exclusivo, decoración sublime y la bahía de Cartagena como telón de fondo. Un momento diseñado para quedar grabado en la eternidad.",
          "image": "https://images.pexels.com/photos/3779693/pexels-photo-3779693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "icon": "fas fa-heart",
          "tags": ["romance", "parejas", "cena", "amor y amistad"],
          "lifestyleFocus": "Cree un momento que durará para siempre."
      },
      {
        "id": "pesca-deportiva",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Pesca Deportiva de Altura",
        "shortDescription": "Enfréntese a las leyendas del océano en una expedición de pesca de altura sin precedentes.",
        "fullDescription": "Viva el desafío primal de la pesca en su máxima expresión. A bordo de embarcaciones especializadas y con la guía de capitanes expertos, láncese a la conquista de las aguas profundas del Caribe. Una batalla épica entre usted y el titán del mar, equipada con la mejor tecnología y confort.",
        "image": "https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-fish",
        "tags": ["pesca", "aventura", "deporte", "alta mar"],
        "lifestyleFocus": "Una captura legendaria le espera."
      },
      {
        "id": "charters-panama",
        "category": "Viajes Exclusivos",
        "featured": false,
        "title": "Charters a Panamá",
        "shortDescription": "Embárquese en una odisea de lujo hacia los tesoros vírgenes de Panamá y el archipiélago de San Blas.",
        "fullDescription": "Trascienda fronteras en una travesía que redefine la aventura. Nuestros charters exclusivos a Panamá son un pasaporte a paraísos indómitos y culturas ancestrales, todo ello envuelto en el lujo y la comodidad que solo nosotros podemos garantizar. Su próxima gran historia comienza aquí.",
        "image": "https://images.pexels.com/photos/1283209/pexels-photo-1283209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-route",
        "tags": ["viaje", "panama", "lujo", "internacional"],
        "lifestyleFocus": "Su horizonte se expande donde usted decide."
      },
      {
        "id": "alquiler-mansiones",
        "category": "Alojamiento de Lujo",
        "featured": true,
        "title": "Alquiler de Mansiones de Lujo",
        "shortDescription": "Su imperio privado en el corazón del paraíso. Mansiones que son obras de arte arquitectónicas.",
        "fullDescription": "Hospédese en santuarios de diseño y privacidad absoluta. Nuestras mansiones son más que un alojamiento; son declaraciones de poder con vistas espectaculares, piscinas infinitas y un servicio que anticipa cada deseo. Su corte real le espera en el Caribe.",
        "image": "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-house-chimney-window",
        "tags": ["alojamiento", "mansiones", "privacidad", "lujo"],
        "lifestyleFocus": "Su palacio privado en el corazón del Caribe."
      },
      {
        "id": "alquiler-autos-gama-alta",
        "category": "Transporte de Lujo",
        "featured": true,
        "title": "Alquiler de Automóviles de Alta Gama",
        "shortDescription": "Domine el asfalto con una declaración de poder y elegancia. Nuestra flota de élite es la llave de la ciudad.",
        "fullDescription": "Cada trayecto es una oportunidad para impresionar. Nuestra colección de automóviles de alta gama representa la cima de la ingeniería y el diseño. Muévase con la sofisticación y el poder que le definen, ya sea para una llegada triunfal o para el simple placer de conducir la perfección.",
        "image": "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-car",
        "tags": ["autos", "transporte", "lujo", "estilo"],
        "lifestyleFocus": "El lujo le acompaña en cada trayecto."
      },
      {
        "id": "eventos-privados",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Eventos Privados y Celebraciones",
        "shortDescription": "Orquestamos celebraciones que se convierten en leyendas. Transformamos yates y mansiones en escenarios épicos.",
        "fullDescription": "No organizamos eventos, creamos hitos. Desde bodas que desafían los sueños hasta cumbres corporativas de alto impacto, nuestro equipo transforma sus visiones en realidades espectaculares. Su celebración será el evento del que todos hablarán.",
        "image": "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-champagne-glasses",
        "tags": ["eventos", "bodas", "corporativo", "celebraciones"],
        "lifestyleFocus": "Momentos que se convierten en leyendas."
      },
      {
        "id": "tours-personalizados",
        "category": "Experiencias Exclusivas",
        "featured": true,
        "title": "Tours Personalizados",
        "shortDescription": "Diseñamos odiseas a medida. Le revelamos los secretos mejor guardados del Caribe en un viaje curado para usted.",
        "fullDescription": "Olvídese de los itinerarios comunes. Creamos expediciones personalizadas que responden a su curiosidad y sus pasiones. Acceda a lugares inaccesibles, conozca personajes fascinantes y viva experiencias que el dinero normalmente no puede comprar. Su aventura será única, como usted.",
        "image": "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-map-signs",
        "tags": ["tours", "cultura", "aventura", "personalizado"],
        "lifestyleFocus": "Su curiosidad es el mapa. Nosotros somos la brújula."
      },
      {
        "id": "servicio-concierge",
        "category": "Servicios Premium",
        "featured": false,
        "title": "Servicios Concierge",
        "shortDescription": "Sus deseos son nuestro mapa. Un servicio de concierge omnipotente que anticipa y materializa cada capricho.",
        "fullDescription": "Nuestro equipo de concierge es el artífice de lo imposible. Desde conseguir una mesa en el restaurante más codiciado hasta organizar una sorpresa de último minuto, estamos disponibles 24/7 para orquestar una experiencia impecable. Considere sus deseos cumplidos, incluso antes de pedirlos.",
        "image": "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-concierge-bell",
        "tags": ["concierge", "asistencia", "reservas", "premium"],
        "lifestyleFocus": "Sus deseos, nuestra misión."
      },
      {
        "id": "escolta-privada",
        "category": "Seguridad y Lujo",
        "featured": false,
        "title": "Servicio de Escolta Privada",
        "shortDescription": "Discreción, profesionalismo y tranquilidad absoluta. Nuestro servicio de escolta de élite garantiza su paz en cada momento.",
        "fullDescription": "El verdadero lujo es la libertad de disfrutar sin reservas. Nuestro servicio de escolta privada transforma su experiencia en un santuario de tranquilidad. Un equipo de élite, entrenado en la discreción absoluta, le brindará una protección impecable y prácticamente invisible, ya sea en traslados, eventos exclusivos o en alta mar. Con opciones como vehículos blindados, garantizamos que su única preocupación sea vivir el momento al máximo.",
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
        "shortDescription": "Adquiera una obra maestra de la ingeniería naval. Curamos la adquisición de su próximo yate, velero o catamarán de ensueño.",
        "fullDescription": "Poseer una embarcación de lujo es afirmar un estilo de vida. Le abrimos las puertas a un catálogo curado con las joyas de la ingeniería naval mundial: yates insignes, veleros de regata y catamaranes que son auténticos palacios flotantes. Nuestro servicio trasciende la venta; es una asesoría de élite donde cada detalle, desde la personalización hasta los trámites más complejos, es gestionado con maestría. Invierta en un legado de experiencias inolvidables.",
        "image": "https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-file-signature",
        "tags": ["venta", "yates", "inversion", "propiedad"],
        "lifestyleFocus": "El primer paso hacia la vida náutica que siempre soñó."
      },
      {
        "id": "chef-exclusivo",
        "category": "Experiencias Exclusivas",
        "featured": true,
        "title": "Chef Exclusivo a Bordo",
        "shortDescription": "Transforme su yate o mansión en un templo gastronómico. Un maestro culinario dedicado a orquestar sus deseos.",
        "fullDescription": "La alta cocina no tiene límites. Nuestro servicio de Chef Exclusivo es una experiencia sensorial diseñada a medida. Un maestro culinario privado transformará su entorno en el escenario de una performance gastronómica única. Desde menús de degustación que narran historias del Caribe hasta sofisticadas cenas temáticas maridadas a la perfección, cada plato es una obra de arte creada con los ingredientes más sublimes y una ejecución impecable. El lujo supremo, servido directamente en su mesa.",
        "image": "https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-utensils",
        "tags": ["gastronomia", "chef", "gourmet", "exclusivo"],
        "lifestyleFocus": "El sabor del lujo, servido sin concesiones."
      },
      {
        "id": "bano-cristal-aguas-turquesas",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Baño de Cristal en Aguas Turquesas",
        "shortDescription": "Sumérjase en piscinas naturales de una pureza absoluta, un santuario líquido solo para usted.",
        "fullDescription": "Le llevamos a enclaves secretos donde el mar se convierte en una piscina natural de aguas cristalinas y cálidas. Flote sin esfuerzo en un estado de serenidad total, lejos de todo. No es simplemente nadar, es un ritual de purificación y desconexión en el corazón del paraíso.",
        "image": "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-water",
        "tags": ["serenidad", "relax", "aguas cristalinas", "desconexion", "privacidad"],
        "lifestyleFocus": "Donde el mundo se detiene y solo existe el azul."
      },
      {
        "id": "exploracion-jardines-coral",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Exploración de Jardines de Coral Secretos",
        "shortDescription": "Descubra un universo submarino vibrante, un espectáculo de vida y color reservado para unos pocos privilegiados.",
        "fullDescription": "Equipado con equipos de alta gama, le guiaremos a jardines de coral secretos, ecosistemas prístinos que bullen de vida exótica. Sea testigo de un ballet de peces tropicales y corales majestuosos. Esta no es una excursión de snorkel común, es una inmersión privilegiada en la galería de arte submarina de la naturaleza.",
        "image": "https://images.pexels.com/photos/2418469/pexels-photo-2418469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-mask",
        "tags": ["snorkel", "corales", "submarino", "aventura", "exclusivo"],
        "lifestyleFocus": "El secreto mejor guardado del Caribe, revelado solo para usted."
      },
      {
        "id": "banquete-caribeno",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Banquete Caribeño: Sabores Ancestrales",
        "shortDescription": "Un festín privado que celebra la esencia culinaria del Caribe, servido en el paraíso.",
        "fullDescription": "Olvídese de los restaurantes. Imagine un almuerzo curado exclusivamente para usted en una playa desierta o en la cubierta de su yate. Saboree la pesca del día, preparada con recetas ancestrales y los ingredientes locales más frescos. No es una comida, es un homenaje a la rica herencia gastronómica del Caribe, servido con una presentación impecable.",
        "image": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-drumstick-bite",
        "tags": ["gastronomia", "local", "almuerzo", "fresco", "privado"],
        "lifestyleFocus": "El auténtico sabor del Caribe, elevado a la categoría de arte."
      },
      {
        "id": "atmosferas-sonoras-celebracion",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Atmósferas Sonoras y Celebración",
        "shortDescription": "El soundtrack perfecto para su paraíso privado, desde fiestas vibrantes hasta sesiones lounge de alta gama.",
        "fullDescription": "La música es el alma de la celebración. A bordo de nuestras embarcaciones, un sistema de sonido de alta fidelidad crea la atmósfera perfecta. Ya sea que desee la energía vibrante de un DJ de primer nivel para una fiesta en Cholón o una selección de lounge y chill-out para un atardecer mágico, nosotros curamos el ambiente sonoro de su experiencia.",
        "image": "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-music",
        "tags": ["musica", "fiesta", "diversion", "dj", "ambiente"],
        "lifestyleFocus": "Usted elige la energía. Nosotros creamos la atmósfera."
      },
      {
        "id": "santuarios-serenidad-privada",
        "category": "Experiencias Exclusivas",
        "featured": false,
        "title": "Santuarios de Serenidad Privada",
        "shortDescription": "Descubra enclaves secretos donde el único sonido es el susurro del mar y el viento.",
        "fullDescription": "Le anclaremos en bahías y playas escondidas, accesibles solo por mar, donde el tiempo parece detenerse. Estos son sus santuarios privados para la desconexión total. Sin multitudes, sin distracciones. Solo arena blanca, palmeras y la inmensidad del océano. Ofrecemos el lujo más codiciado de todos: la paz absoluta.",
        "image": "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-spa",
        "tags": ["tranquilidad", "desconexion", "playa privada", "naturaleza", "paz"],
        "lifestyleFocus": "El lujo supremo: la paz absoluta."
      },
      {
        "id": "paseo-en-lancha",
        "category": "Navegación",
        "featured": true,
        "title": "Paseo Privado por las Islas",
        "shortDescription": "Conquiste el archipiélago a su propio ritmo. Su lancha deportiva privada le espera.",
        "fullDescription": "Diseñe su día perfecto en el mar. Un charter privado en una de nuestras lanchas deportivas de alta gama es la llave para descubrir los secretos del archipiélago de las Islas del Rosario. Con un capitán experto a su disposición, usted dicta el itinerario: desde la vibrante fiesta de Cholón hasta la serenidad de una playa escondida. Equipadas con un potente sistema de sonido y todas las comodidades, estas embarcaciones son el epicentro de su aventura personalizada.",
        "image": "https://images.pexels.com/photos/7725618/pexels-photo-7725618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-speedboat",
        "tags": ["lancha", "islas", "tour", "privado", "cholon", "baru", "diversion"],
        "lifestyleFocus": "El archipiélago es su lienzo. Pinte su día perfecto."
      },
      {
        "id": "refugios-frente-al-mar",
        "category": "Alojamiento de Lujo",
        "featured": true,
        "title": "Refugios Privados Frente al Mar",
        "shortDescription": "Despierte con el sonido de las olas en su santuario privado, erigido sobre la arena blanca.",
        "fullDescription": "Experimente la máxima conexión con el paraíso. Nuestros refugios frente al mar no son habitaciones, son experiencias inmersivas. Cabañas y bungalows de diseño eco-lujoso con acceso directo y privado a la playa, donde la opulencia se encuentra con la naturaleza virgen. Ideal para escapadas románticas o retiros de serenidad total, lejos de todo y de todos.",
        "image": "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "icon": "fas fa-house-water",
        "tags": ["bungalow", "playa", "privado", "alojamiento", "eco-lujo", "romance", "serenidad", "frente al mar"],
        "lifestyleFocus": "Su balcón privado al paraíso."
      }
];

export const destinations: Destination[] = [
    {
        "id": "playa-tranquila",
        "name": "Playa Tranquila",
        "description": "Un refugio de paz y aguas serenas, ideal para desconectar y relajarse.",
        "image": "https://cdn-ilcfjhh.nitrocdn.com/AMsOVcaxJEBiDUJmLghgteLoXmGyZJhB/assets/images/optimized/rev-8e9d776/cartagena-tours.co/wp-content/uploads/2022/11/photos-services-cartagena-1.webp",
        "seasonality": {
          "allYear": ['banquete-caribeno','bano-cristal-aguas-turquesas'],
          "specialSeasons": []
        }
      },
      {
        "id": "isla-grande",
        "name": "Isla Grande",
        "description": "La isla más grande del archipiélago, llena de vida, manglares y playas paradisíacas.",
        "image": "https://islasdelrosariotours.com/cdn/shop/articles/192715034_968114623933550_6858899667228538383_n_aac9ff42-fca3-4432-8be5-1db621a246fe_1024x479.jpg?v=1652995543",
        "seasonality": {
          "allYear": ['santuarios-serenidad-privada','bano-cristal-aguas-turquesas','exploracion-jardines-coral'],
          "specialSeasons": []
        }
      },
      {
        "id": "la-piscina",
        "name": "La Piscina",
        "description": "Un acuario natural en medio del mar, perfecto para nadar y hacer snorkel en aguas cristalinas.",
        "image": "https://www.boats4u.co/wp-content/uploads/2023/02/isla_rosario_cartagena_piscinita.jpg",
        "seasonality": {
          "allYear": ['banquete-caribeno','bano-cristal-aguas-turquesas'],
          "specialSeasons": []
        }
      },
      {
        "id": "beach-club",
        "name": "Beach Club",
        "description": "Vive una experiencia de lujo y diversión en los mejores clubes de playa de la región.",
        "image": "https://es.juanballena.com/cdn/shop/files/Luxury_Island_-_Tour_todo_incluido_a_las_Islas_del_Rosario.jpg?v=1734996680&width=480",
        "seasonality": {
          "allYear": ['banquete-caribeno','bano-cristal-aguas-turquesas'],
          "specialSeasons": []
        }
      },
      {
        "id": "cholon",
        "name": "Cholón",
        "description": "El epicentro de la fiesta en el agua. Yates, música y un ambiente inigualable.",
        "image": "https://cdn.yate.co/img/blog/2024/17/cholon-75t.jpg",
        "seasonality": {
          "allYear": ['atmosferas-sonoras-celebracion','banquete-caribeno','bano-cristal-aguas-turquesas','paseo-en-lancha'],
          "specialSeasons": []
        }
      },
      {
        "id": "playa-escondida",
        "name": "Playa Escondida",
        "description": "Un secreto bien guardado. Disfruta de la exclusividad y la naturaleza en su estado más puro.",
        "image": "https://playaescondida.co/wp-content/uploads/2024/07/beach-club-playa-escondida.webp",
        "seasonality": {
          "allYear": ['santuarios-serenidad-privada','banquete-caribeno'],
          "specialSeasons": []
        }
      },
      {
        "id": "cartagena",
        "name": "Cartagena",
        "description": "El punto de partida. Una ciudad amurallada llena de historia, color y encanto caribeño.",
        "image": "https://mlqfmr3rpryd.i.optimole.com/cb:JBSP.a525/w:auto/h:auto/q:100/ig:avif/https://cartagena-tours.co/wp-content/uploads/2023/12/Torre-del-Reloj-en-Cartagena-de-Indias-Colombia.jpg",
        "seasonality": {
          "allYear": ['alquiler-yates-lujo','charters-panama','alquiler-veleros-catamaranes','alquiler-mansiones','alquiler-autos-gama-alta','eventos-privados','tours-personalizados','servicio-concierge','escolta-privada','venta-embarcaciones','chef-exclusivo'],
          "specialSeasons": []
        }
      },
      {
        "id": "cano-raton",
        "name": "Caño Ratón",
        "description": "Un tesoro escondido del archipiélago. Naturaleza virgen, aguas tranquilas y una exclusividad inigualable.",
        "image": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/27/01/4b/punta-brava.jpg",
        "seasonality": {
          "allYear": ['banquete-caribeno','bano-cristal-aguas-turquesas'],
          "specialSeasons": []
        }
      }
];