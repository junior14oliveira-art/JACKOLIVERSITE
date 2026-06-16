import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  Laptop,
  Gamepad2,
  Monitor,
  Cpu,
  Keyboard,
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
  Star,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.png";
import productGamer from "@/assets/product-laptop-gamer.jpg";
import productCorp from "@/assets/product-laptop-corp.jpg";
import productDesktop from "@/assets/product-desktop.jpg";
import productMonitor from "@/assets/product-monitor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TecnoBlue — Notebooks, Desktops e Hardware com o melhor preço" },
      {
        name: "description",
        content:
          "Loja de informática especializada em notebooks gamers, corporativos, desktops montados e hardware. Frete grátis, garantia estendida e parcelamento em até 12x.",
      },
      { property: "og:title", content: "TecnoBlue — Tecnologia que acelera você" },
      {
        property: "og:description",
        content: "Notebooks, desktops, hardware e periféricos com preços imbatíveis.",
      },
    ],
  }),
  component: Home,
});

type Product = {
  name: string;
  image: string;
  tags: string[];
  oldPrice: string;
  price: string;
  installments: string;
  badge?: string;
};

const products: Product[] = [
  {
    name: "Notebook Gamer Predator X16 RTX 4070",
    image: productGamer,
    tags: ["Intel Core i7-13700H", "16GB RAM", "SSD 1TB", "RTX 4070"],
    oldPrice: "R$ 12.499",
    price: "R$ 9.799",
    installments: "12x de R$ 816,58 sem juros",
    badge: "-22%",
  },
  {
    name: "Notebook Corporativo UltraBook Pro 14",
    image: productCorp,
    tags: ["Intel Core i5-1340P", "16GB RAM", "SSD 512GB", '14"'],
    oldPrice: "R$ 6.299",
    price: "R$ 4.899",
    installments: "10x de R$ 489,90 sem juros",
    badge: "-22%",
  },
  {
    name: "Desktop Gamer TecnoBlue Storm RGB",
    image: productDesktop,
    tags: ["Ryzen 7 7700", "32GB DDR5", "SSD 1TB NVMe", "RTX 4060 Ti"],
    oldPrice: "R$ 11.290",
    price: "R$ 8.499",
    installments: "12x de R$ 708,25 sem juros",
    badge: "Lançamento",
  },
  {
    name: 'Monitor Gamer Curvo 27" 165Hz QHD',
    image: productMonitor,
    tags: ["27 polegadas", "QHD 2K", "165Hz", "1ms"],
    oldPrice: "R$ 2.499",
    price: "R$ 1.699",
    installments: "10x de R$ 169,90 sem juros",
    badge: "-32%",
  },
];

const categories = [
  { name: "Notebooks Gamers", icon: Gamepad2, count: "+120 modelos" },
  { name: "Notebooks Corporativos", icon: Laptop, count: "+80 modelos" },
  { name: "Desktops Montados", icon: Monitor, count: "+60 modelos" },
  { name: "Hardware", icon: Cpu, count: "+450 itens" },
  { name: "Periféricos", icon: Keyboard, count: "+700 itens" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <NavBar />
      <Hero />
      <Trust />
      <Categories />
      <ProductShelf />
      <RecentlyViewed />
      <Footer />
      <SupportFab />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-navy-deep text-white/80 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <span className="hidden sm:inline">
          Frete grátis acima de R$ 499 · Parcele em até 12x sem juros
        </span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-cyan">Atendimento</a>
          <a href="#" className="hover:text-cyan">Rastrear pedido</a>
          <a href="#" className="hover:text-cyan">Vender no TecnoBlue</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan to-cyan-bright shadow-[var(--shadow-glow)]">
            <Cpu className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Tecno<span className="text-cyan">Blue</span>
          </span>
        </a>

        <div className="hidden md:flex flex-1 mx-4">
          <label htmlFor="search" className="sr-only">Buscar produtos</label>
          <div className="flex w-full items-center rounded-full bg-white text-navy shadow-sm focus-within:ring-2 focus-within:ring-cyan">
            <Search className="ml-4 h-4 w-4 text-muted-foreground" aria-hidden />
            <input
              id="search"
              type="search"
              placeholder="O que você procura? Ex: Notebook i7 16GB"
              className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="m-1 rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-bright">
              Buscar
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <IconBtn icon={User} label="Minha Conta" />
          <IconBtn icon={Heart} label="Favoritos" badge="3" />
          <IconBtn icon={ShoppingCart} label="Carrinho" badge="2" highlight />
        </div>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="flex w-full items-center rounded-full bg-white text-navy">
          <Search className="ml-4 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>
    </header>
  );
}

