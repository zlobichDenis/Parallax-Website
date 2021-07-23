let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to('.rock', 3, { y: -300})
  .to('.girl', 3, { y: -200}, '-=3')
  .to('.bg1', 3, { y: 50}, '-=3');


let scene = new ScrollMagic.Scene({
  triggerElemnt: 'section',
  duration: '100%',
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller)
