import { fetchProtectedData, login } from "@/utils/auts";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // ✅ Import useRouter
import { LoginResponse, User } from "@/services/user/typy.types";



export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter(); // ✅ Gunakan useRouter untuk navigasi

  useEffect(() => {
    const loadUser = async () => {
      const data = await fetchProtectedData();
      if (data?.user) {
        setUser(data.user);
      }
    };
    loadUser();
  }, []);

  // Definisikan tipe untuk response dari logi

  const handleLogin = async (email: string, password: string) => {
    const result: LoginResponse = await login(email, password);

    if (result.status === 200 && result.token) {
      localStorage.setItem("authToken", result.token);

      // ✅ Set user setelah login berhasil
      setUser({ token: result.token });

      // ✅ Redirect ke /dashboard
      router.push("/dashboard");

      // ✅ Refresh halaman agar data user diperbarui
      setTimeout(() => window.location.reload(), 500);

      return { status: result.status, message: result.message, token: result.token };
    } else {
      return { status: result.status, message: result.message, token: null };
    }
  };

  return { user, handleLogin };
};
