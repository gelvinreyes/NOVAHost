/**
 * Configuración del widget de chat NOVAHost.
 * La API Key de OpenAI vive solo en el backend (AgenteConIA).
 */

export const ASSISTANT_WHATSAPP_MESSAGE =
  'Hola, quiero obtener información sobre una página web para mi negocio.';

export const ASSISTANT_CONFIG = {
  title: 'Asistente NOVAHost',
  status: 'En línea',
  welcome:
    'Hola, soy el asistente virtual de NOVAHost. Pregúntame por el paquete web, correo profesional o un agente de IA.',
};

export function getAgentChatUrl() {
  const configured = import.meta.env.VITE_AGENT_API_URL;
  if (typeof configured === 'string' && configured.trim()) {
    return configured.trim();
  }
  return '/api/chat';
}
