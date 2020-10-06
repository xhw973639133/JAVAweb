function del_sure(){ 
    var gnl=confirm("你真的确定要删除吗?"); 
    if (gnl==true){ 
    return true; 
    } 
    else{ 
    return false; 
    } 
    } 
    window.onload = function(){
        var float=document.getElementById('float');
        var stepx=2; 
        var stepy=2;
        var x=0;
        var y=0;
    
        function move(){
            if(document.documentElement.clientWidth - float.offsetWidth < x || x < 0){
                stepx=-stepx;
            }
    
            if(document.documentElement.clientHeight - float.offsetHeight < y || y < 0){
                stepy=-stepy;
            }
    
            x = float.offsetLeft+stepx;
            y = float.offsetTop+stepy;
    
            float.style.left = x + 'px';
            float.style.top = y + 'px';
        }
    
        var timer = setInterval(move, 100);
    
        float.onmouseover = function(){
            clearInterval(timer);
        }
    
        float.onmouseout = function(){
            timer = setInterval(move, 100);
        }
    }