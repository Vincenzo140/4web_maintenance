"use client"

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
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const mockData = {
  machines: {
    operational: 50,
    underMaintenance: 15,
    total: 65,
  },
  maintenance: {
    completed: 120,
    pending: 30,
    total: 150,
  },
  teams: {
    active: 10,
    inactive: 2,
    total: 12,
  },
};

const machineData = {
  labels: ['Operacional', 'Em Manutenção'],
  datasets: [
    {
      label: 'Máquinas',
      data: [mockData.machines.operational, mockData.machines.underMaintenance],
      backgroundColor: ['#4caf50', '#f44336'],
    },
  ],
};

const maintenanceData = {
  labels: ['Concluídas', 'Pendentes'],
  datasets: [
    {
      label: 'Manutenções',
      data: [mockData.maintenance.completed, mockData.maintenance.pending],
      backgroundColor: ['#2196f3', '#ff9800'],
    },
  ],
};

const teamsData = {
  labels: ['Ativas', 'Inativas'],
  datasets: [
    {
      label: 'Equipes',
      data: [mockData.teams.active, mockData.teams.inactive],
      backgroundColor: ['#673ab7', '#9e9e9e'],
    },
  ],
};

export default function Dashboard() {
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
      <div className="flex-1 p-8 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600">
        <h1 className="text-white text-2xl text-center mb-4">Dashboard</h1>

        {/* Gráficos e Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gráfico de Máquinas */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Máquinas</h2>
            <Bar data={machineData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Distribuição de Máquinas' } }}} />
            <div className="mt-4 text-center">
              <p>Total de Máquinas: {mockData.machines.total}</p>
            </div>
          </div>

          {/* Gráfico de Manutenções */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Manutenções</h2>
            <Bar data={maintenanceData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Status de Manutenções' } }}} />
            <div className="mt-4 text-center">
              <p>Total de Manutenções: {mockData.maintenance.total}</p>
            </div>
          </div>

          {/* Gráfico de Equipes */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Equipes</h2>
            <Bar data={teamsData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Status das Equipes' } }}} />
            <div className="mt-4 text-center">
              <p>Total de Equipes: {mockData.teams.total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
