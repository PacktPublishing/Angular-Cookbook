/// <reference lib="webworker" />

import createUniqueId from '../constants/create-unique-id';

addEventListener('message', ({ data }) => {
  console.log('message received IN worker', data);
  const { index, email } = data;
  let uniqueId;
  for (let i = 0, len = (index + 1) * 100000; i < len; ++i) {
    uniqueId = createUniqueId(50);
  }
  postMessage({ uniqueId, email });
});
