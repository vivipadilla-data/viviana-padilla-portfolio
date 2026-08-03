const projects = {
    walmart: {
        title: "Resumen Ejecutivo de Ventas Walmart",

        objective:
            "Evaluar el desempeño comercial de tiendas y departamentos para identificar las categorías con mayor participación en las ventas.",

        process:
            "Analicé más de 95,000 registros utilizando consultas SQL, agregaciones, validaciones de calidad y métricas de ventas por metro cuadrado.",

        result:
            "Despensa y Básicos concentró el 15.2% de las ventas, mientras que Comida Fresca presentó el mejor desempeño de ventas por metro cuadrado.",

        insight:
            "La comparación entre participación y ventas por metro cuadrado permitió detectar departamentos importantes tanto por volumen como por eficiencia.",

        tools: ["SQL", "Excel", "Data Analysis"],

        github:
            "https://github.com/vivipadilla-data/resumen-ejecutivo-ventas-walmart"
    },

    funnel: {
        title: "Embudo y Retención de Mercado Libre",

        objective:
            "Analizar el recorrido de compra para identificar la etapa con mayor pérdida de usuarios y evaluar la retención por país.",

        process:
            "Construí un embudo de conversión utilizando SQL y analicé las etapas Visit Product, Select Item, Add to Cart y Purchase.",

        result:
            "La mayor pérdida se produjo entre Select Item y Add to Cart, donde la conversión descendió de 76.9% a 11.0%.",

        insight:
            "La etapa de selección a carrito representa la principal oportunidad para mejorar la experiencia y aumentar las compras.",

        tools: ["SQL", "Funnel Analysis", "Retention"],

        github:
            "https://github.com/vivipadilla-data/analisis-retencion-mercado-libre"
    },

    mobility: {
        title: "Movilidad Urbana y Productividad Económica",

        objective:
            "Explorar la relación entre congestión vehicular, contaminación y productividad económica en distintas ciudades.",

        process:
            "Limpié, transformé y agrupé datos con Python y Pandas. Posteriormente integré información de tráfico y economía mediante un INNER JOIN.",

        result:
            "El análisis no mostró una relación directa y uniforme entre un mayor PIB per cápita y niveles más altos de congestión.",

        insight:
            "La movilidad urbana depende de múltiples factores, por lo que el desempeño económico por sí solo no explica el nivel de congestión.",

        tools: ["Python", "Pandas", "Matplotlib", "Data Cleaning"],

        github:
            "https://github.com/vivipadilla-data/analisis-movilidad-urbana-economia"
    },

    excel: {
        title: "Limpieza y Análisis de Ventas",

        objective:
            "Transformar una base comercial sin estandarizar en información confiable para analizar el desempeño de ventas.",

        process:
            "Corregí formatos, unifiqué fechas, separé categorías, eliminé duplicados y preparé indicadores para comparar México y Colombia.",

        result:
            "El dataset quedó estandarizado y preparado para calcular ventas totales, precio unitario promedio y diferencias entre mercados.",

        insight:
            "Una estructura de datos consistente permite generar reportes comerciales más confiables y fáciles de actualizar.",

        tools: ["Excel", "Data Cleaning", "Reporting"],

        github:
            "https://github.com/vivipadilla-data/limpieza-y-analisis-datos-excel"
    },

    finance: {
        title: "Análisis de Desempeño Financiero",

        objective:
            "Comparar el desempeño financiero por país mediante métricas de ingresos, costos, margen de beneficio y retorno de inversión.",

        process:
            "Utilicé SQL para integrar y resumir información financiera, calcular beneficios, porcentajes de margen y ROI.",

        result:
            "Estados Unidos presentó el ROI más alto con 75.75%, seguido de Australia con 49.16%.",

        insight:
            "La comparación de margen y ROI permitió identificar los mercados con mayor rentabilidad y mejor uso de la inversión.",

        tools: ["SQL", "Financial Metrics", "ROI"],

        github:
            "https://github.com/vivipadilla-data/analisis-desempeno-financiero-sql"
    }
};

const modal = document.querySelector("#project-modal");
const modalContent = modal.querySelector(".modal-content");
const closeButton = modal.querySelector(".modal-close");
const overlay = modal.querySelector(".modal-overlay");

const title = document.querySelector("#modal-title");
const objective = document.querySelector("#modal-objective");
const process = document.querySelector("#modal-process");
const result = document.querySelector("#modal-result");
const insight = document.querySelector("#modal-insight");
const toolsContainer = document.querySelector("#modal-tools");
const githubLink = document.querySelector("#modal-github");

let lastFocusedButton;

function openModal(projectName) {
    const project = projects[projectName];

    if (!project) {
        return;
    }

    title.textContent = project.title;
    objective.textContent = project.objective;
    process.textContent = project.process;
    result.textContent = project.result;
    insight.textContent = project.insight;
    githubLink.href = project.github;

    toolsContainer.innerHTML = "";

    project.tools.forEach((tool) => {
        const toolElement = document.createElement("span");
        toolElement.textContent = tool;
        toolsContainer.appendChild(toolElement);
    });

    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton.focus();
}

function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}

document.querySelectorAll(".open-modal").forEach((button) => {
    button.addEventListener("click", () => {
        lastFocusedButton = button;
        openModal(button.dataset.project);
    });
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});

