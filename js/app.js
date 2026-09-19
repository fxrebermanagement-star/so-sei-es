import { $, $$, esc, uid, fill, fmtWhen, hoursLeft } from "./util.js";
import {
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll
} from "./storage.js";
import { RITUALS, CAT_ORDER, ritualById } from "./rituals.js";
import r0 from "./raw-0.js";
import r1 from "./raw-1.js";
import r2 from "./raw-2.js";
import r3 from "./raw-3.js";
import r4 from "./raw-4.js";
import r5 from "./raw-5.js";

const code = r0 + r1 + r2 + r3 + r4 + r5;
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
