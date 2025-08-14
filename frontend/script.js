document.addEventListener('DOMContentLoaded', () => {
    // Selecionando os elementos
    const funcIdInput = document.getElementById("funcId");
    const buscarBtn = document.getElementById("buscarBtn");
    const dadosFuncionarioDiv = document.getElementById("dadosFuncionario");
    const infoFuncionarioDiv = document.getElementById("infoFuncionario");
    const sugerirBtn = document.getElementById("sugerirBtn");
    const sugestaoDiv = document.getElementById("sugestao");
    const sugestaoTextoP = document.getElementById("sugestaoTexto");

    let funcionarioAtual = null;

    // Função para buscar dados do funcionário
    buscarBtn.addEventListener('click', async () => {
        const id = funcIdInput.value.trim();

        if (!id) {
            infoFuncionarioDiv.innerHTML = "<em>Informe um ID válido.</em>";
            dadosFuncionarioDiv.classList.remove("hidden");
            sugestaoDiv.classList.add("hidden");
            return;
        }

        infoFuncionarioDiv.innerHTML = "<em>Buscando dados...</em>";
        dadosFuncionarioDiv.classList.remove("hidden");
        sugestaoDiv.classList.add("hidden");
        sugerirBtn.style.display = 'block';

        try {
            const res = await fetch(`http://localhost:3000/funcionario/${id}`);
            if (!res.ok) throw new Error("Erro ao buscar funcionário");

            funcionarioAtual = await res.json();
            infoFuncionarioDiv.innerHTML = `
                <strong>Nome:</strong> ${funcionarioAtual.nome}<br>
                <strong>Departamento:</strong> ${funcionarioAtual.departamento}
            `;
            sugerirBtn.style.display = 'block';

        } catch (err) {
            infoFuncionarioDiv.innerHTML = `<em class="error-msg">${err.message}</em>`;
            sugerirBtn.style.display = 'none';
        }
    });

    // Função para pedir sugestões de datas de férias
    sugerirBtn.addEventListener('click', async () => {
        if (!funcionarioAtual) {
            sugestaoTextoP.innerHTML = "<em>Busque um funcionário primeiro.</em>";
            sugestaoDiv.classList.remove("hidden");
            return;
        }

        sugestaoTextoP.innerHTML = "<em>Buscando sugestões...</em>";
        sugestaoDiv.classList.remove("hidden");

        try {
            const res = await fetch('http://localhost:3000/sugestao-ferias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: funcionarioAtual.id })
            });

            if (!res.ok) throw new Error("Erro ao sugerir datas");

            const sugestao = await res.json();
            sugestaoTextoP.innerHTML = sugestao.sugestao;
            
        } catch (err) {
            sugestaoTextoP.innerHTML = `<em class="error-msg">${err.message}</em>`;
        }
    });
});