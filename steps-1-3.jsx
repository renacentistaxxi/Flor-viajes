// Step components for Flor's quote form

const { useState, useEffect, useRef, useMemo } = React;

// ─────────────── Step 1: Hero ───────────────
function StepHero({ onNext }) {
  const sparkles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      top: Math.random() * 70 + 5,
      left: Math.random() * 90 + 5,
      size: 8 + Math.random() * 10,
      delay: Math.random() * 4,
    })), []);

  return (
    <div className="hero">
      <div className="hero-stars">
        {sparkles.map(s => (
          <IconSparkle
            key={s.id} size={s.size}
            style={{
              position: 'absolute',
              top: `${s.top}%`, left: `${s.left}%`,
              animation: `starTwinkle 4s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Banner image */}
      <div className="hero-banner">
        <img
          src="banner-flor.png"
          alt="Flor — Agente de Viajes"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center',
          }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      <div className="hero-content" style={{ paddingTop: 24 }}>
        <h1 className="hero-title" style={{ fontSize: 38, textAlign: 'center', marginBottom: 16 }}>
          ✨ Cotizá tu
          <em>viaje soñado</em>
          <span className="accent">conmigo!</span>
          <span style={{ fontSize: 20 }}> ✨</span>
        </h1>

        <div className="hero-intro-block" style={{ flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div className="hero-avatar" style={{
            width: 72, height: 72, fontSize: 34,
            backgroundImage: 'url(avatar-flor.png)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            color: 'transparent',
          }}>F</div>
          <div style={{ fontSize: 14, color: 'var(--marron-soft)', lineHeight: 1.65, textAlign: 'center' }}>
            <p style={{ marginBottom: 12 }}>
              Gracias por confiar en mí para planificar tu viaje.
              Estoy feliz de acompañarte en este proceso tan especial.
            </p>
            <p style={{ marginBottom: 12 }}>
              Soy <strong style={{ color: 'var(--borgona)' }}>Flor</strong>, agente de viajes, y a través de este formulario voy a poder crear una propuesta pensada según tus intereses, estilo de viaje y presupuesto.
            </p>
            <p style={{ marginBottom: 12 }}>
              Mi objetivo es diseñar una experiencia única, cuidando cada detalle para que solo tengas que disfrutar.
            </p>
            <p style={{ fontSize: 13, color: 'var(--marron-mute)' }}>
              📲 Una vez enviada la información, me voy a contactar con vos vía WhatsApp o email.
            </p>
            <p style={{ fontSize: 13, color: 'var(--marron-mute)', marginTop: 6 }}>
              💡 Cuanto más me cuentes, mejor voy a poder diseñar tu viaje ideal.
            </p>
          </div>
        </div>

        <p style={{
          fontSize: 17, color: 'var(--borgona)', lineHeight: 1.5,
          fontStyle: 'italic', fontFamily: 'var(--serif)',
          textAlign: 'center', marginTop: 8,
        }}>
          Vos soñás, yo lo hago realidad. <IconSparkle size={14} />
        </p>
      </div>

      <div className="hero-cta">
        <button className="btn btn-primary" onClick={onNext}>
          ✨ Ahora sí… ¡empecemos a crear la magia!
          <IconArrowRight size={18} />
        </button>
        <p style={{
          textAlign: 'center', fontSize: 11, color: 'var(--marron-mute)',
          marginTop: 12, letterSpacing: 0.5
        }}>
          5 pasos · ~3 minutos · sin compromiso
        </p>
      </div>
    </div>
  );
}

// ─────────────── Step 2: Contact ───────────────
const COUNTRIES = [
  { code: 'AR', name: 'Argentina', dial: '+54', flag: 'linear-gradient(180deg,#74acdf 33%,#fff 33%,#fff 66%,#74acdf 66%)' },
  { code: 'UY', name: 'Uruguay', dial: '+598', flag: 'linear-gradient(180deg,#fff 0,#fff 11%,#0038A8 11%,#0038A8 22%,#fff 22%,#fff 33%,#0038A8 33%,#0038A8 44%,#fff 44%)' },
  { code: 'CL', name: 'Chile', dial: '+56', flag: 'linear-gradient(180deg,#fff 50%,#D52B1E 50%)' },
  { code: 'PY', name: 'Paraguay', dial: '+595', flag: 'linear-gradient(180deg,#D52B1E 33%,#fff 33%,#fff 66%,#0038A8 66%)' },
  { code: 'BO', name: 'Bolivia', dial: '+591', flag: 'linear-gradient(180deg,#D52B1E 33%,#FFCD00 33%,#FFCD00 66%,#007934 66%)' },
  { code: 'BR', name: 'Brasil', dial: '+55', flag: 'linear-gradient(135deg,#009C3B 50%,#FFDF00 50%)' },
  { code: 'PE', name: 'Perú', dial: '+51', flag: 'linear-gradient(90deg,#D91023 33%,#fff 33%,#fff 66%,#D91023 66%)' },
  { code: 'CO', name: 'Colombia', dial: '+57', flag: 'linear-gradient(180deg,#FCD116 50%,#003893 50%,#003893 75%,#CE1126 75%)' },
  { code: 'MX', name: 'México', dial: '+52', flag: 'linear-gradient(90deg,#006847 33%,#fff 33%,#fff 66%,#CE1126 66%)' },
  { code: 'ES', name: 'España', dial: '+34', flag: 'linear-gradient(180deg,#AA151B 25%,#F1BF00 25%,#F1BF00 75%,#AA151B 75%)' },
  { code: 'US', name: 'Estados Unidos', dial: '+1', flag: 'linear-gradient(180deg,#B22234,#fff,#B22234,#fff,#B22234,#fff,#B22234)' },
];

function StepContact({ data, update, onNext, onBack }) {
  const [showCountries, setShowCountries] = useState(false);
  const [touched, setTouched] = useState({});
  const country = COUNTRIES.find(c => c.code === data.country) || COUNTRIES[0];
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!showCountries) return;
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setShowCountries(false);
    };
    setTimeout(() => document.addEventListener('click', handler), 0);
    return () => document.removeEventListener('click', handler);
  }, [showCountries]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const phoneValid = data.phone.replace(/\D/g, '').length >= 8;
  const valid = data.firstName.trim() && data.lastName.trim() && emailValid && phoneValid;

  return (
    <div className="step-body">
      <div className="step-eyebrow">Capítulo 1</div>
      <h2 className="step-title">Contame <em>quién sos</em></h2>
      <p className="step-subtitle">Para poder escribirte de vuelta con tu propuesta personalizada.</p>

      <div className="field">
        <label className="field-label">Nombre <span className="field-required">*</span></label>
        <input
          className={`input ${touched.firstName && !data.firstName ? 'error' : data.firstName ? 'valid' : ''}`}
          placeholder="¿Cómo te llamás?"
          value={data.firstName}
          onChange={(e) => update({ firstName: e.target.value })}
          onBlur={() => setTouched({ ...touched, firstName: true })}
        />
      </div>

      <div className="field">
        <label className="field-label">Apellido <span className="field-required">*</span></label>
        <input
          className={`input ${touched.lastName && !data.lastName ? 'error' : data.lastName ? 'valid' : ''}`}
          placeholder="Tu apellido"
          value={data.lastName}
          onChange={(e) => update({ lastName: e.target.value })}
          onBlur={() => setTouched({ ...touched, lastName: true })}
        />
      </div>

      <div className="field">
        <label className="field-label">Email <span className="field-required">*</span></label>
        <input
          type="email"
          className={`input ${touched.email && !emailValid ? 'error' : emailValid ? 'valid' : ''}`}
          placeholder="vos@ejemplo.com"
          value={data.email}
          onChange={(e) => update({ email: e.target.value })}
          onBlur={() => setTouched({ ...touched, email: true })}
        />
        {touched.email && !emailValid && data.email && (
          <div className="field-error"><IconInfo size={14} /> Mmm, ese email no parece completo</div>
        )}
      </div>

      <div className="field">
        <label className="field-label">Teléfono móvil <span className="field-required">*</span></label>
        <div className="input-with-prefix">
          <div className="country-select" ref={dropdownRef} onClick={(e) => { e.stopPropagation(); setShowCountries(!showCountries); }}>
            <div className="country-flag" style={{ background: country.flag }} />
            <span style={{ fontSize: 13 }}>{country.dial}</span>
            <IconChevron size={12} style={{ marginLeft: 'auto', transform: 'rotate(90deg)' }} />
            {showCountries && (
              <div className="country-dropdown" onClick={(e) => e.stopPropagation()}>
                {COUNTRIES.map(c => (
                  <div key={c.code} className="country-option" onClick={() => { update({ country: c.code }); setShowCountries(false); }}>
                    <div className="country-flag" style={{ background: c.flag }} />
                    <span className="name">{c.name}</span>
                    <span className="code">{c.dial}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            type="tel"
            className={`input ${touched.phone && !phoneValid ? 'error' : phoneValid ? 'valid' : ''}`}
            style={{ flex: 1 }}
            placeholder="11 5555 5555"
            value={data.phone}
            onChange={(e) => update({ phone: e.target.value })}
            onBlur={() => setTouched({ ...touched, phone: true })}
          />
        </div>
        <div className="field-hint">
          <IconWhatsApp size={14} /> Te voy a contactar por acá o por email
        </div>
      </div>

      <div className="bottom-cta">
        <button className="btn btn-ghost" style={{ width: 56, height: 56, padding: 0, flexShrink: 0 }} onClick={onBack}>
          <IconArrowLeft size={18} />
        </button>
        <button
          className={`btn btn-primary ${!valid ? 'btn-disabled' : ''}`}
          onClick={() => valid && onNext()}
          disabled={!valid}
          style={{ flex: 1 }}
        >
          Siguiente <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ─────────────── Step 3: Logistics ───────────────
function StepLogistics({ data, update, onNext, onBack }) {
  const setDays = (d) => update({ days: Math.max(1, Math.min(30, d)) });

  const adultCount = data.adults;
  const childCount = data.children.length;

  const updateChildAge = (idx, age) => {
    const children = [...data.children];
    children[idx] = { ...children[idx], age };
    update({ children });
  };

  const addChild = () => update({ children: [...data.children, { id: Date.now(), age: '' }] });
  const removeChild = () => update({ children: data.children.slice(0, -1) });

  const dateOptions = [
    { id: 'definidas', label: 'Ya tengo fechas definidas', icon: <IconCalendar size={20} /> },
    { id: 'aproximadas', label: 'Tengo fechas aproximadas (soy flexible)', icon: <IconCalendarSoft size={20} /> },
    { id: 'indefinidas', label: 'Aún no lo tengo definido', icon: <IconCloud size={20} /> },
  ];

  return (
    <div className="step-body">
      <div className="step-eyebrow">Capítulo 2</div>
      <h2 className="step-title">El <em>cuándo</em> y el <em>cuántos</em></h2>

      <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0, marginBottom: 4 }}>
        ¿Cuántos días te gustaría que dure tu viaje? <span className="field-required">*</span>
      </label>
      <p style={{ fontSize: 13, color: 'var(--marron-soft)', marginTop: 0, marginBottom: 14, lineHeight: 1.5 }}>
        Incluí días de parques, descanso, compras o cualquier otra actividad que quieras sumar.
      </p>
      <div className="style-slider-wrap" style={{ padding: '12px 16px 18px' }}>
        <div className="days-display">
          <div className="days-num"><em>{data.days}</em></div>
          <div className="days-label">{data.days === 1 ? 'día' : 'días'}</div>
        </div>
        <div className="days-controls">
          <button className="days-btn" onClick={() => setDays(data.days - 1)}><IconMinus size={16} /></button>
          <button className="days-btn" onClick={() => setDays(data.days + 1)}><IconPlus size={16} /></button>
        </div>
        <div className="days-presets">
          {[5, 7, 10, 14, 21].map(n => (
            <button key={n} className={`days-preset ${data.days === n ? 'active' : ''}`} onClick={() => setDays(n)}>
              {n} días
            </button>
          ))}
        </div>
      </div>

      <label className="field-label" style={{ marginTop: 8, textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
        ¿Cuándo te gustaría viajar? <span className="field-required">*</span>
      </label>
      {dateOptions.map(opt => (
        <button
          key={opt.id}
          className={`choice-card ${data.dateType === opt.id ? 'selected' : ''}`}
          onClick={() => update({ dateType: opt.id })}
        >
          <div className="choice-icon">{opt.icon}</div>
          <div className="choice-text">
            <div className="choice-title">{opt.label}</div>
          </div>
          <div className="choice-check">
            {data.dateType === opt.id && <IconCheck size={14} />}
          </div>
        </button>
      ))}

      {data.dateType === 'definidas' && (
        <div style={{ marginTop: 14 }}>
          <label className="field-label" style={{ textTransform: 'none', fontSize: 13, letterSpacing: 0 }}>
            Seleccioná tus fechas
          </label>
          <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
            <div className="field" style={{ flex: 1, marginBottom: 0 }}>
              <label className="field-label">Desde</label>
              <input
                type="date"
                className="input"
                value={data.dateFrom || ''}
                onChange={(e) => update({ dateFrom: e.target.value })}
              />
            </div>
            <div className="field" style={{ flex: 1, marginBottom: 0 }}>
              <label className="field-label">Hasta</label>
              <input
                type="date"
                className="input"
                value={data.dateTo || ''}
                onChange={(e) => update({ dateTo: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {data.dateType === 'aproximadas' && (
        <div className="field" style={{ marginTop: 14 }}>
          <label className="field-label" style={{ textTransform: 'none', fontSize: 13, letterSpacing: 0 }}>
            Si querés, podés detallar fechas o mes estimado:
          </label>
          <input
            className="input"
            placeholder="Ej: 10 al 20 de octubre / Enero 2027 / flexible"
            value={data.dates}
            onChange={(e) => update({ dates: e.target.value })}
          />
        </div>
      )}

      {data.dateType === 'indefinidas' && (
        <div className="field" style={{ marginTop: 14 }}>
          <label className="field-label" style={{ textTransform: 'none', fontSize: 13, letterSpacing: 0 }}>
            Si querés, podés agregar más detalles
          </label>
          <input
            className="input"
            placeholder="Ej: preferimos verano / evitar temporada alta"
            value={data.dates}
            onChange={(e) => update({ dates: e.target.value })}
          />
        </div>
      )}

      <div className="section-divider"><span>Viajeros</span></div>

      <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0, marginBottom: 4 }}>
        ¿Cuántas personas viajan? <span className="field-required">*</span>
      </label>
      <p style={{ fontSize: 13, color: 'var(--marron-mute)', marginBottom: 14, lineHeight: 1.5 }}>
        (Detallá cantidad de adultos y, en caso de viajar con menores, indicá sus edades al momento del viaje)
      </p>

      <div className="counter-row">
        <div className="counter-label-block">
          <div className="counter-name">Adultos</div>
          <div className="counter-detail">18+ años</div>
        </div>
        <div className="counter-controls">
          <button className="counter-btn" disabled={adultCount <= 1} onClick={() => update({ adults: adultCount - 1 })}>
            <IconMinus size={14} />
          </button>
          <div className="counter-value">{adultCount}</div>
          <button className="counter-btn" disabled={adultCount >= 10} onClick={() => update({ adults: adultCount + 1 })}>
            <IconPlus size={14} />
          </button>
        </div>
      </div>

      <div className="counter-row">
        <div className="counter-label-block">
          <div className="counter-name">Niños</div>
          <div className="counter-detail">Hasta 17 años</div>
        </div>
        <div className="counter-controls">
          <button className="counter-btn" disabled={childCount <= 0} onClick={removeChild}>
            <IconMinus size={14} />
          </button>
          <div className="counter-value">{childCount}</div>
          <button className="counter-btn" disabled={childCount >= 8} onClick={addChild}>
            <IconPlus size={14} />
          </button>
        </div>
      </div>

      {data.children.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <label className="field-label" style={{ marginBottom: 10 }}>Edad de cada niño</label>
          {data.children.map((child, idx) => (
            <div className="child-age-row" key={child.id}>
              <IconChild size={16} stroke="var(--borgona)" />
              <span className="child-name">Niño {idx + 1}</span>
              <input
                className="age-input"
                type="number"
                placeholder="años"
                min="0" max="17"
                value={child.age}
                onChange={(e) => updateChildAge(idx, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="bottom-cta">
        <button className="btn btn-ghost" style={{ width: 56, height: 56, padding: 0, flexShrink: 0 }} onClick={onBack}>
          <IconArrowLeft size={18} />
        </button>
        <button
          className={`btn btn-primary ${!data.dateType ? 'btn-disabled' : ''}`}
          onClick={() => data.dateType && onNext()}
          style={{ flex: 1 }}
        >
          Siguiente <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { StepHero, StepContact, StepLogistics, COUNTRIES });
