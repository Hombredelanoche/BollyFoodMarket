import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <section className="flex justify-center mb-28 mt-16">
        <article>
          <Image
            src="/food-1.jpg"
            alt="photoInscription"
            width={800}
            height={850}
            className="rounded-l-3xl"
          />
        </article>
        <form className="flex flex-col justify-center items-center w-full max-w-3xl bg-white shadow-sm p-10 gap-10 rounded-r-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            S{"'"}inscrire
          </h2>
          <section className="flex flex-col items-center gap-5">
            <FormField name="nom" label={"Nom"} />
            <FormField name="prenom" label={"Prenom"} />
            <FormField name="email" label={"Email"} type="email" />
            <FormField name="password" label={"Password"} />
            <FormField name="verifPassword" label={"VerifPassword"} />
            <FormField name="phone" label={"Numéro de téléphone"} />
            <FormField name="genre" label={"Gender"} type="select" />
          </section>
          <span className="text-xs">
            Vous avez déjà un compte ?
            <Link href="/auth/login" className="font-semibold">
              {" "}
              Connectez-vous !
            </Link>
          </span>
          <Button type="submit" className="w-80">
            Valider
          </Button>
        </form>
      </section>
    </>
  );
};

export default Register;
