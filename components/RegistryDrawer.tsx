"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { script } from "@/app/fonts";
import BancoAtlantida from "@/public/banco-atlantida.png";
import Image from "next/image";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import CheckIcon from "./icons/CheckIcon";
import ClipboardIcon from "./icons/ClipboardIcon";
import GifIcon from "./icons/GifIcon";

const RegistryDrawer = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const cuentaBancoAtlantidad = "23320220041";
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg">
        <GifIcon />
        Regalos
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([
              script.className,
              "text-6xl mb-8 mx-auto text-center",
            ])}
          >
            Regalos
          </DrawerTitle>

          <DrawerDescription className="mx-auto text-center">
            <span>
              Tu presencia significa mucho para nosotros y es el mejor regalo de
              bodas que podemos recibir. Si además deseas contribuir a nuestro
              futuro, puedes hacerlo en las cuentas que aparecen a continuación.
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-40 mx-auto my-8">
          <Image src={BancoAtlantida} alt="banco-atlantida"></Image>
        </div>
        <div className="mb-10 px-8">
          <Label htmlFor="banco-atlantida">
            Lempiras - Carolina Maria Mendoza Milla
          </Label>
          <div className="flex mt-2 gap-1">
            <Input
              id="banco-atlantida"
              value={"# " + cuentaBancoAtlantidad}
              className="outline-none ring-0 text-md"
            ></Input>
            <Button
              onClick={() => copyToClipboard(cuentaBancoAtlantidad)}
              variant={hasCopied ? "outline" : "outline"}
              className="min-w-20"
            >
              {hasCopied ? <CheckIcon /> : "Copiar"}
            </Button>
          </div>
        </div>
        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <DrawerClose>
            <Button type="button" variant={"outline"}>
              Volver
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RegistryDrawer;
