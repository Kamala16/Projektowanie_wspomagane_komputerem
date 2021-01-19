import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function corgi(){
    const corgi = {
        tulow: { 
            dlugoscTulowia: 20, szerokoscTulowia: 14, wysokoscTulowia: 8, kolorTulowia: 0xD28018,
            nogi: { dlugoscNog: 4, kolorNog: 0xF58F0E },
            ogon: { czyOgon: 1, dlugoscOgona: 10, kolorOgona: 0xF58F0E }
        },
        glowa: {
            dlugoscGlowy: 6, wysokoscGlowy: 10, szerokoscGlowy: 10, kolorGlowy: 0xF5B05B,
            uszy: { dlugoscUszu: 8, szerokoscUszu: 2.5, kolorUszu: 0xD28018 },
            pysk: { dlugoscPysku: 6, szerokoscPysku: 3.5, kolorPyska: 0xeeeeee },
            nos: { kolorNosa: 0x000000 },
            oczy: { kolorOczu: 0x000000 }
        }
    };
    return corgi
}

export function jamnik(){
    const jamnik = {
        tulow: { 
            dlugoscTulowia: 25, szerokoscTulowia: 10, wysokoscTulowia: 5, kolorTulowia: 0x8B4513,
            nogi: { dlugoscNog: 2, kolorNog: 0xA0522 },
            ogon: { czyOgon: 1, dlugoscOgona: 10, kolorOgona: 0xA0522D }
        },
        glowa: {
            dlugoscGlowy: 8, wysokoscGlowy: 6, szerokoscGlowy: 5, kolorGlowy: 0xA0522D,
            uszy: { dlugoscUszu: 6, szerokoscUszu: 1.5, kolorUszu: 0x8B4513 },
            pysk: { dlugoscPysku: 5.5, szerokoscPysku: 2, kolorPyska: 0x000000 },
            nos: { kolorNosa: 0x000000 },
            oczy: { kolorOczu: 0x000000 }
        }
    };
    return jamnik
}

export function husky(){
    const husky = {
        tulow: { 
            dlugoscTulowia: 30, szerokoscTulowia: 12, wysokoscTulowia: 15, kolorTulowia: 0xA9A9A9,
            nogi: { dlugoscNog: 10, kolorNog: 0xeeeeee },
            ogon: { czyOgon: 1, dlugoscOgona: 15, kolorOgona: 0x000000 }
        },
        glowa: {
            dlugoscGlowy: 6, wysokoscGlowy: 10, szerokoscGlowy: 7, kolorGlowy: 0x000000,
            uszy: { dlugoscUszu: 5, szerokoscUszu: 2, kolorUszu: 0xA9A9A9 },
            pysk: { dlugoscPysku: 6, szerokoscPysku: 2.5, kolorPyska: 0xeeeeee },
            nos: { kolorNosa: 0x000000 },
            oczy: { kolorOczu: 0x168AF1 }
        }
    };
    return husky
}

export function samoyed(){
    const samoyed = {
        tulow: { 
            dlugoscTulowia: 25, szerokoscTulowia: 14, wysokoscTulowia: 12, kolorTulowia: 0xeeeeee,
            nogi: { dlugoscNog: 7, kolorNog: 0xeeeeee },
            ogon: { czyOgon: 1, dlugoscOgona: 15, kolorOgona: 0xeeeeee }
        },
        glowa: {
            dlugoscGlowy: 6, wysokoscGlowy: 8, szerokoscGlowy: 10, kolorGlowy: 0xeeeeee,
            uszy: { dlugoscUszu: 5, szerokoscUszu: 2, kolorUszu: 0xeeeeee },
            pysk: { dlugoscPysku: 3, szerokoscPysku: 3, kolorPyska: 0xeeeeee },
            nos: { kolorNosa: 0x000000 },
            oczy: { kolorOczu: 0x000000 }
        }
    };
    return samoyed
}