
// Formatter para exponer números con punto decimal.

export const formatter = new Intl.NumberFormat('es-AR', {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
})