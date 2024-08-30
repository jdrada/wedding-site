"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

type RsvpDataType = {
  name: "string";
  howmany: "string";
  song: "string";
  createdat: "string";
};

const Page = () => {
  const [rsvpData, setRsvpData] = useState<RsvpDataType[]>([]);
  console.log("rsvpData", rsvpData);

  const fetchRsvp = async () => {
    try {
      const response = await fetch("/api/get-rsvp");
      if (!response.ok) throw new Error("Failed to fetch RSVP data");
      const data = await response.json();
      setRsvpData(data.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchRsvp();
  }, []);

  const sumConfirmed = rsvpData.reduce(
    (acc, { howmany }) => acc + parseInt(howmany, 10),
    0
  );

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("es-ES", {
      month: "long",
      day: "numeric",
    });
  };
  return (
    <main className="max-w-screen-mobile mx-auto p-4">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-full">Nombre</TableHead>
            <TableHead>Cuantos</TableHead>
            <TableHead>Cancion</TableHead>
            <TableHead>Cuando confirmo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rsvpData.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.howmany}</TableCell>
              <TableCell>{invoice.song}</TableCell>
              <TableCell>{formatDate(invoice.createdat)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Confirmadas</TableCell>
            <TableCell className="text-right">{sumConfirmed}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
};

export default Page;
