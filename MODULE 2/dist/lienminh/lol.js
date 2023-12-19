"use strict";
class Character {
    constructor(id, name, damage, armor) {
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.armor = armor;
    }
}
class Champion extends Character {
    constructor(id, name, armor, damage, qSkill, eSkill, rSkill, wSkill) {
        super(id, name, armor, damage);
        this.qSkill = qSkill;
        this.eSkill = eSkill;
        this.rSkill = rSkill;
        this.wSkill = wSkill;
    }
    applyDamage(target) {
        return Math.max(0, this.damage - target.armor);
    }
    applySkillQ(target) {
        return Math.max(0, this.qSkill - target.armor);
    }
    applySkillW(target) {
        return Math.max(0, this.wSkill - target.armor);
    }
    applySkillE(target) {
        return Math.max(0, this.eSkill - target.armor);
    }
    applySkillR(target) {
        return Math.max(0, this.rSkill - target.armor);
    }
}
const championA = new Champion(1, "yasuo", 30, 40, 10, 15, 20, 25);
const championB = new Champion(2, "malphite", 15, 25, 12, 18, 22, 28);
console.log(championA);
console.log(championB);
const damageDealtByAtoB = championA.applyDamage(championB);
console.log(`Damage dealt by yasuo to malphite: ${damageDealtByAtoB}`);
