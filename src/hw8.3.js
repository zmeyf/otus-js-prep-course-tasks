
const whoIsYounger = function(user1, user2) {
const [day1, month1, year1] = user1.split('.');
const [day2, month2, year2] = user2.split('.');
const user1Birthday = new Date(`${year1}-${month1}-${day1}`)
const user2Birthday = new Date(`${year2}-${month2}-${day2}`)
if ((user1Birthday).getTime() === (user2Birthday).getTime()) {
    console.log('Nobody is younger');
} else if ((user1Birthday).getTime() < (user2Birthday).getTime()) {
    console.log('User2 is younger.')
} else {
    console.log('User1 is younger.');
}
}

module.exports = whoIsYounger;
