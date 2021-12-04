
// Helpers: Validações
const validCpf = (cpf: string) => {
    cpf = cpf.replace(/[^0-9]/g, '');
    if (cpf.split('').every(char => char === cpf[0])) return false;
    let sum;
    let remainder;
    sum = 0;
    if (cpf == '00000000000') return false;
  
    for (let i = 1; i <= 9; i++)
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
  
    if (remainder == 10 || remainder == 11) remainder = 0;
    if (remainder != parseInt(cpf.substring(9, 10))) return false;
  
    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
  
    if (remainder == 10 || remainder == 11) remainder = 0;
    if (remainder != parseInt(cpf.substring(10, 11))) return false;
    return true;
  };
  
  const validCnpj = (cnpj: string) => {
    cnpj = cnpj.toString();
    cnpj = cnpj.replace(/[^0-9]/g, '');
  
    if (cnpj == '') return false;
    if (cnpj.length != 14) return false;
    if (
      cnpj == '00000000000000' ||
      cnpj == '11111111111111' ||
      cnpj == '22222222222222' ||
      cnpj == '33333333333333' ||
      cnpj == '44444444444444' ||
      cnpj == '55555555555555' ||
      cnpj == '66666666666666' ||
      cnpj == '77777777777777' ||
      cnpj == '88888888888888' ||
      cnpj == '99999999999999'
    )
      return false;
  
    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    const digits = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += +numbers.charAt(size - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== +digits.charAt(0)) return false;
  
    size += 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += +numbers.charAt(size - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== +digits.charAt(1)) return false;
  
    return true;
  };
  