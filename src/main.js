const input = document.getElementById('commands');
const output = document.getElementById('output');
const [header,desc,help,label]= [document.getElementById('header'),document.getElementById('desc'),document.getElementById('help'),document.getElementById('label')];
const prevCommand = document.getElementById('prevCommand');
const error = document.getElementById('error');
const enter = document.getElementById('enter')
let validInput = ['clear','aboutme','show','value','socials','projects','blog','youtube','skills'];

const clearOutput=()=>{
output.innerHTML = '';
input.value='';
// header.style.display = 'none';
// help.style.display = 'none';
// desc.style.display = 'none'
}

const showOutput =(e)=>{
    let list = document.createElement('ul');
    list.classList.add('list');
    let listData = `
        <li>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</li>
        <li>aboutme</li>
        <li>projects</li>
        <li>socials</li>
        <li>blog</li>
        <li>skills</li>
        <li>youtube</li>    
        <li>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</li>
        `;
    list.insertAdjacentHTML('afterbegin',listData)
    output.appendChild(list)
    input.value=''
}
const aboutOutput = ()=>{
let aboutDisplay = `
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
<h1>About Me</h1>
<p>Hi, Im Mohammad Farhan. Novice JavaScript Developer. Im learning this amazing all in one software language for a year now.</p>
<p>Now Im looking to contribute to Open Source and solve real life problems whether through code or just inspiring speech</p>
<p>Also fond of playing video games especially Valorant</p>
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
`
let aboutDiv = document.createElement('div');
aboutDiv.insertAdjacentHTML('afterbegin',aboutDisplay);
aboutDiv.classList.add('aboutme')
output.appendChild(aboutDiv)
input.value=''
}
const projectsOutput = ()=>{
let projectDisplay = `
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
<h1>Projects</h1>
<p><i class="ri-check-line"></i>: IOS calculator Clone</p>
<p><i class="ri-check-line"></i>: Wisdom Quotes Generator</p>
<p><i class="ri-check-line"></i>: Strong Password Generator</p>
<p><i class="ri-check-line"></i>: UI Components</p>
<p><i class="ri-check-line"></i>: (FormValid) Input Validation Library </p>
<p><i class="ri-lightbulb-flash-line"></i>: (For more projects reference check out my github page)</p>
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
`
let projectDiv = document.createElement('div');
projectDiv.insertAdjacentHTML('afterbegin',projectDisplay);
projectDiv.classList.add('projects')
output.appendChild(projectDiv)
input.value=''
}
const socialsOutput = ()=>{
let socialDisplay = `
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
<h1>Socials</h1>
<p><i class="ri-external-link-line"></i>: <a href="https://github.com/maverick-farhan" target="_blank">Github</a></p>
<p><i class="ri-external-link-line"></i>: <a href="https://www.linkedin.com/in/farhan-mushtaque-21184a249/" target="_blank">LinkedIn</a></p>
<p><i class="ri-external-link-line"></i>: <a href="https://twitter.com/FarhanMushtaqu2" target="_blank">Twitter</a></p>
<br /><p>Click To visit the pages</p>
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
`
let socialDiv = document.createElement('div');
socialDiv.insertAdjacentHTML('afterbegin',socialDisplay);
socialDiv.classList.add('socials')
output.appendChild(socialDiv)
input.value=''
}
const blogOutput = ()=>{
let blogDisplay = `
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
<h1>Blog</h1>
<p>∧,,,∧<br />
(  ̳• · • ̳)<br />
/    づ♡ I love you♡ 🧸 ♡<br />
<br />
</p>

<p>Have Patience BLOG is yet to come</p>
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
`
let blogDiv = document.createElement('div');
blogDiv.insertAdjacentHTML('afterbegin',blogDisplay);
blogDiv.classList.add('blog')
output.appendChild(blogDiv)
input.value=''
}

