"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./NfseSyncDemo.module.css";
import { NfseConsultation } from "./NfseConsultation";

const files = ["10876_1235.pdf", "11767_1210.pdf", "11768_1222.pdf", "12350_1052.pdf", "12400_1233.pdf", "12844_1148.pdf", "15043_1062.pdf", "17977_1052.pdf", "20790_491.pdf", "20790_492.pdf"];
const companies = ["Aurora Sistemas", "Horizonte Digital", "Vale Azul Serviços", "Nuvem Norte Tecnologia", "Ponte Nova Soluções"];
// Fixtures demonstrativas: não representam empresas, documentos ou chaves reais.
const demoFiles = files.map((file, index) => ({ file, company: companies[index % companies.length], cnpj: `00.000.000/000${index % 5 + 1}-00`, series: "1", number: String(1235 + index), municipality: ["Franca", "Ribeirão Preto", "São Paulo"][index % 3], key: `DEMO-${String(index + 1).padStart(6, "0")}`, detail: `Consulta simulada | DPS ${1001 + index}` }));
const summary = [["📁", "Entrada", "3305"], ["✓", "Processados", "1039"], ["⚠", "PDF pendente", "14"], ["⊗", "PDF não encontrado", "0"], ["×", "Não encontrados", "5"], ["▤", "Sem dados", "755"], ["◉", "XML gerados", "1061"], ["▤", "PDF gerados", "964"]];
const categories = [["✓", "Processados"], ["✓", "OK"], ["▤", "Já Existe"], ["⚠", "PDF Não Encontrado"], ["⊗", "Erro"], ["×", "Não Encontrado"], ["▤", "Sem Dados"], ["📁", "Sem Empresa"], ["ℹ", "Sem Cert."]];
const folders = ["XML_SYNC", "PROCESSADOS", "SEM_DADOS", "NAO_ENCONTRADOS", "PDF_PENDENTE", "PDF_NAO_ENCONTRADO"];

export function NfseSyncDemo() {
  const [view, setView] = useState("sync");
  const [processed, setProcessed] = useState(34);
  const [running, setRunning] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");
  const screenRef = useRef<HTMLDivElement>(null);
  const filterId = useId();
  const queryId = useId();

  useEffect(() => {
    const element = screenRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setProcessed(0);
      setRunning(true);
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setProcessed((count) => Math.min(count + 2, 34)), 180);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (processed === 34) setRunning(false);
  }, [processed]);

  const progress = Math.round(processed / 34 * 100);
  const visibleFiles = demoFiles.slice(0, processed).filter((row) => (filter === "Todos" || filter === "OK") && `${Object.values(row).join(" ")} OK`.toLowerCase().includes(query.trim().toLowerCase()));
  const message = running ? `Sincronizando extratos: ${processed} de 34…` : processed === 34 ? "Sincronização concluída: 34 resultado(s)." : `Sincronização interrompida: ${processed} resultado(s).`;

  return <figure className={styles.preview}>
    <div className={styles.scrollArea} tabIndex={0} role="region" aria-label="Prévia do NFS-e Sync — role horizontalmente para visualizar toda a janela">
      <div className={styles.window} ref={screenRef}>
        <div className={styles.titlebar}><span>🔄 NFSe Sync v0.1.0</span><span aria-hidden="true">—　▢　×</span></div>
        <div className={styles.workspace}>
          <aside className={styles.sidebar} aria-label="Menu interno da aplicação demonstrativa">
            <h4>NFS-e Sync</h4><p>Extratos de Faturamento</p>
            <nav aria-label="Seções do NFS-e Sync">
              <button className={view === "sync" ? styles.selected : ""} aria-pressed={view === "sync"} onClick={() => setView("sync")} type="button">🔄 Sincronização</button>
              <button className={view === "consult" ? styles.selected : ""} aria-pressed={view === "consult"} onClick={() => setView("consult")} type="button">▧ Consulta</button>
              <button disabled type="button">▤ Configuração</button>
            </nav>
            <div className={styles.summary}><h5>Resumo Rápido</h5>{summary.map(([icon, label, value]) => <div key={label}><span><i>{icon}</i>{label}</span><b>{value}</b></div>)}</div>
            <span className={styles.version}>v0.1.0</span>
          </aside>
          <div className={styles.main}>
            {view === "consult" ? <NfseConsultation /> : <>
            <header className={styles.heading}><h4>Sincronização</h4><p>Sincronize extratos, gere XML e produza DANFSE local quando necessário.</p></header>
            <div className={styles.panel}>
              <div className={styles.actions}>
                <button className={styles.primary} type="button" disabled={running} onClick={() => { setProcessed(0); setRunning(true); }}>🔄 Sincronizar agora</button>
                <button type="button" disabled={!running} onClick={() => setRunning(false)}>■ Parar</button>
                <button type="button" disabled>▧ Preencher consulta manual</button>
                <button type="button" disabled>▥ Exportar Excel</button>
              </div>
              <div className={styles.folders}>{folders.map((folder) => <button type="button" disabled key={folder}>📁 Abrir {folder}</button>)}</div>
              <div className={styles.progress} role="progressbar" aria-label="Progresso da sincronização demonstrativa" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><i style={{width:`${progress}%`}} /><span>{progress}%</span></div>
              <div className={styles.counters}>{categories.map(([icon, label], index) => <div key={label}><span><i>{icon}</i>{label}</span><strong>{index < 2 ? processed : 0}</strong></div>)}</div>
              <div className={styles.filters}><label htmlFor={filterId}>Filtro</label><select id={filterId} value={filter} onChange={(event) => setFilter(event.target.value)}><option>Todos</option>{categories.slice(1).map(([, label]) => <option key={label}>{label}</option>)}</select><label className={styles.search}><span className={styles.srOnly}>Buscar arquivos na demonstração</span><input id={queryId} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por arquivo, empresa, CNPJ, número, município, chave ou detalhe..." /></label></div>
              <div className={styles.tableWrap}><table><thead><tr>{["Arquivo", "Empresa", "Status", "CNPJ", "Série", "Número", "Município", "Chave", "Detalhe"].map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{visibleFiles.map((row) => <tr key={row.file}>{[row.file, row.company, "OK", row.cnpj, row.series, row.number, row.municipality, row.key, row.detail].map((value, index) => <td key={index} title={value}>{value}</td>)}</tr>)}{visibleFiles.length === 0 ? <tr><td colSpan={9} className={styles.empty}>{running ? "Processando extratos…" : "Nenhum arquivo corresponde ao filtro."}</td></tr> : null}</tbody></table></div>
            </div>
            <p className={styles.status} role="status">{message}</p>
            </>}
          </div>
        </div>
      </div>
    </div>
    <figcaption className={styles.caption}>Dados fictícios para demonstração: empresas, CNPJs, números e chaves não são documentos fiscais reais. Interface baseada na captura enviada, com sincronização, busca e filtro simulados localmente. Os demais atalhos não acessam arquivos nem serviços fiscais.</figcaption>
  </figure>;
}
