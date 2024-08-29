import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import SantaLuciaResort from "@/public/santa_lucia_resort.jpg";
import LaPosada from "@/public/la_posada.jpg";
import TresPuntos from "@/public/tres_puntos.jpg";
import PlazaRobles from "@/public/plaza_robles.jpeg";
import LosChurros from "@/public/los_churros.jpeg";
import ALaGranFruta from "@/public/a_la_gran_fruta.jpeg";
import Image from "next/image";

export function SantaLuciaTabs() {
  return (
    <Tabs defaultValue="hotels" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="hotels">Hoteles</TabsTrigger>
        <TabsTrigger value="password">Restaurantes</TabsTrigger>
      </TabsList>
      <TabsContent value="hotels">
        <Card>
          <CardHeader>
            <CardTitle>Hoteles</CardTitle>
            <CardDescription>
              Una lista con hoteles y números de contacto para que reserves tu
              alojamiento si lo necesitas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src={SantaLuciaResort}
                alt="Santa Lucia Resort"
                className="h-20 w-20 rounded-xl"
              ></Image>

              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Santa Lucia Resort
                </p>
                <p className="text-sm text-muted-foreground">
                  Tel: 2779-0540 | 9593-0622
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={LaPosada}
                alt="La Posada de Estefana"
                className="h-20 w-20 rounded-xl"
              ></Image>

              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  La Posada de Estefana
                </p>
                <p className="text-sm text-muted-foreground">
                  Tel: 2779-0441 | 9482-2243
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Restaurantes</CardTitle>
            <CardDescription>
              Explora los deliciosos sabores de Santa Lucía con nuestra
              selección de restaurantes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <a
              className="flex items-center gap-4"
              href="https://www.instagram.com/tres_puntoshn"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={TresPuntos}
                alt="Tres Puntos"
                className="h-10 w-10 rounded-xl"
              ></Image>

              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Tres Puntos</p>
                <p className="text-sm text-muted-foreground">
                  ig: @tres_puntoshn
                </p>
              </div>
            </a>
            <a
              className="flex items-center gap-4"
              href="https://www.instagram.com/plaza__robles"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={PlazaRobles}
                alt="Plaza Robles"
                className="h-10 w-10 rounded-xl"
              ></Image>

              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Plaza Robles</p>
                <p className="text-sm text-muted-foreground">
                  ig: @tplaza__robles
                </p>
              </div>
            </a>
            <a
              className="flex items-center gap-4"
              href="https://www.instagram.com/loschurrosdelespanolhn"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={LosChurros}
                alt="Los Churros del Español"
                className="h-10 w-10 rounded-xl"
              ></Image>

              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Los Churros del Español
                </p>
                <p className="text-sm text-muted-foreground">
                  ig: @loschurrosdelespanolhn
                </p>
              </div>
            </a>
            <a
              className="flex items-center gap-4"
              href="https://www.instagram.com/a_lagranfruta_0823"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={ALaGranFruta}
                alt="A La Gran Fruta Cafe"
                className="h-10 w-10 rounded-xl"
              ></Image>

              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  A La Gran Fruta Cafe
                </p>
                <p className="text-sm text-muted-foreground">
                  ig: @a_lagranfruta_0823
                </p>
              </div>
            </a>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
