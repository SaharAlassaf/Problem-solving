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


const statusUser = (arr) => {
  let st = {};
  arr.forEach((item, i) => {
    if (item.status == "online" && item.lastActivity >= 10) {
      st.away =  []
      st.away.push(item.username);
    } else if (item.status == "offline") {
      st.offline =  []
      st.offline.push(item.username);
    } else {
      st.online =  []
      st.online.push(item.username);
    }
  });
  return st
};
