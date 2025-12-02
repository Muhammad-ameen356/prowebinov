
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

const invoices = [
  { id: "INV001", date: "2023-10-01", service: "Web Development", amount: "$1,500.00", status: "Paid" },
  { id: "INV002", date: "2023-11-15", service: "E-commerce Solution", amount: "$3,200.00", status: "Paid" },
];

const projects = [
    { id: "PROJ-WEB", service: "Web Development", status: "Completed", lastUpdate: "2023-10-25" },
    { id: "PROJ-ECOMM", service: "E-commerce Solution", status: "In Progress", lastUpdate: "2023-12-05" },
];

export default function CustomerDashboardPage() {

  const handleDownload = (invoice: typeof invoices[0]) => {
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text("Invoice", 20, 20);

    doc.setFontSize(16);
    doc.text(`Invoice ID: ${invoice.id}`, 20, 40);
    doc.text(`Date: ${invoice.date}`, 20, 50);
    
    doc.setLineWidth(0.5);
    doc.line(20, 60, 190, 60);

    doc.setFontSize(12);
    doc.text("Service", 20, 70);
    doc.text("Amount", 170, 70);
    
    doc.line(20, 75, 190, 75);
    
    doc.text(invoice.service, 20, 85);
    doc.text(invoice.amount, 170, 85);

    doc.line(20, 95, 190, 95);
    
    doc.setFontSize(14);
    doc.text(`Total: ${invoice.amount}`, 150, 105);
    doc.text(`Status: ${invoice.status}`, 20, 105);
    
    doc.save(`invoice-${invoice.id}.pdf`);
  };

  return (
    <div className="container py-12 md:py-24 space-y-12">
      <div className="pt-12">
        <h1 className="text-3xl font-bold font-headline tracking-tighter">
          Welcome Back!
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your projects and invoices.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Projects</CardTitle>
          <CardDescription>
            Track the status of your ongoing and completed projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Update</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.service}</TableCell>
                  <TableCell>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.lastUpdate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>My Invoices</CardTitle>
          <CardDescription>
            View and download your payment history.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.service}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge variant="default">{invoice.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(invoice)}>Download</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
