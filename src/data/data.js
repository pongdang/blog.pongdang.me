let studyLog = [
  {
    name: "HTML",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "CSS",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "JavaScript",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "React",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
];

export function getStudyLog() {
  return studyLog;
}

export function getStudyLogItem(number) {
  return studyLog.find((studyLogItem) => studyLogItem.number === number);
}
