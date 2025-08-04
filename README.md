# 🏪 Comercios Abiertos en Paiporta

**Aplicación web para mostrar los comercios que van reabriendo en Paiporta tras la DANA del 29 de octubre de 2024.**

## 🚀 Despliegue en Producción

### Archivos del proyecto (listos para producción):
- `index.html` - Aplicación principal
- `data/comercios.json` - Datos de los comercios
- `assets/img/` - Imágenes de los comercios
- `README.md` - Esta documentación

### 📋 Requisitos
- Servidor web (Apache, Nginx, etc.) o hosting estático
- **No requiere Node.js, PHP ni bases de datos**

### 🌐 Opciones de despliegue:

#### **1. GitHub Pages (Gratis)**
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona "Deploy from branch" > "main"
4. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo`

#### **2. Netlify (Gratis)**
1. Arrastra la carpeta del proyecto a [netlify.com](https://netlify.com)
2. Tu sitio estará listo inmediatamente
3. Obtén un dominio personalizado gratis: `https://nombre-elegido.netlify.app`

#### **3. Vercel (Gratis)**
1. Sube los archivos a [vercel.com](https://vercel.com)
2. Despliegue automático
3. Dominio personalizado: `https://nombre-elegido.vercel.app`

#### **4. Servidor tradicional**
1. Sube los archivos via FTP/SFTP
2. Coloca `index.html` en la carpeta raíz del dominio
3. Asegúrate de que el servidor puede servir archivos HTML estáticos

## ✨ Características implementadas

### 🎯 **Funcionalidades principales:**
- ✅ **Búsqueda inteligente** por nombre, dirección o categoría
- ✅ **Filtros por categoría** con colores distintivos
- ✅ **Tarjetas modernas** con imágenes y etiquetas de categoría
- ✅ **Modal integrado** para agregar nuevos comercios
- ✅ **Almacenamiento local** de comercios pendientes
- ✅ **Navegación con Google Maps** desde las direcciones
- ✅ **Diseño responsive** optimizado para móviles
- ✅ **Interfaz limpia y moderna** sin elementos intrusivos

### 📱 **Responsive Design:**
- Optimizado para móviles, tablets y escritorio
- Interfaz moderna y accesible
- Carga rápida sin dependencias externas
- Efectos hover y transiciones suaves

### 🛠️ **Tecnología:**
- **HTML5 + CSS3 + JavaScript puro**
- **Sin frameworks** - máximo rendimiento
- **Sin dependencias externas** - total autonomía
- **Google Fonts** para tipografía (CDN)
- **Vercel Analytics** para monitorización de visitas

## 📊 Analytics y Monitorización

### **Vercel Analytics:**
- ✅ **Monitorización automática** de visitas y páginas vistas
- ✅ **Eventos personalizados** para tracking de interacciones
- ✅ **Métricas en tiempo real** sin configuración adicional
- ✅ **Respeto por la privacidad** - sin cookies intrusivas

### **Eventos trackeados:**
- Navegación entre páginas
- Búsquedas realizadas
- Clics en comercios
- Interacciones con el formulario
- Filtros aplicados

### **Configuración:**
El analytics se activa automáticamente cuando el proyecto se despliega en Vercel. Para ver las métricas:
1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a la pestaña "Analytics"
4. Visualiza visitas, páginas más populares y eventos

## 🔧 Personalización

### **Añadir comercios:**
Edita el archivo `data/comercios.json` siguiendo este formato:

```json
{
    "id": 6,
    "nombre": "Nombre del comercio",
    "tipo": "alimentacion",
    "direccion": "Dirección completa",
    "telefono": "+34 961 234 567",
    "descripcion": "Descripción del negocio",
    "horario": "L-V 9:00-18:00",
    "fechaReapertura": "2025-03-15",
    "lat": 39.4267,
    "lng": -0.4144
}
```

### **Categorías disponibles:**
- `alimentacion` - Alimentación
- `bares` - Bares
- `restauracion` - Restauración
- `servicios` - Servicios
- `animales` - Animales
- `agrupaciones` - Agrupaciones comerciales
- `hosteleria` - Hostelería y turismo
- `ocio` - Ocio, deporte y aficiones

### **Añadir imágenes:**
1. Coloca las imágenes en `assets/img/`
2. Nombra las imágenes con el ID del comercio: `1.jpg`, `2.png`, etc.
3. El sistema las cargará automáticamente

### **Personalizar colores:**
Modifica las variables CSS en `index.html`:

```css
:root {
    --primary: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    --background: #fefefe;
    --surface: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
}
```

## 📊 Gestión de comercios

Los comercios pueden enviar su información mediante el modal integrado. Los datos se almacenan en localStorage del navegador.

### Para conectar con un backend:
Modifica la función `handleAddBusinessForm()` en `index.html`:

```javascript
// Reemplazar el almacenamiento local por una llamada a tu API:
fetch('/api/comercios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(businessData)
})
.then(response => response.json())
.then(data => {
    alert('¡Gracias! Tu información ha sido enviada.');
});
```

## 🔒 Seguridad y Consideraciones

- ✅ **Sin vulnerabilidades** - código estático sin backend
- ✅ **Sin claves sensibles** - eliminadas todas las configuraciones de EmailJS
- ✅ **HTTPS recomendado** para producción
- ✅ **Validación de formularios** en cliente
- ⚠️ **Moderación manual** recomendada para nuevos comercios

## 📈 Analytics (Opcional)

Para añadir Google Analytics, inserta antes de `</head>` en `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Características de diseño

### **Tarjetas modernas:**
- Bordes redondeados y sombras elegantes
- Efectos hover suaves
- Etiquetas de categoría con colores distintivos
- Imágenes con fallback automático

### **Búsqueda y filtros:**
- Campo de búsqueda prominente y centrado
- Filtros por categoría con efectos hover
- Búsqueda en tiempo real
- Sugerencias automáticas

### **Interfaz limpia:**
- Sin elementos flotantes intrusivos
- Navegación clara y accesible
- Footer unificado con mensaje de apoyo
- Transiciones suaves y profesionales

## 🆘 Soporte

Para soporte técnico o modificaciones, contacta con el desarrollador.

---

**Creado con ❤️ para ayudar a la recuperación de Paiporta**  
*"Solo el pueblo salva al pueblo"* 