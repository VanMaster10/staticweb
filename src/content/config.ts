import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string().optional(),
    category: z.string(),
    disponible: z.boolean().default(true),
  }),
});

export const collections = { productos };
