export function cep(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 10;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{3})(\d)/, "$1.$2-$3");
  e.currentTarget.value = value;

  return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
  e.currentTarget.value = value;

  return e;
}