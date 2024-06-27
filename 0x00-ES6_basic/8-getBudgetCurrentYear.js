function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = getCurrentYear();

  return {
    [`income-${budget}`]: income,
    [`gdp-${budget}`]: gdp,
    [`capita-${budget}`]: capita
  };
}

