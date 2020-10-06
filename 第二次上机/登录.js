window.οnlοad=function(){}
function realSysTime(clock){
    var now=new Date();			//创建Date对象
    var year=now.getFullYear();	//获取年份
    var month=now.getMonth();	//获取月份
    var date=now.getDate();		//获取日期
    var day=now.getDay();		//获取星期
    var hour=now.getHours();	//获取小时
    var minu=now.getMinutes();	//获取分钟
    var sec=now.getSeconds();	//获取秒钟
    month=month+1;
    var arr_week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    var week=arr_week[day];		//获取中文的星期
    var time=year+"年"+month+"月"+date+"日 "+week+" "+hour+":"+minu+":"+sec;	//组合系统时间
    clock.innerHTML=time;	//显示系统时间
}
window.onload=function(){
    window.setInterval("realSysTime(clock)",1000);	//实时获取并显示系统时间
}
function checkUsername(){
    var username= myform.username;
    var usernameInfo = document.getElementById("usernameInfo");
    if(username.value == "") {
        usernameInfo.innerHTML="请输入用户名";
        usernameInfo.display = "block";
        username.focus();
        return false;
    } else {
        usernameInfo.innerHTML = "";
        usernameInfo.display = "none";
        return true;
    }
}

function checkPassword(){
    var password= myform.password;
    var passwordInfo = document.getElementById("passwordInfo");
    if(password.value == "") {
        passwordInfo.innerHTML="请输入密码";
        passwordInfo.display = "block";
        password.focus();
        return false;
    } else {
        passwordInfo.innerHTML = "";
        passwordInfo.display = "none";
        return true;
    }
}

function checkImageCode(){
    var imageCode= myform.imageCode;
    var imageCodeInfo = document.getElementById("imageCodeInfo");
    if(imageCode.value == "") {
        imageCodeInfo.innerHTML="请输入验证码";
        imageCodeInfo.display = "block";
        imageCode.focus();
        return false;
    } else if (imageCode.value !="110y"){
        imageCodeInfo.innerHTML = "验证码错误";
        imageCodeInfo.display = "block";
        imageCode.focus();
        return false;
    }else {
        imageCodeInfo.innerHTML = "";
        imageCodeInfo.display = "none";
        return true;
    }
}

function checkLogin(){
    if(checkUsername() && checkPassword() && checkImageCode()){
          alert('登录成功');
        return true;
    }
    return false;
}
