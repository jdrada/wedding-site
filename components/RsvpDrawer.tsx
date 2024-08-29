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
import { RsvpForm } from "./RsvpForm";
import RsvpIcon from "./icons/RsvpIcon";

const RsvpDrawer = () => {
  const [hasConfirmed, setHasConfirmed] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg">
        <RsvpIcon />
        <span>RSVP</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([
              script.className,
              "text-6xl mb-8 mx-auto text-center",
            ])}
          >
            rsvp
          </DrawerTitle>

          <DrawerDescription className="mx-auto text-center">
            {!hasConfirmed ? (
              "Nos encantaría contar con tu presencia. Por favor, confirma tu asistencia."
            ) : (
              <span>
                ¡Gracias por confirmar!
                <br /> Te esperamos.
              </span>
            )}
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          {!hasConfirmed ? (
            <RsvpForm
              confirmRsvp={function (): void {
                setHasConfirmed(true);
                // localStorage.setItem("rsvpConfirmed", "true");
              }}
            />
          ) : null}
          {/* <Button>Submit</Button> */}
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

export default RsvpDrawer;
