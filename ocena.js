export function rate(pokolenie, docelowy){
    for(var dog of pokolenie){
       dog.ocena = fit(dog, docelowy)
    //    console.log(dog.ocena)
    }
}

function getRGB(kolor){
    var b = kolor % 255
    kolor = (kolor - b)/255
    var g =  kolor % 255
    kolor = (kolor - g)/255
    var r = kolor % 255
    return [r, g, b]
}

function punktyZaKolor(kolor, kolorCel){
    let RGB = getRGB(kolor)
    let RGBCel = getRGB(kolorCel)
    var suma = 0
    for(var i=0; i < 3; i++){
        suma += 255 - Math.abs((RGBCel[i] - RGB[i]))
    }
    return (suma/(255*3)) * 100

}

export function fit(osobnik, docelowy){
    var ocena = 0.0;
    let dcTulow = docelowy.tulow;
    let osTulow = osobnik.tulow;
    let dcGlowa = docelowy.glowa;
    let osGlowa = osobnik.glowa;          

    if(dcTulow.dlugoscTulowia >= osTulow.dlugoscTulowia){
        ocena += (osTulow.dlugoscTulowia/dcTulow.dlugoscTulowia) * 1000
    }else{
        ocena += (dcTulow.dlugoscTulowia/osTulow.dlugoscTulowia) * 1000
    }

    if(dcTulow.szerokoscTulowia >= osTulow.szerokoscTulowia){
        ocena += (osTulow.szerokoscTulowia/dcTulow.szerokoscTulowia) * 1000
    }else{
        ocena += (dcTulow.szerokoscTulowia/osTulow.szerokoscTulowia) * 1000
    }

    if(dcTulow.wysokoscTulowia >= osTulow.wysokoscTulowia){
        ocena += (osTulow.wysokoscTulowia/dcTulow.wysokoscTulowia) * 1000
    }else{
        ocena += (dcTulow.wysokoscTulowia/osTulow.wysokoscTulowia) * 1000
    }
    ocena += punktyZaKolor(osTulow.kolorTulowia, dcTulow.kolorTulowia)

    if(dcTulow.nogi.dlugoscNog >= osTulow.nogi.dlugoscNog){
        ocena += (osTulow.nogi.dlugoscNog/dcTulow.nogi.dlugoscNog) * 100
    }else{
        ocena += (dcTulow.nogi.dlugoscNog/osTulow.nogi.dlugoscNog) * 100
    }
    ocena += punktyZaKolor(osTulow.nogi.kolorNog, dcTulow.nogi.kolorNog)

    if(dcTulow.ogon.czyOgon == osTulow.ogon.czyOgon) {ocena += 1};

    if(dcTulow.ogon.dlugoscOgona >= osTulow.ogon.dlugoscOgona){
        ocena += (osTulow.ogon.dlugoscOgona/dcTulow.ogon.dlugoscOgona) * 100
    }else{
        ocena += (dcTulow.ogon.dlugoscOgona/osTulow.ogon.dlugoscOgona) * 100
    }
    ocena += punktyZaKolor(osTulow.ogon.kolorOgona, dcTulow.ogon.kolorOgona)
    
    if(dcGlowa.dlugoscGlowy >= osGlowa.dlugoscGlowy){
        ocena += (osGlowa.dlugoscGlowy/dcGlowa.dlugoscGlowy) * 1000
    }else{
        ocena += (dcGlowa.dlugoscGlowy/osGlowa.dlugoscGlowy) * 1000
    }

    if(dcGlowa.wysokoscGlowy >= osGlowa.wysokoscGlowy){
        ocena += (osGlowa.wysokoscGlowy/dcGlowa.wysokoscGlowy) * 1000
    }else{
        ocena += (dcGlowa.wysokoscGlowy/osGlowa.wysokoscGlowy) * 1000
    }

    if(dcGlowa.szerokoscGlowy >= osGlowa.szerokoscGlowy){
        ocena += (osGlowa.szerokoscGlowy/dcGlowa.szerokoscGlowy) * 1000
    }else{
        ocena += (dcGlowa.szerokoscGlowy/osGlowa.szerokoscGlowy) * 1000
    }
    ocena += punktyZaKolor(osGlowa.kolorGlowy, dcGlowa.kolorGlowy)

    if(dcGlowa.uszy.dlugoscUszu >= osGlowa.uszy.dlugoscUszu){
        ocena += (osGlowa.uszy.dlugoscUszu/dcGlowa.uszy.dlugoscUszu) * 10
    }else{
        ocena += (dcGlowa.uszy.dlugoscUszu/osGlowa.uszy.dlugoscUszu) * 10
    }
    
    if(dcGlowa.uszy.szerokoscUszu >= osGlowa.uszy.szerokoscUszu){
        ocena += (osGlowa.uszy.szerokoscUszu/dcGlowa.uszy.szerokoscUszu) * 100
    }else{
        ocena += (dcGlowa.uszy.szerokoscUszu/osGlowa.uszy.szerokoscUszu) * 100
    }
    ocena += punktyZaKolor(osGlowa.uszy.kolorUszu, dcGlowa.uszy.kolorUszu)

    if(dcGlowa.pysk.dlugoscPysku >= osGlowa.pysk.dlugoscPysku){
        ocena += (osGlowa.pysk.dlugoscPysku/dcGlowa.pysk.dlugoscPysku) * 10
    }else{
        ocena += (dcGlowa.pysk.dlugoscPysku/osGlowa.pysk.dlugoscPysku) * 10
    }

    if(dcGlowa.pysk.szerokoscPysku >= osGlowa.pysk.szerokoscPysku){
        ocena += (osGlowa.pysk.szerokoscPysku/dcGlowa.pysk.szerokoscPysku) * 100
    }else{
        ocena += (dcGlowa.pysk.szerokoscPysku/osGlowa.pysk.szerokoscPysku) * 100
    }
    ocena += punktyZaKolor(osGlowa.pysk.kolorPyska, dcGlowa.pysk.kolorPyska)

    ocena += punktyZaKolor(osGlowa.oczy.kolorOczu, dcGlowa.oczy.kolorOczu)
    
    // if(osGlowa.pysk.kolorPyska == dcGlowa.pysk.kolorPyska){ocena+=10}

    // if(osGlowa.oczy.kolorOczu == dcGlowa.oczy.kolorOczu){ocena+=10}

    return ocena
}