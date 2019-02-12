const addFunction = require('../src/addFunction');

describe('Add Function', () => {
  test('If an empty string is passed should return 0', () => {
    // Arrange
    const expectedResul = 0;
    // Act
    const actualResult = addFunction('');
    // Assert
    expect(actualResult).toBe(expectedResul);
  });

  test('If argument is not a number should throw an error', () => {
    // Arrange
    // Act
    const addString = () => {
      addFunction('abc');
    };
    // Assert
    expect(addString).toThrow(/number/);
  });

  test('If a single number is passed should return same number', () => {
    // Arrange
    const expectedResul = 2;
    // Act
    const actualResult = addFunction('2');
    // Assert
    expect(actualResult).toEqual(expectedResul);
  });

  test('Comma separated numbers should be added', () => {
    // Arrange
    const expectedResul = 7;
    // Act
    const actualResult = addFunction('3,4');
    // Assert
    expect(actualResult).toEqual(expectedResul);
  });

  test('Comma separated or line separated numbers should be added', () => {
    // Arrange
    const expectedResul = 6;
    // Act
    const actualResult = addFunction('1\n2,3');
    // Assert
    expect(actualResult).toEqual(expectedResul);
  });

  test('Between each number a single separator should be used', () => {
    // Arrange
    // Act
    const addWithMultipleSeparators = () => {
      addFunction('1,\n');
    };
    // Assert
    expect(addWithMultipleSeparators).toThrow(/number/);
  });
});
