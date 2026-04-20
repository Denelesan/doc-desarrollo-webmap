---
sidebar_position: 9
---

# Resumen del flujo de trabajo

Este capítulo condensa de forma esquemática todo el flujo de trabajo establecido en el presente capítulo, desde la preparación inicial hasta la mantención continua de los mapas web.

## 1. Flujo General

```markdown:
PREPARACIÓN → DESARROLLO → VALIDACIÓN → PUBLICACIÓN → MANTENCIÓN
```
## 2. Preparación del Proyecto

```markdown:
Creación del Brief
   ↓
Crear repositorio en GitHub
   ↓
Clonar repositorio localmente
   ↓
Obtener código base institucional
   ↓
Personalizar configuración inicial
   ↓
Commit inicial
```
**Archivos clave al iniciar**:

- `README.md`
- `brief-proyecto.md`
- `.gitignore`
- Código base institucional

**Comandos principales**:
```bash:
git clone [URL-repositorio]
git add .
git commit -m "docs: inicialización del proyecto"
git push origin main
```
## 3. Configuración de Ramas

**Desarrollo individual**:
```markdown:
main (código estable)
  ↓
develop (trabajo en curso)
```

**Desarrollo colaborativo**:
```markdown:
main
  ↓
feature/nombre-funcionalidad
fix/nombre-correccion
```
**Comandos**:
```bash
# Desarrollo individual
git checkout -b develop

# Desarrollo colaborativo
git checkout -b feature/agregar-filtro
```
## 4. Desarrollo de Funcionalidades
Por cada funcionalidad:

**1. Planificar**
   - Revisar Brief
   - Definir qué hace la funcionalidad
   - Dividir en subtareas
   
**2. Desarrollar**
   - Crear prototipo simple
   - Desarrollar iterativamente
   - Probar continuamente
   
**3. Finalizar**
   - Limpiar código
   - Documentar
   - Commit y push

**Buenas prácticas**:

- Commits frecuentes (cada 30-60 min)
- Mensajes descriptivos
- Código limpio y organizado
- Probar antes de subir

**Comandos**:
```bash:
git add .
git commit -m "feat: agregar filtro de regiones"
git push origin develop
```
## 5. Validación y Revisión

```markdown:
Desarrollador:
1. Autoevaluación (checklist)
2. Pruebas básicas
3. Limpieza de código
4. Crear Pull Request
   ↓
Revisor:
5. Revisar código
6. Probar funcionalidad
7. Aprobar / Solicitar cambios
   ↓
Desarrollador:
8. Implementar correcciones (si hay)
9. Actualizar PR
   ↓
Revisor:
10. Aprobar y hacer merge
```
**En GitHub**:

- Crear Pull Request con descripción clara
- Asignar revisor
- Responder a comentarios
- Merge después de aprobación


## 6. Publicación y Despliegue

```markdown:
Preparación:
1. Validación completa
2. Limpieza de archivos
3. Optimización
4. Commit de versión final
   ↓
Despliegue:
5. Subir archivos a servidor / Configurar
6. Obtener URL pública
   ↓
Verificación:
7. Probar en producción
8. Verificar compatibilidad
9. Monitorear primeros días
```

## 7. Mantención Continua


**Ciclo continuo**:

```markdown:
Monitoreo
   ↓
Feedback de usuarios
   ↓
Identificar mejoras/errores
   ↓
Priorizar
   ↓
Desarrollar corrección/mejora
   ↓
Validar y revisar
   ↓
Publicar nueva versión
   ↓
Comunicar cambios
   ↓
Volver a Monitoreo
```

**Tipos de mantención**:

- **Correctiva**: Corregir errores
- **Preventiva**: Actualizar librerías
- **Adaptativa**: Actualizar datos
- **Evolutiva**: Nuevas funcionalidades

**Versionado**:
```markdown:
MAJOR.MINOR.PATCH
1.2.3

git tag -a v1.2.0 -m "Versión 1.2.0"
git push origin v1.2.0
```

**Comandos Git Esenciales**
```bash:
# Iniciar trabajo
git checkout main
git pull origin main
git checkout -b develop  # o feature/nombre

# Durante desarrollo
git status
git add .
git commit -m "tipo: descripción"
git push origin develop

# Actualizar
git pull origin main

# Ver historial
git log --oneline

# Cambiar de rama
git checkout nombre-rama

# Ver ramas
git branch
```

**Checklist Rápido por Etapa**

✅ Inicio de Proyecto

- [ ] Brief completado
- [ ] Repositorio creado en GitHub
- [ ] Código base obtenido
- [ ] Configuración personalizada
- [ ] README actualizado

✅ Durante Desarrollo

- [ ] Commits frecuentes
- [ ] Código limpio
- [ ] Sin errores en consola
- [ ] Pruebas continuas
- [ ] Push diario

✅ Antes de Revisión

- [ ] Funcionalidad completa
- [ ] Código limpio
- [ ] Sin `console.log`
- [ ] Documentado
- [ ] PR creado

✅ Antes de Publicar

- [ ] Todo aprobado
- [ ] Validación completa
- [ ] Optimizado
- [ ] Documentación final
- [ ] Versión etiquetada

✅ Post-Publicación

- [ ] URL pública funcional
- [ ] Verificado en producción
- [ ] Comunicado al equipo
- [ ] Monitoreo activo
- [ ] Plan de mantención


### Estructura de Archivos Final

```
📁 webmap-proyecto/
├── 📁 css/
│   ├── 📄 styles.css
│   └── 📄 institucional.css
├── 📁 js/
│   ├── 📄 config.js
│   ├── 📄 map.js
│   ├── 📄 data.js
│   ├── 📄 filters.js
│   └── 📄 utils.js
├── 📁 data/
│   └── 📄 datos.geojson
├── 📁 img/
│   └── 📄 logo.png
├── 📄 index.html
├── 📄 README.md
├── 📄 CHANGELOG.md
├── 📄 brief-proyecto.md
└── 📄 .gitignore
```

### Roles y Responsabilidades

**Desarrollador**:

- Implementar funcionalidades
- Commits y documentación
- Pruebas básicas
- Crear Pull Requests
- Responder a revisiones

**Jefatura/Revisor**:

- Revisar Pull Requests
- Aprobar cambios
- Supervisar calidad
- Gestionar repositorios
- Definir prioridades


### Recursos de Referencia

**Documentación**:

- README del proyecto
- Brief del proyecto
- CHANGELOG
- Código base institucional

**GitHub**:

- Repositorio del proyecto
- Issues para errores
- Pull Requests para revisión

**Herramientas**:

- Git / GitHub Desktop
- Editor de código (a elección del desarrollador)
- Navegadores (Chrome, Firefox)
- DevTools (F12)