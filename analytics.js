
// Configuración de Google Analytics 4 mejorada para SEO
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

 // Google Analytics configurado para Motion Ads Riviera
gtag('config', 'G-WV9XE708CZ', {
    page_title: 'Motion Ads Riviera - Vallas Móviles Cancún',
    page_location: window.location.href,
    send_page_view: true,
    custom_map: {
        'custom_parameter_1': 'servicio_interes',
        'custom_parameter_2': 'ubicacion_cliente'
    },
    // Configuraciones adicionales para SEO
    anonymize_ip: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: true
});

// Enhanced ecommerce tracking para servicios
gtag('config', 'G-WV9XE708CZ', {
    custom_map: {
        'dimension1': 'tipo_servicio',
        'dimension2': 'ubicacion_servicio',
        'dimension3': 'fuente_trafico'
    }
});

// Función para rastrear solicitudes de cotización
function trackCotizacion(servicio = 'general') {
    gtag('event', 'solicitar_cotizacion', {
        event_category: 'engagement',
        event_label: servicio,
        value: 1,
        custom_parameter_1: servicio,
        tipo_servicio: servicio,
        ubicacion_servicio: 'cancun_playa_del_carmen'
    });

    // También enviar a Facebook Pixel si lo tienes
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Cotización ' + servicio,
            content_category: 'Publicidad Vallas Móviles'
        });
    }

    // Tracking para Google Ads
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'MXN'
        });
    }
}

// Función para rastrear clics en WhatsApp
function trackWhatsApp() {
    gtag('event', 'contacto_whatsapp', {
        event_category: 'contact',
        event_label: 'whatsapp_float',
        value: 1,
        method: 'whatsapp'
    });

    // Tracking adicional para conversiones
    gtag('event', 'generate_lead', {
        currency: 'MXN',
        value: 1.0
    });
}

// Función para rastrear visualización de galería
function trackGaleria() {
    gtag('event', 'ver_galeria', {
        event_category: 'engagement',
        event_label: 'galeria_campanas',
        value: 1,
        content_type: 'gallery'
    });
}

// Función para rastrear tiempo en página (importante para SEO)
function trackTimeOnPage() {
    let startTime = Date.now();

    window.addEventListener('beforeunload', function() {
        let timeSpent = Math.round((Date.now() - startTime) / 1000);
        gtag('event', 'timing_complete', {
            name: 'tiempo_en_pagina',
            value: timeSpent
        });
    });
}

// Función para rastrear scroll depth (importante para engagement)
function trackScrollDepth() {
    let maxScroll = 0;
    let ticking = false;

    function updateScrollDepth() {
        let scrollTop = window.pageYOffset;
        let docHeight = document.body.scrollHeight - window.innerHeight;
        let scrollPercent = Math.round(scrollTop / docHeight * 100);

        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;

            // Enviar eventos en hitos importantes
            if (maxScroll >= 25 && maxScroll < 50) {
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: '25_percent',
                    value: 25
                });
            } else if (maxScroll >= 50 && maxScroll < 75) {
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: '50_percent',
                    value: 50
                });
            } else if (maxScroll >= 75 && maxScroll < 90) {
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: '75_percent',
                    value: 75
                });
            } else if (maxScroll >= 90) {
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: '90_percent',
                    value: 90
                });
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollDepth);
            ticking = true;
        }
    });
}

// Función para rastrear errores JavaScript (importante para Core Web Vitals)
function trackJSErrors() {
    window.addEventListener('error', function(e) {
        gtag('event', 'exception', {
            description: e.message,
            fatal: false,
            error_file: e.filename,
            error_line: e.lineno
        });
    });
}

// Función para rastrear Core Web Vitals
function trackWebVitals() {
    // Requiere la librería web-vitals
    if (typeof webVitals !== 'undefined') {
        webVitals.getCLS(function(metric) {
            gtag('event', metric.name, {
                event_category: 'Web Vitals',
                event_label: metric.id,
                value: Math.round(metric.value * 1000),
                non_interaction: true
            });
        });

        webVitals.getFID(function(metric) {
            gtag('event', metric.name, {
                event_category: 'Web Vitals',
                event_label: metric.id,
                value: Math.round(metric.value),
                non_interaction: true
            });
        });

        webVitals.getLCP(function(metric) {
            gtag('event', metric.name, {
                event_category: 'Web Vitals',
                event_label: metric.id,
                value: Math.round(metric.value),
                non_interaction: true
            });
        });
    }
}

// Inicializar tracking cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    trackTimeOnPage();
    trackScrollDepth();
    trackJSErrors();
    trackWebVitals();

    // Añadir event listeners a elementos importantes
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', trackWhatsApp);
    }

    const cotizacionButtons = document.querySelectorAll('[data-bs-target="#miModal"]');
    cotizacionButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackCotizacion('vallas_moviles');
        });
    });

    const galeriaLinks = document.querySelectorAll('a[href*="galeria"]');
    galeriaLinks.forEach(link => {
        link.addEventListener('click', trackGaleria);
    });
});

// Configuración de Facebook Pixel (si se usa)
if (typeof fbq !== 'undefined') {
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');

    // Tracking de eventos personalizados
    fbq('trackCustom', 'VisitMotionAds', {
        content_name: 'Motion Ads Riviera',
        content_category: 'Publicidad Vallas Móviles'
    });
}