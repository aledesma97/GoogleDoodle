//pikachu timeline
gsap.timeline({
  defaults: {
    duration: 1,
    repeat: -1,
   yoyo: true
}
})
.to('.pikachu', {
y: -40,
scale: 1.2
}, '+=1')
.to('.pikachu', {
y: 0,
scale:1,
ease: "bounce"
});

//pokeball timeline
gsap.timeline({
defaults: {
    duration: 1.5,
}
})
.from('.pokeball' , {
duration: 4,
x: -400,
rotation: -390,
ease: "elastic.out(1, 1)"
})


// .to('.pokeball' , {
//   transformOrigin: "50% 100%",
//   rotation: +20,
// })
// .to('.pokeball' , {
//   transformOrigin: "50% 100%",
//   rotation: 0
// }, '-=1')
