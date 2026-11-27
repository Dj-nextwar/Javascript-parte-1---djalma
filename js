// ======================================================
// VALIDAÇÃO DO FORMULÁRIO
// ======================================================

function validar() {

    // Campos do formulário
    const txt_nome = document.querySelector("#txt_nome");
    const txt_email = document.querySelector("#txt_email");
    const txt_email_confirma = document.querySelector("#txt_email_confirma");
    const txt_celular = document.querySelector("#txt_celular");
    const txt_celular_confirma = document.querySelector("#txt_celular_confirma");
    const txt_senha = document.querySelector("#txt_senha");
    const txt_confirma = document.querySelector("#txt_confirma");

    // Área de mensagens
    const mensagem = document.querySelector("#p_mensagem");

    // Limpa mensagens anteriores
    mensagem.innerHTML = "";

    // Cria lista de validações
    const lista = document.createElement("ul");

    // Função auxiliar para criar itens
    const adicionarItem = (texto, valido) => {
        const item = document.createElement("li");
        item.textContent = texto;
        item.classList.add(valido ? "correto" : "erro");
        lista.appendChild(item);
    };

    // Validação de e-mail
    adicionarItem(
        "E-mails estão iguais",
        txt_email.value === txt_email_confirma.value
    );

    // Validação de celular
    adicionarItem(
        "Celulares estão iguais",
        txt_celular.value === txt_celular_confirma.value
    );

    // Validação de senha
    adicionarItem(
        "Senhas estão iguais",
        txt_senha.value === txt_confirma.value
    );

    // Exibe resultados
    mensagem.appendChild(lista);

    return false;
}


// ======================================================
// LIMPAR MENSAGENS
// ======================================================

function limpar() {
    document.querySelector("#p_mensagem").innerHTML = "";
}


// ======================================================
// ADICIONAR APELIDO
// ======================================================

function adicionar_apelido() {

    // Obtém os elementos
    const txt_apelido = document.querySelector("#txt_apelido");
    const lst_apelido = document.querySelector("#lst_apelido");

    // Não adiciona apelidos vazios
    if (!txt_apelido.value.trim()) return;

    // Cria nova opção
    const opcao = document.createElement("option");
    opcao.textContent = txt_apelido.value;

    // Adiciona na lista
    lst_apelido.appendChild(opcao);

    // Exibe a lista
    document.querySelector("#p_lista_apelido").style.display = "block";

    // Limpa o campo
    txt_apelido.value = "";
    txt_apelido.focus();
}


// ======================================================
// GRAVAR APELIDO FAVORITO
// ======================================================

async function gravar_apelido() {

    // Obtém apelido selecionado
    const selecionado = document.querySelector(
        "#lst_apelido option:checked"
    );

    if (!selecionado) return;

    // Salva no cookie
    await cookieStore.set(
        "apelido_favorito",
        selecionado.innerText
    );
}


// ======================================================
// CARREGAR APELIDO FAVORITO
// ======================================================

async function carregar_apelido() {

    // Recupera cookie
    const cookie = await cookieStore.get("apelido_favorito");

    if (!cookie) return;

    // Exibe a lista
    document.querySelector("#p_lista_apelido").style.display = "block";

    // Adiciona o apelido recuperado
    const opcao = document.createElement("option");
    opcao.textContent = cookie.value;

    document.querySelector("#lst_apelido").appendChild(opcao);
}
