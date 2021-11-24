let sloveLog = [
  {
    name: "Level 1",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Level 2",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  // {
  //   name: "Java3Script",
  //   number: 2003,
  //   amount: "$9,500",
  //   due: "07/22/2003",
  // },
  // {
  //   name: "React4",
  //   number: 1997,
  //   amount: "$14,000",
  //   due: "09/01/1997",
  // },
];

export function getSloveLog() {
  return sloveLog;
}

export function getSloveLogItem(number) {
  return sloveLog.find((sloveLogItem) => sloveLogItem.number === number);
}
