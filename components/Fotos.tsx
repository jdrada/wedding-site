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

const FotosDrawer = () => {
  const [hasConfirmed, setHasConfirmed] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger className="col-span-2 flex h-20 border items-center justify-center gap-2 rounded-lg">
        <CalendarIcon />
        Fotos
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([
              script.className,
              "text-6xl my-4 mx-auto text-center",
            ])}
          >
            Fotos
          </DrawerTitle>

          <DrawerDescription className="my-4 mx-auto text-center">
            Muy pronto...
          </DrawerDescription>
        </DrawerHeader>

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

export default FotosDrawer;
