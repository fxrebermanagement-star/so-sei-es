export default (
  "  $(\"#btn-home\").onclick = () => go(\"home\");\n  $$(\".nav-btn\").forEach((b) =>\n   " +
  " b.addEventListener(\"click\", () => go(b.dataset.go))\n  );\n  go(\"home\");\n  if (\"s" +
  "erviceWorker\" in navigator) {\n    navigator.serviceWorker.register(\"./sw.js\").ca" +
  "tch(() => {});\n  }\n}\n\nboot();\n"
);
