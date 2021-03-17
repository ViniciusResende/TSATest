export function cep(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 10;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{3})$/, "$1-$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
  // value = value.replace(/^(\d{2})(\d{3})(\d)/, "$1.$2-$3")
  e.currentTarget.value = value;

  return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  // value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  // value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
  e.currentTarget.value = value;

  return e;
}

export function cardNumber(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 19;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{4})$/, "$1 $2");
  value = value.replace(/(?=(\d{4})+(\D))\B/g, " ")
  // value = value.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
  e.currentTarget.value = value;

  return e;
}

export function cardSecurityCode(e: React.FormEvent<HTMLInputElement>){
  e.currentTarget.maxLength = 3;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  e.currentTarget.value = value;

  return e;
}

// export function currency(e: React.FormEvent<HTMLInputElement>){
//   let value = e.currentTarget.value;
//   value = value.replace(/\D/g, "");
//   value = value.replace(/(\d)(\d{2})$/, "$1,$2");
//   value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
//   e.currentTarget.value = value;

//   return e;
// }