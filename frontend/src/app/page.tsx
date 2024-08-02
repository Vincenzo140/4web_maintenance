"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBuilding, FaTools, FaUsers, FaInfoCircle } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`p-4 shadow-md flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Image 
          src="/image/logo.png" 
          alt="Logo" 
          width={100} 
          height={100} 
          className="w-16 h-16" 
        />
        <motion.button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </motion.button>
      </header>

      <div className="flex-1 flex">
        <aside className={`w-64 p-6 ${darkMode ? 'bg-gray-800 shadow-md' : 'bg-white shadow-md'}`}>
          <nav className="space-y-4 flex flex-col">
            <a href="#" className={`flex items-center gap-4 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'} p-2 rounded-lg`}>
              <MdDashboard size={24} />
              Dashboard
            </a>
            <a href="#" className={`flex items-center gap-4 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'} p-2 rounded-lg`}>
              <FaBuilding size={24} />
              Ambientes
            </a>
            <a href="#" className={`flex items-center gap-4 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'} p-2 rounded-lg`}>
              <MdForklift size={24} />
              Equipamentos
            </a>
            <a href="#" className={`flex items-center gap-4 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'} p-2 rounded-lg`}>
              <FaTools size={24} />
              Manutenções
            </a>
            <a href="#" className={`flex items-center gap-4 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'} p-2 rounded-lg`}>
              <FaUsers size={24} />
              Usuário
            </a>
            <a href="#" className={`flex items-center gap-4 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'} p-2 rounded-lg`}>
              <FaInfoCircle size={24} />
              Sobre
            </a>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col p-6">
          <h1 className={`text-4xl font-bold uppercase mb-6 ${darkMode ? 'text-gray-100 bg-gray-800' : 'text-gray-900 bg-white'} shadow-md p-4 rounded-lg text-center`}>
            Sistema de Gestão
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className={`p-6 flex gap-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
              <div className="flex-1 flex flex-col">
                <strong className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>2000</strong>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Ambientes</span>
              </div>
              <FaBuilding size={48} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            </div>

            <div className={`p-6 flex gap-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
              <div className="flex-1 flex flex-col">
                <strong className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>2200</strong>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Equipamentos</span>
              </div>
              <MdForklift size={48} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            </div>

            <div className={`p-6 flex gap-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-red-100'}`}>
              <div className="flex-1 flex flex-col">
                <strong className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>2100</strong>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>O.S. Abertas</span>
              </div>
              <GrNotes size={48} className={darkMode ? 'text-red-400' : 'text-red-600'} />
            </div>

            <div className={`p-6 flex gap-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
              <div className="flex-1 flex flex-col">
                <strong className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>21200</strong>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>O.S. Concluídas</span>
              </div>
              <IoMdCheckboxOutline size={48} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            </div>
          </div>
          
          <div className={`shadow-md rounded-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Tabela dos dados</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className={darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}>
                    <th className="border px-4 py-2 text-left">ID</th>
                    <th className="border px-4 py-2 text-left">Nome</th>
                    <th className="border px-4 py-2 text-left">Status</th>
                    <th className="border px-4 py-2 text-left">Data</th>
                    <th className="border px-4 py-2 text-left">CPF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={darkMode ? 'bg-gray-800 even:bg-gray-700' : 'bg-white even:bg-gray-100'}>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-green-400">Operacional</td>
                    <td className="border px-4 py-2">2024-07-01</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr className={darkMode ? 'bg-gray-800 even:bg-gray-700' : 'bg-white even:bg-gray-100'}>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-yellow-400">Manutenção</td>
                    <td className="border px-4 py-2">2024-07-10</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr className={darkMode ? 'bg-gray-800 even:bg-gray-700' : 'bg-white even:bg-gray-100'}>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-yellow-400">Manutenção</td>
                    <td className="border px-4 py-2">2024-07-10</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                  <tr className={darkMode ? 'bg-gray-800 even:bg-gray-700' : 'bg-white even:bg-gray-100'}>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Equipamento</td>
                    <td className="border px-4 py-2 text-yellow-400">Manutenção</td>
                    <td className="border px-4 py-2">2024-07-10</td>
                    <td className="border px-4 py-2">312-123-312-41</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <footer className={`p-6 shadow-md text-center text-sm ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
        Todos os direitos reservados &copy; 2024
      </footer>
    </div>
  );
}
