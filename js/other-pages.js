
                        // Fotter icons
// twitter
document.querySelector('.footer_icon_twit').addEventListener('mouseover', () => {
    document.querySelector('.footer_icon_twit').classList.add('fill_light');
    document.querySelector('.footer_icon_twit path').classList.add('stroke_dark');
});
document.querySelector('.footer_icon_twit').addEventListener('mouseout', () => {
    document.querySelector('.footer_icon_twit').classList.remove('fill_light');
    document.querySelector('.footer_icon_twit path').classList.remove('stroke_dark');
});
// instagram
document.querySelector('.footer_icon_inst').addEventListener('mouseover', () => {
    document.querySelector('.footer_icon_inst').classList.add('fill_light');
    document.querySelectorAll('.footer_icon_inst path').forEach(element => {
        element.classList.add('stroke_dark');
    }); 
});
document.querySelector('.footer_icon_inst').addEventListener('mouseout', () => {
    document.querySelector('.footer_icon_inst').classList.remove('fill_light');
    document.querySelectorAll('.footer_icon_inst path').forEach(element => {
        element.classList.remove('stroke_dark');
    }); 
});
// facebook
document.querySelector('.footer_icon_face').addEventListener('mouseover', () => {
    document.querySelector('.footer_icon_face').classList.add('fill_light');
    document.querySelector('.footer_icon_face path').classList.add('stroke_dark');
});
document.querySelector('.footer_icon_face').addEventListener('mouseout', () => {
    document.querySelector('.footer_icon_face').classList.remove('fill_light');
    document.querySelector('.footer_icon_face path').classList.remove('stroke_dark');
});