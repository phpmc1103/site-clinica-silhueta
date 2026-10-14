import type { ImageMetadata } from "astro";
// TODO: fotos provisórias de banco de imagens; trocar por fotos reais da clínica
import fotoFacial from "../assets/tratamentos/facial.jpg";
import fotoCorporal from "../assets/tratamentos/corporal.jpg";
import fotoInjetaveis from "../assets/tratamentos/injetaveis.jpg";

// Categorias mostradas em /tratamentos, na ordem em que aparecem.
// O id é o mesmo valor do campo "categoria" nos arquivos .md e vira a URL /tratamentos/[id].
// "imagem" é opcional: sem ela, o card mostra a moldura provisória.
export const categorias: readonly {
  id: "facial" | "corporal" | "injetaveis";
  titulo: string;
  descricao: string;
  imagem?: ImageMetadata;
}[] = [
  {
    id: "facial",
    titulo: "Facial",
    descricao: "Cuidados para linhas de expressão, flacidez, manchas e textura da pele do rosto.",
    imagem: fotoFacial,
  },
  {
    id: "corporal",
    titulo: "Corporal",
    descricao: "Cuidados para contorno corporal, gordura localizada, flacidez e bem-estar.",
    imagem: fotoCorporal,
  },
  {
    id: "injetaveis",
    titulo: "Injetáveis e protocolos",
    descricao: "Protocolos com acompanhamento médico para emagrecimento, ganho de massa, reposições e saúde.",
    imagem: fotoInjetaveis,
  },
];
