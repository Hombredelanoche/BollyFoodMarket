"use client";

import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import SubmitButton from "@/components/ui/SubmitButton";
import { Formik, FormikValues } from "formik";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { object } from "yup";
import { emailValidator, passwordValidator } from "@/security/utils/validator";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: emailValidator.label("Email"),
  password: passwordValidator.label("Mot de passe"),
});

const Login = () => {
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
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="flex justify-center mb-28 mt-16">
        <article>
          <Image
            src="/food-4.jpg"
            alt="photoInscription"
            width={650}
            height={650}
            className="rounded-l-3xl"
          />
        </article>

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
