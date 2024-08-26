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

        {/* Conteúdo do Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Coloque gráficos, estatísticas ou qualquer conteúdo desejado */}
          <p>Bem-vindo ao Dashboard!</p>
        </div>
      </div>
    </div>
  );
}
