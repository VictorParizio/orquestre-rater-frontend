interface InputValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const validateSignup = ({
  fullName,
  email,
  password,
  confirmPassword,
}: InputValues): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (fullName.trim() === "") {
    errors.fullName = "O campo Nome é obrigatório";
  } else if (fullName.length < 3) {
    errors.fullName = "O Nome deve conter ao menos 3 dígitos";
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.trim() === "") {
    errors.email = "O campo E-mail é obrigatório";
  } else if (!emailRegex.test(email)) {
    errors.email = "Formato de email inválido";
  }

  if (password.trim() === "") {
    errors.password = "O campo Senha é obrigatório";
  } else if (password.length < 8) {
    errors.password = "Senha deve conter ao menos 8 dígitos";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Confirme a senha corretamente.";
  }

  return errors;
};
