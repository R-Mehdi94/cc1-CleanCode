function jeterDes(des){
    if(des[0] == des[1] == des[2] == des[3] == des[4]){
        return 50;
    } 
    return des[0] + des[1] + des[2] + des[3] + des[4]
}


module.exports = jeterDes;