// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
//   const ProtectedComponent: React.FC<P> = (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         router.push("/login");
//       }
//     }, [router]);

//     return <WrappedComponent {...props} />;
//   };

//   return ProtectedComponent;
// };

// export default withAuth;
