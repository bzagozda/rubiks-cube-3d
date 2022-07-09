import * as TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three'

import { Vector3 } from 'three'
import { createRubiksCube, rotateEdge } from './cube'
import { generateScramble } from './generator'
import { parser } from './parser'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xe6e6e6)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const rcubeData = createRubiksCube()
const rcube = rcubeData.rcube
scene.add(rcube)

camera.position.z = 5
camera.position.x = -5
camera.position.y = 5
camera.lookAt(new Vector3())

const scramble = generateScramble()

const parsedRotations = parser.run(scramble)
if (parsedRotations.isError) {
    throw new Error(parsedRotations.error)
}

;(async () => {
    for (const r of parsedRotations.result) {
        await rotateEdge(rcubeData, r)
    }
})()

function animate() {
    requestAnimationFrame(animate)
    TWEEN.update()
    renderer.render(scene, camera)
}

animate()
