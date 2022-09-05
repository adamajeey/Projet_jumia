
let img = document.getElementsByClassName('image1');  /*Declaration d'une variable qui va recuperer toutes les images du slider*/
let etape = 0;   /*Cette variable nous permet savoir quelle image va afficher et l'image qui va de base c'esl l'image 0*/
let nb_image = img.length;  /*Declaration de variable qui permet de savoir le nombre d'images qui sont presentes dans le slider*/

let suivant = document.querySelector('.suivant'); /*Creation de variable qui va recupérer le selecteur suivant*/
let precedent = document.querySelector('.precedent'); /*Creation de variable qui va recupérer le selecteur précédent*/

function slid_image(){             
    for(let i=0; i<nb_image; i++){  /*Creation d'une function qui va parcourir les images du slider*/
        img[i].classList.remove('active');/*Ici il va aller dans le tableau image slider il va le parcours et il enleve toutes les classe active sur toutes les images*/
    }
}

suivant.addEventListener('click', function() { /*Ici on a ajouté un ecouteur d'événement click*/
    etape++; /*Incrementation*/
    if(etape>=nb_image){ /*Si l'étape est >= au nombre d'image*/
        etape=0; /*On va remettre l'etape à 0*/
    }
    slid_image();
    img[etape].classList.add('active'); /*On va mettre la classe active sur l'image correspondant à l'etape courante*/
})

precedent.addEventListener('click', function(){ /*Ici on a ajouté un ecouteur d'événement click*/
    etape--; /*Decrementation*/
    if(etape<0){ /*Si l'étape est <0*/
        etape=nb_image-1 /*On va remettre l'etape = nbr_image -1 comme ca il va revenir a la fin du slider*/
    }
    slid_image();
    img[etape].classList.add('active'); /*On va mettre la classe active sur l'image correspondant à l'etape courante*/
})

setInterval(function(){   /*Funtion qui permet d'excuter toutes les 3 secondes */
    etape++; /*Incrementation*/
    if(etape>=nb_image){ /*Si l'étape est >= au nombre d'image*/
        etape=0; /*On va remettre l'etape à 0*/
    }
    slid_image();
    img[etape].classList.add('active'); /*On va remettre l'etape = nbr_image -1 comme ca il va revenir a la fin du slider*/
}, 3000)



const arrow = document.querySelector('.arrow'); /*Constante qui recupère bouton*/
const arrow1 = document.querySelector('.arrow1'); /*Constante qui recupère bouton*/

arrow.disabled = true; /*Désactivé les bouton arrow*/

function image_defil(){  /*Creation d'une function pour faire défiler les images*/
    const img1 = document.getElementsByClassName('image_defil');  /*Récupération Des class dans HTML*/
    const img2 = document.getElementsByClassName('image_defil1'); /*Récupération Des class dans HTML*/

    for(let i = 0; i < img1.length; i++){  /*Une boucle qui va parcourir les images*/
        const sld1 = img1[i];  /*Constante qui recupère le tableau des img1 dont nous avons deja recupéré leur class*/
        const sld2 = img2[i];  /*Constante qui recupère le tableau des img2 dont nous avons deja recupéré leur class*/
        if (sld1.style.display == 'block') { /*Ici c'est la condition si sld1 est egal à block*/
            sld1.style.display = 'none';  /*sld1 n'affiche pas*/
            sld2.style.display = 'block'; /*slid2 affiche*/
            arrow1.disabled = true; /*On desactive arrow1*/     
            arrow.disabled = false; /*Et on active arrow*/
        } else {  /*Sinon*/
            sld1.style.display = 'block'; /*slid1 affiche*/
            sld2.style.display = 'none'; /*slid2 n'affiche pas*/
            arrow.disabled = true; /*On desactive arrow*/  
            arrow1.disabled = false; /*Et on active arrow1*/
        }
    }   
}