# **5. Integración completa: Entrega automatizada de un incremento con nuevas historias, sprint y trazabilidad CMMI**

**Contexto**:  
El equipo ha completado la Iteración 1 y ahora debe planificar e implementar la **Iteración 2**, incorporando **nuevas funcionalidades** solicitadas por los usuarios. Esta iteración debe seguir el flujo completo de ingeniería de software definido en CMMI: desde la captura de requisitos hasta la entrega automatizada del artefacto, incluyendo pruebas, revisión de código y métricas de calidad.

---

**Pasos**:

1. **Ampliar el backlog con nuevas funcionalidades**:
   - Crea una nueva **Epic**: “Mejoras de Usabilidad en TaskFlow”.
   - Dentro, añade una **Feature**: “Notificaciones y Recordatorios”.
   - Agrega **2 nuevos Requisitos** (usando la plantilla CMMI personalizada del Ejercicio 2):
     - *“El sistema debe enviar una notificación cuando una tarea se acerque a su fecha límite”*
     - *“El sistema debe permitir al usuario configurar su zona horaria y preferencias de notificación”*
   - Asigna **2–3 Tareas** por requisito (ej.: “Diseñar UI de preferencias”, “Implementar servicio de notificaciones”, “Escribir pruebas de integración”).

2. **Planificar la Iteración 2**:
   - Crea una nueva **Iteración** llamada **“Iteración 2”** (duración: 1 semana).
   - Define la **capacidad del equipo** (ej.: 60h).
   - Asigna los **nuevos requisitos** a la Iteración 2.
   - Actualiza el **dashboard** del equipo para incluir métricas de la Iteración 2 (Burndown, CFD, etc.).

3. **Desarrollo con trazabilidad y control de calidad**:
   - Crea una rama de funcionalidad (ej.: `feature/notificaciones`) desde `develop`.
   - Realiza commits que **referencien los IDs de los nuevos Requisitos** (ej.: `AB#45`, `AB#46`).
   - Implementa código mínimo funcional (puede ser mock o lógica básica).
   - Asegúrate de incluir **pruebas unitarias** que cubran la nueva funcionalidad.

4. **Pull Request y validación automatizada**:
   - Abre un **Pull Request** hacia `develop`.
   - Verifica que se ejecute el **pipeline de CI** (del Ejercicio 4.2) y que pase todas las pruebas.
   - Solicita revisión, resuelve comentarios y obtén al menos **1 aprobación**.
   - Confirma que el PR **no se pueda completar** sin cumplir políticas (work item vinculado, pruebas pasadas, aprobación).

5. **Entrega continua y publicación**:
   - Fusiona el PR en `develop`, luego crea un PR desde `develop` a `main` (simulando release).
   - Al hacer merge en `main`, activa el **pipeline de CD** (del Ejercicio 4.3).
   - Verifica que:
     - Se genere un nuevo **artefacto** en `taskflow-packages`.
     - Se registre un **despliegue** en el entorno “QA”.
     - Los **work items** de los nuevos requisitos muestren enlaces al commit, PR, artefacto y despliegue.

6. **Cierre del ciclo CMMI**:
   - Cambia el estado de los nuevos requisitos a **“En Revisión”**, luego a **“Closed”** tras verificar el despliegue.
   - Actualiza el **dashboard** para reflejar el progreso acumulado (Iteración 1 + 2).
   - Documenta brevemente en el work item de la Epic: *“Iteración 2 entregada con trazabilidad completa CMMI”*.

---

**Resultado esperado**:  
Una **Iteración 2 completa** planificada, desarrollada y entregada en menos de 1 hora de simulación práctica, que demuestra dominio de:
- Gestión de requisitos CMMI (Epic → Feature → Requirement → Task),
- Planificación de sprints y métricas,
- Control de versiones con políticas de PR,
- Integración y entrega continua (CI/CD),
- Trazabilidad bidireccional entre código, pruebas, artefactos y work items,
- Cumplimiento del proceso CMMI en un flujo de desarrollo realista.
