---
sidebar_position: 3
---

# Preparación del Proyecto

Este capítulo describe los pasos iniciales necesarios para preparar un proyecto de mapa web antes de comenzar con el desarrollo propiamente tal. El objetivo es establecer un punto de partida común para todo el equipo, asegurando orden, claridad y consistencia desde las primeras etapas del proyecto.

Las definiciones aquí presentadas buscan evitar reprocesos, desorden en los archivos y problemas de mantención a futuro, sentando las bases para un desarrollo colaborativo más eficiente.

## 0. Introducción a Git y GitHub

### ¿Por qué usar Git y GitHub?
En el desarrollo de mapas web, es fundamental contar con un sistema que permita:

- Mantener un historial completo de todos los cambios realizados en el código.
- Trabajar de forma colaborativa sin riesgo de sobrescribir el trabajo de otros integrantes del equipo.
- Recuperar versiones anteriores del proyecto en caso de errores o problemas.
- Respaldar el código de forma segura en la nube.

Para lograr esto, utilizaremos Git como sistema de control de versiones y GitHub como plataforma de alojamiento de repositorios.

### ¿Qué es Git?
Git es un sistema de control de versiones distribuido que registra los cambios realizados en los archivos del proyecto a lo largo del tiempo. Permite crear "puntos de guardado" (commits) que documentan el estado del código en momentos específicos, facilitando el seguimiento de modificaciones y la colaboración entre desarrolladores.

### ¿Qué es GitHub?
GitHub es una plataforma web que aloja repositorios Git en la nube. Proporciona herramientas adicionales para la gestión de proyectos, revisión de código y trabajo colaborativo. En la Sección de Georreferenciación, todos los proyectos de mapas web se alojarán en GitHub.

### Conceptos básicos
- **Repositorio**: Carpeta del proyecto con historial de cambios
- **Commit**: Guardar cambios con un mensaje descriptivo
- **Push**: Enviar commits locales a GitHub
- **Pull**: Traer cambios desde GitHub a tu máquina
- **Clone**: Descargar una copia del repositorio

### Instalación de Git
Para trabajar con Git, primero debe estar instalado en tu computador:

**Windows**:

- Descargar el instalador desde [git-scm.com](git-scm.com)
- Ejecutar el instalador y seguir las opciones por defecto
- Verificar la instalación abriendo la terminal (CMD o PowerShell) y ejecutando:

```bash:
git --version
```

**Mac**:

   - Abrir la Terminal
   - Ejecutar el siguiente comando:

```bash:
   git --version
```
>Si no está instalado, macOS solicitará automáticamente su instalación

**Linux**:
```bash:
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # Fedora/CentOS
```

### Configuración inicial de Git

Una vez instalado Git, es necesario configurar tu identidad. Esta información se asociará a todos los cambios que realices en el código:

```bash:
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com" 
```
*El email debe ser el mismo que el de tu cuenta de github*

Para verificar que la configuración se realizó correctamente:

```bash:

git config --global --list
```

### Crear una cuenta en GitHub

Si aún no tienes una cuenta en GitHub:

