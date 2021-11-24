export default function DateConvertor(str_postDate) {
    const now = new Date()
    var postDate = new Date(parseInt(str_postDate))
    var dateText = ""
    
    // console.log("NOW:", now)
    // console.log("Post:", postDate)

    var dateDiff = Math.floor((now.getTime()-postDate.getTime())/(1000*3600*24))
    
    if (dateDiff == 0) {
        // console.log("1")
        var hourDiff = Math.floor((now.getTime()-postDate.getTime())/(1000*3600))
        dateText = hourDiff + "시간 전"
    }
    else if (dateDiff < 8) {
    // else if (dateDiff < 5) {
        // console.log("2")
        dateText = dateDiff + "일 전"
    }
    else {
        dateText = dateFormat(postDate)
    }
    return dateText
}

function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '.' + month + '.' + day + '.'
}

