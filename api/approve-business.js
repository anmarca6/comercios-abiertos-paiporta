// API endpoint para aprobar negocios
// Esta función se ejecutaría en un entorno serverless (Vercel, Netlify, etc.)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { id, token, action } = req.body;

    try {
        // Verificar token
        if (!verifyToken(id, token)) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        if (action === 'approve') {
            // Aprobar negocio
            const result = await approveBusiness(id);
            return res.status(200).json({ 
                success: true, 
                message: 'Negocio aprobado correctamente',
                business: result 
            });
        } else if (action === 'reject') {
            // Rechazar negocio
            await rejectBusiness(id);
            return res.status(200).json({ 
                success: true, 
                message: 'Negocio rechazado' 
            });
        } else {
            return res.status(400).json({ error: 'Acción no válida' });
        }

    } catch (error) {
        console.error('Error en aprobación:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// Verificar token de aprobación
function verifyToken(businessId, token) {
    const timestamp = Date.now();
    const secret = 'paiporta_approval_2024';
    const data = `${businessId}_${timestamp}_${secret}`;
    
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    const expectedToken = Math.abs(hash).toString(36);
    
    return token === expectedToken;
}

// Aprobar negocio
async function approveBusiness(businessId) {
    // En producción, aquí actualizarías la base de datos
    // Por ahora, simulamos la aprobación
    console.log(`Aprobando negocio ${businessId}`);
    
    // Aquí podrías:
    // 1. Leer el archivo comercios.json
    // 2. Agregar el nuevo negocio
    // 3. Guardar el archivo actualizado
    // 4. Enviar notificación por email
    
    return {
        id: businessId,
        status: 'approved',
        timestamp: new Date().toISOString()
    };
}

// Rechazar negocio
async function rejectBusiness(businessId) {
    console.log(`Rechazando negocio ${businessId}`);
    
    // Aquí podrías:
    // 1. Eliminar datos temporales
    // 2. Enviar notificación por email
    // 3. Registrar el rechazo
    
    return {
        id: businessId,
        status: 'rejected',
        timestamp: new Date().toISOString()
    };
} 