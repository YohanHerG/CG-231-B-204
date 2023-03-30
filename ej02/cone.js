/*Yohan Hernando González Gutiérrez - 6000615*/


/*Metodo que crea una escena y color de la misma*/
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        /*Metodo que añade una camara a la escena*/
        var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight );

        /*Parametros rotacion y posicion de la camara*/
        camera.position.z = 5.8;
        camera.rotation.x = -0.40;
        camera.rotation.y = 0.10;
        camera.position.x = -0.5;
        camera.position.y = 5;

        /*Creamos el render*/
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        /*Metodo para añadir un (cono) y un material a la escena*/
        const geometry3 = new THREE.ConeGeometry(2, 4, 15,1);
        const material3 = new THREE.MeshBasicMaterial( {color: 0x00FFD8} );
        const cone = new THREE.Mesh( geometry3, material3 );
        scene.add( cone );

        /*Metodo que crea el plano cartesiano de la escena*/
        const axesHelper = new THREE.AxesHelper(10);
        scene.add( axesHelper );

        /*Metodo que crea la maya en la escena*/
        const size = 100;
        const divisions = 50;
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );

        /*Una funcion para ubicar las respectivas geometrias*/
        function render() {

            cone.rotation.x = (Math.PI*1);
            cone.rotation.z = -(Math.PI*1)/2.5;

            cone.position.x = 2.56;
            cone.position.y = 0.8;
            cone.position.z = 0;
  
    renderer.render(scene, camera);

     setTimeout(()=>{requestAnimationFrame(render)}, 100);
  }
  requestAnimationFrame(render);

main();