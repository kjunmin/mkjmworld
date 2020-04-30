import React, { useEffect, useState, useRef, DOMElement, Ref } from 'react';
import * as THREE from 'three';
import '../../css/styles.css';

function ProjectGlobe() {

    const mount: any = useRef(null);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    useEffect(() => {
        const scene = new THREE.Scene();
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        renderer.setSize(WIDTH, HEIGHT);

        const VIEW_ANGLE = 45;
        const ASPECT = WIDTH / HEIGHT;
        const NEAR = 0.1;
        const FAR = 10000;

        const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        // scene.background = new THREE.Color(0x000);
        scene.add(camera);



        const RADIUS = 200;
        const SEGMENTS = 50;
        const RINGS = 50;

        const globe = new THREE.Group();

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshPhongMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);


        // scene.add(globe);
        // var loader = new THREE.TextureLoader();
        // loader.load('../../resources/ireland_ocean_ice_cloud_2048.jpg', function (texture) {

        //     // Create the sphere
        //     var sphere = new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS);
        //     // Map the texture to the material. 
        //     var material = new THREE.MeshBasicMaterial({ map: texture });
        //     // Create a new mesh with sphere geometry.
        //     var mesh = new THREE.Mesh(sphere, material);

        //     // Add mesh to globe
        //     globe.add(mesh);
        // });
        // globe.position.z = -300;

        mount.current.appendChild(renderer.domElement);
    }, [])



    return (
        <div className="globe-container" ref={mount}></div>
    )
}

export default ProjectGlobe;