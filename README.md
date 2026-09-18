# Meu Portifólio

Portfólio pessoal para apresentar minha trajetória e meus projetos como desenvolvedor.

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

A implementação usa Next.js App Router, React, TypeScript e CSS, com configuração para publicação na Vercel. As demos funcionam localmente no navegador e não precisam de banco de dados ou credenciais.

O gerenciador de dependências é pnpm, com versão fixada em `package.json`.

Não publique arquivos `.env`, credenciais, logs, builds ou prints internos. Para a primeira publicação pública, prefira apenas o estado atual revisado, sem o histórico antigo do checkout.

## Executar localmente

Requisito: Node.js 22.x e pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Para gerar o build:

```sh
pnpm build
pnpm test
pnpm typecheck
```

## Organização

- `app/page.tsx`: apresentação, projetos e contato.
- `app/RevealOnScroll.tsx`: animação de entrada durante a rolagem.
- `app/NfseSyncDemo.tsx` e `app/NfseConsultation.tsx`: demos de NFS-e.
- `app/FleetControlDemo.tsx`: viagens e manutenções da demo de frota.
- `public/`: recursos visuais.
- `tests/`: verificações do HTML renderizado.

## Publicar na Vercel

Importe `Mateuscs9/Meu-Portifolio`, com a raiz do repositório e preset Next.js. O arquivo `vercel.json` define os comandos de instalação e build. Não é necessário configurar segredos para executar as demos.

Os metadados usam o domínio de produção informado pela Vercel. Para um domínio próprio, configure opcionalmente `NEXT_PUBLIC_SITE_URL` com a URL completa.
