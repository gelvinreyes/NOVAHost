/**
 * Mini asistente NOVAHost — fase 1 (sin IA).
 * Respuestas locales. Más adelante getAssistantReply puede consultar una API.
 */

export const ASSISTANT_WHATSAPP_MESSAGE =
  'Hola, quiero obtener información sobre una página web para mi negocio.';

export const ASSISTANT_CONFIG = {
  title: 'Asistente NOVAHost',
  status: 'En línea',
  welcome: 'Hola, soy el asistente virtual de NOVAHost. ¿En qué puedo ayudarte?',
  demosPath: '/#demos',
};

export const ASSISTANT_MENU_ID = 'menu';

export const ASSISTANT_MENU = [
  { id: 'servicios', label: 'Ver servicios' },
  { id: 'precio', label: 'Ver precio inicial' },
  { id: 'demos', label: 'Conocer los demos' },
  { id: 'como-funciona', label: '¿Cómo funciona?' },
  { id: 'whatsapp', label: 'Contactar por WhatsApp' },
];

const backToMenu = { type: 'topic', id: ASSISTANT_MENU_ID, label: 'Volver al menú' };
const whatsappAction = { type: 'whatsapp', label: 'Contactar por WhatsApp' };
const demosAction = { type: 'demos', label: 'Ver demos' };

const TOPICS = {
  [ASSISTANT_MENU_ID]: {
    text: ASSISTANT_CONFIG.welcome,
    actions: ASSISTANT_MENU.map((item) => ({ type: 'topic', id: item.id, label: item.label })),
  },
  servicios: {
    text:
      'En NOVAHost te ayudamos a tener presencia profesional en internet con una página web para tu negocio, alojamiento y opciones de correo profesional.',
    actions: [whatsappAction, backToMenu],
  },
  precio: {
    text: 'Tu página web profesional desde Q1,199 al año.',
    actions: [whatsappAction, backToMenu],
  },
  demos: {
    text: 'Puedes conocer ejemplos de sitios creados para diferentes tipos de negocios.',
    actions: [demosAction, backToMenu],
  },
  'como-funciona': {
    text: 'Cuéntanos sobre tu negocio y nosotros te ayudamos a crear una presencia profesional en internet.',
    steps: [
      'Conocemos tu negocio.',
      'Preparamos tu sitio web.',
      'Revisamos los detalles contigo.',
      'Tu negocio queda listo para mostrarse en internet.',
    ],
    actions: [whatsappAction, backToMenu],
  },
  whatsapp: {
    text: 'Escríbenos por WhatsApp y te orientamos de forma clara y cercana.',
    actions: [whatsappAction, backToMenu],
  },
};

/** Fase 1: respuesta local. Más adelante puede consultar una API. */
export function getAssistantReply(topicId) {
  return TOPICS[topicId] ?? TOPICS[ASSISTANT_MENU_ID];
}
