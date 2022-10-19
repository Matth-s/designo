const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const web = document.querySelector('.web-design');
const app = document.querySelector('.app-design');
const graphic = document.querySelector('.graphic-design');

toggle.addEventListener('click', function() {
    body.classList.toggle('menu');
});

web.addEventListener('click', function() {
    body.classList.add('web');
    body.classList.remove('app');
    body.classList.remove('graphic');
    document.querySelector('.container-deux-sec1 > h1').innerHTML='Web Design';
    document.querySelector('.container-deux-sec1 > p').innerHTML='We build websites that serve as powerful marketing tools and bring memorable brand experiences.';
    document.body.scrollTop = 180;
    document.documentElement.scrollTop = 180;
});

app.addEventListener('click', function() {
    body.classList.add('app');
    body.classList.remove('web');
    body.classList.remove('graphic');
    document.querySelector('.container-deux-sec1 > h1').innerHTML='App Design';
    document.querySelector('.container-deux-sec1 >p').innerHTML='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.';
    document.body.scrollTop = 180;
    document.documentElement.scrollTop = 180;
});

graphic.addEventListener('click', function() {
    body.classList.add('graphic');
    body.classList.remove('app');
    body.classList.remove('web');
    document.querySelector('.container-deux-sec1 > h1').innerHTML='Graphic Design';
    document.querySelector('.container-deux-sec1 >p').innerHTML='We deliver eye-catching branding materials that are tailored to meet your business objectives.';
});



if(document.querySelector('body').classList.contains(".app")) {
    alert('uvrnv')
}
