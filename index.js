function jeterDes(des){



    if(des.every(element => element === des[0])){
        return 50;
    } 

    if(des[0] + des[1] + des[2] + des[3] + des[4] == 15 | des[0] + des[1] + des[2] + des[3] + des[4] == 20){
        return 40
    }

    
    return des[0] + des[1] + des[2] + des[3] + des[4]
}


module.exports = jeterDes;