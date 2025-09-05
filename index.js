import React from "react";
import { motion } from "framer-motion";
import { Camera, Palette, Layers, Rocket, Mail, Instagram, Youtube, Github, Sparkles, Badge as BadgeIcon } from "lucide-react";

// Landing page premium – 1 arquivo, pronto para colar em app/page.tsx (Next.js) ou usar como componente
// Estilo: Tailwind, animações suaves com Framer Motion, layout limpo e responsável
// Troque o nome da marca em BRAND e links sociais no rodapé

const BRAND = "Vmiranda3D";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const portfolio = [
  { title: "Casa Minimalista A01", tag: "Arquitetura 3D" },
  { title: "Cozinha Concreta C11", tag: "Interiores" },
  { title: "Lobby Futurista L07", tag: "Concept" },
  { title: "Sala Luz Natural S03", tag: "Interiores" },
  { title: "Faixa Comercial F12", tag: "Arquitetura 3D" },
  { title: "Studio Monolito M08", tag: "Concept" },
];

const services = [
  {
    icon: <Camera className="w-6 h-6" aria-hidden/>,
    title: "Render Premium",
    desc: "Imagens hiper-realistas para venda, portfólio e aprovação de clientes.",
  },
  {
    icon: <Layers className="w-6 h-6" aria-hidden/>,
    title: "Modelagem 3D",
    desc: "Ambientes, móveis e produtos com topologia limpa e UVs prontos para PBR.",
  },
  {
    icon: <Palette className="w-6 h-6" aria-hidden/>,
    title: "Direção de Estilo",
    desc: "Materiais, luz e composição para estética minimalista e atual.",
  },
];

const testimonials = [
  { quote: "Transformou nossa proposta. Os renders venderam o projeto.", name: "Mariana • Arq." },
  { quote: "Precisão técnica e estética rara. Entrega dentro do prazo.", name: "Rafael • Construtora" },
  { quote: "Comunicação clara e resultado premium.", name: "Isabela • Designer" },
];

export default function LandingPremium() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* BG decorativo */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-sky-500/20 to-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-emerald-500/20 to-indigo-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 backdrop-blur-md/30 border-b border-white/10 bg-black/30 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" aria-hidden/>
            <span className="font-semibold tracking-tight">{BRAND}</span>
            <span className="ml-2 rounded-full px-2 py-0.5 text-xs bg-white/10 border border-white/15">Design 3D</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-white/80">
            <a href="#portfolio" className="hover:text-white">Portfólio</a>
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>
          <a href="#contato" className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">Orçamento</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 items-center gap-10"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">
              {BRAND}: estética minimalista, render premium.
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Modelagem, materiais PBR e luz calibrada para imagens que
              emocionam e vendem. Arquitetura e interiores com foco em
              clareza, contraste e silêncio visual.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">Ver Portfólio</a>
              <a href="#contato" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Falar agora</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
              <div className="flex items-center gap-1"><BadgeIcon className="w-4 h-4 text-emerald-400"/> PBR • UV • 8K</div>
              <div className="flex items-center gap-1"><BadgeIcon className="w-4 h-4 text-sky-400"/> Render físico</div>
              <div className="flex items-center gap-1"><BadgeIcon className="w-4 h-4 text-fuchsia-400"/> Entrega ágil</div>
            </div>
          </div>

          {/* Destaque visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-xl" aria-hidden/>
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.12),rgba(0,0,0,0))]">
              {/* Placas simulando um render */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-md bg-white/5 border border-white/10" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-black/30 backdrop-blur-sm">
                <span className="text-xs text-white/80">Preview • Living minimalista</span>
                <span className="text-xs text-white/60">ISO 200 • f/6.3 • 24mm</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Portfólio em Destaque</h2>
          <a className="text-sm text-white/70 hover:text-white" href="#">Ver tudo</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, idx) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="aspect-[4/3] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.10),rgba(0,0,0,0))]"/>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">{item.title}</span>
                  <p className="text-xs text-white/70">{item.tag}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">8K</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Serviços</h2>
        <p className="text-white/75 mt-2 max-w-2xl">Do bloco ao brilho final: pipeline completo para seu projeto sair do papel com impacto visual.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">{s.icon}</div>
              <h3 className="font-medium text-lg">{s.title}</h3>
              <p className="text-sm text-white/75 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Sobre {BRAND}</h2>
            <p className="text-white/80 mt-3">
              Trabalho com foco em essência minimalista: formas claras, materiais precisos e luz que
              respeita o espaço. Cada imagem conta a história do ambiente, sem ruído.
            </p>
            <ul className="mt-4 space-y-2 text-white/75 text-sm list-disc list-inside">
              <li>Pipeline PBR completo (Albedo/Normal/Roughness/AO).</li>
              <li>Entrega em 4K e 8K, prontos para impressão e web.</li>
              <li>Feedback guiado por referência e meta do cliente.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/10 to-transparent blur-xl" aria-hidden/>
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]" />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-white/90">“{t.quote}”</p>
              <p className="text-white/60 text-sm mt-4">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/[0.02] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Vamos dar vida ao seu projeto?</h3>
            <p className="text-white/75 mt-2 max-w-xl">Envie plantas, referências e prazos. Respondo com proposta objetiva e cronograma.</p>
          </div>
          <a href="mailto:servicskennedy@gmail.com" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition inline-flex items-center gap-2"><Mail className="w-4 h-4"/> servicskennedy@gmail.com</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a className="hover:text-white" href="#" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
            <a className="hover:text-white" href="#" aria-label="YouTube"><Youtube className="w-5 h-5"/></a>
            <a className="hover:text-white" href="#" aria-label="GitHub"><Github className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
