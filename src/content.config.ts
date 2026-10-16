import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Cada arquivo .md em src/content/tratamentos vira um tratamento.
// O nome do arquivo (sem .md) vira o id, usado na URL /tratamentos/[id].
const tratamentos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tratamentos" }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(["facial", "corporal", "injetaveis", "programas"]),
    ordem: z.number(),
    resumo: z.string(),
    imagem: z.string().optional(),
    rascunho: z.boolean().default(true),
    revisado: z.boolean().default(false),
    // Temas com regras próprias do CFM (ozonioterapia, reposição hormonal...)
    atencaoCFM: z.boolean().default(false),
  }),
});

export const collections = { tratamentos };
