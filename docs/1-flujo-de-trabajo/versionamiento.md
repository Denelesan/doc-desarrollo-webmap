---
sidebar_position: 4
---

# Flujo del control de versiones (Git y GitHub)


## Introducción

El control de versiones no solo permite guardar el historial de cambios del código, sino que también facilita el trabajo colaborativo entre los miembros del equipo. Este capítulo define el flujo de trabajo con Git y GitHub que utilizará la Sección de Georreferenciación para desarrollar mapas web de forma ordenada y segura.

El flujo propuesto busca ser simple y práctico, adecuado para un equipo que está iniciando en el uso de estas herramientas, priorizando la claridad y la prevención de errores por sobre flujos complejos de trabajo.

**Importante**: En la mayoría de los casos, un solo desarrollador será responsable de todo el proyecto de mapa web. El flujo de trabajo se adapta a esta realidad, manteniendo buenas prácticas sin agregar complejidad innecesaria.

## 1. Organización de cuentas y repositorios

### Cuentas individuales vs cuenta del equipo

Cada desarrollador debe contar con su propia cuenta personal de GitHub. Esto permite:

- Identificar quién realizó cada cambio en el código
- Mantener un historial de contribuciones individual
- Facilitar la revisión y validación de cambios

Los repositorios de los proyectos, sin embargo, se crearán bajo la cuenta organizacional de la Sección de Georreferenciación. Esto garantiza que:

- Los proyectos pertenezcan institucionalmente al equipo, no a un desarrollador particular
- Todos los integrantes tengan acceso centralizado a los repositorios
- La jefatura pueda supervisar y gestionar todos los proyectos desde un solo lugar

### Configuración del equipo

El administrador de los repositorios (generalmente la jefatura) debe:

1. **Agregar a los desarrolladores como miembros de la organización**:
    - Ir a la configuración de la organización en GitHub
    - Sección "People" → "Invite member"
    - Ingresar el nombre de usuario o correo del desarrollador
    - Asignar el rol apropiado (generalmente "Member")
2. **Crear equipos de trabajo (opcional)**:
    - Si el grupo es pequeño (menos de 5 personas), no es necesario crear equipos
    - Para grupos más grandes, se pueden crear equipos por área (ej: "Desarrolladores", "Revisores")
3. **Configurar permisos de los repositorios**:
    - Los desarrolladores deben tener permisos de "Write" (escritura) en los repositorios de sus proyectos
    - La jefatura debe mantener permisos de "Admin" (administrador)
----
## 2. Flujo de trabajo básico
El flujo de trabajo define cómo se realizan los cambios en el código y cómo estos cambios llegan al repositorio principal. Se propone un flujo simple que se adapta según si trabajas solo o en colaboración en el proyecto.

### Estructura de ramas
Cada repositorio contará con al menos una rama principal:

- `main` (o `master`): Rama principal que contiene el código estable y funcional del proyecto.

Dependiendo del tipo de desarrollo, se crearán ramas adicionales:

#### Desarrollo individual (un solo desarrollador en todo el proyecto)

Cuando un desarrollador es responsable de todo el mapa web, se utiliza una rama de desarrollo continuo:

- `develop`: Rama donde se realiza todo el trabajo en curso del proyecto.

**Flujo**:

- El desarrollador trabaja en `develop` durante todo el proyecto
- `main` se actualiza solo cuando hay versiones estables o al finalizar el desarrollo
- No es necesario crear ramas feature/ adicionales (a menos que se requiera)

#### Desarrollo colaborativo (múltiples desarrolladores)
Cuando varios desarrolladores trabajan en el mismo proyecto, se crean ramas temporales por funcionalidad:

- `feature/`, `fix/`, `docs/`, etc.: Ramas temporales para cada cambio específico

**Flujo**:

- Cada desarrollador crea una rama desde main para su funcionalidad
- Al terminar, integra los cambios de vuelta a main mediante Pull Request
- Las ramas se eliminan después de integrar

### Nomenclatura de ramas

Las ramas temporales deben seguir una nomenclatura clara que indique su propósito:

``` bash:
[tipo]/[descripcion-breve]
```
**Tipos de ramas**:

- `develop`: Para desarrollo continuo individual de todo el proyecto
- `feature/`: Para nuevas funcionalidades
- `fix/`: Para correcciones de errores
- `docs/`: Para cambios en documentación
- `style/`: Para cambios de estilos visuales

**Ejemplos**:

- `develop` ← rama única para desarrollo individual
- `feature/agregar-capa-comunas`
- `fix/corregir-zoom-inicial`
- `docs/actualizar-readme`
- `style/mejorar-popup-markers`

**Características**:

