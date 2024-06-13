## Getting Started

First, make sure you use same node version run

```nvm install 18.19.0
# then
nvm use 18.19.0
```

next install dependencies
``` npm i```

then run server

```bash
npm run dev
```


if you been stuck at loading page, please consider using api provider
in `src/app/page.tsx` line 21
```
    # uncomment these 2 line and replace url with your api provider such as (infura,alchemy) (mainnet)
      // let url = "YOUR_API_PROVIDER";
      // let provider = new ethers.providers.JsonRpcProvider(url);
    # please also comment this line out
      let provider =new ethers.providers.Web3Provider(window.ethereum)
```