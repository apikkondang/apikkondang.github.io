var months = ['Jan', 'Feb', 'Mart', 'April', 'Mei', 'Jun', 'Jul', 'Agst', 'Sep', 'Okt', 'Nov', 'Des'];
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay(),
    thisDay = myDays[thisDay];
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;

let urlParamsObject = new URLSearchParams(window.location.search)
let urlParamsString = urlParamsObject.toString() 
    let linkuntuk = urlParamsObject.get('linkuntuk')
    let lang = urlParamsObject.get('lang')
    let pixel = urlParamsObject.get('pixel')
    let img = urlParamsObject.get('subacc')
    let account = urlParamsObject.get('subacc2')
    let adcopy = urlParamsObject.get('subacc3')
    let lander = urlParamsObject.get('subacc4')
    //let subacc5 = 'Nama-Orang' --> Karyawan sGaji
    var tanggal = thisDay+'-'+day+'-'+months[month]+'-'+year;
    var plp = 'plpcode'
    var parameter = '?'+'linkuntuk='+linkuntuk+'&pixel='+pixel+'&lang='+lang+'&subacc='+img+'&subacc2='+account+'&subacc3='+adcopy+'&subacc4='+lander+'&subacc6='+tanggal+'&plp=Lawas-duet-'+plp;
    var linkuntukindividu = linktrack+parameter;