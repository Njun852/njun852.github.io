const main = document.getElementById('main')
const head = document.getElementById('head')
const content = document.getElementById('contents')
const side = document.getElementById('side')
const black = document.getElementById('black')
const icons = document.getElementById('icon')
const top2 = document.getElementById('top')
const mid = document.getElementById('mid')
const bot = document.getElementById('bot')
const sideMenu = document.getElementById('side-menu')
let count = 0

function sidebarThing(){
    if(count == 0){
    side.style.animation = 'slide 0.3s ease-in-out forwards'
    setTimeout(function(){
        side.style.left = '0%'
        black.style.visibility = 'visible'
        sideMenu.append(icons)
        icons.style.float = 'right'
    }, 300)
    count++
    }else{
       black.style.visibility = 'hidden'
        side.style.animation = 'slideback 0.3s ease-in-out forwards'
        setTimeout(function(){
            side.style.left = '-100%'
            head.append(icons)
            icons.style.float = 'left'
        }, 300)
        count--
    }
}




function icon(){
    if(count == 0){
    top2.style.animation = 'move 0.3s'
    bot.style.animation = 'move 0.3s'
    setTimeout(function(){
        mid.style.opacity = '0'
        top2.style.top = '40%'
        bot.style.top = '40%'
    }, 290)
    setTimeout(function(){
        top2.style.animation = 'topx 0.3s forwards'
        bot.style.animation = 'botx 0.3s forwards'
    }, 310)
    setTimeout(function(){
        top2.style.transform = 'rotate(-40deg)'
        bot.style.transform = 'rotate(40deg)'
        count++
    }, 610)
    }else{
    top2.style.removeProperty('animation')
    bot.style.removeProperty('animation')
      setTimeout(function(){
        top2.style.animation = 'menu 0.3s'
        bot.style.animation = 'menu 0.3s'
      }, 100)
      setTimeout(function(){
        top2.style.transform = 'rotate(0deg)'
        bot.style.transform = 'rotate(0deg)'
        mid.style.opacity = '1'
      }, 310)
      setTimeout(function(){
        top2.style.animation = 'movetop 0.3s forwards'
        bot.style.animation = 'movebot 0.3s forwards'
      }, 320)
      setTimeout(function(){
        top2.style.top = '5%'
        bot.style.top = '75%'
      }, 610)
      count--

    }

}

function clickIcon(){
  icon()
  sidebarThing()
}

icons.addEventListener('click', clickIcon)