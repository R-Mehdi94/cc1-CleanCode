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

function jeterDes(des){

    let somme = 0

    if(yams(des)){
        return 50;
    } 


    if(brelan(resultatDes(des))){
        return 28;
    } 


    if(grandeSuite(des)){
        return 40
    }


    return chance(des)

}


module.exports = jeterDes;