<html>
    <head>
        <title>Announcements</title>
        <style>
            * {
                color: gainsboro;
                text-align: center;
            }
            p {
                font-size: 50%;
            }
    </style>
    </head>
    <body>
        <div id = "announcements">
            <h1>Daily Announcements</h1> 
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
    </body>
</html>