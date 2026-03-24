import { useState, useMemo } from 'react';

type ServiceType = 'inspection' | 'commercial' | 'evenement';

interface ServicePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  note?: string;
}

interface City {
  name: string;
  km: number;
}

const servicePackages: Record<ServiceType, { label: string; packages: ServicePackage[] }> = {
  inspection: {
    label: 'Inspection aérienne',
    packages: [
      {
        id: 'insp-standard',
        name: 'Standard',
        price: 190,
        features: ['20-30 photos HD', 'Vidéo 4K brute', 'Livraison cloud sous 48h'],
        note: 'Analyse technique à confier à un professionnel',
      },
      {
        id: 'insp-complet',
        name: 'Complet',
        price: 290,
        features: ['30-50 photos HD retouchées', 'Vidéo 4K montée (2-3 min)', 'Rapport visuel PDF', 'Livraison cloud sous 48h'],
        note: 'Analyse technique à confier à un professionnel',
      },
    ],
  },
  commercial: {
    label: 'Captation commerciale',
    packages: [
      {
        id: 'com-essentiel',
        name: 'Essentiel',
        price: 250,
        features: ['10-15 photos retouchées', 'Vidéo montée (1-2 min)', 'Formats web optimisés'],
      },
      {
        id: 'com-premium',
        name: 'Premium',
        price: 450,
        features: ['20-30 photos retouchées', 'Vidéo cinématique (3-5 min)', 'Storyboard personnalisé', 'Formats web + print'],
      },
    ],
  },
  evenement: {
    label: 'Événementiel',
    packages: [
      {
        id: 'evt-demi',
        name: 'Demi-journée',
        price: 350,
        features: ['4h de captation', 'Drone + photos au sol', 'Vidéo highlights (2 min)'],
      },
      {
        id: 'evt-journee',
        name: 'Journée complète',
        price: 600,
        features: ['8h de captation', 'Drone + photos au sol', 'Vidéo highlights (5 min)', 'Galerie en ligne'],
      },
    ],
  },
};

const cities: City[] = [
  { name: "Montseret", km: 0 },
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
  { name: "Toulouse", km: 130 },
];

function getTravelFee(km: number): { zone: string; fee: number } {
  if (km <= 25) return { zone: '0 – 25 km', fee: 0 };
  if (km <= 50) return { zone: '25 – 50 km', fee: 35 };
  if (km <= 80) return { zone: '50 – 80 km', fee: 60 };
  if (km <= 135) return { zone: '80 – 135 km', fee: 95 };
  return { zone: 'Hors zone (> 135 km)', fee: -1 };
}

