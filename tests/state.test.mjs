import test from 'node:test';
import assert from 'node:assert/strict';
import {createState,advance} from '../public/state.js';
import {makeNodes,stepNodes,nodeTension} from '../public/visuals.js';
const run=(mode,input,fps=60)=>{const s=createState(mode);for(let i=0;i<150*fps+1;i++)advance(s,input,1/fps);return s;};
for(const [mode,input,outcome] of [['A',{engagement:1},'gather'],['A',{},'drift'],['A',{energy:1},'resonance'],['B',{engagement:1},'weave'],['B',{tension:1},'suspend'],['B',{},'flow']])test(`${mode} ${outcome} at 30/60/120 fps`,()=>{for(const fps of [30,60,120]){const s=run(mode,input,fps);assert.equal(s.outcome,outcome);assert.equal(s.finished,true);}});
test('late input cannot overturn decision',()=>{const s=createState('A');for(let i=0;i<131*60;i++)advance(s,{},1/60);advance(s,{energy:1,engagement:1},19);assert.equal(s.outcome,'drift');});
test('node drag produces measured tension, release settles',()=>{const n=makeNodes(),s=createState('B');for(let i=0;i<120*60;i++)stepNodes(n,s,0,{x:1.3,y:0},1/60,false);assert.ok(nodeTension(n)>.6);for(let i=0;i<60*60;i++)stepNodes(n,s,-1,{x:0,y:0},1/60,false);assert.ok(nodeTension(n)<.1);});
