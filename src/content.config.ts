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

// Cada arquivo .md em src/content/equipe é uma pessoa da equipe (seção "Equipe" da home).
// A foto fica ao lado do .md e é indicada pelo caminho relativo (ex.: foto: ./maria.png).
const equipe = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/equipe" }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      cargo: z.string(), // ex.: "Médica dermatologista" (especialidade só com RQE)
      crm: z.string(), // ex.: "CRM-MT 12345"
      rqe: z.string().optional(), // ex.: "RQE 6789"
      // PNG com fundo transparente, pessoa da cintura para cima, de preferência 4:5
      foto: image().optional(),
      ordem: z.number(),
      rascunho: z.boolean().default(true),
    }),
});

export const collections = { tratamentos, equipe };
