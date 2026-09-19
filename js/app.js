import { $, $$, esc, uid, fill, fmtWhen, hoursLeft } from "./util.js";
import {
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll
} from "./storage.js";
import { RITUALS, CAT_ORDER, ritualById } from "./rituals.js";
import p0_0 from "./p0_0.js";
import p0_1 from "./p0_1.js";
import p0_2 from "./p0_2.js";
import p1_0 from "./p1_0.js";
import p1_1 from "./p1_1.js";
import p1_2 from "./p1_2.js";
import p2_0 from "./p2_0.js";
import p2_1 from "./p2_1.js";
import p2_2 from "./p2_2.js";
import p3_0 from "./p3_0.js";
import p3_1 from "./p3_1.js";
import p3_2 from "./p3_2.js";
new Function(
  "$", "$$", "esc", "uid", "fill", "fmtWhen", "hoursLeft",
  "loadChronik", "addChronik", "loadGabe", "saveGabe",
  "hardLockActive", "setHardLock", "exportAll", "importAll",
  "RITUALS", "CAT_ORDER", "ritualById",
  (p0_0+p0_1+p0_2)+(p1_0+p1_1+p1_2)+(p2_0+p2_1+p2_2)+(p3_0+p3_1+p3_2)
)(
  $, $$, esc, uid, fill, fmtWhen, hoursLeft,
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll,
  RITUALS, CAT_ORDER, ritualById
);
