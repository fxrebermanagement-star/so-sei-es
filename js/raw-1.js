export default (
  "    .join(\"\");\n  $(\"#view\").innerHTML = `\n    <section class=\"panel diagnose\">\n " +
  "     <p class=\"eyebrow\">Vor dem Ritual</p>\n      <h1>Diagnose</h1>\n      <p clas" +
  "s=\"lead\">Klarheit vor dem Setzen. Kurz und ehrlich.</p>\n      <div class=\"progre" +
  "ss\"><span style=\"width:${((d.qi + 1) / DIAG_Q.length) * 100}%\"></span></div>\n   " +
  "   <h2 class=\"q\">${esc(step.q)}</h2>\n      <div class=\"stack\">${opts}</div>\n    " +
  "  <div class=\"row\">\n        <button type=\"button\" class=\"btn ghost\" id=\"diag-ski" +
  "p\">\u00dcberspringen</button>\n        ${d.qi > 0 ? `<button type=\"button\" class=\"btn " +
  "ghost\" id=\"diag-back\">Zur\u00fcck</button>` : \"\"}\n      </div>\n    </section>`;\n  $$((" +
  "\"[data-ans]\").forEach((b) =>\n    b.addEventListener(\"click\", () => {\n      d.ans" +
  "wers[step.id] = b.dataset.ans;\n      d.qi += 1;\n      paint();\n    })\n  );\n  $(\"" +
  "#diag-skip\")?.addEventListener(\"click\", () => {\n    state.diagnose = { answers: " +
  "{ skipped: true }, qi: DIAG_Q.length, done: true };\n    go(\"list\");\n  });\n  $(\"#" +
  "diag-back\")?.addEventListener(\"click\", () => {\n    d.qi = Math.max(0, d.qi - 1);" +
  "\n    paint();\n  });\n}\n\nfunction paintDiagnoseDone() {\n  const a = state.diagnose" +
  ".answers || {};\n  state.diagnose.done = true;\n  let hint = \"Du kannst w\u00e4hlen. So" +
  "ft h\u00e4lt die 9. Hard braucht Ethik-Gate und R\u00fcckkehr.\";\n  if (a.lage === \"rache\")" +
  " {\n    hint = \"Rache erkennt das Feld. Soft: Stopp, Karma ohne Hass, Energie zur" +
  "\u00fcck. Hard nur mit klarem Preis.\";\n  } else if (a.lage === \"show\") {\n    hint = \"" +
  "Show ohne Not schw\u00e4cht. Weniger ist mehr. Dank oder Schutz reichen oft.\";\n  } el" +
  "se if (a.preis === \"nursoft\") {\n    hint = \"Gut. Bleib bei soft: Schutz, L\u00f6sung," +
  " Anziehung, Dank.\";\n  } else if (a.preis === \"unsicher\") {\n    hint = \"Dann noch" +
  " nicht setzen. Diagnose reicht. Sp\u00e4ter zur\u00fcck.\";\n  }\n  const chips = Object.entr" +
  "ies(a)\n    .filter(([k]) => k !== \"skipped\")\n    .map(([k, v]) => `<span class=\"" +
  "chip\">${esc(k)}: ${esc(v)}</span>`)\n    .join(\"\");\n  $(\"#view\").innerHTML = `\n  " +
  "  <section class=\"panel\">\n      <p class=\"eyebrow\">Diagnose</p>\n      <h1>Gelese" +
  "n</h1>\n      <div class=\"chips\">${chips || \"<span class='chip'>\u00fcbersprungen</spa" +
  "n>\"}</div>\n      <p class=\"lead\">${esc(hint)}</p>\n      <div class=\"stack\">\n    " +
  "    <button type=\"button\" class=\"btn primary\" id=\"to-list\">Zu den Ritualen</butt" +
  "on>\n        <button type=\"button\" class=\"btn ghost\" id=\"re-diag\">Diagnose neu</b" +
  "utton>\n      </div>\n    </section>`;\n  $(\"#to-list\").onclick = () => go(\"list\");" +
  "\n  $(\"#re-diag\").onclick = () => {\n    state.diagnose = { answers: {}, qi: 0 };\n" +
  "    go(\"diagnose\");\n  };\n}\n\n/* \u2014\u2014\u2014 Home / List \u2014\u2014\u2014 */\nfunction paintHome() {\n"
);
