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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

type RsvpDataType = {
  name: "string";
  howmany: "string";
  song: "string";
  createdat: "string";
};

const Page = () => {
  const [rsvpData, setRsvpData] = useState<RsvpDataType[]>([]);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
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

  if (!authorized) {
    return (
      <main className="p-8">
        <Link
          href={"/"}
          className="border border-black p-4 mx-auto rounded-xl mt-20"
        >
          Regresar
        </Link>
        <Dialog defaultOpen>
          {/* <DialogTrigger>Open</DialogTrigger> */}
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">La duena de todo?</DialogTitle>

              <Input
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value === "ena") {
                    setAuthorized(true);
                  }
                }}
              ></Input>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </main>
    );
  }

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
