import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  names = ['amarrillo', 'negro', 'rojo', 'morado', 'rosa'];

  render() {
    return html`
      <p> colores con letra O </p>
      <ul>
      ${this.names
        .filter((name) => name.match(/e/i))
        .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}
