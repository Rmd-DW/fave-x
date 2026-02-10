// js/script.js 

const docsData = {
    articulos: [
        { 
            title: "Libro Rojo de la Flora Nativa y de los Sitios Prioritarios: Región de Coquimbo", 
            desc: "Descripción", 
            archivo: "LIBRO ROJO DE LA FLORA NATIVA_COQUIMBO.pdf" 
        },
        { 
            title: "Libro Rojo de la Flora Nativa y de los Sitios Prioritarios: Región de Atacama", 
           desc: "Descripción",
            archivo: "LIBRO ROJO DE LA FLORA NATIVA_ATACAMA.pdf" 
        },   
        { 
            title: "Efecto del riego y la poda en la captura de niebla", 
           desc: "Descripción",
            archivo: "Vista de Efecto del riego y la poda en la habilidad de captura de niebla de formaciones xerofíticas chilenas.pdf" 
        }
    ],
    eia: [
        { 
            title: "Resumen ejecutivo", 
            desc: "Estudio de impacto ambiental “Proyecto Volta - Planta de Hidrógeno y Amoníaco Verde” (Art. 18 letra b - RSEIA)ión",
            archivo: "Resumen_Ejecutivo_EIA_Volta.pdf" 
        }
    ],
    informes: [
        { 
            title: "Sexto Informe nacional de biodiversidad", 
            desc: "Descripción",
            archivo: "8-sexto-informe-nacional-de-biodiversidad.pdf" 
        },
        { 
            title: "Catastro de formaciones xerofíticas en áreas prioritarias", 
            desc: "Descripción",
            archivo: "CATASTRO DE FORMACIONES XEROFÍTICAS EN ÁREAS PRIORITARIAS_200.pdf" 
        }
    ],
    normativos: [
        { 
            title: "Ley 20283 - Ley sobre recuperación del bosque nativo y fomento forestal", 
            desc: "Descripción", 
            archivo: "Ley 20283_LEY SOBRE RECUPERACIÓN DEL BOSQUE NATIVO Y FOMENTO FORESTAL.pdf" 
        }
    ]
};

const filterSelect = document.getElementById('docFilter');
const sectionTitle = document.getElementById('sectionTitle');
const cardsContainer = document.getElementById('cardsContainer');

function renderDocuments(category) {
    const selectedOptionText = filterSelect.options[filterSelect.selectedIndex].text;
    sectionTitle.textContent = selectedOptionText;
    cardsContainer.innerHTML = '';
    
    const items = docsData[category];

    if (items && items.length > 0) {
        items.forEach(item => {
           
            // pdf
            const cardHTML = `
                <div class="col-12 col-md-6">
                    <div class="card h-100 border border-dark border-opacity-25 rounded-2 shadow-sm doc-card bg-white">
                        <div class="card-body p-4 text-center d-flex flex-column align-items-center">
                            <h5 class="fw-bold mb-3 fs-6">${item.title}</h5>
                            <p class="text-dark small mb-4 text-start w-100">${item.desc}</p>
                            
                            <a href="./assets/docs/${item.archivo}" 
                               class="btn btn-sage w-100 mt-auto btn-sm text-white" 
                               download 
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

filterSelect.addEventListener('change', (e) => {
    renderDocuments(e.target.value);
});

// Inicializar
renderDocuments('articulos');