const a_day = " 9-2 9-4 9-9 9-11 9-15 9-17 9-21 9-23 9-25 9-30 10-2 10-6 10-8 10-12 10-14 10-16 10-20 10-22 10-26 10-28 10-30 11-4 11-6 11-10 11-13 11-17 11-19 11-23 11-25 12-1 12-3 12-7 12-9 12-11 12-15 12-17 12-21 12-23 1-5 1-7 1-11 1-13 1-15 1-20 1-22 1-26 1-28 2-1 2-3 2-5 2-9 2-11 2-16 2-18 2-22 2-24 2-26 3-2 3-4 3-8 3-10 3-12 3-16 3-18 3-22 3-24 3-26 4-6 4-8 4-12 4-14 4-16 4-20 4-22 4-26 4-28 4-30 5-5 5-7 5-11 5-14 5-18 5-20 5-24 5-26 5-28 6-2 6-4 6-8 6-10 ";
const document_title = ["Morning", "Advisory", "Transition", "1st", "Transition", "2nd", "Transition", "3rd", "Transition", "4th", "Transition", "5th", "Transition", "6th", "Transition", "7th", "Out"];
const next_event = ["Advisory Starts", "Advisory Ends", "First Period Starts", "First Period Ends","Second Period Starts", "Second Period Ends","Third Period Starts", "Third Period Ends","Fourth Period Starts", "Fourth Period Ends","Fifth Period Starts", "Fifth Period Ends","Sixth Period Starts", "Sixth Period Ends","Seventh Period Starts", "Seventh Period Ends"];
const schedules = [
    {
        id: "scheduleA",
        text: "Monday/Tuesday Regular Schedule",
        times: [8*60, 8*60+32, 8*60+37, 9*60+28, 9*60+33, 10*60+24, 10*60+29, 11*60+20, 11*60+25, 12*60+16, 12*60+21, 13*60+12, 13*60+17, 14*60+8, 14*60+13, 15*60+4],
        title: document_title,
        next_event: next_event
    }, 
    {
        id: "scheduleB",
        text: "Wednesday Delayed Opening Schedule",
        times: [9*60, 9*60+28, 9*60+33, 10*60+16, 10*60+21, 11*60+4, 11*60+9, 11*60+52, 11*60+57, 12*60+40, 12*60+45, 13*60+28, 13*60+33, 14*60+16, 14*60+21, 15*60+04],
        title: document_title,
        next_event: next_event        
    }, 
    {
        id: "scheduleC",
        text: "Thursday/Friday 1 Hour Advisory",
        times: [8*60, 9*60, 9*60+5, 9*60+52, 9*60+57, 10*60+44, 10*60+49, 11*60+36, 11*60+41, 12*60+28, 12*60+33, 13*60+20, 13*60+25, 14*60+12, 14*60+17, 15*60+4],
        title: document_title,
        next_event: next_event
    }, 
    {
        id: "scheduleD",
        text: "Delayed Opening",
        times: [10*60, 10*60+31, 10*60+36, 11*60+10, 11*60+15, 11*60+49, 11*60+54, 12*60+28, 12*60+33, 13*60+07, 13*60+12, 13*60+46, 13*60+51, 14*60+25, 14*60+30, 15*60+4],
        title: document_title,
        next_event: next_event
    }, 
    {
        id: "scheduleE",
        text: "Half Day",
        times: [8*60, 8*60+34, 8*60+39, 9*60+4, 9*60+09, 9*60+34, 9*60+39, 10*60+4, 10*60+9, 10*60+34, 10*60+39, 11*60+4, 11*60+9, 11*60+34, 11*60+39, 12*60+4],
        title: document_title,
        next_event: next_event
    }
];
var bell_on = false;
var flash = 0;
var current_schedule_index = 0;

var birthdays_today = [];

function get_my_td_id(j) {
    return get_td_id(current_schedule_index, j);
}

function get_td_id(i, j) {
        return "sched" + i + "class" + j;
}

