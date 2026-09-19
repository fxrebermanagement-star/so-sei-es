import { $, $$, esc, uid, fill, fmtWhen, hoursLeft } from "./util.js";
import {
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll
} from "./storage.js";
import { RITUALS, CAT_ORDER, ritualById } from "./rituals.js";
import p0 from "./src-0.js";
import p1 from "./src-1.js";
import p2 from "./src-2.js";

const b64 = p0 + p1 + p2;

async function boot() {
  const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const ds = new DecompressionStream("deflate-raw");
  const ab = await new Response(new Blob([bin]).stream().pipeThrough(ds)).arrayBuffer();
  const code = new TextDecoder().decode(ab);
  const run = new Function(
    "$", "$$", "esc", "uid", "fill", "fmtWhen", "hoursLeft",
    "loadChronik", "addChronik", "loadGabe", "saveGabe",
    "hardLockActive", "setHardLock", "exportAll", "importAll",
    "RITUALS", "CAT_ORDER", "ritualById",
    code
  );
  run(
    $, $$, esc, uid, fill, fmtWhen, hoursLeft,
    loadChronik, addChronik, loadGabe, saveGabe,
    hardLockActive, setHardLock, exportAll, importAll,
    RITUALS, CAT_ORDER, ritualById
  );
}
boot().catch((e) => {
  console.error(e);
  document.body.innerHTML = '<pre style="color:#f2e8d8;padding:1rem">Laden fehlgeschlagen. Bitte neu laden.</pre>';
});
