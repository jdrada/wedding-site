"use client";
import React from "react";
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
import LocationIcon from "./icons/LocationIcon";

const LocationDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg ">
        <LocationIcon />
        Cómo llegar
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <DrawerHeader>
          <DrawerTitle
            className={cn([
              script.className,
              "text-6xl mt-2 mb-8 mx-auto text-center",
            ])}
          >
            Cómo llegar
          </DrawerTitle>

          <DrawerDescription className="mx-auto text-center">
            <span>La ceremonia se llevara en el Hotel Liquidámbar</span>
            <br />
            <span>Santa Lucia, Francisco Morazan, Honduras</span>
            <br />
            <span>El sabado 26 de octubre del 2024</span>
          </DrawerDescription>
        </DrawerHeader>

        <Button
          onClick={() => {
            window.open("waze://?ll=14.12184740,-87.09383090&navigate=yes");
          }}
          className="my-4"
        >
          Abre la ruta con Waze App
        </Button>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.242229253814!2d-87.09640582503529!3d14.121847386309726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa505bf4c802b%3A0xf06b5771599c7584!2sLiquid%C3%A1mbar%20Hotel%20y%20Restaurante!5e0!3m2!1sen!2shn!4v1724825873042!5m2!1sen!2shn"
          className="w-full h-72"
        ></iframe>
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

export default LocationDrawer;
