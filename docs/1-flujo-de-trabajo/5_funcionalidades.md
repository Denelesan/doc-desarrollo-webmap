---
sidebar_position: 5
---

# Desarrollo de Funcionalidades del Mapa

Una vez configurado el entorno de trabajo y definido el flujo de control de versiones, comienza la etapa central del proyecto: **el desarrollo de las funcionalidades del mapa web**.
Este capítulo establece las buenas prácticas y el flujo de trabajo que debe seguir cada desarrollador al implementar las características del mapa. El objetivo es mantener un código ordenado, mantenible y funcional.
A diferencia del capítulo anterior que se enfocó en **cómo gestionar el código con Git y GitHub**, este capítulo se centra en cómo escribir y organizar ese código durante el desarrollo.


---

## 1. Planificación del desarrollo

Antes de comenzar a programar, es fundamental entender qué se va a construir y dividir el trabajo en tareas manejables.

### Revisar el Brief del proyecto

El desarrollador debe:
1. Leer completamente el Brief del proyecto
2. Identificar las funcionalidades principales requeridas
3. Comprender los datos disponibles y su formato
4. Identificar restricciones técnicas o requisitos específicos

### Dividir en tareas

Un mapa web completo debe dividirse en **tareas pequeñas y específicas**:

**Ejemplo para un mapa de vértices geodésicos:**

```bash:
1. Configuración inicial
   - Personalizar código base
   - Configurar vista inicial del mapa

2. Carga de datos
   - Cargar/conectar WFS GeoJSON de comunas.
   - Cargar/conectar WFS GeoJSON de vértices geodésicos.

3. Visualización
   - Aplicar colores según estado del vértice
   - Crear simbología

4. Interactividad
   - Agregar tooltips
   - Implementar popups con detalles de los vértices
   - Implementar popups con monografía

5. Funcionalidades específicas
   - Agregar filtro por comuna
   - Implementar búsqueda de vértice por nombre
   - Implementar búsqueda de vértice más cercano
   - Implementar descarga de monografías por comuna
```

**Orden de implementación recomendado**

1. Funcionalidades base (configuración, carga de datos)
2. Visualización básica (mostrar datos en el mapa)
3. Interactividad esencial (clicks, hover, popups)
4. Funcionalidades específicas (filtros, búsqueda)
5. Detalles finales (estilos, optimización)

>**Importante**: Mantener siempre una versión funcional del mapa. Agregar complejidad de forma incremental.
----

## 2. Ciclo de desarrollo de una funcionalidad

### Paso 1: Definir claramente la funcionalidad
Antes de programar, responder:

- ¿Qué hace? (descripción en una frase)
- ¿Cómo la usa el usuario? (interacción esperada)
- ¿Qué datos necesita? (fuentes, formatos)

### Paso 2: Desarrollar iterativamente

- Crear prototipo simple que demuestre que funciona
- Probar con datos reales
- Agregar validaciones y manejo de errores
- Aplicar estilos y pulir detalles

### Paso 3: Probar

Antes de considerar terminada una funcionalidad:

- ✅ ¿Funciona correctamente?
- ✅ ¿No hay errores en la consola del navegador?
- ✅ ¿Funciona en diferentes tamaños de pantalla?
- ✅ ¿Maneja bien casos inesperados? (sin datos, datos inválidos)

### Paso 4: Commit

```bash:
git add .
git commit -m "feat: agregar filtro de vértices"
git push origin develop
```
## 3. Buenas prácticas esenciales

### Organización del código

- **Un archivo por responsabilidad**: No mezclar lógica de datos con lógica de interfaz
- **Seguir la estructura del código base**: Mantener la organización de carpetas establecida
- **Código en archivos JS separados**: No escribir JavaScript directamente en HTML

### Nomenclatura

**Variables y funciones**:

```javascript:
// ✅ Correcto: descriptivo, camelCase
let comunasVisibles = [];
function filtrarPorRegion(regionId) { }

// ❌ Incorrecto: ambiguo, abreviado
let cv = [];
function fpr(r) { }
```

**Archivos:**

```javascript:
✅ filtro-regiones.js
✅ datos-comunas.json

❌ filtro.js
❌ data.json
```
### Comentarios útiles

Comentar el "por qué", no el "qué":

