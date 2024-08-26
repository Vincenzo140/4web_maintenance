"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { IoExit } from "react-icons/io5";
import { FaTachometerAlt, FaCogs, FaWrench, FaWarehouse, FaUsers } from "react-icons/fa";
import { useState } from "react";

export default function Machines() {
  // Estado para os dados da tabela
  const [machines, setMachines] = useState([
    { name: 'Máquina A', model: 'Modelo X', status: 'Operacional', location: 'Setor A', responsible: 'João Silva' },
    { name: 'Máquina B', model: 'Modelo Y', status: 'Manutenção', location: 'Setor B', responsible: 'Maria Souza' }
  ]);

  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    status: '',
    location: '',
    responsible: ''
  });

  // Função para atualizar os dados do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para adicionar uma nova máquina
  const handleAddMachine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMachines([...machines, formData]);
    setFormData({ name: '', model: '', status: '', location: '', responsible: '' });
  };

  return (
    <div className="w-full h-screen flex">
      {/* Menu Lateral */}
      <div className="w-64 h-full bg-gray-900 text-white flex flex-col items-center py-8">
        <span className="text-lg mb-8">Vincenzo Amendola</span>

        <NavigationMenu className="flex flex-col w-full">
          <NavigationMenuList className="flex flex-col space-y-4 w-full">
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-gray-700 flex items-center justify-start pl-4`}
                >
                  <FaTachometerAlt className="mr-2" /> Dashboards
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/machines" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-gray-700 flex items-center justify-start pl-4`}
                >
                  <FaCogs className="mr-2" /> Máquinas
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/maintenance" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-gray-700 flex items-center justify-start pl-4`}
                >
                  <FaWrench className="mr-2" /> Manutenções
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/stock" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-gray-700 flex items-center justify-start pl-4`}
                >
                  <FaWarehouse className="mr-2" /> Estoque
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/teams" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-gray-700 flex items-center justify-start pl-4`}
                >
                  <FaUsers className="mr-2" /> Equipes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/" className="mt-auto mb-4">
          <IoExit style={{ fontSize: "40px", color: "white" }} />
        </Link>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600">
        <h1 className="text-white text-2xl text-center mb-4">Máquinas</h1>

        {/* Tabela de Máquinas */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Máquina
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modelo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localização
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Responsável
                </th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {machine.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {machine.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {machine.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {machine.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {machine.responsible}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Formulário para Adicionar Máquina */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Adicionar Máquina</h2>
          <form onSubmit={handleAddMachine}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Máquina"
                className="p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                placeholder="Modelo"
                className="p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                placeholder="Status"
                className="p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Localização"
                className="p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="responsible"
                value={formData.responsible}
                onChange={handleInputChange}
                placeholder="Responsável"
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
