import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-seached.js";

describe("nasaSeached test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-seached
        title="title"
      ></nasa-seached>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
