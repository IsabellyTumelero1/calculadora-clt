function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    if(isNaN(horastrabalhadas) || isNaN(cargahoraria) || isNaN(salario)){
        return "todos os valores devem ser números"
    }

    if(horastrabalhadas < 0 || cargahoraria < 0 || salario < 0){
        return "todos os valores devem ser positivos"
    }
    
    let horasextras = 0
    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario
    }

    return horasextras
}
module.exports = fnHorasExtras;