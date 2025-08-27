
// Configuración de Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Reemplaza 'G-XXXXXXXXXX' con tu ID real de GA4
gtag('config', 'G-XXXXXXXXXX', {
    page_title: 'Motion Ads Riviera - Vallas Móviles Cancún',
    page_location: window.location.href,
    send_page_view: true,
    custom_map: {
        'custom_parameter_1': 'servicio_interes',
        'custom_parameter_2': 'ubicacion_cliente'
    }
});

// Función para rastrear solicitudes de cotización
function trackCotizacion(servicio = 'general') {
    gtag('event', 'solicitar_cotizacion', {
        event_category: 'engagement',
        event_label: servicio,
        value: 1,
        custom_parameter_1: servicio
    });
    
    // También enviar a Facebook Pixel si lo tienes
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Cotización ' + servicio
        });
    }
}

// Función para rastrear clics en WhatsApp
function trackWhatsApp() {
    gtag('event', 'contacto_whatsapp', {
        event_category: 'contact',
        event_label: 'whatsapp_float',
        value: 1
    });
}

// Función para rastrear visualización de galería
function trackGaleria() {
    gtag('event', 'ver_galeria', {
        event_category: 'engagement',
        event_label: 'galeria_campanas',
        value: 1
    });
}

// Función para rastrear scroll profundo
function trackScrollDepth() {
    let scrolled = false;
    window.addEventListener('scroll', function() {
        if (!scrolled && window.scrollY > document.body.scrollHeight * 0.75) {
            scrolled = true;
            gtag('event', 'scroll_profundo', {
                event_category: 'engagement',
                event_label: '75_percent',
                value: 75
            });
        }
    });
}

// Función para rastrear tiempo en página
function trackTimeOnPage() {
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        let timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (timeSpent > 30) { // Solo si estuvo más de 30 segundos
            gtag('event', 'tiempo_en_pagina', {
                event_category: 'engagement',
                event_label: 'tiempo_segundos',
                value: timeSpent
            });
        }
    });
}

// Inicializar tracking automático
document.addEventListener('DOMContentLoaded', function() {
    trackScrollDepth();
    trackTimeOnPage();
    
    // Agregar event listeners a elementos específicos
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', trackWhatsApp);
    }
    
    const cotizacionButtons = document.querySelectorAll('[data-bs-target="#miModal"]');
    cotizacionButtons.forEach(button => {
        button.addEventListener('click', () => trackCotizacion('vallas_moviles'));
    });
    
    const galeriaLinks = document.querySelectorAll('a[href*="galeria"]');
    galeriaLinks.forEach(link => {
        link.addEventListener('click', trackGaleria);
    });
});