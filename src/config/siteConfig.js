/**
 * CONFIGURACIÓN CENTRAL — NOVAHost
 * Hosting, dominios y presencia digital para emprendedores en Guatemala.
 */

const siteConfig = {
  restaurantName: 'NOVAHost',
  legalName: 'NOVAHost',
  tagline: 'Tu negocio, siempre en línea.',
  subtitle:
    'Hosting, dominios y correo corporativo para emprendedores, profesionales y pequeñas empresas en Guatemala.',

  phone: '+502 4752 4869',
  whatsapp: '50247524869',
  whatsappDisplay: '+502 4752 4869',
  email: 'ventas@novasoft.com.gt',
  address: 'Guatemala',
  city: 'Guatemala C.A.',
  schedule: 'Atención por teléfono, WhatsApp y correo',
  scheduleShort: 'Atención directa',

  facebook: '#',
  instagram: '#',
  linkedin: '#',
  tiktok: '#',

  googleMaps: '',
  googleMapsEmbedUrl: '',

  primaryColor: '#00AEEF',
  secondaryColor: '#123A73',
  accentColor: '#5EB6FF',
  creamColor: '#E8F4FF',

  logo: '/images/logo/logo.png',
  heroImage: '/images/marketing/hosting-usa.png',
  aboutHeroImage: '/images/marketing/profesional.png',
  productsHeroImage: '/images/marketing/solucion-completa.png',
  servicesHeroImage: '/images/marketing/emprende-hoy.png',
  whyHeroImage: '/images/marketing/taller.png',
  contactHeroImage: '/images/marketing/restaurante.png',
  favicon: '/favicon/favicon.png',

  siteUrl: 'https://www.novahost.com.gt',
  locale: 'es_GT',
  currency: 'GTQ',
  currencySymbol: 'Q',

  whatsappDefaultMessage:
    'Hola NOVAHost, deseo información sobre hosting y presencia digital para mi negocio.',
  whatsappHostingMessage:
    'Hola NOVAHost, quiero contratar hosting para mi negocio.',
  whatsappEmailMessage:
    'Hola NOVAHost, quiero un correo corporativo con el nombre de mi marca.',
  whatsappPackageMessage:
    'Hola NOVAHost, me interesa la solución completa de sitio web, hosting, dominio y correo.',

  navItems: [
    { to: '/#oferta', label: 'Hosting y páginas web' },
    { to: '/#soluciones', label: 'Soluciones NOVA' },
    { to: '/#como-funciona', label: 'Cómo funciona' },
    { to: '/#faq', label: 'Preguntas frecuentes' },
    { to: '/contacto', label: 'Contacto' },
  ],
  footerNavItems: [
    { to: '/', label: 'Inicio' },
    { to: '/quienes-somos', label: 'Quiénes somos' },
    { to: '/productos', label: 'Productos' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/porque', label: 'Por qué NOVAHost' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/privacidad', label: 'Privacidad' },
  ],
  navCtaLabel: 'Cotizar mi página web',
  heroPrimaryCta: 'Quiero mi página web',
  heroPrimaryLink: '/#oferta',
  heroTitle: 'Tu negocio merece una presencia digital propia.',
  heroLead:
    'Creamos tu página web y te ayudamos a dar el siguiente paso con dominio, hosting y correo profesional en un solo paquete.',

  webOffer: {
    enabled: true,
    promoPrice: 599,
    regularPrice: 1199,
    startDate: '2026-10-01',
    endDate: '2026-10-31',
    headline: 'Página web profesional + hosting + dominio + 1 correo',
    promoLegal:
      'Oferta de octubre de 2026. Precio promocional Q599 al año mientras esté vigente. Consulta condiciones al cotizar. No incluye diseño a medida.',
    regularLegal:
      'Precio de referencia Q1,199 al año. Aplican restricciones; confirma vigencia al cotizar. No incluye diseño a medida.',
    includes: [
      'Página web profesional basada en una plantilla',
      'Hosting para publicar tu sitio',
      'Dominio para tu marca',
      '1 correo profesional',
      'Hasta 12 actualizaciones menores de contenido al año',
    ],
  },

  novaProducts: [
    {
      slug: 'novafinanzas',
      name: 'NovaFinanzas Personales',
      published: true,
      order: 1,
      url: 'https://finanzas.novahost.com.gt',
      cta: 'Conocer NovaFinanzas',
      image: '/images/nova/novafinanzas.svg',
      imageNote: 'Ilustración conceptual; no es una captura de una cuenta real.',
      description:
        'Organiza ingresos, gastos y deudas en un solo lugar, con un lenguaje sencillo y un semáforo de presupuesto.',
      benefits: [
        'Seguimiento de ingresos, gastos y movimientos',
        'Presupuesto por categoría con semáforo',
        'Orden de pago de deudas y metas visibles',
      ],
    },
    {
      slug: 'novafit',
      name: 'NovaFit',
      published: true,
      order: 2,
      url: 'https://fit.novahost.com.gt',
      cta: 'Conocer NovaFit',
      image: '/images/nova/novafit.svg',
      imageNote: 'Ilustración conceptual del producto de entrenamiento.',
      description:
        'Registra entrenamientos, organiza tu actividad y observa tu progreso, en gimnasio, casa o al aire libre.',
      benefits: [
        'Registro de entrenamientos y distintas actividades',
        'Métricas según el tipo de ejercicio',
        'Seguimiento de progreso, rachas y metas',
      ],
    },
  ],

  howItWorks: [
    'Cuéntanos qué necesitas.',
    'Te mostramos la solución que mejor encaja.',
    'Empiezas con una guía clara para el siguiente paso.',
  ],

  faqs: [
    {
      q: '¿Qué incluye el paquete web?',
      a: 'Página web profesional basada en plantilla, hosting, dominio y 1 correo profesional, con actualizaciones menores de contenido según el paquete anual. El precio promocional de Q599 aplica solo durante la vigencia de octubre de 2026; después se usa el precio regular de Q1,199 al año, salvo otra campaña confirmada.',
    },
    {
      q: '¿El dominio y el correo están incluidos?',
      a: 'Sí, en el paquete anunciado: 1 dominio y 1 correo profesional, según disponibilidad y condiciones vigentes al contratar.',
    },
    {
      q: '¿Puedo pedir un diseño especial?',
      a: 'Sí. Un diseño a medida o funciones fuera del paquete básico se cotizan por separado.',
    },
    {
      q: '¿Qué es NovaFinanzas Personales?',
      a: 'Una herramienta de NOVAHost para organizar finanzas personales: ingresos, gastos, presupuesto y deudas. Conócela en finanzas.novahost.com.gt. No forma parte del paquete de hosting.',
    },
    {
      q: '¿Qué es NovaFit?',
      a: 'La app de entrenamiento de NOVAHost (Nova FitTrack) para registrar sesiones, ver progreso y seguir metas. Conócela en fit.novahost.com.gt. No forma parte del paquete de hosting.',
    },
    {
      q: '¿Puedo hablar con una persona?',
      a: 'Sí. Escríbenos por WhatsApp al +502 4752 4869 o deja tus datos en el formulario con consentimiento para seguimiento.',
    },
  ],

  consentText:
    'Autorizo a NOVAHost a usar mi nombre y correo para responder esta consulta.',
  consentVersion: 'v1-2026-10-16',

  seo: {
    defaultTitle: 'NOVAHost | Tu negocio, siempre en línea',
    defaultDescription:
      'Páginas web, hosting, dominio y correo profesional para negocios en Guatemala, más soluciones NOVA como NovaFinanzas Personales y NovaFit.',
  },

  home: {
    presentationTitle: 'Presencia profesional en Internet, sin complicaciones',
    presentationText:
      'En NOVAHost ayudamos a negocios y emprendedores a tener una presencia profesional en Internet. Ofrecemos alojamiento web, dominios, correo electrónico corporativo, certificados de seguridad, respaldo y soluciones digitales complementarias, acompañando al cliente desde la puesta en línea hasta la operación de su presencia digital.',
    presentationImage: '/images/marketing/hosting-usa.png',
    specialtiesEyebrow: 'Productos',
    specialtiesTitle: 'Lo esencial para estar en línea',
    specialtiesIntro:
      'Hosting confiable, correo con el nombre de tu marca y un dominio que tus clientes puedan recordar.',
    experienceEyebrow: 'Enfoque',
    experienceTitle: 'Pensado para emprendedores y pequeñas empresas',
    galleryEyebrow: 'Para tu negocio',
    galleryTitle: 'Tu marca. Tu sitio. Tu presencia digital.',
    galleryIntro:
      'Restaurantes, talleres, profesionales, tiendas y negocios locales: cada uno merece verse profesional en Internet.',
    eventsEyebrow: 'Solución completa',
    eventsTitle: 'Página web, hosting, dominio y correo',
    eventsIntro:
      'Una solución para crear presencia, generar confianza y hacer crecer tu negocio. Consulta condiciones vigentes al contratar.',
    eventPills: ['Hosting', 'Dominio', 'Correo corporativo', 'Sitio web'],
    ctaTitle: '¿Listo para llevar tu negocio a Internet?',
    ctaText:
      'Escríbenos por WhatsApp. Te orientamos en español, de forma clara y cercana.',
    stats: [
      { value: 'Hosting', label: 'Siempre disponible para tus clientes' },
      { value: 'Correo', label: 'Con el nombre de tu propia marca' },
      { value: 'Soporte', label: 'Atención cercana en Guatemala' },
    ],
  },

  about: {
    historyTitle: 'Quiénes somos',
    history:
      'Somos una empresa de tecnología orientada a facilitar el acceso de emprendedores y pequeñas empresas a servicios digitales profesionales. Entendemos que para muchos negocios la tecnología puede parecer complicada. Por eso convertimos servicios técnicos en soluciones sencillas: tu sitio web funcionando, tu correo con el nombre de tu empresa y las herramientas necesarias para mantener tu negocio presente en Internet.',
    philosophyTitle: 'Nuestro enfoque',
    philosophy:
      'NOVAHost combina experiencia en sistemas, infraestructura y software con atención personalizada para ofrecer soluciones prácticas y accesibles. Nuestro principal enfoque comercial es el hosting y los servicios asociados a la presencia digital, complementándolos con otras soluciones tecnológicas cuando las necesidades del cliente lo requieren.',
    missionTitle: 'Misión',
    mission:
      'Facilitar a emprendedores, profesionales y pequeñas empresas el acceso a servicios tecnológicos confiables y accesibles que les permitan establecer, mantener y fortalecer su presencia digital, mediante hosting, correo corporativo y soluciones digitales acompañadas de atención cercana y clara.',
    visionTitle: 'Visión',
    vision:
      'Ser una empresa tecnológica reconocida en Guatemala por ofrecer servicios de hosting y presencia digital confiables, accesibles y fáciles de contratar, convirtiéndonos en un aliado tecnológico de largo plazo para emprendedores y pequeñas empresas.',
    valuesTitle: 'Valores',
    values: [
      {
        title: 'Confianza',
        text: 'Construimos relaciones transparentes y de largo plazo.',
      },
      {
        title: 'Responsabilidad',
        text: 'Nos comprometemos con la correcta prestación de nuestros servicios.',
      },
      {
        title: 'Transparencia',
        text: 'Explicamos los servicios de forma clara, sin rodeos innecesarios.',
      },
      {
        title: 'Cercanía',
        text: 'Brindamos atención humana y orientación en español.',
      },
      {
        title: 'Innovación',
        text: 'Buscamos herramientas que mejoren la presencia digital de nuestros clientes.',
      },
      {
        title: 'Calidad',
        text: 'Trabajamos para ofrecer servicios estables, seguros y profesionales.',
      },
    ],
    differencesTitle: 'Lo que nos distingue',
    differences: [
      {
        icon: 'bi-person-check',
        title: 'Enfoque en el cliente',
        text: 'Entendemos la necesidad antes de proponer una solución.',
      },
      {
        icon: 'bi-wallet2',
        title: 'Servicios accesibles',
        text: 'Acercamos tecnología profesional a emprendedores y pequeñas empresas.',
      },
      {
        icon: 'bi-chat-dots',
        title: 'Atención en español',
        text: 'Explicamos las soluciones de manera sencilla.',
      },
      {
        icon: 'bi-diagram-3',
        title: 'Soluciones integrales',
        text: 'Podemos comenzar con hosting y crecer junto al cliente.',
      },
    ],
    gallery: [
      '/images/marketing/taller.png',
      '/images/marketing/restaurante.png',
      '/images/marketing/profesional.png',
      '/images/marketing/panaderia.png',
    ],
  },

  experience: [
    {
      icon: 'bi-globe2',
      title: 'Tu página web siempre disponible',
      text: 'Un lugar seguro y estable para que tus clientes te encuentren.',
    },
    {
      icon: 'bi-envelope-at',
      title: 'Correo con tu marca',
      text: 'Comunícate como ventas@tumarca.com y transmite más confianza.',
    },
    {
      icon: 'bi-shield-check',
      title: 'Seguridad y respaldo',
      text: 'Certificados SSL, copias de seguridad y herramientas de continuidad según el servicio contratado.',
    },
    {
      icon: 'bi-headset',
      title: 'Acompañamiento cercano',
      text: 'Orientación clara desde la contratación hasta la operación diaria.',
    },
  ],

  specialties: [
    {
      id: 'hosting',
      name: 'Hosting para tu negocio',
      description:
        'Alojamiento pensado para empresas, emprendedores y profesionales que necesitan mantener su presencia en Internet de forma sencilla y confiable.',
      price: null,
      image: '/images/marketing/hosting-usa.png',
      category: 'hosting',
    },
    {
      id: 'correo',
      name: 'Correo corporativo',
      description:
        'Una dirección de correo con el nombre de tu negocio transmite mayor confianza frente a clientes y proveedores.',
      price: null,
      image: '/images/marketing/emprende-hoy.png',
      category: 'correo',
    },
    {
      id: 'solucion-completa',
      name: 'Solución completa',
      description:
        'Sitio web, dominio, hosting y correo profesional en un solo paquete para poner tu negocio en línea.',
      price: 1199,
      image: '/images/marketing/solucion-completa.png',
      category: 'paquetes',
    },
  ],

  menuCategories: [
    { id: 'hosting', label: 'Hosting' },
    { id: 'correo', label: 'Correo' },
    { id: 'dominios', label: 'Dominios' },
    { id: 'seguridad', label: 'Seguridad' },
    { id: 'paquetes', label: 'Paquetes' },
  ],

  menu: [
    {
      id: 'hosting-compartido',
      name: 'Hosting compartido',
      description:
        'El lugar donde vive tu sitio web. Pensado para emprendedores y pequeñas empresas que necesitan disponibilidad, simplicidad y un precio accesible. Las condiciones específicas de cada plan se confirman al contratar.',
      price: null,
      image: '/images/marketing/hosting-usa.png',
      category: 'hosting',
    },
    {
      id: 'correo-corporativo',
      name: 'Correo profesional',
      description:
        'Dale una imagen más profesional a tu negocio. Comunícate utilizando el nombre de tu propia marca, por ejemplo ventas@tumarca.com.',
      price: null,
      image: '/images/marketing/emprende-hoy.png',
      category: 'correo',
    },
    {
      id: 'dominios',
      name: 'Dominios',
      description:
        'El dominio es la dirección digital de tu empresa. Te ayudamos a establecer y administrar tu presencia en Internet.',
      price: null,
      image: '/images/marketing/profesional.png',
      category: 'dominios',
    },
    {
      id: 'ssl',
      name: 'Certificados SSL',
      description:
        'Protege la conexión de tu sitio y genera más confianza en tus visitantes. El alcance depende del servicio contratado.',
      price: null,
      image: '/images/marketing/solucion-completa.png',
      category: 'seguridad',
    },
    {
      id: 'respaldo',
      name: 'Respaldo y continuidad',
      description:
        'Copias de seguridad y herramientas para mantener tu presencia digital disponible. Consulta qué incluye cada plan.',
      price: null,
      image: '/images/marketing/taller.png',
      category: 'seguridad',
    },
    {
      id: 'paquete-completo',
      name: 'Solución completa anual',
      description:
        'Sitio web profesional (5 páginas), dominio, hosting y 1 cuenta de correo corporativo. Precio de referencia Q1,199.00 al año. Aplican restricciones; confirma vigencia al cotizar.',
      price: 1199,
      image: '/images/marketing/solucion-completa.png',
      category: 'paquetes',
    },
  ],

  productLines: [
    {
      title: 'Hosting',
      text: 'Tu sitio web disponible y funcionando para que tus clientes puedan encontrarte. Planes pensados para emprendedores, con panel sencillo y atención cercana.',
    },
    {
      title: 'Dominios y presencia',
      text: 'Una dirección digital profesional permite que clientes actuales y potenciales encuentren información sobre el negocio, productos, servicios y formas de contacto.',
    },
    {
      title: 'Correo corporativo',
      text: 'Más confianza en cada correo que envías. Ideal para empresas, profesionales y emprendedores que quieren verse serios desde el primer mensaje.',
    },
    {
      title: 'Seguridad',
      text: 'SSL, respaldos y otras herramientas de protección según el servicio contratado. Comunicamos con claridad el alcance de cada plan, sin promesas absolutas.',
    },
  ],

  hostingHighlights: [
    'Dominio según condiciones vigentes*',
    'Certificado SSL incluido',
    'Copias de seguridad diarias',
    'Panel de control fácil de usar',
    'Soporte técnico en Guatemala',
  ],

  gallery: [
    {
      src: '/images/marketing/taller.png',
      alt: 'Presencia digital para talleres y negocios de servicios',
      category: 'Emprendedores',
    },
    {
      src: '/images/marketing/restaurante.png',
      alt: 'Presencia digital para restaurantes y cafeterías',
      category: 'Emprendedores',
    },
    {
      src: '/images/marketing/panaderia.png',
      alt: 'Presencia digital para panaderías y comercios locales',
      category: 'Emprendedores',
    },
    {
      src: '/images/marketing/belleza.png',
      alt: 'Presencia digital para negocios de belleza',
      category: 'Emprendedores',
    },
    {
      src: '/images/marketing/profesional.png',
      alt: 'Presencia digital para profesionales independientes',
      category: 'Profesionales',
    },
    {
      src: '/images/marketing/hosting-usa.png',
      alt: 'Hosting y servidores para tu negocio en Guatemala',
      category: 'Hosting',
    },
    {
      src: '/images/marketing/solucion-completa.png',
      alt: 'Solución completa de sitio web, hosting y correo',
      category: 'Hosting',
    },
    {
      src: '/images/marketing/emprende-hoy.png',
      alt: 'Emprende hoy con página web y correo profesional',
      category: 'Hosting',
    },
  ],

  galleryCategories: ['Todas', 'Hosting', 'Emprendedores', 'Profesionales'],

  events: {
    heroTitle: 'Servicios digitales',
    heroSubtitle:
      'Además del hosting, podemos acompañarte con sitios web, software, seguridad y soporte cuando tu negocio lo necesita.',
    intro:
      'Estos servicios son complementarios al enfoque principal de NOVAHost: hosting y presencia digital. El objetivo es crecer contigo, no convertirnos en un catálogo técnico.',
    types: [
      {
        id: 'sitios',
        title: 'Desarrollo y diseño de sitios web',
        text: 'Sitios profesionales, claros y pensados para que tus clientes te encuentren. Ideal para emprendedores que quieren verse serios desde el primer clic.',
        image: '/images/marketing/solucion-completa.png',
      },
      {
        id: 'saas',
        title: 'Aplicaciones web y plataformas',
        text: 'Soluciones digitales, automatización e integración de sistemas cuando tu operación ya necesita más que una página informativa.',
        image: '/images/marketing/profesional.png',
      },
      {
        id: 'seguridad',
        title: 'Seguridad y continuidad',
        text: 'Herramientas orientadas a mantener sitios y servicios digitales protegidos y disponibles, según el alcance de cada contrato.',
        image: '/images/marketing/hosting-usa.png',
      },
      {
        id: 'soporte',
        title: 'Soporte y consultoría',
        text: 'Orientación tecnológica, administración de infraestructura, respaldo y capacitación, explicados en lenguaje sencillo.',
        image: '/images/marketing/taller.png',
      },
    ],
    organizeTitle: 'También podemos ayudarte con',
    features: [
      {
        icon: 'bi-cart3',
        title: 'Comercio electrónico',
        text: 'Lleva tus productos a Internet y recibe pedidos de forma profesional.',
      },
      {
        icon: 'bi-cloud',
        title: 'Soluciones en la nube',
        text: 'Herramientas y servicios para trabajar con más orden y movilidad.',
      },
      {
        icon: 'bi-cpu',
        title: 'Software y licencias',
        text: 'Comercializamos o revendemos licencias según autorizaciones aplicables: productividad, seguridad, colaboración y software empresarial.',
      },
      {
        icon: 'bi-robot',
        title: 'Inteligencia artificial aplicada',
        text: 'Apoyo para incorporar herramientas de IA a procesos de negocio, cuando realmente aportan valor.',
      },
      {
        icon: 'bi-hdd-network',
        title: 'Infraestructura para empresas',
        text: 'Equipos, redes, videovigilancia y conectividad como complemento, adaptados a cada negocio.',
      },
    ],
    gallery: [
      {
        src: '/images/marketing/solucion-completa.png',
        alt: 'Sitio web profesional en laptop y celular',
      },
      {
        src: '/images/marketing/hosting-usa.png',
        alt: 'Infraestructura de hosting',
      },
      {
        src: '/images/marketing/emprende-hoy.png',
        alt: 'Emprendedora trabajando en su marca',
      },
    ],
    ctaTitle: 'Cuéntanos qué necesita tu negocio',
    ctaText:
      'Empezamos por hosting y presencia digital. Si requieres algo más, lo evaluamos juntos.',
  },

  why: {
    title: 'Por qué elegir NOVAHost',
    intro:
      'Queremos ser aliado tecnológico, no solamente proveedor. Priorizamos hosting y presencia digital, con atención humana y precios accesibles.',
    reasons: [
      {
        icon: 'bi-heart',
        title: 'Enfoque en el cliente',
        text: 'Entendemos la necesidad antes de proponer una solución.',
      },
      {
        icon: 'bi-tag',
        title: 'Servicios accesibles',
        text: 'Acercamos tecnología profesional a emprendedores y pequeñas empresas.',
      },
      {
        icon: 'bi-translate',
        title: 'Atención en español',
        text: 'Explicamos las soluciones de manera sencilla.',
      },
      {
        icon: 'bi-layers',
        title: 'Soluciones integrales',
        text: 'Podemos comenzar con hosting y crecer junto al cliente.',
      },
      {
        icon: 'bi-gear-wide-connected',
        title: 'Experiencia tecnológica',
        text: 'Experiencia en sistemas, infraestructura, software y soluciones empresariales.',
      },
      {
        icon: 'bi-infinity',
        title: 'Relación de largo plazo',
        text: 'Acompañamos la operación de tu presencia digital, no solo la contratación inicial.',
      },
    ],
    audienceTitle: 'A quién ayudamos',
    audience: [
      'Emprendedores',
      'Pequeñas empresas',
      'Profesionales independientes',
      'Restaurantes y cafeterías',
      'Talleres y negocios de servicios',
      'Tiendas y comercios',
      'Empresas familiares',
      'Negocios locales',
      'Empresas que desean renovar su presencia digital',
      'Personas que desean iniciar un negocio',
    ],
  },

  contact: {
    intro:
      'Estamos listos para orientarte sobre hosting, correo corporativo, dominios y presencia digital.',
    formTitle: 'Escríbenos',
    formText:
      'Completa el formulario. Si el envío por correo no está disponible, te ofrecemos continuar por WhatsApp.',
    mapTitle: 'Atención en Guatemala',
    mapText:
      'Atendemos por teléfono, WhatsApp y correo. Escríbenos y te respondemos con claridad.',
  },
};

export default siteConfig;
