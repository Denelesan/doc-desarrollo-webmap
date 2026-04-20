---
sidebar_position: 6
---

# Validación y revisión de funcionalidades

Una vez desarrolladas las funcionalidades del mapa web, es fundamental validar que cumplan con los requisitos establecidos y funcionen correctamente antes de considerarlas finalizadas. Este capítulo define el proceso de validación y revisión que asegura la calidad del código y del producto final.
La validación no es solo una etapa final, sino un proceso continuo que involucra tanto al desarrollador como a la jefatura y/o revisores.

## 1. Validación por el desarrollador
Antes de solicitar una revisión formal, el desarrollador debe validar su propio trabajo siguiendo una serie de verificaciones básicas.

### Autoevaluación funcional
El desarrollador debe probar exhaustivamente su funcionalidad respondiendo:

**Funcionalidad básica**:

- ✅ ¿La funcionalidad hace lo que se planificó en el Brief?
- ✅ ¿Responde correctamente a las interacciones del usuario?
- ✅ ¿Los datos se muestran correctamente?

**Casos edge (casos extremos)**:

- ✅ ¿Qué pasa si no hay datos disponibles?
- ✅ ¿Qué pasa si el usuario hace algo inesperado?
- ✅ ¿Funciona con valores extremos? (muchos datos, datos vacíos, datos inválidos)

**Compatibilidad**:

- ✅ ¿Funciona en diferentes navegadores? (Chrome, Firefox como mínimo)
- ✅ ¿Se ve bien en diferentes tamaños de pantalla? (escritorio, tablet, móvil)
- ✅ ¿Es accesible desde dispositivos táctiles?

**Integración**:

- ✅ ¿No rompe funcionalidades existentes?
- ✅ ¿Se integra visualmente con el resto del mapa?
- ✅ ¿No hay errores en la consola del navegador?

**Checklist de código**
Antes de enviar a revisión, verificar:

- [ ] El código está limpio y organizado
- [ ] Las variables y funciones tienen nombres descriptivos
- [ ] No hay código comentado innecesario
- [ ] No hay console.log() de debugging
- [ ] El código sigue la estructura del proyecto
- [ ] Los archivos están en las carpetas correctas
- [ ] Las funciones complejas están documentadas

#### Documentación mínima
Verificar que esté actualizado:

- **README.md**: Si la funcionalidad es significativa, agregar una breve descripción
- **Comentarios en código**: Explicaciones en lógica compleja o decisiones no obvias
- **Brief del proyecto**: Marcar la funcionalidad como completada si corresponde


### Pruebas básicas
Para funcionalidades críticas o complejas, es recomendable realizar pruebas más estructuradas antes de la revisión.

#### Pruebas manuales documentadas
Crear una lista de casos de prueba y ejecutarlos sistemáticamente:

Ejemplo para un filtro de regiones:

Caso 1: Filtrar por región válida
-  Acción: Seleccionar "Región Metropolitana"
-  Resultado esperado: Solo se muestran comunas de RM
-  Estado: ✅ Pasa

Caso 2: Limpiar filtro
-  Acción: Seleccionar opción "Todas las regiones"
-  Resultado esperado: Se muestran todas las comunas
-  Estado: ✅ Pasa

Caso 3: Filtrar sin datos
-  Acción: Seleccionar región sin comunas
-  Resultado esperado: Mensaje "No hay datos disponibles"
-  Estado: ✅ Pasa

Caso 4: Interacción con zoom
-  Acción: Filtrar y luego hacer zoom
-  Resultado esperado: Filtro se mantiene activo
-  Estado: ✅ Pasa


> Este registro puede guardarse temporalmente en un archivo `TESTS.md` o incluirse en el Pull Request.

#### Pruebas de carga de datos

Para funcionalidades que cargan datos externos, validar:

**Conexión exitosa**:

```javascript:
// Verificar que los datos se cargan correctamente
fetch('data/comunas.geojson')
    .then(response => {
        console.log('Status:', response.status); // Debe ser 200
        return response.json();
    })
    .then(data => {
        console.log('Features cargadas:', data.features.length);
    });
```    
**Datos inválidos**:

```javascript:
// Probar con datos incompletos o malformados
const datosInvalidos = { type: "FeatureCollection" }; // Sin features
validarGeoJSON(datosInvalidos); // Debe mostrar error apropiado
```
**Datos grandes**:

