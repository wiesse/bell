<html>
    <head>
        <title>Announcements</title>
    </head>
    <body>
        <div id = "announcements">
            Daily Announcements 
            <div class="smaller">
                <?php
$file = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS25o_Oi8VguzqKjmaSS33lM0KkwKErcjaXbowIXkjb8NFR5Fw66y6gFiwujyUamUDU2wXao1aOLPSf/pub?gid=1991327576&single=true&output=tsv";
//$file = "./announcements.txt";
$document = file_get_contents($file);

$lines = explode("\n",$document);


foreach($lines as $newline) {
    if (strlen($newline) > 1)
     if(strpos($newline, "#REF!")===false) echo $newline . '<br><br>';
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
        <script src="bell.js?v=30" type="text/javascript"></script>
        <!--<script src="t imer.js" type="text/javascript"></script>-->
</html>