import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { TrackballControls } from 'https://unpkg.com/three/examples/jsm/controls/TrackballControls.js';

var camera, scene, renderer, controls;

export function init() {

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x57c4a);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(-1000, -100, 50);

    controls = new TrackballControls(camera, renderer.domElement);
    controls.minDistance = 20;
    controls.maxDistance = 50;

    scene.add(new THREE.AmbientLight(0x222222));

    var light = new THREE.PointLight(0xffffff);
    light.position.copy(camera.position);
}

export function drawLast(dog, x, y, z){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x57c4a);

    scene.add(new THREE.AmbientLight(0x222222));
    draw(dog, x, y, z)
}

export function show(pokolenie) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x57c4a);

    scene.add(new THREE.AmbientLight(0x222222));

    var light = new THREE.PointLight(0xffffff);
    light.position.copy(camera.position);
    var x = 17;
    var y = 15;
    var z = -5;
    var i = 0
    for (var dog = 0; dog < 10; dog++) {
        x += i
        y += i
        z += i
        draw(pokolenie[dog], x, y, z)
        i += 30
    }
}

export function draw(pies, x, y, z) {
    var group = new THREE.Group();
    //position dla tułowia
    //tulów:
    var corpsGeometry = new THREE.BoxGeometry(pies.tulow.dlugoscTulowia, pies.tulow.wysokoscTulowia, pies.tulow.szerokoscTulowia)
    var corps = new THREE.Mesh(corpsGeometry, new THREE.MeshBasicMaterial({ color: pies.tulow.kolorTulowia }))
    corps.position.set(x, y, z)
    group.add(corps)
    //ogon:
    if (pies.tulow.ogon.czyOgon == 1) {
        var tailGeometry = new THREE.CylinderGeometry(0.1, 2, pies.tulow.ogon.dlugoscOgona, 40);
        var tail = new THREE.Mesh(tailGeometry, new THREE.MeshBasicMaterial({ color: pies.tulow.ogon.kolorOgona }));
        tail.rotation.set(0, 0, -1)
        tail.position.set(x + pies.tulow.dlugoscTulowia / 2 + pies.tulow.ogon.dlugoscOgona / 2 - pies.tulow.ogon.dlugoscOgona / 6, y + pies.tulow.wysokoscTulowia / 2, z)
        group.add(tail)
    }
    //nogi:
    var legGeometry = new THREE.BoxGeometry(2, pies.tulow.nogi.dlugoscNog, 2)
    var leg1 = new THREE.Mesh(legGeometry, new THREE.MeshBasicMaterial({ color: pies.tulow.nogi.kolorNog }));
    var leg2 = new THREE.Mesh(legGeometry, new THREE.MeshBasicMaterial({ color: pies.tulow.nogi.kolorNog }));
    var leg3 = new THREE.Mesh(legGeometry, new THREE.MeshBasicMaterial({ color: pies.tulow.nogi.kolorNog }));
    var leg4 = new THREE.Mesh(legGeometry, new THREE.MeshBasicMaterial({ color: pies.tulow.nogi.kolorNog }));
    leg1.position.set(x - pies.tulow.dlugoscTulowia / 2 + 3, y - pies.tulow.wysokoscTulowia / 2 - pies.tulow.nogi.dlugoscNog / 2, z + pies.tulow.szerokoscTulowia / 2 - 3);
    leg2.position.set(x + pies.tulow.dlugoscTulowia / 2 - 3, y - pies.tulow.wysokoscTulowia / 2 - pies.tulow.nogi.dlugoscNog / 2, z + pies.tulow.szerokoscTulowia / 2 - 3);
    leg3.position.set(x - pies.tulow.dlugoscTulowia / 2 + 3, y - pies.tulow.wysokoscTulowia / 2 - pies.tulow.nogi.dlugoscNog / 2, z - pies.tulow.szerokoscTulowia / 2 + 3);
    leg4.position.set(x + pies.tulow.dlugoscTulowia / 2 - 3, y - pies.tulow.wysokoscTulowia / 2 - pies.tulow.nogi.dlugoscNog / 2, z - pies.tulow.szerokoscTulowia / 2 + 3);
    group.add(leg1);
    group.add(leg2);
    group.add(leg3);
    group.add(leg4);
    //głowa:
    var headGeometry = new THREE.BoxGeometry(pies.glowa.dlugoscGlowy, pies.glowa.wysokoscGlowy, pies.glowa.szerokoscGlowy);
    var head = new THREE.Mesh(headGeometry, new THREE.MeshBasicMaterial({ color: pies.glowa.kolorGlowy }));
    var head_X = x - pies.tulow.dlugoscTulowia / 2 - 1
    var head_Y = y + pies.tulow.wysokoscTulowia / 2 + 3
    var head_Z = z
    head.position.set(head_X, head_Y, head_Z)
    group.add(head)
    //uszy:
    var earGeometry = new THREE.ConeGeometry(pies.glowa.uszy.szerokoscUszu, pies.glowa.uszy.dlugoscUszu, 4);
    var ear1 = new THREE.Mesh(earGeometry, new THREE.MeshBasicMaterial({ color: pies.glowa.uszy.kolorUszu }));
    var ear2 = new THREE.Mesh(earGeometry, new THREE.MeshBasicMaterial({ color: pies.glowa.uszy.kolorUszu }));
    ear1.position.set(head_X + pies.glowa.dlugoscGlowy / 2 - 3, head_Y + pies.glowa.wysokoscGlowy / 2 + 2, head_Z - pies.glowa.szerokoscGlowy / 2)
    ear2.position.set(head_X + pies.glowa.dlugoscGlowy / 2 - 3, head_Y + pies.glowa.wysokoscGlowy / 2 + 2, head_Z + pies.glowa.szerokoscGlowy / 2)
    ear2.rotation.set(0.51, 0, 0)
    ear1.rotation.set(-0.51, 0, 0)
    group.add(ear1)
    group.add(ear2)
    //pysk:
    var mouthGeometry = new THREE.ConeGeometry(pies.glowa.pysk.szerokoscPysku, pies.glowa.pysk.dlugoscPysku, 4);
    var mouth = new THREE.Mesh(mouthGeometry, new THREE.MeshBasicMaterial({ color: pies.glowa.pysk.kolorPyska }));
    var m_X = head_X - pies.glowa.dlugoscGlowy / 2 - 1
    mouth.position.set(head_X - pies.glowa.dlugoscGlowy / 2 - pies.glowa.dlugoscGlowy / 8, head_Y, head_Z)
    mouth.rotation.set(0, 0, 1.2)
    group.add(mouth)
    //nos:
    // var noseGeometry = new THREE.ConeGeometry(0.6, 1, 4)
    // var nose = new THREE.Mesh(noseGeometry, pies.glowa.nos.kolorNosa)
    // nose.position.set(m_X - pies.glowa.pysk.dlugoscPysku/2 + 0.5, head_Y + head_Y/6, head_Z)
    // nose.rotation.set(0, 0, 1.2)
    // group.add(nose)        
    //oczy:
    var eyeGeometry = new THREE.CircleGeometry(0.7, 32);
    var eye1 = new THREE.Mesh(eyeGeometry, new THREE.MeshBasicMaterial({ color: pies.glowa.oczy.kolorOczu }));
    var eye2 = new THREE.Mesh(eyeGeometry, new THREE.MeshBasicMaterial({ color: pies.glowa.oczy.kolorOczu }));
    eye1.position.set(head_X - pies.glowa.dlugoscGlowy/2 - 0.1, head_Y + pies.glowa.wysokoscGlowy/4, head_Z - 2)
    eye2.position.set(head_X - pies.glowa.dlugoscGlowy/2 - 0.1, head_Y + pies.glowa.wysokoscGlowy/4, head_Z + 2)
    eye1.rotation.set(0, -1.6, 0)
    eye2.rotation.set(0, -1.6, 0)
    group.add(eye1)
    group.add(eye2)


    scene.add(group);
}

export function animate() {

    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);

}

