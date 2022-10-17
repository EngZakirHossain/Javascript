let day;

switch (new Date().getDay()) {
    default:
        day = "not Found";
        break
    case 0:
        day = "Saturday Sunday";
        break;
    case 1:
        day = "Sunday Monday";
        break;
    case 2:
        day = "Monday Tuesday";
        break;
    case 3:
        day = "Tuesday Wednesday";
        break;
    case 4:
        day = "Wednesday Thursday";
        break;
    case 5:
        day = "Thursday Friday";
        break;
    case 6:
        day = "Friday Saturday";
}
console.log(day)