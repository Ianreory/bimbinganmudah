import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { registerUser } from "@/utils/auts";
import { registerSchema } from "@/services/user/validasi";
import { toast } from "sonner"; // Pastikan Sonner diimpor

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setName] = useState("");
  const [error, setError] = useState<{ email?: string; password?: string; nama?: string; general?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({});

    const result = registerSchema.safeParse({ email, password, nama });

    if (!result.success) {
      const fieldErrors: { email?: string; password?: string; nama?: string } = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0] === "email") fieldErrors.email = issue.message;
        if (issue.path[0] === "password") fieldErrors.password = issue.message;
        if (issue.path[0] === "nama") fieldErrors.nama = issue.message;
      });

      setError(fieldErrors);
      return;
    }

    try {
      const response = await registerUser(email, password, nama);

      // Pastikan response memiliki struktur yang benar
      if (response.status !== 201) {
        setError({ general: response.message });

        // Menampilkan toast error
        toast.error("Registrasi Gagal", {
          description: response.message,
        });
        return;
      }

      // Jika berhasil, tampilkan toast sukses dan arahkan ke login
      toast.success("Registrasi Berhasil", {
        description: "Silakan login untuk melanjutkan.",
      });

      // Redirect ke halaman login setelah sukses
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500); // Delay agar user sempat melihat toast
    } catch (error: any) {
      console.error("Error saat registrasi:", error.message);

      // Menampilkan toast error saat terjadi exception
      toast.error("Terjadi Kesalahan", {
        description: "Gagal mendaftar. Silakan coba lagi.",
      });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Create an account.</h1>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input id="nama" type="nama" placeholder="nama lengkap" value={nama} onChange={(e) => setName(e.target.value)} required />
              {error.nama && <p className="text-red-500 text-sm">{error.nama}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
        </div>
      </form>
      <div className="text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
