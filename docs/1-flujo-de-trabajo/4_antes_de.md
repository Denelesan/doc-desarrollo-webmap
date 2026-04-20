---
sidebar_position: 4
---

# Antes de Programar

Antes de iniciar el desarrollo de un nuevo mapa web, es fundamental contar con una comprensión clara del contexto, propósito y alcance del mapa que se desea construir. Este paso busca evitar desarrollos improvisados, reprocesos innecesarios y mapas que crecen sin un objetivo definido.

Para ello, el responsable principal del proyecto deberá crear y/o completar un documento breve de definición inicial, cuyo objetivo es alinear expectativas, facilitar la toma de decisiones durante el desarrollo y servir como referencia común para todos los involucrados.

Este documento se conocerá como el *Brief* del proyecto, el cual, se nombrará de la siguiente forma: `brief-name-web-map.doc`. 
Por ejemplo, para un Mapa Web de la Red Geodésica, el nombre del archivo *Brief* del proyecto será `brief-mapa-red-geodesica.doc`.

> El *template* del *Brief* se encontrará alojado en el repositorio base para la generación de mapas web, el cual se informa en el [Capítulo Preparación del Proyecto](./preparacion#2-código-base-del-proyecto)

Este documento no busca ser extenso ni técnico, sino funcional y claro. La estructura de este documento se compone de las siguientes secciones:

## Partes del *Brief*

### 1. Necesidad

Describe qué problema, requerimiento o situación motiva la creación del mapa web.
Debe responder, de manera simple, a la pregunta:
¿Por qué se necesita este mapa?

Ejemplos:

- Apoyar la toma de decisiones en un proyecto específico.

- Visualizar información que actualmente se encuentra dispersa.

- Entregar información geográfica a otras áreas o a la ciudadanía.

### 2. Objetivo del mapa

Define qué se espera lograr con el mapa web una vez que esté en funcionamiento.
Este objetivo debe ser claro y medible, evitando descripciones demasiado generales.

Ejemplo:

- Permitir la visualización y consulta de proyectos de pavimentación en ejecución.

- Facilitar el análisis territorial de una determinada variable.

### 3. Usuarios objetivo

Identifica quiénes utilizarán el mapa web.
No todos los mapas están pensados para el mismo tipo de usuario, y esta definición influye directamente en el diseño, nivel de detalle y funcionalidades del mapa.

Ejemplos:

- Usuarios internos del servicio.

- Equipos técnicos.

- Autoridades.

- Público general.

### 4. Tipo de información a visualizar

Describe qué tipo de datos geográficos y alfanuméricos serán mostrados en el mapa.
No es necesario detallar capas específicas en esta etapa, pero sí el tipo de información general.

Ejemplos:

- Capas vectoriales (puntos, líneas, polígonos).

- Ortofotos o imágenes base.

- Información histórica o sólo datos vigentes.

- Información sensible o de acceso público.

### 5. Resultado esperado

Define qué debería poder hacer u obtener el usuario al utilizar el mapa.
Este punto ayuda a enfocar el desarrollo en la utilidad final y no solo en lo visual. Responde a la pregunta *¿Cuál es el valor que estamos entregando al realizar este mapa?*

Ejemplos:

- Consultar información específica de un elemento.

- Exportar datos o imágenes.

- Obtener una visión general del estado de un proyecto.

### 6. Alcances y funcionalidades claves

En este apartado puedes dejar claro qué incluirá y qué no, además de especificar las funcionalidades principales que se desarrollarán en la primera versión. Esto también ayuda a evitar que el proyecto se descontrole (*scope creep*).

Ejemplo:

- **Funcionalidades principales (a incluir en la versión 1.0)**:

    - Visualización de capas geográficas seleccionables.

    - Búsqueda por nombre o ubicación.

    - Consulta de información detallada por clic sobre elementos del mapa.

    - Exportación de datos en formato CSV.

- **Lo que no se incluirá en esta versión (futuras etapas)**:

    - Funcionalidad de exportación de imágenes.

    - Implementación de filtros avanzados.

    - Integración con sistemas externos de datos en tiempo real.

- **Restricciones**:

    - El mapa solo mostrará datos históricos, no datos en tiempo real en la versión inicial.

## Observación final

El *Brief* del proyecto debe ser un documento vivo, que puede ajustarse en etapas tempranas del proyecto, pero cualquier cambio relevante en sus definiciones deberá ser consensuado y considerado en el flujo de desarrollo descrito en los siguientes subcapítulos.

