
document.addEventListener("DOMContentLoaded", function() {
    
    
    const formulario = document.getElementById("form-pedido");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Evitamos que la página se recargue por defecto
            evento.preventDefault();

           
            const tamanoSelect = document.getElementById("tamano");
            const tamano = tamanoSelect.options[tamanoSelect.selectedIndex].text;
            
            const nombre = document.getElementById("nombre").value;
            const telefono = document.getElementById("telefono").value;
            const entregaSelect = document.getElementById("entrega");
            const entrega = entregaSelect.options[entregaSelect.selectedIndex].text;
            const zona = document.getElementById("zona").value;
            const observaciones = document.getElementById("observaciones").value;

           
            const toppingsSeleccionados = [];
            const checkboxesToppings = document.querySelectorAll('input[name="toppings"]:checked');
            
            checkboxesToppings.forEach(function(checkbox) {
                // Buscamos la etiqueta asociada para obtener el nombre legible del topping
                const label = document.querySelector(`label[for="${checkbox.id}"]`);
                if (label) {
                    toppingsSeleccionados.push(label.textContent);
                }
            });

            
            let mensaje = `¡Hola, Fresura Bogotá!  Quisiera hacer el siguiente pedido:\n\n`;
            mensaje += ` *Nombre:* ${nombre}\n`;
            mensaje += ` *Teléfono:* ${telefono}\n`;
            mensaje += ` *Tamaño:* ${tamano}\n`;
            
            if (toppingsSeleccionados.length > 0) {
                mensaje += ` *Toppings:* ${toppingsSeleccionados.join(", ")}\n`;
            } else {
                mensaje += ` *Toppings:* Ninguno\n`;
            }

            mensaje += ` *Entrega:* ${entrega}`;
            if (zona) {
                mensaje += ` (${zona})`;
            }
            mensaje += `\n`;

            if (observaciones) {
                mensaje += `📝 *Observaciones:* ${observaciones}\n`;
            }

            mensaje += `\n¡Quedo atento(a) para confirmar precio y disponibilidad!`;

            
            const numeroWhatsApp = "573178341120"; 

            
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

            
            window.open(urlWhatsApp, "_blank");
        });
    }
});