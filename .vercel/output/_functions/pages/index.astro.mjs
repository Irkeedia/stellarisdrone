/* empty css                                 */
import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_DOObjhD2.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_C7xN3Tdf.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative h-screen flex items-end overflow-hidden"> <video autoplay loop muted playsinline preload="metadata" poster="/placeholder-drone.jpg" class="absolute inset-0 w-full h-full object-cover"> <source src="/u1135338923_vue_aerienne_par_drone_effet_revelation_de_lhoriz_b7933f59-2f69-4cdb-bb28-230ad7d9138b_1.mp4" type="video/mp4"> </video> <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/20"></div> <div class="absolute inset-0 bg-gradient-to-r from-neutral-950/40 to-transparent"></div> <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 lg:pb-28"> <p class="text-gold-400 text-xs sm:text-sm uppercase tracking-[0.35em] font-medium mb-5">Télépilote certifié DGAC · Aude, Occitanie</p> <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 text-white">
Vos projets<br class="hidden sm:block"> vus du ciel
</h1> <p class="text-base sm:text-lg md:text-xl text-stone-400 max-w-xl mb-10 leading-relaxed">
Inspection de toiture, captation commerciale et couverture événementielle. Images haute définition livrées sous 48h.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="#tarifs" class="inline-flex items-center justify-center px-7 py-3.5 bg-gold-400 text-neutral-950 font-semibold rounded-full hover:bg-gold-300 transition-colors text-sm uppercase tracking-wider">
Estimer mon projet
</a> <a href="#portfolio" class="inline-flex items-center justify-center px-7 py-3.5 border border-stone-700 text-stone-200 rounded-full hover:border-gold-400/40 hover:text-gold-400 transition-all text-sm uppercase tracking-wider">
Voir les réalisations
</a> </div> </div> <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"> <a href="#services" class="block animate-bounce opacity-40 hover:opacity-80 transition-opacity"> <svg class="h-6 w-6 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path> </svg> </a> </div> </section>`;
}, "/home/mathieu/Projets/stellarisdrone/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services" class="relative py-24 lg:py-32"> <div class="max-w-7xl mx-auto px-6"> <div class="mb-16 lg:mb-20"> <span class="text-gold-400 text-xs uppercase tracking-[0.4em] font-semibold">Ce que je propose</span> <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 text-stone-100">
Trois expertises,<br>un seul interlocuteur.
</h2> </div> <div class="grid gap-6 md:grid-cols-3"> <!-- Inspection --> <div class="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/80"> <div class="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center mb-6"> <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path> </svg> </div> <h3 class="font-display text-xl font-semibold text-stone-100 mb-3">Inspection aérienne</h3> <p class="text-stone-400 text-sm leading-relaxed mb-4">
Photos et vidéos HD de toitures, terrains et bâtiments pour documenter l'état d'un bien. Idéal pour préparer un diagnostic ou constituer un dossier.
</p> <p class="text-xs text-stone-500 leading-relaxed mb-6 border-l-2 border-gold-400/30 pl-3">
Je fournis les clichés bruts et retouchés en haute définition. Pour une analyse technique, je recommande de confier les images à un expert du bâtiment ou un couvreur qualifié.
</p> <ul class="space-y-2 text-sm text-stone-400 mb-8"> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Photos HD + Vidéo 4K</li> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Livraison cloud sous 48h</li> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Rapport visuel PDF</li> </ul> <div class="flex items-baseline gap-1"> <span class="text-2xl font-display font-bold text-stone-100">190€</span> <span class="text-xs text-stone-500">à partir de</span> </div> </div> <!-- Commercial --> <div class="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/80"> <div class="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center mb-6"> <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path> </svg> </div> <h3 class="font-display text-xl font-semibold text-stone-100 mb-3">Captation commerciale</h3> <p class="text-stone-400 text-sm leading-relaxed mb-6">
Photos et vidéos aériennes pour valoriser un bien immobilier, un domaine viticole, un commerce ou toute activité nécessitant des visuels d'impact.
</p> <ul class="space-y-2 text-sm text-stone-400 mb-8"> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Photos retouchées + Vidéo montée</li> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Formats web & print</li> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Storyboard personnalisé</li> </ul> <div class="flex items-baseline gap-1"> <span class="text-2xl font-display font-bold text-stone-100">250€</span> <span class="text-xs text-stone-500">à partir de</span> </div> </div> <!-- Événementiel --> <div class="group rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/80"> <div class="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center mb-6"> <svg class="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path> </svg> </div> <h3 class="font-display text-xl font-semibold text-stone-100 mb-3">Couverture événementielle</h3> <p class="text-stone-400 text-sm leading-relaxed mb-6">
Captation aérienne pour fêtes locales, événements sportifs, mariages ou manifestations culturelles. Des images uniques qui immortalisent vos temps forts.
</p> <ul class="space-y-2 text-sm text-stone-400 mb-8"> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Drone + photos au sol</li> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Montage highlights vidéo</li> <li class="flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-gold-400"></span>Demi-journée ou journée</li> </ul> <div class="flex items-baseline gap-1"> <span class="text-2xl font-display font-bold text-stone-100">350€</span> <span class="text-xs text-stone-500">demi-journée</span> </div> </div> </div> </div> </section>`;
}, "/home/mathieu/Projets/stellarisdrone/src/components/Services.astro", void 0);

const projects = [
  {
    id: 1,
    title: "Villa méditerranéenne",
    category: "Inspection toiture",
    description: "Relevé photographique complet après épisode de grêle",
    gradient: "from-amber-900/40 to-neutral-950/50",
    image: "/portfolio-villa-volets.jpg"
  },
  {
    id: 2,
    title: "Domaine viticole",
    category: "Captation commerciale",
    description: "Vidéo promotionnelle et galerie photos pour site vitrine",
    gradient: "from-emerald-900/40 to-neutral-950/50",
    image: "/portfolio-domaine-viticole.jpg"
  },
  {
    id: 3,
    title: "Parcelle viticole",
    category: "Inspection terrain",
    description: "Orthophotos haute résolution pour suivi parcellaire saisonnier",
    gradient: "from-sky-900/40 to-neutral-950/50",
    image: "/portfolio-ferme-terrain.jpg"
  },
  {
    id: 4,
    title: "Fête des Vendanges",
    category: "Événementiel",
    description: "Couverture drone demi-journée — vidéo highlights 2 min",
    gradient: "from-rose-900/40 to-neutral-950/50",
    image: "/portfolio-festival-1.jpg"
  },
  {
    id: 5,
    title: "Mas rénové",
    category: "Captation commerciale",
    description: "Visuels immobiliers drone + sol pour agence",
    gradient: "from-violet-900/40 to-neutral-950/50",
    image: "/portfolio-ferme-cour.jpg"
  },
  {
    id: 6,
    title: "Chantier lotissement",
    category: "Inspection terrain",
    description: "Suivi d'avancement mensuel par survol drone",
    gradient: "from-orange-900/40 to-neutral-950/50",
    image: "/portfolio-chantier.jpg"
  },
  {
    id: 7,
    title: "Toiture ardoise château",
    category: "Inspection toiture",
    description: "Documentation pré-rénovation pour maître d'œuvre",
    gradient: "from-teal-900/40 to-neutral-950/50",
    image: "/portfolio-villa-pierre.jpg"
  },
  {
    id: 8,
    title: "Toitures centre ancien",
    category: "Inspection toiture",
    description: "Survol diagnostic de toitures mitoyennes en zone dense",
    gradient: "from-stone-800/40 to-neutral-950/50",
    image: "/portfolio-toiture-village.jpg"
  },
  {
    id: 9,
    title: "Relevé tuiles anciennes",
    category: "Inspection toiture",
    description: "Identification visuelle de désordres sur couverture traditionnelle",
    gradient: "from-red-900/40 to-neutral-950/50",
    image: "/portfolio-toiture-tuiles.jpg"
  },
  {
    id: 10,
    title: "Festival agricole",
    category: "Événementiel",
    description: "Vue aérienne d'un rassemblement agricole en plein air",
    gradient: "from-amber-800/40 to-neutral-950/50",
    image: "/portfolio-festival-2.jpg"
  }
];
function Portfolio() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const handleMouseDown = useCallback((e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollSnapType = "none";
  }, []);
  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    scrollRef.current.scrollLeft = scrollStart - dx;
  }, [isDragging, startX, scrollStart]);
  const stopDrag = useCallback(() => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.scrollSnapType = "x proximity";
  }, []);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("mouseleave", stopDrag);
    return () => el.removeEventListener("mouseleave", stopDrag);
  }, [stopDrag]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: scrollRef,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: stopDrag,
      className: `flex gap-5 overflow-x-auto pl-6 pr-6 pb-4 no-scrollbar snap-x snap-proximity ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`,
      style: { scrollSnapType: "x proximity" },
      children: [
        projects.map((project) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: "group relative flex-none w-[82vw] sm:w-[60vw] md:w-[400px] aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-800 hover:border-gold-400/20 transition-colors",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.image || "/placeholder-drone.jpg",
                  alt: project.title,
                  loading: "lazy",
                  className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                  draggable: false
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-t ${project.gradient}` }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col justify-end p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-2", children: project.category }),
                /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-stone-100 mb-1", style: { fontFamily: '"Space Grotesk", system-ui, sans-serif' }, children: project.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-stone-400 leading-relaxed", children: project.description })
              ] })
            ]
          },
          project.id
        )),
        /* @__PURE__ */ jsx("div", { className: "flex-none w-1", "aria-hidden": "true" })
      ]
    }
  );
}

