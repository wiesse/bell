<html>
    <head>
        <link id = "icon" rel="shortcut icon" href="red.png">  
        <link rel="stylesheet" type = "text/css" href="bell.css?v=18">
        <link rel="stylesheet" type = "text/css" href="holiday?v=2.css">
        <title>Bell Schedule</title>
    </head>
    <body onload = "main();">
        <div id="main_page">
        <div id="flex">
            <div id="logo"><img src="white_logo.png"></div>
            <div id="date">Date</div>
            <div id="calendarLink"><a href="https://calendar.google.com/calendar/ical/c_jqklkgt4mu0sn4jn1v4mvkmfts%40group.calendar.google.com/public/basic.ics">Calendar Link with Alerts</a></div>
            <div id="audio_on" onclick="start_bell();">Turn on the Bell</div>
            <audio id="myAudio">
                <source src="sounds/bell.wav" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <audio id="loudAudio">
                <source src="sounds/bell2.wav" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
		
        <div id="birthday">
            Birthday Box		
        </div>

        <div id="message">
            Loading...
        </div>
        <div class="table_div">
            <table>
                <thead>
                    <!--<tr>
                        <th></th>
                        <th>Advisory</th>
                        <th>Black History Month Symposium Video</th>
                        <th>Session 1</th>
                        <th>Session 2</th>
                        <th>7<sup>th</sup> Period</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>-->
                    
                    <tr>
                        <th></th>
                        <th>Advisory</th>
                        <th>1<sup>st</sup> Period</th>
                        <th>2<sup>nd</sup> Period</th>
                        <th>3<sup>rd</sup> Period</th>
                        <th>4<sup>th</sup> Period</th>
                        <th>5<sup>th</sup> Period</th>
                        <th>6<sup>th</sup> Period</th>
                        <th>7<sup>th</sup> Period</th>
                    </tr>

                </thead>
                <tbody>
                    <tr id="scheduleA" onclick = "set_schedule(0);">
                        <th>Monday/Tuesday Regular Schedule</th>
                        <td id = "advA"></td>
                        <td id = "oneA"></td>
                        <td id = "twoA"></td>
                        <td id = "threeA"></td>
                        <td id = "fourA"></td>
                        <td id = "fiveA"></td>
                        <td id = "sixA"></td>
                        <td id = "sevenA"></td>
                    </tr>
                    <tr id="scheduleE" onclick = "set_schedule(3);">
                        <th>Wednesday Delayed Opening Schedule</th>
                        <td id = "advE"></td>
                        <td id = "oneE"></td>
                        <td id = "twoE"></td>
                        <td id = "threeE"></td>
                        <td id = "fourE"></td>
                        <td id = "fiveE"></td>
                        <td id = "sixE"></td>
                        <td id = "sevenE"></td>
                    </tr>
                    <tr id="scheduleB" onclick = "set_schedule(1);">
                        <th>Thursday/Friday 1 Hour Advisory</th>
                        <td id = "advB"></td>
                        <td id = "oneB"></td>
                        <td id = "twoB"></td>
                        <td id = "threeB"></td>
                        <td id = "fourB"></td>
                        <td id = "fiveB"></td>
                        <td id = "sixB"></td>
                        <td id = "sevenB"></td>
                    </tr>
                    <tr id="scheduleD" onclick = "set_schedule(2);">
                        <th>Delayed Opening</th>
                        <td id = "advD"></td>
                        <td id = "oneD"></td>
                        <td id = "twoD"></td>
                        <td id = "threeD"></td>
                        <td id = "fourD"></td>
                        <td id = "fiveD"></td>
                        <td id = "sixD"></td>
                        <td id = "sevenD"></td>
                    <!--
                    <tr id="scheduleE" onclick = "set_schedule(4);">
                        <th>Inauguration Schedule</th>
                        <td id = "advE">8:00-8:05</td>
                        <td id = "oneE">8:10-8:30</td>
                        <td id = "twoE">8:35-8:55</td>
                        <td id = "threeE">9:00-9:20</td>
                        <td id = "fourE">9:25-9:45</td>
                        <td id = "fiveE">9:50-10:10</td>
                        <td id = "sixE">10:15-10:35</td>
                        <td id = "sevenE">10:40-11:00</td>
                    </tr>
                     
                    <tr>
                        <th><a href="https://docs.google.com/spreadsheets/d/10XqliigooZiuEd3-4wUl8FMqHriLvaPbEtJ1PPzlDmM/edit#gid=752731615" target="_blank">Click for schedule</a></th>
                        <th>Advisory 1</th>
                        <th>Advisory 2</th>
                        <th>Session 1</th>
                        <th>Session 2</th>
                        <th>Session 3</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr id="scheduleE" onclick = "set_schedule(4);">
                        <th><a href="https://docs.google.com/spreadsheets/d/10XqliigooZiuEd3-4wUl8FMqHriLvaPbEtJ1PPzlDmM/edit#gid=752731615" target="_blank">Fall Feast</a></th>
                        <td id = "adv1E">8:00-8:10</td>
                        <td id = "adv2E">8:10-9:00</td>
                        <td id = "S1E">9:05-10:00</td>
                        <td id = "S2E">10:05-11:00</td>
                        <td id = "S3E">11:05-12:04</td>
                        <td id = "void1"></td>
                        <td id = "void2"></td>
                        <td id = "void3"></td>
                    </tr>-->
                </tbody>
            </table>
        </div>
        <!--
        <div>
            <table>
                 <thead>
                     <tr>
                        <th colspan="4">4<sup>th</sup> Quarter Intervention Day Schedule</th>
                     </tr>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arts</td>
                        <td>Social Studies</td>
                        <td>World Language</td>
                        <td>English</td>
                    </tr>
                    <tr>
                        <td>Computer Science</td>
                        <td>Science</td>
                        <td>PE/Health</td>
                        <td>Math</td>
                    </tr>
                </tbody>
           
            </table>
        </div>       
        -->
        <div id = "announcements">
            Daily Announcements
            
            <div class="smaller">
                <?php
$file = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS25o_Oi8VguzqKjmaSS33lM0KkwKErcjaXbowIXkjb8NFR5Fw66y6gFiwujyUamUDU2wXao1aOLPSf/pub?gid=1991327576&single=true&output=tsv";
//$file = "./announcements.txt";
$document = file_get_contents($file);

$lines = explode("\n",$document);


foreach($lines as $newline) {
echo $newline . '<br><br>';
}


?>
        </div>
        </div>
        </div>
<!--        <div id="timer">
            <canvas id="countdownclock"></canvas> 
        </div>-->
    </body>
        <script src="birthdays.js?v=1" type="text/javascript"></script>
        <script src="names.js?v=1" type="text/javascript"></script>
        <script src="bell.js?v=27" type="text/javascript"></script>
      <!--  <script src="timer.js" type="text/javascript"></script> -->
</html>