"use client";

import FormField from "@/components/ui/FormField";
import {
  cpasswordValidator,
  emailValidator,
  genreValidator,
  nomDeFamilleValidator,
  numeroTelephoneValidator,
  passwordValidator,
  prenomValidator,
  roleValidator,
} from "@/utils/validator";
import Link from "next/link";
import { object } from "yup";
import { Formik, FormikValues } from "formik";
import axios from "axios";
import Form from "@/components/ui/Form";
import FormSelectField from "@/components/ui/FormSelectField";
import SubmitButton from "@/components/ui/SubmitButton";
import { useRouter } from "next/navigation";

const initialValues = {
  nom_de_famille: "",
  prenom: "",
  email: "",
  password: "",
  cpassword: "",
  numero_telephone: "",
  roles: [],
  genre: "",
};

const validationSchema = object({
  nom_de_famille: nomDeFamilleValidator.label("Nom de famille"),
  prenom: prenomValidator.label("Prénom"),
  email: emailValidator.label("Email"),
  password: passwordValidator.label("Mot de passe"),
  cpassword: cpasswordValidator.label("Confirmer votre mot de passe"),
  numero_telephone: numeroTelephoneValidator.label("Votre numéro de téléphone"),
  roles: roleValidator,
  genre: genreValidator.label("Choisissez votre genre."),
});

const options = [
  { value: "Feminin", label: "Femme" },
  { value: "Masculin", label: "Homme" },
  { value: "Autres", label: "Autres" },
];

const Register = () => {
  const route = useRouter();
  const handleSubmit = async (values: FormikValues, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://127.0.0.1:8000/api/register/utilisateurs",
        values,
        {
          headers: {
            "Content-Type": "application/ld+json",
          },
        }
      );
      route.push("/");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="flex justify-center mb-28 mt-16">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col justify-center items-center w-full max-w-3xl bg-white shadow-sm p-10 gap-10 rounded-r-lg">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                S{"'"}inscrire
              </h2>
              <section className="flex flex-col items-center gap-5">
                <FormField name="nom_de_famille" label={"Nom"} />
                <FormField name="prenom" label="Prenom" />
                <FormField name="email" label="Email" type="email" />
                <FormField name="password" label="Password" type="password" />
                <FormField
                  name="cpassword"
                  label="Confirmer le mot de passe"
                  type="password"
                />
                <FormField
                  name="numero_telephone"
                  label="Numéro de téléphone"
                />
                <div className="flex flex-col items-center">
                  <FormSelectField
                    name="genre"
                    label="Genre"
                    type="select"
                    options={options}
                  />
                </div>
              </section>
              <span className="text-xs">
                Vous avez déjà un compte ?
                <Link href="/auth/login" className="font-semibold">
                  {" "}
                  Connectez-vous !
                </Link>
              </span>
              <SubmitButton className="w-60 font-semibold" disabled={undefined}>
                {isSubmitting ? "En cours..." : "Valider"}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Register;
