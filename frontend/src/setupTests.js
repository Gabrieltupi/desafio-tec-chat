import '@testing-library/jest-dom';

beforeAll(() => {
  console.log("rodando aqui no seutoptestes")
  Element.prototype.scrollIntoView = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});


