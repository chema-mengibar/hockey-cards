import {device} from '.';

describe('MediaQuery function', () => {

  it('should contain width for tablet', () => {
    const expectMedia = '(min-width: 768px) and (max-width: 1023px)'
    const mediaCss = device.tablet_h`color:red;`;
    expect(mediaCss.indexOf(expectMedia)).toBeGreaterThan(0)
  })


  it('should contain width for laptop', () => {
    const expectMedia = 'min-width: 1024px'
    const mediaCss = device.laptop`color:red;`;
    expect(mediaCss.indexOf(expectMedia)).toBeGreaterThan(0)
  })

})