- Usar solo minúsculas
- Separar palabras con guiones -
- Ser descriptivo pero conciso
- No usar tildes ni caracteres especiales

----
## 3. Ciclo de desarrollo: paso a paso

A continuación se describe el proceso completo que debe seguir un desarrollador para implementar cambios en el código.

### Paso 1: Actualizar el repositorio local

Antes de comenzar a trabajar, asegurarse de tener la versión más reciente del código:

```bash:
# Cambiar a la rama main
git checkout main

# Traer los últimos cambios desde GitHub
git pull origin main
```

### Paso 2: Crear una rama para tu trabajo

**Opción A: Desarrollo individual (un solo desarrollador en el proyecto)**
Si eres el único responsable del proyecto completo, crea una rama `develop`:

```bash:
# Crear y cambiar a la rama develop (solo la primera vez)
git checkout -b develop

# Días siguientes, solo cambiar a develop
git checkout develop
```
>**Nota**: La rama develop se crea una sola vez al inicio del proyecto y se usa durante todo el desarrollo. No necesitas crear nuevas ramas feature/ a menos que quieras separar funcionalidades específicas para revisión.

**Opción B: Desarrollo colaborativo (múltiples desarrolladores)**
Si trabajas con otros desarrolladores en el mismo proyecto, crea una rama específica para tu funcionalidad:
```bash:
# Crear y cambiar a una nueva rama
git checkout -b feature/nombre-funcionalidad
```

Ejemplo:
```bash:
git checkout -b feature/agregar-filtro-regiones
```
### Paso 3: Desarrollar y realizar commits

Trabajar normalmente en el código, guardando los cambios de forma incremental mediante commits:

```bash:
# Ver qué archivos han cambiado
git status

# Agregar archivos al área de preparación
git add archivo1.js archivo2.css

# O agregar todos los cambios
git add .

# Crear un commit con un mensaje descriptivo
git commit -m "feat: agregar filtro de regiones al mapa"
```

**Recomendaciones para commits**:

- Hacer commits frecuentes (cada vez que completes una subtarea)
- Usar mensajes claros y descriptivos
- Seguir el formato: [tipo]: descripción breve
    - `feat`: Nueva funcionalidad
    - `fix`: Corrección de error
    - `docs`: Cambios en documentación
    - `style`: Cambios de estilo visual
    - `refactor`: Mejoras en el código sin cambiar funcionalidad

**Ejemplos de buenos mensajes de commit**:

- `feat`: agregar capa de límites comunales
- `fix`: corregir error en cálculo de distancias
- `docs`: actualizar instrucciones de instalación
- `style`: mejorar diseño de panel lateral

### Paso 4: Subir la rama a GitHub

Una vez que hayas completado tu trabajo, sube tu rama a GitHub:

```bash:

git push origin feature/nombre-funcionalidad
```

Ejemplo:
```bash:

git push origin feature/agregar-filtro-regiones
```
### Paso 5: Crear un Pull Request

Un **Pull Request (PR)** es una solicitud para integrar los cambios de tu rama en la rama `main`. Esto permite que otros miembros del equipo revisen tu código antes de que se integre.

**Crear el Pull Request**:

1. Ir al repositorio en GitHub
2. Aparecerá un banner amarillo indicando que subiste una nueva rama, hacer clic en **"Compare & pull request"**
        - Si no aparece, ir a la pestaña "Pull requests" → "New pull request"
3. Configurar el Pull Request:
        - Base: `main` (la rama a la que quieres integrar los cambios)
        - Compare: `feature/nombre-funcionalidad` (tu rama con los cambios)
        - Title: Título descriptivo del cambio (ej: "Agregar filtro de regiones")
        - Description: Explicación de qué se hizo y por qué
4. Hacer clic en **"Create pull request"**

**Contenido de la descripción del PR**:

```markdown:

## Descripción
Breve explicación de los cambios realizados.

## Cambios principales
- Cambio 1
- Cambio 2
- Cambio 3

## Cómo probar
Pasos para verificar que los cambios funcionan correctamente.
```

### Paso 6: Revisión y aprobación

Una vez creado el Pull Request, este debe ser revisado por al menos un miembro del equipo (idealmente la jefatura o el especialista SIG).

**Responsabilidades del revisor**:

- Verificar que el código funcione correctamente
- Revisar que siga las convenciones del equipo
- Identificar posibles errores o mejoras
- Probar los cambios localmente si es necesario

**El revisor puede**:

- Aprobar el PR: Si todo está correcto
- Solicitar cambios: Si hay correcciones necesarias
- Comentar: Para sugerencias o preguntas

### Paso 7: Integrar los cambios (Merge)

Una vez que el Pull Request ha sido aprobado, se puede integrar a la rama main:

