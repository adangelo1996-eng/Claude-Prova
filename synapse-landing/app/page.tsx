"use client";

import { useEffect, useState } from "react";

const MOTTO_PHASES = {
  BIOLOGY: "BIOLOGY_LAGS",
  AI: "AI_CATCH_UP",
} as const;

type MottoPhase = (typeof MOTTO_PHASES)[keyof typeof MOTTO_PHASES];

export default function Home() {
  const [phase, setPhase] = useState<MottoPhase>(MOTTO_PHASES.BIOLOGY);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        setPhase(MOTTO_PHASES.AI);
      }, 2200);
      return () => clearTimeout(timer);
    }

    setPhase(MOTTO_PHASES.AI);
  }, []);

  useEffect(() => {
    document.body.dataset.displayFont = "true";
    return () => {
      delete document.body.dataset.displayFont;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setHeaderVisible(y > window.innerHeight * 0.15);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="synapse-root">
      <header className={`synapse-header ${headerVisible ? "is-visible" : ""}`}>
        <div className="synapse-logo">
          Synapse
          <span className="synapse-logo-dot" />
        </div>
        <nav className="synapse-nav">
          <button type="button" onClick={() => scrollToId("solutions")}>
            Solutions
          </button>
          <button type="button" onClick={() => scrollToId("products")}>
            Products
          </button>
          <button type="button" onClick={() => scrollToId("why")}>
            Why Synapse
          </button>
          <button type="button" onClick={() => scrollToId("contact")}>
            Contact
          </button>
        </nav>
      </header>

      <main className="synapse-main">
        <section className="hero" aria-label="Synapse motto">
          <div className="hero-motto" aria-live="polite">
            <span
              className={`hero-motto-line ${
                phase === MOTTO_PHASES.BIOLOGY ? "is-visible" : ""
              }`}
            >
              Biology lags.
            </span>
            <span
              className={`hero-motto-line ${
                phase === MOTTO_PHASES.AI ? "is-visible" : ""
              }`}
            >
              AI Catch up.
            </span>
          </div>

          <div className="hero-scroll-hint">
            Scroll to discover
            <div className="hero-scroll-line" />
          </div>
        </section>

        <section id="solutions" className="section" aria-labelledby="solutions-title">
          <div className="section-title" id="solutions-title">
            What we do
          </div>
          <h2 className="section-heading">
            We turn complex operations into readable, actionable systems.
          </h2>
          <div className="section-body">
            <p>
              Synapse designs and implements AI-native business intelligence, slim
              management tools, and human resources systems that stay out of the
              way while keeping every signal connected.
            </p>
            <p>
              From the first data source to the last payslip, we align your
              dashboards, workflows, and people operations so decisions are made on
              live reality rather than static reports.
            </p>
          </div>
        </section>

        <section id="products" className="section" aria-labelledby="products-title">
          <div className="section-title" id="products-title">
            Products
          </div>
          <h2 className="section-heading">
            Focused tools for BI and HR, designed to work together.
          </h2>
          <div className="section-body">
            Synapse combines a lean analytics layer with a complete HR backbone,
            so your numbers and your teams stay in sync.
          </div>

          <div className="section-grid">
            <article className="card" aria-label="Promethys dashboard">
              <div className="card-label">Promethys</div>
              <h3 className="card-title">AI-first business and operations dashboard.</h3>
              <p className="card-body">
                Promethys is your single view of how the company is actually
                behaving: revenue, operations, risk, and people metrics in one slim
                interface.
              </p>
              <ul className="card-list">
                <li>Connects BI, finance, and operational data into live views.</li>
                <li>Surfaces anomalies and trends instead of static charts.</li>
                <li>Provides a lightweight management layer on top of existing tools.</li>
                <li>Designed for executives who need clarity, not more widgets.</li>
              </ul>
            </article>

            <article className="card" aria-label="Payday HR platform">
              <div className="card-label">Payday</div>
              <h3 className="card-title">End-to-end HR management, signal-driven.</h3>
              <p className="card-body">
                Payday manages the full lifecycle of your people – from hiring to
                payroll – with the same precision you expect from your financial
                systems.
              </p>
              <ul className="card-list">
                <li>Centralizes contracts, scheduling, performance, and compliance.</li>
                <li>Feeds HR signals back into Promethys for a true people graph.</li>
                <li>Automates repetitive HR workflows while keeping decisions human.</li>
                <li>Built for distributed teams and multi-country operations.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="why" className="section" aria-labelledby="why-title">
          <div className="section-title" id="why-title">
            Why Synapse
          </div>
          <h2 className="section-heading">
            Biology lags. AI catches up your business.
          </h2>
          <div className="section-body">
            <p>
              Most organizations already have the raw data they need. What is
              missing is a clean nervous system: one place where signals are
              interpreted, routed, and acted on in real time.
            </p>
            <p>
              Synapse builds that layer. We combine implementation services with
              opinionated products so your BI, management tooling, and HR are
              simple enough to actually be used, and intelligent enough to adapt as
              the company evolves.
            </p>
          </div>
        </section>

        <section id="contact" className="cta" aria-labelledby="contact-title">
          <div className="cta-inner">
            <div className="cta-title" id="contact-title">
              Work with Synapse
            </div>
            <div className="cta-text">
              Tell us how your data, tools, and teams are structured today. We
              will map a practical path from where you are to an AI-ready BI and HR
              stack, built around Promethys and Payday.
            </div>
            <a className="cta-link" href="mailto:hello@synapse.ai">
              <span>Request a demo or implementation roadmap</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
