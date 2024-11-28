function jeterDes(des){

    if(des.every(element => element === des[0])){
        return 50;
    } 

    let desResultat = {}

    

    for(let i = 0; i<des.length; i++){
        const valeur = des[i];
        if(desResultat[valeur] == null){
            desResultat[valeur] = 1;
        }else{
            desResultat[valeur] +=1;
        }
    }

    for(let resultat in desResultat){
        if (desResultat[resultat] == 3){
            return 28
        }   
    }


    if(des[0] + des[1] + des[2] + des[3] + des[4] == 15 | des[0] + des[1] + des[2] + des[3] + des[4] == 20){
        return 40
    }


    return des[0] + des[1] + des[2] + des[3] + des[4]
}


module.exports = jeterDes;