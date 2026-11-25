/* Contenido de las páginas legales.

   Cada documento es una lista de secciones; la página arma sola el
   índice lateral y los anclajes a partir de `id` y `titulo`. El
   `contenido` acepta JSX normal: párrafos, listas (<ul>/<ol>), tablas,
   <strong> y enlaces; el estilo lo pone `.hf-legal` en globals.css.

   Ejemplo de una sección:
     { id: "responsable", titulo: "…", contenido: <><p>…</p><ul><li>…</li></ul></> }

   `actualizado` es la fecha de última actualización en formato
   AAAA-MM-DD; si es null no se muestra. Al cambiar un texto,
   actualiza la fecha. */
import type React from "react";

export interface SeccionLegal {
  id: string;
  titulo: string;
  contenido: React.ReactNode;
}

export interface DocumentoLegal {
  titulo: string;
  descripcion: string;
  actualizado: string | null;
  secciones: SeccionLegal[];
}

const SITIO = "este sitio";

export const AVISO_DE_PRIVACIDAD: DocumentoLegal = {
  titulo: "Aviso de privacidad",
  descripcion:
    "Cómo ALFRA Grupo Inmobiliario recaba, usa y protege los datos personales que se comparten a través de su sitio.",
  actualizado: "2026-11-25",
  secciones: [
    {
      id: "responsable",
      titulo: "Responsable del tratamiento",
      contenido: (
        <>
          <p>
            ALFRA Grupo Inmobiliario, con sede en Monterrey, Nuevo León, y sus unidades de negocio ALFRA Asesores
            Inmobiliarios, ALFRA Desarrollo Industrial, ALFRA Desarrollo Residencial y ALFRA Capital (en conjunto,
            «ALFRA»), son responsables del tratamiento de los datos personales que nos proporcionas, de conformidad con
            la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normativa
            aplicable.
          </p>
          <p>
            Para cualquier asunto relacionado con este aviso o con tus datos personales puedes comunicarte con nosotros
            a través del formulario de la página de contacto de {SITIO}.
          </p>
        </>
      ),
    },
    {
      id: "datos",
      titulo: "Datos personales que recabamos",
      contenido: (
        <>
          <p>Cuando nos escribes a través de {SITIO} podemos recabar los siguientes datos:</p>
          <ul>
            <li>Datos de identificación: nombre completo.</li>
            <li>Datos de contacto: correo electrónico y, si decides compartirlo, número de teléfono.</li>
            <li>Datos laborales: nombre de la empresa u organización que representas, en su caso.</li>
            <li>
              La información que incluyas en tu mensaje sobre el proyecto, inmueble o inversión de tu interés.
            </li>
          </ul>
          <p>
            No solicitamos datos personales sensibles. Te pedimos no incluirlos en los mensajes que nos envíes. Si
            durante una relación comercial posterior fuera necesario recabar datos patrimoniales o financieros, te lo
            informaremos y, cuando la ley lo requiera, solicitaremos tu consentimiento expreso.
          </p>
        </>
      ),
    },
    {
      id: "finalidades",
      titulo: "Finalidades del tratamiento",
      contenido: (
        <>
          <p>Usamos tus datos personales para las siguientes finalidades, necesarias para atender tu solicitud:</p>
          <ul>
            <li>Responder tus solicitudes de información y dar seguimiento a tu mensaje.</li>
            <li>Canalizar tu solicitud a la unidad de negocio de ALFRA que atiende el frente de tu interés.</li>
            <li>Preparar propuestas, cotizaciones o reuniones que nos pidas.</li>
            <li>Cumplir con las obligaciones legales que resulten aplicables.</li>
          </ul>
          <p>De manera adicional, y solo si no te opones, podremos usar tus datos para:</p>
          <ul>
            <li>Enviarte información sobre proyectos, servicios y novedades de ALFRA.</li>
            <li>Elaborar estadísticas internas sobre el tipo de solicitudes que recibimos.</li>
          </ul>
          <p>
            Si no deseas que tus datos se usen para estas finalidades adicionales, puedes indicárnoslo en cualquier
            momento a través del formulario de contacto. Tu negativa no afectará la atención de tu solicitud.
          </p>
        </>
      ),
    },
    {
      id: "transferencias",
      titulo: "Transferencias de datos",
      contenido: (
        <>
          <p>
            Tus datos pueden compartirse entre las unidades de negocio de ALFRA para atender tu solicitud, ya que operan
            bajo las mismas políticas de privacidad.
          </p>
          <p>
            Fuera de ello, no vendemos ni cedemos tus datos personales a terceros. Solo podremos transferirlos sin tu
            consentimiento en los casos previstos por la ley, como el cumplimiento de un requerimiento de autoridad
            competente. Los proveedores que nos prestan servicios tecnológicos, como el alojamiento de {SITIO} o el
            correo electrónico, tratan los datos únicamente por nuestra cuenta y bajo obligaciones de confidencialidad.
          </p>
        </>
      ),
    },
    {
      id: "derechos-arco",
      titulo: "Derechos ARCO y revocación del consentimiento",
      contenido: (
        <>
          <p>Como titular de tus datos personales tienes derecho a:</p>
          <ul>
            <li>
              <strong>Acceso:</strong> conocer qué datos tenemos y cómo los usamos.
            </li>
            <li>
              <strong>Rectificación:</strong> corregirlos si son inexactos o están incompletos.
            </li>
            <li>
              <strong>Cancelación:</strong> pedir que los eliminemos cuando consideres que no se usan conforme a la
              ley.
            </li>
            <li>
              <strong>Oposición:</strong> oponerte a su uso para fines específicos.
            </li>
          </ul>
          <p>
            También puedes revocar el consentimiento que nos hayas otorgado o limitar el uso y divulgación de tus datos.
            Para ejercer cualquiera de estos derechos, envíanos tu solicitud a través del formulario de contacto
            indicando tu nombre, el derecho que deseas ejercer, una descripción clara de los datos involucrados y un
            medio para responderte. Podremos pedirte que acredites tu identidad o, en su caso, la de tu representante.
          </p>
          <p>
            Daremos respuesta dentro de los plazos que establece la ley y, si la solicitud resulta procedente, la
            haremos efectiva en los plazos ahí previstos.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      titulo: "Cookies y tecnologías similares",
      contenido: (
        <>
          <p>
            Este sitio no utiliza cookies de publicidad ni de seguimiento. Para
            mostrar mapas interactivos, el navegador puede conectarse con servicios de terceros que reciben datos
            técnicos de la conexión, como la dirección IP y el tipo de navegador, necesarios para entregar el contenido.
          </p>
          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies; algunas funciones del sitio podrían no
            mostrarse correctamente si lo haces.
          </p>
        </>
      ),
    },
    {
      id: "seguridad",
      titulo: "Conservación y seguridad",
      contenido: (
        <p>
          Conservamos tus datos solo durante el tiempo necesario para cumplir las finalidades descritas y las
          obligaciones legales aplicables. Aplicamos medidas de seguridad administrativas, técnicas y físicas para
          protegerlos contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.
        </p>
      ),
    },
    {
      id: "cambios",
      titulo: "Cambios a este aviso",
      contenido: (
        <p>
          Podemos modificar este aviso de privacidad para reflejar cambios legales, en nuestros servicios o en nuestras
          prácticas. Cualquier cambio se publicará en esta misma página, con la fecha de última actualización indicada
          al inicio.
        </p>
      ),
    },
  ],
};

export const TERMINOS_Y_CONDICIONES: DocumentoLegal = {
  titulo: "Términos y condiciones",
  descripcion: "Condiciones de uso del sitio de ALFRA Grupo Inmobiliario.",
  actualizado: "2026-11-25",
  secciones: [
    {
      id: "aceptacion",
      titulo: "Aceptación",
      contenido: (
        <>
          <p>
            Estos términos regulan el acceso y uso de {SITIO}, operado por ALFRA Grupo Inmobiliario («ALFRA»). Al
            navegar en el sitio aceptas estos términos. Si no estás de acuerdo con ellos, te pedimos no utilizarlo.
          </p>
        </>
      ),
    },
    {
      id: "objeto",
      titulo: "Objeto del sitio",
      contenido: (
        <p>
          Este sitio tiene un propósito informativo: presentar a ALFRA y a sus
          unidades de negocio, y ofrecer un medio para solicitar información. No se realizan compras, reservas ni
          contrataciones en línea.
        </p>
      ),
    },
    {
      id: "informacion",
      titulo: "Información publicada",
      contenido: (
        <>
          <p>
            Procuramos que la información del sitio sea correcta y esté actualizada, pero tiene carácter general y puede
            cambiar sin previo aviso. Las descripciones de servicios, proyectos, zonas e imágenes son ilustrativas y no
            constituyen una oferta vinculante.
          </p>
          <p>
            Las condiciones de cualquier operación, como precios, plazos, especificaciones, disponibilidad o
            financiamiento, se establecen únicamente en la propuesta o contrato que se firme con la unidad de negocio
            correspondiente. El contenido del sitio no constituye asesoría legal, fiscal, financiera ni de inversión.
          </p>
        </>
      ),
    },
    {
      id: "uso",
      titulo: "Uso adecuado",
      contenido: (
        <>
          <p>Al usar el sitio te comprometes a:</p>
          <ul>
            <li>Proporcionar información veraz en el formulario de contacto.</li>
            <li>No usar el sitio con fines ilícitos o que afecten los derechos de terceros.</li>
            <li>No intentar acceder sin autorización a sus sistemas ni interferir con su funcionamiento.</li>
            <li>No enviar mensajes masivos, automatizados o con contenido malicioso.</li>
          </ul>
        </>
      ),
    },
    {
      id: "propiedad-intelectual",
      titulo: "Propiedad intelectual",
      contenido: (
        <p>
          Las marcas, nombres comerciales, logotipos, textos, fotografías, diseños y demás contenidos del sitio son
          propiedad de ALFRA o se usan con autorización de sus titulares. No se concede ninguna licencia sobre ellos.
          Queda prohibida su reproducción, distribución o modificación sin autorización previa y por escrito, salvo
          para uso personal y no comercial.
        </p>
      ),
    },
    {
      id: "responsabilidad",
      titulo: "Limitación de responsabilidad",
      contenido: (
        <p>
          ALFRA no garantiza que el sitio esté disponible de forma ininterrumpida o libre de errores, y no será
          responsable por daños derivados de su uso, de la imposibilidad de usarlo o de decisiones tomadas con base
          en la información general que contiene, en la medida en que lo permita la ley aplicable.
        </p>
      ),
    },
    {
      id: "datos-personales",
      titulo: "Datos personales",
      contenido: (
        <p>
          El tratamiento de los datos que nos compartes a través del sitio se rige por nuestro{" "}
          <a href="/aviso-de-privacidad">aviso de privacidad</a>.
        </p>
      ),
    },
    {
      id: "modificaciones",
      titulo: "Modificaciones",
      contenido: (
        <p>
          ALFRA puede modificar estos términos en cualquier momento. La versión vigente es la publicada en esta página,
          con la fecha de última actualización indicada al inicio.
        </p>
      ),
    },
    {
      id: "jurisdiccion",
      titulo: "Legislación aplicable y jurisdicción",
      contenido: (
        <p>
          Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para su interpretación y
          cumplimiento, las partes se someten a los tribunales competentes de la ciudad de Monterrey, Nuevo León,
          renunciando a cualquier otro fuero que pudiera corresponderles.
        </p>
      ),
    },
  ],
};
