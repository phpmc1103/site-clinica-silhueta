// Dados de contato da clínica, usados no Header, Footer e botões de WhatsApp.
// TODO: confirmar todos com o André (WhatsApp oficial, horários, e-mail).

const whatsappNumero = "5565981510109";
const mensagem = "Olá! Gostaria de agendar um horário na Clínica Silhueta.";

export const clinica = {
  nome: "Clínica Silhueta",
  whatsappTexto: "(65) 98151-0109",
  whatsappLink: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`,
  telefoneTexto: "(65) 3624-9588",
  telefoneLink: "tel:+556536249588",
  instagram: "@clinicasilhueta",
  instagramLink: "https://www.instagram.com/clinicasilhueta/",
  endereco: "Rua 24 de Outubro, 194 – Centro Norte",
  cidade: "Cuiabá – MT, 78005-330",
  mapaLink:
    "https://www.google.com/maps/search/?api=1&query=Rua+24+de+Outubro+194+Centro+Norte+Cuiaba+MT",
  // TODO: horários provisórios, confirmar com a clínica
  horarios: ["Segunda a sexta: 8h às 18h", "Sábado: com agendamento"],
};
