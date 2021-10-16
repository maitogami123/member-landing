const sections = document.querySelectorAll('.scroll-to');
const navLi = document.querySelectorAll('.item-link');


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id')
        }
    })

    console.log(current)

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains('to-'+current)) {
            li.classList.add('active');
        }
    })
})