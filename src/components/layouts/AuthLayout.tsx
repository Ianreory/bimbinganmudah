import React from "react";
import { Toaster } from "../ui/sonner";


type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen  ">
      {children}
      <Toaster />
    </div>
  );
};

export default AuthLayout;
