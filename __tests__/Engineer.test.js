const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('should create an instance of Engineer', () => {
    const engineer = new Engineer();
    expect(engineer).toBeInstanceOf(Engineer);
  });

  it('should set name, id, email, and github properties when instantiated', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'john-github');
    expect(engineer.name).toEqual('John');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('john@example.com');
    expect(engineer.github).toEqual('john-github');
  });

  it('should return the github username when getGithub() is called', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'john-github');
    expect(engineer.getGithub()).toEqual('john-github');
  });

  it('should return "Engineer" when getRole() is called', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'john-github');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});