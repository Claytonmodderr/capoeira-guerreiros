# Guia Completo para Windows - Deploy na Vercel

## Associação de Capoeira Guerreiros da Cultura Negra

---

## ⚠️ PRÉ-REQUISITOS

Antes de começar, você precisa ter:

### 1. Git Instalado
- Baixe em: [git-scm.com](https://git-scm.com)
- Instale com as opções padrão
- Após instalar, reinicie o computador

### 2. Conta no GitHub
- Acesse: [github.com](https://github.com)
- Crie uma conta (se não tiver)
- Faça login

### 3. Conta na Vercel
- Acesse: [vercel.com](https://vercel.com)
- Crie uma conta (se não tiver)
- Faça login

---

## 📋 PASSO 1: Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha assim:
   - **Repository name**: `capoeira-guerreiros`
   - **Description**: Website da Associação de Capoeira Guerreiros da Cultura Negra
   - **Visibility**: Selecione **"Public"** (importante!)
3. **NÃO** marque nenhuma opção de inicialização
4. Clique em **"Create repository"**

✅ **Pronto! Seu repositório foi criado**

---

## 🚀 PASSO 2: Fazer Push do Projeto (AUTOMÁTICO)

### Opção A: Usar o Script (Mais Fácil) ⭐

1. **Baixe os arquivos do projeto**
   - Clique em "View" no card do projeto Manus
   - Vá até "Code"
   - Clique em "Download all files"
   - Descompacte a pasta

2. **Localize o arquivo `push-github.bat`**
   - Procure por este arquivo na raiz da pasta do projeto

3. **Execute o arquivo**
   - Clique duas vezes em `push-github.bat`
   - Uma janela preta (terminal) vai abrir
   - Siga as instruções na tela
   - Você pode ser solicitado a fazer login no GitHub (use suas credenciais)

4. **Aguarde a conclusão**
   - O script vai mostrar "SUCESSO!" quando terminar

---

### Opção B: Fazer Manualmente (Se o script não funcionar)

1. **Abra o PowerShell**
   - Pressione `Windows + X`
   - Selecione "Windows PowerShell (Admin)" ou "Terminal"

2. **Navegue até a pasta do projeto**
   ```powershell
   cd C:\caminho\para\capoeira-guerreiros
   ```
   (Substitua pelo caminho real da pasta)

3. **Execute os comandos um por um:**

   ```powershell
   git remote remove origin
   ```

   ```powershell
   git remote add origin https://github.com/Claytonmodderr/capoeira-guerreiros.git
   ```

   ```powershell
   git branch -M main
   ```

   ```powershell
   git push -u origin main
   ```

4. **Faça login no GitHub quando solicitado**
   - Use seu usuário e senha do GitHub

---

## 📱 PASSO 3: Conectar na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login

2. Clique em **"Add New..."** (canto superior esquerdo)

3. Selecione **"Project"**

4. Clique em **"Import Git Repository"**

5. Na caixa de busca, procure por: `capoeira-guerreiros`

6. Clique no seu repositório para selecioná-lo

7. Clique em **"Import"**

8. Vercel vai detectar automaticamente as configurações (deixe como está)

9. Clique em **"Deploy"**

10. **Aguarde 1-2 minutos** enquanto Vercel faz o deploy

---

## 🎉 PASSO 4: Seu Site Está Online!

Após o deploy, você receberá uma URL como:
```
https://capoeira-guerreiros.vercel.app
```

**Você pode:**
- ✅ Compartilhar este link com qualquer pessoa
- ✅ Abrir em qualquer navegador
- ✅ Conectar um domínio personalizado (depois)

---

## 🔄 Como Atualizar o Site Depois

Sempre que quiser fazer mudanças:

1. **Faça as alterações** no projeto

2. **Abra o PowerShell** na pasta do projeto

3. **Execute estes comandos:**
   ```powershell
   git add .
   git commit -m "Descrição da mudança"
   git push origin main
   ```

4. **Vercel detectará automaticamente** e fará o deploy

---

## ❌ Solução de Problemas

### "Git não é reconhecido"
- Você não instalou Git ou não reiniciou o computador
- Instale em [git-scm.com](https://git-scm.com) e reinicie

### "Falha ao fazer login no GitHub"
- Verifique sua conexão com internet
- Use suas credenciais corretas do GitHub

### "Repositório não encontrado na Vercel"
- Aguarde 5 minutos após fazer push
- Atualize a página da Vercel

### "Deploy falhou na Vercel"
- Verifique se o repositório é Public (não Private)
- Tente fazer deploy novamente

---

## 📞 Precisa de Ajuda?

- **Git**: [docs.github.com](https://docs.github.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub**: [github.com/support](https://github.com/support)

---

**Desenvolvido com ❤️ pela Manus AI**

Boa sorte com seu site! 🚀