- Si el mapa debe manejar muchos datos (>1000 features), probar con el volumen real esperado
- Verificar que el rendimiento sea aceptable (sin lag al interactuar)

#### Pruebas de rendimiento básicas
Para funcionalidades que podrían afectar el rendimiento:

Usar las herramientas del navegador:

1. Abrir DevTools (F12)
2. Ir a la pestaña "Performance"
3. Grabar mientras usas la funcionalidad
4. Identificar operaciones lentas (>100ms)

Indicadores de problemas:

- El mapa se traba al hacer zoom o pan
- Hay retraso notable al activar la funcionalidad
- El navegador muestra advertencias de rendimiento

Si hay problemas de rendimiento, optimizar antes de enviar a revisión.

### Preparación del Pull Request

Una vez validada la funcionalidad, preparar el código para revisión.

**Limpieza final del código**

```bash:
# Revisar qué cambios se van a incluir
git status

# Ver diferencias específicas
git diff

# Asegurarse de no incluir archivos innecesarios
```
Eliminar antes de hacer commit:

- [ ] Archivos de prueba temporales
- [ ] Código comentado que no aporta
- [ ] console.log() de debugging
- [ ] Variables no usadas
- [ ] Imports no utilizados

### Estructura del Pull Request

Siguiendo lo establecido en el capítulo de control de versiones, crear el Pull Request con:

**Título claro**:
```Agregar filtro interactivo de regiones```

**Descripción completa**:

```markdown:
## Descripción
Implementa un filtro que permite al usuario seleccionar una región 
y mostrar solo las comunas correspondientes.

## Cambios principales
- Agregado menú desplegable con lista de regiones
- Implementada función de filtrado de features
- Agregado manejo de estado "todas las regiones"
- Agregados estilos al selector

## Cómo probar
1. Abrir el mapa
2. Usar el selector de regiones en el panel lateral
3. Verificar que solo se muestran comunas de la región seleccionada
4. Seleccionar "Todas" y verificar que se muestran todas las comunas

## Capturas de pantalla (opcional)
[Agregar imágenes si ayuda a entender la funcionalidad]
```
**Asignar revisor**:

- Generalmente la jefatura o un especialista asignado.


## 2. Proceso de revisión

El revisor (jefatura o especialista designado) evaluará el Pull Request desde diferentes perspectivas.

### Revisión de código
El revisor verificará:

**Estructura y organización**:

- ¿El código sigue la estructura del proyecto?
- ¿Los archivos están en las carpetas correctas?
- ¿La organización es lógica y clara?

**Calidad del código**:

- ¿Los nombres de variables y funciones son descriptivos?
- ¿El código es legible y comprensible?
- ¿Hay duplicación innecesaria?
- ¿Se siguen las convenciones del equipo?

**Funcionalidad**:

- ¿El código hace lo que dice que hace?
- ¿Maneja errores apropiadamente?
- ¿Hay validaciones necesarias?

### Revisión funcional

El revisor probará la funcionalidad directamente:

**Clonar la rama y probar localmente:**

```bash:
# Obtener la rama del PR
git fetch origin
git checkout feature/nombre-funcionalidad

# Abrir el proyecto y probar
```

Verificar:

- [X] La funcionalidad trabaja según lo descrito
- [X] No hay errores en la consola
- [X] La experiencia de usuario es buena
- [X] Se integra bien con el resto del mapa

### Tipos de retroalimentación

El revisor puede:

1. Aprobar directamente

- Si todo está correcto
- La funcionalidad cumple los requisitos
- El código es de calidad aceptable

2. Solicitar cambios menores

- Ajustes de estilo o nomenclatura
- Mejoras en comentarios
- Pequeñas optimizaciones

3. Solicitar cambios mayores

- Problemas de funcionalidad
- Errores críticos
- Necesidad de reestructurar código

4. Rechazar (casos extremos)

- La funcionalidad no cumple lo solicitado
- Problemas graves de arquitectura
- Necesidad de replantear el enfoque


## 3. Respuesta a la revisión

El desarrollador debe responder constructivamente a los comentarios del revisor.

### Implementar cambios solicitados
Para cada comentario del revisor:

