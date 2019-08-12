export function convertDate(inputFormat) {
    console.log('inputFormat',inputFormat)
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('/');
}

export function sortTime(list){
    return  list.sort(function (a, b) {
        return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
      });
}