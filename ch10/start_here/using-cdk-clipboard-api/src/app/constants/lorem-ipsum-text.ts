const loremIpsumBase = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
  ut aliquip ex ea commodo consequat. Duis aute irure dolor
  in reprehenderit in voluptate velit esse cillum dolore eu
  fugiat nulla pariatur.
`.trim();

const iterations = 20;
export const LOREM_IPSUM_TEXT: string = new Array(iterations)
  .fill(0).reduce((acc) => {
    return `${acc} ${loremIpsumBase}`
  }, loremIpsumBase);
