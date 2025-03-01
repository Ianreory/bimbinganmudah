import { useEffect } from "react";
import { useBreadcrumb } from "@/context/BreadcrumbContext";
import MainLayout from ".";

export default function DashboardPage() {
  const { setBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumb(["Models", "Genesis"]);
  }, [setBreadcrumb]);

  async function fetchUserData(id: number) {
    const token = localStorage.getItem("authToke"); // Ambil token dari localStorage

    const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Kirim token di header
      },
    });

    const data = await response.json(); // Ambil response sebagai JSON

    console.log("Response:", response);
    console.log("Data:", data); // Ini akan menampilkan message dari middleware

    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data user"); // Ambil pesan error dari middleware
    }

    return data; // Jika sukses, kembalikan data user
  }

  useEffect(() => {
    fetchUserData(1)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Dashboard Transaksi</h1>
      <p>Ini adalah halaman dashboard transaksi.</p>
    </MainLayout>
  );
}
