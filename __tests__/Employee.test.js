const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('should create an instance of Employee', () => {
    const employee = new Employee();
    expect(employee).toBeInstanceOf(Employee);
  });

  it('should set name, id, and email properties when instantiated', () => {
    const employee = new Employee('John', 1, 'john@example.com');
    expect(employee.name).toEqual('John');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('john@example.com');
  });

  it('should return the name when getName() is called', () => {
    const employee = new Employee('John', 1, 'john@example.com');
    expect(employee.getName()).toEqual('John');
  });

  it('should return the id when getId() is called', () => {
    const employee = new Employee('John', 1, 'john@example.com');
    expect(employee.getId()).toEqual(1);
  });

  it('should return the email when getEmail() is called', () => {
    const employee = new Employee('John', 1, 'john@example.com');
    expect(employee.getEmail()).toEqual('john@example.com');
  });

  it('should return "Employee" when getRole() is called', () => {
    const employee = new Employee('John', 1, 'john@example.com');
    expect(employee.getRole()).toEqual('Employee');
  });
});