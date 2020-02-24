//Class template
class Hero {
    constructor(name, hp, atk, def, spd) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spd= spd;
    }};

window.onload=function()
{
    const nameKey = document.getElementById("hname");
    const hpKey = document.getElementById("hp");
    const atkKey = document.getElementById("atk");
    const defKey = document.getElementById("def");
    const spdKey = document.getElementById("spd");
    const btnKey = document.getElementById("btn");
    const lsOutput = document.getElementById("output");

    document.getElementById("btn").addEventListener("click", function () {
        const fName = nameKey.value;
        const fHp = hpKey.value;
        const fAtk = atkKey.value;
        const fDef = defKey.value;
        const fSpd = spdKey.value;
        console.log(fName, fHp, fAtk, fDef, fSpd);

        if (fName && fHp && fAtk && fDef && fSpd){
            let hero = new Hero(fName,fHp,fAtk,fDef,fSpd);
            let hero1 = JSON.stringify(hero);
            localStorage.setItem(fName,hero1);
            location.reload();
        }
    })

    document.getElementById("clrBtn").addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

    for(let i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        lsOutput.innerHTML += `${key}: ${value}<br/>`
    }

};
