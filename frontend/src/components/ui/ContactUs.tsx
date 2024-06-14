"use client";

import Button from "@/components/ui/Button";

const ContactUs = () => {
  return (
    <>
      <section className="flex flex-col justify-start gap-7">
        <form action="" method="post">
          <div className="text-xl font-semibold underline">
            <label htmlFor="question">Vous avez une question ?</label>
            <input type="text" placeholder="Entrez votre question" />
          </div>
          <Button type="submit" className="rounded-lg ">
            Envoyez
          </Button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
