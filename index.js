function grandeSuite(des){
    if(des[0] + des[1] + des[2] + des[3] + des[4] == 15 | des[0] + des[1] + des[2] + des[3] + des[4] == 20){
        return true
    }
    return false
}

function chance(des){
    return des[0] + des[1] + des[2] + des[3] + des[4]
}

function yams(des){
    if(des.every(element => element === des[0])){
        return true;
    }
    return false; 
}

function resultatDes(des){
    let desResultat = {}

    for(let i = 0; i<des.length; i++){
        const valeur = des[i];
        if(desResultat[valeur] == null){
            desResultat[valeur] = 1;
        }else{
            desResultat[valeur] +=1;
        }
    }
    return desResultat;
}

function brelan(desResultat){
    for(let resultat in desResultat){
        if (desResultat[resultat] == 3){
            return true
        }   
    }
    return false;
}

function carre(desResultat){
    for(let resultat in desResultat){
        if (desResultat[resultat] == 4){
            return true
        }   
    }
    return false;
}

function full(desResultat){
    let verificationEgal3 = false
    let verificationEgal2 = false

    for(let resultat in desResultat){
        if (desResultat[resultat] == 3){
            verificationEgal3 = true
        }

        if (desResultat[resultat] == 2){
            verificationEgal2 = true
        }

        if(verificationEgal3 && verificationEgal2){
            return true
        }

    }
    return false;
}



function jeterDes(resultatLancer){

    let somme = 0;

    for(let i = 0; i<resultatLancer[1]; i++){
        if(yams(resultatLancer[0])){
            somme += 50;
            continue;
        }  
    
        if(full(resultatDes(resultatLancer[0]))){
            somme +=  30;
            continue;
        } 
    
        if(brelan(resultatDes(resultatLancer[0]))){
            somme +=  28;
            continue;
        } 
    
    
        if(carre(resultatDes(resultatLancer[0]))){
            somme +=  35;
            continue;
        }
    
    
        if(grandeSuite(resultatLancer[0])){
            somme +=  40
            continue;
        }
    
    
        somme +=  chance(resultatLancer[0])
        continue;
    }

    return somme


}

module.exports = jeterDes;