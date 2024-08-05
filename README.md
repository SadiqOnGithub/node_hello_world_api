# Node Hello World API

This is to test node deployment on servers (VM/containers)


Here's the installation guide formatted in markdown syntax:

# Install NVM and Node

## Install NVM

1. Update package list:
   ```
   sudo apt update
   ```

2. Install curl:
   ```
   sudo apt install curl
   ```

3. Download and install NVM:
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```

4. Load NVM into the current shell session:
   ```
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

5. Reload the terminal or create a new terminal:
   ```
   source ~/.bashrc
   ```

## Install Node

1. List available Node.js versions:
   ```
   nvm ls-remote
   ```

2. Install LTS OR a particular version:
   ```
   nvm install --lts
   ```
   OR
   ```
   nvm install 16
   ```

3. Set the default Node.js version:
   ```
   nvm alias default 16  # or --lts, or any other version number you installed
   ```

4. Verify the installation:
   ```
   node -v && npm -v
   ```
