import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <aside className="w-64 p-6 bg-white/40">
          <Image src={"/image/logo.png"} className="w-full" alt="Logo" width={240} height={240} />
          <nav className="space-y-4 flex flex-col mt-8">
            <a href="" className="flex items-center gap-4 hover:font-semibold">
              <MdDashboard />
              Dashboard
            </a>
            <a href="" className="flex items-center gap-4 hover:font-semibold">
              <FaBuilding />
              Ambientes
            </a>
            <a href="" className="flex items-center gap-4 hover:font-semibold">
              <MdForklift />
              Equipamentos
            </a>
            <a href="" className="flex items-center gap-4 hover:font-semibold">
              <FaTools />
              Manutenções
            </a>
            <a href="" className="flex items-center gap-4 hover:font-semibold">
              <FaUsers />
              Usuário
            </a>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full bg-white/40 p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="bg-orange-200 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">Ambientes</span>
                </div>
                <FaBuilding size={48} />
              </div>

              <div className="bg-blue-200 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">Equipamentos</span>
                </div>
                <MdForklift size={48} />
              </div>

              <div className="bg-red-200 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">O.S. Abertas</span>
                </div>
                <GrNotes size={48} />
              </div>

              <div className="bg-green-200 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold">200</strong>
                  <span className="text-sm text-zinc-500">O.S. Concluídas</span>
                </div>
                <IoMdCheckboxOutline size={48} />
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tabela de Dados</h2>
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Nome</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Data</th>
                    <th className="border px-4 py-2">CPF</th>


                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Equipamento A</td>
                    <td className="border px-4 py-2">Operacional</td>
                    <td className="border px-4 py-2">2024-07-01</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Equipamento B</td>
                    <td className="border px-4 py-2">Manutenção</td>
                    <td className="border px-4 py-2">2024-07-10</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Equipamento C</td>
                    <td className="border px-4 py-2">Inativo</td>
                    <td className="border px-4 py-2">2024-07-20</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-6 bg-white/40 text-center text-red-900 text-sm">
        Todos os direitos reservados &copy; 2024
      </footer>
    </div>
  );
}
