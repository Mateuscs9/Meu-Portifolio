import { FleetControlDemo } from "./FleetControlDemo";
import { NfseSyncDemo } from "./NfseSyncDemo";
import { RevealOnScroll } from "./RevealOnScroll";
import type { ReactNode } from "react";

const skills = ["Python", "JavaScript", "React", "Node.js", "SQL", "Automação", "UX de produto"];

export default function Home() {
  return <main>
    <header className="topbar">
      <a className="identity" href="#inicio" aria-label="Ir para o início"><span className="logo-mark">MS</span><b>Mateus Costa Souza</b></a>
      <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></nav>
    </header>

    <section className="hero-stage" id="inicio">
      <div className="hero-copy-block">
        <div className="availability"><i /> Disponível para novas oportunidades</div>
        <p className="eyebrow">OLÁ, EU SOU MATEUS COSTA SOUZA</p>
        <h1>Transformo<br /><span>problemas reais</span><br />em soluções digitais<br />que funcionam.</h1>
        <p className="hero-description">Desenvolvedor Full Stack com foco em aplicações e automações que simplificam o dia a dia.</p>
        <div className="hero-actions"><a className="button primary" href="#projetos">Explorar projetos <span>↓</span></a><a className="button secondary" href="#contato">Vamos conversar</a></div>

      </div>
      <div className="hero-system" aria-hidden="true">
        <div className="system-orbit orbit-a" /><div className="system-orbit orbit-b" />
        <div className="code-card"><small>mateus.build()</small><code><b>const</b> ideia = problema;<br /><b>const</b> produto = <em>resolver</em>(ideia);<br /><strong>return</strong> produto;</code></div>
        <div className="signal-card"><span>01</span><p>entender</p></div><div className="signal-card second"><span>02</span><p>construir</p></div><div className="signal-card third"><span>03</span><p>entregar</p></div>
      </div>
    </section>

    <section className="story-section" id="sobre"><RevealOnScroll><div className="story-intro">
      <p className="section-index">01 · SOBRE</p><h2>Sou o Mateus.</h2><p className="about-intro">Gosto de transformar ideias em soluções úteis, criando aplicações funcionais, bem estruturadas e pensadas para resolver problemas reais.</p>
      <div className="about-copy"><p>Comecei minha trajetória como técnico em eletrônica. Depois de concluir a faculdade, decidi focar na busca por uma oportunidade como desenvolvedor. Foi assim que cheguei à Atram, onde trabalho atualmente.</p><p>Foi lá que comecei a criar projetos por iniciativa própria, olhando para tarefas do dia a dia que poderiam ficar mais simples. O NFS-e Sync e o Controle de KM nasceram desse movimento: perceber uma necessidade e colocar a mão na massa para construir uma solução.</p></div>
      <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </div></RevealOnScroll></section>

    <section className="projects-story" id="projetos">
      <div className="projects-heading"><p className="section-index">02 · PROJETOS</p><h2>Projetos reais,<br /><span>apresentados por dentro.</span></h2><p>Explore prévias dos projetos e acesse seus repositórios para conhecer mais sobre o desenvolvimento. As demonstrações abaixo utilizam dados fictícios e apresentam apenas versões parciais dos sistemas.</p></div>
      <RevealOnScroll><article className="project-chapter real-project nfse-project">
        <ProjectNarrative number="01 / AUTOMAÇÃO FISCAL" title={<>NFS-e<br />Sync</>} description="Uma aplicação desktop criada para transformar uma rotina fiscal repetitiva em um fluxo automatizado, organizado e rastreável." story={[{ label:"01 · ANTES", title:"Uma consulta por vez", copy:"O setor financeiro precisava abrir cada extrato, localizar CNPJ, série, número e município, preencher o portal, lidar com captcha, baixar XML e PDF e organizar tudo manualmente para conferência." },{ label:"02 · CONSTRUÇÃO", title:"Do PDF à NFS-e", copy:"Desenvolvi a solução em Python e PySide6, integrada às APIs da NFS-e Nacional com certificado digital A1. Ela interpreta os extratos, consulta as notas, trata XMLs e gera o DANFSE quando necessário." },{ label:"03 · IMPACTO", title:"Um processo rastreável", copy:"O fluxo passou a ter mais velocidade, padronização e segurança operacional. Resultados, pendências e notas não encontradas ficam classificados, apoiando conferências e auditorias." },{ label:"04 · EVOLUÇÃO", title:"Validado com casos reais", copy:"A geração local do DANFSE foi refinada com uma bateria de 53 XMLs reais, incluindo 14 casos com desconto incondicionado, até reproduzir corretamente os dados fiscais disponíveis." }]} facts={[["Entrada","Extratos de faturamento em PDF"],["Fluxo","DPS → consulta autenticada → XML e DANFSE"],["Integração","API Nacional com certificado A1 e mTLS"],["Saída","Arquivos organizados e relatório em Excel"]]} highlights={["Parser tolerante para diferentes extratos em PDF","Manipulação de XML, Base64 e GZip","Geração local do DANFSE como alternativa ao download","Cache e classificação evitam retrabalho e duplicidade"]} tags={["Python","PySide6","API REST","mTLS","XML","PDF","Excel"]} repository="https://github.com/Mateuscs9/NFSe-Sync" />
        <div className="project-demo"><DemoNotice /><NfseSyncDemo /></div>
      </article></RevealOnScroll>
      <RevealOnScroll delay={80}><article className="project-chapter fleet-project">
        <ProjectNarrative number="02 / OPERAÇÃO DE FROTA" title={<>Controle<br />de KM</>} description="Um aplicativo criado para substituir o registro em papel e dar visibilidade ao uso dos veículos da empresa." story={[{ label:"01 · ANTES", title:"A informação estava longe do carro", copy:"Para usar um veículo, o funcionário precisava ir até uma folha que ficava em outro local e anotar nome, datas, horários e quilômetros de saída e chegada." },{ label:"02 · CONSTRUÇÃO", title:"O registro foi para o celular", copy:"Criei um app com acesso individual, seleção por modelo e placa, saída e chegada vinculadas e preenchimento automático de data e hora. O KM e a foto do painel mantêm a evidência da operação." },{ label:"03 · IMPACTO", title:"A frota ficou visível", copy:"Os registros passaram a ficar centralizados para consulta. Funcionários têm um fluxo mais direto e a diretoria consegue acompanhar o histórico e identificar quem está com cada veículo." },{ label:"04 · EVOLUÇÃO", title:"O produto cresceu com o uso", copy:"O projeto evoluiu com perfis de funcionário, diretoria e TI, fila offline, validação de inconsistências, manutenção da frota e controle das versões distribuídas no Android." }]} facts={[["Acesso","Conta individual disponibilizada pela TI"],["Regra central","Nenhuma chegada sem uma saída aberta"],["Evidência","KM e foto do painel para conferência"],["Continuidade","Fila offline sincroniza quando a conexão retorna"]]} highlights={["Bloqueio de veículos e viagens abertas conflitantes","Validação de KM inicial, final e justificativas","Permissões protegidas por perfil e políticas RLS","Histórico e manutenção integrados à operação"]} tags={["JavaScript","Supabase","PostgreSQL · RLS","Android","Offline first"]} repository="https://github.com/Mateuscs9/Controle-de-Frota" />
        <div className="project-demo"><DemoNotice /><FleetControlDemo /></div>
      </article></RevealOnScroll>
      <div className="verified-projects-note"><span>DO PRODUTO AO PORTFÓLIO</span><p>Estas demos têm somente a intenção de apresentar uma prévia dos projetos. Todas as informações operacionais são fictícias. As interações são simulações locais, sem conexão com sistemas em produção, e não representam os sistemas completos.</p></div>
    </section>

    <section className="contact-stage" id="contato"><p className="section-index">03 · CONTATO</p><h2>Vamos<br />conversar?</h2><p>Quer conversar sobre uma vaga ou conhecer melhor meu trabalho? Entre em contato.</p><div className="contact-actions"><a className="button primary contact-button" href="mailto:mateus.costasouza.58@gmail.com"><span className="social-icon"><ContactIcon kind="email" /></span><span>Enviar e-mail</span><span className="contact-arrow" aria-hidden="true">↗</span></a><a className="button secondary contact-button github-button" href="https://github.com/Mateuscs9" target="_blank" rel="noopener noreferrer"><span className="social-icon"><ContactIcon kind="github" /></span><span>GitHub · Mateuscs9</span><span className="contact-arrow" aria-hidden="true">↗</span></a><a className="button secondary contact-button linkedin-button" href="https://www.linkedin.com/in/mateus-costa-souza-2364642a7/" target="_blank" rel="noopener noreferrer"><span className="social-icon"><ContactIcon kind="linkedin" /></span><span>LinkedIn</span><span className="contact-arrow" aria-hidden="true">↗</span></a></div><p className="contact-email"><a href="mailto:mateus.costasouza.58@gmail.com">mateus.costasouza.58@gmail.com</a></p></section>
    <footer><span>Mateus Costa Souza · Desenvolvedor Full Stack</span><span>© 2026</span></footer>
  </main>;
}

