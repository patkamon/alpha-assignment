'use client';

import { mainnet } from 'wagmi/chains'
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit'

const projectId = 'YOUR_PROJECT_ID';
const supportedChains: Chain[] = [mainnet];

export const config = getDefaultConfig({
   appName: 'RainbowKit App',
   projectId,
   chains: supportedChains as any,
   ssr: true,
//   transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });