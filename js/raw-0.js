export default (
  "const VERSION = \"1.0.0\";\nconst state = {\n  screen: \"home\",\n  diagnose: null,\n  r" +
  "itual: null,\n  vars: {},\n  wesen: false,\n  ahnen: false,\n  step: 0,\n  esIstSo: f" +
  "alse,\n  rueckkehrOk: false,\n  ethikOk: false,\n  softGateOk: false\n};\n\n/* \u2014\u2014\u2014 She" +
  "ll \u2014\u2014\u2014 */\nfunction shell() {\n  return `\n  <header class=\"top\">\n    <button type=" +
  "\"button\" class=\"brand\" id=\"btn-home\" aria-label=\"Start\">So sei es</button>\n    <" +
  "nav class=\"nav\" aria-label=\"Haupt\">\n      <button type=\"button\" data-go=\"home\" c" +
  "lass=\"nav-btn\">Altar</button>\n      <button type=\"button\" data-go=\"list\" class=\"" +
  "nav-btn\">Rituale</button>\n      <button type=\"button\" data-go=\"chronik\" class=\"n" +
  "av-btn\">Chronik</button>\n      <button type=\"button\" data-go=\"gabe\" class=\"nav-b" +
  "tn\">Gabe</button>\n    </nav>\n  </header>\n  <main id=\"view\" class=\"view\"></main>\n" +
  "  <footer class=\"foot\"><span>Hard working edition \u00b7 ${VERSION}</span></footer>`;" +
  "\n}\n\nfunction setNav() {\n  $$(\".nav-btn\").forEach((b) => {\n    b.classList.toggle" +
  "(\"on\", b.dataset.go === state.screen);\n  });\n}\n\nfunction go(screen, opts = {}) {" +
  "\n  state.screen = screen;\n  Object.assign(state, opts);\n  setNav();\n  paint();\n " +
  " window.scrollTo(0, 0);\n}\n\n/* \u2014\u2014\u2014 Diagnose \u2014\u2014\u2014 */\nconst DIAG_Q = [\n  {\n    id: \"" +
  "lage\",\n    q: \"Was ist die Lage?\",\n    opts: [\n      { id: \"klarheit\", l: \"Klarh" +
  "eit\", h: \"Du weisst, was du willst.\" },\n      { id: \"mangel\", l: \"Mangel\", h: \"E" +
  "twas fehlt oder wurde genommen.\" },\n      { id: \"rache\", l: \"Rache\", h: \"Schmerz" +
  " will zur\u00fcckschlagen.\" },\n      { id: \"show\", l: \"Show\", h: \"Wirkung um der Wirk" +
  "ung willen.\" }\n    ]\n  },\n  {\n    id: \"ziel\",\n    q: \"Was soll das Feld tun?\",\n " +
  "   opts: [\n      { id: \"schutz\", l: \"Sch\u00fctzen / halten\" },\n      { id: \"loesen\"," +
  " l: \"L\u00f6sen / heilen\" },\n      { id: \"ziehen\", l: \"Anziehen / verbinden\" },\n     " +
  " { id: \"stoppen\", l: \"Stoppen / trennen\" },\n      { id: \"ausgleich\", l: \"Ausglei" +
  "ch ohne Hass\" }\n    ]\n  },\n  {\n    id: \"preis\",\n    q: \"Bist du bereit, den Prei" +
  "s zu tragen?\",\n    opts: [\n      { id: \"ja9\", l: \"Ja \u2014 mit 9 (Beobachter wach)\" " +
  "},\n      { id: \"nursoft\", l: \"Nur soft \u2014 bei der 9 bleiben\" },\n      { id: \"unsi" +
  "cher\", l: \"Noch unsicher \u2014 erst kl\u00e4ren\" }\n    ]\n  }\n];\n\nfunction paintDiagnose()" +
  " {\n  const d = state.diagnose || { answers: {}, qi: 0 };\n  state.diagnose = d;\n " +
  " const step = DIAG_Q[d.qi];\n  if (!step) {\n    return paintDiagnoseDone();\n  }\n " +
  " const opts = step.opts\n    .map(\n      (o) =>\n        `<button type=\"button\" cl" +
  "ass=\"card-btn\" data-ans=\"${esc(o.id)}\">\n        <strong>${esc(o.l)}</strong>\n   " +
  "     ${o.h ? `<span class=\"sub\">${esc(o.h)}</span>` : \"\"}\n      </button>`\n    )" +
  "\n"
);
