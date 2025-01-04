const profile = {
  username: 'Jacob',
  playTime: 300,

  /** @param {String} newName Нове ім’я */
  changeUsername(newName) {
    this.username = newName;
  },

  /** @param {Number} hours Кількість годин */
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  /** @returns {String} Повертає рядок формату `<username> has <playTime> active hours!`*/
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
