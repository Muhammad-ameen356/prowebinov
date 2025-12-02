
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
  import { Badge } from "@/components/ui/badge"
  
  const orders = [
    { id: "ORD001", customer: "John Doe", date: "2023-11-20", amount: "$1,500.00", status: "Fulfilled" },
    { id: "ORD002", customer: "Jane Smith", date: "2023-11-21", amount: "$3,000.00", status: "Pending" },
    { id: "ORD003", customer: "Bob Johnson", date: "2023-11-22", amount: "$50.00", status: "Fulfilled" },
    { id: "ORD004", customer: "Alice Williams", date: "2023-11-23", amount: "$500.00", status: "Canceled" },
    { id: "ORD005", customer: "Mike Brown", date: "2023-11-24", amount: "$3,200.00", status: "Pending" },
    { id: "ORD006", customer: "Sara Davis", date: "2023-11-25", amount: "$1,500.00", status: "Fulfilled" },
  ];
  
  const statusVariants = {
    Fulfilled: "default",
    Pending: "secondary",
    Canceled: "destructive",
  } as const;
  
  export default function AdminOrdersPage() {
    return (
      <>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              A list of recent orders from your customers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariants[order.status as keyof typeof statusVariants] || "outline"}>
                        {order.status}
                      </Badge>
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
  