import * as TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three'

import { Object3D, Quaternion, Vector3 } from 'three'
import { Rotation } from './parser'
import { radian } from './util'

export interface Colors {
    right?: number
    left?: number
    top?: number
    bottom?: number
    front?: number
    back?: number
}

export interface CubeData {
    cubeIndex: THREE.Vector3
    cube: THREE.Mesh
}

export interface RubiksCube {
    rcube: THREE.Object3D
    cubes: CubeData[]
}

export const createRubiksCube = () => {
    const cubes = [
        createCube(
            new Vector3(-1, 1, 1),
            new Vector3(-1.1, 1.1, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                front: 0x0000ff,
                top: 0xffffff,
            }
        ),
        createCube(
            new Vector3(0, 1, 1),
            new Vector3(0, 1.1, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                front: 0x0000ff,
                top: 0xffffff,
            }
        ),
        createCube(
            new Vector3(1, 1, 1),
            new Vector3(1.1, 1.1, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                front: 0x0000ff,
                top: 0xffffff,
                right: 0xffa500,
            }
        ),
        createCube(
            new Vector3(1, 1, 0),
            new Vector3(1.1, 1.1, 0),
            new Vector3(radian(0), radian(0)),
            {
                top: 0xffffff,
                right: 0xffa500,
            }
        ),
        createCube(
            new Vector3(0, 1, 0),
            new Vector3(0, 1.1, 0),
            new Vector3(radian(0), radian(0)),
            {
                top: 0xffffff,
            }
        ),
        createCube(
            new Vector3(-1, 1, 0),
            new Vector3(-1.1, 1.1, 0),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                top: 0xffffff,
            }
        ),
        createCube(
            new Vector3(-1, 1, -1),
            new Vector3(-1.1, 1.1, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                back: 0x00ff00,
                top: 0xffffff,
            }
        ),
        createCube(
            new Vector3(0, 1, -1),
            new Vector3(0, 1.1, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                back: 0x00ff00,
                top: 0xffffff,
            }
        ),
        createCube(
            new Vector3(1, 1, -1),
            new Vector3(1.1, 1.1, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                back: 0x00ff00,
                top: 0xffffff,
                right: 0xffa500,
            }
        ),

        createCube(
            new Vector3(-1, 0, 1),
            new Vector3(-1.1, 0, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                front: 0x0000ff,
            }
        ),
        createCube(
            new Vector3(0, 0, 1),
            new Vector3(0, 0, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                front: 0x0000ff,
            }
        ),
        createCube(
            new Vector3(1, 0, 1),
            new Vector3(1.1, 0, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                front: 0x0000ff,
                right: 0xffa500,
            }
        ),
        createCube(
            new Vector3(1, 0, 0),
            new Vector3(1.1, 0, 0),
            new Vector3(radian(0), radian(0)),
            {
                right: 0xffa500,
            }
        ),
        createCube(
            new Vector3(-1, 0, 0),
            new Vector3(-1.1, 0, 0),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
            }
        ),
        createCube(
            new Vector3(-1, 0, -1),
            new Vector3(-1.1, 0, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                back: 0x00ff00,
            }
        ),
        createCube(
            new Vector3(0, 0, -1),
            new Vector3(0, 0, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                back: 0x00ff00,
            }
        ),
        createCube(
            new Vector3(1, 0, -1),
            new Vector3(1.1, 0, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                back: 0x00ff00,
                right: 0xffa500,
            }
        ),

        createCube(
            new Vector3(-1, -1, 1),
            new Vector3(-1.1, -1.1, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                front: 0x0000ff,
                bottom: 0xffdf00,
            }
        ),
        createCube(
            new Vector3(0, -1, 1),
            new Vector3(0, -1.1, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                front: 0x0000ff,
                bottom: 0xffdf00,
            }
        ),
        createCube(
            new Vector3(1, -1, 1),
            new Vector3(1.1, -1.1, 1.1),
            new Vector3(radian(0), radian(0)),
            {
                front: 0x0000ff,
                bottom: 0xffdf00,
                right: 0xffa500,
            }
        ),
        createCube(
            new Vector3(1, -1, 0),
            new Vector3(1.1, -1.1, 0),
            new Vector3(radian(0), radian(0)),
            {
                bottom: 0xffdf00,
                right: 0xffa500,
            }
        ),
        createCube(
            new Vector3(0, -1, 0),
            new Vector3(0, -1.1, 0),
            new Vector3(radian(0), radian(0)),
            {
                bottom: 0xffdf00,
            }
        ),
        createCube(
            new Vector3(-1, -1, 0),
            new Vector3(-1.1, -1.1, 0),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                bottom: 0xffdf00,
            }
        ),
        createCube(
            new Vector3(-1, -1, -1),
            new Vector3(-1.1, -1.1, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                left: 0xff0000,
                back: 0x00ff00,
                bottom: 0xffdf00,
            }
        ),
        createCube(
            new Vector3(0, -1, -1),
            new Vector3(0, -1.1, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                back: 0x00ff00,
                bottom: 0xffdf00,
            }
        ),
        createCube(
            new Vector3(1, -1, -1),
            new Vector3(1.1, -1.1, -1.1),
            new Vector3(radian(0), radian(0)),
            {
                back: 0x00ff00,
                bottom: 0xffdf00,
                right: 0xffa500,
            }
        ),
    ]

    const rcube = new Object3D()
    rcube.add(...cubes.map((c) => c.cube))
    return { rcube, cubes }
}

