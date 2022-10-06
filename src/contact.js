export default class Contact {
  constructor(dataContact) {
    this.title = 'CONTACTO';
    this.dir = dataContact.dir;
    this.ig = dataContact.ig;
    this.tel = dataContact.tel;
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('main');
    element.innerHTML =
    `<div class="title">${this.title}</div>
    <div class="info">
      <ul class="contact-items">
        <li class="contact-item"><img src="img/map.svg" alt="map-icon">${this.dir}</li>
        <li class="contact-item"><img src="img/instagram.svg" alt="instagram-icon">@${this.ig}</li>
        <li class="contact-item"><img src="img/phone.svg" alt="phone-icon">${this.tel}</li>
      </ul>
    </div>`;
    return element;
  };
};