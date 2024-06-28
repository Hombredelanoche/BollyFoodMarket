"use client";

import { useRouter } from "next/navigation";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import SubmitButton from "@/components/ui/SubmitButton";
import { Formik, FormikValues } from "formik";
import axios from "axios";
import Link from "next/link";
import { object } from "yup";
import { emailValidatorLogin, passwordValidatorLogin } from "@/utils/validator";
import { useEffect, useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: emailValidatorLogin.label("Email"),
  password: passwordValidatorLogin.label("Mot de passe"),
});

const Login = () => {
  const router = useRouter();
  const [isValidated, setIsValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsValidated(true);
  }, []);

  const handleSubmit = async (values: FormikValues, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://127.0.0.1:8000/api/login",
        values,
        {
          headers: {
            "Content-Type": "application/ld+json",
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      if (isValidated) {
        router.push("/");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement", error);
      setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
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
            <Form className="flex flex-col justify-center items-center w-full max-w-3xl bg-white shadow-sm p-10 gap-10 rounded-r-3xl">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Connectez-vous
              </h2>
              {errorMessage && (
                <div className="text-red-500 mb-4">{errorMessage}</div>
              )}

              <section className="flex flex-col items-center gap-5">
                <FormField name="email" label="Email" type="email" />
                <FormField name="password" label="Password" type="password" />
              </section>
              <span className="text-xs">
                Vous n{"'"}avez pas encore de compte ?
                <Link href="/auth/register" className="font-semibold">
                  {" "}
                  Inscrivez-vous !
                </Link>
              </span>
              <span className="text-xs">
                Vous avez oublié votre mot de passe ?
                <Link href="/auth/forgot-password" className="font-semibold">
                  {" "}
                  Cliquez-ici
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

export default Login;
