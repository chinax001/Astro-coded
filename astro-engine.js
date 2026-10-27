/* Astro.coded calculation engine
   Sidereal (Lahiri) positions for Vedic charts. Runs fully in the browser.
   Planet positions use low-precision orbital elements with perturbation terms
   (about 1-2 arcminutes for Sun/Moon, a few arcminutes for the planets). */
(function (root) {
  'use strict';

  const RAD = Math.PI / 180, DEG = 180 / Math.PI;
  const norm = x => ((x % 360) + 360) % 360;
  const sin = x => Math.sin(x * RAD);
  const cos = x => Math.cos(x * RAD);
  const atan2 = (y, x) => Math.atan2(y, x) * DEG;

  const SIGNS = [
    { en: 'Aries', sa: 'Mesha', ab: 'Ar', lord: 'Mars' },
    { en: 'Taurus', sa: 'Vrishabha', ab: 'Ta', lord: 'Venus' },
    { en: 'Gemini', sa: 'Mithuna', ab: 'Ge', lord: 'Mercury' },
    { en: 'Cancer', sa: 'Karka', ab: 'Cn', lord: 'Moon' },
    { en: 'Leo', sa: 'Simha', ab: 'Le', lord: 'Sun' },
    { en: 'Virgo', sa: 'Kanya', ab: 'Vi', lord: 'Mercury' },
    { en: 'Libra', sa: 'Tula', ab: 'Li', lord: 'Venus' },
    { en: 'Scorpio', sa: 'Vrishchika', ab: 'Sc', lord: 'Mars' },
    { en: 'Sagittarius', sa: 'Dhanu', ab: 'Sg', lord: 'Jupiter' },
    { en: 'Capricorn', sa: 'Makara', ab: 'Cp', lord: 'Saturn' },
    { en: 'Aquarius', sa: 'Kumbha', ab: 'Aq', lord: 'Saturn' },
    { en: 'Pisces', sa: 'Meena', ab: 'Pi', lord: 'Jupiter' }
  ];

  const NAKSHATRAS = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha',
    'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha',
    'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ];
  const NAK_LORDS = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];

  const PLANET_INFO = [
    { name: 'Sun', short: 'Su', sa: 'Surya' },
    { name: 'Moon', short: 'Mo', sa: 'Chandra' },
    { name: 'Mars', short: 'Ma', sa: 'Mangal' },
    { name: 'Mercury', short: 'Me', sa: 'Budh' },
    { name: 'Jupiter', short: 'Ju', sa: 'Guru' },
    { name: 'Venus', short: 'Ve', sa: 'Shukra' },
    { name: 'Saturn', short: 'Sa', sa: 'Shani' },
    { name: 'Rahu', short: 'Ra', sa: 'Rahu' },
    { name: 'Ketu', short: 'Ke', sa: 'Ketu' }
  ];

  // Full (Parashari) aspects, counted in houses from the planet's own house.
  const ASPECTS = {
    Sun: [7], Moon: [7], Mars: [4, 7, 8], Mercury: [7], Jupiter: [5, 7, 9],
    Venus: [7], Saturn: [3, 7, 10], Rahu: [5, 7, 9], Ketu: [5, 7, 9]
  };

  const VARGAS = [
    { code: 'D1', name: 'Rashi', about: 'Overall life, body and personality' },
    { code: 'D2', name: 'Hora', about: 'Wealth and finances' },
    { code: 'D3', name: 'Drekkana', about: 'Siblings, courage and effort' },
    { code: 'D4', name: 'Chaturthamsa', about: 'Home, property and fortune' },
    { code: 'D5', name: 'Panchamsa', about: 'Fame, creativity and authority' },
    { code: 'D6', name: 'Shashthamsa', about: 'Health, debts and obstacles' },
    { code: 'D7', name: 'Saptamsa', about: 'Children and legacy' },
    { code: 'D8', name: 'Ashtamsa', about: 'Sudden events and longevity' },
    { code: 'D9', name: 'Navamsa', about: 'Marriage, dharma and inner strength' },
    { code: 'D10', name: 'Dasamsa', about: 'Career and public life' },
    { code: 'D12', name: 'Dwadasamsa', about: 'Parents and ancestry' },
    { code: 'D16', name: 'Shodashamsa', about: 'Vehicles and comforts' },
    { code: 'D20', name: 'Vimshamsa', about: 'Spiritual practice' },
    { code: 'D24', name: 'Chaturvimshamsa', about: 'Education and learning' },
    { code: 'D27', name: 'Bhamsa', about: 'Strengths and weaknesses' },
    { code: 'D30', name: 'Trimshamsa', about: 'Troubles and character' },
    { code: 'D40', name: 'Khavedamsa', about: 'Maternal lineage effects' },
    { code: 'D45', name: 'Akshavedamsa', about: 'Paternal lineage and character' },
    { code: 'D60', name: 'Shashtiamsa', about: 'Past karma and fine detail' },
    { code: 'MOON', name: 'Chandra Lagna', about: 'The chart read from the Moon' }
  ];

  // ---------- Orbital elements (days since 1999-12-31 00:00 UT) ----------
  const ELEMENTS = {
    Sun: d => ({ N: 0, i: 0, w: 282.9404 + 4.70935e-5 * d, a: 1, e: 0.016709 - 1.151e-9 * d, M: 356.0470 + 0.9856002585 * d }),
    Moon: d => ({ N: 125.1228 - 0.0529538083 * d, i: 5.1454, w: 318.0634 + 0.1643573223 * d, a: 60.2666, e: 0.0549, M: 115.3654 + 13.0649929509 * d }),
    Mercury: d => ({ N: 48.3313 + 3.24587e-5 * d, i: 7.0047 + 5.00e-8 * d, w: 29.1241 + 1.01444e-5 * d, a: 0.387098, e: 0.205635 + 5.59e-10 * d, M: 168.6562 + 4.0923344368 * d }),
    Venus: d => ({ N: 76.6799 + 2.46590e-5 * d, i: 3.3946 + 2.75e-8 * d, w: 54.8910 + 1.38374e-5 * d, a: 0.723330, e: 0.006773 - 1.302e-9 * d, M: 48.0052 + 1.6021302244 * d }),
    Mars: d => ({ N: 49.5574 + 2.11081e-5 * d, i: 1.8497 - 1.78e-8 * d, w: 286.5016 + 2.92961e-5 * d, a: 1.523688, e: 0.093405 + 2.516e-9 * d, M: 18.6021 + 0.5240207766 * d }),
    Jupiter: d => ({ N: 100.4542 + 2.76854e-5 * d, i: 1.3030 - 1.557e-7 * d, w: 273.8777 + 1.64505e-5 * d, a: 5.20256, e: 0.048498 + 4.469e-9 * d, M: 19.8950 + 0.0830853001 * d }),
    Saturn: d => ({ N: 113.6634 + 2.38980e-5 * d, i: 2.4886 - 1.081e-7 * d, w: 339.3939 + 2.97661e-5 * d, a: 9.55475, e: 0.055546 - 9.499e-9 * d, M: 316.9670 + 0.0334442282 * d })
  };

  function kepler(M, e) {
    let E = M + e * DEG * sin(M) * (1 + e * cos(M));
    for (let k = 0; k < 12; k++) {
      const dE = (E - e * DEG * sin(E) - M) / (1 - e * cos(E));
      E -= dE;
      if (Math.abs(dE) < 1e-9) break;
    }
    return E;
  }

  function helio(el) {
    const M = norm(el.M);
    const E = kepler(M, el.e);
    const xv = el.a * (cos(E) - el.e);
    const yv = el.a * Math.sqrt(1 - el.e * el.e) * sin(E);
    const v = atan2(yv, xv);
    const r = Math.hypot(xv, yv);
    const vw = v + el.w;
    return {
      x: r * (cos(el.N) * cos(vw) - sin(el.N) * sin(vw) * cos(el.i)),
      y: r * (sin(el.N) * cos(vw) + cos(el.N) * sin(vw) * cos(el.i))
    };
  }

  function tropical(name, d) {
    const sunEl = ELEMENTS.Sun(d);
    const s = helio(sunEl);
    if (name === 'Sun') return norm(atan2(s.y, s.x));

    if (name === 'Moon') {
      const m = ELEMENTS.Moon(d);
      const h = helio(m);
      let lon = atan2(h.y, h.x);
      const Ms = sunEl.M, Mm = m.M;
      const Ls = Ms + sunEl.w;
      const Lm = Mm + m.w + m.N;
      const D = Lm - Ls;
      const F = Lm - m.N;
      lon += -1.274 * sin(Mm - 2 * D) + 0.658 * sin(2 * D) - 0.186 * sin(Ms) - 0.059 * sin(2 * Mm - 2 * D)
        - 0.057 * sin(Mm - 2 * D + Ms) + 0.053 * sin(Mm + 2 * D) + 0.046 * sin(2 * D - Ms)
        + 0.041 * sin(Mm - Ms) - 0.035 * sin(D) - 0.031 * sin(Mm + Ms) - 0.015 * sin(2 * F - 2 * D)
        + 0.011 * sin(Mm - 4 * D);
      return norm(lon);
    }

    const h = helio(ELEMENTS[name](d));
    let lon = atan2(h.y + s.y, h.x + s.x);
    if (name === 'Jupiter' || name === 'Saturn') {
      const Mj = ELEMENTS.Jupiter(d).M, Msat = ELEMENTS.Saturn(d).M;
      if (name === 'Jupiter') {
        lon += -0.332 * sin(2 * Mj - 5 * Msat - 67.6) - 0.056 * sin(2 * Mj - 2 * Msat + 21)
          + 0.042 * sin(3 * Mj - 5 * Msat + 21) - 0.036 * sin(Mj - 2 * Msat) + 0.022 * cos(Mj - Msat)
          + 0.023 * sin(2 * Mj - 3 * Msat + 52) - 0.016 * sin(Mj - 5 * Msat - 69);
      } else {
        lon += 0.812 * sin(2 * Mj - 5 * Msat - 67.6) - 0.229 * cos(2 * Mj - 4 * Msat - 2)
          + 0.119 * sin(Mj - 2 * Msat - 3) + 0.046 * sin(2 * Mj - 6 * Msat - 69) + 0.014 * sin(Mj - 3 * Msat + 32);
      }
    }
    return norm(lon);
  }

  function meanNode(d) { return norm(125.1228 - 0.0529538083 * d); }

  // Lahiri (Chitrapaksha) ayanamsa
  function ayanamsa(T) {
    return 23.853056 + (5028.796195 * T + 1.1054348 * T * T) / 3600;
  }

  function ascendantTropical(jd, T, lat, lon) {
    const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - (T * T * T) / 38710000;
    const ramc = norm(gmst + lon);
    const eps = 23.4392911 - 0.0130042 * T;
    const tanLat = Math.tan(lat * RAD);
    return norm(atan2(cos(ramc), -(sin(ramc) * cos(eps) + tanLat * sin(eps))));
  }

  // ---------- Divisional charts ----------
  function vargaSign(code, lon) {
    const s = Math.floor(lon / 30) % 12;
    const x = lon - Math.floor(lon / 30) * 30;
    const odd = s % 2 === 0; // Aries, Gemini ... are odd signs
    const mod = s % 3;       // 0 movable, 1 fixed, 2 dual
    const el = s % 4;        // 0 fire, 1 earth, 2 air, 3 water
    const part = (size, count) => Math.min(count - 1, Math.floor(x / size));
    switch (code) {
      case 'D1': case 'MOON': return s;
      case 'D2': return odd ? (x < 15 ? 4 : 3) : (x < 15 ? 3 : 4);
      case 'D3': return (s + 4 * part(10, 3)) % 12;
      case 'D4': return (s + 3 * part(7.5, 4)) % 12;
      case 'D5': return (odd ? [0, 10, 8, 2, 6] : [1, 5, 11, 9, 7])[part(6, 5)];
      case 'D6': return odd ? part(5, 6) : (6 + part(5, 6)) % 12;
      case 'D7': return odd ? (s + part(30 / 7, 7)) % 12 : (s + 6 + part(30 / 7, 7)) % 12;
      case 'D8': return ([0, 8, 4][mod] + part(3.75, 8)) % 12;
      case 'D9': return Math.floor(lon * 9 / 30) % 12;
      case 'D10': return odd ? (s + part(3, 10)) % 12 : (s + 8 + part(3, 10)) % 12;
      case 'D12': return (s + part(2.5, 12)) % 12;
      case 'D16': return ([0, 4, 8][mod] + part(30 / 16, 16)) % 12;
      case 'D20': return ([0, 8, 4][mod] + part(1.5, 20)) % 12;
      case 'D24': return ((odd ? 4 : 3) + part(1.25, 24)) % 12;
      case 'D27': return ([0, 3, 6, 9][el] + part(30 / 27, 27)) % 12;
      case 'D30': {
        if (odd) return x < 5 ? 0 : x < 10 ? 10 : x < 18 ? 8 : x < 25 ? 2 : 6;
        return x < 5 ? 1 : x < 12 ? 5 : x < 20 ? 11 : x < 25 ? 9 : 7;
      }
      case 'D40': return ((odd ? 0 : 6) + part(0.75, 40)) % 12;
      case 'D45': return ([0, 4, 8][mod] + part(30 / 45, 45)) % 12;
      case 'D60': return (s + part(0.5, 60)) % 12;
      default: return s;
    }
  }

  function describe(lon) {
    const sign = Math.floor(lon / 30) % 12;
    const nakSize = 360 / 27;
    const nak = Math.floor(lon / nakSize) % 27;
    const pada = Math.min(4, Math.floor((lon % nakSize) / (nakSize / 4)) + 1);
    return {
      lon, sign, degInSign: lon - Math.floor(lon / 30) * 30,
      nak, nakName: NAKSHATRAS[nak], pada, nakLord: NAK_LORDS[nak % 9],
      signLord: SIGNS[sign].lord
    };
  }

  function compute(inp) {
    const tz = inp.tz == null ? 5.5 : inp.tz;
    const utcMs = Date.UTC(inp.year, inp.month - 1, inp.day, inp.hour, inp.minute, 0) - tz * 3600000;
    const jd = utcMs / 86400000 + 2440587.5;
    const d = jd - 2451543.5;
    const T = (jd - 2451545) / 36525;
    const ay = ayanamsa(T);

    const asc = describe(norm(ascendantTropical(jd, T, inp.lat, inp.lon) - ay));
    const lagna = asc.sign;

    const planets = PLANET_INFO.map(info => {
      let lon, retro = false;
      if (info.name === 'Rahu') { lon = norm(meanNode(d) - ay); retro = true; }
      else if (info.name === 'Ketu') { lon = norm(meanNode(d) + 180 - ay); retro = true; }
      else {
        lon = norm(tropical(info.name, d) - ay);
        if (info.name !== 'Sun' && info.name !== 'Moon') {
          const diff = ((tropical(info.name, d + 0.5) - tropical(info.name, d - 0.5) + 540) % 360) - 180;
          retro = diff < 0;
        }
      }
      const p = Object.assign({}, info, describe(lon), { retro });
      p.house = ((p.sign - lagna + 12) % 12) + 1;
      return p;
    });

    const moon = planets[1];
    const vargas = {};
    VARGAS.forEach(v => {
      const signs = {};
      signs.Asc = vargaSign(v.code, asc.lon);
      planets.forEach(p => { signs[p.name] = vargaSign(v.code, p.lon); });
      vargas[v.code] = {
        code: v.code, name: v.name, about: v.about,
        lagnaSign: v.code === 'MOON' ? moon.sign : signs.Asc,
        signs
      };
      if (v.code === 'MOON') signs.Asc = asc.sign;
    });

    return { jd, ayanamsa: ay, asc, planets, vargas };
  }

  const api = { compute, vargaSign, SIGNS, NAKSHATRAS, NAK_LORDS, PLANET_INFO, ASPECTS, VARGAS };
  root.AstroEngine = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