```javascript:
// ❌ Innecesario
// Sumar 1 al contador
contador = contador + 1;

// ✅ Útil
// Invertir coordenadas porque Leaflet usa [lat, lng] 
// mientras GeoJSON usa [lng, lat]
const coords = [geojsonCoords[1], geojsonCoords[0]];
```
### Manejo de errores

Siempre que se consuman datos externos, ya sean desde archivos, servicios o APIs, se deben validar y gestionar los distintos errores que se podrían presentar al momento de la conexión:

```javascript:
fetch('datos/comunas.geojson')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar datos');
        }
        return response.json();
    })
    .then(data => {
        if (!data || !data.features) {
            console.error('Datos inválidos');
            mostrarMensajeError('No se pudieron cargar los datos');
            return;
        }
        procesarDatos(data);
    })
    .catch(error => {
        console.error('Error:', error);
        mostrarMensajeError('Error de conexión');
    });
```
### Código limpio

- **Evitar código duplicado**: Si repites código más de 3 veces, crear una función
- **Nombres descriptivos**: Preferir claridad sobre brevedad
- **Funciones pequeñas**: Una función = una responsabilidad


## 4. Gestión de datos

### Formatos recomendados

- *GeoJSON*: Para datos geográficos con geometrías
- *JSON*: Para datos tabulares o configuraciones
- *CSV*: Para datos simples que vienen de fuentes externas

### Validación de datos

Antes de usar datos, validar su estructura:

```javascript:
function validarGeoJSON(data) {
    if (!data || !data.type || data.type !== 'FeatureCollection') {
        console.error('GeoJSON inválido');
        return false;
    }
    if (!data.features || data.features.length === 0) {
        console.error('Sin features');
        return false;
    }
    return true;
}
```

### Ubicación de datos

- Datos pequeños (< 1MB): En carpeta `data/` del proyecto
- Datos grandes (> 1MB): En servidor de mapas, referenciar por URL
- Datos sensibles: Nunca incluir en el repositorio, usar variables de entorno


## 5. Pruebas y validación

**Durante el desarrollo**

Después de cada cambio significativo:

1. Recargar el navegador
2. Abrir consola (F12) y verificar que no hay errores
3. Probar la funcionalidad
4. Verificar que no rompiste nada existente

**Antes de finalizar**

- **Navegadores**: Probar en Chrome y Firefox como mínimo
- **Pantallas**: Probar en escritorio, tablet y móvil (modo responsive F12)
- **Datos**: Probar con diferentes volúmenes (pocos, normales, muchos)

**Limpieza final**

Antes del commit final, eliminar:

- `console.log()` de debugging
- Código con comentarios innecesario
- Variables y funciones no usadas


## 6. Integración con Git

### Commits frecuentes

Frecuencia recomendada:

- Un commit cada vez que completes una subtarea
- Al menos 2-3 commits por día de trabajo
- Al final del día, siempre hacer push

Estructura de mensajes:

```bash:
git commit -m "feat: agregar capa de límites comunales"
git commit -m "fix: corregir error en popup vacío"
git commit -m "style: mejorar diseño del panel"
git commit -m "docs: documentar función filtrarComuna"
```

### Cuándo hacer push

- Al final de cada día de trabajo
- Después de completar una funcionalidad importante
- Antes de hacer cambios estructurales grandes

---

## 7. Preparación para revisión

Antes de considerar el trabajo listo para revisión:

### Checklist de completitud

**Funcionalidad**:

- [ ] Implementada según el Brief
- [ ] Probada en diferentes escenarios
- [ ] Sin errores en consola
- [ ] Funciona en móvil y escritorio

**Código**:

- [ ] Código limpio y organizado
- [ ] Nombres descriptivos
- [ ] Sin console.log de debugging
- [ ] Comentarios en código complejo

**Documentación**:

- [ ] README actualizado si corresponde
- [ ] Funciones complejas documentadas

### Commit final

```bash:
git add .
git commit -m "feat: finalizar implementación de [funcionalidad]

[Breve descripción de lo implementado]"

git push origin develop
```

---

## Resumen del flujo

``` bash:
1. Obtener código base institucional
   ↓
2. Personalizar configuración inicial
   ↓
3. Revisar Brief y dividir en tareas
   ↓
4. Por cada tarea:
   - Definir qué hace
   - Desarrollar iterativamente
   - Probar
   - Commit y push
   ↓
5. Limpieza final y revisión
```

