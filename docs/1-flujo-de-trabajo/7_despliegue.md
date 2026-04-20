---
sidebar_position: 7
---

# Publicación y Despliegue

Una vez que las funcionalidades del mapa web han sido desarrolladas, validadas y aprobadas, llega el momento de publicar el proyecto para que esté disponible para los usuarios finales. Este capítulo describe el proceso de despliegue y las consideraciones necesarias para poner el mapa en producción.

## 1. Preparación para publicación

Antes de desplegar el mapa web, es necesario realizar una serie de verificaciones finales.

### Validación completa del proyecto

**Funcionalidad**:

- Todas las funcionalidades del Brief están implementadas
- El mapa funciona correctamente en diferentes navegadores
- El mapa es responsive (funciona en móvil, tablet y escritorio)
- No hay errores en la consola del navegador
- Todos los datos se cargan correctamente

**Rendimiento**:

- El mapa carga en tiempo razonable (menor a 5 segundos)
- La interacción es fluida (sin lag notable)
- Las imágenes están optimizadas
- Los archivos de datos no son excesivamente grandes

**Contenido:**

- Los textos están correctamente escritos (sin errores ortográficos)
- Los créditos y fuentes de datos están incluidos
- El logo institucional está presente
- Los metadatos (título, descripción) están completos

**Documentación**:

- El README está actualizado con información final
- Las instrucciones de uso están claras (si aplica)
- Los datos de contacto están incluidos

**Limpieza de archivos**
Eliminar del proyecto antes de publicar:

`❌ Archivos de desarrollo`
- Carpetas node_modules/ (si aplica)
- Archivos de configuración local (.env)
- Archivos de prueba o temporales

`❌ Código innecesario`
- console.log() de debugging
- Código comentado sin uso
- Funciones de prueba

`❌ Datos de prueba`
- Archivos de datos de ejemplo no utilizados
- Versiones antiguas de archivos

>Mantener solo lo necesario para producción.

## 2. Configuración de producción

### Actualizar configuraciones

En el archivo `config.js` (o equivalente), verificar que las configuraciones sean apropiadas para producción:

```javascript:
// Configuración de producción
const CONFIG = {
    // URLs absolutas en producción, relativas en desarrollo
    dataUrl: './data/comunas.geojson',  // Ruta relativa
    
    // Nivel de logging
    debug: false,  // Desactivar en producción
    
    // Configuración del mapa
    mapCenter: [-33.4489, -70.6693],
    mapZoom: 7,
    
    // Información institucional
    contactEmail: 'redit@minvu.cl',
    version: '1.0.0'
};
```

### Verificar rutas de archivos

Asegurarse de que todas las rutas sean relativas para que funcionen en cualquier servidor:

```html:
<!-- ✅ Correcto: rutas relativas -->
<link rel="stylesheet" href="./css/styles.css">
<script src="./js/map.js"></script>

<!-- ❌ Incorrecto: rutas absolutas que solo funcionan local -->
<link rel="stylesheet" href="C:/proyecto/css/styles.css">
<script src="/Users/nombre/proyecto/js/map.js"></script>
```
### Commit de la versión final
```bash:
# Verificar cambios finales
git status

# Agregar todos los cambios de producción
git add .

# Commit de versión lista para producción
git commit -m "release: preparar versión 1.0 para publicación"

# Subir a GitHub
git push origin main
```
## 3. Despliegue
Existen diferentes formas de publicar un mapa web. Sin embargo, para los mapas desarrollados en la Sección de Georreferenciación, estos se subirán a su propio servidor de mapas, el cual cuenta con salida pública. 
De todas formas, se presenta, como *opción B*, una opción alternativa en caso de que no se cuente con la posibilidad de utilizar el servidor de mapas.

### Opción A: Servidor de mapas institucional
Si se encuentra disponible el servidor de mapas web propio, existen dos formas de desplegar:

#### A1. Despliegue mediante Git (Recomendado)
Esta es la forma más profesional y eficiente. El servidor clona el repositorio directamente desde GitHub y puede actualizarse con un simple `git pull`.

**Requisitos**:

- Acceso SSH al servidor
- Git instalado en el servidor
- Permisos para acceder al directorio público del servidor web

**Configuración inicial (solo una vez)**:

Conectar al servidor por SSH:

```bash:
   ssh usuario@servidor.cl
```
Navegar al directorio público del servidor web:

