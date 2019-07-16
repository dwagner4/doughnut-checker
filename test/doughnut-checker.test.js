import { html, fixture, expect } from '@open-wc/testing';

import '../src/doughnut-checker.js';

describe('<doughnut-checker>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<doughnut-checker></doughnut-checker>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <doughnut-checker heading="different heading"></doughnut-checker>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
