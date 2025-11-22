import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Upgrade } from '../../model/UpgradeCokkie';
import { Achievement } from '../../model/Achievement';

@Injectable({
  providedIn: 'root',
})

export class CokkieService {

  public static readonly UpgradeList: Upgrade[] = [
    new Upgrade("Variables", 1, "", 15, 0),
    new Upgrade("Funciones", 5, "", 100, 0),
    new Upgrade("Clases", 10, "", 500, 0),
    new Upgrade("Frameworks", 20, "", 2000, 0),
    new Upgrade("APIs", 50, "", 7000, 0),
    new Upgrade("Compiladores", 100, "", 50000, 0),
    new Upgrade("Servidores", 500, "", 1000000, 0),
    new Upgrade("Clusters", 1000, "", 123456789, 0),
    new Upgrade("Cloud Computing", 5000, "", 999999999, 0),
    new Upgrade("IA/ML Models", 10000, "", 9999999999, 0),
    // Click bonus upgrades
    new Upgrade("Autocompletado", 0, "", 50, 1),
    new Upgrade("Snippets", 0, "", 500, 5),
    new Upgrade("Copilot", 0, "", 5000, 10),
  ];

  private cokies: BehaviorSubject<number>;
  private cokiesPerSeconth: BehaviorSubject<number>;
  private upgrades: BehaviorSubject<Map<Upgrade, number>>;
  private clickMultiplier: BehaviorSubject<number>;
  private achievements: BehaviorSubject<Achievement[]>;

  private cookies$;
  private cokiesPerSeconth$;
  private clickMultiplier$;
  private achievements$;
  private autoIncrementInterval: any;
  private autoSaveInterval: any;
  private readonly SAVE_KEY = 'codeClickerSave';

  private achievementsList: Achievement[] = this.generateAchievements();

  private generateAchievements(): Achievement[] {
    const achievements: Achievement[] = [];
    const emojis = ['🎯', '💻', '🚀', '⭐', '🏆', '💎', '🔥', '⚡', '🌟', '✨', '🎨', '🎭', '🎪', '🎬', '🎤', '🎧', '🎮', '🎲', '🎯', '🎰'];

    // Códigos totales (50 logros)
    for (let i = 0; i < 50; i++) {
      const target = Math.pow(10, Math.floor(i / 10)) * ((i % 10) + 1);
      achievements.push(new Achievement(
        `codes_${i}`,
        `${target} Códigos`,
        `Alcanza ${target} códigos totales`,
        emojis[i % emojis.length],
        () => this.cokies.value >= target
      ));
    }

    // Códigos por segundo (40 logros)
    for (let i = 0; i < 40; i++) {
      const target = Math.pow(10, Math.floor(i / 8)) * ((i % 8) + 1);
      achievements.push(new Achievement(
        `cps_${i}`,
        `${target}/s`,
        `Genera ${target} códigos por segundo`,
        '⚡',
        () => this.cokiesPerSeconth.value >= target
      ));
    }

    // Total de mejoras compradas (30 logros)
    for (let i = 0; i < 30; i++) {
      const target = (i + 1) * 5;
      achievements.push(new Achievement(
        `total_upgrades_${i}`,
        `${target} Mejoras`,
        `Compra ${target} mejoras en total`,
        '📦',
        () => this.getTotalUpgrades() >= target
      ));
    }

    // Mejoras específicas por tipo (60 logros - 6 tipos x 10 niveles)
    const upgradeTypes = ['Variables', 'Funciones', 'Clases', 'Frameworks', 'APIs', 'Compiladores'];
    upgradeTypes.forEach((type, typeIndex) => {
      for (let i = 0; i < 10; i++) {
        const target = i + 1;
        achievements.push(new Achievement(
          `upgrade_${type}_${i}`,
          `${type} x${target}`,
          `Compra ${target} ${type}`,
          ['🔤', '⚙️', '📚', '🌐', '🔌', '🛠️'][typeIndex],
          () => this.getUpgradeCountByName(type) >= target
        ));
      }
    });

    // Click multiplier (20 logros)
    for (let i = 0; i < 20; i++) {
      const target = (i + 1) * 10;
      achievements.push(new Achievement(
        `click_mult_${i}`,
        `Click x${target}`,
        `Alcanza ${target} de multiplicador de click`,
        '👆',
        () => this.clickMultiplier.value >= target
      ));
    }

    return achievements;
  }

  constructor() {
    this.cokies = new BehaviorSubject<number>(0);
    this.cokiesPerSeconth = new BehaviorSubject<number>(0);
    this.clickMultiplier = new BehaviorSubject<number>(1);

    let map = new Map<Upgrade, number>();
    CokkieService.UpgradeList.forEach(upgrade => {
      map.set(upgrade, 0);
    });

    this.upgrades = new BehaviorSubject<Map<Upgrade, number>>(map);
    this.achievements = new BehaviorSubject<Achievement[]>(this.achievementsList);

    this.cookies$ = this.cokies.asObservable();
    this.cokiesPerSeconth$ = this.cokiesPerSeconth.asObservable();
    this.clickMultiplier$ = this.clickMultiplier.asObservable();
    this.achievements$ = this.achievements.asObservable();

    // Load saved game
    this.loadGame();

    // Start auto-increment timer
    this.startAutoIncrement();

    // Start auto-save timer (every 30 seconds)
    this.startAutoSave();

    // Start achievement checking
    this.startAchievementCheck();
  }

