let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to('.rock', 3, { y: -300})
  .to('.girl', 3, { y: -200}, '-=3')
  .fromTo('.bg1', 3, { y: -50}, { y: 0, duration: 3 }, '-=3')
  .to('.content', 3, { top: '0%'}, '-=3')
  .fromTo('.content-images', 3, { opacity: 0}, { opacity: 1, duration: 3})
  .fromTo('.text', 3, { opacity: 0}, { opacity: 1, duration: 3})


let scene = new ScrollMagic.Scene({
  triggerElemnt: 'section',
  duration: '300%',
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller)
