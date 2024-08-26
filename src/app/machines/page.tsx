import Header from "@/components/header";
import Footer from "@/components/footer";

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

const machines = [
  {
    Name: "INV001",
    Type: "TurboPress",
    Model: "SpectraNova 9",
    Manufacturing_date: "2022-03-12",
    Serial_number: "82317132",
    Location: "Setor B",
  },
  {
    Name: "INV002",
    Type: "EcoMiller",
    Model: "QuantumX-2000",
    Manufacturing_date: "2023-07-27",
    Serial_number: "82317132",
    Location: "Setor B",
  },
  {
    Name: "INV003",
    Type: "FlexiBot",
    Model: "AeroMax 300",
    Manufacturing_date: "2021-09-05",
    Serial_number: "82317132",
    Location: "Setor B",
  },
  {
    Name: "INV004",
    Type: "HydroForge",
    Model: "OptimaFusion 7",
    Manufacturing_date: "2024-01-19",
    Serial_number: "82317132",
    Location: "Setor B",
  },
  {
    Name: "INV005",
    Type: "RapidForm",
    Model: "TitaniumPro XT",
    Manufacturing_date: "2020-11-08",
    Serial_number: "82317132",
    Location: "Setor B",
  },
  {
    Name: "INV006",
    Type: "NanoAssembler",
    Model: "NanoCraft E500",
    Manufacturing_date: "2023-02-23",
    Serial_number: "82317132",
    Location: "Setor B",
  },
  {
    Name: "INV007",
    Type: "PrecisionCutter",
    Model: "VortexUltra 400",
    Manufacturing_date: "2022-08-15",
    Serial_number: "82317132",
    Location: "Setor B",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white justify-start items-center gap-4">
      <Header />
      <div className="w-full max-w-6xl px-6 py-4">
        {/* Título e Botão Adicionar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-gray-800 text-2xl font-semibold">Lista de Máquinas</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">Adicionar Máquina</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Máquina</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes da nova máquina abaixo.
                </DialogDescription>
              </DialogHeader>
              <form className="mt-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="machine-name">Nome da Máquina</Label>
                    <Input id="machine-name" placeholder="INV008" />
                  </div>
                  <div>
                    <Label htmlFor="machine-type">Tipo</Label>
                    <Input id="machine-type" placeholder="Novo Tipo" />
                  </div>
                  <div>
                    <Label htmlFor="machine-model">Modelo</Label>
                    <Input id="machine-model" placeholder="ModeloX" />
                  </div>
                  <div>
                    <Label htmlFor="machine-location">Localização</Label>
                    <Input id="machine-location" placeholder="Setor C" />
                  </div>
                  <div>
                    <Label htmlFor="machine-date">Data de Fabricação</Label>
                    <Input id="machine-date" type="date" />
                  </div>
                </div>
                <DialogFooter className="mt-6 flex justify-end gap-3">
                  <Button type="button" variant="secondary">
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary">
                    Adicionar
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tabela de Máquinas */}
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-white border border-gray-200">
            <TableCaption className="caption-top text-left text-gray-700">Lista de Máquinas.</TableCaption>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="w-[100px]">Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Modelo</TableHead>
                <TableHead>Número de Série</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Data de Fabricação</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {machines.map((machine) => (
                <TableRow key={machine.Name} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-800">{machine.Name}</TableCell>
                  <TableCell className="text-gray-700">{machine.Type}</TableCell>
                  <TableCell className="text-gray-700">{machine.Model}</TableCell>
                  <TableCell className="text-gray-700">{machine.Serial_number}</TableCell>
                  <TableCell className="text-gray-700">{machine.Location}</TableCell>
                  <TableCell className="text-gray-700">{new Date(machine.Manufacturing_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">Editar</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Editar Máquina</DialogTitle>
                          <DialogDescription>
                            Atualize os detalhes da máquina abaixo.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="mt-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <Label htmlFor={`name-${machine.Name}`}>Nome da Máquina</Label>
                              <Input id={`name-${machine.Name}`} defaultValue={machine.Name} />
                            </div>
                            <div>
                              <Label htmlFor={`type-${machine.Name}`}>Tipo</Label>
                              <Input id={`type-${machine.Name}`} defaultValue={machine.Type} />
                            </div>
                            <div>
                              <Label htmlFor={`model-${machine.Name}`}>Modelo</Label>
                              <Input id={`model-${machine.Name}`} defaultValue={machine.Model} />
                            </div>
                            <div>
                              <Label htmlFor={`serial-${machine.Name}`}>Número de Série</Label>
                              <Input id={`serial-${machine.Name}`} defaultValue={machine.Serial_number} />
                            </div>
                            <div>
                              <Label htmlFor={`location-${machine.Name}`}>Localização</Label>
                              <Input id={`location-${machine.Name}`} defaultValue={machine.Location} />
                            </div>
                            <div>
                              <Label htmlFor={`date-${machine.Name}`}>Data de Fabricação</Label>
                              <Input id={`date-${machine.Name}`} type="date" defaultValue={machine.Manufacturing_date} />
                            </div>
                          </div>
                          <DialogFooter className="mt-6 flex justify-end gap-3">
                            <Button type="button" variant="secondary">Cancelar</Button>
                            <div className="flex gap-2">
                              <Button type="button" variant="danger">Excluir</Button>
                              <Button type="submit" variant="primary">Salvar</Button>
                            </div>
                          </DialogFooter>
                        </form>
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
