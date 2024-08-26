"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Certifique-se de que isso está correto
import { useState } from "react";

// Componente de carregamento
const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Hook useRouter para navegação

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulação de uma requisição de login
    // Normalmente, você faria uma chamada para um API aqui
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard'); // Navegar para a página de dashboard após o login
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100">
      <Card className="w-[350px] bg-white shadow-lg rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-700">Acessar a plataforma</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" required />
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" required />
              </div>
            </div>
            <CardFooter className="flex justify-center">
              <button 
                type="submit" 
                className={buttonVariants({ variant: "default" })} 
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </CardFooter>
          </form>
          {isLoading && <LoadingSpinner />}
        </CardContent>
      </Card>
    </div>
  );
}
