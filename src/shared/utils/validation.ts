export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Mínimo 8 caracteres');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Uma letra maiúscula');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Um número');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Um caractere especial');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

export const formatDocument = (document: string): string => {
  const cleaned = document.replace(/\D/g, '');
  
  if (cleaned.length <= 11) {
    // CPF
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  
  // CNPJ
  return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

export const formatCurrency = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  
  if (!cleaned) return '';
  
  const number = parseFloat(cleaned) / 100;
  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

