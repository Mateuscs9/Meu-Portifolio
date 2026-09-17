"use client";

import { useId, useState } from "react";
import styles from "./NfseSyncDemo.module.css";

const companies = ["Aurora Sistemas", "Horizonte Digital", "Vale Azul Serviços"];

export function NfseConsultation() {
  const id = useId();
  const [company, setCompany] = useState(companies[0]);
  const [key, setKey] = useState("DEMO-000001");
  const [result, setResult] = useState<{ company: string; key: string } | null>(null);
  const [feedback, setFeedback] = useState("");
  const [expanded, setExpanded] = useState(false);
  const path = "Demo/PDF_SYNC/danfse_exemplo.pdf";
  async function copyPath() {
    try {
      await navigator.clipboard.writeText(path);
      setFeedback("Caminho fictício copiado.");
    } catch {
      setFeedback("Não foi possível copiar. Caminho fictício: " + path);
    }
  }
  return <>
    <header className={styles.heading}><h4>Consulta</h4><p>Consulte uma NFS-e por chave, salve o XML e gere o DANFSE local.</p></header>
    <div className={styles.panel}>
      <form className={styles.consultForm} onSubmit={(event) => {
        event.preventDefault();
        if (!key.trim().startsWith("DEMO-")) { setResult(null); setFeedback("Use uma chave fictícia iniciada por DEMO-. Esta prévia não consulta notas reais."); return; }
        setResult({ company, key: key.trim() }); setFeedback("Consulta simulada concluída. DANFSE de demonstração gerado."); setExpanded(false);
      }}>
        <label htmlFor={id + "-company"}>Empresa:</label>
        <select id={id + "-company"} value={company} onChange={(event) => { setCompany(event.target.value); setResult(null); }}>{companies.map((name) => <option key={name}>{name}</option>)}</select>
        <label htmlFor={id + "-key"}>Chave:</label>
        <input id={id + "-key"} value={key} required onChange={(event) => { setKey(event.target.value); setResult(null); }} />
        <button className={styles.consultSubmit} type="submit">▧ Consultar e gerar DANFSE</button>
      </form>
      <p className={styles.status} role="status">{feedback || "Demonstração local · selecione a empresa e use a chave fictícia preenchida."}</p>
      {result ? <section className={styles.consultResult} aria-label="Resultado da consulta demonstrativa">
        <h4>DANFSE</h4><p>Consulta concluída. DANFSE local gerado com sucesso — simulação.</p>
        <p>XML: Demo/XML_SYNC/nota_exemplo.xml<br />PDF: {path} (caminho virtual)</p>
        <div className={styles.actions}>
          <button type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>▧ {expanded ? "Recolher DANFSE" : "Abrir DANFSE"}</button>
          <button type="button" disabled title="A demonstração não acessa pastas do computador">📁 Abrir pasta</button>
          <button type="button" onClick={copyPath}>▤ Copiar caminho</button>
        </div>
        <div className={styles.danfse} style={{ maxHeight: expanded ? "none" : 290 }} tabIndex={0} role="region" aria-label="DANFSE fictício, role para visualizar">
          <div className={styles.documentHeader}><strong>DANFSE · DOCUMENTO DEMONSTRATIVO SEM VALIDADE FISCAL</strong><p>{result.company} · Chave: {result.key}</p></div>
          <div className={styles.taxSummary}>{[["BC ISSQN", "R$ 1.200,00"], ["Alíquota Aplicada", "3,00%"], ["Retenção do ISSQN", "Não Retido"], ["ISSQN Apurado", "R$ 36,00"]].map(([label, value]) => <div key={label}>{label}<strong>{value}</strong></div>)}</div>
          <div className={styles.taxColumns}>
            <TaxBlock title="TRIBUTAÇÃO FEDERAL" fields={[["IRRF","R$ 0,00"],["Contribuição Previdenciária - Retida","R$ 0,00"],["Contribuições Sociais - Retidas","R$ 0,00"],["Descrição Contrib. Sociais - Retidas","2 - PIS/COFINS Não Retidos"],["PIS - Débito Apuração Própria","R$ 0,00"],["COFINS - Débito Apuração Própria","R$ 0,00"]]} />
            <TaxBlock title="VALOR TOTAL DA NFS-E" fields={[["Valor do Serviço","R$ 1.250,00"],["Desconto Condicionado","R$ 0,00"],["Desconto Incondicionado","R$ 50,00"],["ISSQN Retido","R$ 0,00"],["Total das Retenções Federais","R$ 0,00"],["PIS/COFINS - Débito Apur. Própria","R$ 0,00"],["Valor Líquido da NFS-e","R$ 1.200,00"],["Tributos Aprox.","Não informado"]]} />
          </div>
          <h5>INFORMAÇÕES COMPLEMENTARES</h5><p>Licenciamento ou cessão de direito de uso de programas de computador. Valores e nomes fictícios, exclusivamente para demonstrar a interface.</p>
        </div>
      </section> : null}
    </div>
  </>;
}

function TaxBlock({ title, fields }: { title: string; fields: string[][] }) {
  return <section className={styles.taxBlock}><h5>{title}</h5><div>{fields.map(([label, value]) => <p key={label}>{label}<strong>{value}</strong></p>)}</div></section>;
}
