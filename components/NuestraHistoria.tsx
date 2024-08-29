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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { script } from "@/app/fonts";
import HistoriaIcon from "./icons/HistoriaIcon";

const NuestraHistoria = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-20 border items-center justify-center gap-2 rounded-lg">
        <HistoriaIcon />
        <span>Historia</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle
            className={cn([
              script.className,
              "my-6 text-6xl mx-auto text-center",
            ])}
          >
            Nuestra Historia
          </DrawerTitle>
          <DrawerDescription className="my-4 mx-auto text-center">
            A través de los años, hemos compartido momentos que han definido
            nuestra relación y nos han traído hasta aquí.
          </DrawerDescription>
        </DrawerHeader>

        <Carousel className="px-4">
          <CarouselContent className="max-w-xs">
            {storyParts.map((part, index) => (
              <CarouselItem key={index}>
                <Card className="aspect-square items-center justify-center p-6">
                  <CardTitle className="text-lg text-center">
                    {part.emoji}
                  </CardTitle>
                  <CardTitle className="text-lg mb-2 text-center">
                    {part.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {part.description}
                  </CardDescription>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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

export default NuestraHistoria;

type StoryPart = {
  emoji: string;
  title: string;
  description: string;
};

export const storyParts: StoryPart[] = [
  {
    emoji: "🌱",
    title: "El Comienzo",
    description:
      "Nos conocimos en octubre de 2007, y desde ese momento, algo especial comenzó a florecer. Pasamos todas las vacaciones intercambiando mensajes, hasta que finalmente, en diciembre de ese año, tuvimos nuestra primera cita. Y desde entonces, supimos que había algo mágico entre nosotros.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Conociendo a la Familia",
    description:
      "En febrero de 2008, Carolina me presentó oficialmente a sus padres. Para el cumpleaños de Cecilia, fui invitado a su casa, y en esa ocasión, reuní el valor para pedirle permiso a su papá para que fuéramos novios oficiales. Él nos pidió que esperáramos hasta que Carolina cumpliera 15 años, y así lo hicimos.",
  },
  {
    emoji: "💑",
    title: "Nuestra Primera Fecha Oficial",
    description:
      "Nuestra relación oficial comenzó el 17 de noviembre de 2008, después de ver *Twilight* juntos. Unos meses después, en una kermés de La Salle en 2009, nos 'casamos' por primera vez. Fue un momento divertido y simbólico en el que logré convencerla de que yo era el amor de su vida y la llevé al 'altar'.",
  },
  {
    emoji: "🕰️",
    title: "Una Pausa, Pero No un Adiós",
    description:
      "Aunque nuestra relación se pausó en febrero de 2010 cuando comencé la universidad, nuestra conexión nunca desapareció. A lo largo de estos 14 años, construimos una hermosa amistad, compartiendo cumpleaños, Navidades, Años Nuevos y muchas otras ocasiones especiales.",
  },
  {
    emoji: "🤝",
    title: "Un Proyecto Nos Reúne",
    description:
      "En 2020, nos acercamos aún más debido a un proyecto que realizamos juntos. En diciembre de 2022, cuando regresé a Honduras, le prometí que en un año volvería por ella y por Ena.",
  },
  {
    emoji: "🏡",
    title: "El Regreso y el Futuro",
    description:
      "Cumplí mi promesa, y en diciembre de 2023, empezamos a planear un reencuentro en abril de 2024. Fue en ese momento cuando tomamos la decisión de que queríamos estar juntos para siempre. Ahora, estamos emocionados de comenzar esta nueva etapa de nuestras vidas, juntos.",
  },
];
