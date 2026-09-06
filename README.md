# EstudaFarma V4 — SES-RJ / IBDO

Versão funcional e independente para GitHub Pages.

## Novidades V4
- 36 questões inéditas em estilo objetivo IBDO, por matéria, assunto e dificuldade.
- Filtros: matéria, assunto, dificuldade, não respondidas, erros e favoritas.
- Botão “Por que errei?” com diagnóstico e microrevisão.
- Criação de flashcard diretamente a partir de erro.
- Caderno de erros ordenado por reincidência.
- Simulado configurável (quantidade, matéria e dificuldade).
- Estatísticas por matéria e dificuldade.
- Aulas com fontes oficiais e atualização regulatória.
- Persistência local no navegador via localStorage.

## Publicação
O `vite.config.js` já usa `base: '/trueconcursos/'`.

Se o seu `.github/workflows/deploy.yml` atual já está funcionando, preserve o arquivo que está no repositório e substitua os demais arquivos por esta versão.

## Executar localmente
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
```
