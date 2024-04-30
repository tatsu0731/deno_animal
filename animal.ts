const animalName = prompt("動物の名前を入れろ！: ");
if (animalName === "アルパカ") {
    const animalArt = await Deno.readTextFile("animal/arupaka.md");
    console.log(animalArt);
} else if (animalName === "パンダ") {
    const animalArt = await Deno.readTextFile("animal/panda.md");
    console.log(animalArt);
} else if (animalName === "ゾウ") {
    const animalArt = await Deno.readTextFile("animal/zou.md");
    console.log(animalArt);
} else if (animalName === "イヌ") {
    const animalArt = await Deno.readTextFile("animal/snoopy.md");
    console.log(animalArt);
} else if (animalName === "ボブ") {
    const animalArt = await Deno.readTextFile("animal/bob.md");
    console.log(animalArt);
} else if (animalName === "アイス") {
    const animalArt = await Deno.readTextFile("animal/ice.md");
    console.log(animalArt);
}