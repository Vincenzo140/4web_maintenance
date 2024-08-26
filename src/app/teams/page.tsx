import Footer from "@/components/footer";
import Header from "@/components/header";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const teams = [
  {
    Name: "Equipe 1",
    Collaborators: "3",
    Specialty: "Mecânica",
    Tasks: "2 tarefas",
  },
  {
    Name: "Equipe 2",
    Collaborators: "2",
    Specialty: "Elétrica",
    Tasks: "5 tarefas",
  },
  {
    Name: "Equipe 3",
    Collaborators: "4",
    Specialty: "Hidráulica",
    Tasks: "10 tarefas",
  },
  {
    Name: "Equipe 4",
    Collaborators: "3",
    Specialty: "Pneumática",
    Tasks: "7 tarefas",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background dark justify-center items-center gap-2">
      <Header />
      <h1 className="text-white mb-10">Equipes</h1>
      <div className="w-full max-w-6xl flex flex-row gap-5 justify-end mr-40">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Adicionar Equipe</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[350px]">
            <DialogHeader>
              <DialogTitle>Detalhes</DialogTitle>
            </DialogHeader>
            <div className="flex flex-row gap-5 justify-center">
              <div>
                <Label>Nome da Equipe</Label>
                <Input />
                <Label>Colaboradores</Label>
                <Input />
                <Label>Especialidade</Label>
                <Input />
                <Label>Tarefas</Label>
                <Input />
              </div>
            </div>
            <DialogFooter>
              <div className="flex gap-5">
                <Button type="submit">Adicionar</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" w-full flex justify-center mt-5 mb-5">
        <div className="w-full max-w-6xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome da Equipe</TableHead>
                <TableHead>Colaboradores</TableHead>
                <TableHead>Especialidade</TableHead>
                <TableHead>Tarefas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team) => (
                <TableRow key={team.Name}>
                  <TableCell className="font-medium">
                    {team.Name}
                  </TableCell>
                  <TableCell>{team.Collaborators}</TableCell>
                  <TableCell>{team.Specialty}</TableCell>
                  <TableCell>{team.Tasks}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Editar</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[350px]">
                        <DialogHeader>
                          <DialogTitle>Detalhes</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-row gap-5 justify-center">
                          <div>
                            <Label>Nome da máquina</Label>
                            <Input placeholder={team.Name} />
                            <Label>Tipo</Label>
                            <Input placeholder={team.Collaborators} />
                            <Label>Modelo</Label>
                            <Input placeholder={team.Specialty} />
                            <Label>Nome da máquina</Label>
                            <Input placeholder={team.Tasks} />
                          </div>
                        </div>

                        <DialogFooter>
                          <div className="flex gap-5">
                            <Button type="submit">Excluir</Button>
                            <Button type="submit">Salvar</Button>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
