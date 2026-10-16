# Site da Clínica Silhueta

Site institucional da Clínica Silhueta (clínica médica em Cuiabá, MT), refeito do zero para substituir um WordPress lento (nota 29 de desempenho no PageSpeed mobile, cerca de 11 MB por página).

Objetivo do site: **levar o visitante a agendar pelo WhatsApp.** Toda decisão de layout e conteúdo deve facilitar esse clique.

## Stack

- **Astro** (sem framework de UI por enquanto). Se alguma parte precisar de interatividade, a ideia é usar ilhas com React.
- Conteúdo em **Markdown** no próprio repositório (sem CMS).
- Hospedagem na **Cloudflare** como Worker com static assets (não Pages). Build com `NODE_VERSION=24`.
- Preview: https://site-clinica-silhueta.phpmc.workers.dev

## Comandos

- `npm install`: instala as dependências
- `npm run dev`: servidor local em http://localhost:4321
- `npm run build`: gera o site em `dist/`
- `npm run preview`: serve o build localmente

## Estrutura

```
src/
├── components/   Peças reaproveitáveis (Header, Footer, botão de WhatsApp...)
├── layouts/      Moldes de página (BaseLayout: <html>, <head>, Header, <slot />, Footer)
├── pages/        Cada arquivo vira uma rota. Só páginas inteiras ficam aqui.
├── content/      (planejado) Serviços, protocolos e notícias em Markdown
└── styles/       (planejado) global.css com cores, fontes e reset
public/           Arquivos servidos como estão (favicon, imagens)
auditoria/        Auditoria do site antigo (documentação, não faz parte do build)
```

## Páginas planejadas

- `/`: início
- `/tratamentos` e `/tratamentos/[slug]`: tratamentos, agrupados em quatro categorias (fonte: "Menu de Cuidados" da clínica)
  - Estética facial (11): toxina botulínica, preenchimento, Sculptra, Elleva, fios de sustentação, Ultraformer, Laser Lavieen, limpeza de pele, revitalização facial, microagulhamento, peeling
  - Estética corporal (9): preenchimento, Heccus Turbo, Supramaximus, drenagem linfática, massagem modeladora, massagem relaxante, Ultraformer, lipo enzimática, carboxiterapia
  - Injetáveis e protocolos (9): capilar, stress e ansiedade, fibromialgia, sarcopenia, emagrecimento, ganho de massa muscular, ozonioterapia, reposição de vitaminas, reposição hormonal
  - Programas: Beauty Club (assinatura de toxina botulínica) e protocolos personalizados (rejuvenescimento, emagrecimento, performance e saúde)
- `/noticias` e `/noticias/[slug]`: eventos da clínica (próximos e realizados, separados pela data) e notícias de saúde e estética, com foto de capa e galeria
- `/contato`

### Página inicial (ordem das seções)

1. Topo: frase do que a clínica faz, foto real e botão "Agendar pelo WhatsApp"
2. Protocolos e serviços em cards, organizados pelo problema do paciente
3. Quem cuida de você: médico, CRM, especialidade e RQE
4. Como funciona: 3 ou 4 passos até o tratamento
5. A clínica: fotos dos ambientes
6. Notícias recentes
7. Rodapé com endereço, mapa, horários, telefone, WhatsApp e Instagram

Botão flutuante de WhatsApp em todas as páginas.

### Modelo das páginas de serviço e protocolo

Para quem é → como funciona → o que esperar → quem conduz → perguntas frequentes → botão de agendar.

## Identidade visual

Seguir o "Menu de Cuidados" da clínica, para o site parecer da mesma marca do Instagram:

- Cores: verde da marca (o mesmo do logo), fundos creme, texto marrom e dourado para ação. Ver a seção "Cores".
- Tipografia: títulos em serifa elegante e fina; textos em sans-serif leve.
- Elementos: formas em arco (cards e molduras de foto com o topo arredondado), linhas finas douradas, bastante espaço em branco.
- Fotos: usar fotos reais da clínica e da equipe. Não usar fotos de banco de imagens como se fossem pacientes ou equipe.

## Cores

As variáveis ficam em `src/styles/global.css`. **Usar só estas variáveis no site inteiro**: nada de cor solta em hex, rgb ou nome nos componentes. Para transparência, usar `color-mix(in srgb, var(--x) 40%, transparent)`.

