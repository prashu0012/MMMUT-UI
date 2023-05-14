let togg = 0;
let mobnv = document.querySelector('.mobnv')
let tbtn = document.querySelector('.toggle-btn')

togglenav = () => {
    if (togg == 0) {
        togg = 1;
        mobnv.style.display = 'block'
        tbtn.style.backgroundColor = 'rgb(178, 0, 0)'
        tbtn.style.color = 'white'
    }
    else {
        togg = 0;
        mobnv.style.display = 'none'
        tbtn.style.backgroundColor = 'white'
        tbtn.style.color = 'rgb(178, 0, 0)'
    }
}

let drcount = 0
drdown = (n) => {
    let navd1 = document.querySelector('.navd1')
    let navd2 = document.querySelector('.navd2')
    
    if(n==1){
        if (drcount == 0) {
            navd1.style.display = 'block'
            if(navd2.style.display = 'block') navd2.style.display = 'none'
            drcount = 1
        }
        else {
            navd1.style.display = 'none'
            drcount = 0
        }
    }
    else if(n==2){
        if (drcount == 0) {
            navd2.style.display = 'block'
            drcount = 1
            if(navd1.style.display = 'block') navd1.style.display = 'none'
        }
        else {
            navd2.style.display = 'none'
            drcount = 0
        }
    }
}