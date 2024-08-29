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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { SantaLuciaTabs } from "./SantaLuciaTabs";
import BuildingIcon from "./icons/BuildingIcon";

const QueHacerDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg">
        <BuildingIcon />
        Santa Lucía
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([script.className, "text-6xl mx-auto text-center"])}
          >
            Santa Lucía
          </DrawerTitle>

          <DrawerDescription className="mt-4 mx-auto text-center">
            Descubre lo que este hermoso lugar tiene para ofrecer, para que
            disfrutes antes y después del evento.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <SantaLuciaTabs />
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

export default QueHacerDrawer;
