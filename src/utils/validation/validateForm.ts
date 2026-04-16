import { validateBirthDate } from "./validateBirthDate";

export function validateRegisterForm(formData: {
  phoneNumber: string;
  surname: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  birthdayDate: string;
  email?: string;
}): { isValid: boolean; errorMessage?: string } {
  // Проверка телефона
  if (
    !formData.phoneNumber ||
    formData.phoneNumber.replace(/\D/g, "").length !== 11
  ) {
    return {
      isValid: false,
      errorMessage: "Введите корректный номер телефона (11 цифр)",
    };
  }

  // Проверка фамилии
  if (
    !formData.surname ||
    !/^[а-яА-ЯёЁa-zA-Z-]{2,}$/.test(formData.surname.trim())
  ) {
    return {
      isValid: false,
      errorMessage: "Фамилия должна содержать минимум 2 буквы",
    };
  }

  // Проверка имени
  if (
    !formData.firstName ||
    !/^[а-яА-ЯёЁa-zA-Z-]{2,}$/.test(formData.firstName.trim())
  ) {
    return {
      isValid: false,
      errorMessage: "Имя должно содержать минимум 2 буквы",
    };
  }

  // Проверка пароля
  if (
    !formData.password ||
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(formData.password)
  ) {
    return {
      isValid: false,
      errorMessage:
        "Пароль должен содержать 6+ символов, включая заглавные, строчные буквы и цифры",
    };
  }

  // Проверка подтверждения пароля
  if (formData.password !== formData.confirmPassword) {
    return {
      isValid: false,
      errorMessage: "Пароли не совпадают",
    };
  }

  // Проверка даты рождения
  const birthDateValidation = validateBirthDate(formData.birthdayDate);
  if (!birthDateValidation.isValid) {
    return {
      isValid: false,
      errorMessage: birthDateValidation.error || "Некорректная дата рождения",
    };
  }

  // Проверка email (если указан)
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return {
      isValid: false,
      errorMessage: "Введите корректный email",
    };
  }

  return { isValid: true };
}
