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
import r6 from "./raw-6.js";
import r7 from "./raw-7.js";
import r8 from "./raw-8.js";
import r9 from "./raw-9.js";

const code = r0 + r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9;
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
