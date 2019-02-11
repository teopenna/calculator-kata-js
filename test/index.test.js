const addFunction = require('../src/addFunction');

describe('Add Function', () => {
  test('If an empty string is passed shoud return 0', () => {
    // Arrange
    const expectedResul = 0;
    // Act
    const actualResult = addFunction('');
    // Assert
    expect(actualResult).toBe(expectedResul);
  });
});
