import { useState, ChangeEvent } from "react";

interface FormValues {
  [key: string]: unknown;
}

export const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChange] as const;
};
