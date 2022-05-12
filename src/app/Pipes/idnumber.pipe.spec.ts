import { IDNumberPipe } from './idnumber.pipe';

describe('IDNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new IDNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
