import { $, $$, esc, uid, fill, fmtWhen, hoursLeft } from "./util.js";
import {
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll
} from "./storage.js";
import { RITUALS, CAT_ORDER, ritualById } from "./rituals.js";
import p0 from "./app-0.js";
import p1 from "./app-1.js";
import p2 from "./app-2.js";
new Function(
  "$", "$$", "esc", "uid", "fill", "fmtWhen", "hoursLeft",
  "loadChronik", "addChronik", "loadGabe", "saveGabe",
  "hardLockActive", "setHardLock", "exportAll", "importAll",
  "RITUALS", "CAT_ORDER", "ritualById",
  p0 + p1 + p2
)(
  $, $$, esc, uid, fill, fmtWhen, hoursLeft,
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll,
  RITUALS, CAT_ORDER, ritualById
);