1. En la página del Pull Request, hacer clic en "Merge pull request"
2. Confirmar haciendo clic en "Confirm merge"
3. Eliminar la rama después del merge haciendo clic en "Delete branch"
    - Esto mantiene el repositorio limpio
    - La rama solo existió temporalmente para esa funcionalidad

### Paso 8: Actualizar tu repositorio local

Después de que se haya hecho el merge, actualizar tu repositorio local:

```bash:

# Volver a la rama main
git checkout main

# Traer los cambios integrados
git pull origin main

# Eliminar la rama local (ya no es necesaria)
git branch -d feature/nombre-funcionalidad
```

## 4. Reglas y buenas prácticas

Para mantener un flujo de trabajo ordenado y prevenir problemas, el equipo debe seguir estas reglas básicas:

### Reglas obligatorias

1. **Nunca trabajar directamente en la rama `main`**
    - Siempre crear una rama nueva para cada cambio
    - Esto previene conflictos y mantiene `main` estable
2. **Actualizar `main` antes de crear una nueva rama**
    - Ejecutar git pull origin `main` antes de `git checkout -b`
    - Esto asegura que partes desde la versión más reciente
3. **Todo cambio debe pasar por un Pull Request**
    - No hacer push directo a `main`
    - Permite revisión y validación antes de integrar
4. **Esperar aprobación antes de hacer `merge`**
    - Al menos un miembro del equipo debe revisar y aprobar
    - La jefatura tiene la última palabra en cambios críticos
5. **Eliminar ramas después del `merge`**
    - Mantiene el repositorio limpio y ordenado
    - Las ramas son temporales, no permanentes

### Buenas prácticas recomendadas

1. **Commits pequeños y frecuentes**
    - Mejor hacer varios commits pequeños que uno grande
    - Facilita identificar cuándo se introdujo un error
2. **Mensajes de commit descriptivos**
    - Explicar QUÉ se hizo, no CÓMO
    - Usar verbos en infinitivo: "agregar", "corregir", "actualizar"
3. **Pull Requests enfocados**
    - Cada PR debe abordar UNA funcionalidad o corrección
    - PRs muy grandes son difíciles de revisar
4. **Probar antes de subir**
    - Verificar que el código funcione antes de hacer push
    - Ejecutar el proyecto localmente y probar los cambios
5. **Comunicación constante**
    - Informar al equipo cuando estés trabajando en algo
    - Avisar si encontraste problemas o bloqueos
6. **Resolver conflictos rápidamente**
    - Si GitHub indica conflictos en un PR, resolverlos de inmediato
    - Pedir ayuda si no sabes cómo resolverlos

## 5. Manejo de conflictos

Un conflicto ocurre cuando dos personas modifican las mismas líneas de código en archivos diferentes o cuando Git no puede determinar automáticamente cómo combinar los cambios.

### ¿Cuándo ocurren conflictos?

- Dos desarrolladores modifican el mismo archivo en las mismas líneas
- Alguien eliminó un archivo que otro modificó
- Cambios estructurales incompatibles

### Prevenir conflictos

- Comunicación: Avisar al equipo en qué archivos estás trabajando
- Actualizar frecuentemente: Hacer git pull origin main regularmente
- Pull Requests pequeños: Integrar cambios rápido, no acumularlos

### Resolver conflictos

Si GitHub indica que tu Pull Request tiene conflictos:

1. **Actualizar tu rama con los cambios de main**:

```bash:

# Asegurarte de estar en tu rama
git checkout feature/tu-rama

# Traer los cambios de main
git pull origin main
```
2. **Git indicará qué archivos tienen conflictos**
3. **Abrir los archivos en conflicto y buscar las marcas**:


```javascript:
<<<<<<< HEAD
// Tu código
=======
// Código de otra persona
>>>>>>> main
```
4. **Editar manualmente para decidir qué código mantener**:
- Puedes mantener uno, otro, o combinar ambos
- Eliminar las marcas `<<<<<<<, =======, >>>>>>>`
- Guardar los archivos y hacer commit:

```bash

git add archivo-con-conflicto.js
git commit -m "fix: resolver conflictos con main"
git push origin feature/tu-rama
```
Si tienes dudas o el conflicto es complejo, pedir ayuda a la jefatura de la Sección de Georreferenciación.

----
## 6. Roles y responsabilidades

### Rol de Desarrollador

**Responsabilidades**:

- Crear ramas para cada funcionalidad o corrección
- Realizar commits descriptivos y frecuentes
- Crear Pull Requests cuando el trabajo esté completo
- Responder a comentarios y solicitudes de cambio en PRs
- Mantener el código limpio y documentado
- Comunicar problemas o bloqueos al equipo

