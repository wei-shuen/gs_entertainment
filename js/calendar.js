var date = new Date();

function createCalendar(calendarDiv){
			
	//存放要寫入的月曆格式(包含HTML CSS)
	var strCalendar = ""; 

	//存放每月的天數
	var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31); 

	//取得西元年 判斷閏年用
	var mYear = date.getFullYear(); 

	//西元年份尾數是四的倍數為閏年
	//西元年份尾數是百的倍數是平年  
	//西元年份尾數是四百的倍數是閏年  
	if(((mYear % 4 == 0) && (mYear % 100 != 0)) || (mYear % 400 == 0) ){ 
		monthDays[1] = 29;
	}

	//設定日期為該月的第一天
	date.setDate(1);

	//找出該月的第一天為星期幾
	var  firstDay = date.getDay();

	//計算印出來需要的格數
	var totalDays = monthDays[date.getMonth()] +  firstDay;
	var totalCells = totalDays + (totalDays % 7 ? (7 - totalDays % 7) : 0);

	strCalendar = '<table cellSpacing="1" cellPadding="0" align="center" width="400" bgcolor="transparent">' + 
				  '<tr>' + 
				  '<th>Sun</th>' + 
				  '<th>Mon</th>' + 
				  '<th>Tue</th>' + 
				  '<th>Wed</th>' + 
				  '<th>Thr</th>' + 
				  '<th>Fri</th>' + 
				  '<th>Sat</th>' + 
				  '</tr>';
	for(var  i = 0; i < totalCells; i++){
		if(i % 7 == 0){
			strCalendar += '<tr>';
		}
		if(i >= firstDay  && i < totalDays){
			if(i >= firstDay){
				var whichDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + ((i - firstDay) + 1);
				strCalendar += '<td align = "center">' + ((i - firstDay) + 1);
				strCalendar += '<input id="Identity" type="hidden" value="' + whichDate + '">';
			}
		}
		else{
			strCalendar += '<td>&nbsp;';
		}
		strCalendar += '</td>';

		if(i % 7 == 6){
			strCalendar += '</tr>';
		}
	}
	strCalendar += "</table>";
	document.getElementById(calendarDiv).innerHTML = strCalendar;
}


function init(){
	createCalendar("calendar");
}

window.onload = init;