export const rotateEdge = (
    cube: RubiksCube,
    rotation: Rotation,
    angle: number = 90,
    edgeRotationTime = 500
): Promise<unknown> => {
    const angleMultiplier = rotation.twice ? 2 : 1

    switch (rotation.letter.toLowerCase()) {
        case 'r': {
            const rotateCubes = cube.cubes.filter((c) => c.cubeIndex.x === 1)
            const rotate = rotateAroundAxis(
                new THREE.Vector3(1, 0, 0),
                (rotation.inversed ? angle : -angle) * angleMultiplier,
                edgeRotationTime
            )

            return Promise.all(rotateCubes.map(rotate))
        }

        case 'l': {
            const rotateCubes = cube.cubes.filter((c) => c.cubeIndex.x === -1)
            const rotate = rotateAroundAxis(
                new THREE.Vector3(1, 0, 0),
                (rotation.inversed ? -angle : angle) * angleMultiplier,
                edgeRotationTime
            )

            return Promise.all(rotateCubes.map(rotate))
        }

        case 'f': {
            const rotateCubes = cube.cubes.filter((c) => c.cubeIndex.z === 1)
            const rotate = rotateAroundAxis(
                new THREE.Vector3(0, 0, 1),
                (rotation.inversed ? angle : -angle) * angleMultiplier,
                edgeRotationTime
            )

            return Promise.all(rotateCubes.map(rotate))
        }

        case 'b': {
            const rotateCubes = cube.cubes.filter((c) => c.cubeIndex.z === -1)
            const rotate = rotateAroundAxis(
                new THREE.Vector3(0, 0, 1),
                (rotation.inversed ? -angle : angle) * angleMultiplier,
                edgeRotationTime
            )

            return Promise.all(rotateCubes.map(rotate))
        }

        case 'u': {
            const rotateCubes = cube.cubes.filter((c) => c.cubeIndex.y === 1)
            const rotate = rotateAroundAxis(
                new THREE.Vector3(0, 1, 0),
                (rotation.inversed ? angle : -angle) * angleMultiplier,
                edgeRotationTime
            )

            return Promise.all(rotateCubes.map(rotate))
        }

        case 'd': {
            const rotateCubes = cube.cubes.filter((c) => c.cubeIndex.y === -1)
            const rotate = rotateAroundAxis(
                new THREE.Vector3(0, 1, 0),
                (rotation.inversed ? -angle : angle) * angleMultiplier,
                edgeRotationTime
            )

            return Promise.all(rotateCubes.map(rotate))
        }
        default: {
            return Promise.resolve()
        }
    }
}

const rotateAroundAxis =
    (rotationAxis: THREE.Vector3, angle: number, time: number) =>
    (cubeData: CubeData) => {
        const quaternion = new THREE.Quaternion()
        quaternion.setFromAxisAngle(rotationAxis, radian(angle))

        cubeData.cubeIndex.applyQuaternion(quaternion).round()

        const position = new Vector3().copy(cubeData.cube.position)

        new TWEEN.Tween({ t: 0 })
            .to({ t: 1 }, time)
            .onUpdate((tween) => {
                const quaternion = new THREE.Quaternion()
                quaternion.setFromAxisAngle(
                    rotationAxis,
                    radian(angle * tween.t)
                )

                cubeData.cube.position.copy(
                    new Vector3().copy(position).applyQuaternion(quaternion)
                )
            })
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()

        let prevT = 0
        new TWEEN.Tween({ t: 0 })
            .to({ t: 1 }, time)
            .onUpdate(({ t }) => {
                let quaternion = new Quaternion()
                const delta = t - prevT
                prevT = t

                quaternion.setFromAxisAngle(rotationAxis, radian(angle) * delta)

                cubeData.cube.applyQuaternion(quaternion)
            })
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()

        return new Promise((resolve) => setTimeout(resolve, time))
    }

const createCube = (
    cubeIndex: Vector3,
    position: Vector3,
    rotation: Vector3,
    colors: Colors
) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const materials = [
        new THREE.MeshBasicMaterial({ color: colors.right ?? 0x0 }), // right
        new THREE.MeshBasicMaterial({ color: colors.left ?? 0x0 }), // left
        new THREE.MeshBasicMaterial({ color: colors.top ?? 0x0 }), // top
        new THREE.MeshBasicMaterial({ color: colors.bottom ?? 0x0 }), // bottom
        new THREE.MeshBasicMaterial({ color: colors.front ?? 0x0 }), // front
        new THREE.MeshBasicMaterial({ color: colors.back ?? 0x0 }), // back
    ]

    const cube = new THREE.Mesh(geometry, materials)
    cube.position.set(position.x, position.y, position.z)
    cube.rotation.set(rotation.x, rotation.y, rotation.z)

    return { cubeIndex, cube }
}
