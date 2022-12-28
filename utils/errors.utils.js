module.exports.signUpErrors = (err) => {
  let errors = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    dateOfBirth: "",
  };

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe passe doit faite 6 caractères minimum";
  if (err.message.includes("lastName"))
    errors.lastName = "Vous devez saisir un nom";
  if (err.message.includes("firstName"))
    errors.firstName = "Vous devez saisir un prénom";

  if (err.message.includes("firstName" && "length"))
    errors.firstName = "Vous devez saisir un prénom plus long";

  if (err.message.includes("lastName" && "length"))
    errors.firstName = "Vous devez saisir un nom plus long";

  if (err.message.includes("dateOfBirth"))
    errors.dateOfBirth = "Vous devez saisir une date de naissance";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Adresse mail déjà enregistré";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };
  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password")) errors.password = "Password incorrect";

  return errors;
};