  async push() {
    this.cokies.next(this.cokies.value + this.clickMultiplier.value);
  }

  getCokies$(): Observable<number> {
    return this.cookies$;
  }

  getCokkiesPerSecoth(): Observable<number> {
    return this.cokiesPerSeconth$;
  }

  getClickMultiplier$(): Observable<number> {
    return this.clickMultiplier$;
  }

  getAchievements$(): Observable<Achievement[]> {
    return this.achievements$;
  }

  private startAutoIncrement() {
    this.autoIncrementInterval = setInterval(() => {
      if (this.cokiesPerSeconth.value > 0) {
        this.cokies.next(this.cokies.value + this.cokiesPerSeconth.value);
      }
    }, 1000);
  }

  private calculateCodesPerSecond(): number {
    let total = 0;
    this.upgrades.value.forEach((count, upgrade) => {
      total += upgrade.cokPerSec * count;
    });
    return total;
  }

  private calculateClickMultiplier(): number {
    let total = 1; // Base click value
    this.upgrades.value.forEach((count, upgrade) => {
      total += upgrade.clickBonus * count;
    });
    return total;
  }

  private recalculateCodesPerSecond() {
    const newValue = this.calculateCodesPerSecond();
    this.cokiesPerSeconth.next(newValue);
  }

  private recalculateClickMultiplier() {
    const newValue = this.calculateClickMultiplier();
    this.clickMultiplier.next(newValue);
  }

  getUpgrades(): Map<Upgrade, number> {
    return new Map(this.upgrades.value);
  }

  purchaseUpgrade(upgrade: Upgrade): boolean {
    // Check if user has enough codes
    if (this.cokies.value < upgrade.cost) {
      return false;
    }

    const current = this.upgrades.value;
    let existingKey: Upgrade | undefined;

    current.forEach((value, key) => {
      if (key.name === upgrade.name) {
        existingKey = key;
      }
    });

    if (existingKey) {
      // Deduct cost
      this.cokies.next(this.cokies.value - upgrade.cost);

      // Add upgrade
      const currentValue = current.get(existingKey) ?? 0;
      current.set(existingKey, currentValue + 1);

      this.upgrades.next(new Map(current));

      // Recalculate codes per second and click multiplier
      this.recalculateCodesPerSecond();
      this.recalculateClickMultiplier();

      return true;
    }

    return false;
  }

  canAfford(upgrade: Upgrade): boolean {
    return this.cokies.value >= upgrade.cost;
  }

  getUpgradeNumber(u: Upgrade): number {
    const current = this.upgrades.value;

    let foundValue: number | undefined;

    current.forEach((value, key) => {
      if (key.name === u.name) {
        foundValue = value;
      }
    });

    if (foundValue !== undefined) {
      return foundValue;
    }

    return -1;
  }

  // Helper methods for achievements
  private getTotalUpgrades(): number {
    let total = 0;
    this.upgrades.value.forEach((count) => {
      total += count;
    });
    return total;
  }

  private getUpgradeCountByName(name: string): number {
    let count = 0;
    this.upgrades.value.forEach((value, upgrade) => {
      if (upgrade.name === name) {
        count = value;
      }
    });
    return count;
  }

  private startAchievementCheck() {
    // Check achievements every 2 seconds
    setInterval(() => {
      this.checkAchievements();
    }, 2000);
  }

  private checkAchievements() {
    const updated = this.achievements.value.map(achievement => {
      if (!achievement.unlocked && achievement.requirement()) {
        achievement.unlocked = true;
      }
      return achievement;
    });
    this.achievements.next(updated);
  }

  // LocalStorage Methods
  private saveGame() {
    try {
      const upgradesArray: Array<{ name: string, count: number }> = [];
      this.upgrades.value.forEach((count, upgrade) => {
        upgradesArray.push({ name: upgrade.name, count });
      });

      const saveData = {
        codes: this.cokies.value,
        codesPerSecond: this.cokiesPerSeconth.value,
        upgrades: upgradesArray,
        timestamp: Date.now()
      };

      localStorage.setItem(this.SAVE_KEY, JSON.stringify(saveData));
    } catch (error) {
      console.error('Error saving game:', error);
    }
  }

  private loadGame() {
    try {
      const savedData = localStorage.getItem(this.SAVE_KEY);
      if (!savedData) return;

      const data = JSON.parse(savedData);

      // Restore codes
      this.cokies.next(data.codes || 0);

      // Restore upgrades
      if (data.upgrades && Array.isArray(data.upgrades)) {
        const newMap = new Map<Upgrade, number>();

        CokkieService.UpgradeList.forEach(upgrade => {
          const saved = data.upgrades.find((u: any) => u.name === upgrade.name);
          newMap.set(upgrade, saved ? saved.count : 0);
        });

        this.upgrades.next(newMap);
        this.recalculateCodesPerSecond();
      }
    } catch (error) {
      console.error('Error loading game:', error);
    }
  }

  private startAutoSave() {
    this.autoSaveInterval = setInterval(() => {
      this.saveGame();
    }, 30000); // Save every 30 seconds
  }

  resetGame() {
    localStorage.removeItem(this.SAVE_KEY);
    this.cokies.next(0);

    const newMap = new Map<Upgrade, number>();
    CokkieService.UpgradeList.forEach(upgrade => {
      newMap.set(upgrade, 0);
    });
    this.upgrades.next(newMap);
    this.recalculateCodesPerSecond();
  }

}
