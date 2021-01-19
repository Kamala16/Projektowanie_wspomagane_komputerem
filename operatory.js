import { randomColor } from './losowanie.js'

export function selekcja(pokolenie){
    pokolenie.sort((a, b) => {return b.ocena - a.ocena});
    var n = pokolenie.length
    let nowePokolenie = [];
    var ilosc = 0.3
    var osobnik = 0
    while(pokolenie.length != nowePokolenie.length){
        for(var i = 0; i < ilosc*n+1; i++){
            if(pokolenie.length == nowePokolenie.length){
                break
            }
            let nowyPies = JSON.parse(JSON.stringify(pokolenie[osobnik]))
            nowePokolenie.push(nowyPies)
        } 
        osobnik++;
        ilosc = 0.5 * ilosc
    }
    // nowePokolenie.sort((a, b) => {return(b.ocena - a.ocena)});
    return nowePokolenie
}

function losowanieCechy(osobnik){
    let randObiekt = (Math.random()>0.5)? 'tulow' : 'glowa'
    let path = []
    path.push(randObiekt)
    let key = Object.keys(osobnik[randObiekt])
    let randObiekt2 = key[Math.floor(Math.random() * key.length)]
    path.push(randObiekt2)
    if(typeof osobnik[randObiekt][randObiekt2] === 'object'){
        key = Object.keys(osobnik[randObiekt][randObiekt2])
        let randEl = key[Math.floor(Math.random() * key.length)]
        path.push(randEl) 
    }
    return path
}

export function krzyzowanie(pokolenie){
    let nowePokolenie = []
    while(pokolenie.length != 0){
        if(pokolenie.length == 1){
            console.log(pokolenie.length)
            nowePokolenie.push(pokolenie[0])
            return nowePokolenie
        }
        var temp = Math.floor(Math.random() * pokolenie.length)
        let rodzic1 = pokolenie[temp]
        pokolenie.splice(temp, 1)
        temp = Math.floor(Math.random() * pokolenie.length)
        let rodzic2 = pokolenie[temp]
        pokolenie.splice(temp, 1)
        let potomek1 = rodzic1
        let potomek2 = rodzic2
        for(var i = 0; i < Math.floor(Math.random() * (10 - 0)); i++){
            let cecha = losowanieCechy(rodzic1)
            if(cecha.length == 2){
                potomek1[cecha[0]][cecha[1]] = rodzic2[cecha[0]][cecha[1]]
                potomek2[cecha[0]][cecha[1]] = rodzic1[cecha[0]][cecha[1]]
            }else if(cecha.length == 3){
                potomek1[cecha[0]][cecha[1]][cecha[2]] = rodzic2[cecha[0]][cecha[1]][cecha[2]]
                potomek2[cecha[0]][cecha[1]][cecha[2]] = rodzic1[cecha[0]][cecha[1]][cecha[2]]
            }
        }
        nowePokolenie.push(potomek1)
        nowePokolenie.push(potomek2)
    }
    return nowePokolenie
}

export function mutacja(osobnik){
    let path = losowanieCechy(osobnik)
    if(path[0] == 'glowa'){
        if(path.length == 3){
            if(path[1] == 'uszy'){
                if(path[2] == 'dlugoscUszu'){
                    osobnik[path[0]][path[1]][path[2]] = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
                }else if(path[2] == 'szerokoscUszu'){
                    osobnik[path[0]][path[1]][path[2]] = Math.floor(Math.random() * (4 - 1 + 1)) + 1; 
                }else if(path[2] == 'kolorUszu'){
                    osobnik[path[0]][path[1]][path[2]] = randomColor()
                }
            }else if(path[1] == 'pysk'){
                if(path[2] == 'dlugoscPysku'){
                    osobnik[path[0]][path[1]][path[2]] = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
                }else if(path[2] == 'szerokoscPysku'){
                    osobnik[path[0]][path[1]][path[2]] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                }else if(path[2] == 'kolorPyska'){
                    osobnik[path[0]][path[1]][path[2]] = randomColor()
                }
            }else if(path[1] == 'oczy'){
                osobnik[path[0]][path[1]][path[2]] = randomColor()
            }
        }else{
            if(path[1] == 'kolorGlowy'){
                osobnik[path[0]][path[1]] = randomColor()
            }else{            
                osobnik[path[0]][path[1]] = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
            }
        }
    }else if(path[0] == 'tulow'){
        if(path.length == 3){
            if(path[1] == 'nogi'){
                if(path[2] == 'dlugoscNog'){
                    osobnik[path[0]][path[1]][path[2]] = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
                }else if(path[2] == 'kolorNog'){
                    osobnik[path[0]][path[1]][path[2]] = randomColor()
                }
            }else if(path[1] == 'ogon'){
                if(path[2] == 'czyOgon'){
                    osobnik[path[0]][path[1]][path[2]] = (Math.random()>0.5)? 1 : 0
                }else if(path[2] == 'dlugoscOgona'){
                    osobnik[path[0]][path[1]][path[2]] = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
                }else if(path[2] == 'kolorOgona'){
                    osobnik[path[0]][path[1]][path[2]] = randomColor()
                }
            }
        }else{
            if(path[1] == 'kolorTulowia'){
                osobnik[path[0]][path[1]] = randomColor()
            }else{
                osobnik[path[0]][path[1]] = Math.floor(Math.random() * (50 - 6 + 1)) + 6;
            }
        }
    }
    return osobnik
}