const corPulseira = prompt("Qual a cor da pulseira? (vermelha, amarela ou verde)").toLowerCase().trim();
const idade = parseInt(prompt("Qual a idade do paciente ? "))
const gestante = prompt ("Você é gestante ? ").toLowerCase().trim() === "sim";

if (corPulseira === "vermelha") {
    alert("Atendimento de Emergência: Sala de trauma imediata"); 

} else if (corPulseira === "amarela") {

    if (idade >= 60 || gestante === true) {
        alert("atendimento urgente: Prioridade Especial Preferencial");
    } else {
        alert("atendimento Urgente: fila padrão amarela");
    }

} else if (corPulseira === "verde") {

    let resultado = idade <12
        ? "encaminhar para pediatria"
        : "encaminhar para clinica geral";


    alert(resultado);

 }else {
    alert("cor da pulseira invalida!") 
}



