const {html} = require('common-tags');

function Card({title, link, linkText, raised}) {
  return html`
  <div class="${`card__container ${raised ? `card__container--raised` :``}`}">
    <h2 class="card__title">${title}</h2>
    <a class="card__link" href="${link}">${linkText}</a>
  </div>
  `;
}

module.exports = Card;