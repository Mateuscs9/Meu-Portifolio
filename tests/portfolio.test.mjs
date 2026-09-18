import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("o build apresenta os projetos, contatos e avisos das demos", async () => {
  const html = (await readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8")).replace(/<!--.*?-->/gs, "");
  for (const text of ["Controle de KM", "Olá, Alex", "Iniciar viagem", "NFSe Sync", "Aurora Sistemas", "Somente uma prévia do projeto", "Disponível para novas oportunidades", "em soluções digitais", "que funcionam.", "Gosto de transformar ideias em soluções úteis", "mateus.costasouza.58@gmail.com"]) {
    assert.ok(html.includes(text), `Conteúdo ausente: ${text}`);
  }
  for (const url of ["https://github.com/Mateuscs9/NFSe-Sync", "https://github.com/Mateuscs9/Controle-de-Frota", "https://www.linkedin.com/in/mateus-costa-souza-2364642a7/"]) {
    assert.ok(html.includes(url), `Link ausente: ${url}`);
  }
  assert.doesNotMatch(html, /Dado ocultado na referência|desenvolvedor remoto|oportunidade remota|Este portfólio se apresenta enquanto você rola|em produtos digitais/);
});
