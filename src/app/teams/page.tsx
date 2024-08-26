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

export default function Teams() {
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
      <div className="flex-1 p-8 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
        <h1 className="text-white text-2xl text-center mb-4">Equipes</h1>

        {/* Tabela de Equipes */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Equipe
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Líder
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Integrantes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Equipe A
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  João Silva
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Ativa
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Equipe B
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Maria Souza
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  4
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Inativa
                </td>
              </tr>
              {/* Adicione mais linhas conforme necessário */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
