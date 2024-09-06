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
import BuildingIcon from "./icons/BuildingIcon";
import AttireIcon from "./icons/AttireIcon";

const AttireDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg">
        <AttireIcon />
        Atuendo
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([script.className, "text-6xl mx-auto text-center"])}
          >
            Atuendo
          </DrawerTitle>

          <DrawerDescription className="mt-4 mx-auto text-center">
            Inspirate con las ideas que tenemos para ti.
          </DrawerDescription>
        </DrawerHeader>

        <iframe
          title="attire"
          className="h-[60dvh] w-full"
          src="https://petracoding.github.io/pinterest/board.html?link=mendozac3093/attire-ortiz-mendoza-wedding/&hideHeader=1&transparent=1"
        ></iframe>

        <DrawerFooter>
          <DrawerClose>
            <Button type="button" variant="outline" className="mt-2">
              Volver
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AttireDrawer;
