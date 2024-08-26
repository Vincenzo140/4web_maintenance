import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Declaração das interfaces para os itens de estoque e movimentos
interface StockItem {
  Part_name: string;
  Code: string;
  Supplier: string;
  Quantity: string;
  Unit_value: string;
}

interface Movement {
  Part_name: string;
  Code: string;
  Type: string;
  Data: string;
  Quantity: string;
}

// Dados de exemplo para o estoque e movimentos
const stock: StockItem[] = [
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Supplier: "AndrePeças Distribuidora",
    Quantity: "100",
    Unit_value: "R$ 15,00",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Supplier: "AndrePeças Distribuidora",
    Quantity: "100",
    Unit_value: "R$ 15,00",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Supplier: "AndrePeças Distribuidora",
    Quantity: "100",
    Unit_value: "R$ 15,00",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Supplier: "AndrePeças Distribuidora",
    Quantity: "100",
    Unit_value: "R$ 15,00",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Supplier: "AndrePeças Distribuidora",
    Quantity: "100",
    Unit_value: "R$ 15,00",
  },
];

const movements: Movement[] = [
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Type: "Saída",
    Data: "11/09/2004",
    Quantity: "2",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Type: "Saída",
    Data: "11/09/2004",
    Quantity: "2",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Type: "Saída",
    Data: "11/09/2004",
    Quantity: "2",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Type: "Saída",
    Data: "11/09/2004",
    Quantity: "2",
  },
  {
    Part_name: "Parafuso Supimpa 3000",
    Code: "890",
    Type: "Saída",
    Data: "11/09/2004",
    Quantity: "2",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background dark justify-center items-center gap-2">
      <Header />
      <h1 className="text-white mb-10">Controle de Estoque</h1>
      <section className="w-full flex flex-row justify-center gap-10 mb-10">
        <div>
          <Card className="w-[500px]">
            <CardHeader>
              <CardTitle>Cadastrar Peças</CardTitle>
              <CardDescription>
                Adicione novas peças ao estoque.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label>Nome</Label>
                    <Input id="name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Código da Peça</Label>
                    <Input id="code" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Fornecedor</Label>
                    <Input id="supplier" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Quantidade</Label>
                    <Input id="quantity" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Valor Unitário</Label>
                    <Input id="unitValue" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Adicionar</Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[500px]">
            <CardHeader>
              <CardTitle>Registrar Movimentação</CardTitle>
              <CardDescription>
                Registre a movimentação de peças aqui.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label>Nome da Peça</Label>
                    <Input id="part" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Código da Peça</Label>
                    <Input id="part" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Tipo de Movimentação</Label>
                    <Select>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="add">Entrada</SelectItem>
                        <SelectItem value="remove">Saída</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Data</Label>
                    <Input id="data" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label>Quantidade</Label>
                    <Input id="quantity" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Registrar</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className=" w-full flex justify-center mt-5 mb-10">
        <div className="w-full max-w-6xl justify-center items-center">
        <h1 className="text-white text-center">Controle de Estoque</h1>
          <Table className="mb-3">
            <TableHeader>
              <TableRow>
                <TableHead>Nome da Peça</TableHead>
                <TableHead>Código da Peça</TableHead>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Valor Unitário</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stock.map((part) => (
                <TableRow key={part.Part_name}>
                  <TableCell className="font-medium">{part.Part_name}</TableCell>
                  <TableCell>{part.Code}</TableCell>
                  <TableCell>{part.Supplier}</TableCell>
                  <TableCell>{part.Quantity}</TableCell>
                  <TableCell>{part.Unit_value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="bg-white"/>
              </PaginationItem>
               <PaginationItem>
                <PaginationLink href="#" className="bg-white">1</PaginationLink>
              </PaginationItem>
              <PaginationItem >
                <PaginationEllipsis className="bg-white"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="bg-white"/>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      <section className=" w-full flex justify-center mt-5 mb-5">
      <div className="w-full max-w-6xl justify-center items-center">
        <h1 className="text-white text-center">Movimentações</h1>
          <Table className="mb-3">
            <TableHeader>
            <TableRow>
                <TableHead>Nome da Peça</TableHead>
                <TableHead>Código da Peça</TableHead>
                <TableHead>Tipo de Movimentação</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Quantidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movements.map((movement) => (
                <TableRow key={movement.Code}>
                  <TableCell className="font-medium">{movement.Part_name}</TableCell>
                  <TableCell>{movement.Code}</TableCell>
                  <TableCell>{movement.Type}</TableCell>
                  <TableCell>{movement.Data}</TableCell>
                  <TableCell>{movement.Quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="bg-white"/>
              </PaginationItem>
               <PaginationItem>
                <PaginationLink href="#" className="bg-white">1</PaginationLink>
              </PaginationItem>
              <PaginationItem >
                <PaginationEllipsis className="bg-white"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="bg-white"/>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      <Footer />
    </div>
  );
}