function IconBtn({
  icon: Icon,
  label,
  badge,
  highlight,
}: {
  icon: typeof User;
  label: string;
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <button
      aria-label={label}
      className={`relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${
        highlight ? "bg-white/5" : ""
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="hidden lg:inline">{label}</span>
      {badge && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-cyan px-1 text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

function NavBar() {
  const items = [
    "Notebooks",
    "Desktops",
    "Hardware",
    "Periféricos",
    "Monitores",
    "Setup Gamer",
    "Ofertas",
  ];
  return (
    <nav className="border-b border-white/5 bg-navy-soft text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2">
        <button className="flex items-center gap-2 rounded-md bg-cyan px-3 py-1.5 text-sm font-semibold text-white">
          <Menu className="h-4 w-4" /> Categorias
        </button>
        {items.map((i) => (
          <a
            key={i}
            href="#"
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {i}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_30%,oklch(0.72_0.13_230/0.5),transparent_55%),radial-gradient(circle_at_80%_70%,oklch(0.5_0.15_260/0.4),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:py-20 lg:grid-cols-2">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            <Star className="h-3 w-3" /> Lançamento da semana
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Performance que
            <span className="block bg-gradient-to-r from-cyan to-cyan-bright bg-clip-text text-transparent">
              acelera seus projetos.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-white/70 md:text-lg">
            Notebooks Gamers, ultrabooks corporativos e desktops montados com até{" "}
            <strong className="text-white">35% OFF</strong> e frete grátis para todo o Brasil.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-bold text-white shadow-[var(--shadow-glow)] transition hover:bg-cyan-bright">
              Comprar agora <ChevronRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Ver ofertas
            </button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <Stat n="20+" l="Anos no mercado" />
            <Stat n="50k+" l="Clientes ativos" />
            <Stat n="4.9★" l="Avaliação" />
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 mx-auto h-72 w-72 rounded-full bg-cyan/30 blur-3xl md:h-96 md:w-96" />
          <img
            src={heroLaptop}
            alt="Notebook gamer em destaque"
            width={1280}
            height={960}
            className="relative mx-auto drop-shadow-[0_30px_60px_rgba(41,162,213,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="text-2xl font-extrabold text-white md:text-3xl">{n}</dt>
      <dd className="text-xs text-white/60">{l}</dd>
    </div>
  );
}

function Trust() {
  const items = [
    { icon: Truck, t: "Frete grátis", s: "Compras acima de R$ 499" },
    { icon: CreditCard, t: "Até 12x sem juros", s: "Em todas as bandeiras" },
    { icon: ShieldCheck, t: "Garantia estendida", s: "1 ano + 12 meses opcional" },
    { icon: Headphones, t: "Suporte especialista", s: "Atendimento 7 dias" },
  ];
  return (
    <section className="border-b border-border bg-gray-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
        {items.map(({ icon: Icon, t, s }) => (
          <div key={t} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan/10 text-cyan">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy">{t}</p>
              <p className="text-xs text-muted-foreground">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
            Navegue por categoria
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Encontre exatamente o que você precisa.
          </p>
        </div>
        <a href="#" className="hidden text-sm font-semibold text-cyan hover:underline sm:inline">
          Ver todas →
        </a>
      </header>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map(({ name, icon: Icon, count }) => (
          <a
            key={name}
            href="#"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-cyan hover:shadow-[var(--shadow-card)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-cyan transition group-hover:bg-cyan group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-sm font-bold text-navy">{name}</h3>
            <p className="text-xs text-muted-foreground">{count}</p>
            <ChevronRight className="absolute right-4 top-5 h-4 w-4 text-muted-foreground transition group-hover:text-cyan" />
          </a>
        ))}
      </div>
    </section>
  );
}

function ProductShelf() {
  return (
    <section className="bg-gray-soft">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan">
              Mais vendidos
            </span>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
              Ofertas em destaque
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-cyan hover:underline">
            Ver todas →
          </a>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="relative aspect-square overflow-hidden bg-gray-card">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-cyan px-2.5 py-1 text-[11px] font-bold text-white">
            {product.badge}
          </span>
        )}
        <button
          aria-label="Favoritar"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy backdrop-blur transition hover:bg-cyan hover:text-white"
        >
          <Heart className="h-4 w-4" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold text-navy">
          {product.name}
        </h3>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <li
              key={t}
              className="rounded-md bg-navy/5 px-2 py-0.5 text-[11px] font-medium text-navy"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p className="text-xs text-muted-foreground line-through">{product.oldPrice}</p>
          <p className="text-2xl font-extrabold text-navy">{product.price}</p>
          <p className="text-xs text-muted-foreground">{product.installments}</p>
        </div>

        <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-cyan py-2.5 text-sm font-bold text-white transition hover:bg-cyan-bright">
          <ShoppingCart className="h-4 w-4" /> Comprar
        </button>
      </div>
    </article>
  );
}

function RecentlyViewed() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-xl font-extrabold text-navy">Vistos recentemente</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Continue de onde parou — selecionamos para você.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.slice(0, 4).map((p) => (
          <a
            key={p.name}
            href="#"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-cyan"
          >
            <img
              src={p.image}
              alt=""
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-lg bg-gray-card object-contain p-1"
            />
            <div className="min-w-0">
              <p className="line-clamp-2 text-xs font-semibold text-navy">{p.name}</p>
              <p className="mt-1 text-sm font-extrabold text-cyan">{p.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan to-cyan-bright">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-white">
              Tecno<span className="text-cyan">Blue</span>
            </span>
          </div>
          <p className="mt-4 text-sm">
            Tecnologia para quem precisa de performance. Notebooks, desktops e hardware
            com garantia e o melhor atendimento.
          </p>
        </div>

        <FooterCol
          title="Institucional"
          links={["Sobre nós", "Trabalhe conosco", "Política de privacidade", "Termos de uso"]}
        />
        <FooterCol
          title="Ajuda"
          links={["FAQ", "Trocas e devoluções", "Garantia", "Rastrear pedido"]}
        />

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>📞 (11) 4000-1234</li>
            <li>✉️ ola@tecnoblue.com.br</li>
            <li>🕒 Seg a Sex · 9h às 18h</li>
          </ul>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-white/70">
            Pagamento
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {["VISA", "MASTER", "ELO", "AMEX", "PIX", "BOLETO"].map((m) => (
              <span
                key={m}
                className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-white/70">
            Segurança
          </h4>
          <div className="mt-3 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-cyan/15 px-2 py-1 text-[10px] font-bold text-cyan">
              <ShieldCheck className="h-3 w-3" /> SSL 256-bit
            </span>
            <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold">
              Site Blindado
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} TecnoBlue Informática Ltda. CNPJ 00.000.000/0001-00</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition hover:text-cyan">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportFab() {
  return (
    <button
      aria-label="Abrir chat de suporte"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-glow)] transition hover:bg-cyan-bright"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale com um especialista</span>
    </button>
  );
}
