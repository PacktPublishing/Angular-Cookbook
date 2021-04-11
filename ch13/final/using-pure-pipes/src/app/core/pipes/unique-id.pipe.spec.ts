import { UniqueIdPipe } from './unique-id.pipe';

describe('UniqueIdPipe', () => {
  it('create an instance', () => {
    const pipe = new UniqueIdPipe();
    expect(pipe).toBeTruthy();
  });
});
