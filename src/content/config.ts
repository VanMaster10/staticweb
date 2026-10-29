import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.string(),
    disponible: z.boolean().default(true),

    grupo: z.string().default('Otros'),
    destacado: z.boolean().default(false),

    // IMPORTANTE
    incluye_bateria: z.boolean().default(false)
  }),
});

export const collections = { productos };