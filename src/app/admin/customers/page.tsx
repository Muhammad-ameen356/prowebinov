
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const customers = [
    {
        id: "CUST001",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "555-123-4567",
        registeredOn: "2023-10-01",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
        id: "CUST002",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "555-987-6543",
        registeredOn: "2023-11-15",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        id: "CUST003",
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        phone: "555-555-5555",
        registeredOn: "2023-12-20",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
     {
        id: "CUST004",
        name: "Alice Williams",
        email: "alice.w@example.com",
        phone: "555-234-5678",
        registeredOn: "2024-01-05",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    },
     {
        id: "CUST005",
        name: "Mike Brown",
        email: "mike.b@example.com",
        phone: "555-876-5432",
        registeredOn: "2024-02-18",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
    },
];


export default function AdminCustomersPage() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Your Customers</CardTitle>
                    <CardDescription>
                        A list of all customers who have used your services.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Registered On</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={customer.avatar} alt={customer.name} />
                                                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div>{customer.name}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.registeredOn}</TableCell>
                                    <TableCell>
                                         <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
}