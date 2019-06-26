import { Hashes } from 'crypto-js'

declare module 'egg' {

  export interface Context {
    crypto: Hashes;
  }
}