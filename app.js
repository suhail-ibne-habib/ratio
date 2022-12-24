const selector = e => document.querySelector( e );

const pointer = selector( "#pointer" );
const slider = selector( "#slider" );
const degree = selector( "#degree text" );

const animation = gsap.set( pointer, {
    rotate: 0,
    transformOrigin: "right"
} )

slider.addEventListener( "change", function(){
    const value = this.value;
    slider.value = value;
    gsap.to( pointer, {
        rotate: value
    } )
    degree.textContent = value;
} )