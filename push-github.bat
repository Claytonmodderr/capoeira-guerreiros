@echo off
REM Script para fazer push do projeto para GitHub
REM Associação de Capoeira Guerreiros da Cultura Negra

echo.
echo ========================================
echo PUSH PARA GITHUB - CAPOEIRA GUERREIROS
echo ========================================
echo.

REM Verifica se está na pasta correta
if not exist "package.json" (
    echo ERRO: Você precisa estar na pasta do projeto!
    echo Coloque este arquivo na raiz do projeto e execute novamente.
    pause
    exit /b 1
)

echo Iniciando push para GitHub...
echo.

REM Remove remote anterior (se existir)
echo [1/4] Removendo remote anterior...
git remote remove origin
if errorlevel 1 (
    echo Aviso: Remote anterior não encontrado (normal na primeira vez)
)

echo.

REM Adiciona novo remote
echo [2/4] Adicionando repositório GitHub...
git remote add origin https://github.com/Claytonmodderr/capoeira-guerreiros.git
if errorlevel 1 (
    echo ERRO: Falha ao adicionar remote
    pause
    exit /b 1
)

echo.

REM Renomeia branch para main
echo [3/4] Renomeando branch para main...
git branch -M main
if errorlevel 1 (
    echo ERRO: Falha ao renomear branch
    pause
    exit /b 1
)

echo.

REM Faz push
echo [4/4] Fazendo push para GitHub...
echo (Você pode ser solicitado a fazer login no GitHub)
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERRO: Falha no push!
    echo Verifique se:
    echo - Você tem Git instalado
    echo - Você tem conexão com internet
    echo - O repositório foi criado no GitHub
    echo - Você está logado no GitHub
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCESSO! Projeto enviado para GitHub
echo ========================================
echo.
echo Próximo passo:
echo 1. Acesse https://vercel.com
echo 2. Clique em "Add New" > "Project"
echo 3. Selecione "capoeira-guerreiros"
echo 4. Clique em "Deploy"
echo.
pause
