const selector = e => document.querySelector( e );

const pointer = selector( "#pointer" );
const slider = selector( "#slider" );
const degree = selector( "#degree text" );
const sin = selector(".sin");
const cos = selector(".cos");
const tan = selector(".tan");


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

    showRatio( value );

} )

function showRatio(ang){
    let angle = ang;
    let radian = angle*0.0174533;
    let sinRatio = Math.sin(radian);
    let cosRatio = Math.cos(radian);
    let tanRatio = Math.tan(radian);

    if( angle == 90 ){
        sin.textContent = 1;
        cos.textContent = 0;
        tan.textContent = "infinity";
    }else if( angle == 180 ){
        sin.textContent = 0;
        cos.textContent = -1;
        tan.textContent = 0;
    }else{
        sin.textContent = sinRatio;
        cos.textContent = cosRatio;
        tan.textContent = tanRatio;
    }
    
}


