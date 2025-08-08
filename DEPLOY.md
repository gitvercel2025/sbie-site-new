# Deploy para Vercel - Site SBIE

## Pré-requisitos

1. Conta no Vercel (https://vercel.com)
2. Vercel CLI instalado globalmente: `npm install -g vercel`

## Instruções de Deploy

### Opção 1: Deploy via CLI (Recomendado)

1. **Instalar Vercel CLI** (se ainda não tiver):

```bash
npm install -g vercel
```

2. **Fazer login no Vercel**:

```bash
vercel login
```

3. **Fazer o deploy**:

```bash
vercel
```

4. **Seguir as instruções**:
   - Quando perguntado sobre o diretório, pressione Enter (usar atual)
   - Quando perguntado sobre as configurações, pressione Enter para aceitar
   - Para production deploy: `vercel --prod`

### Opção 2: Deploy via GitHub

1. **Conectar repositório ao Vercel**:

   - Acesse https://vercel.com
   - Clique em "New Project"
   - Conecte sua conta GitHub
   - Selecione o repositório do projeto SBIE
   - Configure as seguintes opções:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist/spa`
     - Install Command: `npm install`

2. **Deploy automático**:
   - O Vercel irá fazer deploy automático a cada push no branch principal
   - Preview deployments serão criados para pull requests

## Configurações de Ambiente

Se você tiver variáveis de ambiente, configure-as no painel do Vercel:

1. Acesse seu projeto no Vercel
2. Vá para Settings > Environment Variables
3. Adicione as variáveis necessárias

## Estrutura do Projeto

O projeto está configurado com:

- **Frontend**: React SPA na pasta `client/`
- **Backend**: Express API na pasta `server/` (exposto via `/api/*`)
- **Build Output**: `dist/spa/` para arquivos estáticos

## URLs após Deploy

- **Site Principal**: https://seu-projeto.vercel.app
- **API**: https://seu-projeto.vercel.app/api/*

## Troubleshooting

Se houver problemas com o deploy:

1. **Verificar logs**:

```bash
vercel logs
```

2. **Rebuild local**:

```bash
npm run build
```

3. **Verificar configuração**:
   - Conferir se `vercel.json` está presente
   - Verificar se todas as dependências estão no `package.json`

## Comandos Úteis

```bash
# Deploy de desenvolvimento
vercel

# Deploy de produção
vercel --prod

# Ver logs
vercel logs

# Remover deployment
vercel remove [deployment-url]

# Listar deployments
vercel ls
```

## Domínio Customizado

Para usar um domínio personalizado (como sbie.com.br):

1. Acesse Settings > Domains no painel do Vercel
2. Adicione seu domínio
3. Configure os DNS conforme as instruções do Vercel