const servicePackages = {
  inspection: {
    label: "Inspection aérienne",
    packages: [
      {
        id: "insp-standard",
        name: "Standard",
        price: 190,
        features: ["20-30 photos HD", "Vidéo 4K brute", "Livraison cloud sous 48h"],
        note: "Analyse technique à confier à un professionnel"
      },
      {
        id: "insp-complet",
        name: "Complet",
        price: 290,
        features: ["30-50 photos HD retouchées", "Vidéo 4K montée (2-3 min)", "Rapport visuel PDF", "Livraison cloud sous 48h"],
        note: "Analyse technique à confier à un professionnel"
      }
    ]
  },
  commercial: {
    label: "Captation commerciale",
    packages: [
      {
        id: "com-essentiel",
        name: "Essentiel",
        price: 250,
        features: ["10-15 photos retouchées", "Vidéo montée (1-2 min)", "Formats web optimisés"]
      },
      {
        id: "com-premium",
        name: "Premium",
        price: 450,
        features: ["20-30 photos retouchées", "Vidéo cinématique (3-5 min)", "Storyboard personnalisé", "Formats web + print"]
      }
    ]
  },
  evenement: {
    label: "Événementiel",
    packages: [
      {
        id: "evt-demi",
        name: "Demi-journée",
        price: 350,
        features: ["4h de captation", "Drone + photos au sol", "Vidéo highlights (2 min)"]
      },
      {
        id: "evt-journee",
        name: "Journée complète",
        price: 600,
        features: ["8h de captation", "Drone + photos au sol", "Vidéo highlights (5 min)", "Galerie en ligne"]
      }
    ]
  }
};
const cities = [
  { name: "Narbonne", km: 0 },
  { name: "Fabrezan", km: 4 },
  { name: "Boutenac", km: 6 },
  { name: "Ferrals-les-Corbières", km: 7 },
  { name: "Lézignan-Corbières", km: 10 },
  { name: "Ornaisons", km: 10 },
  { name: "Thézan-des-Corbières", km: 8 },
  { name: "Lagrasse", km: 18 },
  { name: "Capendu", km: 22 },
  { name: "Narbonne", km: 25 },
  { name: "Coursan", km: 30 },
  { name: "Sigean", km: 30 },
  { name: "Gruissan", km: 35 },
  { name: "Port-la-Nouvelle", km: 35 },
  { name: "Trèbes", km: 35 },
  { name: "Béziers", km: 45 },
  { name: "Leucate", km: 45 },
  { name: "Carcassonne", km: 50 },
  { name: "Limoux", km: 55 },
  { name: "Pézenas", km: 60 },
  { name: "Agde", km: 65 },
  { name: "Quillan", km: 70 },
  { name: "Castelnaudary", km: 80 },
  { name: "Perpignan", km: 85 },
  { name: "Sète", km: 95 },
  { name: "Montpellier", km: 120 },
  { name: "Albi", km: 125 },
  { name: "Toulouse", km: 130 }
];
function getTravelFee(km) {
  if (km <= 25) return { zone: "0 – 25 km", fee: 0 };
  if (km <= 50) return { zone: "25 – 50 km", fee: 35 };
  if (km <= 80) return { zone: "50 – 80 km", fee: 60 };
  if (km <= 135) return { zone: "80 – 135 km", fee: 95 };
  return { zone: "Hors zone (> 135 km)", fee: -1 };
}
function PricingCalculator() {
  const [service, setService] = useState("inspection");
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [manualKm, setManualKm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const currentService = servicePackages[service];
  const currentPackage = currentService.packages[selectedPackage];
  const filteredCities = useMemo(() => {
    if (!citySearch.trim()) return [];
    const q = citySearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return cities.filter(
      (c) => c.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)
    ).slice(0, 6);
  }, [citySearch]);
  const effectiveKm = selectedCity ? selectedCity.km : manualKm ? parseInt(manualKm, 10) : null;
  const travel = effectiveKm !== null && !isNaN(effectiveKm) && effectiveKm >= 0 ? getTravelFee(effectiveKm) : null;
  const total = travel && travel.fee >= 0 ? currentPackage.price + travel.fee : null;
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCitySearch(city.name);
    setManualKm("");
    setShowDropdown(false);
  };
  const handleServiceChange = (s) => {
    setService(s);
    setSelectedPackage(0);
  };
  const tabClass = (active) => `px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${active ? "bg-gold-400 text-neutral-950" : "text-stone-400 hover:text-stone-200 hover:bg-neutral-800"}`;
  const pkgClass = (selected) => `relative flex-1 rounded-2xl border p-6 cursor-pointer transition-all text-left ${selected ? "border-gold-400/50 bg-gold-400/[0.04]" : "border-neutral-800 bg-neutral-900 hover:border-neutral-700"}`;
  const inputClass = "w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-colors";
  const zones = [
    { range: "0-25 km", fee: "Offert", active: effectiveKm !== null && effectiveKm <= 25 },
    { range: "25-50 km", fee: "+35€", active: effectiveKm !== null && effectiveKm > 25 && effectiveKm <= 50 },
    { range: "50-80 km", fee: "+60€", active: effectiveKm !== null && effectiveKm > 50 && effectiveKm <= 80 },
    { range: "80-135 km", fee: "+95€", active: effectiveKm !== null && effectiveKm > 80 && effectiveKm <= 135 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 w-fit", children: Object.keys(servicePackages).map((s) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => handleServiceChange(s),
        className: tabClass(service === s),
        children: servicePackages[s].label
      },
      s
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: currentService.packages.map((pkg, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setSelectedPackage(i),
        className: pkgClass(selectedPackage === i),
        children: [
          selectedPackage === i && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-400" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-stone-500 mb-3", children: pkg.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold text-stone-100 mb-4", style: { fontFamily: '"Space Grotesk", system-ui, sans-serif' }, children: [
            pkg.price,
            "€"
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-stone-400", children: pkg.features.map((f, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) }),
            f
          ] }, j)) }),
          pkg.note && /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-stone-500 border-l-2 border-gold-400/30 pl-2", children: pkg.note })
        ]
      },
      pkg.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-neutral-800 bg-neutral-900 p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-stone-500 mb-4", children: "Zone d'intervention" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs text-stone-400 mb-1.5", children: "Rechercher une ville" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: citySearch,
              onChange: (e) => {
                setCitySearch(e.target.value);
                setSelectedCity(null);
                setShowDropdown(true);
              },
              onFocus: () => {
                if (citySearch.trim()) setShowDropdown(true);
              },
              placeholder: "Narbonne, Carcassonne, Béziers…",
              className: inputClass
            }
          ),
          showDropdown && filteredCities.length > 0 && /* @__PURE__ */ jsx("ul", { className: "absolute z-20 left-0 right-0 mt-1 rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl overflow-hidden", children: filteredCities.map((city) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => handleCitySelect(city),
              className: "w-full text-left px-4 py-2.5 text-sm text-stone-300 hover:bg-neutral-800 hover:text-gold-400 transition-colors flex justify-between",
              children: [
                /* @__PURE__ */ jsx("span", { children: city.name }),
                /* @__PURE__ */ jsxs("span", { className: "text-stone-600", children: [
                  city.km,
                  " km"
                ] })
              ]
            }
          ) }, city.name)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs text-stone-400 mb-1.5", children: "Ou saisir la distance (km)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              min: "0",
              max: "200",
              value: manualKm,
              onChange: (e) => {
                setManualKm(e.target.value);
                setSelectedCity(null);
                setCitySearch("");
              },
              placeholder: "ex: 45",
              className: inputClass
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2", children: zones.map((z) => /* @__PURE__ */ jsxs("div", { className: `rounded-xl border px-3 py-2 text-center transition-colors ${z.active ? "border-gold-400/40 bg-gold-400/[0.04]" : "border-neutral-800"}`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500", children: z.range }),
        /* @__PURE__ */ jsx("p", { className: `text-sm font-semibold ${z.active ? "text-gold-400" : "text-stone-300"}`, children: z.fee })
      ] }, z.range)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsx("div", { children: total !== null ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-stone-500", children: "Prestation" }),
          /* @__PURE__ */ jsxs("span", { className: "text-stone-200 font-medium", children: [
            currentPackage.price,
            "€"
          ] }),
          travel && travel.fee > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-stone-600", children: "+" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-stone-500", children: "Déplacement" }),
            /* @__PURE__ */ jsxs("span", { className: "text-stone-200 font-medium", children: [
              travel.fee,
              "€"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-4xl font-bold text-stone-100 mt-2", style: { fontFamily: '"Space Grotesk", system-ui, sans-serif' }, children: [
          total,
          "€ ",
          /* @__PURE__ */ jsx("span", { className: "text-base font-normal text-stone-500", children: "TTC" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 mt-1", children: "Estimation indicative — devis définitif après échange" })
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-stone-100", style: { fontFamily: '"Space Grotesk", system-ui, sans-serif' }, children: effectiveKm !== null && travel && travel.fee < 0 ? "Hors zone de couverture" : "Sélectionnez une zone" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-500 mt-1", children: effectiveKm !== null && travel && travel.fee < 0 ? "Contactez-moi pour étudier la faisabilité" : "Choisissez votre ville ou entrez la distance pour voir l'estimation" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contact",
          className: "inline-flex items-center justify-center px-7 py-3.5 bg-gold-400 text-neutral-950 font-semibold rounded-full hover:bg-gold-300 transition-colors text-sm uppercase tracking-wider whitespace-nowrap",
          children: "Demander un devis"
        }
      )
    ] })
  ] });
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative py-28 lg:py-40 overflow-hidden"> <!-- Ambient background effects --> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-400/[0.03] rounded-full blur-[120px]"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/[0.02] rounded-full blur-[100px]"></div> </div> <div class="relative max-w-7xl mx-auto px-6"> <!-- Section header --> <div class="text-center mb-20"> <span class="text-gold-400 text-xs uppercase tracking-[0.4em] font-semibold">À propos</span> <h2 class="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-5 text-stone-100 leading-[0.95]">
Mathieu Toffolon
</h2> <p class="text-gold-400/80 font-medium text-lg mt-4">Télépilote professionnel certifié DGAC</p> </div> <!-- Main content: visual card + text --> <div class="grid gap-12 lg:gap-20 lg:grid-cols-5 items-start"> <!-- Left: Visual identity card --> <div class="lg:col-span-2 flex justify-center lg:justify-start"> <div class="relative w-full max-w-sm"> <!-- Card background --> <div class="relative rounded-[2rem] border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 shadow-2xl shadow-black/50"> <!-- Decorative top bar --> <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"></div> <!-- Drone icon --> <div class="flex justify-center mb-8"> <div class="relative"> <div class="absolute inset-0 bg-gold-400/20 rounded-full blur-xl"></div> <div class="relative w-20 h-20 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center"> <svg class="w-10 h-10 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="3"></circle> <path d="M12 1v4M12 19v4M1 12h4M19 12h4"></path> <path d="M4.2 4.2l2.8 2.8M17 17l2.8 2.8M4.2 19.8l2.8-2.8M17 7l2.8-2.8"></path> </svg> </div> </div> </div> <!-- Name --> <div class="text-center mb-8"> <h3 class="font-display text-2xl font-bold text-stone-100">M. Toffolon</h3> <p class="text-sm text-stone-500 mt-1">EI — Narbonne, Aude (11)</p> </div> <!-- Certifications --> <div class="space-y-3 mb-8"> <div class="flex items-center gap-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 px-4 py-3"> <div class="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0"> <svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> </div> <div> <p class="text-sm font-semibold text-stone-200">CATT & CATS</p> <p class="text-[11px] text-stone-500">Certifications DGAC</p> </div> </div> <div class="flex items-center gap-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 px-4 py-3"> <div class="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0"> <svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> </div> <div> <p class="text-sm font-semibold text-stone-200">RC Professionnelle</p> <p class="text-[11px] text-stone-500">Assurance vol & exploitation</p> </div> </div> <div class="flex items-center gap-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 px-4 py-3"> <div class="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0"> <svg class="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> </div> <div> <p class="text-sm font-semibold text-stone-200">4K HDR</p> <p class="text-[11px] text-stone-500">Photo & vidéo haute définition</p> </div> </div> </div> <!-- Decorative bottom bar --> <div class="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"></div> </div> </div> </div> <!-- Right: Content --> <div class="lg:col-span-3 space-y-10"> <!-- Bio --> <div class="space-y-5"> <p class="text-stone-300 text-lg leading-relaxed">
Basé à <span class="text-stone-100 font-medium">Narbonne</span> dans l'Aude, j'interviens dans un rayon de 135 km pour capturer vos projets avec précision et réactivité — de Béziers à Toulouse, en passant par Perpignan et Carcassonne.
</p> <p class="text-stone-400 leading-relaxed">
Mon approche est simple : un brief rapide, un vol cadré selon la réglementation DGAC, et des fichiers HD livrés sous 48h via un lien sécurisé. Pas de jargon, pas de délais inutiles.
</p> </div> <!-- Stats row --> <div class="grid grid-cols-3 gap-4"> <div class="relative group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 text-center transition-colors hover:border-gold-400/20"> <div class="absolute inset-0 bg-gold-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div> <p class="relative font-display text-3xl md:text-4xl font-bold text-gold-400">48h</p> <p class="relative text-xs text-stone-500 mt-2">Délai de livraison</p> </div> <div class="relative group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 text-center transition-colors hover:border-gold-400/20"> <div class="absolute inset-0 bg-gold-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div> <p class="relative font-display text-3xl md:text-4xl font-bold text-gold-400">135<span class="text-lg">km</span></p> <p class="relative text-xs text-stone-500 mt-2">Rayon d'action</p> </div> <div class="relative group rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 text-center transition-colors hover:border-gold-400/20"> <div class="absolute inset-0 bg-gold-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div> <p class="relative font-display text-3xl md:text-4xl font-bold text-gold-400">4K</p> <p class="relative text-xs text-stone-500 mt-2">Résolution max</p> </div> </div> <!-- Process steps --> <div> <h3 class="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-6">Comment ça se passe</h3> <div class="grid sm:grid-cols-3 gap-4"> <div class="flex gap-4 sm:flex-col sm:gap-3"> <div class="flex-shrink-0 w-10 h-10 rounded-full border border-gold-400/30 bg-gold-400/5 flex items-center justify-center"> <span class="font-display text-sm font-bold text-gold-400">01</span> </div> <div> <p class="text-sm font-semibold text-stone-200">Brief & devis</p> <p class="text-xs text-stone-500 mt-1 leading-relaxed">Échange rapide sur votre besoin. Devis envoyé sous 24h.</p> </div> </div> <div class="flex gap-4 sm:flex-col sm:gap-3"> <div class="flex-shrink-0 w-10 h-10 rounded-full border border-gold-400/30 bg-gold-400/5 flex items-center justify-center"> <span class="font-display text-sm font-bold text-gold-400">02</span> </div> <div> <p class="text-sm font-semibold text-stone-200">Vol & captation</p> <p class="text-xs text-stone-500 mt-1 leading-relaxed">Intervention sur site en toute conformité DGAC.</p> </div> </div> <div class="flex gap-4 sm:flex-col sm:gap-3"> <div class="flex-shrink-0 w-10 h-10 rounded-full border border-gold-400/30 bg-gold-400/5 flex items-center justify-center"> <span class="font-display text-sm font-bold text-gold-400">03</span> </div> <div> <p class="text-sm font-semibold text-stone-200">Livraison 48h</p> <p class="text-xs text-stone-500 mt-1 leading-relaxed">Fichiers HD envoyés par lien sécurisé, prêts à l'emploi.</p> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/home/mathieu/Projets/stellarisdrone/src/components/About.astro", void 0);

