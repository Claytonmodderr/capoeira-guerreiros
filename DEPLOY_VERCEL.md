# Guia de Deploy na Vercel

## Associação de Capoeira Guerreiros da Cultura Negra

Este documento contém as instruções para publicar seu site na Vercel.

---

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha os dados:
   - **Repository name**: `capoeira-guerreiros`
   - **Description**: Website da Associação de Capoeira Guerreiros da Cultura Negra
   - **Visibility**: Public (importante para Vercel acessar)
3. **NÃO** marque "Initialize with README" (seu projeto já tem)
4. Clique em **"Create repository"**

---

## Passo 2: Fazer Push do Projeto para GitHub

Abra seu terminal e execute os seguintes comandos:

```bash
cd /home/ubuntu/capoeira_guerreiros

# Remover remote anterior (se existir)
git remote remove origin

# Adicionar novo remote do seu repositório
git remote add origin https://github.com/Claytonmodderr/capoeira-guerreiros.git

# Renomear branch para main
git branch -M main

# Fazer push do projeto
git push -u origin main
```

**Nota:** Você pode ser solicitado a fazer login no GitHub. Use suas credenciais do GitHub.

---

## Passo 3: Conectar e Fazer Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New..."** → **"Project"**
3. Clique em **"Import Git Repository"**
4. Procure por `capoeira-guerreiros` (seu repositório)
5. Clique em **"Import"**
6. Vercel detectará automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Clique em **"Deploy"**
8. Aguarde o deploy terminar (geralmente 1-2 minutos)

---

## Passo 4: Seu Site Está Online! 🎉

Após o deploy, você receberá um URL como:
- `https://capoeira-guerreiros.vercel.app`

Você pode:
- Compartilhar este link com qualquer pessoa
- Conectar um domínio personalizado (configurações da Vercel)
- Fazer atualizações: basta fazer push no GitHub e Vercel fará deploy automaticamente

---

## Próximas Atualizações

Sempre que você quiser atualizar o site:

1. Faça as alterações localmente
2. Execute:
   ```bash
   git add .
   git commit -m "Descrição da alteração"
   git push origin main
   ```
3. Vercel detectará a mudança e fará deploy automaticamente

---

## Suporte

Se tiver dúvidas:
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentação GitHub: [docs.github.com](https://docs.github.com)

---

**Desenvolvido com ❤️ pela Manus AI**
