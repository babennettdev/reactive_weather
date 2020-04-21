function UnixTimestampToDate(unixTimestamp){
    
    const unixTimestampSeconds = unixTimestamp * 1000;
    let date = new Date(unixTimestampSeconds);
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const year = date.getFullYear();
    const month = months[(date.getMonth())];
    const day = date.getDate();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

     // Display date time in MM-dd-yyyy hh:mm:ss format
    const dateTime = month+'-'+day+'-'+year+' '+hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return dateTime;

}
export default UnixTimestampToDate;