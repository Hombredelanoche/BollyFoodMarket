const unauthorized = () => {
  return (
    <div className="mx-auto">
      Vous n{"'"}avez pas les droit requis pour accèdes à cette page
      veuillez-vous connecter ou contacter l{"'"}admin du site.
    </div>
  );
};

export default unauthorized;
