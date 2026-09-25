# Academia Gustavo Piá — Centro de Lutas

Site de uma página (landing) da **Academia Gustavo Piá — Centro de Lutas**, em Piracicaba/SP.
Construído em HTML, CSS e JavaScript puros, sem build e sem dependências, pronto para
hospedagem estática.

## Estrutura

```
index.html      página e conteúdo
styles.css      identidade visual e layout responsivo
script.js       menu de telas menores + navegação por âncoras acessível
assets/         emblema, fotos da academia e retrato do professor
```

Os arquivos em `assets/` são imagens independentes. O ZIP de origem
(`F:\Solara\temp\academia-gustavo-pia-site.zip`) não foi usado: ele traz um monograma
"GP" e recortes derivados da prévia do mockup. Aqui foram usadas apenas as fotos e o
emblema fornecidos, e a captura completa do mockup **não** é usada como imagem de fundo.

## Dados confirmados em produção

| Item | Valor |
|---|---|
| Endereço | Rua Campos Salles, 1919 — Piracicaba/SP |
| WhatsApp | +55 19 98180-2166 · `https://wa.me/5519981802166` |
| Instagram da academia | `https://www.instagram.com/academiagustavopia/` |
| Perfil profissional | `https://www.instagram.com/gustavo.piacentini/` |
| Modalidades | Muay Thai · Kickboxing · Jiu-Jitsu · Boxe · Muay Thai Kids |

## Informação que NÃO está no site (e por quê)

Horários, preços, condições da aula experimental, regras para combinar modalidades,
avaliações, resultados e número de alunos **não foram confirmados**. Nada foi inventado.
As perguntas sobre esses temas encaminham a pessoa ao WhatsApp da equipe, que é o
canal de contato real da academia.

O bloco de credenciais do professor reproduz **como o próprio Gustavo se apresenta no
perfil profissional dele** e linka esse perfil. Se alguma dessas qualificações não
estiver correta, o texto em `index.html` (bloco `.credential`) é o único ponto a editar.

## Verificações executadas

Testado em navegador real (Chromium via Playwright) nas larguras **320, 360, 390, 768,
1024 e 1440 px**:

- sem rolagem horizontal em nenhum breakpoint;
- menu mobile abre, fecha por clique, por `Esc` e por clique fora, e volta o foco ao
  botão ao fechar com `Esc`;
- links internos movem o foco para a seção de destino (não apenas a rolagem);
- 15 paradas de tabulação na ordem esperada, todas com anel de foco visível;
- link "Pular para o conteúdo" como primeiro elemento focável;
- console sem erros;
- 7 imagens carregadas, nenhuma quebrada;
- contraste de texto conferido sobre o fundo real de cada seção (mínimo WCAG AA).

## Publicação

O repositório está conectado à Vercel, então **cada push para a branch principal gera
deploy de produção automaticamente**. Para publicar uma mudança, basta:

```bash
git add .
git commit -m "feat: ..."
git push
```

## Rodar localmente

```bash
python -m http.server 8000
# abrir http://127.0.0.1:8000
```

Abrir `index.html` direto pelo sistema de arquivos também funciona, mas um servidor
local evita diferenças de comportamento entre navegadores.