export default function PricingCalculator() {
  const [service, setService] = useState<ServiceType>('inspection');
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [citySearch, setCitySearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [manualKm, setManualKm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const currentService = servicePackages[service];
  const currentPackage = currentService.packages[selectedPackage];

  const filteredCities = useMemo(() => {
    if (!citySearch.trim()) return [];
    const q = citySearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return cities.filter(c =>
      c.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)
    ).slice(0, 6);
  }, [citySearch]);

  const effectiveKm = selectedCity ? selectedCity.km : (manualKm ? parseInt(manualKm, 10) : null);
  const travel = effectiveKm !== null && !isNaN(effectiveKm) && effectiveKm >= 0 ? getTravelFee(effectiveKm) : null;
  const total = travel && travel.fee >= 0 ? currentPackage.price + travel.fee : null;

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setCitySearch(city.name);
    setManualKm('');
    setShowDropdown(false);
  };

  const handleServiceChange = (s: ServiceType) => {
    setService(s);
    setSelectedPackage(0);
  };

  const tabClass = (active: boolean) =>
    `px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
      active
        ? 'bg-gold-400 text-neutral-950'
        : 'text-stone-400 hover:text-stone-200 hover:bg-neutral-800'
    }`;

  const pkgClass = (selected: boolean) =>
    `relative flex-1 rounded-2xl border p-6 cursor-pointer transition-all text-left ${
      selected
        ? 'border-gold-400/50 bg-gold-400/[0.04]'
        : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700'
    }`;

  const inputClass = "w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-stone-200 placeholder:text-stone-600 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-colors";

  const zones = [
    { range: '0-25 km', fee: 'Offert', active: effectiveKm !== null && effectiveKm <= 25 },
    { range: '25-50 km', fee: '+35€', active: effectiveKm !== null && effectiveKm > 25 && effectiveKm <= 50 },
    { range: '50-80 km', fee: '+60€', active: effectiveKm !== null && effectiveKm > 50 && effectiveKm <= 80 },
    { range: '80-135 km', fee: '+95€', active: effectiveKm !== null && effectiveKm > 80 && effectiveKm <= 135 },
  ];

  return (
    <div className="space-y-8">
      {/* Service tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 w-fit">
        {(Object.keys(servicePackages) as ServiceType[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => handleServiceChange(s)}
            className={tabClass(service === s)}
          >
            {servicePackages[s].label}
          </button>
        ))}
      </div>

      {/* Packages */}
      <div className="grid gap-4 sm:grid-cols-2">
        {currentService.packages.map((pkg, i) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => setSelectedPackage(i)}
            className={pkgClass(selectedPackage === i)}
          >
            {selectedPackage === i && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-400" />
            )}
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3">{pkg.name}</p>
            <p className="text-3xl font-bold text-stone-100 mb-4" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>{pkg.price}€</p>
            <ul className="space-y-2 text-sm text-stone-400">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            {pkg.note && (
              <p className="mt-4 text-xs text-stone-500 border-l-2 border-gold-400/30 pl-2">{pkg.note}</p>
            )}
          </button>
        ))}
      </div>

      {/* Location */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">Zone d'intervention</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative">
            <label className="block text-xs text-stone-400 mb-1.5">Rechercher une ville</label>
            <input
              type="text"
              value={citySearch}
              onChange={(e) => {
                setCitySearch(e.target.value);
                setSelectedCity(null);
                setShowDropdown(true);
              }}
              onFocus={() => { if (citySearch.trim()) setShowDropdown(true); }}
              placeholder="Narbonne, Carcassonne, Béziers…"
              className={inputClass}
            />
            {showDropdown && filteredCities.length > 0 && (
              <ul className="absolute z-20 left-0 right-0 mt-1 rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl overflow-hidden">
                {filteredCities.map((city) => (
                  <li key={city.name}>
                    <button
                      type="button"
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-4 py-2.5 text-sm text-stone-300 hover:bg-neutral-800 hover:text-gold-400 transition-colors flex justify-between"
                    >
                      <span>{city.name}</span>
                      <span className="text-stone-600">{city.km} km</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <label className="block text-xs text-stone-400 mb-1.5">Ou saisir la distance (km)</label>
            <input
              type="number"
              min="0"
              max="200"
              value={manualKm}
              onChange={(e) => {
                setManualKm(e.target.value);
                setSelectedCity(null);
                setCitySearch('');
              }}
              placeholder="ex: 45"
              className={inputClass}
            />
          </div>
        </div>

        {/* Zone indicators */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {zones.map((z) => (
            <div key={z.range} className={`rounded-xl border px-3 py-2 text-center transition-colors ${z.active ? 'border-gold-400/40 bg-gold-400/[0.04]' : 'border-neutral-800'}`}>
              <p className="text-xs text-stone-500">{z.range}</p>
              <p className={`text-sm font-semibold ${z.active ? 'text-gold-400' : 'text-stone-300'}`}>{z.fee}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          {total !== null ? (
            <>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-sm text-stone-500">Prestation</span>
                <span className="text-stone-200 font-medium">{currentPackage.price}€</span>
                {travel && travel.fee > 0 && (
                  <>
                    <span className="text-stone-600">+</span>
                    <span className="text-sm text-stone-500">Déplacement</span>
                    <span className="text-stone-200 font-medium">{travel.fee}€</span>
                  </>
                )}
              </div>
              <p className="text-4xl font-bold text-stone-100 mt-2" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>
                {total}€ <span className="text-base font-normal text-stone-500">TTC</span>
              </p>
              <p className="text-xs text-stone-500 mt-1">Estimation indicative — devis définitif après échange</p>
            </>
          ) : (
            <div>
              <p className="text-2xl font-bold text-stone-100" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>
                {effectiveKm !== null && travel && travel.fee < 0 ? 'Hors zone de couverture' : 'Sélectionnez une zone'}
              </p>
              <p className="text-xs text-stone-500 mt-1">
                {effectiveKm !== null && travel && travel.fee < 0
                  ? 'Contactez-moi pour étudier la faisabilité'
                  : 'Choisissez votre ville ou entrez la distance pour voir l\'estimation'}
              </p>
            </div>
          )}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-3.5 bg-gold-400 text-neutral-950 font-semibold rounded-full hover:bg-gold-300 transition-colors text-sm uppercase tracking-wider whitespace-nowrap"
        >
          Demander un devis
        </a>
      </div>
    </div>
  );
}
