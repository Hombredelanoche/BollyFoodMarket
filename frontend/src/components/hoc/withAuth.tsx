import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

declare module "jwt-decode" {
  export default function jwt_decode(token: string): any;
}

const withAuth = (WrappedComponent, allowedRoles) => {
  const ComponentWithAuth = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("jwtToken");

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const roles = decodedToken.roles || [];

          if (roles.some((role) => allowedRoles.includes(role))) {
            setIsAuthenticated(true);
          } else {
            router.push("/unauthorized");
          }
        } catch (error) {
          console.error("Token invalide", error);
          localStorage.removeItem("jwtToken");
          router.push("/auth/login");
        }
      } else {
        router.push("/auth/login");
      }
    }, [router]);

    if (!isAuthenticated) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default withAuth;
