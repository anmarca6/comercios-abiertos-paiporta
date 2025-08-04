# 📧 Configuración de EmailJS

## 🔧 Pasos para configurar el envío de correos electrónicos

### 1. Crear cuenta en EmailJS
1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Regístrate con tu correo electrónico
3. Confirma tu cuenta

### 2. Configurar el servicio de correo
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de correo (Gmail, Outlook, etc.)
4. Conecta tu cuenta de correo
5. Guarda el **Service ID** (lo necesitarás después)

### 3. Crear plantilla de correo
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa esta plantilla como base:

```html
<h2>Nuevo negocio registrado en Paiporta</h2>

<p><strong>Nombre del negocio:</strong> {{business_name}}</p>
<p><strong>Categoría:</strong> {{business_type}}</p>
<p><strong>Dirección:</strong> {{business_address}}</p>
<p><strong>Teléfono:</strong> {{business_phone}}</p>
<p><strong>Horario:</strong> {{business_hours}}</p>
<p><strong>Descripción:</strong> {{business_description}}</p>
<p><strong>Fecha de reapertura:</strong> {{business_reopen_date}}</p>
<p><strong>Coordenadas:</strong> {{business_coordinates}}</p>

<p><em>Este negocio ha sido registrado y está pendiente de validación.</em></p>
```

4. Guarda la plantilla y copia el **Template ID**

### 4. Obtener User ID
1. Ve a "Account" en el dashboard
2. Copia tu **User ID**

### 5. Actualizar el código
En el archivo `agregar-local.html`, reemplaza los siguientes valores:

```javascript
// Línea 1: Reemplaza "YOUR_USER_ID" con tu User ID
emailjs.init("TU_USER_ID_AQUI");

// Línea 2: Reemplaza "YOUR_SERVICE_ID" con tu Service ID
return emailjs.send("TU_SERVICE_ID_AQUI", "TU_TEMPLATE_ID_AQUI", templateParams);
```

### 6. Ejemplo de configuración completa
```javascript
// Inicializar EmailJS
function initEmailJS() {
    emailjs.init("user_abc123def456"); // Tu User ID
}

// Enviar correo electrónico
function sendEmail(businessData) {
    const templateParams = {
        to_name: "Administrador",
        from_name: businessData.nombre,
        business_name: businessData.nombre,
        business_type: businessData.tipo,
        business_address: businessData.direccion,
        business_phone: businessData.telefono,
        business_hours: businessData.horario,
        business_description: businessData.descripcion,
        business_reopen_date: businessData.fechaReapertura,
        business_coordinates: `${businessData.lat}, ${businessData.lng}`,
        message: `Nuevo negocio registrado: ${businessData.nombre}`
    };

    return emailjs.send("service_xyz789", "template_abc123", templateParams);
}
```

## 🔒 Seguridad
- Los IDs de EmailJS son seguros para usar en el frontend
- No contienen información sensible
- Pueden ser visibles en el código fuente sin problemas

## 📱 Pruebas
1. Configura EmailJS según los pasos anteriores
2. Llena el formulario con datos de prueba
3. Envía el formulario
4. Verifica que recibes el correo electrónico

## 🆘 Solución de problemas
- **Error "EmailJS not defined"**: Verifica que el script de EmailJS esté cargado
- **Error de autenticación**: Verifica que el Service ID sea correcto
- **No se reciben correos**: Verifica la configuración del servicio de correo
- **Error de plantilla**: Verifica que el Template ID sea correcto 