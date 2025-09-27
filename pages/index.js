import React, { useState, useEffect } from "react";

const produtosBase = [
  { id: 1, nome: "Anuidade FGX 2026", preco: 120.0, desc: "Filiação anual.", img: "" },
  { id: 2, nome: "Camiseta FGX (Preta)", preco: 79.9, desc: "Malha premium.", img: "" },
];

function NavLink({ href, label }) {
  return (
    <a href={href} className="block py-2 font-bold hover:opacity-80">
      {label}
    </a>
  );
}

export default function Home() {
  const [showEstatuto, setShowEstatuto] = useState(false);
  const [cart, setCart] = useState([]);
  const total = cart.reduce((sum, item) => {
    const p = produtosBase.find((pp) => pp.id === item.id);
    return sum + (p ? p.preco * item.qtd : 0);
  }, 0);

  // Destaque do link ativo no menu lateral
  const [activeSection, setActiveSection] = useState('inicio');
  useEffect(() => {
    const ids = ['inicio','historia','diretoria','associados','estatuto','calendario','projetos','loja','acesso'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      const id = href.slice(1);
      if (id === activeSection) a.classList.add('text-emerald-400');
      else a.classList.remove('text-emerald-400');
    });
  }, [activeSection]);

  function addToCart(id) {
    setCart((c) => {
      const i = c.findIndex((x) => x.id === id);
      if (i >= 0) {
        const copy = [...c];
        copy[i] = { ...copy[i], qtd: copy[i].qtd + 1 };
        return copy;
      }
      return [...c, { id, qtd: 1 }];
    });
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-black/90 p-6 flex flex-col">
        <div className="bg-white p-4 rounded shadow-lg mb-6">
          {/* Brasão P&B dentro de quadrado branco */}
          <img src="/brasao-pb.png" alt="Brasão FGX" className="w-40 h-40 object-contain mx-auto" />
        </div>
        <nav className="space-y-3">
          <NavLink href="#historia" label="História" />
          <NavLink href="#diretoria" label="Diretoria" />
          <NavLink href="#associados" label="Associados" />
          <NavLink href="#estatuto" label="Estatuto" />
          <NavLink href="#calendario" label="Calendário" />
          <NavLink href="#projetos" label="Projetos" />
          <NavLink href="#loja" label="Loja / E-commerce FGX" />
          <NavLink href="#acesso" label="Acesso Restrito" />
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 relative overflow-y-auto">
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          {/* Fundo dark com padrão de tabuleiro P&B sutil (CSS puro) */}
          <div className="absolute inset-0 -z-10">
            <div
              className="w-full h-full"
              style={{
                backgroundSize: '80px 80px',
                backgroundImage:
                  'linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),'+
                  'linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%),'+
                  'linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%),'+
                  'linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)',
                backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0',
                filter: 'contrast(110%) brightness(70%)',
                backgroundColor: '#0a0a0a',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-neutral-950" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16 md:py-28">
            <div className="grid md:grid-cols-[260px,1fr] items-center gap-8">
              {/* Bloco do brasão: quadrado branco com brasão P&B */}
              <div className="justify-self-start">
                <div className="w-[220px] h-[220px] rounded-xl bg-white shadow-2xl flex items-center justify-center">
                  <img src="/brasao-pb.png" alt="Brasão FGX P&B" className="w-[180px] h-[180px] object-contain" />
                </div>
              </div>
              {/* Títulos e CTAs */}
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">FEDERAÇÃO GAÚCHA DE XADREZ</h1>
                <p className="text-3xl md:text-5xl font-black mt-2">FGX</p>
                <p className="mt-4 text-lg opacity-90 max-w-2xl">Calendário, diretoria, associados, estatuto, projetos e loja — identidade dark com alto contraste para destacar o conteúdo colorido.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#calendario" className="px-5 py-3 rounded-xl bg-white text-black font-semibold">Ver calendário</a>
                  <a href="#loja" className="px-5 py-3 rounded-xl ring-1 ring-white/20 hover:bg-white/5">Abrir Loja</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seções */}
        <section id="historia" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">História</h2>
          <p className="opacity-80">Este espaço contará a trajetória da FGX desde 1943.</p>
        </section>

        <section id="diretoria" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Diretoria</h2>
          <p className="opacity-80">Lista da gestão atual da FGX.</p>
        </section>

        <section id="associados" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Associados</h2>
          <p className="opacity-80">Informações sobre filiação, benefícios e categorias.</p>
        </section>

        <section id="estatuto" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Estatuto</h2>
          <div className="flex gap-3 mb-6">
            <button className="px-4 py-2 bg-white text-black rounded" onClick={() => setShowEstatuto(true)}>Ver Estatuto</button>
            <a href="/estatuto.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 ring-1 ring-white/20 rounded">Baixar PDF</a>
          </div>
          {showEstatuto && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
              <div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden shadow-2xl relative">
                <button onClick={() => setShowEstatuto(false)} className="absolute top-3 right-3 text-black font-bold text-xl">×</button>
                <iframe src="/estatuto.pdf" title="Estatuto FGX" className="w-full h-full" />
              </div>
            </div>
          )}
        </section>

        <section id="calendario" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Calendário</h2>
          <p className="opacity-80">Próximos eventos oficiais e dos clubes filiados.</p>
        </section>

        <section id="projetos" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Projetos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "II Gambito Vilão", d: "ago/2025", s: "Planejamento e captação" },
              { t: "SESC Montenegro 2026", d: "abr–mai/2026", s: "Parcerias e logística" },
              { t: "Museu do Xadrez Gaúcho (digital)", d: "2025–2026", s: "Acervo e digitalização" },
            ].map((pr, i) => (
              <div key={i} className="p-5 rounded bg-neutral-900 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold">{pr.t}</h3>
                <p className="opacity-80 text-sm mt-1">{pr.d} — {pr.s}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="loja" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Loja / E-commerce FGX</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {produtosBase.map((p) => (
              <div key={p.id} className="p-4 rounded bg-neutral-900 ring-1 ring-white/10">
                <h3 className="font-semibold">{p.nome}</h3>
                <p className="text-sm opacity-80">{p.desc}</p>
                <p className="mt-2 font-bold">R$ {p.preco.toFixed(2).replace(".", ",")}</p>
                <button onClick={() => addToCart(p.id)} className="mt-2 px-4 py-2 bg-white text-black rounded">Adicionar</button>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 rounded bg-neutral-900 ring-1 ring-white/10">
            <h3 className="font-semibold text-xl">Carrinho</h3>
            {cart.length === 0 ? (
              <p className="text-sm mt-2 opacity-80">Seu carrinho está vazio.</p>
            ) : (
              <div className="mt-3 space-y-2">
                {cart.map((item) => {
                  const p = produtosBase.find((pp) => pp.id === item.id);
                  if (!p) return null;
                  return (
                    <div key={item.id} className="flex items-center justify-between">
                      <span>{p.nome} <span className="opacity-70">× {item.qtd}</span></span>
                      <span>R$ {(p.preco * item.qtd).toFixed(2).replace('.', ',')}</span>
                    </div>
                  );
                })}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <button className="px-4 py-2 rounded bg-white text-black font-medium">Pagar com Pix</button>
                  <button className="px-4 py-2 rounded ring-1 ring-white/20">Cartão de crédito</button>
                  <button className="px-4 py-2 rounded ring-1 ring-white/20">Boleto</button>
                  <button disabled title="Pagamento por token será habilitado futuramente" className="px-4 py-2 rounded ring-1 ring-white/20 opacity-50 cursor-not-allowed">Token (em breve)</button>
                </div>
                <p className="text-xs opacity-70 mt-2">Rotas previstas: /api/checkout/pix, /api/checkout/cartao, /api/checkout/boleto. Webhook: /api/webhooks/mercadopago ou /api/webhooks/pagseguro.</p>
              </div>
            )}
          </div>
        </section>

        <section id="acesso" className="py-20 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Área de Acesso Restrito</h2>
          <form className="grid md:grid-cols-2 gap-3 max-w-xl">
            <input className="bg-neutral-900 ring-1 ring-white/10 rounded px-3 py-2" placeholder="Email" />
            <button type="button" className="px-4 py-2 bg-white text-black rounded">Receber link de acesso</button>
            <p className="md:col-span-2 text-xs opacity-70">Em breve: autenticação por posse de token (desativado no MVP).</p>
          </form>
        </section>

        <footer className="py-10 text-center relative mt-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[180px] h-[180px] bg-white rounded-xl flex items-center justify-center shadow-xl">
              <img src="/brasao-pb.png" alt="Brasão FGX P&B rodapé" className="w-[140px] h-[140px] object-contain" />
            </div>
          </div>
          <p className="relative z-10 opacity-70">© {new Date().getFullYear()} Federação Gaúcha de Xadrez - FGX</p>
        </footer>
      </main>
    </div>
  );
}