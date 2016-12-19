module.exports = () => {
  var lMonth;

  // Get date
  var d = new Date();

  // Get month number
  // 0='January', 1='February' etc..
  var month = d.getMonth();

  // Assigning
  switch (month) {
    case 0:
      lMonth = 'January';
      break;

    case 1:
      lMonth = 'February';
      break;

    case 2:
      lMonth = 'March'
      break;

    case 3:
      lMonth = 'April';
      break;

    case 4:
      lMonth = 'May';
      break;

    case 5:
      lMonth = 'June';
      break;

    case 6:
      lMonth = 'July';
      break;

    case 7:
      lMonth = 'August';
      break;

    case 8:
      lMonth = 'September';
      break;

    case 9:
      lMonth = 'October';
      break;

    case 10:
      lMonth = 'November';
      break;

    case 11:
      lMonth = 'December';
      break;
  }

  return lMonth;
}
