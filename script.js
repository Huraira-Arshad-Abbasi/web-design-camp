let tl = gsap.timeline();
tl.from(".left > h1", {
    y: 50
})
tl.from(".left > .btn", {
    y: 50,
    opacity: "0"
})
tl.from(".content", {
    left: "15%",
    duration: 1,
    width: "0%"
})
tl.from(".content > .textContent > h4", {
    y: 40,
    opacity: "0"
})
tl.from(".content > .textContent > h2", {
    y: 40,
    opacity: "0"
})
tl.from(".content > .textContent > h3", {
    y: 40,
    opacity: "0"
})
tl.from(".content > .textContent > p", {
    y: 40,
    opacity: "0"
})
tl.from(".images> img:first-child", {
    opacity: "0"
})
tl.from(".images> img:last-child", {
    opacity: "0",
    
})

