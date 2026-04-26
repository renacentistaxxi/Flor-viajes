// Main App for Flor — orchestrates all steps with slide transitions

const { useState: useStateMain, useEffect: useEffectMain } = React;

const STORAGE_KEY = 'flor-quote-progress';

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: 'AR',
  days: 7,
  dateType: '',
  dates: '',
  dateFrom: '',
  dateTo: '',
  adults: 2,
  children: [],
  parks: [],
  specificParks: '',
  cotizar: '',
  ubicacion: '',
  rooms: [{ id: 'r1', occupants: [] }],
  style: 'intermedio',
  imagina: '',
  notes: '',
};

const CHAPTER_LABELS = [
  'Bienvenida',
  'Tus datos',
  'Cuándo y cuántos',
  'Preferencias',
  'Alojamiento',
  'Repaso final',
];

function FlorApp() {
  const [step, setStep] = useStateMain(0);
  const [data, setData] = useStateMain(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...initialData, ...JSON.parse(saved) };
    } catch (e) {}
    return initialData;
  });
  const [submitted, setSubmitted] = useStateMain(false);

  useEffectMain(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }, [data]);

  // Reset scroll on step change
  useEffectMain(() => {
    const pane = document.querySelectorAll('.step-pane')[step];
    if (pane) pane.scrollTop = 0;
  }, [step]);

  const update = (patch) => setData(d => ({ ...d, ...patch }));
  const next = () => setStep(s => Math.min(5, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));
  const jump = (s) => setStep(s);

  const submit = () => {
    // ── Send data to Formspree (or your backend) ──
    // Replace 'TU_FORMSPREE_ID' with your real Formspree form ID
    // from https://formspree.io — e.g. 'xyzabcde'
    const FORMSPREE_ID = 'TU_FORMSPREE_ID';
    if (FORMSPREE_ID !== 'TU_FORMSPREE_ID') {
      fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {});
    }
    setSubmitted(true);
  };

  const reset = () => {
    setData(initialData);
    setStep(0);
    setSubmitted(false);
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  };

  // Total progress
  const progress = step / 5;

  // Fix desktop scroll: forward wheel events to the active step-pane
  useEffectMain(() => {
    const appEl = document.querySelector('.app');
    if (!appEl) return;
    const handler = (e) => {
      const panes = appEl.querySelectorAll('.step-pane');
      const activePane = panes[step];
      if (activePane) {
        activePane.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };
    appEl.addEventListener('wheel', handler, { passive: false });
    return () => appEl.removeEventListener('wheel', handler);
  }, [step]);

  if (submitted) {
    return (
      <div className="app">
        <SuccessScreen data={data} onReset={reset} />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Progress header — hidden on step 0 (hero owns its layout) */}
      {step > 0 && (
        <>
          <div className="progress-header">
            <div className="progress-row">
              <div className="chapter-label">{CHAPTER_LABELS[step]}</div>
              <div className="chapter-counter">Paso {step} / 5</div>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ transform: `scaleX(${progress})` }} />
            </div>
          </div>
        </>
      )}

      {/* Slide track */}
      <div className="steps-track" style={{ transform: `translateX(-${step * 100}%)` }}>
        <div className="step-pane">
          <StepHero onNext={next} />
        </div>
        <div className="step-pane">
          <StepContact data={data} update={update} onNext={next} onBack={back} />
        </div>
        <div className="step-pane">
          <StepLogistics data={data} update={update} onNext={next} onBack={back} />
        </div>
        <div className="step-pane">
          <StepPrefs data={data} update={update} onNext={next} onBack={back} />
        </div>
        <div className="step-pane">
          <StepLodging data={data} update={update} onNext={next} onBack={back} />
        </div>
        <div className="step-pane">
          <StepSummary data={data} onSubmit={submit} onBack={back} onJump={jump} />
        </div>
      </div>
    </div>
  );
}

// Mount — direct render, no iOS frame
const root = ReactDOM.createRoot(document.getElementById('app-root'));
root.render(<FlorApp />);
