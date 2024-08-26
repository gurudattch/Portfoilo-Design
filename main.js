function about(){
    document.getElementById('default-page').style="display:none;"
    b_home =  document.getElementById('logging');
    b_home.innerHTML = `<div class='getting'"><h1> About</h1><br><p>
    
   Hello Visitor, <br>My Name is Gurudatt Choudhary I'm a cybersecurity researcher and computer science student deeply passionate about the intricate world of digital security. From an early fascination with technology's potential, my journey has been guided by a relentless pursuit of understanding and mitigating cyber threats.
    
    My academic journey in computer science has equipped me with a robust foundation, but it's my hands-on research and collaborative efforts that truly fuel my growth. Whether dissecting malware, analyzing network vulnerabilities, or contributing to open-source security tools, I thrive on the challenges and opportunities presented by cybersecurity.
    
    I actively engage in Capture The Flag competitions and collaborate with peers and industry professionals to tackle real-world challenges head-on. Through these experiences, I continually refine my skills and deepen my understanding of cybersecurity's ever-evolving landscape.
    
    My goal is clear: to leverage my expertise in computer science and cybersecurity to make a tangible difference in securing our digital world. With a commitment to continuous learning and innovation, I am poised to contribute meaningfully to the cybersecurity community and safeguard our digital future. </p></div>`
    
}




function skills(){
    document.getElementById('default-page').style="display:none;"
    b_home =  document.getElementById('logging');
    b_home.innerHTML = `<div class='getting'><h1>Skills</h1>

    <div class="skill-container">
    <div class=skills>
    <img src="img/hack.png">
   <p> Cyber Security</p>
    </div>
   
    <div class=skills>
    <img src="img/python.png">
    <p>Python</p>
    </div>

    <div class=skills>
    <img src="img/code.png">
    <p>HTML/CSS</p>
    </div>

    <div class=skills>
    <img src="img/md.png">
    <p>Markdown</p>
    </div>
    <div class=skills>
    <img src="img/js.png">
    <p>JavaScript</p>
    </div>
    <div class=skills>
    <img src="img/c-document.png">
    <p>C Language</p>
    </div>

    <div class=skills>
    <img src="img/api.png">
    <p>API Security</p>
    </div>

    <div class=skills>
    <img src="img/sql-server.png">
    <p>DBMS</p>
    </div>

    <div class=skills>
    <img src="img/gnu-bash.png">
    <p>Bash Scripting</p>
    </div>

    <div class=skills>
    <img src="img/php.png">
    <p>PHP</p>
    </div>
    
    <div class=skills>
    <img src="img/linux.png">
    <p>Linux</p>
    </div>

    <div class=skills>
    <img src="img/computer.png">
    <p>Windows</p>
    </div>

    </div>
    </div>`
    
}
function achive(){
    document.getElementById('default-page').style="display:none;"
    b_home =  document.getElementById('logging');
    b_home.innerHTML = `<div class='getting'><h1>My Achievements</h1>
    <div class="achievements-section">

        <div class="certifications animate">
        <h3>Hall of Fames</h3>

        <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="/img/hof1.png" style="width:100%">
          <div class="text">NASA Hall Of Fame</div>
        </div>
      
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="/img/hof2.png" style="width:100%">
          <div class="text">Caption Text</div>
        </div>
      
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="/img/hof3.png" style="width:100%">
          <div class="text">Caption Text</div>
        </div>
      
        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <br>
      
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
            <br>
            <h3>Certifications</h3>
            <ul>
                <li>Certified AppSec Pratitioner - SecOps Group</li>
                <li>Certified Network Security Practitioner - SecOps Group</li>
                <li>API Secuity Certifed Expert- APIsec University</li>
                <li>Wireshark Packet Analysis - Configure Terminal</li>
                <li>Threat Intelligence - InfoSys SprinBoard </li>
                <li>Digital Forensics - Udemy</li>
                <!-- Add more certifications as needed -->
            </ul>
        </div>

        <div class="publications animate">
            <h3>Publications</h3>
            <ul>
                <li><a href="https://exploit-db.com/google-hacking-database/8421">Google Dork Tequnique</a></li>
            
                <!-- Add more publications as needed -->
            </ul>
        </div>

        <!-- Add other sections for additional achievements -->

    </div>`
    
}
function pojects(){
    document.getElementById('default-page').style="display:none;"
    b_home =  document.getElementById('logging');
    b_home.innerHTML = 
    `<div class='getting'><h1>My Projects</h1>
    
    <div class="projects-section">
    
    <div class="project-container">
        <div class="project">
            <h3><a href="project1.html">Github</a></h3>
            <p>
            </p>
            <p>GitHub Repository: <a href="https://github.com/gurudattch">Link</a></p>
        </div>
        
        <!-- Add more projects as needed -->
    </div>
</div>
</div>
    
    </div>`
    
}

function ctf(){
    document.getElementById('default-page').style="display:none;"
    b_home =  document.getElementById('logging');
    b_home.innerHTML = `<div class='getting'><h1>WriteUps</h1>
    
    <div class="ctfs-section">
    <div class="ctf-container">
        <div class="ctf">
            <h3><a href="writeup1.html">CTF Name 1</a></h3>
            <p>Rank: 1st</p>
        </div>
        <div class="ctf">
            <h3><a href="writeup2.html">CTF Name 2</a></h3>
            <p>Rank: 2nd</p>
        </div>
        <div class="ctf">
            <h3><a href="writeup2.html">CTF Name 3</a></h3>
            <p>Rank: 2nd</p>
        </div>
        <div class="ctf">
            <h3><a href="writeup2.html">CTF Name 4</a></h3>
            <p>Rank: 2nd</p>
        </div>
        <div class="ctf">
            <h3><a href="writeup2.html">CTF Name 5</a></h3>
            <p>Rank: 2nd</p>
        </div>
    </div>
</div>
    
    
    </div>`
    
}


document.addEventListener("DOMContentLoaded", function() {
    const ctfItems = document.querySelectorAll(".ctf");
    let delay = 0;
    
    ctfItems.forEach(function(item) {
        item.style.animationDelay = delay + "s";
        delay += 0.2;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll(".project");
    let delay = 0;
    
    projectItems.forEach(function(item) {
        item.style.animationDelay = delay + "s";
        delay += 0.2;
    });
});




const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Cyber Security Researcher", "Ethical Hacker", "Computer Enginner", "Digital Forensics Expert"];
const typingDelay = 50;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



function scrollSkills(direction) {
  const marquee = document.querySelector('.marquee');
  const skillsList = document.querySelector('.skills-list');
  const scrollAmount = 50; // Adjust scroll amount as needed
  
  if (direction === 'left') {
    marquee.scrollLeft -= scrollAmount;
  } else if (direction === 'right') {
    marquee.scrollLeft += scrollAmount;
  }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}