// Steps 4, 5, 6 + Success screen

const { useState: useState4, useEffect: useEffect4 } = React;

// ─────────────── Step 4: Preferences ───────────────
function StepPrefs({ data, update, onNext, onBack }) {
  const parks = [
    { id: 'orlando-magic', name: '🏰 Disney', sub: 'Magic Kingdom, Animal Kingdom, Epcot y Hollywood Studios.', art: <ParkArtCastle /> },
    { id: 'orlando-thrills', name: '🌎 UNIVERSAL', sub: 'Islas de la Aventura, Universal Studios y Epic.', art: <ParkArtCoaster /> },
    { id: 'paris', name: '🇫🇷 Disneyland Paris', sub: '', art: <ParkArtEiffel /> },
    { id: 'water', name: '💦 Parques de Agua', sub: '', art: <ParkArtWater /> },
  ];

  const toggleParkmt = (id) => {
    const next = data.parks.includes(id)
      ? data.parks.filter(p => p !== id)
      : [...data.parks, id];
    update({ parks: next });
  };

  const cotizarOptions = [
    { id: 'tickets-hotel', icon: <><IconCastle size={20} /><IconHotel size={20} /></>, title: '🏰🎟️ Tickets + Hotel', sub: '' },
    { id: 'tickets', icon: <IconTicket size={22} />, title: '🎟️ Solo tickets', sub: '' },
    { id: 'hotel', icon: <IconHotel size={22} />, title: '🏨 Solo hotel', sub: '' },
  ];

  const valid = data.parks.length > 0 && data.cotizar;

  return (
    <div className="step-body">
      <div className="step-eyebrow">Capítulo 3</div>
      <h2 className="step-title">Tu viaje <em>ideal</em></h2>

      <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
        ¿Qué parques te gustaría visitar? <span className="field-required">*</span>
      </label>
      <p style={{ fontSize: 13, color: 'var(--marron-mute)', marginTop: -4, marginBottom: 14, lineHeight: 1.5 }}>
        (Podés seleccionar más de una opción)
      </p>

      <div className="park-grid">
        {parks.map(p => (
          <button
            key={p.id}
            className={`park-card ${data.parks.includes(p.id) ? 'selected' : ''}`}
            onClick={() => toggleParkmt(p.id)}
          >
            <div className="park-image">{p.art}</div>
            <div className="park-check">
              {data.parks.includes(p.id) && <IconCheck size={14} />}
            </div>
            <div className="park-meta">
              <div className="park-name">{p.name}</div>
              {p.sub && <div className="park-sub">{p.sub}</div>}
            </div>
          </button>
        ))}
      </div>

      <div className="field">
        <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
          Si ya tenés definidos parques específicos, podés detallarlos acá: <span className="field-required">*</span>
        </label>
        <input
          className="input"
          placeholder="Opcional · contame lo que no te puede faltar"
          value={data.specificParks}
          onChange={(e) => update({ specificParks: e.target.value })}
        />
      </div>

      <div className="section-divider"><span>¿Qué te gustaría cotizar? *</span></div>

      {cotizarOptions.map(opt => (
        <button
          key={opt.id}
          className={`choice-card ${data.cotizar === opt.id ? 'selected' : ''}`}
          onClick={() => update({ cotizar: opt.id })}
        >
          <div className="choice-icon" style={{ display: 'flex', gap: 4 }}>{opt.icon}</div>
          <div className="choice-text">
            <div className="choice-title">{opt.title}</div>
          </div>
          <div className="choice-check">
            {data.cotizar === opt.id && <IconCheck size={14} />}
          </div>
        </button>
      ))}

      <div className="bottom-cta">
        <button className="btn btn-ghost" style={{ width: 56, height: 56, padding: 0, flexShrink: 0 }} onClick={onBack}>
          <IconArrowLeft size={18} />
        </button>
        <button
          className={`btn btn-primary ${!valid ? 'btn-disabled' : ''}`}
          onClick={() => valid && onNext()}
          style={{ flex: 1 }}
        >
          Siguiente <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ─────────────── Room Counter Component ───────────────
function RoomCounter({ label, value, onChange, min = 0, max = 10 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 0',
    }}>
      <span style={{ fontSize: 14, color: 'var(--marron)', fontWeight: 500 }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={{
            width: 32, height: 32, borderRadius: '50%',
            border: '1.5px solid var(--borde-hover, #D4C4B8)', background: 'transparent',
            cursor: 'pointer', fontSize: 16, color: 'var(--borgona)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: value <= min ? 0.3 : 1, fontFamily: 'inherit',
          }}>−</button>
        <span style={{
          fontSize: 18, fontWeight: 600, color: 'var(--marron)',
          minWidth: 24, textAlign: 'center', fontFamily: 'var(--serif)',
        }}>{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={{
            width: 32, height: 32, borderRadius: '50%',
            border: '1.5px solid var(--dorado)',
            background: 'rgba(201,169,97,0.06)',
            cursor: 'pointer', fontSize: 16, color: 'var(--borgona)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: value >= max ? 0.3 : 1, fontFamily: 'inherit',
          }}>+</button>
      </div>
    </div>
  );
}

// ─────────────── Step 5: Lodging (conditional) ───────────────
function StepLodging({ data, update, onNext, onBack }) {
  const includesHotel = data.cotizar === 'tickets-hotel' || data.cotizar === 'hotel';

  // If no hotel — skip straight to comments, no info card
  if (!includesHotel) {
    return (
      <div className="step-body">
        <div className="step-eyebrow">Capítulo 4</div>
        <h2 className="step-title">Casi <em>listo</em></h2>
        <p className="step-subtitle">Antes de terminar, ¿querés contarme algo más sobre tu viaje?</p>

        <div className="field" style={{ marginTop: 8 }}>
          <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
            Si querés, podés usar este espacio para sumar comentarios, dudas o algún pedido especial para tu viaje. 🌟
          </label>
          <textarea
            className="textarea"
            placeholder="Aniversario, primera vez, fechas especiales, accesibilidad..."
            value={data.notes}
            onChange={(e) => update({ notes: e.target.value })}
          />
        </div>

        <div className="bottom-cta">
          <button className="btn btn-ghost" style={{ width: 56, height: 56, padding: 0, flexShrink: 0 }} onClick={onBack}>
            <IconArrowLeft size={18} />
          </button>
          <button className="btn btn-primary" onClick={onNext} style={{ flex: 1 }}>
            Siguiente <IconArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // ─── Lodging form ───
  const ubicaciones = [
    { id: 'dentro', icon: <IconCastle size={20} />, title: 'Dentro de los parques (hoteles Disney / Universal)', sub: '' },
    { id: 'fuera', icon: <IconHotel size={20} />, title: 'Fuera de los parques', sub: '' },
    { id: 'mixto', icon: <IconScale size={20} />, title: 'Me gustaría evaluar ambas opciones', sub: '' },
  ];

  const styles = [
    { id: 'economico', label: 'Económico', icon: <IconLeaf size={16} />, desc: 'Funcional y bien aprovechado' },
    { id: 'intermedio', label: 'Intermedio', icon: <IconStar size={16} />, desc: 'El equilibrio justo entre precio y experiencia' },
    { id: 'exclusivo', label: 'Exclusivo', icon: <IconDiamond size={16} />, desc: 'La experiencia más completa, sin atajos' },
  ];

  // ── Rooms — simple counter-based system ──
  const ensureRooms = () => {
    if (!data.rooms || data.rooms.length === 0 || !data.rooms[0].adults) {
      const defaultRooms = [{ id: 'r1', adults: data.adults || 2, children: data.children?.length || 0 }];
      update({ rooms: defaultRooms });
      return defaultRooms;
    }
    return data.rooms;
  };

  const rooms = ensureRooms();

  const updateRoom = (roomId, field, value) => {
    const newRooms = rooms.map(r =>
      r.id === roomId ? { ...r, [field]: value } : r
    );
    update({ rooms: newRooms });
  };

  const addRoom = () => {
    const newId = `r${Date.now()}`;
    update({ rooms: [...rooms, { id: newId, adults: 1, children: 0 }] });
  };

  const removeRoom = (roomId) => {
    const filtered = rooms.filter(r => r.id !== roomId);
    update({ rooms: filtered.length ? filtered : [{ id: 'r1', adults: 2, children: 0 }] });
  };

  return (
    <div className="step-body">
      <div className="step-eyebrow">Capítulo 4</div>
      <h2 className="step-title">🏨 Sobre el <em>alojamiento</em></h2>

      <div className="info-card">
        <div className="info-icon"><IconInfo size={16} /></div>
        <div className="info-text">
          👉 Para poder armar tu cotización de forma correcta, por favor detallá la cantidad total de pasajeros y cómo se alojarían en cada habitación.
        </div>
      </div>

      <div className="info-card" style={{ marginTop: 10 }}>
        <div className="info-icon"><IconInfo size={16} /></div>
        <div className="info-text">
          💡 Importante: el titular de la reserva debe ser mayor de 18 años para hoteles Disney y mayor de 21 años para hoteles Universal.
        </div>
      </div>

      <label className="field-label" style={{ marginTop: 18, textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
        ¿Te gustaría alojarte dentro o fuera de los parques?
      </label>
      <p style={{ fontSize: 13, color: 'var(--marron-mute)', marginTop: -4, marginBottom: 14, lineHeight: 1.5 }}>
        (Los hoteles dentro de los parques incluyen beneficios exclusivos como transporte y horas extra en parques.)
      </p>
      {ubicaciones.map(opt => (
        <button
          key={opt.id}
          className={`choice-card ${data.ubicacion === opt.id ? 'selected' : ''}`}
          onClick={() => update({ ubicacion: opt.id })}
        >
          <div className="choice-icon">{opt.icon}</div>
          <div className="choice-text">
            <div className="choice-title">{opt.title}</div>
          </div>
          <div className="choice-check">
            {data.ubicacion === opt.id && <IconCheck size={14} />}
          </div>
        </button>
      ))}

      <div className="section-divider"><span>Distribución de habitaciones</span></div>

      {rooms.map((room, idx) => (
        <div key={room.id} style={{
          background: '#fff', border: '1.5px solid var(--crema-deep, #F2EBE0)',
          borderRadius: 'var(--r-md, 14px)', padding: '14px 16px',
          marginBottom: 12, boxShadow: 'var(--shadow-soft)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 8, paddingBottom: 8,
            borderBottom: '1px solid rgba(122,46,58,0.06)',
          }}>
            <span style={{
              fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 600,
              color: 'var(--borgona)', fontStyle: 'italic',
            }}>
              Habitación {idx + 1}
            </span>
            {rooms.length > 1 && (
              <button onClick={() => removeRoom(room.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 12, color: 'var(--marron-mute)', fontFamily: 'inherit',
                padding: '4px 8px', borderRadius: 8,
              }}>
                Quitar
              </button>
            )}
          </div>
          <RoomCounter
            label="Adultos"
            value={room.adults}
            onChange={(v) => updateRoom(room.id, 'adults', v)}
            min={1} max={6}
          />
          <RoomCounter
            label="Niños"
            value={room.children}
            onChange={(v) => updateRoom(room.id, 'children', v)}
            min={0} max={6}
          />
        </div>
      ))}

      <button onClick={addRoom} style={{
        width: '100%', padding: '12px', borderRadius: 'var(--r-md, 14px)',
        border: '1.5px dashed var(--dorado)', background: 'rgba(201,169,97,0.04)',
        cursor: 'pointer', fontSize: 13, color: 'var(--borgona)',
        fontFamily: 'inherit', fontWeight: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        marginBottom: 20,
      }}>
        <IconPlus size={14} /> Agregar otra habitación
      </button>

      <div className="section-divider"><span>Estilo de viaje</span></div>

      <div className="style-slider-wrap">
        <div className="style-track" />
        <div className="style-stops">
          {styles.map(s => (
            <div
              key={s.id}
              className={`style-stop ${data.style === s.id ? 'active' : ''}`}
              onClick={() => update({ style: s.id })}
            />
          ))}
        </div>
        <div className="style-labels">
          {styles.map(s => (
            <span key={s.id} className={data.style === s.id ? 'active' : ''}>{s.label}</span>
          ))}
        </div>
        <div className="style-desc">
          {styles.find(s => s.id === data.style)?.desc || 'Elegí tu vibe'}
        </div>
      </div>

      <div className="field" style={{ marginTop: 18 }}>
        <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
          ¿Querés contarnos algo más sobre tu viaje? ✨
        </label>
        <p style={{ fontSize: 13, color: 'var(--marron-mute)', marginTop: -4, marginBottom: 10, lineHeight: 1.5 }}>
          Opcional — aniversario, primera vez, cumpleaños, algún pedido especial...
        </p>
        <textarea
          className="textarea"
          placeholder="Ej: es nuestro primer viaje juntos, queremos que sea inolvidable"
          value={data.imagina}
          onChange={(e) => update({ imagina: e.target.value })}
        />
      </div>

      <div className="field">
        <label className="field-label" style={{ textTransform: 'none', fontSize: 14, letterSpacing: 0 }}>
          Si querés, podés usar este espacio para sumar comentarios, dudas o algún pedido especial para tu viaje. 🌟
        </label>
        <textarea
          className="textarea"
          style={{ minHeight: 80 }}
          placeholder="Opcional · alergias, accesibilidad, sorpresas..."
          value={data.notes}
          onChange={(e) => update({ notes: e.target.value })}
        />
      </div>

      <div className="bottom-cta">
        <button className="btn btn-ghost" style={{ width: 56, height: 56, padding: 0, flexShrink: 0 }} onClick={onBack}>
          <IconArrowLeft size={18} />
        </button>
        <button
          className={`btn btn-primary ${!data.ubicacion ? 'btn-disabled' : ''}`}
          onClick={() => data.ubicacion && onNext()}
          style={{ flex: 1 }}
        >
          Siguiente <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ─────────────── Step 6: Summary ───────────────
function StepSummary({ data, onSubmit, onBack, onJump }) {
  const country = COUNTRIES.find(c => c.code === data.country) || COUNTRIES[0];

  const parkLabels = {
    'orlando-magic': '🏰 Disney',
    'orlando-thrills': '🌎 UNIVERSAL',
    'paris': '🇫🇷 Disneyland Paris',
    'water': '💦 Parques de Agua',
  };

  const dateLabels = {
    'definidas': 'Fechas definidas',
    'aproximadas': 'Fechas aproximadas',
    'indefinidas': 'Sin definir todavía',
  };

  const cotizarLabels = {
    'tickets-hotel': '🏰🎟️ Tickets + Hotel',
    'tickets': '🎟️ Solo tickets',
    'hotel': '🏨 Solo hotel',
  };

  const ubicLabels = {
    'dentro': 'Dentro de los parques',
    'fuera': 'Fuera de los parques',
    'mixto': 'Evaluar ambas opciones',
  };

  const styleLabels = {
    'economico': 'Económico',
    'intermedio': 'Intermedio',
    'exclusivo': 'Exclusivo',
  };

  const includesHotel = data.cotizar === 'tickets-hotel' || data.cotizar === 'hotel';

  // Build rooms summary
  const roomsSummary = data.rooms && data.rooms.length > 0
    ? data.rooms.map((r, i) => {
        const parts = [];
        const adults = r.adults || r.occupants?.filter(id => id.startsWith('a')).length || 0;
        const kids = r.children || r.occupants?.filter(id => id.startsWith('c')).length || 0;
        if (adults) parts.push(`${adults} adulto${adults > 1 ? 's' : ''}`);
        if (kids) parts.push(`${kids} niño${kids > 1 ? 's' : ''}`);
        return `Hab ${i+1}: ${parts.join(', ') || 'vacía'}`;
      }).join(' · ')
    : `${data.rooms?.length || 1} habitación(es)`;

  return (
    <div className="step-body">
      <div className="step-eyebrow">Casi listo</div>
      <h2 className="step-title">Revisemos <em>juntas</em></h2>
      <p className="step-subtitle">Si algo no está bien, podés volver y editarlo.</p>

      <div className="summary-card">
        <div className="summary-card-head">
          <div className="summary-card-title">Vos</div>
          <button className="summary-edit" onClick={() => onJump(1)}>editar</button>
        </div>
        <div className="summary-row"><span className="k">Nombre</span><span className="v">{data.firstName} {data.lastName}</span></div>
        <div className="summary-row"><span className="k">Email</span><span className="v">{data.email}</span></div>
        <div className="summary-row"><span className="k">Teléfono</span><span className="v">{country.dial} {data.phone}</span></div>
      </div>

      <div className="summary-card">
        <div className="summary-card-head">
          <div className="summary-card-title">El viaje</div>
          <button className="summary-edit" onClick={() => onJump(2)}>editar</button>
        </div>
        <div className="summary-row"><span className="k">Duración</span><span className="v">{data.days} días</span></div>
        <div className="summary-row"><span className="k">Fechas</span><span className="v">{dateLabels[data.dateType]}{data.dateFrom ? ` · ${data.dateFrom} al ${data.dateTo}` : data.dates ? ` · ${data.dates}` : ''}</span></div>
        <div className="summary-row">
          <span className="k">Viajeros</span>
          <span className="v">
            {data.adults} adulto{data.adults !== 1 ? 's' : ''}
            {data.children.length > 0 && ` · ${data.children.length} niño${data.children.length !== 1 ? 's' : ''}`}
            {data.children.some(c => c.age) && ` (${data.children.filter(c => c.age).map(c => c.age + 'a').join(', ')})`}
          </span>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-card-head">
          <div className="summary-card-title">Preferencias</div>
          <button className="summary-edit" onClick={() => onJump(3)}>editar</button>
        </div>
        <div className="summary-row">
          <span className="k">Parques</span>
          <span className="v">{data.parks.map(p => parkLabels[p]).join(', ') || '—'}</span>
        </div>
        <div className="summary-row"><span className="k">Cotizar</span><span className="v">{cotizarLabels[data.cotizar] || '—'}</span></div>
        {data.specificParks && (
          <div className="summary-row"><span className="k">Específico</span><span className="v">{data.specificParks}</span></div>
        )}
      </div>

      {includesHotel && (
        <div className="summary-card">
          <div className="summary-card-head">
            <div className="summary-card-title">Alojamiento</div>
            <button className="summary-edit" onClick={() => onJump(4)}>editar</button>
          </div>
          <div className="summary-row"><span className="k">Ubicación</span><span className="v">{ubicLabels[data.ubicacion] || '—'}</span></div>
          <div className="summary-row"><span className="k">Habitaciones</span><span className="v">{roomsSummary}</span></div>
          <div className="summary-row"><span className="k">Estilo</span><span className="v">{styleLabels[data.style] || '—'}</span></div>
        </div>
      )}

      {(data.imagina || data.notes) && (
        <div className="summary-card">
          <div className="summary-card-head">
            <div className="summary-card-title">Tus palabras</div>
            <button className="summary-edit" onClick={() => onJump(4)}>editar</button>
          </div>
          {data.imagina && (
            <div style={{ fontSize: 16, color: 'var(--marron-soft)', fontStyle: 'italic', fontFamily: 'var(--serif)', lineHeight: 1.4, paddingTop: 4 }}>
              "{data.imagina}"
            </div>
          )}
          {data.notes && (
            <div style={{ fontSize: 12.5, color: 'var(--marron-mute)', marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(122, 46, 58, 0.08)' }}>
              <strong style={{ color: 'var(--borgona)', fontWeight: 600 }}>Notas:</strong> {data.notes}
            </div>
          )}
        </div>
      )}

      <div style={{
        textAlign: 'center', padding: '14px 8px 4px',
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: 18, color: 'var(--borgona)', lineHeight: 1.4,
      }}>
        Gracias por tomarte el tiempo de completar el formulario! <IconSparkle size={14} />
      </div>

      <div className="bottom-cta">
        <button className="btn btn-ghost" style={{ width: 56, height: 56, padding: 0, flexShrink: 0 }} onClick={onBack}>
          <IconArrowLeft size={18} />
        </button>
        <button className="btn btn-primary" onClick={onSubmit} style={{ flex: 1 }}>
          Enviar mi solicitud <IconHeart size={16} />
        </button>
      </div>
    </div>
  );
}

// ─────────────── Success Screen ───────────────
function SuccessScreen({ data, onReset }) {
  const confetti = React.useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      dx: (Math.random() - 0.5) * 200,
      delay: Math.random() * 0.8,
      duration: 2 + Math.random() * 1.5,
      color: ['#D4A5A5', '#C9A961', '#7A2E3A', '#E8C9C9', '#DBC089'][Math.floor(Math.random() * 5)],
      size: 6 + Math.random() * 8,
      shape: Math.random() > 0.5 ? '50%' : '2px',
    })), []);

  return (
    <div className="success-screen">
      <div className="confetti">
        {confetti.map(c => (
          <div
            key={c.id}
            className="confetti-piece"
            style={{
              left: `${c.left}%`,
              background: c.color,
              width: c.size,
              height: c.size,
              borderRadius: c.shape,
              '--dx': `${c.dx}px`,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="success-emblem">
        <IconCheck size={42} stroke="white" />
      </div>

      <h2 className="success-title">¡Solicitud<br/>enviada!</h2>

      <p className="success-msg">
        Gracias por tomarte el tiempo de completar el formulario!
        <br /><br />
        En breve me voy a contactar con vos para empezar a diseñar tu viaje ✨🫶 💕
      </p>

      <button
        className="btn btn-ghost"
        style={{ marginTop: 32, width: 'auto', padding: '0 24px', height: 44, fontSize: 13 }}
        onClick={onReset}
      >
        Hacer otra cotización
      </button>
    </div>
  );
}

Object.assign(window, { StepPrefs, StepLodging, StepSummary, SuccessScreen });
