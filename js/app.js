import { $, $$, esc, uid, fill, fmtWhen, hoursLeft } from "./util.js";
import {
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll
} from "./storage.js";
import { RITUALS, CAT_ORDER, ritualById } from "./rituals.js";
import b0 from "./b0.js";
import b1 from "./b1.js";
import b2 from "./b2.js";
import b3 from "./b3.js";
import b4 from "./b4.js";
import b5 from "./b5.js";
import b6 from "./b6.js";
import b7 from "./b7.js";
import b8 from "./b8.js";
import b9 from "./b9.js";
import b10 from "./b10.js";
import b11 from "./b11.js";
import b12 from "./b12.js";
import b13 from "./b13.js";
import b14 from "./b14.js";
import b15 from "./b15.js";
import b16 from "./b16.js";
import b17 from "./b17.js";
// atob() yields Latin-1 bytes; payloads are UTF-8 — decode once so umlauts stay correct
const src = new TextDecoder("utf-8").decode(
  Uint8Array.from(atob(b0+b1+b2+b3+b4+b5+b6+b7+b8+b9+b10+b11+b12+b13+b14+b15+b16+b17), (c) => c.charCodeAt(0))
);
new Function(
  "$", "$$", "esc", "uid", "fill", "fmtWhen", "hoursLeft",
  "loadChronik", "addChronik", "loadGabe", "saveGabe",
  "hardLockActive", "setHardLock", "exportAll", "importAll",
  "RITUALS", "CAT_ORDER", "ritualById",
  src
)(
  $, $$, esc, uid, fill, fmtWhen, hoursLeft,
  loadChronik, addChronik, loadGabe, saveGabe,
  hardLockActive, setHardLock, exportAll, importAll,
  RITUALS, CAT_ORDER, ritualById
);
