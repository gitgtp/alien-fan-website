
var home=document.getElementById('navhome')
var media = document.getElementById('navmedia')
var about = document.getElementById('navabout')
var news=document.getElementById('navnews')
var joinus =document.getElementById('joinus')
var main=document.querySelector('main')

home.onclick=function(){
  location.reload()
}

// navbar onlick function
media.onclick = function () {
  $.get('component/html/media.html', function (data) {

    $('main').html(data)
    main.classList.add('mainbox')
  })
  
}

news.onclick = function () {
  $.get('component/html/news.html', function (data) {
    $('main').html(data)
    
    main.classList.add('mainbox4')
  })
}
about.onclick = function () {
  $.get('component/html/aboutus.html', function (data) {
    $('main').html(data)
    main.classList.add('mainbox3')
  })
}


joinus.onclick = function () {
  $.get('component/html/joinus.html', function (data) {
    $('main').html(data) })
    joinus.classList.toggle('animate__pulse')
  main.classList.add('mainbox2')
  }
  