| Variável | Hex | Uso |
| --- | --- | --- |
| `--verde-900` | #12332E | fundo do rodapé |
| `--verde-700` | #194842 | cor da marca: header, títulos de destaque, links |
| `--verde-600` | #3F6F68 | links no hover, ícones |
| `--verde-500` | #548A82 | "Clínica" do logo, detalhes. **Não usar em texto pequeno** |
| `--verde-200` | #C9DCD7 | texto secundário sobre fundo verde |
| `--verde-50` | #EEF4F2 | fundo suave de destaque (ex.: caixa de aviso) |
| `--creme-50` | #FBF8F3 | fundo da página; texto sobre fundo verde |
| `--creme-100` | #F4EDE3 | fundo de seções alternadas |
| `--creme-200` | #E8DCCB | bordas, divisórias, bordas de cards |
| `--areia-100` | #EDE3D4 | fundo de seção de destaque (ex.: "O que você procura?") |
| `--marrom-900` | #3B2E26 | texto principal e títulos |
| `--marrom-700` | #6B5546 | texto secundário, legendas |
| `--dourado-700` | #8A6A3A | fundo dos botões de agendar (texto branco) |
| `--dourado-800` | #7D5F33 | hover dos botões |
| `--dourado-400` | #B8955A | só decoração: linhas, sublinhado do menu ativo. **Não usar em texto** |
| `--branco` | #FFFFFF | texto dos botões dourados, fundo de cards |
| `--whatsapp` | #25D366 | só o botão flutuante de WhatsApp (cor do app) |
| `--whatsapp-hover` | #1EBE5D | hover do botão flutuante |

Regras de uso:

- Fundo da página: `--creme-50`. Seções alternadas: `--creme-100`.
- Texto: `--marrom-900` (principal) e `--marrom-700` (secundário). Títulos podem ser `--marrom-900` ou `--verde-700`.
- Header: fundo `--verde-700`, texto e logo em `--creme-50`, texto secundário em `--verde-200`.
- Rodapé: fundo `--verde-900`, texto `--creme-50`, links e texto secundário `--verde-200`.
- Botão principal (agendar no WhatsApp): fundo `--dourado-700`, texto branco, hover `--dourado-800`. Exceção: o botão flutuante usa as cores do WhatsApp (`--whatsapp`, ícone branco). Botão secundário: borda `--verde-700`, texto `--verde-700`.
- Cards: fundo `--creme-50` ou branco, borda `--creme-200`; no hover, borda ou título em `--verde-700`.
- Detalhes decorativos (sublinhado do menu ativo, cursor da frase digitada): `--dourado-400`. Sem linhas douradas separando seções, títulos ou passos: a separação é feita com espaço.
- `--verde-500` e `--dourado-400` nunca em texto menor que 24px (contraste insuficiente).
- Foco do teclado (`:focus-visible`): outline 2px `--verde-700` sobre fundo claro e `--creme-50` sobre fundo verde (classe `.fundo-verde` no elemento com fundo verde).
- Logo: `logo-horizontal.svg` (verde) sobre fundo claro; `logo-horizontal-claro.svg` (creme) sobre fundo verde.

## Regras de conteúdo (publicidade médica)

O site segue a Resolução CFM 2.336/2023:

- Nada de sensacionalismo nem promessa de resultado ("resultado garantido", "perca X kg em Y dias").
- Sem fotos de "antes e depois" na primeira versão (exigem caráter educativo, autorização, anonimato e imagens de evoluções insatisfatórias e complicações).
- Mostrar CRM do responsável técnico; "especialista" só com RQE.
- Ozonioterapia, reposição hormonal e ganho de massa muscular têm regras próprias do CFM: textos sóbrios e informativos, sempre revisados.
- Os textos são revisados pelo responsável técnico antes de publicar.

## Convenções

- Interface e conteúdo em **português do Brasil** (`lang="pt-BR"`).
- Nomes de arquivos e pastas **em minúsculas, sem acento e sem espaço** (`ganho-de-massa.md`). Componentes e layouts em PascalCase (`Header.astro`).
- CSS: estilos de componente dentro do `<style>` do próprio componente (escopado). Estilos globais só no BaseLayout ou em `src/styles/global.css`.
- Priorizar desempenho: imagens otimizadas com `astro:assets`, nada de JavaScript no navegador sem necessidade.
- Acessibilidade: textos alternativos em imagens, contraste adequado, navegação por teclado.

## Fluxo de trabalho

- O desenvolvimento acontece em dois computadores: Windows (Prompt de Comando) e Mac (zsh).
- **Antes de começar: `git pull`. Ao terminar: commit e push.**
- Trabalho em branches (ex.: `layout-base`) e pull request para a `main`. A `main` é publicada automaticamente na Cloudflare.
- Mensagens de commit no estilo `tipo: descrição (refs #N)`, por exemplo `feat: cria header e footer (refs #1)`. Usar `closes #N` quando o commit ou PR conclui a issue.
- As tarefas estão nas issues do GitHub e no quadro do GitHub Projects.

## Como ajudar o Pedro

- Ele é estudante de Ciência da Computação e está aprendendo com este projeto. Explicar o essencial de forma curta, sem pular o porquê.
- Mandar **um comando de terminal por vez** e dizer o que ele faz.
- Antes de mudanças grandes ou que apagam arquivos, explicar o que vai ser feito e esperar a confirmação.
- Responder em português.
