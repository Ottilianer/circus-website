function isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function isValidName(name: string): boolean {
  const pattern = /^[A-Za-z]+\s[A-Za-z]+$/;
  return pattern.test(name);
}

export { isValidEmail, isValidName };
