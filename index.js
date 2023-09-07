const names = [
    'Anna',
    'Benjamin',
    'Cartman',
    'Devon',
    'Eisa',
    'Filip',
    'Greg',
    'Haydyn',
    'Irvin',
    'Jacky',
    'Kyle',
    'Lee',
    'Markus',
    'Norrie',
    'Oscar',
    'Randy',
    'Quinn',
    'Stan',
    'Taylor',
    'Umma',
    'Vincent',
    'Wade Wilson',
    'Xin',
    'Zhong',
  ],
  sites = ['yhh', 'jvl', 'suv', 'psp', 'der', 'usz'],
  countries = ['us', 'ro', 'jp', 'eu', 'fr', 'md'],
  leagues = ['silver', 'gold', 'diamond', 'legend'],
  messages = [
    'Discovering new ways of making you wait.',
    'Your time is very important to us. Please wait while we ignore you.',
    'Still faster than Windows update.',
    'We are not liable for any broken screens as a result of waiting.',
    'Bored of slow loading spinner?, buy more RAM!',
    'Kindly hold on until I finish a cup of coffee.',
    'We will be back in 1/0 minutes.',
    "Why don't you order a sandwich?",
    "Don't panic, Just count to infinite.",
    'Please wait, Your PC is not a superman!',
    'Counting backwards from Infinity',
    "Don't worry - a few bits tried to escape, but we caught them",
    'The server is powered by a lemon and two electrodes.',
    "We're testing your patience",
    'As if you had any other choice',
    'Follow the white rabbit',
    "It's not you. It's me.",
    'Creating time-loop inversion field',
    "Don't break your screen yet!<br/>I swear it's almost done.",
    'Unicorns are at the end of this road, I promise.',
    "Time flies when you're having fun.",
    'Get some coffee and come back in ten minutes..',
    'Convincing AI not to turn evil..',
    'Java developers never RIP. They just get Garbage Collected.',
    'Cracking military-grade encryption...',
    'BRB, working on my side project',
    "Chuck Norris once urinated in a semi truck's gas tank as a joke....that truck is now known as Optimus Prime.",
    "Chuck Norris doesn't wear a watch. HE decides what time it is.",
    'Mining some bitcoins...',
    'Downloading more RAM..',
    "Never let a computer know you're in a hurry.",
    'Deleting all your hidden porn...',
    'Still faster than Windows update',
    'Please wait while we serve other customers...',
    'Our premium plan is faster',
  ];

function randomID(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; ++i)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));

  return parseFloat(result);
}

function randomDate() {
  const start = new Date('10/10/2018 23:45'),
    end = new Date('12/07/2022 00:10');
  const diff = end.getTime() - start.getTime();
  const new_diff = diff * Math.random();
  return new Date(start.getTime() + new_diff);
}

function randomBool(chance) {
  return Math.random() < chance;
}

function randomEntry(array) {
  return array[Math.floor(Math.random() * array.length)];
}

class Message {
  constructor(id) {
    this.id = id;
    this.message = randomEntry(messages);
    this.site = randomEntry(sites);
    this.user = randomEntry(names);
    this.msgID = randomID(7);
    this.stamp = randomDate().getTime();
    this.comment = randomEntry(messages);
    this.error = randomBool(0.1)
      ? [
          `{\"error\":\"Forbidden\",\"data\":[],\"serverTime\":\"${randomDate().toISOString()}\"}`,
        ]
      : null;
  }
}

class User {
  constructor(id) {
    this.id = id;
    this.url = `https://picsum.photos/100/100?random=${parseInt(
      Math.random() * 250 + 1
    )}`;
    this.country = randomEntry(countries);
    this.points = parseInt(Math.random() * 100000);
    this.isGold = randomBool(0.5);
    this.stamp = randomDate().getTime();
    this.ranking = {
      league: randomEntry(leagues),
      level: parseInt(Math.random() * 100 + 1),
    };
    this.name = names[Math.floor(Math.random() * names.length)];
  }
}

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
const user4 = new User(4);
const user5 = new User(5);
const user6 = new User(6);
const message1 = new Message(1);
const message2 = new Message(2);
const message3 = new Message(3);
const message4 = new Message(4);
const message5 = new Message(5);
const message6 = new Message(6);
const message7 = new Message(1);
const message8 = new Message(2);
const message9 = new Message(3);
const message10 = new Message(4);
const message11 = new Message(5);
const message12 = new Message(6);
const message13 = new Message(1);
const message14 = new Message(2);
const message15 = new Message(3);
const message16 = new Message(4);
const message17 = new Message(5);
const message18 = new Message(6);
const message19 = new Message(1);
const message20 = new Message(2);
const message21 = new Message(3);

const users = [user1, user2, user3, user4, user5, user6];
const message = [
  message1,
  message2,
  message3,
  message4,
  message5,
  message6,
  message7,
  message8,
  message9,
  message10,
  message11,
  message12,
  message13,
  message14,
  message15,
  message16,
  message17,
  message18,
  message19,
  message20,
  message21,
];

$(document).ready(function () {
  var table = new DataTable('#example', {
    data: message,
    select: 'single',
    columns: [
      {
        data: 'id',
        visible: false,
        searchable: false,
      },
      {
        data: (data, type) => {
          if (type === 'display') {
            return new Date(data.stamp).toDateString();
          }
          return data;
        },
      },
      {
        data: (data, type) => {
          const user = users.filter((user) => user.id === data.id);
          if (type === 'display') {
            return user[0]['name'];
          }
          return data;
        },
      },
      {
        data: (data, type) => {
          const user = users.filter((user) => user.id === data.id);
          if (type === 'display') {
            return user[0]['ranking']['level'];
          }
          return data;
        },
      },
      { data: 'site' },
      { data: 'user' },
      { data: 'message' },
      { data: 'comment' },
      { data: 'error' },
    ],
    responsive: {
      details: {
        display: DataTable.Responsive.display.modal({
          header: function (row) {
            let data = row.data();
            const user = users.filter((user) => user.id === data.id);
            return `Details for ${user[0].name}  ${data['user']}`;
          },
        }),
        renderer: function (api, rowIdx, columns) {
          const user = users.filter(
            (user) => user.id === (columns[0].title === 'ID' && columns[0].data)
          )[0];
          for (let key in user) {
            columns.push({
              className: '',
              columnIndex: columns.length + 1,
              data: user[key],
              hidden: false,
              rowIndex: [0],
              title: `User.${key}`,
            });
          }

          let data = $.map(columns, function (col, i) {
            if (col.columnIndex === 8) {
              if (col.data !== '') col.data = col.data[0];
            }
            if (col.columnIndex === 15) {
              if (col.data !== '') col.data = new Date(col.data).toDateString();
            }
            if (col.columnIndex === 16) {
              if (typeof col.data === 'object') col.data = col.data['league'];
              col.title = 'User.ranking.league';
            }
            return (
              '<tr data-dt-row="' +
              col.rowIndex +
              '" data-dt-column="' +
              col.columnIndex +
              '">' +
              '<td>' +
              col.title +
              ':' +
              '</td> ' +
              '<td>' +
              col.data +
              '</td>' +
              '</tr>'
            );
          }).join('');

          return data ? $('<table/>').append(data) : false;
        },
      },
    },
    order: [[1, 'asc']],
  });
});
