export default class Home {
  constructor() {
    this.title = 'SOBRE NOSOTROS';
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('main');
    element.innerHTML =
    `<div class="title">${this.title}</div>
    <div class="info">
      <p>
        Somos una empresa dedicada a la venta de hamburguesas.
        Nuestro negocio, que arrancó como una idea de amigos, terminó convirtiéndose
        en la fuente de ingresos de varias familias, y la opción elegida por los jóvenes
        para matar el bajón.
      </p>
      <p>
        Nos orgullece brindar productos de la mejor calidad. Y eso genera que tengamos los
        MEJORES CLIENTES, siempre apoyandonos y confiando en nosotros.
      </p>
      <p>
        Es por eso que vamos a estar siempre agradecidos, y tratamos de devolverles tanto cariño
        con SORTEOS mes a mes, descuentos y promociones.
      </p>
      <p>
        Próximamente, vamos a contar con un local físico. Tenemos muchísimas ganas de
        conocerlos, y esperamos verlos en la apertura.
      </p>
    </div>`;
    return element;
  };
};
