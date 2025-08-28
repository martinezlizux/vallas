// Script de verificación de Google Analytics
// Ejecutar en la consola del navegador para verificar el estado

console.log('🔍 VERIFICACIÓN DE GOOGLE ANALYTICS');
console.log('=====================================');

// 1. Verificar que gtag existe
if (typeof gtag === 'function') {
    console.log('✅ gtag function está disponible');
} else {
    console.log('❌ gtag function NO está disponible');
    console.log('   Posible causa: Script de GA no se cargó');
}

// 2. Verificar dataLayer
if (window.dataLayer && Array.isArray(window.dataLayer)) {
    console.log('✅ dataLayer está inicializado');
    console.log('   Items en dataLayer:', window.dataLayer.length);
    console.log('   Contenido:', window.dataLayer);
} else {
    console.log('❌ dataLayer NO está disponible');
}

// 3. Verificar configuración del sitio
console.log('📍 Información del sitio:');
console.log('   URL:', window.location.href);
console.log('   Protocolo:', window.location.protocol);
console.log('   Host:', window.location.host);
console.log('   Cookies habilitadas:', navigator.cookieEnabled);

// 4. Verificar bloqueadores
console.log('🛡️ Verificando bloqueadores:');
console.log('   Do Not Track:', navigator.doNotTrack || 'No establecido');

// 5. Enviar evento de prueba
if (typeof gtag === 'function') {
    console.log('📊 Enviando evento de prueba...');
    gtag('event', 'console_test', {
        event_category: 'debug',
        event_label: 'manual_console_test',
        value: 1,
        debug: true
    });
    console.log('✅ Evento de prueba enviado');
    console.log('   Ve a GA4 > Tiempo real para verificar');
} else {
    console.log('❌ No se puede enviar evento de prueba');
}

// 6. Verificar red
console.log('🌐 Verificando conectividad:');
fetch('https://www.google-analytics.com/g/collect?v=2&tid=G-WV9XE708CZ&cid=test&en=page_view')
    .then(response => {
        if (response.ok) {
            console.log('✅ Conectividad con Google Analytics OK');
        } else {
            console.log('⚠️ Respuesta de GA:', response.status);
        }
    })
    .catch(error => {
        console.log('❌ Error de conectividad:', error);
        console.log('   Posible causa: Bloqueador de anuncios o firewall');
    });

// 7. Instrucciones
console.log('');
console.log('📋 PRÓXIMOS PASOS:');
console.log('1. Si ves ❌, revisa que el script de GA se cargue correctamente');
console.log('2. Si estás en localhost, prueba en un dominio real');
console.log('3. Desactiva bloqueadores de anuncios temporalmente');
console.log('4. Ve a GA4 > Tiempo real para ver eventos en vivo');
console.log('5. Usa la página diagnostico-analytics.html para más pruebas');

// 8. Función de prueba rápida
window.testGA = function() {
    if (typeof gtag === 'function') {
        gtag('event', 'quick_test', {
            event_category: 'manual_test',
            event_label: 'console_quick_test',
            value: Math.floor(Math.random() * 100)
        });
        console.log('🚀 Evento rápido enviado - Revisa GA4 Tiempo Real');
    } else {
        console.log('❌ gtag no disponible');
    }
};

console.log('');
console.log('💡 TIP: Ejecuta testGA() para enviar un evento de prueba rápido');
console.log('=====================================');