const skillsOutput = ()=>{
let skillDisplay = `
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
<p>React</p>
<p>Figma</p>
<p>UI Development</p>
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
`
let skillDiv = document.createElement('div');
skillDiv.insertAdjacentHTML('afterbegin',skillDisplay);
skillDiv.classList.add('skills')
output.appendChild(skillDiv)
input.value=''
}
const ytOutput = ()=>{
let ytDisplay = `
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
<p><i class="ri-external-link-line"></i>: <a href="https://www.youtube.com/channel/UCJB6EMWziHA-n3v18r-dPzA" target="_blank">Youtube</a> <i class="ri-youtube-fill"></i></p>
<p>♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡</p>
`
let ytDiv = document.createElement('div');
ytDiv.insertAdjacentHTML('afterbegin',ytDisplay);
ytDiv.classList.add('yt')
output.appendChild(ytDiv)
input.value=''
}

input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        e.preventDefault();
        if(input.value===''){
            empty.style.display='block';
            error.style.display='none'
        }
        else if(input.value==="Clear" || input.value==='clear' || input.value==="CLEAR" || input.value=='cls'){
            empty.style.display='none';
            error.style.display='none';
            clearOutput();
        } 
        else if(input.value==="Show"|| input.value==='show' || input.value==='SHOW'){
            empty.style.display='none';
            error.style.display='none';
            showOutput();
        }    
        else if(input.value==="aboutme"||input.value==="aboutme"||input.value==="aboutme"){
            empty.style.display='none';
            error.style.display='none';
            aboutOutput();
        }
        else if(input.value==="projects"||input.value==="PROJECTS"||input.value==="Projects"){
            empty.style.display='none';
            error.style.display='none';
            projectsOutput();
        }
        else if(input.value==="socials"||input.value==="Socials"||input.value==="SOCIALS"){
            empty.style.display='none';
            error.style.display='none';
            socialsOutput();
        }
        else if(input.value==="blog"||input.value==="Blog"||input.value==="BLOG"){
            empty.style.display='none';
            error.style.display='none';
            blogOutput();
        }
        else if(input.value==="skills"||input.value==="Skills"||input.value==="SKILLS"){
            empty.style.display='none';
            error.style.display='none';
            skillsOutput();
        }
        else if(input.value==="youtube"||input.value==="Youtube"||input.value==="YOUTUBE"){
            empty.style.display='none';
            error.style.display='none'
            ytOutput();
        }
        else{
            empty.style.display='none';
            error.style.display='block'
        }

    }
})
enter.addEventListener('click',(e)=>{
        e.preventDefault();
        if(input.value===''){
            empty.style.display='block';
            error.style.display='none'
        }
        else if(input.value==="Clear" || input.value==='clear' || input.value==="CLEAR" || input.value=='cls'){
            empty.style.display='none';
            error.style.display='none';
            clearOutput();
        } 
        else if(input.value==="Show"|| input.value==='show' || input.value==='SHOW'){
            empty.style.display='none';
            error.style.display='none';
            showOutput();
        }    
        else if(input.value==="aboutme"||input.value==="aboutme"||input.value==="aboutme"){
            empty.style.display='none';
            error.style.display='none';
            aboutOutput();
        }
        else if(input.value==="projects"||input.value==="PROJECTS"||input.value==="Projects"){
            empty.style.display='none';
            error.style.display='none';
            projectsOutput();
        }
        else if(input.value==="socials"||input.value==="Socials"||input.value==="SOCIALS"){
            empty.style.display='none';
            error.style.display='none';
            socialsOutput();
        }
        else if(input.value==="blog"||input.value==="Blog"||input.value==="BLOG"){
            empty.style.display='none';
            error.style.display='none';
            blogOutput();
        }
        else if(input.value==="skills"||input.value==="Skills"||input.value==="SKILLS"){
            empty.style.display='none';
            error.style.display='none';
            skillsOutput();
        }
        else if(input.value==="youtube"||input.value==="Youtube"||input.value==="YOUTUBE"){
            empty.style.display='none';
            error.style.display='none'
            ytOutput();
        }
        else{
            empty.style.display='none';
            error.style.display='block'
        }
})
