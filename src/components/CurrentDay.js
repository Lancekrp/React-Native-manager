const CurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day =  new Date();

  return daysOfWeek[day.getDay()];
};

export default CurrentDay;
