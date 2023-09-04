var g=Object.defineProperty;var w=(i,e,t)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(w(i,typeof e!="symbol"?e+"":e,t),t);import{N as W,p as f,A as T,q as y,aC as b,r as A,s as S,t as E,u as N,y as R,G as U,x as k,z as F,F as M,aD as x,aB as m,aE as I,aF as L,H as _,B as c,am as u,J as B,K as v,L as p,T as O}from"./index.47dea1d7.js";import{S as D}from"./erc-721-standard-7b47bd46.browser.esm.b39de8fd.js";import{P as z}from"./thirdweb-checkout-39011b2a.browser.esm.b2e49092.js";const d=class extends D{constructor(t,a,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,C=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new f(t,a,s,n,r);super(C,r,h);o(this,"createBatch",p(async(t,a)=>this.erc721.lazyMint.prepare(t,a)));o(this,"claimTo",p(async(t,a,r)=>this.erc721.claimTo.prepare(t,a,r)));o(this,"claim",p(async(t,a)=>this.erc721.claim.prepare(t,a)));o(this,"burn",p(async t=>this.erc721.burn.prepare(t)));this.abi=T.parse(s||[]),this.metadata=new y(this.contractWrapper,b,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new S(this.contractWrapper,d.contractRoles),this.royalties=new E(this.contractWrapper,this.metadata),this.sales=new N(this.contractWrapper),this.encoder=new R(this.contractWrapper),this.estimator=new U(this.contractWrapper),this.events=new k(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.interceptor=new M(this.contractWrapper),this.claimConditions=new x(this.contractWrapper,this.metadata,this.storage),this.signature=new m(this.contractWrapper,this.storage),this.revealer=new I(this.contractWrapper,this.storage,L.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new m(this.contractWrapper,this.storage),this.owner=new _(this.contractWrapper),this.checkout=new z(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),a=await this.totalUnclaimedSupply();return t.add(a)}async getAllClaimed(t){const a=c.from((t==null?void 0:t.start)||0).toNumber(),r=c.from((t==null?void 0:t.count)||u).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),a+r);return await Promise.all(Array.from(Array(n).keys()).map(s=>this.get(s.toString())))}async getAllUnclaimed(t){const a=c.from((t==null?void 0:t.start)||0).toNumber(),r=c.from((t==null?void 0:t.count)||u).toNumber(),n=c.from(Math.max((await this.totalClaimedSupply()).toNumber(),a)),s=c.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+r));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(h=>this.erc721.getTokenMetadata(n.add(h).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(B("transfer"),v)}async getClaimTransaction(t,a,r){return this.erc721.getClaimTransaction(t,a,r)}async prepare(t,a,r){return O.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}};let l=d;o(l,"contractRoles",W);export{l as SignatureDrop};
