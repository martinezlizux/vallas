# 📊 Configuración de Google Analytics para Motion Ads Riviera

## 🚀 Pasos para activar Google Analytics

### 1. **Crear cuenta de Google Analytics**
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Empezar a medir"
4. Configura tu cuenta:
   - **Nombre de la cuenta:** Motion Ads Riviera
   - **País:** México
   - Acepta los términos de servicio

### 2. **Crear propiedad**
1. **Nombre de la propiedad:** Motion Ads Riviera Website
2. **Zona horaria:** (GMT-06:00) Hora estándar central - México
3. **Moneda:** Peso mexicano (MXN)
4. **Categoría del sector:** Publicidad y marketing
5. **Tamaño de la empresa:** Pequeña empresa (1-10 empleados)

### 3. **Configurar flujo de datos**
1. Selecciona **"Web"**
2. **URL del sitio web:** https://www.motionadsriviera.com
3. **Nombre del flujo:** Motion Ads Riviera Website
4. Haz clic en "Crear flujo"

### 4. **Obtener tu Measurement ID**
Después de crear el flujo de datos, verás tu **Measurement ID** con formato: `G-XXXXXXXXXX`

### 5. **Reemplazar el ID en los archivos**
# 📊 Google Analytics - CONFIGURADO ✅

## ✅ **ESTADO: IMPLEMENTADO Y LISTO**

**Tu ID de Google Analytics:** `G-WV9XE708CZ`

### 🎉 **¡Google Analytics ya está funcionando!**

El código de Google Analytics ha sido implementado correctamente en:
- ✅ **index.html** - Página principal con tracking completo
- ✅ **galeria.html** - Página de galería con tracking de imágenes
- ✅ **analytics.js** - Archivo de configuración avanzada

### 📊 **Eventos que se están rastreando automáticamente:**

#### **🎯 Conversiones principales:**
1. **Solicitudes de cotización** - Cuando alguien hace clic en "Solicita tu cotización"
2. **Contacto WhatsApp** - Clics en el botón flotante de WhatsApp
3. **Navegación del menú** - Clics en Nosotros, Galería, Contactanos
4. **Visualización de imágenes** - Cuando ven imágenes en la galería

#### **📈 Datos que se capturan:**
- **Ubicación de visitantes** (Cancún, Playa del Carmen, etc.)
- **Dispositivos utilizados** (móvil, desktop, tablet)
- **Páginas más visitadas**
- **Tiempo en el sitio**
- **Rutas de navegación**
- **Servicios de mayor interés**
```javascript
// Cambiar esto:
gtag('config', 'G-XXXXXXXXXX', {

// Por esto (con tu ID real):
gtag('config', 'G-1234567890', {
```

## 📈 Eventos configurados automáticamente

### **Eventos principales:**
1. **`solicitar_cotizacion`** - Cuando alguien hace clic en "Solicita tu cotización"
2. **`whatsapp_click`** - Cuando alguien hace clic en el botón de WhatsApp
3. **`page_view`** - Navegación entre páginas
4. **`image_view`** - Visualización de imágenes en la galería

### **Parámetros personalizados:**
- `servicio_interes` - Tipo de servicio solicitado
- `ubicacion_cliente` - Ubicación del cliente (Cancún/Playa del Carmen)
- `pagina_galeria` - Seguimiento específico de la galería

## 🎯 Configuraciones adicionales recomendadas

### **En Google Analytics:**
1. **Objetivos de conversión:**
   - Solicitudes de cotización
   - Clics en WhatsApp
   - Tiempo en página > 2 minutos

2. **Audiencias personalizadas:**
   - Visitantes de Cancún
   - Visitantes de Playa del Carmen
   - Interesados en vallas móviles

3. **Informes personalizados:**
   - Rendimiento por ubicación
   - Conversiones por servicio
   - Análisis de galería

### **Conectar con Google Ads (opcional):**
1. Ve a Admin > Vinculación de productos > Google Ads
2. Vincula tu cuenta de Google Ads
3. Importa conversiones a Google Ads

### **Conectar con Google Search Console:**
1. Ve a Admin > Vinculación de productos > Search Console
2. Vincula tu propiedad de Search Console
3. Obtén datos de búsqueda orgánica

## 🔍 Verificar la instalación

### **Método 1: Google Analytics Debugger**
1. Instala la extensión "Google Analytics Debugger" en Chrome
2. Activa la extensión
3. Visita tu sitio web
4. Abre la consola del navegador (F12)
5. Verifica que aparezcan los eventos de GA

### **Método 2: Tiempo real en GA**
1. Ve a tu cuenta de Google Analytics
2. Haz clic en "Tiempo real" > "Visión general"
3. Visita tu sitio web en otra pestaña
4. Deberías ver tu visita en tiempo real

### **Método 3: Google Tag Assistant**
1. Instala "Google Tag Assistant" en Chrome
2. Visita tu sitio web
3. Haz clic en la extensión
4. Verifica que Google Analytics esté funcionando correctamente

## 📊 Métricas importantes a monitorear

### **Métricas de negocio:**
- Solicitudes de cotización por día/semana/mes
- Tasa de conversión de visitantes a leads
- Páginas más visitadas
- Tiempo promedio en el sitio
- Tasa de rebote

### **Métricas de ubicación:**
- Visitantes de Cancún vs Playa del Carmen
- Dispositivos más utilizados (móvil/desktop)
- Horarios de mayor tráfico

### **Métricas de contenido:**
- Imágenes más vistas en la galería
- Servicios más consultados
- Rutas de navegación más comunes

## 🚨 Importante

1. **Privacidad:** El código ya incluye `anonymize_ip: true` para cumplir con GDPR
2. **Rendimiento:** Los scripts se cargan de forma asíncrona para no afectar la velocidad
3. **Backup:** Guarda tu Measurement ID en un lugar seguro

## 📞 Soporte

Si necesitas ayuda con la configuración:
- [Centro de ayuda de Google Analytics](https://support.google.com/analytics)
- [Academia de Google Analytics](https://analytics.google.com/analytics/academy/)

---

**✅ Una vez configurado, tendrás datos completos sobre:**
- Visitantes y su comportamiento
- Conversiones y leads generados
- Rendimiento de campañas
- Optimización de contenido
- ROI de marketing digital