1. Ir a [github.com](https://github.com)
2. Hacer clic en "Sign up"
3. Completar el registro con tu correo electrónico
4. Verificar tu cuenta mediante el correo de confirmación

Una vez creada la cuenta, **solicita al administrador del equipo que te agregue a la organización de la Sección de Georreferenciación en GitHub(AVERIGUAR)**.

**Recursos recomendados:**
- [Tutorial interactivo de Git](https://learngitbranching.js.org/)
- [Guía oficial de GitHub](https://docs.github.com/es/get-started)

---

## 1. Creación del repositorio del proyecto

Todo proyecto de mapa web debe contar con un repositorio de código desde sus primeras etapas de desarrollo. Esto permite mantener trazabilidad de los cambios, facilitar el trabajo colaborativo y contar con un respaldo ordenado del avance del proyecto.

### Crear el repositorio en GitHub

El flujo de trabajo recomendado es crear primero el repositorio en GitHub y luego clonarlo localmente. Esto asegura que todos los integrantes del equipo partan desde una base común.

**Pasos para crear el repositorio:**

1. Iniciar sesión en [GitHub](https://github.com)
2. Hacer clic en el botón **"New"** (o el ícono **+** en la esquina superior derecha y seleccionar **"New repository"**)
3. Configurar el repositorio:
   - **Repository name**: Usar la nomenclatura `webmap-[nombre-proyecto]`, según capítulo Nomenclatura del repositorio.
     - Ejemplo: `webmap-red-geodesica`
   - **Description**: Breve descripción del mapa web
   - **Visibility**: Seleccionar **Private**
   - **Initialize this repository with**:
     - ✅ Marcar **"Add a README file"**
     - ✅ Seleccionar **".gitignore template"** según el stack tecnológico (por ejemplo, Node, Python, etc.)
     - ⬜ License (opcional)
4. Hacer clic en **"Create repository"**

### Nomenclatura del repositorio

El nombre del repositorio debe cumplir con el siguiente formato:
``` bash:
webmap-[nombre-proyecto]
```
**Características**:

- Usar solo minúsculas
- Separar palabras con guiones -
- Evitar caracteres especiales, tildes o espacios
- Ser descriptivo pero conciso

**Ejemplos válidos**:

- `webmap-red-geodesica`
- `webmap-catastro-pavimentos`
- `webmap-interferencias-espaciales`

**Ejemplos NO válidos**:

- `RedGeodesica2025` (mayúsculas)
- `webmap_cruces`(guion bajo)
- `mapa-pavimentos`(falta prefijo webmap)

----
## 2. Clonación del repositorio y carpeta raíz

Una vez creado el repositorio en GitHub, cada desarrollador debe clonarlo en su máquina local para comenzar a trabajar.

### Clonar el repositorio

**Obtener la URL del repositorio**:

- En la página del repositorio en GitHub, hacer clic en el botón verde "Code"
- Copiar la URL HTTPS que aparece (por ejemplo: https://github.com/usuario/webmap-proyecto.git)

### Clonar en tu máquina local:

Abrir la terminal (CMD, PowerShell, Terminal) y navegar hasta la ubicación donde deseas guardar el proyecto. Luego ejecutar:
```bash:
git clone https://github.com/usuario/webmap-proyecto.git
```

Esto creará automáticamente una carpeta con el nombre del repositorio que contiene todos los archivos del proyecto.

#### Ubicación del repositorio

Cada desarrollador puede elegir su propia ubicación local según su sistema operativo y preferencias personales. 

Ejemplos comunes:

- **Windows**: `C:\projects\nombre_del_repositorio\`
- **Mac/Linux**: `~/projects/nombre_del_repositorio/`


> No se exigirá alojar, en la etapa de desarrollo, el espacio de trabajo en alguna ruta del servidor o sharepoint de la Sección de Georreferenciación.

### Verificar la clonación

Para confirmar que el repositorio se clonó correctamente:

**Navegar a la carpeta del proyecto**:

```bash:
   cd webmap-nombreproyecto
```

**Verificar el estado del repositorio**:

```bash:
   git status
```

**Verificar la conexión con GitHub**:

```bash:
   git remote -v
```

Deberías ver la URL del repositorio en GitHub como origen remoto.

-----

## 3. Inicialización del control de versiones

Una vez clonado el repositorio, se debe completar la inicialización básica del proyecto con los archivos fundamentales de documentación y configuración.

### Contenido inicial del repositorio

Después de clonar, el repositorio debe contener como mínimo:

- `README.md`: Archivo de documentación principal del proyecto
- `.gitignore`: Archivo que define qué archivos o carpetas no deben incluirse en el control de versiones
- `brief-proyecto.doc`: Brief del proyecto completado según el template definido

### Completar el README.md

El archivo `README.md` es la carta de presentación del proyecto. Debe actualizarse con información específica del mapa web:

Contenido mínimo del README:
```markdown:

# Webmap - [Nombre del Proyecto]

## Descripción
Breve descripción del mapa web, su propósito y funcionalidad principal.

## Responsables
- **Desarrollador principal**: [Nombre]
- **Equipo**: [Nombres de integrantes]
- **Fecha de inicio**: [DD/MM/AAAA]

## Tecnologías utilizadas
- [Listar tecnologías principales, ej: Leaflet, React, Python, etc.]

## Instalación
[Instrucciones para instalar dependencias - se completará durante el desarrollo]

## Ejecución
[Instrucciones para ejecutar el proyecto localmente - se completará durante el desarrollo]

## Estado del proyecto
En desarrollo
```

### Agregar el Brief del proyecto

El Brief completado debe incluirse en el repositorio para que todo el equipo tenga acceso a la información contextual del proyecto:

1. Copiar el archivo `brief-proyecto.md` completado a la carpeta raíz del repositorio
2. Alternativamente, puede crearse una carpeta `docs/` y almacenarlo allí:
```
   📁 webmap-nombreproyecto/
   ├── 📄 README.md
   ├── 📄 .gitignore
   └── 📁 docs/
       └── 📄 brief-proyecto.doc
```
### Verificar y actualizar el .gitignore

El archivo `.gitignore` evita que archivos innecesarios o sensibles se suban al repositorio. Verifica que incluya las exclusiones apropiadas según el tipo de proyecto.

**Elementos comunes a excluir**:

```bash: 

# Dependencias
node_modules/
venv/
__pycache__/

# Archivos de configuración local
.env
.DS_Store
Thumbs.db

# Archivos de IDE
.vscode/
.idea/
*.swp

# Archivos de compilación
dist/
build/
*.pyc
```
### Realizar el primer commit

Una vez actualizados los archivos iniciales, debes guardar estos cambios en el historial del repositorio:

**1. Agregar los archivos modificados al área de preparación:**

```bash:
   git add README.md brief-proyecto.md
```
O para agregar todos los archivos modificados:

```bash:
   git add .
```
**2. Crear el commit con un mensaje descriptivo:**

```bash:
   git commit -m "docs: inicialización del proyecto con README y brief"
```
**3. Enviar los cambios a GitHub:**

```bash:
   git push origin main
```

   (Nota: la rama principal puede llamarse `main` o `master` según la configuración de GitHub)

### Verificar en GitHub

Accede al repositorio en GitHub y verifica que los archivos actualizados aparezcan correctamente.

---

## 4. Configuración del entorno de desarrollo

Antes de comenzar a programar, cada desarrollador debe configurar su entorno local con las herramientas y dependencias necesarias para trabajar en el proyecto.

### Instalación de dependencias

Dependiendo del stack tecnológico del mapa web, será necesario instalar diferentes herramientas. Esta información debe documentarse en el `README.md` a medida que se defina la arquitectura del proyecto.

**Herramientas comunes:**

- **Node.js y npm**: Para proyectos con JavaScript/React
- **Python y pip**: Para procesamiento de datos geoespaciales
- **GDAL/OGR**: Para manipulación de datos geográficos
- **Servidor local**: Para desarrollo (Live Server, http-server, etc.)

### Variables de entorno

Si el proyecto requiere configuraciones sensibles (claves API, credenciales, etc.), deben manejarse mediante variables de entorno:

1. Crear un archivo `.env` en la raíz del proyecto (este archivo **NO** debe incluirse en Git)
2. Agregar `.env` al archivo `.gitignore`
3. Crear un archivo de ejemplo `.env.example` con la estructura (sin valores reales):

```bash:
API_KEY=tu_clave_aqui
DATABASE_URL=url_de_base_de_datos
```
### Validar el entorno

Antes de comenzar el desarrollo y pogramar, verifica que todo funcione correctamente:

1. Las dependencias se instalaron correctamente
2. El proyecto se puede ejecutar localmente
3. Tienes acceso a recursos externos necesarios (APIs, bases de datos, etc.)
4. Git está configurado y conectado con GitHub

Con estos pasos completados, el proyecto está listo para iniciar la fase de desarrollo. La estructura de carpetas del código, la arquitectura técnica y la organización interna del proyecto se definirán en el capítulo Arquitectura y Estructura de Desarrollo.



