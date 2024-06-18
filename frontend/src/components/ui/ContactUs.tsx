"use client";

import Button from "@/components/ui/Button";

const ContactUs = () => {
  return (
    <>
      <section className="border-">
        <form
          method="post"
          className="flex flex-col justify-between gap-5 items-end"
        >
          <h2 className="underline text-xl font-semibold">
            Abonnez vous à notre NewsLetter !
          </h2>
          <input
            type="email"
            placeholder="Entrez votre mail"
            className="p-3 rounded-md w-96"
          />

          <Button>Suivez-nous !</Button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
