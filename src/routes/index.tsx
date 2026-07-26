import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Flower2,
  HandHeart,
  Waves,
  Droplets,
  Gem,
  Star,
  MapPin,
  Clock,
  Instagram,
  Phone,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";
import jacquelinePhoto from "@/assets/jacqueline.jpg";
import butterfly from "@/assets/butterfly.png";

const WHATSAPP = "https://wa.me/5511999999999?text=Ol%C3%A1%20Jacqueline!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const INSTAGRAM = "https://instagram.com/";
const MAPS_LINK = "https://maps.app.goo.gl/gXih27JjjynPd1jPA";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Jacqueline+Pereira+Est%C3%A9tica+%26+Bem+Estar&ll=-23.4078149,-46.4999985&z=17&output=embed";

const SITE = "https://nexus-nurture-shop.lovable.app";

export const faqs = [
  {
    q: "Onde fica o estúdio de depilação em Guarulhos?",
    a: "Atendemos no bairro Jardim Mikail, em Guarulhos (SP), com fácil acesso para os bairros vizinhos como Jardim Presidente Dutra, Cumbica e Bonsucesso. O agendamento é feito pelo WhatsApp.",
  },
  {
    q: "Quais tipos de depilação vocês fazem?",
    a: "Realizamos depilação com cera quente, cera morna (roll-on descartável), depilação íntima (virilha cavada e completa), axilas, pernas, buço, rosto e depilação masculina — sempre com material descartável.",
  },
  {
    q: "Quanto tempo dura a depilação com cera?",
    a: "Em média de 3 a 4 semanas, dependendo do ciclo de crescimento dos pelos. Com sessões regulares, os pelos crescem mais finos e o intervalo entre as depilações aumenta.",
  },
  {
    q: "Qual o tamanho ideal do pelo para depilar?",
    a: "Cerca de 5 mm (aproximadamente 15 dias sem lâmina). Assim a cera adere bem ao pelo e a remoção fica mais eficiente e menos dolorida.",
  },
  {
    q: "A depilação com cera dói muito?",
    a: "Usamos técnicas de aplicação e produtos calmantes que reduzem bastante o desconforto. A partir da segunda sessão a sensibilidade costuma diminuir de forma significativa.",
  },
  {
    q: "Precisa agendar? Vocês atendem no mesmo dia?",
    a: "Trabalhamos com hora marcada para garantir higiene e atendimento exclusivo. Sempre que há horário livre, conseguimos encaixar no mesmo dia — basta chamar no WhatsApp.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Depilação em Guarulhos — Jardim Mikail | Jacqueline Pereira Estética",
      },
      {
        name: "description",
        content:
          "Depilação com cera em Guarulhos, no bairro Jardim Mikail: virilha, axilas, pernas, buço e depilação masculina. Estética e bem-estar com hora marcada. Agende pelo WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "depilação Guarulhos, depilação Jardim Mikail, epilação Guarulhos, depilação com cera Guarulhos, depilação íntima Guarulhos, depilação a laser Guarulhos, estética Guarulhos",
      },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Guarulhos, Jardim Mikail" },
      { name: "geo.position", content: "-23.4078149;-46.4999985" },
      { name: "ICBM", content: "-23.4078149, -46.4999985" },
      {
        property: "og:title",
        content: "Depilação em Guarulhos — Jardim Mikail | Jacqueline Pereira Estética",
      },
      {
        property: "og:description",
        content:
          "Depilação com cera, estética facial e corporal no Jardim Mikail, Guarulhos. Atendimento com hora marcada e material descartável.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: `${SITE}/` },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Depilação em Guarulhos — Jardim Mikail | Jacqueline Pereira Estética",
      },
      {
        name: "twitter:description",
        content:
          "Depilação com cera e tratamentos estéticos no Jardim Mikail, Guarulhos. Agende pelo WhatsApp.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "@id": `${SITE}/#negocio`,
          name: "Jacqueline Pereira Estética & Bem Estar",
          alternateName: "Depilação Jardim Mikail — Jacqueline Pereira",
          description:
            "Estúdio de depilação e estética em Guarulhos, no bairro Jardim Mikail: depilação com cera, depilação íntima, tratamentos faciais e corporais.",
          url: `${SITE}/`,
          telephone: "+55 11 99999-9999",
          priceRange: "$$",
          currenciesAccepted: "BRL",
          paymentAccepted: "Dinheiro, Pix, Cartão de crédito, Cartão de débito",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jardim Mikail",
            addressLocality: "Guarulhos",
            addressRegion: "SP",
            postalCode: "07170-000",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -23.4078149,
            longitude: -46.4999985,
          },
          hasMap: MAPS_LINK,
          areaServed: [
            { "@type": "City", name: "Guarulhos" },
            { "@type": "Place", name: "Jardim Mikail, Guarulhos" },
            { "@type": "Place", name: "Jardim Presidente Dutra, Guarulhos" },
            { "@type": "Place", name: "Cumbica, Guarulhos" },
            { "@type": "Place", name: "Bonsucesso, Guarulhos" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "15:00",
            },
          ],
          sameAs: [INSTAGRAM, MAPS_LINK],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "4",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de depilação e estética em Guarulhos",
            itemListElement: [
              "Depilação com cera quente",
              "Depilação íntima (virilha cavada e completa)",
              "Depilação de axilas e pernas",
              "Depilação de buço e rosto",
              "Depilação masculina",
              "Limpeza de pele",
              "Drenagem linfática",
              "Massagem relaxante",
            ].map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s, areaServed: "Guarulhos" },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: `${SITE}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Depilação em Guarulhos — Jardim Mikail",
              item: `${SITE}/#depilacao`,
            },
          ],
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Waxing />
        <Services />
        <About />
        <Testimonials />
        <Faq />
        <LocationContact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

