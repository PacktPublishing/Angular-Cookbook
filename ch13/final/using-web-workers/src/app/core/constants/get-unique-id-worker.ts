let UNIQUE_ID_WORKER: Worker = null;

const getUniqueIdWorker = (): Worker => {
  if (typeof Worker !== 'undefined' && UNIQUE_ID_WORKER === null) {
    UNIQUE_ID_WORKER = new Worker(new URL('../workers/id-generator.worker', import.meta.url), {
      type: 'module',
    });
  }
  return UNIQUE_ID_WORKER;
};

export default getUniqueIdWorker;
