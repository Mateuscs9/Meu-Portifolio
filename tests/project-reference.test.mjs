import assert from "node:assert/strict";
import test from "node:test";

test("portfolio renders the supplied KM and NFSe screen references", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  const html = (await response.text()).replace(/<!--.*?-->/gs, "");
  for (const label of ["Controle de KM", "Olá, Alex", "abril de 2025", "114", "3h30", "Iniciar viagem", "Unidade Norte", "NFSe Sync v0.1.0", "Resumo Rápido", "Sincronizar agora", "Consulta", "Exportar Excel", "10876_1235.pdf", "Sincronização concluída: 34 resultado(s)."]) {
    if (label === "Dado ocultado na referência") continue;
    assert.ok(html.includes(label), `Missing reference content: ${label}`);
  }
  assert.doesNotMatch(html, /Fiat Strada|Olá, Lucas|ABC1D23|MINHA FROTA|EXTRATO_ATRAM/);
  assert.ok(html.includes("Aurora Sistemas"));
  assert.ok(html.includes('href="https://github.com/Mateuscs9/NFSe-Sync"'));
  assert.ok(html.includes('href="https://github.com/Mateuscs9/Controle-de-Frota"'));
  assert.equal((html.match(/<strong>Somente uma prévia do projeto<\/strong>/g) || []).length, 2);
  assert.ok(html.includes("Não é o sistema completo"));
  assert.ok(html.includes("Buscando oportunidade como desenvolvedor remoto"));
  assert.doesNotMatch(html, /FIAT UNO|Barretos|Ituverava|81h06|1844|16\/09\/2026/);
  assert.ok(html.includes("Dados fictícios para demonstração"));
  assert.doesNotMatch(html, /Dado ocultado na referência/);
  assert.match(html, /disabled=""[^>]*>[^<]*▥ Exportar Excel/);
  for (const story of ["Uma consulta por vez", "Do PDF à NFS-e", "Validado com casos reais", "A informação estava longe do carro", "O registro foi para o celular", "A frota ficou visível"]) {
    assert.ok(html.includes(story), `Missing project story: ${story}`);
  }
});