1. Leer y comprender la sugerencia o problema identificado
2. Implementar la corrección en el código
3. Probar que la corrección funciona
4. Responder al comentario explicando qué se hizo

Ejemplo de respuesta:

```markdown:
Comentario del revisor: 
"Esta función debería validar que regionId no sea nulo"

Respuesta del desarrollador:
"Correcto. Agregué validación y mensaje de error. 
Ver commit abc123"
```

### Hacer commits de corrección
```bash:
# Implementar correcciones
git add .
git commit -m "fix: agregar validación de regionId según revisión"
git push origin feature/nombre-funcionalidad
```
>El Pull Request se actualizará automáticamente con los nuevos commits.

### Comunicación durante la revisión

- Responder a todos los comentarios, incluso si solo es para confirmar
- Si no estás de acuerdo con una sugerencia, explicar tu razonamiento
- Pedir aclaraciones si algo no está claro
- Mantener un tono profesional y constructivo


## 4. Aprobación e integración
Una vez que el revisor aprueba el Pull Request, se procede a la integración.

### Merge del Pull Request

**Generalmente realizado por**:

- La jefatura (en la mayoría de los casos)
- El subrogante y/o especialista designado

**Proceso**:

1. Revisor aprueba el PR en GitHub
2. Hacer clic en "Merge pull request"
3. Confirmar el merge
4. Eliminar la rama (si ya no se necesita)


**Actualización local**

Después del merge, el desarrollador debe actualizar su repositorio local:
```bash:
# Volver a la rama principal
git checkout main  # o develop, según el flujo

# Traer los cambios integrados
git pull origin main

# Eliminar la rama local (opcional)
git branch -d feature/nombre-funcionalidad
```
**Validación post-merge**

Después de integrar, verificar que:

- El mapa funciona correctamente en la rama principal
- No se introdujeron conflictos con otros cambios
- Todos los archivos necesarios están presentes


## 5. Registro de funcionalidades
Para mantener trazabilidad, es recomendable llevar un registro simple de las funcionalidades completadas.

### Actualizar documentación

En el `README.md`:
```markdown:
## Funcionalidades implementadas

- [x] Mapa base interactivo
- [x] Carga de datos comunales
- [x] Filtro por región
- [ ] Búsqueda de comuna (en progreso)
- [ ] Panel de estadísticas (pendiente)
```
En el Brief del proyecto:

- Marcar las funcionalidades completadas y agregar notas si hubo cambios respecto a lo planificado inicialmente.

## 6. Casos especiales

### Funcionalidad urgente o crítica
Si se requiere integrar algo de forma urgente:

- Comunicar claramente al equipo la urgencia
- Crear el PR marcándolo como "urgente" en el título
- Asignar al revisor y solicitar revisión prioritaria
- La jefatura debe revisar lo antes posible
- Mantener un estándar mínimo de calidad aun en urgencias

>Aún en casos urgentes, NO saltarse la revisión.

### Correcciones menores post-merge
Si después de integrar se detecta un error menor:

1. Si es muy pequeño (typo, ajuste mínimo):

- Crear rama fix/descripcion-breve
- Corregir y hacer commit
- Crear PR rápido o hacer merge directo (según permisos)

2. Si es significativo:

- Seguir el proceso normal de PR y revisión

### Funcionalidad rechazada
Si una funcionalidad es rechazada por problemas graves:

1. El revisor explica claramente qué está mal y por qué
2. El desarrollador puede:

- Replantear el enfoque y desarrollar nuevamente
- Discutir alternativas con el revisor
- Solicitar una reunión para aclarar requisitos

3. Cerrar el PR actual si es necesario
4. Crear uno nuevo cuando la funcionalidad esté corregida


## 7. Resumen del proceso
```markdown:
Desarrollador:
1. Completar funcionalidad
2. Validar según checklist
3. Realizar pruebas básicas
4. Limpiar código
5. Crear Pull Request descriptivo
   ↓
Revisor:
6. Revisar código
7. Probar funcionalidad
8. Aprobar / Solicitar cambios
   ↓
Desarrollador:
9. Implementar correcciones (si hay)
10. Actualizar Pull Request
   ↓
Revisor:
11. Re-revisar
12. Aprobar y hacer merge
   ↓
Desarrollador:
13. Actualizar repositorio local
14. Continuar con siguiente tarea
```