"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Por favor, ingresa un nombre válido",
    })
    .max(50, {
      message: "El nombre es demasiado largo (máximo 50 caracteres)",
    }),
  howMany: z.string({
    message: "Por favor, ingresa cuantos confirman",
  }),
  song: z.string().optional(),
  driver: z.boolean().optional(),
  guard: z.boolean().optional(),
});

export function RsvpForm({ confirmRsvp }: { confirmRsvp: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      howMany: "",
      song: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const name = values.name;
    const howMany = values.howMany;
    const song = values.song;

    if (!name || !howMany) {
      alert("Por favor, ingresa tu nombre y cuantos confirman");
      return;
    }

    try {
      const response = await fetch(
        `/api/add-rsvp?name=${name}&howMany=${howMany}&song=${
          song || "No song"
        }`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Error al confirmar asistencia");
      }
      console.log("response", await response.json());
      confirmRsvp();
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Nombre</FormLabel> */}
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="howMany"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Cuantos confirman</FormLabel> */}
              <FormControl>
                <Input
                  type="number"
                  placeholder="Numero de personas que confirman"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="song"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Cuantos confirman</FormLabel> */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="¿Que canción no puede faltar?"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Confirmar asistencia
        </Button>
      </form>
    </Form>
  );
}
