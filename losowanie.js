import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function randomColor(){
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    var colorValue = parseInt ( color.replace("#","0x"), 16 );
    return colorValue;
}

export function individual(){
    //struktura:
    let pies = {
        tulow: {
            nogi: {},
            ogon: {},
        },
        glowa: {
            uszy: {},
            pysk: {},
            oczy: {},
        },
        ocena: null
    };
    //losowanie cech
    pies.tulow.dlugoscTulowia = Math.floor(Math.random() * (50 - 6 + 1)) + 6;
    pies.tulow.szerokoscTulowia = Math.floor(Math.random() * (50 - 6 + 1)) + 6;
    pies.tulow.wysokoscTulowia = Math.floor(Math.random() * (50 - 6 + 1)) + 6;
    pies.tulow.kolorTulowia = randomColor()
    pies.tulow.nogi.dlugoscNog = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
    pies.tulow.nogi.kolorNog = randomColor();
    var temp = Math.random();
    if(temp >= 0.5){
        pies.tulow.ogon.czyOgon = 1;
    }else{
        pies.tulow.ogon.czyOgon = 0;
    }
    pies.tulow.ogon.dlugoscOgona = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
    pies.tulow.ogon.kolorOgona = randomColor();
    pies.glowa.wysokoscGlowy = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
    pies.glowa.szerokoscGlowy = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
    pies.glowa.dlugoscGlowy = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
    pies.glowa.kolorGlowy = randomColor();
    pies.glowa.uszy.dlugoscUszu = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
    pies.glowa.uszy.szerokoscUszu = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    pies.glowa.uszy.kolorUszu = randomColor();
    pies.glowa.pysk.dlugoscPysku = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
    pies.glowa.pysk.szerokoscPysku = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    pies.glowa.pysk.kolorPyska = randomColor();
    // pies.glowa.nos.kolorNosa = new THREE.MeshBasicMaterial({ color: 0x000000 });
    pies.glowa.oczy.kolorOczu = randomColor();

    return pies
}