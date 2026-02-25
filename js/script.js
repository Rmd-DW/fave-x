/* ==========================================================================
   1. CONFIGURACIÓN Y DATOS
   ========================================================================== */
const docsData = {
    articulos: [
        { 
            title: "Libro Rojo de la Flora Nativa:<br> Región de Coquimbo", 
            desc: "Descripción del estado de conservación.", 
            archivo: "LIBRO ROJO DE LA FLORA NATIVA_COQUIMBO.pdf" 
        },
        { 
            title: "Libro Rojo de la Flora Nativa: <br> Región de Atacama", 
            desc: "Descripción detallada de la región.",
            archivo: "LIBRO ROJO DE LA FLORA NATIVA_ATACAMA.pdf" 
        },   
        { 
            title: "Efecto del riego y la poda <br> en la captura de niebla", 
            desc: "Estudio sobre formaciones xerofíticas.",
            archivo: "Vista de Efecto del riego y la poda en la habilidad de captura de niebla de formaciones xerofíticas chilenas.pdf" 
        }
    ],
    eia: [
        { 
            title: "Resumen ejecutivo", 
            desc: "Estudio de impacto ambiental “Proyecto Volta”.",
            archivo: "Resumen_Ejecutivo_EIA_Volta.pdf" 
        }
    ],
    informes: [
        { 
            title: "Sexto Informe nacional de biodiversidad", 
            desc: "Reporte oficial.",
            archivo: "8-sexto-informe-nacional-de-biodiversidad.pdf" 
        },
        { 
            title: "Catastro de formaciones xerofíticas", 
            desc: "Áreas prioritarias.",
            archivo: "CATASTRO DE FORMACIONES XEROFÍTICAS EN ÁREAS PRIORITARIAS_200.pdf" 
        }
    ],
    normativos: [
        { 
            title: "Ley 20283 - Bosque Nativo", 
            desc: "Ley sobre recuperación y fomento forestal.", 
            archivo: "Ley 20283_LEY SOBRE RECUPERACIÓN DEL BOSQUE NATIVO Y FOMENTO FORESTAL.pdf" 
        }
    ]
};

/* ==========================================================================
   2. REFERENCIAS Y LÓGICA
   ========================================================================== */
const dropdownButton = document.getElementById('dropdownMenuButton');
const dropdownItems = document.querySelectorAll('#docFilterContainer .dropdown-item');
const sectionTitle = document.getElementById('sectionTitle');
const cardsContainer = document.getElementById('cardsContainer');

const folderMap = {
    articulos: "Articulos",
    eia: "EIA",
    informes: "Informes",
    normativos: "Normativos"
};

function renderDocuments(category, categoryName) {
    if (categoryName) sectionTitle.textContent = categoryName;
    cardsContainer.innerHTML = '';
    
    const items = docsData[category];
    const subCarpeta = folderMap[category];

    if (items && items.length > 0) {
        items.forEach(item => {
            const rutaFinal = `./assets/PDF/${subCarpeta}/${item.archivo}`;

            const cardHTML = `
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card h-100 border border-dark border-opacity-10 rounded-2 shadow-sm doc-card bg-white">
                        <div class="card-body p-4 text-center d-flex flex-column align-items-center">
                            <h5 class="fw-bold mb-3 fs-6">${item.title}</h5>
                            <p class="text-dark small mb-4 text-center w-100">${item.desc}</p>
                            
                             <a href="${rutaFinal}" 
                             class="btn-favex btn-green w-100 mt-auto btn-sm text-white py-2" 
                             style="border: none; border-radius: 4px; text-decoration: none;"
                             download="${item.archivo}" 
                             target="_blank">
                             Descargar
                          </a>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += cardHTML;
        });
    } else {
        cardsContainer.innerHTML = '<p class="text-center w-100 py-5">No hay documentos en esta categoría.</p>';
    }
}

/* ==========================================================================
   3. EVENTOS
   ========================================================================== */
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const category = item.getAttribute('data-value');
        const text = item.textContent;

        if(dropdownButton) dropdownButton.textContent = text;
        
        dropdownItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        renderDocuments(category, text);
    });
});

// Carga inicial al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderDocuments('articulos', 'Artículos');
});