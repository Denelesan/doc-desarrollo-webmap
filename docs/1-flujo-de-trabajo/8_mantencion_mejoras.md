---
sidebar_position: 8
---

# Mantención y mejora continua

La publicación de un mapa web no es el final del proyecto, sino el comienzo de una nueva etapa. Los mapas web requieren mantención periódica para corregir errores, actualizar datos y agregar mejoras basadas en el uso real y feedback de los usuarios.
Este capítulo establece las prácticas para mantener y mejorar los mapas web publicados.

## 1. Tipos de mantención
### Mantención correctiva
- Resolver problemas o errores detectados después de la publicación.

Ejemplos:

- Corregir un filtro que no funciona correctamente
- Arreglar un enlace roto
- Solucionar problemas de rendimiento
- Corregir errores de visualización en ciertos navegadores

Proceso:
```bash:
# Crear rama para corrección
git checkout -b fix/descripcion-error

# Implementar corrección
# ...

# Commit y push
git commit -m "fix: corregir filtro de regiones"
git push origin fix/descripcion-error

# Crear PR indicando urgencia en caso de ser necesario
```
### Mantención preventiva
- Actualizar componentes para prevenir problemas futuros.

Ejemplos:

- Actualizar librerías (Leaflet, plugins)
- Optimizar código que podría causar problemas
- Mejorar validaciones de datos
- Actualizar documentación

**Frecuencia recomendada**:

- Revisar actualizaciones de librerías cada 3-6 meses
- Revisar rendimiento periódicamente
- Actualizar documentación cuando sea necesario

### Mantención adaptativa
- Adaptar el mapa a cambios en el entorno o requisitos.
Ejemplos:

- Actualizar datos con nueva información
- Adaptar a cambios en APIs externas
- Ajustar a nuevos requisitos institucionales
- Modificar según cambios en normativas

### Mantención evolutiva
- Agregar nuevas funcionalidades o mejoras basadas en feedback.
Ejemplos:

- Agregar nueva capa de información
- Implementar funcionalidad solicitada por usuarios
- Mejorar la interfaz de usuario
- Optimizar para mejores resultados


## 2. Actualización de datos
Muchos mapas web requieren actualización periódica de datos.

### Frecuencia de actualización
Definir claramente en el README del proyecto:

```markdown:
## Actualización de Datos

**Frecuencia:** Mensual / Trimestral / Anual / Según disponibilidad

**Fuente de datos:** [Nombre de la institución / URL]

**Responsable:** [Nombre del desarrollador o área]

**Última actualización:** DD/MM/AAAA
```

### Proceso de actualización de datos
**Datos estáticos (archivos en el repositorio)**:
```bash:
# Obtener nuevos datos de la fuente
# Validar el formato de los datos nuevos
# Reemplazar archivo antiguo

# Actualizar en el repositorio
git checkout -b data/actualizacion-mes-año
git add data/datos-actualizados.geojson
git commit -m "data: actualizar datos a mes/año"
git push origin data/actualizacion-mes-año

# Crear PR o merge directo
```
**Datos dinámicos (desde API externa)**:

1. Verificar que la API siga funcionando
2. Actualizar credenciales si es necesario
3. Validar que el formato de respuesta no haya cambiado

**Validación de datos actualizados**
Antes de publicar datos actualizados:

- [ ] Los datos tienen el formato esperado
- [ ] No hay valores faltantes críticos
- [ ] Las geometrías son válidas
- [ ] El mapa visualiza correctamente los nuevos datos
- [ ] Las estadísticas se calculan bien


## 3. Gestión de errores y feedback
### Canales de reporte
Definir cómo los usuarios pueden reportar problemas:
**En el mapa web**:

```html:
<!-- Enlace de contacto visible -->
<footer>
    <p>¿Encontraste un error? 
       <a href="mailto:contacto@institucion.cl">Reportar problema</a>
    </p>
</footer>
```
**En el README**:

```markdown:
## Reportar Problemas

Si encuentras un error o tienes sugerencias:
- Email: redit@minvu.cl
- Issues en GitHub: [URL]/issues
```
### Registro de errores
**Mantener un registro simple de errores reportados**:

En GitHub Issues:

- Crear un issue por cada error reportado
- Asignar etiquetas: bug, mejora, urgente, etc.
- Asignar responsable
- Actualizar estado

Plantilla de issue:

```markdown:
## Descripción del problema
[Descripción clara del error]

## Cómo reproducirlo
1. Ir a [URL]
2. Hacer clic en [elemento]
3. Observar [comportamiento]

## Comportamiento esperado
[Qué debería pasar]

## Información adicional
- Navegador: Chrome 120
- Sistema operativo: Windows 10
- Fecha: DD/MM/AAAA
```
### Priorización de correcciones