```bash:
   cd /var/www/html/mapas/
   # o la ruta que corresponda según la configuración del servidor
```
Clonar el repositorio directamente:

```bash:
   git clone https://github.com/organizacion/webmap-proyecto.git
```
Configurar permisos (si es necesario):

```bash:
   chmod -R 755 webmap-proyecto/
```
Configurar el servidor web:

- Coordinar con informática en caso de ser necesario para que apunte a la carpeta del proyecto
- Definir la URL final (ej: https://mapas.redit.cl/webmap-proyecto/)



**Actualizar el mapa (cada vez que haya cambios)**:
```bash:
# Conectar al servidor
ssh usuario@servidor.cl

# Navegar al proyecto
cd /var/www/html/mapas/webmap-proyecto/

# Actualizar desde GitHub
git pull origin main

# Opcional: verificar qué versión está activa
git log --oneline -1
```
Ventajas:

- ✅ Proceso simple y rápido
- ✅ Trazabilidad completa (sabes exactamente qué versión está en producción)
- ✅ Fácil rollback si hay problemas: git checkout [commit-anterior]
- ✅ No hay riesgo de olvidar archivos
- ✅ Consistencia entre desarrollo y producción

**Alternativa con Deploy Keys (más seguro)**:

Si el repositorio es privado, configurar una Deploy Key:

1. **En el servidor, generar una llave SSH**:

```bash:
   ssh-keygen -t ed25519 -C "deploy-webmap-proyecto"
   cat ~/.ssh/id_ed25519.pub
   # Copiar la llave pública
```

2. **En GitHub**:

- Ir a Settings del repositorio → Deploy keys
- Add deploy key
- Pegar la llave pública
- Marcar "Allow write access" solo si es necesario (generalmente no)


3. **Clonar usando SSH**:

```bash:
   git clone git@github.com:organizacion/webmap-proyecto.git
```

#### A2. Despliegue manual (FTP/SFTP)

>Solo usar este método si Git no está disponible en el servidor o no se tienen permisos SSH.

**Proceso**:

1. **Preparar archivos para transferencia**:

- Descargar el código desde GitHub (Download ZIP) o exportar localmente
- Excluir archivos innecesarios: .git/, node_modules/, archivos de desarrollo


2. **Transferir al servidor**:

- Usar cliente FTP/SFTP (FileZilla, WinSCP, Cyberduck)
- Conectar al servidor con credenciales correspondientes
- Subir archivos a la carpeta pública del servidor


3. **Verificar permisos**:

- Asegurar que archivos tengan permisos de lectura apropiados
- Generalmente 644 para archivos, 755 para carpetas

4. **Configurar dominio/URL**:

- Definir la URL final del mapa
- Coordinar con la Sección de Informática en caso de ser necesario


5. **Verificar en producción**:

- Abrir la URL pública
- Probar todas las funcionalidades
- Verificar que los datos cargan correctamente

6. **Actualizar el mapa**:

- Subir los archivos modificados nuevamente al servidor
- Reemplazar los archivos anteriores


Desventaja: 
- Proceso manual propenso a errores

### Opción B: GitHub Pages (sólo en caso de no disponibilidad de servidor)
GitHub ofrece hosting gratuito para proyectos estáticos, ideal para mapas web.

**Ventajas**:

- Gratuito
-  Fácil de configurar
- Actualización automática desde el repositorio
- URL pública accesible

Pasos para desplegar:

1. Ir al repositorio en GitHub
2. Clic en Settings (Configuración)
3.  En el menú lateral, clic en Pages
4. En "Source", seleccionar:

```
Branch: main
Folder: / (root) o /docs (según estructura)
```

5. Clic en Save
6. Esperar 1-2 minutos
7. GitHub mostrará la URL pública del mapa

**URL resultante**:
`https://[nombre-organizacion].github.io/[nombre-repositorio]/`

**Actualizar el mapa**:
Simplemente hacer push a la rama main:
```bash:
git push origin main
```
>GitHub Pages se actualiza automáticamente en 1-2 minutos.

## 4. Verificación post-despliegue

Una vez publicado el mapa, verificar que todo funcione correctamente en producción.

### Checklist de verificación

**Funcionalidad básica**:

- El mapa se carga correctamente
- Los datos se visualizan
- Los controles funcionan (zoom, pan)
- Las interacciones responden (clicks, hover)

**Funcionalidades específicas**:

- Todos los filtros funcionan
- Los popups muestran información correcta
- Las búsquedas devuelven resultados
- Los enlaces externos funcionan

**Compatibilidad**:

- Funciona en Chrome
- Funciona en Firefox
- Funciona en Safari (si es posible)
- Funciona en móviles
- Funciona en tablets

**Rendimiento**:

- Carga en tiempo razonable
- No hay lag al interactuar
- Las imágenes cargan correctamente

**Errores**:

- No hay errores en la consola
- No hay enlaces rotos
- No hay recursos que no cargan (404)

### Solución de problemas comunes

**El mapa no se muestra**:

- Verificar rutas de archivos CSS y JS
- Revisar que todas las librerías se carguen correctamente
- Verificar errores en la consola del navegador

**Los datos no cargan**:

- Verificar ruta del archivo de datos
- Revisar CORS (si los datos están en otro servidor)
- Verificar que el formato de datos sea correcto

**Funciona local pero no en producción**:

- Cambiar rutas absolutas a relativas
- Verificar que todos los archivos se subieron
- Revisar mayúsculas/minúsculas en nombres de archivos

## 5. Comunicación de la publicación

Una vez verificado que todo funciona, comunicar la publicación a los demás miembros de la Sección de Georreferenciacióntodos (internos) y también a los usuarios del Sistema REDIT (externos).

### Información a compartir
**Internamente (Sección**):
```:
✅ Mapa web publicado: [Nombre del proyecto]

URL: https://ejemplo.github.io/webmap-proyecto
Versión: 1.0.0
Fecha: DD/MM/AAAA

Funcionalidades implementadas:
- Visualización de datos por comuna
- Filtro por región
- Búsqueda interactiva
- Panel de estadísticas

Repositorio: [URL del repositorio en GitHub]
```

**Externamente (usuarios, Subdirección)**:
```
Compartir la URL del mapa
Breve descripción de qué hace
Instrucciones básicas de uso (si es necesario)
Contacto para reportar problemas
```
### Actualizar documentación

**En el `README.md`**:
```markdown:
## Mapa en Producción

**URL:** https://ejemplo.github.io/webmap-proyecto

**Versión actual:** 1.0.0

**Última actualización:** DD/MM/AAAA

## Cómo actualizar (elegir según corresponde)

Servidor

Opción GitHub
1. Conectar al servidor
2. Navegar a la carpeta del proyecto
3. Actualizar desde GitHub
4. Verificar qué versión está activa

Opción Manual
1. Subir los archivos modificados nuevamente al servidor
2. Reemplazar los archivos anteriores

GitHub Pages
1. Hacer cambios en el código
2. Commit y push a `main`
3. GitHub Pages se actualiza automáticamente
```

## 6. Monitoreo post-publicación

Después de publicar, monitorear el mapa durante los primeros días.

### Aspectos a monitorear
**Errores reportados**:

- Estar atento a feedback de usuarios
- Revisar si hay problemas no detectados en desarrollo

**Rendimiento**:

-  Verificar que el mapa funcione bien con tráfico real
- Identificar posibles cuellos de botella

**Uso**:

- Si es posible, revisar estadísticas de visitas (Google Analytics u otro) *aún no se encuentra implementado*
- Identificar qué funcionalidades usan más los usuarios

## Correcciones rápidas
**Si se detectan errores después de publicar**:

```bash:
# Crear rama para corrección urgente
git checkout -b fix/error-critico

# Hacer la corrección
# ...

# Commit y push
git commit -m "fix: corregir error crítico en filtro"
git push origin fix/error-critico

# Crear PR indicando urgencia
```

## 7. Resumen del proceso de publicación

```
1. Preparación
   - Validación completa del proyecto
   - Limpieza de archivos innecesarios
   - Optimización final
   ↓
2. Configuración
   - Actualizar configuraciones de producción
   - Verificar rutas relativas
   - Commit de versión final
   ↓
3. Despliegue
   - Elegir método (GitHub Pages, servidor, hosting)
   - Subir archivos / configurar servicio
   - Obtener URL pública
   ↓
4. Verificación
   - Probar todas las funcionalidades
   - Verificar compatibilidad
   - Revisar rendimiento
   ↓
5. Comunicación
   - Informar al equipo
   - Compartir URL con usuarios
   - Actualizar documentación
   ↓
6. Monitoreo
   - Estar atento a errores
   - Revisar rendimiento
   - Aplicar correcciones si es necesario
```   