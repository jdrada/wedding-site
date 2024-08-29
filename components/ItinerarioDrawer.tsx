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
import Timeline from "@/public/timeline.svg";
import CalendarIcon from "./icons/CalendarIcon";
import Image from "next/image";

const ItinerarioDrawer = () => {
  const [hasConfirmed, setHasConfirmed] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg">
        <CalendarIcon />
        Programa
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([script.className, "text-6xl mx-auto text-center"])}
          >
            Programa
          </DrawerTitle>

          <DrawerDescription className="my-4 mx-auto text-center">
            Únete a nosotros para un día lleno de momentos especiales,
            comenzando con la ceremonia a las 11:30 am.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <Image src={Timeline} alt="engagement" priority></Image>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button type="button" variant="outline" className="mt-8">
              Volver
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ItinerarioDrawer;
