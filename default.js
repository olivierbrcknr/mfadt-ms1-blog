

let checkImagesFor2x = () => {
  let images = document.querySelectorAll('img');

  images.forEach( (img) => {

    if( img.src.includes('@2x') ){
      img.onload = () => {
        img.style.maxWidth = img.naturalWidth / 2 + 'px';
      }
    }
  });
}

const loader = new THREE.OBJLoader();

class Object3D {

  constructor(
    fileName,
    objWidth = 664, // in px
    objHeight = 664, // in px
    material,
    scrollRotationFactor = 0.7,
    rotateSpeed = 0.2
  ){
    this.fileName = fileName;
    this.scrollRotationFactor = scrollRotationFactor;
    this.rotateSpeed = rotateSpeed;
    this.objWidth = objWidth;
    this.objHeight = objHeight;

    this.rotationX = 0;

    this.material = material;
    if( !material ){
      this.material = new THREE.MeshPhongMaterial( {
        color: 0xCCCCCC,
      } );
    }

    this.cube = null;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 30, this.objWidth/this.objHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.animate = () => {
      requestAnimationFrame( this.animate );
      this.cube.rotation.y += 0.01 * this.rotateSpeed;
      this.cube.rotation.x = this.rotationX;
      this.renderer.render( this.scene, this.camera );
    }
  }

  pass( obj ){
    this.cube = obj;
    this.cube.receiveShadow = true;
    this.cube.castShadow = true;
    this.init();
  }

  init(){

    this.renderer.setSize( this.objWidth, this.objHeight );
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // init
    let el = document.querySelector('.obj-'+this.fileName);
    el.appendChild( this.renderer.domElement );

    let rotateObj = ( perc ) => {
      let rotation = perc * Math.PI * 2 ;
      this.cube.rotation.y = rotation ;
    }

    el.addEventListener("mousedown", function(e){
      el.onmousemove = function(e) {
        //console.log( e.offsetX, el.clientWidth )
        rotateObj( e.offsetX / el.clientWidth );
      }
    });
    el.addEventListener("mouseleave", function(e){
      el.onmousemove = null
    });
    el.addEventListener("mouseup", function(e){
      el.onmousemove = null
    });

    this.scene.add( this.cube );
    this.camera.position.z = 360;

    var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
    light.position.set( -5, 10, 10 );
    light.castShadow = true;
    this.scene.add( light );

    this.animate();
  }
  onScroll(){
    let bounding = this.renderer.domElement.getBoundingClientRect();
    this.rotationX = this.scrollRotationFactor * bounding.top / window.innerHeight;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  // checkImagesFor2x();

});