const waxingServices = [
  {
    title: "Depilação com cera quente",
    text: "Cera aquecida na temperatura ideal, que abre os poros e remove o pelo pela raiz com menos desconforto.",
  },
  {
    title: "Depilação íntima",
    text: "Virilha simples, cavada ou completa, feita com privacidade, técnica delicada e material 100% descartável.",
  },
  {
    title: "Axilas e pernas",
    text: "Pele lisa por semanas, com produtos calmantes que reduzem vermelhidão e evitam pelos encravados.",
  },
  {
    title: "Buço, rosto e sobrancelha",
    text: "Design e remoção precisa de pelos faciais, respeitando o formato natural do seu rosto.",
  },
  {
    title: "Depilação masculina",
    text: "Peito, costas, abdômen e pernas com atendimento reservado e sem julgamentos.",
  },
  {
    title: "Pacotes mensais",
    text: "Sessões programadas com valores especiais para manter a pele sempre lisa o ano todo.",
  },
];

function Waxing() {
  return (
    <section id="depilacao" className="relative overflow-hidden bg-ice py-24">
      <img
        src={butterfly}
        alt=""
        loading="lazy"
        width={700}
        height={700}
        className="animate-float pointer-events-none absolute -left-8 top-16 h-28 w-28 opacity-20"
      />
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-purple">
            Especialidade da casa
          </span>
          <h2 className="mt-4 font-display text-3xl text-purple-deep md:text-4xl">
            Depilação em Guarulhos — Jardim Mikail
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            Somos referência em <strong className="font-bold text-purple-deep">depilação
            (epilação) com cera no bairro Jardim Mikail, em Guarulhos — SP</strong>. Cada
            sessão é feita com hora marcada, material descartável e produtos hipoalergênicos,
            garantindo higiene, conforto e uma pele lisa por muito mais tempo. Atendemos
            também clientes de Jardim Presidente Dutra, Cumbica, Bonsucesso e demais regiões
            de Guarulhos.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {waxingServices.map((s) => (
            <li
              key={s.title}
              className="glass rounded-3xl p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5"
            >
              <h3 className="font-display text-xl text-purple-deep">{s.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:bg-purple-deep"
          >
            <MessageCircle className="h-5 w-5" /> Agendar depilação em Guarulhos
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-beige py-24">
      <div className="mx-auto max-w-4xl px-4">
        <header className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-purple">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 font-display text-3xl text-purple-deep md:text-4xl">
            Tudo sobre depilação em Guarulhos
          </h2>
        </header>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="glass group rounded-2xl p-6 shadow-[var(--shadow-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-purple-deep">
                {f.q}
                <ChevronRight className="h-5 w-5 shrink-0 text-purple transition group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}



const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Depilação", href: "#depilacao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];


function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex min-w-0 items-center gap-3">
      <img
        src={butterfly}
        alt=""
        width={700}
        height={700}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate font-display text-lg tracking-wide ${
            light ? "text-background" : "text-purple-deep"
          }`}
        >
          Jacqueline Pereira
        </span>
        <span
          className={`block text-[10px] uppercase tracking-[0.28em] ${
            light ? "text-background/70" : "text-muted-foreground"
          }`}
        >
          Estética & Bem Estar
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass border-b border-border/60">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 md:py-4">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-purple"
              >
                {i.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-purple px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:bg-purple-deep sm:inline-flex"
          >
            Agende sua Avaliação
          </a>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-purple-deep md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-card/95 px-4 py-4 md:hidden">
          <ul className="space-y-1">
            {navItems.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-lilac"
                >
                  {i.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-purple px-4 py-3 text-center text-sm font-bold text-primary-foreground"
              >
                Agende sua Avaliação
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={heroSpa}
        alt="Ambiente de spa relaxante da clínica de estética"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <img
        src={butterfly}
        alt=""
        loading="lazy"
        width={700}
        height={700}
        className="animate-float pointer-events-none absolute right-[6%] top-24 -z-10 hidden h-24 w-24 opacity-80 md:block"
      />
      <img
        src={butterfly}
        alt=""
        loading="lazy"
        width={700}
        height={700}
        className="animate-float pointer-events-none absolute bottom-16 left-[8%] -z-10 hidden h-16 w-16 opacity-60 lg:block [animation-delay:1.5s]"
      />

      <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Jardim Mikail · Guarulhos — SP
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-background md:text-6xl">
            Depilação em Guarulhos, no Jardim Mikail
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-background/85 md:text-lg">
            Depilação com cera, estética facial e corporal com Jacqueline Pereira: hora
            marcada, material descartável e cuidado humanizado para realçar a sua beleza
            natural.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-purple px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:bg-purple-deep md:text-base"
            >
              <MessageCircle className="h-5 w-5" /> Agendar Atendimento via WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 px-7 py-4 text-sm font-semibold text-background backdrop-blur transition hover:bg-background/20"
            >
              Conhecer tratamentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Droplets,
    title: "Limpeza de Pele",
    text: "Higienização profunda com extração suave, deixando a pele leve, uniforme e revitalizada.",
  },
  {
    icon: HandHeart,
    title: "Massagem Relaxante",
    text: "Toque terapêutico que alivia tensões, reduz o estresse e devolve o equilíbrio ao corpo.",
  },
  {
    icon: Waves,
    title: "Drenagem Linfática",
    text: "Técnica manual que reduz inchaço, melhora a circulação e define os contornos corporais.",
  },
  {
    icon: Flower2,
    title: "Tratamentos Faciais",
    text: "Protocolos personalizados para acne, manchas e viço, com ativos de alta performance.",
  },
  {
    icon: Gem,
    title: "Rejuvenescimento",
    text: "Estímulo de colágeno para suavizar linhas finas e recuperar a firmeza natural da pele.",
  },
  {
    icon: Sparkles,
    title: "Avaliação Personalizada",
    text: "Análise individual da sua pele e objetivos para montar o plano de cuidados ideal.",
  },
];

function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-beige py-24">
      <img
        src={butterfly}
        alt=""
        loading="lazy"
        width={700}
        height={700}
        className="animate-float pointer-events-none absolute -right-6 top-10 h-28 w-28 opacity-20"
      />
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-purple">
            O que oferecemos
          </span>
          <h2 className="mt-4 font-display text-3xl text-purple-deep md:text-4xl">
            Cuidados pensados para a sua essência
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            Cada protocolo é adaptado ao seu tipo de pele, à sua rotina e aos seus
            objetivos — com acolhimento do início ao fim.
          </p>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group glass flex flex-col rounded-3xl p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lilac text-purple transition group-hover:bg-purple group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-purple-deep">{title}</h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                {text}
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-purple transition group-hover:gap-3"
              >
                Saber mais <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] bg-lilac/70" />
          <img
            src={jacquelinePhoto}
            alt="Jacqueline Pereira, esteticista, em seu consultório"
            loading="lazy"
            width={1008}
            height={1200}
            className="relative rounded-[2.5rem] object-cover shadow-[var(--shadow-card)]"
          />
          <img
            src={butterfly}
            alt=""
            loading="lazy"
            width={700}
            height={700}
            className="animate-float pointer-events-none absolute -bottom-6 -right-2 h-24 w-24"
          />
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-purple">
            Sobre a profissional
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-purple-deep md:text-4xl">
            Um cuidado humanizado, do primeiro contato ao resultado
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            Jacqueline Pereira é esteticista dedicada ao bem-estar integral de suas
            pacientes. Com anos de experiência em estética facial e corporal, ela une
            técnica apurada, produtos de alta qualidade e uma escuta atenta para
            entender o que cada pessoa realmente precisa.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            O atendimento é individual, em um ambiente tranquilo e acolhedor, com
            protocolos ajustados a cada fase do tratamento — porque resultado
            consistente nasce de acompanhamento próximo e verdadeiro.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              { n: "+10", l: "Anos de experiência" },
              { n: "+2mil", l: "Atendimentos" },
              { n: "5,0★", l: "Avaliação Google" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl text-purple md:text-3xl">{s.n}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-purple px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:bg-purple-deep"
          >
            <MessageCircle className="h-4 w-4" /> Falar com a Jacqueline
          </a>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Amanda Ribeiro",
    text: "Ambiente maravilhoso e acolhedor. A Jacqueline explica cada etapa do procedimento e minha pele nunca esteve tão bonita. Recomendo de olhos fechados!",
  },
  {
    name: "Camila Souza",
    text: "Fiz drenagem linfática em um pacote e o resultado foi visível já nas primeiras sessões. Atendimento humano, pontual e muito profissional.",
  },
  {
    name: "Patrícia Lima",
    text: "A massagem relaxante é simplesmente outro nível. Saio de lá renovada. O espaço é limpo, cheiroso e transmite muita paz.",
  },
  {
    name: "Renata Alves",
    text: "Minha limpeza de pele favorita! Cuidado com cada detalhe e um pós-atendimento atencioso. Virei cliente fiel.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section className="relative overflow-hidden bg-nude/60 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-purple">
          Depoimentos
        </span>
        <h2 className="mt-4 font-display text-3xl text-purple-deep md:text-4xl">
          Quem cuida com a gente, recomenda
        </h2>

        <div className="mt-12 glass rounded-[2rem] p-8 shadow-[var(--shadow-card)] md:p-12">
          <div className="flex justify-center gap-1 text-purple">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-lg leading-relaxed text-foreground md:text-2xl">
            “{testimonials[index].text}”
          </blockquote>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-purple">
            {testimonials[index].name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Avaliação no Google</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Depoimento anterior"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-purple/30 text-purple transition hover:bg-purple hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Ver depoimento de ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-purple" : "w-2 bg-purple/30"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Próximo depoimento"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-purple/30 text-purple transition hover:bg-purple hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-purple">
            Localização e contato
          </span>
          <h2 className="mt-4 font-display text-3xl text-purple-deep md:text-4xl">
            Venha nos visitar
          </h2>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Mapa da clínica Jacqueline Pereira Estética & Bem Estar"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full lg:h-full"
            />
          </div>

          <div className="glass rounded-3xl p-8 shadow-[var(--shadow-card)]">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
                <div className="min-w-0">
                  <p className="font-display text-lg text-purple-deep">Endereço</p>
                  <address className="mt-1 text-sm font-light not-italic text-muted-foreground">
                    Jacqueline Pereira Estética &amp; Bem Estar
                    <br />
                    Jardim Mikail — Guarulhos, São Paulo (SP)
                  </address>

                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-purple hover:underline"
                  >
                    Ver rota no Google Maps <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
                <div>
                  <p className="font-display text-lg text-purple-deep">
                    Horário de funcionamento
                  </p>
                  <p className="mt-1 text-sm font-light text-muted-foreground">
                    Segunda a sexta: 9h às 19h
                    <br />
                    Sábado: 9h às 15h
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
                <div>
                  <p className="font-display text-lg text-purple-deep">Atendimento</p>
                  <p className="mt-1 text-sm font-light text-muted-foreground">
                    Agendamentos via WhatsApp
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-purple px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-purple-deep"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-purple/30 px-6 py-3 text-sm font-bold text-purple transition hover:bg-lilac"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-purple-deep text-background/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed">
            Depilação, estética facial e corporal no Jardim Mikail, Guarulhos — SP.
            Atendimento humanizado, com hora marcada e material descartável.
          </p>

        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-background">
            Links úteis
          </h3>
          <ul className="mt-5 space-y-2 text-sm font-light">
            {navItems.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="transition hover:text-background">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-background">
            Redes sociais
          </h3>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-background/20 transition hover:bg-background/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full border border-background/20 transition hover:bg-background/10"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-background/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Jacqueline Pereira Estética & Bem Estar · CNPJ
            00.000.000/0001-00
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-purple px-5 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:bg-purple-deep"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
    </a>
  );
}
