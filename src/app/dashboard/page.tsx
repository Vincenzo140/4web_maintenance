import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-blue-100 to-green-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-8 px-4">
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">
                Manutenções Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-gray-900">12</p>
              <p className="text-gray-600">| Manutenções programadas</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-700">
                Manutenções Realizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-gray-900">45</p>
              <p className="text-gray-600">| Concluídas no último mês</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-indigo-700">
                Máquinas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-gray-900">20</p>
              <p className="text-gray-600">| Em operação</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-red-700">
                Equipes de Manutenção
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-gray-900">5</p>
              <p className="text-gray-600">| Ativas</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
