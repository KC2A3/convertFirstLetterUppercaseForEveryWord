var sentence = 'good afternoon, mr mike.';
function firstUppercase() {
    var x = sentence.split(' ');//分割字符串
    for(var i=0;i<x.length;i++){
        var y = x[i].slice(0,1).toUpperCase();//截取首字母并转成大写
        var z = x[i].slice(1);//截取其余字母
        x[i]=y+z;//合并字母
    }
    var Uppercase = x.join(' ');//转换成字符串
    console.log(Uppercase);
}
firstUppercase(sentence);