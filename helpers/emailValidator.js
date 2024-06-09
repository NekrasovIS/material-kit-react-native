// валидация Email
export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email не может быть пустым."
  if (!re.test(email)) return 'Введите корректный Email адрес.'
  return ''
}
