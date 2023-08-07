export const formatDate = (dateString, showTime = false ) => {
    const date = new Date(dateString);
    let result = "" + (date.getDate() > 9 ? '' : '0') + date.getDate()+ "/" +  ((date.getMonth() + 1) > 9 ? '' : '0') + (date.getMonth() + 1) + "/" + date.getFullYear();
    result += showTime ? " à " + (date.getHours() > 9 ? '' : '0') + date.getHours() + ":" + (date.getMinutes() > 9 ? '' : '0') + date.getMinutes() : "";
    return isNaN(result) ? result : "";
}