## Instalation
```
npm install
```

## Start local node
```
anvil
```

## Deploy contracts to local node
```
forge create TrustedOracle --private-key <your private key>
```

## Copy contracts ABIs to src/abis
```
forge create TrustedOracle --private-key <your private key>
```

## Generate typechain types for TypeScript usage
```
npx typechain --target ethers-v5 --out-dir src/types/typechain 'src/abis/*'
```

## Run script
```
npm start
```