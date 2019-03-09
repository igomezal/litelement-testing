import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/LitElementTesting/litelement-testing.js';

describe('<litelement-testing>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<litelement-testing></litelement-testing>');
    expect(el.shadowRoot.querySelector('h1').innerHTML).to.equal('<!---->My Example<!---->');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <litelement-testing .header=${'different'}></litelement-testing>
    `);
    expect(el.header).to.equal('different');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <litelement-testing .header=${'different'}></litelement-testing>
    `);
    expect(el.header).to.equal('different');
  });
});
