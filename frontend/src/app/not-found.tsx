import Image from "next/image";

const NotFound = () => {
  return (
    <section className="w-full-screen mb-10">
      <div className="flex flex-col items-center mx-auto my-auto gap-10">
        <Image src="/404.jpg" alt="404error" width={700} height={700} />
      </div>
    </section>
  );
};

export default NotFound;