function buildHTML() {
    let table = "<table>";
    table += "<thead>";
    table += "<tr>";
    table += "<th></th>";
    table += "<th>Advisory</th>";
    table += "<th>1<sup>st</sup> Period</th>";
    table += "<th>2<sup>nd</sup> Period</th>";
    table += "<th>3<sup>rd</sup> Period</th>";
    table += "<th>4<sup>th</sup> Period</th>";
    table += "<th>5<sup>th</sup> Period</th>";
    table += "<th>6<sup>th</sup> Period</th>";
    table += "<th>7<sup>th</sup> Period</th>";
    table += "</tr>";
    table += "</thead>";
    table += "<tbody>";
    for (let i = 0; i < schedules.length; i ++) {
        table += "<tr id='" + schedules[i].id + "' onclick = 'set_schedule(" + i + ");'>";
        table += "<th>" + schedules[i].text + "</th>";
        for (j = 0; j < schedules[i].times.length/2; j ++) {
            table += "<td id = '" + get_td_id(i, j) + "'>" + time_from_minutes(schedules[i].times[j*2]) + "-" + time_from_minutes(schedules[i].times[j*2+1]) + "</td>";
        }
        table += "</tr>";
    }
    table += "</tbody>";
    table += "</table>";
    document.getElementById('table_div').innerHTML = table;
}

function set_birthdaytext() {
	var slides = document.getElementsByClassName("bday");
	for (var i = 0; i < slides.length; i ++) {
		slides[i].style.z ++;
		if (slides[i].style.z >= slides.length) {
			slides[i].style.z = 0;
			slides[i].style.transform = 'rotate('+(10+Math.random()*30)+'deg)';
		}
		else {
			slides[i].style.transform = 'translateX(200px)';
		}
	}
}

function set_styles_bday() {
	var slides = document.getElementsByClassName("bday");
	for (var i = 0; i < slides.length; i ++) {
		slides[i].style.z = i;
		slides[i].style.transform = 'translateX(200px)';
	}
}

function build_birthdays() {
	var d = new Date();
	birthdays_today = [];
	const colors = ["red", "blue", "green"];
	bday_text = "";
	var found = 0;
	
	for (var i = 0; i < birthdays.length; i++) {
		var b_day = birthdays[i].split("/");
		if (d.getDate() == b_day[1] && (d.getMonth() + 1) == b_day[0]) {
			bday_text += "<div class='bday' style='background-color:"+colors[found%colors.length]+";'>Happy "+(d.getFullYear() - b_day[2])+"<sup>th</sup> Birthday<br>" + birthday_names[i]+"&#127874;</div>";
			found++;
		}
	}
	document.getElementById("birthday").innerHTML =
	bday_text;
	set_styles_bday();
}

function set_schedule(index) {

    for (i = 0; i < schedules[current_schedule_index].times.length; i++)
        document.getElementById(get_my_td_id(Math.floor(i/2))).className = "";            

    current_schedule_index = index;
    for (i = 0; i < schedules.length; i ++) {
        if (i == current_schedule_index)
            document.getElementById(schedules[i].id).className = "";
        else
            document.getElementById(schedules[i].id).className = "inactive";
    }
    settime();
}

function cleartime() {
    for (i = 0; i < periods.length; i++) {
        document.getElementById(classes[Math.floor(i/2)]).className = "";  
    }
}

