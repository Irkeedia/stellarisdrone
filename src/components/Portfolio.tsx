import { useRef, useState, useCallback, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  gradient: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa méditerranéenne",
    category: "Inspection toiture",
    description: "Relevé photographique complet après épisode de grêle",
    gradient: "from-amber-900/40 to-neutral-950/50",
    image: "/portfolio-villa-volets.jpg",
  },
  {
    id: 2,
    title: "Domaine viticole",
    category: "Captation commerciale",
    description: "Vidéo promotionnelle et galerie photos pour site vitrine",
    gradient: "from-emerald-900/40 to-neutral-950/50",
    image: "/portfolio-domaine-viticole.jpg",
  },
  {
    id: 3,
    title: "Parcelle viticole",
    category: "Inspection terrain",
    description: "Orthophotos haute résolution pour suivi parcellaire saisonnier",
    gradient: "from-sky-900/40 to-neutral-950/50",
    image: "/portfolio-ferme-terrain.jpg",
  },
  {
    id: 4,
    title: "Fête des Vendanges",
    category: "Événementiel",
    description: "Couverture drone demi-journée — vidéo highlights 2 min",
    gradient: "from-rose-900/40 to-neutral-950/50",
    image: "/portfolio-festival-1.jpg",
  },
  {
    id: 5,
    title: "Mas rénové",
    category: "Captation commerciale",
    description: "Visuels immobiliers drone + sol pour agence",
    gradient: "from-violet-900/40 to-neutral-950/50",
    image: "/portfolio-ferme-cour.jpg",
  },
  {
    id: 6,
    title: "Chantier lotissement",
    category: "Inspection terrain",
    description: "Suivi d'avancement mensuel par survol drone",
    gradient: "from-orange-900/40 to-neutral-950/50",
    image: "/portfolio-chantier.jpg",
  },
  {
    id: 7,
    title: "Toiture ardoise château",
    category: "Inspection toiture",
    description: "Documentation pré-rénovation pour maître d'œuvre",
    gradient: "from-teal-900/40 to-neutral-950/50",
    image: "/portfolio-villa-pierre.jpg",
  },
  {
    id: 8,
    title: "Toitures centre ancien",
    category: "Inspection toiture",
    description: "Survol diagnostic de toitures mitoyennes en zone dense",
    gradient: "from-stone-800/40 to-neutral-950/50",
    image: "/portfolio-toiture-village.jpg",
  },
  {
    id: 9,
    title: "Relevé tuiles anciennes",
    category: "Inspection toiture",
    description: "Identification visuelle de désordres sur couverture traditionnelle",
    gradient: "from-red-900/40 to-neutral-950/50",
    image: "/portfolio-toiture-tuiles.jpg",
  },
  {
    id: 10,
    title: "Festival agricole",
    category: "Événementiel",
    description: "Vue aérienne d'un rassemblement agricole en plein air",
    gradient: "from-amber-800/40 to-neutral-950/50",
    image: "/portfolio-festival-2.jpg",
  },
];

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollSnapType = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    scrollRef.current.scrollLeft = scrollStart - dx;
  }, [isDragging, startX, scrollStart]);

  const stopDrag = useCallback(() => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.scrollSnapType = 'x proximity';
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('mouseleave', stopDrag);
    return () => el.removeEventListener('mouseleave', stopDrag);
  }, [stopDrag]);

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
      className={`flex gap-5 overflow-x-auto pl-6 pr-6 pb-4 no-scrollbar snap-x snap-proximity ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      style={{ scrollSnapType: 'x proximity' }}
    >
      {projects.map((project) => (
        <article
          key={project.id}
          className="group relative flex-none w-[82vw] sm:w-[60vw] md:w-[400px] aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-800 hover:border-gold-400/20 transition-colors"
        >
          <div className="absolute inset-0">
            <img
              src={project.image || "/placeholder-drone.jpg"}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-2">{project.category}</span>
            <h3 className="font-display text-xl font-semibold text-stone-100 mb-1" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>{project.title}</h3>
            <p className="text-sm text-stone-400 leading-relaxed">{project.description}</p>
          </div>
        </article>
      ))}
      <div className="flex-none w-1" aria-hidden="true" />
    </div>
  );
}
