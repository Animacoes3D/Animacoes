# Laboratório Virtual - Química

Site do projeto PIBIC com animações 3D de química.

## Estrutura do Site

- `index.html` - Página principal
- `animacoes.html` - Página com vídeos das animações
- `sobre.html` - Informações sobre o projeto
- `styles.css` - Estilos do site
- `script.js` - Funcionalidades JavaScript

## Como Atualizar

1. Edite os arquivos localmente
2. Use os comandos:
   ```bash
   git add .
   git commit -m "Descrição da alteração"
   git push
   ```

### 7. **Dicas Importantes:**

#### **Antes de Fazer Push:**

- Sempre teste as alterações localmente
- Verifique se todos os links funcionam
- Confirme que as imagens/vídeos carregam

#### **Depois do Push:**

- O GitHub Pages atualiza automaticamente em 1-10 minutos
- Você pode forçar atualização limpando o cache do navegador (Ctrl+F5)
- Verifique o status em: `https://[seu-usuario].github.io/[nome-do-repositorio]`

#### **Solução de Problemas Comuns:**

- **Site não atualiza:** Aguarde alguns minutos, limpe cache
- **Erro no GitHub Pages:** Verifique se todos os arquivos estão commitados
- **Links quebrados:** Confirme os caminhos dos arquivos

### 8. **Exemplo Prático - Adicionando um Novo Vídeo:**

**Passo 1:** Editar `animacoes.html`

```html
<!-- Adicionar nova seção -->
<div class="video-section">
  <h2>Novo Tópico</h2>
  <div class="video-container">
    <!-- Estrutura similar às outras seções -->
  </div>
</div>

const videoIds = { 'eletroquimica': 'ID_ELETRO', 'solvatacao': 'ID_SOLVATACAO',
'novotopico': 'ID_NOVO_VIDEO' // ← Adicionar novo ID }; git add . git commit -m
"Adicionado novo vídeo sobre [tópico]" git push
```