**Permisos en GitHub**:

- Write (escritura) en los repositorios de sus proyectos
- Pueden crear ramas, hacer commits, y crear Pull Requests
- NO pueden hacer merge de sus propios Pull Requests sin aprobación

### Rol de Jefatura

**Responsabilidades**:

- Revisar y aprobar Pull Requests
- Validar que los cambios cumplan con los estándares del equipo
- Resolver dudas técnicas y conflictos complejos
- Gestionar los permisos y configuración de repositorios
- Supervisar el avance de los proyectos
- Definir prioridades y asignación de tareas

**Permisos en GitHub**:

- Admin (administrador) en todos los repositorios
- Puede aprobar y hacer merge de Pull Requests
- Puede gestionar ramas, permisos, y configuración del repositorio

### Rol de Revisor (opcional)

En razón del proyecto, y la cantidad de personal disponible, se podrán generar perfiles de revisores:

**Responsabilidades**:

- Revisar Pull Requests de otros desarrolladores
- Proporcionar feedback constructivo sobre el código
- Aprobar PRs cuando cumplan con los estándares

**Permisos en GitHub**:

- Write (escritura) o Maintain (mantenimiento)
- Pueden aprobar Pull Requests

## 7. Casos especiales

### Trabajo urgente o corrección crítica

Si se requiere una corrección urgente en producción:

- Crear una rama `fix/descripcion-urgente` desde main
- Realizar la corrección mínima necesaria
- Crear el Pull Request marcándolo como urgente en el título
- La jefatura debe revisar y aprobar de inmediato
- Hacer merge lo antes posible

> Aún en casos urgentes, NUNCA saltarse el Pull Request.

### Trabajo en progreso (WIP)

Si necesitas subir tu trabajo pero aún no está completo:

- Crear el Pull Request normalmente
- Agregar el prefijo **"[WIP]"** o **"[En progreso]"** en el título
- En la descripción, indicar qué falta por completar
- Cuando esté listo, quitar el prefijo y solicitar revisión

Ejemplo:

- Título inicial: `[WIP] Agregar filtro de regiones`
- Título final: `Agregar filtro de regiones`

### Experimentación o pruebas

Para probar ideas sin comprometer el código principal:

- Crear una rama experiment/nombre-prueba
- Experimentar libremente
- Si la idea funciona, crear un PR normal
- Si no funciona, simplemente eliminar la rama sin hacer merge

## 8. Herramientas y recursos adicionales

### Interfaz gráfica para Git (opcional)

Si prefieres una herramienta visual en lugar de la terminal:

- GitHub Desktop: Aplicación oficial de GitHub, simple e intuitiva
    - Descargar en: [desktop.github.com](https://github.com/apps/desktop) 
- SourceTree: Herramienta gratuita con más funciones avanzadas
- GitKraken: Interfaz moderna y visual

Estas herramientas facilitan ver el historial, crear ramas, y resolver conflictos de forma visual.

### Comandos Git de referencia rápida
```bash:

# Ver el estado actual
git status

# Crear y cambiar a una nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Ver todas las ramas
git branch

# Agregar cambios
git add archivo.js
git add .

# Hacer commit
git commit -m "mensaje"

# Subir cambios
git push origin nombre-rama

# Traer cambios
git pull origin main

# Ver historial de commits
git log --oneline

# Eliminar rama local
git branch -d nombre-rama
```

### Recursos de aprendizaje

- **Documentación oficial de Git**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Skills**: Tutoriales interactivos oficiales de GitHub
- **Oh My Git!**: Juego educativo para aprender Git de forma visual

----

## Resumen del flujo

Para facilitar la adopción del flujo de trabajo, este es el proceso resumido que debe seguir cada desarrollador:


1. **Actualizar** `main` \
    → `git checkout main` \
    → `git pull origin main`

2. **Crear rama**\
   → `git checkout -b feature/mi-funcionalidad`

3. **Desarrollar**\
   → Escribir código\
   → `git add .`\
   → `git commit -m "mensaje"`

4. **Subir rama**\
   → `git push origin feature/mi-funcionalidad`

5. **Crear Pull Request en GitHub**\
   → Describir los cambios\
   → Solicitar revisión

6. **Esperar aprobación**\
   → Responder a comentarios\
   → Hacer ajustes si es necesario

7. **Merge (lo hace el revisor)**\
   → Eliminar la rama

8. **Actualizar local**\
   → `git checkout main`\
   → `git pull origin main`

Con este flujo de trabajo, el equipo puede colaborar de forma ordenada, mantener un historial claro de cambios, y minimizar errores en el código. A medida que el equipo gane experiencia, se podrán incorporar prácticas más avanzadas según sea necesario.


