import * as yup from "yup";

/**
 * @ValidatorUtilisateur basé sur l'entity Utilisateur.
 */

export const emailValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .email("Le format de l'adresse mail est invalide.")
  .min(5, "L'adresse mail doit faire plus de 5 caractères.")
  .max(180, "L'adresse mail ne doit pas dépasser les 180 caractères.")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "L'adresse mail doit respecter le format standard."
  );
export const passwordValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
  .max(255, "Le mot de passe ne peut pas contenir plus de 255 caractères.")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
    "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial."
  );

export const cpasswordValidator = yup
  .string()
  .oneOf(
    [yup.ref("password"), null],
    "Les mots de passes doivent être les mêmes."
  )
  .required("Ce Champs ne peut être vide.");

export const nomDeFamilleValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .max(40, "Le nom de famille ne doit pas dépasser 40 caractères.")
  .matches(
    /^[a-zA-ZÀ-ÿ' -]+$/,
    "Le nom de famille ne doit contenir que des lettres, des espaces, des tirets ou des apostrophes."
  );

export const prenomValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .max(40, "Le prénom ne doit pas dépasser 40 caractères.")
  .matches(
    /^[a-zA-ZÀ-ÿ' -]+$/,
    "Le prénom ne doit contenir que des lettres, des espaces, des tirets ou des apostrophes."
  );

export const genreValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .oneOf(["Masculin", "Feminin", "Autres"], "Un genre doit-être choisis");
export const numeroTelephoneValidator = yup
  .string()
  .required("Le numéro de téléphone ne doit pas être vide.")
  .max(30, "Le numéro de téléphone ne doit pas dépasser 30 chiffres.")
  .matches(
    /^\+?[0-9\s\-]+$/,
    "Le numéro de téléphone doit contenir uniquement des chiffres, des espaces et des tirets, et peut commencer par un '+'."
  );

export const roleValidator = yup.array().default(["ROLE_USER"]).required();

// export const actifValidator = yup.boolean().default(true);

// export const dateDeCreationValidator = yup
//   .date()
//   .required("Ce Champs ne peut être vide.")
//   .typeError("La date de création doit être une date valide.");

// export const dateDeModificationValidator = yup
//   .date()
//   .nullable()
//   .typeError("La date de modification doit être une date valide.");
