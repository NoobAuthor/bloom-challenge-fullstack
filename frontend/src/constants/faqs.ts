import { FAQ } from "../types/brand";

export const FAQS: FAQ[] = [
  {
    question: "¿Cómo puedo publicar un producto para la venta?",
    answer:
      "¡Publicar tu producto es muy fácil! Simplemente haz clic en 'Vender', crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.",
    always: true,
  },
  {
    question: "¿Cómo envío mi artículo después de que alguien lo compra?",
    answer: (settings) => {
      if (settings.brandId === "milu_rugs") {
        return "El producto siempre será retirado a domicilio por nuestro equipo para ser lavado y sanitizado antes de enviarlo al comprador. No se puede enviar por Blue Express.";
      }
      if (
        settings.shippingOptions.includes("home_pickup") &&
        settings.shippingOptions.includes("blue_express")
      ) {
        return "Puedes elegir entre retiro a domicilio o envío por Blue Express. Elige la opción que más te acomode al momento de la venta.";
      }
      if (settings.shippingOptions.includes("home_pickup")) {
        return "El único método de envío es retiro a domicilio por nuestro equipo.";
      }
      return "Consulta las opciones de envío disponibles para tu marca.";
    },
    always: true,
  },
  {
    question: "¿Cómo y cuándo recibo el pago?",
    answer: (settings) => {
      if (
        settings.paymentOptions.includes("coupon") &&
        settings.paymentOptions.includes("bank_transfer")
      ) {
        return "Puedes elegir recibir el 100% del valor de tu venta en un cupón de descuento para compras en el sitio, o el 80% mediante transferencia bancaria. El pago se realiza una vez que el comprador confirma la recepción del producto.";
      }
      if (settings.paymentOptions.includes("bank_transfer")) {
        return "El pago se realiza mediante transferencia bancaria una vez que el comprador confirma la recepción del producto.";
      }
      return "Consulta las opciones de pago disponibles para tu marca.";
    },
    always: true,
  },
  {
    question: "¿Hay cobros adicionales por vender mi producto por acá?",
    answer: (settings) => {
      if (settings.brandId === "milu_rugs") {
        return "Sí, se descuenta un monto fijo de $10.000 CLP por el lavado y sanitizado de la alfombra antes de ser enviada al comprador.";
      }
      if (settings.brandId === "kokoro") {
        return "Si tu producto no está limpio, el costo de la tintorería se descuenta del pago al vendedor tras la revisión en el taller de Kokoro.";
      }
      return "No hay cobros adicionales, salvo los asociados a la logística de envío seleccionada.";
    },
    always: true,
  },
  {
    question: "Política de uso de cupones",
    answer: (settings) =>
      `Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:\n\
      a. Se pueden utilizar únicamente para compras en el sitio web ${settings.siteUrl}.\n\
      b. Tiene un tiempo máximo para ser utilizado de 6 meses.\n\
      c. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.`,
    always: false,
  },
];
