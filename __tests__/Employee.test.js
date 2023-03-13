const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, and email properties when provided valid arguments', () => {
      // Arrange
      const name = 'John';
      const id = 123;
      const email = 'john@test.com';

      // Act
      const employee = new Employee(name, id, email);

      // Assert
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });
  });

  describe('Methods', () => {
    it('should return the name when getName() is called', () => {
      // Arrange
      const name = 'John';
      const employee = new Employee(name, 123, 'john@test.com');

      // Act
      const result = employee.getName();

      // Assert
      expect(result).toEqual(name);
    });

    it('should return the ID when getId() is called', () => {
      // Arrange
      const id = 123;
      const employee = new Employee('John', id, 'john@test.com');

      // Act
      const result = employee.getId();

      // Assert
      expect(result).toEqual(id);
    });

    it('should return the email when getEmail() is called', () => {
      // Arrange
      const email = 'john@test.com';
      const employee = new Employee('John', 123, email);

      // Act
      const result = employee.getEmail();

      // Assert
      expect(result).toEqual(email);
    });

    it('should return "Employee" when getRole() is called', () => {
      // Arrange
      const employee = new Employee('John', 123, 'john@test.com');

      // Act
      const result = employee.getRole();

      // Assert
      expect(result).toEqual('Employee');
    });
  });
});
