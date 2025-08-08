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
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .business-info { background: #f8f9fa; border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0; }
        .field { margin: 10px 0; }
        .field strong { color: #1e40af; }
        .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 0.9em; color: #64748b; }
        .timestamp { font-size: 0.8em; color: #6b7280; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏪 Nuevo negocio registrado en Paiporta</h1>
        <p>Se ha registrado un nuevo comercio en el directorio</p>
    </div>
    
    <div class="content">
        <div class="business-info">
            <h2>{{business_name}}</h2>
            
            <div class="field">
                <strong>📋 Categoría:</strong> {{business_type}}
            </div>
            
            <div class="field">
                <strong>📍 Dirección:</strong> {{business_address}}
            </div>
            
            <div class="field">
                <strong>📞 Teléfono:</strong> {{business_phone}}
            </div>
            
            <div class="field">
                <strong>🕒 Horario:</strong> {{business_hours}}
            </div>
            
            <div class="field">
                <strong>📝 Descripción:</strong> {{business_description}}
            </div>
            
            <div class="field">
                <strong>🎉 Fecha de reapertura:</strong> {{business_reopen_date}}
            </div>
            
            <div class="field">
                <strong>🗺️ Coordenadas:</strong> {{business_coordinates}}
            </div>
            
            <!-- Imagen del negocio -->
            {{#if business_image}}
            <div class="field">
                <strong>📸 Imagen del negocio:</strong>
                <div style="margin-top: 10px;">
                    <img src="{{business_image}}" alt="Imagen del negocio" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e5e7eb;">
                </div>
            </div>
            {{else}}
            <div class="field">
                <strong>📸 Imagen incluida:</strong> No se ha proporcionado imagen
            </div>
            {{/if}}
            
            <!-- Enlaces de aprobación -->
            <div class="field" style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <strong style="color: #1e40af;">🔐 Acciones de Administración:</strong>
                <div style="margin-top: 15px;">
                    <p style="margin-bottom: 10px; color: #374151;">Para aprobar o rechazar este negocio, utiliza los siguientes enlaces:</p>
                    
                    <div style="margin-bottom: 15px;">
                        <a href="https://comercios-paiporta.es/approve-business.html?id={{approval_id}}&token={{approval_token}}" 
                           style="display: inline-block; padding: 12px 24px; background: #10b981; color: white; text-decoration: none; border-radius: 6px; margin-right: 10px;">
                            ✅ Aprobar Negocio
                        </a>
                        
                        <a href="https://comercios-paiporta.es/approve-business.html?id={{approval_id}}&token={{approval_token}}&action=reject" 
                           style="display: inline-block; padding: 12px 24px; background: #ef4444; color: white; text-decoration: none; border-radius: 6px;">
                            ❌ Rechazar Negocio
                        </a>
                    </div>
                    
                    <p style="font-size: 0.9rem; color: #6b7280; margin-top: 15px;">
                        <strong>Nota:</strong> Estos enlaces son seguros y únicos para esta solicitud. 
                        Una vez procesada, el negocio aparecerá automáticamente en el directorio público.
                    </p>
                </div>
            </div>
        </div>
        
        <p><em>Este negocio ha sido registrado a través del formulario web y está pendiente de validación antes de aparecer en el directorio público.</em></p>
        
        <div class="timestamp">
            <strong>📅 Registrado el:</strong> {{timestamp}}
        </div>
    </div>
    
    <div class="footer">
        <p>Comercios Paiporta - Apoya el comercio local</p>
        <p>Solo el pueblo salva al pueblo</p>
    </div>
</body>
</html>
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

## ✅ Mejoras implementadas

### Proceso mejorado de envío de correos:
1. **EmailJS como método principal**: El formulario intenta enviar el correo usando EmailJS
2. **Manejo de errores robusto**: Si EmailJS falla, se muestra un mensaje de éxito con información de contacto manual
3. **Sin dependencia del cliente de correo**: Se eliminó la función que abría el cliente de correo electrónico
4. **Mejor experiencia de usuario**: Mensajes claros sobre el estado del envío

### Plantilla de correo mejorada:
- Diseño HTML profesional con estilos CSS
- Información organizada y fácil de leer
- Incluye timestamp y estado de la imagen
- Formato consistente con la identidad visual del sitio

### Validación mejorada:
- Procesamiento asíncrono de imágenes
- Mejor manejo de errores
- Mensajes de error más descriptivos 