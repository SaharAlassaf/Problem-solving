const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const statusUser = (friends) => {
  let status = {};
  let online = [];
  let offline = [];
  let away = [];
  friends.forEach((item, i) => {
    if (item.status == "online" && item.lastActivity <= 10) {
      online.push(item.username);
      status.online = online;
    } else if (item.status == "offline") {
      offline.push(item.username);
      status.offline = offline;
    } else {
      away.push(item.username);
      status.away = away;
    }
  });
  return status;
};
