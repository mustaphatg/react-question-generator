## react question generator


## The problem
My dad is an Islamic teacher. And for the past 5 years, 
he has been generating question manually from the Holy Quran.

<br>
As a <b> web developer</b> with experience in scraping and Reactjs,
I decided to develop a web app that will solve the problem above.


## The solution

<li> Using PHP, I scraped the content of <a href="https://quran411.com" > quran411.com. </a>
A website that provides the Holy Quran in arabic as well as its translation and transliteration.
 </li>

<li>
 I also used PHP to develop the api that contains the translation, transliteration and the Arabic text of each surah or chapter in the Holy Quran.
</li>

<li> 
 By using <a href="https://reactjs.org/" > Reactjs </a> and <a href="https://chakra-ui.com/" >
Chakra Ui</a>, I developed a web app that consumes the JSON developed using PHP. I also wrote various script that generate questions automatically from the transliteration of the Holy Quran.
As well as providing a minimum of 4 options for each question.
</li>


<li> Lastly, a "format" and "download" button to change the format of the question and download it as a Microsoft word document.
</li>


## Fisnished project
The web app was hosted on <a href="https://netlify.com" >  Nelify </a> and the link to it <a href="https://alade.netlify.app/surah/surah-fatiha" >  Question Generator Project  </a>