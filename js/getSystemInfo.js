function getSystemInfo(){
    var device_type = navigator.userAgent;//获取userAgent信息  
    var md = new MobileDetect(device_type);//实例化mobile-detect  
    var os = md.os();//获取系统  
    var model = "";  
    if (os == "iOS") {//ios系统的处理  
        os = md.os() + md.version("iPhone");  
        model = md.mobile();  
    } else if (os == "AndroidOS") {//Android系统的处理  
        os = md.os() + md.version("Android");  
    }  
    console.log(os + "---" + model);//打印系统版本和手机型号  
    return "OS_"+JSON.stringify(os)+"- / -"+JSON.stringify(model)+"- / -"+JSON.stringify(md);
}