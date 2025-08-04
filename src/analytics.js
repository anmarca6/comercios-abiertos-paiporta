import { inject } from '@vercel/analytics';

// Inicializar Vercel Analytics
inject();

// Función para trackear eventos personalizados
export function trackEvent(eventName, properties = {}) {
  if (window.va) {
    window.va.track(eventName, properties);
  }
}

// Función para trackear navegación entre páginas
export function trackPageView(pageName) {
  trackEvent('page_view', { page: pageName });
}

// Función para trackear interacciones con el formulario
export function trackFormInteraction(action, details = {}) {
  trackEvent('form_interaction', { action, ...details });
}

// Función para trackear búsquedas
export function trackSearch(query, resultsCount) {
  trackEvent('search', { query, results_count: resultsCount });
}

// Función para trackear clics en enlaces de comercios
export function trackBusinessClick(businessId, businessName) {
  trackEvent('business_click', { business_id: businessId, business_name: businessName });
} 