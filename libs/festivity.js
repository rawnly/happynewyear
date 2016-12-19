module.exports = (f) => {
  const festivities = require('./festivities');

  switch (f) {
    case 'christmas':
      var fest = festivities.christmas
      break;

    case 'newyear':
      var fest = festivities.newyear
      break;

    case 'epifany':
      var fest = festivities.epifany
      break;

    case 'valentines':
      var fest = festivities.valentines
      break;

    case 'halloween':
      var fest = festivities.halloween
      break;
  }
  return fest
}
