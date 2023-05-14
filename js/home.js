// News n Event section
let newsc=document.querySelector('.news')
let evec=document.querySelector('.events')
let newst=document.querySelector('.news-tl')
let eve=document.querySelector('.event')

swap=(n)=>{
    if(n==1){
        evec.style.display='none'
        newsc.style.display='block'
        newst.style.color='rgb(176,0,0)'
        eve.style.color='white'
    }
    else{
        evec.style.display='block'
        newsc.style.display='none'
        eve.style.color='rgb(176,0,0)'
        newst.style.color='white'
    }
}