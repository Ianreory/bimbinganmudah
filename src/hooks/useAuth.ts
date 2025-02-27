import { fetchProtectedData, login } from "@/utils/auts";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoginResponse, User } from "@/services/user/typy.types";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const token = Cookies.get("authToken"); 
      if (token) {
        const data = await fetchProtectedData();
        if (data?.user) {
          setUser(data.user);
        }
      }
    };
    loadUser();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const result: LoginResponse = await login(email, password);

    if (result.status === 200 && result.token) {
      Cookies.set("authToken", result.token, { expires: 7 }); 

      setUser({ token: result.token });

      router.push("/dashboard");

      setTimeout(() => window.location.reload(), 500);

      return { status: result.status, message: result.message, token: result.token };
    } else {
      return { status: result.status, message: result.message, token: null };
    }
  };

  return { user, handleLogin };
};
