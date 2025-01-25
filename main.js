const users = [
  {
    name: "John",
    balance: 23000,
    friends: ["Mikel", "Masha", "Traisy"],
    skils: ["JS", "HTML", "CSS"],
  },
  {
    name: "Mikel",
    balance: 54000,
    friends: ["Mikel", "Ivan", "Ina"],
    skils: ["php", "python"],
  },
  {
    name: "Dima",
    balance: 53200,
    friends: ["Mikel", "Masha"],
    skils: ["HTML", "CSS"],
  },
  {
    name: "Oleksandr",
    balance: 67000,
    friends: ["Masha", "Traisy"],
    skils: ["node.js", "React", "JS"],
  },
];

// 1 завдання
const totalBalance = users.reduce(
  (accumulator, user) => accumulator + user.balance,
  0
);
console.log(`(1 завдання)Загальна сума балансу коритувачів: ${totalBalance}`);

// 2 завдання
//Я трохи не зрозумів як виконувати це завдання, але спробував так:
const specifiedFriendName = "Mikel";
const userNamesWithFriend = users
  .filter((user) => user.friends.includes(specifiedFriendName))
  .map((user) => user.name);
console.log(
  `Користувачі, які мають друга з ім'ям ${specifiedFriendName} : ${userNamesWithFriend}`
);

//  3 завдання
const sortedUsersByFriendsCount = users
  .sort((a, b) => b.friends.length - a.friends.length)
  .map((user) => user.name);
console.log(
  `Відсортовано користувачів за кількістю друзів: ${sortedUsersByFriendsCount}`
);

//4 завдання

const allSkills = users
  .flatMap(user => user.skils) 
  .filter((skill, index, self) => self.indexOf(skill) === index)
  .sort();
console.log(allSkills);