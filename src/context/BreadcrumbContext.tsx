import { createContext, useContext, useState, ReactNode } from "react";

interface BreadcrumbContextType {
  breadcrumb: string[];
  setBreadcrumb: (breadcrumb: string[]) => void;
}

// Buat context
const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

// Provider untuk membungkus aplikasi
export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  return <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>{children}</BreadcrumbContext.Provider>;
}

// Custom hook untuk menggunakan context
export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb harus digunakan dalam BreadcrumbProvider");
  }
  return context;
}
