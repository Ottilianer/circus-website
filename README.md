## Installation

> **Note:** This guide assumes that you're using a Unix-based operating system. If you're using Windows, you could adjust the commands accordingly but I would recommend using a Unix-based operating system or at least the Windows Subsystem for Linux (WSL).

Please make sure you have installed the following software:

- [Bun Runtime](https://bun.sh)
- [Node.js](https://nodejs.org)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)


### Granting Permissions

```sh
sudo chown -R $USER:$USER /path/to/ottilianer-v2
```

### Installing the Backend

```sh
cd /path/to/ottilianer-v2/backend
bun install
```

### Installing the Frontend

```sh
cd /path/to/ottilianer-v2/frontend
bun install
```

### Starting the Containers

```sh
docker-compose up --build
```

## Any Questions?

If you have any questions, please contact me (Leo Gall) via Teams (<leo.gall@rmg-ottilien.de>), E-Mail (<gall.dev@proton.me>) or by phone (0170 591 5654). 


sudo chown -R $USER:$USER /home/leo/development/ottilianer/ottilianer-v2/backend
