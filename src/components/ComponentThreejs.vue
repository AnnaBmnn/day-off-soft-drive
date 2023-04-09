<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'

export default {
    name: 'ComponentThreejs',
    data() {
        return {

        }
    },
    mounted() {
        // Canvas
        this.$refs.canvas

        // Sizes
        this.sizes = {
            width: this.$refs.canvas.offsetWidth,
            height: this.$refs.canvas.offsetHeight
        }

        console.log(this.$refs.canvas.offsetHeight )

        // Scene
        this.scene = new THREE.Scene()

        // Base camera
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
        this.camera.position.set(0, 0, 1)
        this.scene.add(this.camera)

        // Controls
        console.log(OrbitControls)
        // this.controls = new OrbitControls(this.camera, this.$refs.canvas)
        // this.controls.enableDamping = true

        this.clock = new THREE.Clock()
        this.previousTime = 0

        /**
         * Renderer
         */
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$refs.canvas,
            alpha: true 
        })
        this.renderer.setClearColor( 0x000000, 0 ); // the default
        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.gltfLoader = new GLTFLoader()
        this.textureLoader = new THREE.TextureLoader()

        /**
         * Post processing
         */
        this.effectComposer = new EffectComposer(this.renderer)
        this.effectComposer.setSize(this.sizes.width, this.sizes.height)
        this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderPass = new RenderPass(this.scene, this.camera)
        const unrealBloomPass = new UnrealBloomPass()
        unrealBloomPass.strength = 0.2
        unrealBloomPass.radius = 1
        unrealBloomPass.threshold = 0.3
        this.effectComposer.addPass(this.renderPass)
        // this.effectComposer.addPass(unrealBloomPass)



        this.loadTexture()
        this.loadGltf()
        this.setLights()
        this.tick()

        // event
        window.addEventListener('resize', () =>
        {
            //width: this.$refs.canvas.offsetWidth,
            //height: this.$refs.canvas.offsetHeight

            // Update sizes
            this.sizes.width = this.$refs.canvas.offsetWidth
            this.sizes.height = this.$refs.canvas.offsetHeight

            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            this.effectComposer.setSize(this.sizes.width, this.sizes.height)
            this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


        })
    },
    methods: {
        loadGltf(){
            this.gltfLoader.load(
                './models/soft-drive-hihhiihi.glb',
                (gltf) =>
                {
                    console.log('success')
                    console.log(gltf)
                    this.gltf = gltf.scene
                    console.log(this.gtlf)


                    this.setTextureOnModel()


                    // this.gltf.material.color = new THREE.Color(0xffffff)
                    // this.gltf.material.emissiveColor = new THREE.Color(0xffffff)
                    // this.gltf.material.emissiveIntensity = 1.0
                    // this.gltf.material.refractionRatio  = 0.95
                    // this.gltf.material.metalness = 1
                    // this.gltf.material.roughness = 0
                    // this.gltf.material.needsUpdate = true
                    
                    // this.gltf.material.wireframe = false
                    // this.gltf.rotation.x = Math.PI * 0.5
                    this.gltf.scale.set(5, 6, 5)
                    this.scene.add(this.gltf)
                },
                (progress) =>
                {
                    console.log('progress')
                    console.log(progress)
                },
                (error) =>
                {
                    console.log('error')
                    console.log(error)
                }
            )
        },
        loadTexture(){
            this.texture = this.textureLoader.load(
                './textures/furry-texture.jpeg',
                (texture) =>
                {
                    this.texture = texture
                    console.log('loading finished')
                    this.setTextureOnModel()
                },
                () =>
                {
                    console.log('loading progressing')
                },
                () =>
                {
                    console.log('loading error')
                }
            )
        },
        setLights(){
            /**
             * Lights
             */
            this.ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
            this.scene.add(this.ambientLight)

            this.directionalLight = new THREE.DirectionalLight(0xffffff, .3)
            this.directionalLight.castShadow = true
            this.directionalLight.shadow.mapSize.set(1024, 1024)
            this.directionalLight.shadow.camera.far = 15
            this.directionalLight.shadow.camera.left = - 7
            this.directionalLight.shadow.camera.top = 7
            this.directionalLight.shadow.camera.right = 7
            this.directionalLight.shadow.camera.bottom = - 7
            this.directionalLight.position.set(5, 5, 5)
            this.scene.add(this.directionalLight)
        },
        setTextureOnModel() {
            if(this.texture && this.gltf){
                // this.scene.background = this.texture;
                this.cubeMaterial3 = new THREE.MeshPhongMaterial( { color: 0xccddff, envMap: this.texture, refractionRatio: 0.98, reflectivity: 0.9 } );
                // this.gltf.material.envMap = this.texture
                // console.log(this.gltf.geometry)
                this.gltf.material = this.cubeMaterial3 
                // this.gltf.material = new THREE.MeshNormalMaterial({})
                this.gltf.children[0].material.metalness = .3
                this.gltf.children[0].material.roughness = 0.2
                
                this.gltf.children[1].material.metalness = 0.3
                this.gltf.children[1].material.transparent = true
                this.gltf.children[1].material.opacity = .9
                // this.gltf.children[1].material.refractionRatio = 0.98
                // this.gltf.children[1].material.reflectivity = 0.1
                console.log(this.gltf.children[1])
                // this.gltf.children[1].material.emissive = this.gltf.children[1].material.color
                // this.gltf.children[1].material.emissive = 0.8
                this.gltf.traverse((child) => {
                //     console.log(child)
                    if(child.material){
                //         // this.cubeMaterial3.color = child.material.color
                //         child.material.envMap = this.texture
                //         // child.material.map = this.texture
                //         // child.material.refractionRatio = 0.98
                        child.material.castShadow = true
                        child.material.receiveShadow = true

                        
                //         child.material.transparent = true
                //         child.material.opacity = 1
                    }

                })
            }
        },
        setCube(){
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
            const cube = new THREE.Mesh( geometry, material );
            this.scene.add( cube );
        },
        tick(){
            const elapsedTime = this.clock.getElapsedTime()
            //const deltaTime = elapsedTime - this.previousTime
            this.previousTime = elapsedTime

            // Animate typo
            if(this.gltf){
                this.gltf.rotation.y += 0.001
                this.gltf.rotation.z += 0.0001
                // this.gltf.children[0].scale.y = Math.abs(Math.sin(elapsedTime)) * 10 + 3
                // this.gltf.scale.y = Math.abs(Math.sin(elapsedTime)) * 3 + 3
                // this.directionalLight.lookAt(this.gltf)
            }
            // this.directionalLight.position.x = Math.cos(elapsedTime * 0.1) * 4

            // Update controls
            // this.controls.update()

            // Render
            // this.renderer.render(this.scene, this.camera)
            this.effectComposer.render()



            // Call tick again on the next frame
            window.requestAnimationFrame(this.tick)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 100%;

}
</style>
