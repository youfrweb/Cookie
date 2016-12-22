function setCookie(name,value,iDay){
	/*当时间参数存在的时候*/
	if(iDay){
		/*设置过期时间*/
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+';path=/;expires='+oDate;
	}else{
		/*否者默认浏览器关闭过期*/
		document.cookie=name+'='+value+';path=/;';
	}
};
function getCookie(name){
	/*将获取到的字符串变成数组纯在arr中*/
	/*得到的数据格式是这样的a=11; b=12*/
	var arr=document.cookie.split('; '); 
	for (var i=0;i<arr.length;i++) {
		/*再拆分一次*/
		var arr2=arr[i].split('=');
		//判断arr2[0]是否是要读取的Cookie
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return '';
}
function removeCookie(name){
	/*当设置的时间小于0，就可以移除cookie*/
	setCookie(name,'任意值',-10);
}