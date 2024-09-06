import Image from "next/image";
import React from "react";
import Engage from "@/public/ring.png";
import { cn } from "@/lib/utils";
import RsvpDrawer from "./RsvpDrawer";
import RegistryDrawer from "./RegistryDrawer";
import LocationDrawer from "./LocationDrawer";
import { script } from "@/app/fonts";
import ItinerarioDrawer from "./ItinerarioDrawer";

import NuestraHistoria from "./NuestraHistoria";
import QueHacerDrawer from "./QueHacer";
import FotosDrawer from "./Fotos";
import AttireDrawer from "./AttireDrawer";

const Reception = () => {
  return (
    <div className="w-full relative">
      <h2 className={cn(["text-5xl text-center my-8", script.className])}>
        El Gran Día <br></br>
      </h2>

      <p className="text-sm text-muted-foreground text-center mb-6 px-4">
        Explora los detalles esenciales de nuestro día especial.
      </p>

      <div className="grid grid-cols-2 gap-4 px-4">
        <RsvpDrawer />
        <ItinerarioDrawer />
        <RegistryDrawer />
        <LocationDrawer />
        <NuestraHistoria />
        <QueHacerDrawer />
        <AttireDrawer />

        <FotosDrawer />
      </div>
      <div className="bottom-0 object-cover w-full h-auto">
        <Image src={Engage} alt="engagement"></Image>
      </div>
    </div>
  );
};

export default Reception;
