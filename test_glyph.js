function objectGlyph(kind, cx, cy, CS){
  const op = E.objWalkable(kind) ? 0.72 : 0.95;
  const s = CS;
  if(kind==="table"){
    const w=s*0.60, topH=s*0.11, legH=s*0.28, topY=cy-s*0.17, col="#8a6a3e";
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${cx-w/2}" y="${topY}" width="${w}" height="${topH}" rx="2" fill="${col}"/>`+
      `<rect x="${cx-w/2+w*0.10}" y="${topY+topH}" width="${w*0.11}" height="${legH}" fill="${col}"/>`+
      `<rect x="${cx+w/2-w*0.21}" y="${topY+topH}" width="${w*0.11}" height="${legH}" fill="${col}"/>`+
      `</g>`;
  }
  if(kind==="rug"||kind==="carpet"){                 // tappeto (vista dall'alto, con frange)
    const w=s*0.64, h=s*0.46, x=cx-w/2, y=cy-h/2, base="#c25b3a", line="#f4efe4";
    let fr="";
    for(let i=0;i<4;i++){ const fy=y+h*(0.16+0.68*i/3);
      fr+=`<line x1="${x-3.5}" y1="${fy}" x2="${x}" y2="${fy}"/><line x1="${x+w}" y1="${fy}" x2="${x+w+3.5}" y2="${fy}"/>`; }
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${base}"/>`+
      `<rect x="${x+3}" y="${y+3}" width="${w-6}" height="${h-6}" rx="2" fill="none" stroke="${line}" stroke-width="1.5"/>`+
      `<line x1="${cx}" y1="${y+4.5}" x2="${cx}" y2="${y+h-4.5}" stroke="${line}" stroke-width="1" opacity="0.6"/>`+
      `<g stroke="${base}" stroke-width="1.4">${fr}</g></g>`;
  }
  if(kind==="scoglio"){                              // scoglio: roccia scura frastagliata sull'acqua
    const w=s*0.66, base=cy+s*0.20, col="#57606a";
    const p=[[cx-w/2,base],[cx-w*0.30,cy-s*0.06],[cx-w*0.12,cy+s*0.04],[cx-w*0.02,cy-s*0.20],
      [cx+w*0.12,cy-s*0.02],[cx+w*0.26,cy-s*0.16],[cx+w*0.38,cy],[cx+w/2,base]]
      .map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ");
    return `<g opacity="${op}" pointer-events="none">`+
      `<polygon points="${p}" fill="${col}" stroke="#3d444d" stroke-width="1"/>`+
      `<path d="M ${cx-w/2-2} ${base+3} q ${w*0.16} -4 ${w*0.32} 0 q ${w*0.16} 4 ${w*0.32} 0 q ${w*0.16} -4 ${w*0.32} 0" fill="none" stroke="#3b82f6" stroke-width="1.4" opacity="0.7"/></g>`;
  }
  if(kind==="boa"){                                  // boa: anello di salvataggio rosso/bianco
    const R=s*0.30, r2=s*0.145, bw=R*0.55, seg="#f4efe4";
    return `<g opacity="${op}" pointer-events="none">`+
      `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#e4483d"/>`+
      `<rect x="${cx-bw/2}" y="${cy-R}" width="${bw}" height="${R-r2}" fill="${seg}"/>`+
      `<rect x="${cx-bw/2}" y="${cy+r2}" width="${bw}" height="${R-r2}" fill="${seg}"/>`+
      `<rect x="${cx-R}" y="${cy-bw/2}" width="${R-r2}" height="${bw}" fill="${seg}"/>`+
      `<rect x="${cx+r2}" y="${cy-bw/2}" width="${R-r2}" height="${bw}" fill="${seg}"/>`+
      `<circle cx="${cx}" cy="${cy}" r="${r2}" fill="#f4efe4"/>`+
      `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#a5271f" stroke-width="1"/>`+
      `<circle cx="${cx}" cy="${cy}" r="${r2}" fill="none" stroke="#a5271f" stroke-width="1"/></g>`;
  }
  if(kind==="mattress"){                             // materassino da mare (gonfiabile, camere orizzontali)
    const w=s*0.62, h=s*0.40, x=cx-w/2, y=cy-h/2, col="#1fb6c9";
    let ln="";
    for(let i=1;i<4;i++){ const ly=y+h*i/4; ln+=`<line x1="${x+4}" y1="${ly}" x2="${x+w-4}" y2="${ly}"/>`; }
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h*0.48}" fill="${col}"/>`+
      `<g stroke="#e6fbff" stroke-width="1.5" stroke-linecap="round">${ln}</g></g>`;
  }
  if(kind==="towel"){                                // telo da mare (strisce verticali colorate)
    const w=s*0.50, h=s*0.60, x=cx-w/2, y=cy-h/2, cols=["#f4a71d","#e4483d","#f4efe4","#2bb3c0"], ns=4, sw=w/ns;
    let st="";
    for(let i=0;i<ns;i++) st+=`<rect x="${x+i*sw}" y="${y}" width="${sw+0.5}" height="${h}" fill="${cols[i%cols.length]}"/>`;
    return `<g opacity="${op}" pointer-events="none">${st}`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="none" stroke="#b9ad92" stroke-width="1"/></g>`;
  }
  if(kind==="umbrella"){                             // ombrellone da spiaggia (vista laterale)
    const R=s*0.38, h=s*0.60;
    return `<g opacity="${op}" pointer-events="none">`+
      `<ellipse cx="${cx+2}" cy="${cy+h/2}" rx="${R*0.8}" ry="${R*0.25}" fill="#000" opacity="0.15"/>`+
      `<line x1="${cx}" y1="${cy-h*0.3}" x2="${cx}" y2="${cy+h/2}" stroke="#d4a373" stroke-width="2.5" stroke-linecap="round"/>`+
      `<path d="M ${cx-R} ${cy-h*0.1} A ${R} ${R} 0 0 1 ${cx+R} ${cy-h*0.1} Z" fill="#e05a47" stroke="#9a3412" stroke-width="1"/>`+
      `<path d="M ${cx-R*0.4} ${cy-h*0.1} A ${R*0.7} ${R} 0 0 1 ${cx+R*0.4} ${cy-h*0.1} Z" fill="#f8f4eb"/>`+
      `<circle cx="${cx}" cy="${cy-h*0.1-R}" r="2" fill="#c0392b"/>`+
      `</g>`;
  }
  if(kind==="sunbed"){                               // lettino da spiaggia (tela azzurra, telaio e cuscino)
    const w=s*0.44, h=s*0.68, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x+1.5}" y="${y+1.5}" width="${w}" height="${h}" rx="3.5" fill="#000" opacity="0.15"/>`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3.5" fill="#0ea5e9" stroke="#e0f2fe" stroke-width="1.6"/>`+
      `<rect x="${x+1.5}" y="${y+1.5}" width="${w-3}" height="${h*0.30}" rx="2.5" fill="#0284c7"/>`+
      `<rect x="${x+3}" y="${y+3}" width="${w-6}" height="${h*0.14}" rx="1.5" fill="#f8fafc" opacity="0.85"/>`+
      `<line x1="${x+3}" y1="${y+h*0.48}" x2="${x+w-3}" y2="${y+h*0.48}" stroke="#bae6fd" stroke-width="1.2"/>`+
      `<line x1="${x+3}" y1="${y+h*0.68}" x2="${x+w-3}" y2="${y+h*0.68}" stroke="#bae6fd" stroke-width="1.2"/>`+
      `<line x1="${x+3}" y1="${y+h*0.86}" x2="${x+w-3}" y2="${y+h*0.86}" stroke="#bae6fd" stroke-width="1.2"/>`+
      `<rect x="${x-1.5}" y="${y+5}" width="2" height="${h-10}" rx="1" fill="#94a3b8"/>`+
      `<rect x="${x+w-0.5}" y="${y+5}" width="2" height="${h-10}" rx="1" fill="#94a3b8"/>`+
      `</g>`;
  }
  if(kind==="surfboard"){                            // tavola da surf / SUP (sagoma affusolata con striscia)
    return `<g opacity="${op}" pointer-events="none">`+
      `<ellipse cx="${cx+1}" cy="${cy+1}" rx="${s*0.14}" ry="${s*0.35}" fill="#000" opacity="0.15"/>`+
      `<path d="M ${cx} ${cy-s*0.36} C ${cx+s*0.16} ${cy-s*0.15} ${cx+s*0.16} ${cy+s*0.20} ${cx} ${cy+s*0.36} C ${cx-s*0.16} ${cy+s*0.20} ${cx-s*0.16} ${cy-s*0.15} Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.2"/>`+
      `<line x1="${cx}" y1="${cy-s*0.32}" x2="${cx}" y2="${cy+s*0.32}" stroke="#ef4444" stroke-width="1.8"/>`+
      `<circle cx="${cx}" cy="${cy-s*0.08}" r="${s*0.05}" fill="#38bdf8"/>`+
      `</g>`;
  }
  if(kind==="walkway"){                              // passerella in legno a doghe
    const w=s*0.62, h=s*0.48, x=cx-w/2, y=cy-h/2;
    let sl="";
    for(let i=1;i<4;i++){ const lx=x+w*i/4; sl+=`<line x1="${lx}" y1="${y+1}" x2="${lx}" y2="${y+h-1}"/>`; }
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#d4a373" stroke="#8c5836" stroke-width="1.2"/>`+
      `<g stroke="#8c5836" stroke-width="1">${sl}</g>`+
      `<line x1="${x+1}" y1="${y+3}" x2="${x+w-1}" y2="${y+3}" stroke="#5c3820" stroke-width="0.8" stroke-dasharray="1 3"/>`+
      `<line x1="${x+1}" y1="${y+h-3}" x2="${x+w-1}" y2="${y+h-3}" stroke="#5c3820" stroke-width="0.8" stroke-dasharray="1 3"/>`+
      `</g>`;
  }
  if(kind==="pedalo"){                               // pedalò (doppio scafo con volante)
    const w=s*0.58, h=s*0.64, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w*0.28}" height="${h}" rx="${w*0.14}" fill="#ec4899" stroke="#be185d" stroke-width="1"/>`+
      `<rect x="${x+w*0.72}" y="${y}" width="${w*0.28}" height="${h}" rx="${w*0.14}" fill="#ec4899" stroke="#be185d" stroke-width="1"/>`+
      `<rect x="${x+w*0.20}" y="${y+h*0.22}" width="${w*0.60}" height="${h*0.56}" rx="3" fill="#fdf2f8" stroke="#be185d" stroke-width="1"/>`+
      `<circle cx="${cx}" cy="${cy-h*0.02}" r="${s*0.06}" fill="none" stroke="#be185d" stroke-width="1.3"/>`+
      `<rect x="${cx-s*0.08}" y="${cy+h*0.12}" width="${s*0.16}" height="${h*0.14}" rx="1" fill="#f472b6"/>`+
      `</g>`;
  }
  if(kind==="dock"){                                 // pontile / molo in legno con bitte
    const w=s*0.52, h=s*0.68, x=cx-w/2, y=cy-h/2;
    let ln="";
    for(let i=1;i<5;i++){ const ly=y+h*i/5; ln+=`<line x1="${x+2}" y1="${ly}" x2="${x+w-2}" y2="${ly}"/>`; }
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#b08968" stroke="#6f4e37" stroke-width="1.2"/>`+
      `<g stroke="#6f4e37" stroke-width="1">${ln}</g>`+
      `<circle cx="${x+w*0.20}" cy="${y+4}" r="${s*0.04}" fill="#1e293b"/>`+
      `<circle cx="${x+w*0.80}" cy="${y+4}" r="${s*0.04}" fill="#1e293b"/>`+
      `</g>`;
  }
  if(kind==="cabin"){                                // cabina da spiaggia (righe bicolori e tetto a capanna)
    const w=s*0.56, h=s*0.64, x=cx-w/2, y=cy-h/2, topH=h*0.28;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y+topH}" width="${w}" height="${h-topH}" rx="1" fill="#2563eb"/>`+
      `<rect x="${x+w*0.25}" y="${y+topH}" width="${w*0.25}" height="${h-topH}" fill="#ffffff"/>`+
      `<rect x="${x+w*0.75}" y="${y+topH}" width="${w*0.25}" height="${h-topH}" fill="#ffffff"/>`+
      `<rect x="${x}" y="${y+topH}" width="${w}" height="${h-topH}" fill="none" stroke="#1d4ed8" stroke-width="1"/>`+
      `<polygon points="${cx},${y} ${x-2},${y+topH} ${x+w+2},${y+topH}" fill="#ef4444" stroke="#b91c1c" stroke-width="1"/>`+
      `<circle cx="${cx}" cy="${y+topH+h*0.22}" r="2" fill="#1e3a8a"/>`+
      `</g>`;
  }
  if(kind==="lifeguard"){                            // torretta del bagnino
    const w=s*0.54, h=s*0.64, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<line x1="${x+3}" y1="${y+h}" x2="${x+w*0.25}" y2="${y+h*0.35}" stroke="#78350f" stroke-width="1.8"/>`+
      `<line x1="${x+w-3}" y1="${y+h}" x2="${x+w*0.75}" y2="${y+h*0.35}" stroke="#78350f" stroke-width="1.8"/>`+
      `<line x1="${x+w*0.25}" y1="${y+h*0.35}" x2="${x+w*0.75}" y2="${y+h*0.35}" stroke="#78350f" stroke-width="1.5"/>`+
      `<rect x="${x+w*0.15}" y="${y+h*0.22}" width="${w*0.70}" height="${h*0.16}" rx="2" fill="#dc2626"/>`+
      `<polygon points="${cx},${y} ${x+w*0.08},${y+h*0.20} ${x+w*0.92},${y+h*0.20}" fill="#fbbf24" stroke="#d97706" stroke-width="0.8"/>`+
      `<circle cx="${cx}" cy="${y+h*0.62}" r="${s*0.08}" fill="none" stroke="#ef4444" stroke-width="2"/>`+
      `</g>`;
  }
  if(kind==="palm"){                                 // palma tropicale
    return `<g opacity="${op}" pointer-events="none">`+
      `<path d="M ${cx} ${cy} q -${s*0.25} -${s*0.28} -${s*0.32} -${s*0.14} q ${s*0.18} ${s*0.20} ${s*0.32} ${s*0.14}" fill="#15803d" stroke="#166534" stroke-width="0.8"/>`+
      `<path d="M ${cx} ${cy} q ${s*0.25} -${s*0.28} ${s*0.32} -${s*0.14} q -${s*0.18} ${s*0.20} -${s*0.32} ${s*0.14}" fill="#15803d" stroke="#166534" stroke-width="0.8"/>`+
      `<path d="M ${cx} ${cy} q -${s*0.30} ${s*0.10} -${s*0.34} ${s*0.25} q ${s*0.24} -${s*0.08} ${s*0.34} -${s*0.25}" fill="#16a34a" stroke="#166534" stroke-width="0.8"/>`+
      `<path d="M ${cx} ${cy} q ${s*0.30} ${s*0.10} ${s*0.34} ${s*0.25} q -${s*0.24} -${s*0.08} -${s*0.34} -${s*0.25}" fill="#16a34a" stroke="#166534" stroke-width="0.8"/>`+
      `<path d="M ${cx} ${cy} q 0 -${s*0.35} ${s*0.08} -${s*0.36} q -${s*0.04} ${s*0.24} -${s*0.08} ${s*0.36}" fill="#22c55e" stroke="#166534" stroke-width="0.8"/>`+
      `<circle cx="${cx}" cy="${cy}" r="${s*0.08}" fill="#78350f"/>`+
      `<circle cx="${cx-1.5}" cy="${cy-1.5}" r="1.8" fill="#451a03"/>`+
      `<circle cx="${cx+1.5}" cy="${cy+1.5}" r="1.8" fill="#451a03"/>`+
      `</g>`;
  }
  if(kind==="shower"){                               // doccia da spiaggia
    const w=s*0.50, h=s*0.64, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y+h*0.75}" width="${w}" height="${h*0.25}" rx="2" fill="#d4a373" stroke="#8c5836" stroke-width="1"/>`+
      `<path d="M ${cx} ${y+h*0.75} L ${cx} ${y+h*0.18} q 0 -${h*0.14} ${w*0.28} -${h*0.14} L ${cx+w*0.34} ${y+h*0.10}" fill="none" stroke="#64748b" stroke-width="2.2" stroke-linecap="round"/>`+
      `<ellipse cx="${cx+w*0.34}" cy="${y+h*0.12}" rx="${s*0.08}" ry="${s*0.04}" fill="#94a3b8"/>`+
      `<circle cx="${cx+w*0.28}" cy="${y+h*0.28}" r="1" fill="#38bdf8"/>`+
      `<circle cx="${cx+w*0.36}" cy="${y+h*0.34}" r="1" fill="#38bdf8"/>`+
      `<circle cx="${cx+w*0.32}" cy="${y+h*0.42}" r="1" fill="#38bdf8"/>`+
      `</g>`;
  }
  if(kind==="kiosk"){                                // chiringuito / bar
    const w=s*0.62, h=s*0.62, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x+2}" y="${y+h*0.38}" width="${w-4}" height="${h*0.62}" rx="2" fill="#92400e" stroke="#78350f" stroke-width="1"/>`+
      `<rect x="${x}" y="${y+h*0.34}" width="${w}" height="${h*0.10}" rx="1.5" fill="#fcd34d"/>`+
      `<polygon points="${cx},${y} ${x-2},${y+h*0.34} ${x+w+2},${y+h*0.34}" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>`+
      `<rect x="${cx-4}" y="${y+h*0.50}" width="8" height="${h*0.48}" fill="#451a03"/>`+
      `<rect x="${cx+w*0.22}" y="${y+h*0.24}" width="2.5" height="5" fill="#f43f5e"/>`+
      `</g>`;
  }
  if(kind==="volleyball"){                           // rete da beach volley
    const w=s*0.66, h=s*0.54, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<line x1="${x+1}" y1="${y}" x2="${x+1}" y2="${y+h}" stroke="#334155" stroke-width="2.5"/>`+
      `<line x1="${x+w-1}" y1="${y}" x2="${x+w-1}" y2="${y+h}" stroke="#334155" stroke-width="2.5"/>`+
      `<rect x="${x+1}" y="${y+2}" width="${w-2}" height="${h*0.52}" fill="#f8fafc" opacity="0.3" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2 2"/>`+
      `<rect x="${x+1}" y="${y+2}" width="${w-2}" height="3" fill="#facc15"/>`+
      `<circle cx="${cx}" cy="${y-2}" r="${s*0.09}" fill="#fde047" stroke="#0284c7" stroke-width="1"/>`+
      `</g>`;
  }
  if(kind==="cooler"){                               // borsa frigo portatile
    const w=s*0.50, h=s*0.44, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y+h*0.24}" width="${w}" height="${h*0.76}" rx="3" fill="#0284c7" stroke="#0369a1" stroke-width="1"/>`+
      `<rect x="${x-1}" y="${y+h*0.14}" width="${w+2}" height="${h*0.18}" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>`+
      `<path d="M ${cx-w*0.28} ${y+h*0.14} L ${cx-w*0.28} ${y} L ${cx+w*0.28} ${y} L ${cx+w*0.28} ${y+h*0.14}" fill="none" stroke="#64748b" stroke-width="1.6"/>`+
      `</g>`;
  }
  // Oggetti Salento & Tradizione
  if(kind==="scannetto"){                            // sgabello basso rustico in legno e paglia
    const w=s*0.48, h=s*0.42, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h*0.38}" rx="2" fill="#eab308" stroke="#a16207" stroke-width="1"/>`+
      `<line x1="${x+w*0.33}" y1="${y}" x2="${x+w*0.33}" y2="${y+h*0.38}" stroke="#ca8a04" stroke-width="1"/>`+
      `<line x1="${x+w*0.66}" y1="${y}" x2="${x+w*0.66}" y2="${y+h*0.38}" stroke="#ca8a04" stroke-width="1"/>`+
      `<rect x="${x+2}" y="${y+h*0.38}" width="${w*0.18}" height="${h*0.62}" rx="1" fill="#78350f"/>`+
      `<rect x="${x+w-w*0.18-2}" y="${y+h*0.38}" width="${w*0.18}" height="${h*0.62}" rx="1" fill="#78350f"/>`+
      `<line x1="${x+2}" y1="${y+h*0.70}" x2="${x+w-2}" y2="${y+h*0.70}" stroke="#78350f" stroke-width="1.5"/>`+
      `</g>`;
  }
  if(kind==="tamburello"){                           // tamburello salentino da pizzica con sonagli e nastrini
    const R=s*0.26;
    return `<g opacity="${op}" pointer-events="none">`+
      `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#fdf6e2" stroke="#854d0e" stroke-width="2.5"/>`+
      `<circle cx="${cx}" cy="${cy}" r="${R*0.75}" fill="none" stroke="#ca8a04" stroke-width="0.8" stroke-dasharray="2 2"/>`+
      `<circle cx="${cx-R}" cy="${cy}" r="${s*0.04}" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>`+
      `<circle cx="${cx+R}" cy="${cy}" r="${s*0.04}" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>`+
      `<circle cx="${cx}" cy="${cy-R}" r="${s*0.04}" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>`+
      `<circle cx="${cx}" cy="${cy+R}" r="${s*0.04}" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>`+
      `<path d="M ${cx+R*0.7} ${cy+R*0.7} Q ${cx+s*0.35} ${cy+s*0.30} ${cx+s*0.38} ${cy+s*0.42}" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round"/>`+
      `<path d="M ${cx+R*0.7} ${cy+R*0.7} Q ${cx+s*0.42} ${cy+s*0.25} ${cx+s*0.46} ${cy+s*0.36}" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"/>`+
      `</g>`;
  }
  if(kind==="pumo"){                                 // pumo leccese in ceramica su base
    const w=s*0.44, h=s*0.58, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${cx-w*0.32}" y="${y+h*0.78}" width="${w*0.64}" height="${h*0.22}" rx="2" fill="#d97706" stroke="#92400e" stroke-width="1"/>`+
      `<ellipse cx="${cx}" cy="${cy-h*0.05}" rx="${w*0.38}" ry="${h*0.38}" fill="#059669" stroke="#047857" stroke-width="1.2"/>`+
      `<path d="M ${cx-w*0.38} ${cy+h*0.12} Q ${cx-w*0.46} ${cy-h*0.05} ${cx-w*0.18} ${cy-h*0.20}" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>`+
      `<path d="M ${cx+w*0.38} ${cy+h*0.12} Q ${cx+w*0.46} ${cy-h*0.05} ${cx+w*0.18} ${cy-h*0.20}" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>`+
      `<circle cx="${cx}" cy="${cy-h*0.42}" r="${s*0.04}" fill="#f59e0b"/>`+
      `</g>`;
  }
  if(kind==="cassapanca"){                           // cassapanca / baule antico in legno d'ulivo
    const w=s*0.62, h=s*0.44, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y+h*0.20}" width="${w}" height="${h*0.80}" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>`+
      `<rect x="${x-1}" y="${y}" width="${w+2}" height="${h*0.25}" rx="2" fill="#92400e" stroke="#451a03" stroke-width="1.2"/>`+
      `<line x1="${x+4}" y1="${y+h*0.55}" x2="${x+w-4}" y2="${y+h*0.55}" stroke="#451a03" stroke-width="1"/>`+
      `<rect x="${cx-2.5}" y="${y+h*0.20}" width="5" height="7" rx="1" fill="#facc15" stroke="#78350f" stroke-width="0.8"/>`+
      `<circle cx="${cx}" cy="${y+h*0.20+4}" r="1" fill="#000"/>`+
      `</g>`;
  }
  if(kind==="madia"){                                // madia per il pane (cassa trapezoidale su piedi)
    const w=s*0.60, h=s*0.50, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<polygon points="${x-2},${y} ${x+w+2},${y} ${x+w-4},${y+h*0.65} ${x+4},${y+h*0.65}" fill="#b45309" stroke="#78350f" stroke-width="1.2"/>`+
      `<line x1="${x}" y1="${y+h*0.15}" x2="${x+w}" y2="${y+h*0.15}" stroke="#fef3c7" stroke-width="1" opacity="0.6"/>`+
      `<rect x="${x+6}" y="${y+h*0.65}" width="4" height="${h*0.35}" fill="#78350f"/>`+
      `<rect x="${x+w-10}" y="${y+h*0.65}" width="4" height="${h*0.35}" fill="#78350f"/>`+
      `<circle cx="${cx-8}" cy="${y+h*0.35}" r="1.5" fill="#fde68a"/>`+
      `<circle cx="${cx+8}" cy="${y+h*0.35}" r="1.5" fill="#fde68a"/>`+
      `</g>`;
  }
  if(kind==="cascetta"){                             // cassetta da frutta in legno a listelli
    const w=s*0.56, h=s*0.42, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="#d4a373" stroke="#8c5836" stroke-width="1.2"/>`+
      `<line x1="${x}" y1="${y+h*0.33}" x2="${x+w}" y2="${y+h*0.33}" stroke="#8c5836" stroke-width="1"/>`+
      `<line x1="${x}" y1="${y+h*0.66}" x2="${x+w}" y2="${y+h*0.66}" stroke="#8c5836" stroke-width="1"/>`+
      `<rect x="${cx-6}" y="${y+h*0.12}" width="12" height="4" rx="2" fill="#5c3820"/>`+
      `</g>`;
  }
  if(kind==="murosecco"){                            // muro a secco salentino a conci di pietra
    const w=s*0.66, h=s*0.48, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#d6d3d1" stroke="#57534e" stroke-width="1.2"/>`+
      `<rect x="${x+2}" y="${y+2}" width="${w*0.45}" height="${h*0.42}" rx="1" fill="#e7e5e4" stroke="#78716c" stroke-width="0.8"/>`+
      `<rect x="${x+w*0.48}" y="${y+2}" width="${w*0.48}" height="${h*0.42}" rx="1" fill="#f5f5f4" stroke="#78716c" stroke-width="0.8"/>`+
      `<rect x="${x+2}" y="${y+h*0.48}" width="${w*0.30}" height="${h*0.45}" rx="1" fill="#f5f5f4" stroke="#78716c" stroke-width="0.8"/>`+
      `<rect x="${x+w*0.34}" y="${y+h*0.48}" width="${w*0.36}" height="${h*0.45}" rx="1" fill="#e7e5e4" stroke="#78716c" stroke-width="0.8"/>`+
      `<rect x="${x+w*0.72}" y="${y+h*0.48}" width="${w*0.24}" height="${h*0.45}" rx="1" fill="#d6d3d1" stroke="#78716c" stroke-width="0.8"/>`+
      `</g>`;
  }
  if(kind==="malota"){                               // malota (scarafaggio/blatta)
    return `<g opacity="${op}" pointer-events="none">`+
      `<ellipse cx="${cx}" cy="${cy}" rx="${s*0.14}" ry="${s*0.24}" fill="#292524" stroke="#1c1917" stroke-width="1"/>`+
      `<line x1="${cx}" y1="${cy-s*0.14}" x2="${cx}" y2="${cy+s*0.22}" stroke="#78716c" stroke-width="0.8"/>`+
      `<circle cx="${cx}" cy="${cy-s*0.22}" r="${s*0.07}" fill="#44403c"/>`+
      `<path d="M ${cx-2} ${cy-s*0.26} Q ${cx-s*0.20} ${cy-s*0.36} ${cx-s*0.24} ${cy-s*0.24}" fill="none" stroke="#1c1917" stroke-width="1"/>`+
      `<path d="M ${cx+2} ${cy-s*0.26} Q ${cx+s*0.20} ${cy-s*0.36} ${cx+s*0.24} ${cy-s*0.24}" fill="none" stroke="#1c1917" stroke-width="1"/>`+
      `<line x1="${cx-s*0.12}" y1="${cy-s*0.08}" x2="${cx-s*0.28}" y2="${cy-s*0.14}" stroke="#1c1917" stroke-width="1.2"/>`+
      `<line x1="${cx+s*0.12}" y1="${cy-s*0.08}" x2="${cx+s*0.28}" y2="${cy-s*0.14}" stroke="#1c1917" stroke-width="1.2"/>`+
      `<line x1="${cx-s*0.14}" y1="${cy+s*0.04}" x2="${cx-s*0.30}" y2="${cy+s*0.06}" stroke="#1c1917" stroke-width="1.2"/>`+
      `<line x1="${cx+s*0.14}" y1="${cy+s*0.04}" x2="${cx+s*0.30}" y2="${cy+s*0.06}" stroke="#1c1917" stroke-width="1.2"/>`+
      `</g>`;
  }
  if(kind==="scrace"){                               // scrace (cespuglio di rovi spinosi)
    return `<g opacity="${op}" pointer-events="none">`+
      `<path d="M ${cx-s*0.30} ${cy+s*0.20} Q ${cx-s*0.10} ${cy-s*0.25} ${cx+s*0.28} ${cy-s*0.15}" fill="none" stroke="#3f3f46" stroke-width="1.8"/>`+
      `<path d="M ${cx+s*0.25} ${cy+s*0.22} Q ${cx+s*0.05} ${cy-s*0.20} ${cx-s*0.26} ${cy-s*0.12}" fill="none" stroke="#27272a" stroke-width="1.8"/>`+
      `<path d="M ${cx-s*0.20} ${cy+s*0.10} Q ${cx} ${cy+s*0.28} ${cx+s*0.20} ${cy+s*0.05}" fill="none" stroke="#52525b" stroke-width="1.4"/>`+
      `<line x1="${cx-s*0.12}" y1="${cy-s*0.08}" x2="${cx-s*0.18}" y2="${cy-s*0.16}" stroke="#18181b" stroke-width="1.2"/>`+
      `<line x1="${cx+s*0.10}" y1="${cy-s*0.06}" x2="${cx+s*0.16}" y2="${cy-s*0.14}" stroke="#18181b" stroke-width="1.2"/>`+
      `<circle cx="${cx-s*0.06}" cy="${cy+s*0.04}" r="2" fill="#701a75"/>`+
      `<circle cx="${cx+s*0.14}" cy="${cy+s*0.08}" r="2" fill="#701a75"/>`+
      `</g>`;
  }
  if(kind==="ulivo"){                                // albero di ulivo secolare
    return `<g opacity="${op}" pointer-events="none">`+
      `<path d="M ${cx-s*0.14} ${cy+s*0.34} C ${cx-s*0.22} ${cy+s*0.08}, ${cx-s*0.05} ${cy}, ${cx-s*0.18} ${cy-s*0.12} C ${cx-s*0.02} ${cy-s*0.08}, ${cx+s*0.08} ${cy-s*0.08}, ${cx+s*0.22} ${cy-s*0.10} C ${cx+s*0.08} ${cy}, ${cx+s*0.20} ${cy+s*0.10}, ${cx+s*0.14} ${cy+s*0.34} Z" fill="#78716c" stroke="#44403c" stroke-width="1.2"/>`+
      `<ellipse cx="${cx-s*0.16}" cy="${cy-s*0.18}" rx="${s*0.18}" ry="${s*0.14}" fill="#65a30d" stroke="#4d7c0f" stroke-width="1"/>`+
      `<ellipse cx="${cx+s*0.16}" cy="${cy-s*0.18}" rx="${s*0.18}" ry="${s*0.14}" fill="#84cc16" stroke="#4d7c0f" stroke-width="1"/>`+
      `<ellipse cx="${cx}" cy="${cy-s*0.24}" rx="${s*0.22}" ry="${s*0.16}" fill="#a3e635" stroke="#4d7c0f" stroke-width="1"/>`+
      `<circle cx="${cx-s*0.10}" cy="${cy-s*0.16}" r="1.5" fill="#365314"/>`+
      `<circle cx="${cx+s*0.08}" cy="${cy-s*0.22}" r="1.5" fill="#365314"/>`+
      `</g>`;
  }
  if(kind==="muscia"){                               // muscia (gatta salentina accovacciata)
    return `<g opacity="${op}" pointer-events="none">`+
      `<ellipse cx="${cx}" cy="${cy+s*0.08}" rx="${s*0.22}" ry="${s*0.16}" fill="#475569" stroke="#1e293b" stroke-width="1"/>`+
      `<circle cx="${cx-s*0.14}" cy="${cy-s*0.06}" r="${s*0.12}" fill="#475569" stroke="#1e293b" stroke-width="1"/>`+
      `<polygon points="${cx-s*0.22},${cy-s*0.12} ${cx-s*0.18},${cy-s*0.24} ${cx-s*0.12},${cy-s*0.14}" fill="#1e293b"/>`+
      `<polygon points="${cx-s*0.12},${cy-s*0.14} ${cx-s*0.06},${cy-s*0.24} ${cx-s*0.02},${cy-s*0.12}" fill="#1e293b"/>`+
      `<circle cx="${cx-s*0.18}" cy="${cy-s*0.06}" r="1.5" fill="#facc15"/>`+
      `<circle cx="${cx-s*0.10}" cy="${cy-s*0.06}" r="1.5" fill="#facc15"/>`+
      `<path d="M ${cx+s*0.18} ${cy+s*0.12} Q ${cx+s*0.34} ${cy+s*0.05} ${cx+s*0.30} ${cy-s*0.12}" fill="none" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>`+
      `</g>`;
  }
  if(kind==="apecar"){                               // Ape Car Piaggio (tre ruote, cabina e cassone)
    const w=s*0.68, h=s*0.48, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x+w*0.35}" y="${y}" width="${w*0.65}" height="${h*0.75}" rx="2" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>`+
      `<path d="M ${x} ${y+h*0.40} L ${x+w*0.15} ${y+h*0.08} L ${x+w*0.35} ${y+h*0.08} L ${x+w*0.35} ${y+h*0.75} L ${x} ${y+h*0.75} Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>`+
      `<rect x="${x+w*0.12}" y="${y+h*0.14}" width="${w*0.18}" height="${h*0.32}" rx="1" fill="#e0f2fe"/>`+
      `<circle cx="${x+w*0.14}" cy="${y+h*0.78}" r="${s*0.09}" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>`+
      `<circle cx="${x+w*0.80}" cy="${y+h*0.78}" r="${s*0.09}" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>`+
      `</g>`;
  }
  if(kind==="trattore"){                             // trattore agricolo
    const w=s*0.66, h=s*0.54, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<rect x="${x}" y="${y+h*0.25}" width="${w*0.50}" height="${h*0.45}" rx="2" fill="#16a34a" stroke="#15803d" stroke-width="1.2"/>`+
      `<rect x="${x+w*0.45}" y="${y}" width="${w*0.55}" height="${h*0.70}" rx="2" fill="#22c55e" stroke="#15803d" stroke-width="1.2"/>`+
      `<rect x="${x+w*0.52}" y="${y+h*0.10}" width="${w*0.38}" height="${h*0.30}" rx="1" fill="#dcfce7"/>`+
      `<line x1="${x+w*0.15}" y1="${y+h*0.25}" x2="${x+w*0.15}" y2="${y+h*0.05}" stroke="#334155" stroke-width="2" stroke-linecap="round"/>`+
      `<circle cx="${x+w*0.20}" cy="${y+h*0.75}" r="${s*0.09}" fill="#eab308" stroke="#1e293b" stroke-width="2"/>`+
      `<circle cx="${x+w*0.75}" cy="${y+h*0.70}" r="${s*0.16}" fill="#eab308" stroke="#1e293b" stroke-width="3"/>`+
      `</g>`;
  }
  if(kind==="faro"){                                 // faro marittimo (fasce rosse/bianche e luce)
    const w=s*0.46, h=s*0.68, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<polygon points="${cx-w*0.28},${y+h} ${cx+w*0.28},${y+h} ${cx+w*0.18},${y+h*0.25} ${cx-w*0.18},${y+h*0.25}" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>`+
      `<polygon points="${cx-w*0.25},${y+h*0.80} ${cx+w*0.25},${y+h*0.80} ${cx+w*0.21},${y+h*0.55} ${cx-w*0.21},${y+h*0.55}" fill="#ffffff"/>`+
      `<rect x="${cx-w*0.18}" y="${y+h*0.12}" width="${w*0.36}" height="${h*0.15}" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>`+
      `<polygon points="${cx},${y} ${cx-w*0.22},${y+h*0.12} ${cx+w*0.22},${y+h*0.12}" fill="#1e293b"/>`+
      `</g>`;
  }
  if(kind==="pajaro"){                               // pajaro / trullo in pietra a secco
    const w=s*0.62, h=s*0.58, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<polygon points="${x},${y+h} ${x+w},${y+h} ${x+w-w*0.18},${y+h*0.40} ${x+w*0.18},${y+h*0.40}" fill="#e7e5e4" stroke="#78716c" stroke-width="1.2"/>`+
      `<polygon points="${x+w*0.14},${y+h*0.42} ${x+w-w*0.14},${y+h*0.42} ${cx},${y}" fill="#d6d3d1" stroke="#78716c" stroke-width="1.2"/>`+
      `<rect x="${cx-4}" y="${y+h*0.60}" width="8" height="${h*0.40}" rx="1" fill="#292524"/>`+
      `</g>`;
  }
  if(kind==="luminarie"){                            // luminarie salentine da festa patronale
    const w=s*0.64, h=s*0.56, x=cx-w/2, y=cy-h/2;
    return `<g opacity="${op}" pointer-events="none">`+
      `<path d="M ${x} ${y+h} L ${x} ${y+h*0.35} Q ${cx} ${y-h*0.15} ${x+w} ${y+h*0.35} L ${x+w} ${y+h}" fill="none" stroke="#f8fafc" stroke-width="2.5"/>`+
      `<circle cx="${x}" cy="${y+h*0.35}" r="2" fill="#ef4444"/>`+
      `<circle cx="${x+w*0.20}" cy="${y+h*0.15}" r="2" fill="#eab308"/>`+
      `<circle cx="${cx}" cy="${y+h*0.02}" r="2.5" fill="#3b82f6"/>`+
      `<circle cx="${x+w*0.80}" cy="${y+h*0.15}" r="2" fill="#22c55e"/>`+
      `<circle cx="${x+w}" cy="${y+h*0.35}" r="2" fill="#ec4899"/>`+
      `<circle cx="${cx}" cy="${y+h*0.28}" r="2" fill="#a855f7"/>`+
      `</g>`;
  }
  if(kind==="taccaro"){                              // taccaro (ceppo di legno tondo)
    return `<g opacity="${op}" pointer-events="none">`+
      `<ellipse cx="${cx}" cy="${cy+s*0.12}" rx="${s*0.35}" ry="${s*0.1}" fill="rgba(0,0,0,0.2)"/>`+
      `<rect x="${cx-s*0.25}" y="${cy-s*0.15}" width="${s*0.5}" height="${s*0.3}" fill="#78350f" />`+
      `<line x1="${cx-s*0.1}" y1="${cy-s*0.08}" x2="${cx+s*0.15}" y2="${cy-s*0.08}" stroke="#451a03" stroke-width="1.5" stroke-linecap="round"/>`+
      `<line x1="${cx-s*0.15}" y1="${cy}" x2="${cx+s*0.2}" y2="${cy}" stroke="#451a03" stroke-width="1" stroke-linecap="round"/>`+
      `<line x1="${cx-s*0.05}" y1="${cy+s*0.08}" x2="${cx+s*0.1}" y2="${cy+s*0.08}" stroke="#451a03" stroke-width="1.5" stroke-linecap="round"/>`+
      `<ellipse cx="${cx-s*0.25}" cy="${cy}" rx="${s*0.08}" ry="${s*0.15}" fill="#b45309" stroke="#451a03" stroke-width="1.5"/>`+
      `<ellipse cx="${cx-s*0.25}" cy="${cy}" rx="${s*0.04}" ry="${s*0.08}" fill="none" stroke="#d97706" stroke-width="1"/>`+
      `<path d="M ${cx+s*0.25} ${cy-s*0.15} A ${s*0.08} ${s*0.15} 0 0 1 ${cx+s*0.25} ${cy+s*0.15}" fill="none" stroke="#451a03" stroke-width="1.5"/>`+
      `</g>`;
  }
  const em = OBJ_EMOJI[kind]||"?";
  return `<text x="${cx}" y="${cy+CS*0.18}" font-size="${CS*0.5}" text-anchor="middle" opacity="${op}" pointer-events="none">${em}</text>`;
}
