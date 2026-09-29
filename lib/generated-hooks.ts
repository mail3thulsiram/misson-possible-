// Generated from public/api-contract.json by scripts/generate-api-client.mjs.
'use client';
import {useState,useEffect,useCallback} from 'react';
import type {Data} from './contract';
import {endpoints} from './generated-api';
export function useMissionData(){const [data,setData]=useState<Data|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState(''),[unauthorized,setUnauthorized]=useState(false);
const load=useCallback(async()=>{try{const response=await fetch(endpoints.getMissionData.path,{cache:'no-store'});const v:any=await response.json();if(response.status===401){setUnauthorized(true);setData(null);setError('');return}if(!response.ok)throw new Error(v.error||'Your workspace could not be loaded.');setData(v);setUnauthorized(false);setError('')}catch(e){setError((e as Error).message)}finally{setLoading(false)}},[]);
useEffect(()=>{void load();const t=setInterval(()=>{if(document.visibilityState==='visible')void load()},30000);return()=>clearInterval(t)},[load]);
return {data,loading,error,unauthorized,load};}
