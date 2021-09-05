import En from './en';

describe('English dictionary', () => {
  it('should contain a "title"', () => {
    expect(En).toHaveProperty('title') 
  });
});