### One time setup

- Download VSCode code editor [here](https://code.visualstudio.com/)
- Download Node.js LTS version [here](https://nodejs.org/en/) and install it
- Once downloaded, open VSCode Terminal with `CMD + J`
- Paste this command in the terminal and press `Enter`:

```
cd ~/Documents || exit
git clone https://github.com/eggei/sinnet.git
cd sinnet || exit
npm install
```

### Development

- Go to Documents folder and open the `sinnet` folder with VSCode
- Start editing the code.

### Viewing realtime code results

- Press `CMD + J` in VS Code
- In the terminal, type `npm start` and press `Enter` to start development server
- Wait for server to come up. It will open the browser and show the website automagically
- To stop the server press `control + c` while in terminal

### Deploying this website

After saving your changes,

- Press `CMD + J` in VS Code
- Run `npm run deploy` in terminal and wait for "Successfully deployed" message
- Then, go to [here](https://a2plcpnl0833.prod.iad2.secureserver.net:2083/cpsess0257992564/frontend/paper_lantern/version_control/index.html#/manage/%252Fhome%252Fgjnooa1ktav0%252Frepositories%252Fsinnet/deploy) and click on `Update from Remote`
- See your changes in dev.sinnetsongs.com
- Done!
