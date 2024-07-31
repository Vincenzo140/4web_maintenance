import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-200">
      <div className="flex-1 flex">
        <aside className="w-64 p-6 bg-gray-800 shadow-md">
          <Image src={"/image/logo.png"} className="w-full" alt="Logo" width={240} height={240} />
          <nav className="space-y-4 flex flex-col mt-8">
            <a href="" className="flex items-center gap-4 text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
              <MdDashboard size={24} />
              Dashboard
            </a>
            <a href="" className="flex items-center gap-4 text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
              <FaBuilding size={24} />
              Ambientes
            </a>
            <a href="" className="flex items-center gap-4 text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
              <MdForklift size={24} />
              Equipamentos
            </a>
            <a href="" className="flex items-center gap-4 text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
              <FaTools size={24} />
              Manutenções
            </a>
            <a href="" className="flex items-center gap-4 text-gray-300 hover:bg-gray-700 p-2 rounded-lg">
              <FaUsers size={24} />
              Usuário
            </a>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col p-6">
          <h1 className="text-4xl font-bold uppercase text-gray-100 mb-6 bg-gray-800 shadow-md p-4 rounded-lg text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-gray-700 p-6 flex gap-4 rounded-lg shadow-md">
              <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-gray-100">200</strong>
                <span className="text-sm text-gray-400">Ambientes</span>
              </div>
              <FaBuilding size={48} className="text-orange-400" />
            </div>

            <div className="bg-gray-700 p-6 flex gap-4 rounded-lg shadow-md">
              <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-gray-100">200</strong>
                <span className="text-sm text-gray-400">Equipamentos</span>
              </div>
              <MdForklift size={48} className="text-blue-400" />
            </div>

            <div className="bg-gray-700 p-6 flex gap-4 rounded-lg shadow-md">
              <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-gray-100">200</strong>
                <span className="text-sm text-gray-400">O.S. Abertas</span>
              </div>
              <GrNotes size={48} className="text-red-400" />
            </div>

            <div className="bg-gray-700 p-6 flex gap-4 rounded-lg shadow-md">
              <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-gray-100">200</strong>
                <span className="text-sm text-gray-400">O.S. Concluídas</span>
              </div>
              <IoMdCheckboxOutline size={48} className="text-green-400" />
            </div>
          </div>
          
          <div className="bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Tabela de Dados</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-gray-300">
                    <th className="border px-4 py-2 text-left">ID</th>
                    <th className="border px-4 py-2 text-left">Nome</th>
                    <th className="border px-4 py-2 text-left">Status</th>
                    <th className="border px-4 py-2 text-left">Data</th>
                    <th className="border px-4 py-2 text-left">CPF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-800 even:bg-gray-700">
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-green-400">Operacional</td>
                    <td className="border px-4 py-2">2024-07-01</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr className="bg-gray-800 even:bg-gray-700">
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-yellow-400">Manutenção</td>
                    <td className="border px-4 py-2">2024-07-10</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr className="bg-gray-800 even:bg-gray-700">
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-red-400">Inativo</td>
                    <td className="border px-4 py-2">2024-07-20</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-6 bg-gray-800 shadow-md text-center text-gray-400 text-sm">
        Todos os direitos reservados &copy; 2024
      </footer>
    </div>
  );
}
