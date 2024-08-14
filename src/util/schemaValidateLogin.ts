interface InputValues {
  email: string;
  password: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
}

export const validateLogin = ({
  email,
  password,
}: InputValues): ValidationErrors => {
  const errors: ValidationErrors = {};
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

  return errors;
};
