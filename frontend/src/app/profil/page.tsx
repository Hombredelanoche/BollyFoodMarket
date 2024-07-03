"use client";

import withAuth from "@/components/hoc/withAuth";

const Profil = () => {
  // const [utilisateur, setUtilisateur] = useState([]);
  // });
  // return (
  //   <>
  //     <section className="container-xl p-4 mx-auto bg-white rounded-sm mb-5">
  //       <article className="flex flex-col">
  //         <div className="font-bold text-2xl">Profil</div>
  //         {utilisateur.map((infos) => (
  //           <></>
  //         ))}
  //       </article>
  //     </section>
  //   </>
  // );
};

export default withAuth(Profil, "ROLE_USER" || "ROLE_ADMIN");
