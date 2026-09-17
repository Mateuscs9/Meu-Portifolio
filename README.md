# Meu Portifólio

Portfólio pessoal para apresentar minha trajetória, meus projetos e meu objetivo de atuar como desenvolvedor remoto.

Comecei como técnico em eletrônica. Após concluir a faculdade, direcionei minha carreira para desenvolvimento. Atualmente trabalho na Atram, onde iniciei projetos de maneira proativa para resolver necessidades do dia a dia.

## Projetos apresentados

- [NFSe Sync](https://github.com/Mateuscs9/NFSe-Sync): prévia das telas de sincronização e consulta de NFS-e.
- [Controle de Frota](https://github.com/Mateuscs9/Controle-de-Frota): prévia do aplicativo Controle de KM, com início/finalização de viagem e manutenções.

**As demos deste portfólio são apenas prévias interativas: usam dados fictícios e interações simuladas, não são os sistemas completos e não acessam dados ou serviços reais.** Esse aviso se refere às demos no site, não aos repositórios dos projetos acima.

## Recursos

- Apresentação e trajetória profissional.
- Projetos revelados conforme a rolagem da página.
- Demos interativas e layout responsivo.
- Links para repositórios, LinkedIn e contato.

## Contato

- [GitHub](https://github.com/Mateuscs9)
- [LinkedIn](https://www.linkedin.com/in/mateus-costa-souza-2364642a7/)
- E-mail: mateus.costasouza.58@gmail.com

## Estado da hospedagem

A implementação atual usa React, TypeScript, CSS e vinext com Vite, preparada para Cloudflare Workers/Sites. **A migração e publicação na Vercel ainda estão pendentes.** Importar este checkout como Next.js convencional não é suficiente.

No PowerShell, use `npm ci`, `npx vinext dev` e `npx vinext build` para evitar a sintaxe de variável de ambiente Unix dos scripts originais.

Não publique arquivos `.env`, credenciais, logs, builds ou prints internos. Para a primeira publicação pública, prefira apenas o estado atual revisado, sem o histórico antigo do checkout.

## Executar localmente

Requisito: Node.js >= 22.13.0.

```sh
npm ci
npx vinext dev
```

Para gerar o build:

```sh
npx vinext build
```

## Organização

- `app/page.tsx`: apresentação, projetos e contato.
- `app/RevealOnScroll.tsx`: animação de entrada durante a rolagem.
- `app/NfseSyncDemo.tsx` e `app/NfseConsultation.tsx`: demos de NFS-e.
- `app/FleetControlDemo.tsx`: viagens e manutenções da demo de frota.
- `public/`: recursos visuais.
- `tests/`: verificações do HTML renderizado.
