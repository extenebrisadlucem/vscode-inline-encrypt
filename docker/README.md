Podman/docker container to build sources
===============

# Introduction
As I didn't want to install a lot of stuff on my laptop just for this small project, I choosed to build my project through a container.

Obviously it takes more space than installing all the required tools on your system.
BUT : doing ```podman rmi [idImage]``` is enough to remove all in once...

# Building the container
So you should do :
```bash
podman-compose build
```
This will create the image required with all the tools inside.

# Building the sources
So you must enter inside the container by doing :
```bash
podman-compose run --rm vscode-dev
```
Output should be like : 
```bash
$ podman-compose run --rm vscode-dev
podman-compose version: 1.0.6
['podman', '--version', '']
using podman version: 4.9.3
['podman', 'network', 'exists', 'docker_default']
podman run --name=docker_vscode-dev_tmp52379 --rm -i --label io.podman.compose.config-hash=0d47f4d8c8fb00ab530d92215758cb1d92e37006accab47f7c066f40f5fcd4b9 --label io.podman.compose.project=docker --label io.podman.compose.version=1.0.6 --label PODMAN_SYSTEMD_UNIT=podman-compose@docker.service --label com.docker.compose.project=docker --label com.docker.compose.project.working_dir=/home/aurore/Documents/repo/nodejs/vscode-inline-encrypt/docker --label com.docker.compose.project.config_files=docker-compose.yml --label com.docker.compose.container-number=1 --label com.docker.compose.service=vscode-dev -v /home/aurore/Documents/repo/nodejs/vscode-inline-encrypt:/workspace --net docker_default --network-alias vscode-dev --tty vscode-dev
root ➜ /workspace (main) $ ls
...
```

Once you've the prompt ```root ➜ /workspace (main) $``` you can launch : 
```bash
# first time to download dependencies
npm install --save-dev @types/node

# Build sources
npm run compile
# Build package
npx vsce package
```

To exit your container, just type ```exit``` .