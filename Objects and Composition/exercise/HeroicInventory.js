function solve(data) {
    let res = [];
    for (el of data) {
        let [heroName, heroLevel, heroItems] = el.split(" / ");
        let hero = {};
        hero.name = heroName;
        hero.level = Number(heroLevel);
        let heroItms = heroItems ? heroItems.split(", ") : [];
        hero.items = heroItms;
        res.push(hero);
    }

    console.log(JSON.stringify(res));
}


solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);