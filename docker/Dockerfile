# Base dev VSCode officielle
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-20

# Création du workspace
WORKDIR /workspace

# Copier package.json et tsconfig.json d'abord pour profiter du cache Docker
COPY package.json package-lock.json* tsconfig.json /workspace/

# Installer TypeScript et vsce globalement
RUN npm install \
    && npm install -g typescript @vscode/vsce

# Copier le code source
COPY src /workspace/src

# Commande par défaut : shell pour pouvoir lancer npm run compile etc.
CMD [ "bash" ]

