// change navbar style on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0);
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className="uil uil-minus"
        }
        else{
            icon.className="uil uil-plus"
        }
    })
})


// show/hide nav menu

const navItems = document.querySelector('.nav_menu');
const openNavBtn = document.querySelector('#open-menu-btn');
const closeNavBtn = document.querySelector('#close-menu-btn');

// open nav
const openNav = () =>{
    navItems.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
}

// close nav
const closeNav = () =>{
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}


openNavBtn.addEventListener('click',openNav);
closeNavBtn.addEventListener('click',closeNav);



