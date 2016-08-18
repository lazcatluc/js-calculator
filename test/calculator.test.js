describe('Calculator', function () {

  it('should add 4 and 6 to a total of 10', function () {
    expect(add(4,6)).toEqual(10);
  });
  
  it('should subtract 4 from 6 to a total of 2', function () {
    expect(subtract(6,4)).toEqual(2);
  });
  
  it('should multiply 4 and 6 to a total of 24', function () {
    expect(multiply(6,4)).toEqual(24);
  });
  
  it('should divide 6 by 3 to a total of 2', function () {
    expect(divide(6,3)).toEqual(2);
  });
});