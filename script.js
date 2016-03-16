//Create an array containing quotes
    var Inspiration=new Array()
    Inspiration[0]="One grain of sand at a time.";
    Inspiration[1]="Think, that this day will never dawn again.<br><i>Dante</i>";
    Inspiration[2]="Practice, and all is coming.<br><i>Sri K. Pattabhi Jois</i>";
    Inspiration[3]="Nobody can be uncheered with a balloon.<br><i>Winnie the Pooh</i>";
    Inspiration[4]="Better than a thousand hollow words, is one word that brings peace.<br><i>Buddha</i>";
    Inspiration[5]="To love someone is to reveal to them their capacities for life, the light that is shining in them.<br><i>Jean Vanier</i>";
    Inspiration[6]="▴ &nbsp;▲ ▴ &nbsp;▲ &nbsp;▴ ▲ ▴<br>If I tell you these are mountains you will imagine them as such.";
    Inspiration[7]="The secret of life, though, is to fall seven times and to get up eight times.<br><i>Paulo Coelho, The Alchemist</i>";
    Inspiration[8]="A galloping horse shall pass it by.";
    Inspiration[9]="If you are irritated by every rub, how will your mirror be polished?<br><i>Rumi</i>";
    Inspiration[10]="The answer must be, I think, that beauty and grace are performed whether<br/> or not we will or sense them. The least we can do is try to be there.<br><i>Annie Dillard, Pilgrim at Tinker Creek</i>";
    Inspiration[11]="The price of inaction is far greater than the cost of making a mistake.<br><i>Meister Eckhart</i>";
    Inspiration[12]="To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.<br><i>Thích Nhất Hạnh</i>";
    Inspiration[13]="Little by little, one travels far.<br><i>J.R.R. Tolkien</i>";
    Inspiration[14]="Stop acting so small. You are the universe in ecstatic motion.<br><i>Rumi</i>";
    Inspiration[15]="Every journey has a secret destination of which the traveler is unaware.<br><i>Martin Buber</i>";

//Assign integer value
    var Ins=Inspiration.length;
//Generate a random number
    var pickInspiration=Math.round(Math.random()*(Ins-1));
//Create function to write from array to document
    function showInspiration(){
        document.write(Inspiration[pickInspiration]);}
