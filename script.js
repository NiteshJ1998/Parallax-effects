let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock1', 3, {y: -200})
    .to('.girl1', 3, {y: -200},'-=3')
    .fromTo('.bg1',  {y: -50}, {y:0, duration:3 }, "-=3")
    .to('.content',3,{top:'0%',}, '-=3')
    .fromTo('.content-imgaes', {opacity:0}, {opacity:1, duration:3})
    .fromTo('.text', {opacity:0}, {opacity:1, duration:2})

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,

})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);