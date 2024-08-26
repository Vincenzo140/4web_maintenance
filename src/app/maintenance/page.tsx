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

const maintenances = [
  {
    Machine: "Machine Name",
    Type: "Preventiva",
    Responsible: "Equipe 2",
    Used_parts: "Peça 4",
    Description: "Substituição de peça",
    Data: "29/09/2020",
  },
  {
    Machine: "Machine Name",
    Type: "Preventiva",
    Responsible: "Equipe 4",
    Used_parts: "Peça 2",
    Description: "Substituição de peça",
    Data: "29/09/2020",
  },
  {
    Machine: "Machine Name",
    Type: "Preventiva",
    Responsible: "Equipe 3",
    Used_parts: "Peça 9",
    Description: "Substituição de peça",
    Data: "29/09/2020",
  },
  {
    Machine: "Machine Name",
    Type: "Preventiva",
    Responsible: "Equipe 5",
    Used_parts: "Peça 67",
    Description: "Substituição de peça",
    Data: "29/09/2020",
  },
  {
    Machine: "Machine Name",
    Type: "Preventiva",
    Responsible: "Equipe 7",
    Used_parts: "Peça 1",
    Description: "Substituição de peça",
    Data: "29/09/2020",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background dark justify-center items-center gap-2">
      <Header />
      <h1 className="text-white mb-10">Manutenções</h1>
      <div className="w-full max-w-6xl flex flex-row gap-5 justify-end mr-40">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Adicionar</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Detalhes</DialogTitle>
            </DialogHeader>
            <div className="flex flex-row gap-5 justify-center">
              <div>
                <Label>Máquina</Label>
                <Input />
                <Label>Tipo</Label>
                <Input />
                <Label>Responsável</Label>
                <Input />
              </div>
              <div>
                <Label>Peças Usadas</Label>
                <Input />
                <Label>Descrição</Label>
                <Input />
                <Label>Data</Label>
                <Input />
              </div>
            </div>
            <DialogFooter>
              <div className="flex gap-5">
                <Button type="submit">Concluir</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Select>
          <SelectTrigger className="w-[180px] text-white">
            <SelectValue placeholder="Filtrar" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filtros</SelectLabel>
              <SelectItem value="maquinas">Máquinas</SelectItem>
              <SelectItem value="tipo">Tipo</SelectItem>
              <SelectItem value="responsavel">Responsável</SelectItem>
              <SelectItem value="peças">Peças Usadas</SelectItem>
              <SelectItem value="descriçao">Descrição</SelectItem>
              <SelectItem value="data">Data</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className=" w-full flex justify-center mt-5 mb-5">
        <div className="w-full max-w-6xl">
          <Table>
            <TableCaption>Lista de Manutenções.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Máquina</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Peças usadas</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenances.map((maintenance) => (
                <TableRow key={maintenance.Type}>
                  <TableCell className="font-medium">
                    {maintenance.Machine}
                  </TableCell>
                  <TableCell>{maintenance.Type}</TableCell>
                  <TableCell>{maintenance.Responsible}</TableCell>
                  <TableCell>{maintenance.Used_parts}</TableCell>
                  <TableCell>{maintenance.Description}</TableCell>
                  <TableCell>{maintenance.Data}</TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Status</SelectLabel>
                          <SelectItem value="apple">Agendada</SelectItem>
                          <SelectItem value="banana">Em Prograsso</SelectItem>
                          <SelectItem value="blueberry">Concluída</SelectItem>
                          <SelectItem value="grapes">Cancelada</SelectItem>
                          <SelectItem value="pineapple">
                            Aguardando Peças
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
