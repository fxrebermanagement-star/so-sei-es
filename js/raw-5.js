export default (
  "        <button type=\"button\" class=\"btn ghost\" id=\"import\">Einf\u00fcgen</button>\n      </div>\n      <te" +
  "xtarea id=\"backup\" class=\"backup\" placeholder=\"Backup JSON\"></textarea>\n    </section>`;\n  $(\"#expor" +
  "t\").onclick = () => {\n    $(\"#backup\").value = JSON.stringify(exportAll(), null, 2);\n  };\n  $(\"#impo" +
  "rt\").onclick = () => {\n    try {\n      importAll(JSON.parse($(\"#backup\").value));\n      alert(\"Impor" +
  "t ok.\");\n      paint();\n    } catch (err) {\n      alert(\"Import fehlgeschlagen.\");\n    }\n  };\n}\n\nfun" +
  "ction paintGabe() {\n  const g = loadGabe();\n  $(\"#view\").innerHTML = `\n    <section class=\"panel\">\n " +
  "     <p class=\"eyebrow\">Opfer \u00b7 Gabe</p>\n      <h1>Gabe</h1>\n      <p class=\"lead\">Was du dem Feld g" +
  "ibst \u2014 notieren. Lokal auf diesem Ger\u00e4t.</p>\n      <textarea id=\"gabe-text\" class=\"gabe\" rows=\"8\" pl" +
  "aceholder=\"Kerze, Salz, Dank, \u2026\">${esc(g.text || \"\")}</textarea>\n      <p class=\"sub\">${g.updated ? " +
  "\"Zuletzt: \" + esc(fmtWhen(g.updated)) : \"\"}</p>\n      <button type=\"button\" class=\"btn primary\" id=\"" +
  "save-gabe\">Speichern</button>\n    </section>`;\n  $(\"#save-gabe\").onclick = () => {\n    saveGabe($(\"#" +
  "gabe-text\").value);\n    paint();\n  };\n}\n\n/* \u2014\u2014\u2014 Paint router \u2014\u2014\u2014 */\nfunction paint() {\n  switch (sta" +
  "te.screen) {\n    case \"home\":\n      paintHome();\n      break;\n    case \"diagnose\":\n      paintDiagno" +
  "se();\n      break;\n    case \"list\":\n      paintList();\n      break;\n    case \"prep\":\n      paintPrep" +
  "();\n      break;\n    case \"run\":\n      paintRun();\n      break;\n    case \"enter\":\n      paintEnter()" +
  ";\n      break;\n    case \"after\":\n      paintAfter();\n      break;\n    case \"chronik\":\n      paintChr" +
  "onik();\n      break;\n    case \"gabe\":\n      paintGabe();\n      break;\n    default:\n      paintHome()" +
  ";\n  }\n}\n\nfunction boot() {\n  $(\"#app\").innerHTML = shell();\n  $(\"#btn-home\").onclick = () => go(\"hom" +
  "e\");\n  $$(\".nav-btn\").forEach((b) =>\n    b.addEventListener(\"click\", () => go(b.dataset.go))\n  );\n  " +
  "go(\"home\");\n  if (\"serviceWorker\" in navigator) {\n    navigator.serviceWorker.register(\"./sw.js\").ca" +
  "tch(() => {});\n  }\n}\n\nboot();\n"
);
