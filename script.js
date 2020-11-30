function seleccion(a){
    b=document.getElementById(a);
    b.classList.add('tr');
    setTimeout(function(){b.classList.add('n');
    setTimeout(function(){
        b.classList.remove('tr');
        b.classList.remove('n')
    },4000)
},2000)
}





