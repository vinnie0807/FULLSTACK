
import { name } from "./namemodules.js";
import Name from "./defaultmodule.js";
import { getName } from "./namemodules.js";

console.log("This defaultexport: "+Name);
console.log("This is named export: "+name);
console.log(getName());