function settime() {
    var now = new Date();
    var then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0);
    
    var seconds_since_midnight = Math.floor((now.getTime() - then.getTime()) / 1000); // difference in seconds
    var minutes_since_midnight = Math.floor((now.getTime() - then.getTime()) / (60 * 1000)); // difference in seconds
    
    var seconds = seconds_since_midnight % 60;
    var minutes = Math.floor(seconds_since_midnight / 60) % 60;
    var hours = Math.floor(seconds_since_midnight / (60 * 60));
        
    set_date();
    
	if (seconds % 3 == 0) set_birthdaytext();
	
    document.getElementById("message").innerHTML = "Schools Out";
    document.title = "Schools Out";
    document.getElementById("icon").href = "logo.jpg";

    for (i = 0; i < schedules[current_schedule_index].times.length; i++) {
        let index_time = schedules[current_schedule_index].times[i];
        if (index_time > minutes_since_midnight) {
            
            var hours_left = Math.floor((index_time - minutes_since_midnight) / 60);
            var minutes_left = (index_time - minutes_since_midnight) % 60 - 1;
            var seconds_left = 60 - seconds % 60;

            if (seconds_left == 60) {
                seconds_left = 0;
                minutes_left ++;
            }
            if (minutes_left < 0) {
                minutes_left += 60;
                hours_left --;
            }
                        
            if (seconds_left < 10) seconds_left = "0" + seconds_left;
            if (minutes_left < 10) minutes_left = "0" + minutes_left;

            document.getElementById("message").innerHTML = next_event[i] + " in " + hours_left + ":" + minutes_left + ":" + seconds_left;

            document.getElementById(get_my_td_id(Math.floor(i/2))).className = "active";

            document.title = hours_left + ":" + minutes_left + ":" + seconds_left + " " + schedules[current_schedule_index].title[i];

            var icons = ["red.png", "green.png"];
            flash ++;
            if (schedules[current_schedule_index].title[i] == "Transition") document.getElementById("icon").href = "blue.png";
            else {
                if (hours_left == 0 && minutes_left < 5)
                    document.getElementById("icon").href = icons[flash % icons.length];
                else    
                    document.getElementById("icon").href = "logo.jpg";
            }
            if (hours_left == 0 && minutes_left == 0 && seconds_left < 3) {
                playAudio();
            }
            else {
                //pauseAudio();
            }
            
            break;
        }
        else {
            document.getElementById(get_my_td_id(Math.floor(i/2))).className = "";            
        }
    }
}


function playAudio() { 
    var bell; 
    if (bell_on % 3 == 1)
        bell = document.getElementById("myAudio"); 
    else if (bell_on % 3 == 2)
        bell = document.getElementById("loudAudio"); 
    else return;
    
    bell.loop = false;
    bell.play(); 
} 

function pauseAudio() { 
    var bell; 
    bell = document.getElementById("myAudio"); 
    bell.pause(); 
}

function start_bell() {
    bell_on ++;
    if (bell_on % 3 == 1) {
        document.getElementById("audio_on").innerHTML = "Bell On";
        playAudio(); 
    }
    else if (bell_on % 3 == 2) {
        document.getElementById("audio_on").innerHTML = "Bell Loud";
        playAudio(); 
    }
    else {
        document.getElementById("audio_on").innerHTML = "Bell Off";
        pauseAudio();
    }
}

function set_date() {
    var d = new Date();
    var search_a_day = " " + (d.getMonth()+1) + "-" + d.getDate() + " ";
    var aDayString = "";//A-Day
    if (a_day.indexOf(search_a_day) == -1) aDayString = "";//B-Day
    
    var day=["Sunday, ", "<i>Meditation</i><br>Monday, ", "<i>Tune-Up</i><br>Tuesday, ", "<i>Winning</i><br>Wednesday, ", "<i>Think About It</i><br>Thursday, ", "<i>Feel Good</i><br>Friday, ", "Saturday, "];
    document.getElementById("date").innerHTML = day[d.getDay()] +""+ (d.getMonth() + 1) + "/" + d.getDate() + "<br><i>" + aDayString + "</i>";
}

function main() {
     var d = new Date();
     buildHTML();

    if (d.getDay() == 3) //wednesday
        set_schedule(1);
    else if (d.getDay() == 5) //friday
        set_schedule(2);
    else if (d.getDay() == 4) //thursday
        set_schedule(2);
    else
        set_schedule(0);
            
    settime();
	build_birthdays();
    var interval = setInterval(settime, 1000);
}

function time_from_minutes(time) {
    hours = Math.floor(time / 60) % 12;
    minutes = time % 60;
    if (hours == 0) hours = 12;
    if (minutes == 0) minutes = "00";
    else if (minutes < 10) minutes = "0" + minutes;
    return hours+":"+minutes;
}