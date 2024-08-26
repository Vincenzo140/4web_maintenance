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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Teams() {
  const [teams, setTeams] = useState<{ name: string; leader: string; members: number; status: string }[]>([]);
  const [newTeam, setNewTeam] = useState({ name: '', leader: '', members: 0, status: 'Ativa' });

  const handleAddTeam = () => {
    if (newTeam.name && newTeam.leader) {
      setTeams([...teams, newTeam]);
      setNewTeam({ name: '', leader: '', members: 0, status: 'Ativa' });
    }
  };

  const handleRemoveTeam = (index: number) => {
    setTeams(teams.filter((_, i) => i !== index));
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
      <div className="flex-1 p-8 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
        <h1 className="text-white text-2xl text-center mb-4">Equipes</h1>

        {/* Formulário para Adicionar Equipe */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Adicionar Equipe</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome da Equipe</Label>
              <Input
                id="name"
                value={newTeam.name}
                onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="leader">Líder</Label>
              <Input
                id="leader"
                value={newTeam.leader}
                onChange={(e) => setNewTeam({ ...newTeam, leader: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="members">Integrantes</Label>
              <Input
                id="members"
                type="number"
                value={newTeam.members}
                onChange={(e) => setNewTeam({ ...newTeam, members: +e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                value={newTeam.status}
                onChange={(e) => setNewTeam({ ...newTeam, status: e.target.value })}
              />
            </div>
            <Button onClick={handleAddTeam}>Adicionar Equipe</Button>
          </div>
        </div>

        {/* Tabela de Equipes */}
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="text-black">Líder</TableHead>
                <TableHead className="text-black">Equipe</TableHead>
                <TableHead className="text-black">Integrantes</TableHead>
                <TableHead className="text-black">Status</TableHead>
                <TableHead className="text-black">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell className="text-black">{team.name}</TableCell>
                  <TableCell className="text-black">{team.leader}</TableCell>
                  <TableCell className="text-black">{team.members}</TableCell>
                  <TableCell className="text-black">{team.status}</TableCell>
                  <TableCell>
                    <Button variant="destructive" onClick={() => handleRemoveTeam(index)}>
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