type ProjectStoryStep = { label: string; title: string; copy: string };
function DemoNotice() {
  return <aside className="demo-preview-notice" aria-label="Aviso sobre a demonstração"><strong>Somente uma prévia do projeto</strong><p>Demo com dados fictícios e interações simuladas. Não é o sistema completo e não acessa serviços ou dados reais.</p></aside>;
}
function ContactIcon({ kind }: { kind: "github" | "linkedin" | "email" }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
    {kind === "github" ? <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /> : kind === "linkedin" ? <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM8 19H5V9.5h3V19ZM6.5 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3h.1c.4-.8 1.4-1.6 2.8-1.6 3 0 3.5 2 3.5 4.5V19Z" /> : <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></g>}
  </svg>;
}
type ProjectNarrativeProps = { number: string; title: ReactNode; description: string; story: ProjectStoryStep[]; facts: string[][]; highlights: string[]; tags: string[]; repository: string };

function ProjectNarrative({ number, title, description, story, facts, highlights, tags, repository }: ProjectNarrativeProps) {
  return <div className="project-narrative"><span className="project-number">{number}</span><h3>{title}</h3><p>{description}</p><ol className="project-storyline">{story.map((step) => <li key={step.label}><span>{step.label}</span><div><h4>{step.title}</h4><p>{step.copy}</p></div></li>)}</ol><div className="project-facts">{facts.map(([label,value]) => <span key={label}><b>{label}</b>{value}</span>)}</div><div className="engineering-highlights"><b>POR DENTRO DA SOLUÇÃO</b><ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div><div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button secondary repository-button" href={repository} target="_blank" rel="noopener noreferrer" aria-label={"Ver repositório no GitHub: " + repository.split("/").pop()}><ContactIcon kind="github" /><span>Ver repositório no GitHub</span><span aria-hidden="true">↗</span></a></div>;
}
