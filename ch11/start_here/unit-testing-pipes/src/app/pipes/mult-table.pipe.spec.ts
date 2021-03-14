import { MultTablePipe } from './mult-table.pipe';

describe('MultTablePipe', () => {
  let pipe: MultTablePipe;
  beforeEach(() => {
    pipe = new MultTablePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