No todos los errores tienen la misma urgencia:
**Alta prioridad (corregir inmediatamente)**:

- El mapa no carga
- Funcionalidad crítica no funciona
- Datos incorrectos o engañosos
- Problemas de seguridad

**Media prioridad (corregir en días)**:

- Funcionalidad secundaria con problemas
- Errores visuales notorios
- Problemas de rendimiento moderados

**Baja prioridad (corregir cuando sea posible)**:

- Mejoras de UX
- Errores visuales menores
- Optimizaciones no críticas


## 4. Control de versiones del proyecto

### Versionado semántico

Usar un sistema claro para numerar versiones:
```
MAJOR.MINOR.PATCH
```
Ejemplo: **1.2.3**

- MAJOR (1.x.x): Cambios grandes, nueva funcionalidad importante
- MINOR (x.2.x): Nuevas funcionalidades menores, mejoras
- PATCH (x.x.3): Correcciones de errores, actualizaciones de datos

### Registro de cambios (CHANGELOG)
Mantener un archivo `CHANGELOG.md` en el repositorio:
```markdown:
# Historial de Cambios

## [1.2.0] - 2026-03-15
### Agregado
- Filtro por rango de fechas
- Exportación de datos a CSV

### Corregido
- Error en popup de comunas sin datos
- Problema de rendimiento con 1000+ markers

## [1.1.1] - 2026-02-10
### Corregido
- Enlace roto en panel de ayuda

### Actualizado
- Datos actualizados a febrero 2026

## [1.0.0] - 2026-01-20
### Agregado
- Versión inicial publicada
- Visualización de datos por comuna
- Filtros básicos
```
### Tags en Git
Marcar versiones importantes con tags:
```bash:
# Crear tag para versión
git tag -a v1.2.0 -m "Versión 1.2.0 - Agregar filtros avanzados"

# Subir tag a GitHub
git push origin v1.2.0

# Listar tags
git tag
```
## 5. Mejoras basadas en uso (sin implementar)

### Análisis de uso (opcional)
**Si se implementa analytics (Google Analytics, etc.)**:
Métricas útiles:

- Páginas más visitadas
- Funcionalidades más usadas
- Navegadores y dispositivos más comunes
- Puntos donde los usuarios abandonan

**Usar esta información para**:

- Priorizar mejoras en funcionalidades populares
- Optimizar para dispositivos más usados
- Mejorar áreas donde hay abandono

### Feedback de usuarios
**Recopilar y analizar feedback regularmente**:
Fuentes de feedback:

- Correos de usuarios
- Issues en GitHub
- Reuniones con usuarios
- Análisis de uso

**Proceso**:

1. Recopilar feedback durante 1-2 meses
2. Identificar patrones y solicitudes recurrentes
3. Priorizar mejoras según impacto y esfuerzo
4. Planificar implementación

### Ciclo de mejora
```
1. Recopilar feedback
   ↓
2. Analizar y priorizar
   ↓
3. Planificar mejoras
   ↓
4. Desarrollar e implementar
   ↓
5. Publicar nueva versión
   ↓
6. Comunicar cambios
   ↓
7. Volver a paso 1
```

## 6. Desactivación o archivación de proyectos

**Si un mapa web ya no se usa o será reemplazado**:

### Proceso de desactivación

**Comunicar al equipo y usuarios**

- Avisar con antelación
- Explicar razones
- Ofrecer alternativas si existen


**Archivar el repositorio en GitHub**

`Settings → Danger Zone → Archive repository`
>El código queda disponible pero en solo lectura


**Desactivar URL pública**

- Desactivar GitHub Pages
- O reemplazar con página informativa


**Documentar el cierre**

- Actualizar `README` indicando que está archivado
- Agregar nota final en CHANGELOG
- Indicar fecha de desactivación



**README de proyecto archivado**:
```markdown:
# [Nombre del Mapa] - PROYECTO ARCHIVADO

⚠️ Este proyecto fue desactivado el DD/MM/AAAA

## Razón
[Explicación breve]

## Alternativas
[Si existen proyectos que lo reemplazan]

## Acceso al código
El código permanece disponible en este repositorio con fines de referencia.
```

## Resumen de mantención

**Mantención Continua**:

```
1. Correctiva
   → Corregir errores reportados
   
2. Preventiva
   → Actualizar librerías, optimizar código
   
3. Adaptativa
   → Actualizar datos, adaptar a cambios
   
4. Evolutiva
   → Agregar mejoras, nuevas funcionalidades
```
**Ciclo**:
```Publicación → Monitoreo → Feedback → Mejoras → Nueva versión```
