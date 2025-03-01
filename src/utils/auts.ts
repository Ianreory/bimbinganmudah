export const login = async (email: string, password: string) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });


  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("authToken", data.token); // ✅ Sesuai dengan backend
    console.log("Login berhasil!");
    return { message: data.message, status: data.status, token: data.token }; // ✅ Konsisten
  } else {
    return { message: data.message, status: data.status, token: null }; // ✅ Konsisten dengan response ok
  }
};

export const registerUser = async (email: string, password: string, nama: string) => {
  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, nama }),
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Terjadi kesalahan saat registrasi");
  }
};

export const fetchProtectedData = async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return null;
  }

  try {
    const response = await fetch("/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      console.error("Gagal mengambil data pengguna");
      return null;
    }

    const data = await response.json();
    return data ?? {}; // Pastikan selalu return objek
  } catch (error) {
    console.error("Error saat mengambil data:", error);
    return null;
  }
};
