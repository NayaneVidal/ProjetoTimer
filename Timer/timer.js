var display = document.getElementById('display')

var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')
var parar = document.getElementById('parar')
var cancelar = document.getElementById('cancelar')

var horaAtual;
var minutoAtual;
var segundoAtual;

var interval

for(var i = 0; i<=24; i++){
    horas.innerHTML+='<option value='+i+'>'+i+'</option>';
}

for(var i = 0; i<=60; i++){
    minutos.innerHTML+='<option value='+i+'>'+i+'</option>';
}

for(var i = 0; i<=60; i++){
    segundos.innerHTML+='<option value='+i+'>'+i+'</option>';
}



comecar.addEventListener('click',function(){
    horaAtual = horas.value
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual

    interval = setInterval(function(){
        segundoAtual--;

        if(minutoAtual<=0){
            if(horaAtual>0){
                horaAtual --
                minutoAtual = 60
                minutoAtual --
                segundoAtual = 59
            }
           }
        if(segundoAtual<=0){
            if(minutoAtual>0){
                minutoAtual--
                segundoAtual= 59
                
               
            }else{
                clearInterval(interval)
                document.getElementById('sound').play();
                alert("Acabou o Tempo!")
            }
        }

        display.childNodes[1].innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
    }, 1000)

    

})


parar.addEventListener('click',function(){
    clearInterval(interval)
   
})

cancelar.addEventListener('click',function(){
    clearInterval(interval)
   display.childNodes[1].innerHTML=(" ");
})