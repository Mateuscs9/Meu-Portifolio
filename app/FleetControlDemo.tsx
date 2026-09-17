"use client";

import { useState, type ReactNode } from "react";
import styles from "./FleetControlDemo.module.css";

const trips = [
  { destination: "Unidade Norte", departure: "08:10", arrival: "08:40", km: 12 },
  { destination: "Centro de Distribuição", departure: "10:00", arrival: "11:15", km: 38 },
  { destination: "Filial Horizonte", departure: "14:00", arrival: "15:45", km: 64 },
];

function Icon({ children }: { children: ReactNode }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
}

// A demo usa dados locais e não acessa os registros da frota.
export function FleetControlDemo() {
  const [view, setView] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const displayedTrips = active ? [
    { destination: "Unidade Vale Azul", departure: "08:30", arrival: "11:00", km: 96 },
    { destination: "Filial Jardim Sul", departure: "13:15", arrival: "15:15", km: 74 },
  ] : trips;
  return <figure className={styles.preview} aria-label="Tela inicial do aplicativo Controle de KM">
    <div className={styles.screen}>
      <header className={styles.header}>
        <button className={styles.menu} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu do Controle de KM">
          <Icon><path d="M4 6h16M4 12h16M4 18h16" /></Icon>
        </button>
        <div className={styles.brand}><strong>Controle de KM</strong><span>{view === "home" ? "Início" : "Manutenções"}</span></div>
        <div className={styles.account}>
          <span className={styles.avatar}><Icon><circle cx="12" cy="8" r="4" fill="currentColor" stroke="none" /><path d="M3 23v-4a9 7 0 0 1 18 0v4" fill="currentColor" stroke="none" /></Icon></span>
          <div><strong>{"Alex"}</strong><span>Operações</span></div>
        </div>
      </header>
      {menuOpen ? <nav className={styles.appNav} aria-label="Navegação da demo de KM">
        <button type="button" aria-pressed={view === "home"} onClick={() => { setView("home"); setMenuOpen(false); }}>Início</button>
        <button type="button" aria-pressed={view === "maintenance"} onClick={() => { setView("maintenance"); setMenuOpen(false); }}>Manutenções</button>
      </nav> : null}

      <div className={styles.content}>
        {view === "maintenance" ? <MaintenanceScreen /> : <>
        <div className={styles.greeting}><h4>Olá, {"Alex"}</h4><p>Bem-vindo de volta.</p></div>

        <section className={styles.panel} aria-label="Resumo do mês">
          <h5>Resumo do mês</h5>
          <p className={styles.month}>{"abril de 2025"}</p>
          <div className={styles.metrics}>
            <div className={styles.metric}><span className={styles.metricIcon}><Icon><circle cx="6" cy="20" r="2" /><circle cx="18" cy="4" r="2" /><path d="M8 20h2a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h7" /></Icon></span><strong>{active ? "6" : "3"}</strong><span>Viagens</span></div>
            <div className={styles.metric}><span className={styles.metricIcon}><Icon><path d="M3 15a9 9 0 1 1 18 0M12 15l5-7M5 20h14M5 15h.01M19 15h.01" /></Icon></span><strong>{active ? "428" : "114"}</strong><span>KM rodados</span></div>
            <div className={styles.metric}><span className={styles.metricIcon}><Icon><circle cx="12" cy="12" r="10" /><path d="M12 6v6l5 3" /></Icon></span><strong>{active ? "12h30" : "3h30"}</strong><span>Horas dirigidas</span></div>
          </div>
        </section>

        {active ? <section className={styles.activeTrip} aria-label="Viagem em andamento">
          <span className={styles.activeBadge}>● Viagem em andamento</span>
          <strong>VEÍCULO DEMO COMPACTO AZUL - DEM0A01</strong>
          <p>◷ Saída 22/04/2025, 09:05</p>
        </section> : null}
        <button type="button" className={styles.register} onClick={() => setActive((current) => !current)} aria-label={active ? "Finalizar viagem demonstrativa" : "Iniciar viagem demonstrativa"}>
          <Icon><path d={active ? "M4 12h12M10 6l6 6-6 6M16 3h4v18h-4" : "M12 4v16M4 12h16"} /></Icon><span>{active ? "Finalizar minha viagem" : "Iniciar viagem"}</span>
        </button>

        <section className={`${styles.panel} ${styles.history}`} aria-label="Últimas viagens">
          <h5>Últimas viagens</h5>
          <button className={styles.allTrips} type="button" disabled title="Histórico completo ainda não reproduzido nesta prévia">Ver todas</button>
          <ul className={styles.tripList}>
            {displayedTrips.map((trip) => <li key={trip.destination} className={styles.trip}>
              <span className={styles.closed}><i />Fechada</span>
              <div className={styles.tripInfo}><strong>{active ? "VEÍCULO DEMO COMPACTO AZUL - DEM0A01" : "VEÍCULO DEMO COMPACTO AZUL - DEM0A01"}</strong><span>{trip.destination}</span><span>Saída {trip.departure} - Chegada {trip.arrival}</span></div>
              <strong className={styles.distance}>{trip.km} km</strong>
            </li>)}
          </ul>
        </section>
        </>}
      </div>
    </div>
    <figcaption className={styles.caption}>Inicie e finalize uma viagem demonstrativa. Abra o menu para ver Manutenções. Todos os dados são fictícios; nenhuma viagem ou manutenção real é registrada.</figcaption>
  </figure>;
}

function MaintenanceScreen() {
  return <section className={styles.maintenance}>
    <h4>Manutenções</h4><p className={styles.maintenanceIntro}>Alertas calculados a partir da última manutenção cadastrada</p>
    {[{ name: "FURGÃO DEMO UTILITÁRIO - DEM0B02", km: "82.450 km", updated: "Atualizado em 18/04/2025, 10:20" }, { name: "VEÍCULO DEMO COMPACTO - DEM0C03", km: "0 km", updated: "Sem KM registrado" }].map((vehicle) => <article className={styles.maintenanceVehicle} key={vehicle.name}>
      <header><span className={styles.maintenanceIcon}><Icon><path d="M3 6h11v10H3zM14 10h4l3 4v2h-7" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></Icon></span><strong>{vehicle.name}</strong><span className={styles.noBase}>Sem base</span></header>
      <div className={styles.odometer}><strong>{vehicle.km}</strong><span>{vehicle.updated}</span></div>
      {[["oil", "Troca de óleo sem base", "Cadastre a última manutenção para iniciar o controle"], ["service", "Revisão sem base", "Cadastre a última manutenção para iniciar o controle"], ["tires", "Pneus sem base", "Cadastre o último alinhamento, balanceamento e rodízio"]].map(([type, title, copy]) => <div className={styles.maintenanceAlert} key={type}><span className={styles.maintenanceIcon}><Icon>{type === "tires" ? <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v5M12 16v5M3 12h5M16 12h5" /></> : type === "service" ? <path d="M14 5a5 5 0 0 0-6 6L3 16l5 5 5-5a5 5 0 0 0 6-6l-4 4-4-4 4-4" /> : <><path d="M4 6l5-3h6l3 4-7 7H5l-3-4z" /><path d="M18 13s-3 4-3 6a3 3 0 0 0 6 0c0-2-3-6-3-6z" /></>}</Icon></span><div><strong>{title}</strong><p>{copy}</p></div></div>)}
    </article>)}
  </section>;
}
