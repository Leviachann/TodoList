function getDate() {
    const today = new Date();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[today.getMonth()]; 
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month} ${date}, ${year}`;
  }

export default getDate;