const inputClass = "mt-1.5 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-colors";
const labelClass = "block text-xs font-medium text-stone-400 uppercase tracking-wider";
function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("Envoi en cours…");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const requesterName = formData.get("name")?.toString().trim();
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      mission: formData.get("mission")?.toString(),
      message: formData.get("message")?.toString().trim()
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        const thanks = requesterName ? `Merci ${requesterName}, un email de confirmation vous a été envoyé. Je reviens vers vous très vite.` : "Message envoyé. Un email de confirmation vous a été envoyé.";
        setMessage(thanks);
        setToastMessage(thanks);
        form.reset();
      } else {
        setStatus("error");
        setMessage("Une erreur est survenue. Réessayez ou écrivez-moi directement.");
      }
    } catch {
      setStatus("error");
      setMessage("Une erreur est survenue. Réessayez ou écrivez-moi directement.");
    }
  };
  useEffect(() => {
    if (!toastMessage) return;
    const timeout = setTimeout(() => setToastMessage(""), 8e3);
    return () => clearTimeout(timeout);
  }, [toastMessage]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-5", "aria-live": "polite", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("label", { className: labelClass, children: [
          "Nom / Entreprise",
          /* @__PURE__ */ jsx("input", { type: "text", name: "name", placeholder: "Votre nom", required: true, className: inputClass })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: labelClass, children: [
          "Email",
          /* @__PURE__ */ jsx("input", { type: "email", name: "email", placeholder: "nom@domaine.com", required: true, className: inputClass })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("label", { className: labelClass, children: [
          "Téléphone",
          /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", placeholder: "06 00 00 00 00", className: inputClass })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: labelClass, children: [
          "Type de prestation",
          /* @__PURE__ */ jsxs("select", { name: "mission", className: inputClass, children: [
            /* @__PURE__ */ jsx("option", { value: "inspection", children: "Inspection (toiture / terrain)" }),
            /* @__PURE__ */ jsx("option", { value: "commercial", children: "Captation commerciale" }),
            /* @__PURE__ */ jsx("option", { value: "evenement", children: "Couverture événementielle" }),
            /* @__PURE__ */ jsx("option", { value: "autre", children: "Autre besoin" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: labelClass, children: [
        "Votre projet en quelques mots",
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            rows: 4,
            placeholder: "Décrivez votre besoin, la zone d'intervention, les délais…",
            required: true,
            className: inputClass + " resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: status === "sending",
          className: "w-full rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 hover:bg-gold-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: status === "sending" ? "Envoi…" : "Envoyer ma demande"
        }
      ),
      message && /* @__PURE__ */ jsx("p", { className: `text-xs ${status === "error" ? "text-red-400" : "text-stone-400"}`, children: message }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] leading-relaxed text-stone-600", children: "En soumettant ce formulaire, vous acceptez que Stellaris Drone traite vos informations pour répondre à votre demande. Aucune donnée n'est partagée avec des tiers." })
    ] }),
    toastMessage && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[70] flex items-center justify-center bg-neutral-950/60 backdrop-blur-sm px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-sm rounded-3xl border border-neutral-800 bg-neutral-900 p-8 text-center shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-gold-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) }) }),
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-stone-100", style: { fontFamily: '"Space Grotesk", system-ui, sans-serif' }, children: "Demande envoyée" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-stone-400 leading-relaxed", children: toastMessage }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setToastMessage(""),
          className: "mt-6 px-6 py-2 rounded-full border border-neutral-700 text-sm text-stone-300 hover:border-gold-400/30 transition-colors",
          children: "Fermer"
        }
      )
    ] }) })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="relative py-24 lg:py-32"> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/[0.03] to-transparent"></div> <div class="max-w-7xl mx-auto px-6 relative"> <div class="grid gap-12 lg:gap-20 lg:grid-cols-5"> <div class="lg:col-span-2 space-y-8"> <div> <span class="text-gold-400 text-xs uppercase tracking-[0.4em] font-semibold">Contact</span> <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 text-stone-100">
