const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow: newVarOfTomorrow} = HIGH_TEMPERATURES;
  
  console.log(today, newVarOfTomorrow);

  console.log(yesterday);