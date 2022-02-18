$(document).ready(function () {

    var menu = document.getElementById('menu');
    var toggle = document.getElementById('hamburger');


        //Ao clicar no Sanduiche
        $(toggle).click(function() {

            if(menu.style.right == '0px') { 

                menu.style.right = "100%"; //Aparece
    
            }else {

                menu.style.right = "0px" //Esconde
    
            }
    
        })

       

})