Parlons de votre projet
</h2> <p class="text-stone-400 mt-4 leading-relaxed">
Décrivez votre besoin et recevez un devis personnalisé sous 24h. Déplacement inclus dans un rayon de 25 km autour de Narbonne.
</p> </div> <div class="space-y-4"> <a href="mailto:contact@stellarisdrone.com" class="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-4 hover:border-gold-400/30 transition-colors group"> <div class="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path> </svg> </div> <div> <p class="text-xs text-stone-500 mb-0.5">Email</p> <p class="text-sm text-stone-200 group-hover:text-gold-400 transition-colors">contact@stellarisdrone.com</p> </div> </a> <a href="tel:+33781730114" class="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-4 hover:border-gold-400/30 transition-colors group"> <div class="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path> </svg> </div> <div> <p class="text-xs text-stone-500 mb-0.5">Téléphone</p> <p class="text-sm text-stone-200 group-hover:text-gold-400 transition-colors">07 81 73 01 14</p> </div> </a> <div class="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-4"> <div class="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0"> <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg> </div> <div> <p class="text-xs text-stone-500 mb-0.5">Zone d'intervention</p> <p class="text-sm text-stone-200">Aude · Hérault · Haute-Garonne</p> </div> </div> </div> </div> <div class="lg:col-span-3"> <div class="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8"> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mathieu/Projets/stellarisdrone/src/components/ContactForm.tsx", "client:component-export": "default" })} </div> </div> </div> </div> </section>`;
}, "/home/mathieu/Projets/stellarisdrone/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stellaris Drone \u2014 Captation a\xE9rienne par drone \xB7 Aude, Occitanie" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} <section id="portfolio" class="py-24 lg:py-32"> <div class="max-w-7xl mx-auto px-6 mb-12"> <span class="text-gold-400 text-xs uppercase tracking-[0.4em] font-semibold">Réalisations</span> <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 text-stone-100">
Quelques projets récents
</h2> <p class="text-stone-400 mt-4 max-w-xl">Inspection, immobilier, événementiel — chaque mission est une histoire. Glissez pour découvrir.</p> </div> ${renderComponent($$result2, "Portfolio", Portfolio, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mathieu/Projets/stellarisdrone/src/components/Portfolio.tsx", "client:component-export": "default" })} </section> <section id="tarifs" class="py-24 lg:py-32 bg-neutral-900/50"> <div class="max-w-7xl mx-auto px-6"> <div class="mb-12"> <span class="text-gold-400 text-xs uppercase tracking-[0.4em] font-semibold">Tarifs</span> <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 text-stone-100">
Estimation instantanée
</h2> <p class="text-stone-400 mt-4 max-w-xl">Sélectionnez votre prestation et votre zone géographique pour obtenir une estimation. Le devis définitif est ajusté après un échange rapide.</p> </div> ${renderComponent($$result2, "PricingCalculator", PricingCalculator, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mathieu/Projets/stellarisdrone/src/components/PricingCalculator.tsx", "client:component-export": "default" })} </div> </section> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/mathieu/Projets/stellarisdrone/src/pages/index.astro", void 0);

const $$file = "/home/mathieu/Projets/stellarisdrone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
