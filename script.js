const form = document.getElementById('comentarioForm');
const lista = document.getElementById('listaComentarios');

// Carregar comentários salvos no localStorage
let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

function exibirComentarios() {
  lista.innerHTML = '';
  comentarios.forEach((c) => {
    lista.innerHTML += `
      <div class="comment-box">
        <strong>${c.nome}</strong>
        <p>${c.comentario}</p>
      </div>
    `;
  });
}

// Adicionar novo comentário
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const comentario = document.getElementById('comentario').value;

  // Criar objeto JSON
  const novoComentario = { nome, comentario };

  // Adicionar ao array e salvar no localStorage
  comentarios.push(novoComentario);
  localStorage.setItem('comentarios', JSON.stringify(comentarios));

  // Atualizar lista
  exibirComentarios();

  // Limpar formulário
  form.reset();
});

// Mostrar os comentários ao carregar a página
exibirComentarios();
