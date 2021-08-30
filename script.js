const Formulario = () => {
    let form = {
        nome: document.getElementById('nome').value,
        profissao: document.getElementById('profissao').value,
        birth: document.getElementById('birth').value,
        civil: document.getElementById('civil').value,
        sexo: document.getElementById('sexo').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        tel1: document.getElementById('tel1').value,
        tel2: document.getElementById('tel2').value,
        cel: document.getElementById('cel').value,
        email: document.getElementById('email').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('frmCpf').value,
        veiculo: document.getElementById('veiculo').value,
        habilitacao: document.getElementById('habilitacao').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {

    const requisicao = await fetch('https://desafiofinal-gamacademy.herokuapp.com/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    if (requisicao.status === 200) {
        alert('CADASTRO CONCLUÍDO!');
    }

    if (requisicao.status === 500) {
        alert('CPF OU EMAIL JÁ FOI CADASTRADO');
    }
    location.reload();
}

function check_form() {
        let nome =  document.getElementById('nome').value;
        let profissao =  document.getElementById('profissao').value;
        let birth =  document.getElementById('birth').value;
        let civil = document.getElementById('civil').value;
        let sexo =  document.getElementById('sexo').value;
        let cep =  document.getElementById('cep').value;
        let rua =  document.getElementById('rua').value;
        let bairro =  document.getElementById('bairro').value;
        let cidade =  document.getElementById('cidade').value;
        let tel1 =  document.getElementById('tel1').value;
        let tel2 =  document.getElementById('tel2').value;
        let cel =  document.getElementById('cel').value;
        let email =  document.getElementById('email').value; 
        let rg =  document.getElementById('rg').value;
        let cpf =  document.getElementById('frmCpf').value;
        

    if (nome == "" || profissao == "" || birth == "" || civil == "" || sexo == "" || cep == "" || rua == ""
        || bairro == "" || cidade == "" || tel1 == "" || tel2 == "" || cel == "" ||
        email == false || rg == "" || cpf == "" )  {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        criarCandidato();
        alert('Verificando cadastro...');
    }
}
