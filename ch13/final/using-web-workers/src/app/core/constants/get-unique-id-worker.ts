let UNIQUE_ID_WORKER: Worker = null;

const getUniqueIdWorker = (): Worker => {
  if (typeof Worker !== 'undefined' && UNIQUE_ID_WORKER === null) {
    UNIQUE_ID_WORKER = new Worker('../workers/id-generator.worker', {
      type: 'module',
    });
  }
  return UNIQUE_ID_WORKER;
};

export default getUniqueIdWorker;
