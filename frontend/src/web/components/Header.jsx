import Link from "@/web/components/ui/Link";

const MenuItem = ({ children, href, ...otherProps }) => {
  <li {...otherProps}>
    <Link styless href={href}>
      {children}
    </Link>
  </li>;
};

const Header = () => {
  return (
    <header className="border-b-2 bg-slate-100">
      <div className="flex md:max-w-3xl mx-auto p-4">
        <div className="text-2xl">
          <Link href="/" styless>
            LOGO
          </Link>
        </div>
        <nav className="ms-auto">
          <ul className="flex h-full gap-4 items-center">
            <MenuItem href="/">Accueil</MenuItem>
            <MenuItem href="/todos/create">Catalogue</MenuItem>
            <MenuItem href="/categories">Qui sommes-nous</MenuItem>
            <MenuItem href="/sign-up">Sign Up</MenuItem>
            <MenuItem href="/sign-in">Sign In</MenuItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;