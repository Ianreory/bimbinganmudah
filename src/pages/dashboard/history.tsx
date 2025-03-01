import { useBreadcrumb } from "@/context/BreadcrumbContext";
import MainLayout from ".";
import { useEffect } from "react";

export default function HistoryPage() {
    const { setBreadcrumb } = useBreadcrumb();
  
    useEffect(() => {
      setBreadcrumb(["Information", "History"]);
    }, [setBreadcrumb]);
  
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">Riwayat Transaksi</h1>
      <p>Ini adalah halaman history transaksi.</p>
    </MainLayout>
  );
}
