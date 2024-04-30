import $ from "https://deno.land/x/dax@0.39.2/mod.ts";
await $.sleep(100); // ms
const ice_1 = await Deno.readTextFile("ice/ice_1.md");
    console.log(ice_1);
await $.sleep(3000);
const ice_2 = await Deno.readTextFile("ice/ice_2.md");
    console.log(ice_2);