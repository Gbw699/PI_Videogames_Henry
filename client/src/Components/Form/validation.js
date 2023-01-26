const regexName = /^[A-Z]+[a-z0-9\s]{3,25}$/;
//agragar limite de caracteres a la descripción
const regexDescription = /^[^$%&|<>#]*$/;
const regexReleased = /^\d{4}([-])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regexRating = /^[0-4]\.[0-9]{0,2}$/;

export const validation = (inputs) => {
  const errors = {};
  if (!regexName.test(inputs.name) && inputs.name) {
    errors.name =
      "El nombre debe comenzar en mayúscula, no debe contener caracteres especiales y debe tener entre 3 y 25 caracteres";
  }
  if (!regexDescription.test(inputs.description) && inputs.description) {
    errors.description =
      "La descripción no debe contener caracteres especiales";
  }
  if (!regexReleased.test(inputs.released) && inputs.released) {
    errors.released = 'El formato de la fecha debe ser: "yyyy-mm-dd"';
  }
  if (!regexRating.test(inputs.rating) && inputs.rating) {
    errors.rating =
      "El número de rating puede contener hasta 2 decimales, no puede ser negativo o mayor a 5 y debe contener un punto después del primer dígito";
  }
  return errors;
};
