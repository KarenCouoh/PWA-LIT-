@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Amarrillo', 'rojo', 'morado', 'negro', 'blanco'])

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
