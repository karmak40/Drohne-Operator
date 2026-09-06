(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="180",od=0,sc=1,ad=2,Gh=1,Vh=2,Jn=3,oi=0,jt=1,Xt=2,ti=0,Bi=1,ai=2,rc=3,oc=4,ld=5,ki=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,Ea=204,Aa=205,vd=206,_d=207,xd=208,yd=209,bd=210,Md=211,Sd=212,Td=213,wd=214,Ra=0,Ca=1,Pa=2,gs=3,La=4,Da=5,Ia=6,Ua=7,Wh=0,Ed=1,Ad=2,bi=0,Xh=1,qh=2,Yh=3,Ml=4,jh=5,Kh=6,$h=7,ac="attached",Rd="detached",Zh=300,vs=301,_s=302,Na=303,Fa=304,bo=306,ln=1e3,xi=1001,fo=1002,on=1003,Jh=1004,Ks=1005,rn=1006,io=1007,Qn=1008,Un=1009,Qh=1010,eu=1011,sr=1012,Sl=1013,Hi=1014,Pn=1015,ni=1016,Tl=1017,wl=1018,rr=1020,tu=35902,nu=35899,iu=1021,su=1022,Mn=1023,or=1026,ar=1027,El=1028,Al=1029,ru=1030,Rl=1031,Cl=1033,so=33776,ro=33777,oo=33778,ao=33779,ka=35840,Oa=35841,Ba=35842,za=35843,Ha=36196,Ga=37492,Va=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,ja=37812,Ka=37813,$a=37814,Za=37815,Ja=37816,Qa=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,ol=36495,al=36283,ll=36284,cl=36285,hl=36286,lr=2300,cr=2301,Ro=2302,lc=2400,cc=2401,hc=2402,Cd=2500,Pd=0,ou=1,ul=2,Ld=3200,Dd=3201,au=0,Id=1,_i="",vt="srgb",Kt="srgb-linear",po="linear",ct="srgb",Wi=7680,uc=519,Ud=512,Nd=513,Fd=514,lu=515,kd=516,Od=517,Bd=518,zd=519,dl=35044,Us=35048,dc="300 es",Vn=2e3,mo=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fc=1234567;const Zs=Math.PI/180,xs=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function Pl(s,e){return(s%e+e)%e}function Hd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Gd(s,e,t){return s!==e?(t-s)/(e-s):0}function Js(s,e,t){return(1-t)*s+t*e}function Vd(s,e,t,n){return Js(s,e,1-Math.exp(-t*n))}function Wd(s,e=1){return e-Math.abs(Pl(s,e*2)-e)}function Xd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function qd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jd(s,e){return s+Math.random()*(e-s)}function Kd(s){return s*(.5-Math.random())}function $d(s){s!==void 0&&(fc=s);let e=fc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zd(s){return s*Zs}function Jd(s){return s*xs}function Qd(s){return(s&s-1)===0&&s!==0}function ef(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:Zs,RAD2DEG:xs,generateUUID:Ln,clamp:Ze,euclideanModulo:Pl,mapLinear:Hd,inverseLerp:Gd,lerp:Js,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:jd,randFloatSpread:Kd,seededRandom:$d,degToRad:Zd,radToDeg:Jd,isPowerOfTwo:Qd,ceilPowerOfTwo:ef,floorPowerOfTwo:tf,setQuaternionFromProperEuler:nf,normalize:ht,denormalize:Cn};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),T=Math.atan2(R,p*M);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const y=a*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new E,pc=new Si;class Ye{constructor(e,t,n,i,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],M=i[1],S=i[4],y=i[7],R=i[2],T=i[5],A=i[8];return r[0]=o*v+a*M+l*R,r[3]=o*m+a*S+l*T,r[6]=o*p+a*y+l*A,r[1]=c*v+h*M+u*R,r[4]=c*m+h*S+u*T,r[7]=c*p+h*y+u*A,r[2]=d*v+f*M+g*R,r[5]=d*m+f*S+g*T,r[8]=d*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Ye;function cu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rf(){const s=hr("canvas");return s.style.display="block",s}const mc={};function ur(s){s in mc||(mc[s]=!0,console.warn(s))}function of(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const gc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const s={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?po:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Kt]:{primaries:e,whitePoint:n,transfer:po,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}const et=af();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class lf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=hr("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cf=0;class Ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lo(i[o].image)):r.push(Lo(i[o]))}else r=Lo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;const Do=new E;class zt extends As{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=xi,i=xi,r=rn,o=Qn,a=Mn,l=Un,c=zt.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Ln(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Zh;zt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+v)/4,P=(g+m)/4;return S>y&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=A/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=P/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends As{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new zt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ll(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends uf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hu extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class df extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),br.subVectors(this.max,Ns),qi.subVectors(e.a,Ns),Yi.subVectors(e.b,Ns),ji.subVectors(e.c,Ns),hi.subVectors(Yi,qi),ui.subVectors(ji,Yi),Ei.subVectors(qi,ji);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ei.z,Ei.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ei.z,0,-Ei.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ei.y,Ei.x,0];return!Io(t,qi,Yi,ji,br)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,qi,Yi,ji,br))?!1:(Mr.crossVectors(hi,ui),t=[Mr.x,Mr.y,Mr.z],Io(t,qi,Yi,ji,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new E,new E,new E,new E,new E,new E,new E,new E],wn=new E,yr=new mn,qi=new E,Yi=new E,ji=new E,hi=new E,ui=new E,Ei=new E,Ns=new E,br=new E,Mr=new E,Ai=new E;function Io(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);const a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ff=new mn,Fs=new E,Uo=new E;class Nn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ff.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Uo)),this.expandByPoint(Fs.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new E,No=new E,Sr=new E,di=new E,Fo=new E,Tr=new E,ko=new E;class pr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){No.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(No);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=di.dot(this.direction),l=-di.dot(Sr),c=di.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(No).addScaledVector(Sr,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,r){Fo.subVectors(t,e),Tr.subVectors(n,e),ko.crossVectors(Fo,Tr);let o=this.direction.dot(ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Tr.crossVectors(di,Tr));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(di));if(c<0||l+c>o)return null;const h=-a*di.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,v,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pf,e,mf)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),fi.crossVectors(n,dn),fi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),fi.crossVectors(n,dn)),fi.normalize(),wr.crossVectors(dn,fi),i[0]=fi.x,i[4]=wr.x,i[8]=dn.x,i[1]=fi.y,i[5]=wr.y,i[9]=dn.y,i[2]=fi.z,i[6]=wr.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],R=n[15],T=i[0],A=i[4],P=i[8],_=i[12],x=i[1],L=i[5],F=i[9],B=i[13],j=i[2],K=i[6],$=i[10],te=i[14],q=i[3],fe=i[7],ve=i[11],Ae=i[15];return r[0]=o*T+a*x+l*j+c*q,r[4]=o*A+a*L+l*K+c*fe,r[8]=o*P+a*F+l*$+c*ve,r[12]=o*_+a*B+l*te+c*Ae,r[1]=h*T+u*x+d*j+f*q,r[5]=h*A+u*L+d*K+f*fe,r[9]=h*P+u*F+d*$+f*ve,r[13]=h*_+u*B+d*te+f*Ae,r[2]=g*T+v*x+m*j+p*q,r[6]=g*A+v*L+m*K+p*fe,r[10]=g*P+v*F+m*$+p*ve,r[14]=g*_+v*B+m*te+p*Ae,r[3]=M*T+S*x+y*j+R*q,r[7]=M*A+S*L+y*K+R*fe,r[11]=M*P+S*F+y*$+R*ve,r[15]=M*_+S*B+y*te+R*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,R=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,T=t*M+n*S+i*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=M*A,e[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=S*A,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=y*A,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*A,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=R*A,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,M=l*c,S=l*h,y=l*u,R=n.x,T=n.y,A=n.z;return i[0]=(1-(v+p))*R,i[1]=(f+y)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+S)*A,i[9]=(m-M)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const o=Ki.set(i[4],i[5],i[6]).length(),a=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Vn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===mo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Vn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===mo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new E,En=new Xe,pf=new E(0,0,0),mf=new E(1,1,1),fi=new E,wr=new E,dn=new E,_c=new Xe,xc=new Si;class Tn{constructor(e=0,t=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gf=0;const yc=new E,$i=new Si,jn=new Xe,Er=new E,ks=new E,vf=new E,_f=new Si,bc=new E(1,0,0),Mc=new E(0,1,0),Sc=new E(0,0,1),Tc={type:"added"},xf={type:"removed"},Zi={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Tt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new E,t=new Tn,n=new Si,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(Sc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(Sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ks,Er,this.up):jn.lookAt(Er,ks,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(jn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xf),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new E(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new E,Kn=new E,Bo=new E,$n=new E,Ji=new E,Qi=new E,wc=new E,zo=new E,Ho=new E,Go=new E,Vo=new ot,Wo=new ot,Xo=new ot;class bn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),Kn.subVectors(n,t),Bo.subVectors(e,t);const o=An.dot(An),a=An.dot(Kn),l=An.dot(Bo),c=Kn.dot(Kn),h=Kn.dot(Bo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),Kn.subVectors(e,t),An.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ji.subVectors(i,n),Qi.subVectors(r,n),zo.subVectors(e,n);const l=Ji.dot(zo),c=Qi.dot(zo);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,i);const h=Ji.dot(Ho),u=Qi.dot(Ho);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ji,o);Go.subVectors(e,r);const f=Ji.dot(Go),g=Qi.dot(Go);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return wc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(wc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Pl(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qo(o,r,e+1/3),this.g=qo(o,r,e),this.b=qo(o,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return et.workingToColorSpace(Yt.copy(this),e),Math.round(Ze(Yt.r*255,0,255))*65536+Math.round(Ze(Yt.g*255,0,255))*256+Math.round(Ze(Yt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,r=Yt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=vt){et.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ar);const n=Js(pi.h,Ar.h,t),i=Js(pi.s,Ar.s,t),r=Js(pi.l,Ar.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new xe;xe.NAMES=uu;let yf=0;class Dn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Bi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Aa,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bt extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new E,Rr=new oe;let bf=0;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}}class du extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fu extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mf=0;const _n=new Xe,Yo=new Tt,es=new E,fn=new mn,Os=new mn,Vt=new E;class Pt extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?fu:du)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(fn.min,Os.min),fn.expandByPoint(Vt),Vt.addVectors(fn.max,Os.max),fn.expandByPoint(Vt)):(fn.expandByPoint(Os.min),fn.expandByPoint(Os.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Vt.add(es)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new E,l[P]=new E;const c=new E,h=new E,u=new E,d=new oe,f=new oe,g=new oe,v=new E,m=new E;function p(P,_,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(v),a[_].add(v),a[x].add(v),l[P].add(m),l[_].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,_=M.length;P<_;++P){const x=M[P],L=x.start,F=x.count;for(let B=L,j=L+F;B<j;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new E,y=new E,R=new E,T=new E;function A(P){R.fromBufferAttribute(i,P),T.copy(R);const _=a[P];S.copy(_),S.sub(R.multiplyScalar(R.dot(_))).normalize(),y.crossVectors(T,_);const L=y.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,_=M.length;P<_;++P){const x=M[P],L=x.start,F=x.count;for(let B=L,j=L+F;B<j;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new Xe,Ri=new pr,Cr=new Nn,Ac=new E,Pr=new E,Lr=new E,Dr=new E,jo=new E,Ir=new E,Rc=new E,Ur=new E;class Ie extends Tt{constructor(e=new Pt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(jo.fromBufferAttribute(u,e),o?Ir.addScaledVector(jo,h):Ir.addScaledVector(jo.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Cr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Cr,Ac)===null||Ri.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(Ec.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,R=S;y<R;y+=3){const T=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);i=Nr(this,p,e,n,c,h,u,T,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Nr(this,o,e,n,c,h,u,M,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,R=S;y<R;y+=3){const T=y,A=y+1,P=y+2;i=Nr(this,p,e,n,c,h,u,T,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,S=m+1,y=m+2;i=Nr(this,o,e,n,c,h,u,M,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Sf(s,e,t,n,i,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===oi,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:s}}function Nr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Pr),s.getVertexPosition(l,Lr),s.getVertexPosition(c,Dr);const h=Sf(s,e,t,n,Pr,Lr,Dr,Rc);if(h){const u=new E;bn.getBarycoord(Rc,Pr,Lr,Dr,u),i&&(h.uv=bn.getInterpolatedAttribute(i,a,l,c,u,new oe)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,l,c,u,new oe)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};bn.getNormal(Pr,Lr,Dr,d.normal),h.face=d,h.barycoord=u}return h}class sn extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(v,m,p,M,S,y,R,T,A,P,_){const x=y/A,L=R/P,F=y/2,B=R/2,j=T/2,K=A+1,$=P+1;let te=0,q=0;const fe=new E;for(let ve=0;ve<$;ve++){const Ae=ve*L-B;for(let Ge=0;Ge<K;Ge++){const tt=Ge*x-F;fe[v]=tt*M,fe[m]=Ae*S,fe[p]=j,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[p]=T>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ge/A),u.push(1-ve/P),te+=1}}for(let ve=0;ve<P;ve++)for(let Ae=0;Ae<A;Ae++){const Ge=d+Ae+K*ve,tt=d+Ae+K*(ve+1),ft=d+(Ae+1)+K*(ve+1),Ke=d+(Ae+1)+K*ve;l.push(Ge,tt,Ke),l.push(tt,ft,Ke),q+=6}a.addGroup(f,q,_),f+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=ys(s[t]);for(const i in n)e[i]=n[i]}return e}function Tf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const bs={clone:ys,merge:Qt};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new E,Cc=new oe,Pc=new oe;class nn extends mu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Cc,Pc),t.subVectors(Pc,Cc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Af extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(ts,ns,e,t);i.layers=this.layers,this.add(i);const r=new nn(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new nn(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new nn(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new nn(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new nn(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gu extends zt{constructor(e=[],t=vs,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rf extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sn(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ti});r.uniforms.tEquirect.value=t;const o=new Ie(i,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=rn),new Af(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class rt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Il{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new Il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Pf extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new E;class dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _u extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const Bs=new E,ss=new E,rs=new E,os=new oe,zs=new oe,xu=new Xe,Fr=new E,Hs=new E,kr=new E,Lc=new oe,$o=new oe,Dc=new oe;class Lf extends Tt{constructor(e=new _u){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vu(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new dr(n,3,0,!1)),is.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Or(Fr.set(-.5,-.5,0),rs,o,ss,i,r),Or(Hs.set(.5,-.5,0),rs,o,ss,i,r),Or(kr.set(.5,.5,0),rs,o,ss,i,r),Lc.set(0,0),$o.set(1,0),Dc.set(1,1);let a=e.ray.intersectTriangle(Fr,Hs,kr,!1,Bs);if(a===null&&(Or(Hs.set(-.5,.5,0),rs,o,ss,i,r),$o.set(0,1),a=e.ray.intersectTriangle(Fr,kr,Hs,!1,Bs),a===null))return;const l=e.ray.origin.distanceTo(Bs);l<e.near||l>e.far||t.push({distance:l,point:Bs.clone(),uv:bn.getInterpolation(Bs,Fr,Hs,kr,Lc,$o,Dc,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Or(s,e,t,n,i,r){os.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(zs.x=r*os.x-i*os.y,zs.y=i*os.x+r*os.y):zs.copy(os),s.copy(e),s.x+=zs.x,s.y+=zs.y,s.applyMatrix4(xu)}const Ic=new E,Uc=new ot,Nc=new ot,Df=new E,Fc=new Xe,Br=new E,Zo=new Nn,kc=new Xe,Jo=new pr;class If extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ac,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingBox.expandByPoint(Br)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingSphere.expandByPoint(Br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1&&(kc.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(kc),!(this.boundingBox!==null&&Jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ac?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Uc.fromBufferAttribute(i.attributes.skinIndex,e),Nc.fromBufferAttribute(i.attributes.skinWeight,e),Ic.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nc.getComponent(r);if(o!==0){const a=Uc.getComponent(r);Fc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Df.copy(Ic).applyMatrix4(Fc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yu extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bu extends zt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=on,h=on,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new Xe,Uf=new Xe;class Ul{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Uf;Oc.multiplyMatrices(a,t[r]),Oc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ul(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bu(t,e,e,Mn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new yu),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class fl extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new Xe,Bc=new Xe,zr=[],zc=new mn,Nf=new Xe,Gs=new Ie,Vs=new Nn;class Ff extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),zc.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(zc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Vs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,as),Bc.multiplyMatrices(n,as),Gs.matrixWorld=Bc,Gs.raycast(e,zr);for(let o=0,a=zr.length;o<a;o++){const l=zr[o];l.instanceId=r,l.object=this,t.push(l)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bu(new Float32Array(i*this.count),i,this.count,El,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qo=new E,kf=new E,Of=new Ye;class Ni{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qo.subVectors(n,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),i=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Nn,Bf=new oe(.5,.5),Hr=new E;class Nl{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],S=r[13],y=r[14],R=r[15];if(i[0].setComponents(c-o,f-h,p-g,R-M).normalize(),i[1].setComponents(c+o,f+h,p+g,R+M).normalize(),i[2].setComponents(c+a,f+u,p+v,R+S).normalize(),i[3].setComponents(c-a,f-u,p-v,R-S).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,p-m,R-y).normalize();else if(i[4].setComponents(c-l,f-d,p-m,R-y).normalize(),t===Vn)i[5].setComponents(c+l,f+d,p+m,R+y).normalize();else if(t===mo)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=Bf.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const go=new E,vo=new E,Hc=new Xe,Ws=new pr,Gr=new Nn,ea=new E,Gc=new E;class Mo extends Tt{constructor(e=new Pt,t=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)go.fromBufferAttribute(t,i-1),vo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=go.distanceTo(vo);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;Hc.copy(i).invert(),Ws.copy(e.ray).applyMatrix4(Hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),M=h.getX(v+1),S=Vr(this,e,Ws,l,p,M,v);S&&t.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Vr(this,e,Ws,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=Vr(this,e,Ws,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Vr(this,e,Ws,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(go.fromBufferAttribute(a,i),vo.fromBufferAttribute(a,r),t.distanceSqToSegment(go,vo,ea,Gc)>n)return;ea.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ea);if(!(c<e.near||c>e.far))return{distance:c,point:Gc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Vc=new E,Wc=new E;class zf extends Mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vc.distanceTo(Wc);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hf extends Mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kl extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xc=new Xe,pl=new pr,Wr=new Nn,Xr=new E;class Ol extends Tt{constructor(e=new Pt,t=new kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Xc.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Xr.fromBufferAttribute(u,m),qc(Xr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Xr.fromBufferAttribute(u,g),qc(Xr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qc(s,e,t,n,i,r,o){const a=pl.distanceSqToPoint(s);if(a<t){const l=new E;pl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Wn extends zt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mu extends zt{constructor(e,t,n=Hi,i,r,o,a=on,l=on,c,h=or,u=1){if(h!==or&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Su extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends Pt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,v=i+1,m=new E,p=new E;for(let M=0;M<=g;M++){let S=0,y=0,R=0,T=0;if(M<=n){const _=M/n,x=_*Math.PI/2;y=-h-e*Math.cos(x),R=e*Math.sin(x),T=-e*Math.cos(x),S=_*u}else if(M<=n+r){const _=(M-n)/r;y=-h+_*t,R=e,T=0,S=u+_*d}else{const _=(M-n-r)/n,x=_*Math.PI/2;y=h+e*Math.sin(x),R=e*Math.cos(x),T=e*Math.sin(x),S=u+d+_*u}const A=Math.max(0,Math.min(1,S/f));let P=0;M===0?P=.5/i:M===g&&(P=-.5/i);for(let _=0;_<=i;_++){const x=_/i,L=x*Math.PI*2,F=Math.sin(L),B=Math.cos(L);p.x=-R*B,p.y=y,p.z=R*F,a.push(p.x,p.y,p.z),m.set(-R*B,T,R*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+P,A)}if(M>0){const _=(M-1)*v;for(let x=0;x<i;x++){const L=_+x,F=_+x+1,B=M*v+x,j=M*v+x+1;o.push(L,F,B),o.push(F,j,B)}}}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mr extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new E,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mi extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function M(){const y=new E,R=new E;let T=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const _=[],x=P/r,L=x*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,j=B*l+a,K=Math.sin(j),$=Math.cos(j);R.x=L*K,R.y=-x*n+m,R.z=L*$,u.push(R.x,R.y,R.z),y.set(K,A,$).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-x),_.push(g++)}v.push(_)}for(let P=0;P<i;P++)for(let _=0;_<r;_++){const x=v[_][P],L=v[_+1][P],F=v[_+1][P+1],B=v[_][P+1];(e>0||_!==0)&&(h.push(x,L,B),T+=3),(t>0||_!==r-1)&&(h.push(L,F,B),T+=3)}c.addGroup(p,T,0),p+=T}function S(y){const R=g,T=new oe,A=new E;let P=0;const _=y===!0?e:t,x=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const L=g;for(let F=0;F<=i;F++){const j=F/i*l+a,K=Math.cos(j),$=Math.sin(j);A.x=_*$,A.y=m*x,A.z=_*K,u.push(A.x,A.y,A.z),d.push(0,x,0),T.x=K*.5+.5,T.y=$*.5*x+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){const B=R+F,j=L+F;y===!0?h.push(j,j+1,B):h.push(j+1,j,B),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends Mi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new oe:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new E,i=[],r=[],o=[],a=new E,l=new Xe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tu extends li{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gf extends Tu{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const qr=new E,ta=new zl,na=new zl,ia=new zl;class wu extends li{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(qr.subVectors(i[0],i[1]).add(i[0]),c=qr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(qr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),na.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),ia.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),na.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ta.calc(l),na.calc(l),ia.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Vf(s,e){const t=1-s;return t*t*e}function Wf(s,e){return 2*(1-s)*s*e}function Xf(s,e){return s*s*e}function Qs(s,e,t,n){return Vf(s,e)+Wf(s,t)+Xf(s,n)}function qf(s,e){const t=1-s;return t*t*t*e}function Yf(s,e){const t=1-s;return 3*t*t*s*e}function jf(s,e){return 3*(1-s)*s*s*e}function Kf(s,e){return s*s*s*e}function er(s,e,t,n,i){return qf(s,e)+Yf(s,t)+jf(s,n)+Kf(s,i)}class $f extends li{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(e,i.x,r.x,o.x,a.x),er(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zf extends li{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(e,i.x,r.x,o.x,a.x),er(e,i.y,r.y,o.y,a.y),er(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends li{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends li{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ep extends li{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Qs(e,i.x,r.x,o.x),Qs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hl extends li{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Qs(e,i.x,r.x,o.x),Qs(e,i.y,r.y,o.y),Qs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tp extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Yc(a,l.x,c.x,h.x,u.x),Yc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var np=Object.freeze({__proto__:null,ArcCurve:Gf,CatmullRomCurve3:wu,CubicBezierCurve:$f,CubicBezierCurve3:Zf,EllipseCurve:Tu,LineCurve:Jf,LineCurve3:Qf,QuadraticBezierCurve:ep,QuadraticBezierCurve3:Hl,SplineCurve:tp});class si extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let S=0;S<c;S++){const y=S*u-r;g.push(y,-M,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,y=M+c*(p+1),R=M+1+c*(p+1),T=M+1+c*p;f.push(S,y,T),f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends Pt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new E,g=new oe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,y=M+n+1,R=M+n+2,T=M+1;a.push(S,y,T),a.push(y,R,T)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ri extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const T=R/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+y,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=h[p][M+1],y=h[p][M],R=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(S,y,T),(p!==n-1||l<Math.PI)&&f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends Pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(v,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _o extends Pt{constructor(e=new Hl(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new oe;let h=new E;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function v(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),M(),p()}function m(S){h=e.getPointAt(S/t,h);const y=o.normals[S],R=o.binormals[S];for(let T=0;T<=i;T++){const A=T/i*Math.PI*2,P=Math.sin(A),_=-Math.cos(A);l.x=_*y.x+P*R.x,l.y=_*y.y+P*R.y,l.z=_*y.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let y=1;y<=i;y++){const R=(i+1)*(S-1)+(y-1),T=(i+1)*S+(y-1),A=(i+1)*S+y,P=(i+1)*(S-1)+y;g.push(R,T,P),g.push(T,A,P)}}function M(){for(let S=0;S<=t;S++)for(let y=0;y<=i;y++)c.x=S/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _o(new np[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ip extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mt extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sp extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function op(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ap(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Eu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class gr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lp extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cc:r=e,a=2*t-n;break;case hc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:o=e,l=2*n-t;break;case hc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+M*o[c+R]+S*o[l+R]+y*o[u+R];return r}}class cp extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class hp extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&op(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ro,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=cr;class Rs extends kn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=lr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Au extends kn{constructor(e,t,n,i){super(e,t,n,i)}}Au.prototype.ValueTypeName="color";class Ms extends kn{constructor(e,t,n,i){super(e,t,n,i)}}Ms.prototype.ValueTypeName="number";class up extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Si.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ss extends kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new up(this.times,this.values,this.getValueSize(),e)}}Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends kn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=lr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends kn{constructor(e,t,n,i){super(e,t,n,i)}}Ts.prototype.ValueTypeName="vector";class dp{constructor(e="",t=-1,n=[],i=Cd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pp(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=ap(l);l=jc(l,1,h),c=jc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Eu(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const S=d[g];m.push(S.time),p.push(S.morphTarget===v?1:0)}i.push(new Ms(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ts,f+".position",d,"pos",i),n(Ss,f+".quaternion",d,"rot",i),n(Ts,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function fp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return Au;case"quaternion":return Ss;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fp(s.type);if(s.times===void 0){const t=[],n=[];Eu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mp{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const gp=new mp;class Gi{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class vp extends Error{constructor(e,t){super(e),this.response=t}}class xo extends Gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,A=h.length;T<A;T++){const P=h[T];P.onProgress&&P.onProgress(R)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new vp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ei.add(`file:${e}`,c);const h=Zn[e];delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=new WeakMap;class _p extends Gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ei.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ls.get(o);u===void 0&&(u=[],ls.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=hr("img");function l(){h(),t&&t(this);const u=ls.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ei.remove(`image:${e}`);const d=ls.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ei.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class xp extends Gi{constructor(e){super(e)}load(e,t,n,i){const r=new zt,o=new _p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class So extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yp extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sa=new Xe,Kc=new E,$c=new E;class Vl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bp extends Vl{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ru extends So{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zc=new Xe,Xs=new E,ra=new E;class Mp extends Vl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,n.coordinateSystem,n.reversedDepth)}}class Wl extends So{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class To extends mu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sp extends Vl{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lo extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const oa=new WeakMap;class Tp extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ei.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(oa.has(o)===!0)i&&i(oa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ei.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),oa.set(l,c),ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ei.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class wp extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Xl="\\[\\]\\.:\\/",Ap=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",Rp="[^"+Xl.replace("\\.","")+"]",Cp=/((?:WC+[\/:])*)/.source.replace("WC",ql),Pp=/(WCOD+)?/.source.replace("WCOD",Rp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),Dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Ip=new RegExp("^"+Cp+Pp+Lp+Dp+"$"),Up=["material","materials","bones","map"];class Np{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ap,"")}static parseTrackName(e){const t=Ip.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Np;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Jc=new Xe;class Fp{constructor(e,t,n=0,i=1/0){this.ray=new pr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(Qc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ml(e[i],this,n,t);return n.sort(Qc),n}}function Qc(s,e){return s.distance-e.distance}function ml(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],e,t,!0)}}function eh(s,e,t,n){const i=kp(n);switch(t){case iu:return s*e;case El:return s*e/i.components*i.byteLength;case Al:return s*e/i.components*i.byteLength;case ru:return s*e*2/i.components*i.byteLength;case Rl:return s*e*2/i.components*i.byteLength;case su:return s*e*3/i.components*i.byteLength;case Mn:return s*e*4/i.components*i.byteLength;case Cl:return s*e*4/i.components*i.byteLength;case so:case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:case za:return Math.max(s,16)*Math.max(e,8)/4;case ka:case Ba:return Math.max(s,8)*Math.max(e,8)/2;case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case ol:return Math.ceil(s/4)*Math.ceil(e/4)*16;case al:case ll:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kp(s){switch(s){case Un:case Qh:return{byteLength:1,components:1};case sr:case eu:case ni:return{byteLength:2,components:1};case Tl:case wl:return{byteLength:2,components:4};case Hi:case Sl:case Pn:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Op(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ig=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Bp,alphahash_pars_fragment:zp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:jp,begin_vertex:Kp,beginnormal_vertex:$p,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:em,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:am,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Lm,envmap_vertex:bm,fog_vertex:Mm,fog_pars_vertex:Sm,fog_fragment:Tm,fog_pars_fragment:wm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Am,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Pm,lights_toon_fragment:Dm,lights_toon_pars_fragment:Im,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Fm,lights_physical_pars_fragment:km,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:zm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:jm,metalnessmap_fragment:Km,metalnessmap_pars_fragment:$m,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:eg,morphtarget_vertex:tg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:dg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:vg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:bg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Sg,skinbase_vertex:Tg,skinning_pars_vertex:wg,skinning_vertex:Eg,skinnormal_vertex:Ag,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Pg,tonemapping_pars_fragment:Lg,transmission_fragment:Dg,transmission_pars_fragment:Ig,uv_pars_fragment:Ug,uv_pars_vertex:Ng,uv_vertex:Fg,worldpos_vertex:kg,background_vert:Og,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:Hg,cube_vert:Gg,cube_frag:Vg,depth_vert:Wg,depth_frag:Xg,distanceRGBA_vert:qg,distanceRGBA_frag:Yg,equirect_vert:jg,equirect_frag:Kg,linedashed_vert:$g,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:Qg,meshlambert_vert:e0,meshlambert_frag:t0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:v0},me={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Qt([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Qt([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Qt([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Qt([me.common,me.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Qt([me.lights,me.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Gn.physical={uniforms:Qt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const jr={r:0,b:0,g:0},Pi=new Tn,_0=new Xe;function x0(s,e,t,n,i,r,o){const a=new xe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function v(S){let y=!1;const R=g(S);R===null?p(a,l):R&&R.isColor&&(p(R,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===bo)?(h===void 0&&(h=new Ie(new sn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:ys(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Pi)),h.material.toneMapped=et.getTransfer(R.colorSpace)!==ct,(u!==R||d!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ie(new si(2,2),new Ut({name:"BackgroundMaterial",uniforms:ys(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=et.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(jr,pu(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,y,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:v,addToRenderList:m,dispose:M}}function y0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(x,L,F,B,j){let K=!1;const $=u(B,F,L);r!==$&&(r=$,c(r.object)),K=f(x,B,F,j),K&&g(x,B,F,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(x,L,F,B),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,L,F){const B=F.wireframe===!0;let j=n[x.id];j===void 0&&(j={},n[x.id]=j);let K=j[L.id];K===void 0&&(K={},j[L.id]=K);let $=K[B];return $===void 0&&($=d(l()),K[B]=$),$}function d(x){const L=[],F=[],B=[];for(let j=0;j<t;j++)L[j]=0,F[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,L,F,B){const j=r.attributes,K=L.attributes;let $=0;const te=F.getAttributes();for(const q in te)if(te[q].location>=0){const ve=j[q];let Ae=K[q];if(Ae===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(Ae=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(Ae=x.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;$++}return r.attributesNum!==$||r.index!==B}function g(x,L,F,B){const j={},K=L.attributes;let $=0;const te=F.getAttributes();for(const q in te)if(te[q].location>=0){let ve=K[q];ve===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),j[q]=Ae,$++}r.attributes=j,r.attributesNum=$,r.index=B}function v(){const x=r.newAttributes;for(let L=0,F=x.length;L<F;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const F=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;F[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),j[x]!==L&&(s.vertexAttribDivisor(x,L),j[x]=L)}function M(){const x=r.newAttributes,L=r.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==x[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function S(x,L,F,B,j,K,$){$===!0?s.vertexAttribIPointer(x,L,F,j,K):s.vertexAttribPointer(x,L,F,B,j,K)}function y(x,L,F,B){v();const j=B.attributes,K=F.getAttributes(),$=L.defaultAttributeValues;for(const te in K){const q=K[te];if(q.location>=0){let fe=j[te];if(fe===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),fe!==void 0){const ve=fe.normalized,Ae=fe.itemSize,Ge=e.get(fe);if(Ge===void 0)continue;const tt=Ge.buffer,ft=Ge.type,Ke=Ge.bytesPerElement,J=ft===s.INT||ft===s.UNSIGNED_INT||fe.gpuType===Sl;if(fe.isInterleavedBufferAttribute){const Z=fe.data,ye=Z.stride,ke=fe.offset;if(Z.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)p(q.location+Le,Z.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Le=0;Le<q.locationSize;Le++)S(q.location+Le,Ae/q.locationSize,ft,ve,ye*Ke,(ke+Ae/q.locationSize*Le)*Ke,J)}else{if(fe.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z,fe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Z=0;Z<q.locationSize;Z++)S(q.location+Z,Ae/q.locationSize,ft,ve,Ae*Ke,Ae/q.locationSize*Z*Ke,J)}}else if($!==void 0){const ve=$[te];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(q.location,ve);break;case 3:s.vertexAttrib3fv(q.location,ve);break;case 4:s.vertexAttrib4fv(q.location,ve);break;default:s.vertexAttrib1fv(q.location,ve)}}}}M()}function R(){P();for(const x in n){const L=n[x];for(const F in L){const B=L[F];for(const j in B)h(B[j].object),delete B[j];delete L[F]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const F in L){const B=L[F];for(const j in B)h(B[j].object),delete B[j];delete L[F]}delete n[x.id]}function A(x){for(const L in n){const F=n[L];if(F[x.id]===void 0)continue;const B=F[x.id];for(const j in B)h(B[j].object),delete B[j];delete F[x.id]}}function P(){_(),o=!0,r!==i&&(r=i,c(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:_,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function b0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function M0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Un&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function S0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ni,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let y=p.clippingState||null;l.value=y,y=h(g,d,S,f);for(let R=0;R!==S;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==v;++S,y+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function T0(s){let e=new WeakMap;function t(o,a){return a===Na?o.mapping=vs:a===Fa&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===Fa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const us=4,th=[.125,.215,.35,.446,.526,.582],Oi=20,aa=new To,nh=new xe;let la=null,ca=0,ha=0,ua=!1;const Fi=(1+Math.sqrt(5))/2,cs=1/Fi,ih=[new E(-Fi,cs,0),new E(Fi,cs,0),new E(-cs,0,Fi),new E(cs,0,Fi),new E(0,Fi,-cs),new E(0,Fi,cs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],w0=new E;class sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=w0}=r;la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ni,format:Mn,colorSpace:Kt,depthBuffer:!1},i=rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(r)),this._blurMaterial=A0(r,e,t)}return i}_compileMaterial(e){const t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,i,r){const l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nh),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new Bt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new Ie(new sn,v);let p=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,p=!0):(v.color.copy(nh),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const R=this._cubeSize;Kr(i,y*R,S>2?R:0,R,R),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vs||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ih[(i-r-1)%ih.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ie(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let M=0;for(let A=0;A<Oi;++A){const P=A/v,_=Math.exp(-P*P/2);p.push(_),A===0?M+=_:A<m&&(M+=2*_)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const y=this._sizeLods[i],R=3*y*(i>S-us?i-S+us:0),T=4*(this._cubeSize-y);Kr(t,R,T,3*y,2*y),l.setRenderTarget(t),l.render(u,aa)}}function E0(s){const e=[],t=[],n=[];let i=s;const r=s-us+1+th.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-us?l=th[o-s+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,_=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(_,v*g*T),S.set(d,m*g*T);const x=[T,T,T,T,T,T];y.set(x,p*g*T)}const R=new Pt;R.setAttribute("position",new Mt(M,v)),R.setAttribute("uv",new Mt(S,m)),R.setAttribute("faceIndex",new Mt(y,p)),e.push(R),i>us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rh(s,e,t){const n=new Sn(s,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function A0(s,e,t){const n=new Float32Array(Oi),i=new E(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function oh(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ah(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Na||l===Fa,h=l===vs||l===_s;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sh(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new sh(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function C0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function P0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let S=0,y=M.length;S<y;S+=3){const R=M[S+0],T=M[S+1],A=M[S+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){const M=g.array;v=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const R=S+0,T=S+1,A=S+2;d.push(R,T,T,A,A,R)}}else return;const m=new(cu(d)?fu:du)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function L0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function D0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function I0(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*u),P=new hu(A,R,T,u);P.type=Pn,P.needsUpdate=!0;const _=y*4;for(let L=0;L<u;L++){const F=p[L],B=M[L],j=S[L],K=R*T*4*L;for(let $=0;$<F.count;$++){const te=$*_;g===!0&&(i.fromBufferAttribute(F,$),A[K+te+0]=i.x,A[K+te+1]=i.y,A[K+te+2]=i.z,A[K+te+3]=0),v===!0&&(i.fromBufferAttribute(B,$),A[K+te+4]=i.x,A[K+te+5]=i.y,A[K+te+6]=i.z,A[K+te+7]=0),m===!0&&(i.fromBufferAttribute(j,$),A[K+te+8]=i.x,A[K+te+9]=i.y,A[K+te+10]=i.z,A[K+te+11]=j.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new oe(R,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function U0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Pu=new zt,lh=new Mu(1,1),Lu=new hu,Du=new df,Iu=new gu,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ch[i];if(r===void 0&&(r=new Float32Array(i),ch[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wo(s,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function N0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function O0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function B0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;fh.set(n),s.uniformMatrix2fv(this.addr,!1,fh),Gt(t,n)}}function z0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;dh.set(n),s.uniformMatrix3fv(this.addr,!1,dh),Gt(t,n)}}function H0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;uh.set(n),s.uniformMatrix4fv(this.addr,!1,uh),Gt(t,n)}}function G0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function V0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function W0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function X0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function q0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function j0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function K0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function $0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lh.compareFunction=lu,r=lh):r=Pu,t.setTexture2D(e||r,i)}function Z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Du,i)}function J0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Iu,i)}function Q0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lu,i)}function ev(s){switch(s){case 5126:return N0;case 35664:return F0;case 35665:return k0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return j0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tv(s,e){s.uniform1fv(this.addr,e)}function nv(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function iv(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function sv(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function rv(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ov(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function av(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function lv(s,e){s.uniform1iv(this.addr,e)}function cv(s,e){s.uniform2iv(this.addr,e)}function hv(s,e){s.uniform3iv(this.addr,e)}function uv(s,e){s.uniform4iv(this.addr,e)}function dv(s,e){s.uniform1uiv(this.addr,e)}function fv(s,e){s.uniform2uiv(this.addr,e)}function pv(s,e){s.uniform3uiv(this.addr,e)}function mv(s,e){s.uniform4uiv(this.addr,e)}function gv(s,e,t){const n=this.cache,i=e.length,r=wo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Pu,r[o])}function vv(s,e,t){const n=this.cache,i=e.length,r=wo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Du,r[o])}function _v(s,e,t){const n=this.cache,i=e.length,r=wo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Iu,r[o])}function xv(s,e,t){const n=this.cache,i=e.length,r=wo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lu,r[o])}function yv(s){switch(s){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ev(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function ph(s,e){s.seq.push(e),s.map[e.id]=e}function Tv(s,e,t){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ph(t,c===void 0?new bv(a,s,e):new Mv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Sv(a),ph(t,u)),t=u}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Tv(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const wv=37297;let Ev=0;function Av(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gh=new Ye;function Rv(s){et._getMatrix(gh,et.workingColorSpace,s);const e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case po:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Av(s.getShaderSource(e),a)}else return r}function Cv(s,e){const t=Rv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pv(s,e){let t;switch(e){case Xh:t="Linear";break;case qh:t="Reinhard";break;case Yh:t="Cineon";break;case Ml:t="ACESFilmic";break;case Kh:t="AgX";break;case $h:t="Neutral";break;case jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new E;function Lv(){et.getLuminanceCoefficients($r);const s=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Iv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $s(s){return s!==""}function _h(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(s){return s.replace(Nv,kv)}const Fv=new Map;function kv(s,e){let t=je[e];if(t===void 0){const n=Fv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(s){return s.replace(Ov,Bv)}function Bv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case _s:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Vv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wh:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function Wv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zv(t),c=Hv(t),h=Gv(t),u=Vv(t),d=Wv(t),f=Dv(t),g=Iv(r),v=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?je.tonemapping_pars_fragment:"",t.toneMapping!==bi?Pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Cv("linearToOutputTexel",t.outputColorSpace),Lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=gl(o),o=_h(o,t),o=xh(o,t),a=gl(a),a=_h(a,t),a=xh(a,t),o=yh(o),a=yh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,y=M+p+a,R=mh(i,i.VERTEX_SHADER,S),T=mh(i,i.FRAGMENT_SHADER,y);i.attachShader(v,R),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",B=i.getShaderInfoLog(R)||"",j=i.getShaderInfoLog(T)||"",K=F.trim(),$=B.trim(),te=j.trim();let q=!0,fe=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,T);else{const ve=vh(i,R,"vertex"),Ae=vh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+ve+`
`+Ae)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||te==="")&&(fe=!1);fe&&(L.diagnostics={runnable:q,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:te,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new co(i,v),_=Uv(i,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,wv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ev++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let qv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jv(e),t.set(e,n)),n}}class jv{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function Kv(s,e,t,n,i,r,o){const a=new Dl,l=new Yv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,x,L,F,B){const j=F.fog,K=B.geometry,$=_.isMeshStandardMaterial?F.environment:null,te=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),q=te&&te.mapping===bo?te.image.height:null,fe=g[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Ge=0;K.morphAttributes.position!==void 0&&(Ge=1),K.morphAttributes.normal!==void 0&&(Ge=2),K.morphAttributes.color!==void 0&&(Ge=3);let tt,ft,Ke,J;if(fe){const at=Gn[fe];tt=at.vertexShader,ft=at.fragmentShader}else tt=_.vertexShader,ft=_.fragmentShader,l.update(_),Ke=l.getVertexShaderID(_),J=l.getFragmentShaderID(_);const Z=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,Le=B.isBatchedMesh===!0,$e=!!_.map,Ft=!!_.matcap,D=!!te,_t=!!_.aoMap,He=!!_.lightMap,Oe=!!_.bumpMap,we=!!_.normalMap,xt=!!_.displacementMap,Ee=!!_.emissiveMap,qe=!!_.metalnessMap,kt=!!_.roughnessMap,Et=_.anisotropy>0,C=_.clearcoat>0,b=_.dispersion>0,z=_.iridescence>0,Q=_.sheen>0,I=_.transmission>0,U=Et&&!!_.anisotropyMap,Y=C&&!!_.clearcoatMap,V=C&&!!_.clearcoatNormalMap,ie=C&&!!_.clearcoatRoughnessMap,de=z&&!!_.iridescenceMap,ne=z&&!!_.iridescenceThicknessMap,he=Q&&!!_.sheenColorMap,De=Q&&!!_.sheenRoughnessMap,be=!!_.specularMap,pe=!!_.specularColorMap,Fe=!!_.specularIntensityMap,N=I&&!!_.transmissionMap,re=I&&!!_.thicknessMap,ue=!!_.gradientMap,Te=!!_.alphaMap,ae=_.alphaTest>0,ee=!!_.alphaHash,Pe=!!_.extensions;let Ve=bi;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const bt={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:ft,defines:_.defines,customVertexShaderID:Ke,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Le,batchingColor:Le&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Kt,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:Ft,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:q,aoMap:_t,lightMap:He,bumpMap:Oe,normalMap:we,displacementMap:d&&xt,emissiveMap:Ee,normalMapObjectSpace:we&&_.normalMapType===Id,normalMapTangentSpace:we&&_.normalMapType===au,metalnessMap:qe,roughnessMap:kt,anisotropy:Et,anisotropyMap:U,clearcoat:C,clearcoatMap:Y,clearcoatNormalMap:V,clearcoatRoughnessMap:ie,dispersion:b,iridescence:z,iridescenceMap:de,iridescenceThicknessMap:ne,sheen:Q,sheenColorMap:he,sheenRoughnessMap:De,specularMap:be,specularColorMap:pe,specularIntensityMap:Fe,transmission:I,transmissionMap:N,thicknessMap:re,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Bi&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:ae,alphaHash:ee,combine:_.combine,mapUv:$e&&v(_.map.channel),aoMapUv:_t&&v(_.aoMap.channel),lightMapUv:He&&v(_.lightMap.channel),bumpMapUv:Oe&&v(_.bumpMap.channel),normalMapUv:we&&v(_.normalMap.channel),displacementMapUv:xt&&v(_.displacementMap.channel),emissiveMapUv:Ee&&v(_.emissiveMap.channel),metalnessMapUv:qe&&v(_.metalnessMap.channel),roughnessMapUv:kt&&v(_.roughnessMap.channel),anisotropyMapUv:U&&v(_.anisotropyMap.channel),clearcoatMapUv:Y&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:V&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(_.sheenRoughnessMap.channel),specularMapUv:be&&v(_.specularMap.channel),specularColorMapUv:pe&&v(_.specularColorMap.channel),specularIntensityMapUv:Fe&&v(_.specularIntensityMap.channel),transmissionMapUv:N&&v(_.transmissionMap.channel),thicknessMapUv:re&&v(_.thicknessMap.channel),alphaMapUv:Te&&v(_.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(we||Et),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&($e||Te),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:Ee&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xt,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&_.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)x.push(L),x.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(M(x,_),S(x,_),x.push(s.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function M(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function S(_,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const x=g[_.type];let L;if(x){const F=Gn[x];L=bs.clone(F.uniforms)}else L=_.uniforms;return L}function R(_,x){let L;for(let F=0,B=h.length;F<B;F++){const j=h[F];if(j.cacheKey===x){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Xv(s,x,_,r),h.push(L)),L}function T(_){if(--_.usedTimes===0){const x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function A(_){l.remove(_)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function $v(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Zv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Zv),n.length>1&&n.sort(d||Mh),i.length>1&&i.sort(d||Mh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Jv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Sh,s.set(n,[o])):i>=r.length?(o=new Sh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Qv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new xe};break;case"SpotLight":t={position:new E,direction:new E,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function e_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let t_=0;function n_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i_(s){const e=new Qv,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Xe,o=new Xe;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,S=0,y=0,R=0,T=0,A=0;c.sort(n_);for(let _=0,x=c.length;_<x;_++){const L=c[_],F=L.color,B=L.intensity,j=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],B);A++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=$,f++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(B),$.distance=j,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[v]=$;const te=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,te.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=te.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=K,y++}v++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(F).multiplyScalar(B),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=$,g++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(B),$.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=A,n.version=t_++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Th(s){const e=new i_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function s_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Th(s),e.set(i,[a])):r>=o.length?(a=new Th(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a_(s,e,t){let n=new Nl;const i=new oe,r=new oe,o=new ot,a=new sp({depthPacking:Dd}),l=new rp,c={},h=t.maxTextureSize,u={[oi]:jt,[jt]:oi,[Xt]:Xt},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ie(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const _=s.getRenderTarget(),x=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==Jn&&this.type===Jn,j=p===Jn&&this.type!==Jn;for(let K=0,$=T.length;K<$;K++){const te=T[K],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const fe=q.getFrameExtents();if(i.multiply(fe),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/fe.x),i.x=r.x*fe.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/fe.y),i.y=r.y*fe.y,q.mapSize.y=r.y)),q.map===null||B===!0||j===!0){const Ae=this.type!==Jn?{minFilter:on,magFilter:on}:{};q.map!==null&&q.map.dispose(),q.map=new Sn(i.x,i.y,Ae),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const ve=q.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const Ge=q.getViewport(Ae);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),F.viewport(o),q.updateMatrices(te,Ae),n=q.getFrustum(),y(A,P,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Jn&&M(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(_,x,L)};function M(T,A){const P=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Sn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,f,v,null)}function S(T,A,P,_){let x=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)x=L;else if(x=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=x.uuid,B=A.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let K=j[B];K===void 0&&(K=x.clone(),j[B]=K,A.addEventListener("dispose",R)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,_===Jn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=s.properties.get(x);F.light=P}return x}function y(T,A,P,_,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Jn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=e.update(T),j=T.material;if(Array.isArray(j)){const K=B.groups;for(let $=0,te=K.length;$<te;$++){const q=K[$],fe=j[q.materialIndex];if(fe&&fe.visible){const ve=S(T,fe,_,x);T.onBeforeShadow(s,T,A,P,B,ve,q),s.renderBufferDirect(P,null,B,ve,T,q),T.onAfterShadow(s,T,A,P,B,ve,q)}}}else if(j.visible){const K=S(T,j,_,x);T.onBeforeShadow(s,T,A,P,B,K,null),s.renderBufferDirect(P,null,B,K,T,null),T.onAfterShadow(s,T,A,P,B,K,null)}}const F=T.children;for(let B=0,j=F.length;B<j;B++)y(F[B],A,P,_,x)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const _=c[P],x=T.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}const l_={[Ra]:Ca,[Pa]:Ia,[La]:Ua,[gs]:Da,[Ca]:Ra,[Ia]:Pa,[Ua]:La,[Da]:gs};function c_(s,e){function t(){let N=!1;const re=new ot;let ue=null;const Te=new ot(0,0,0,0);return{setMask:function(ae){ue!==ae&&!N&&(s.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){N=ae},setClear:function(ae,ee,Pe,Ve,bt){bt===!0&&(ae*=Ve,ee*=Ve,Pe*=Ve),re.set(ae,ee,Pe,Ve),Te.equals(re)===!1&&(s.clearColor(ae,ee,Pe,Ve),Te.copy(re))},reset:function(){N=!1,ue=null,Te.set(-1,0,0,0)}}}function n(){let N=!1,re=!1,ue=null,Te=null,ae=null;return{setReversed:function(ee){if(re!==ee){const Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),re=ee;const Ve=ae;ae=null,this.setClear(Ve)}},getReversed:function(){return re},setTest:function(ee){ee?Z(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!N&&(s.depthMask(ee),ue=ee)},setFunc:function(ee){if(re&&(ee=l_[ee]),Te!==ee){switch(ee){case Ra:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=ee}},setLocked:function(ee){N=ee},setClear:function(ee){ae!==ee&&(re&&(ee=1-ee),s.clearDepth(ee),ae=ee)},reset:function(){N=!1,ue=null,Te=null,ae=null,re=!1}}}function i(){let N=!1,re=null,ue=null,Te=null,ae=null,ee=null,Pe=null,Ve=null,bt=null;return{setTest:function(at){N||(at?Z(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(at){re!==at&&!N&&(s.stencilMask(at),re=at)},setFunc:function(at,Xn,On){(ue!==at||Te!==Xn||ae!==On)&&(s.stencilFunc(at,Xn,On),ue=at,Te=Xn,ae=On)},setOp:function(at,Xn,On){(ee!==at||Pe!==Xn||Ve!==On)&&(s.stencilOp(at,Xn,On),ee=at,Pe=Xn,Ve=On)},setLocked:function(at){N=at},setClear:function(at){bt!==at&&(s.clearStencil(at),bt=at)},reset:function(){N=!1,re=null,ue=null,Te=null,ae=null,ee=null,Pe=null,Ve=null,bt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,S=null,y=null,R=null,T=null,A=new xe(0,0,0),P=0,_=!1,x=null,L=null,F=null,B=null,j=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=te>=2);let fe=null,ve={};const Ae=s.getParameter(s.SCISSOR_BOX),Ge=s.getParameter(s.VIEWPORT),tt=new ot().fromArray(Ae),ft=new ot().fromArray(Ge);function Ke(N,re,ue,Te){const ae=new Uint8Array(4),ee=s.createTexture();s.bindTexture(N,ee),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<ue;Pe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(re+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return ee}const J={};J[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(gs),Oe(!1),we(sc),Z(s.CULL_FACE),_t(ti);function Z(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function ye(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ke(N,re){return u[N]!==re?(s.bindFramebuffer(N,re),u[N]=re,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=re),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Le(N,re){let ue=f,Te=!1;if(N){ue=d.get(re),ue===void 0&&(ue=[],d.set(re,ue));const ae=N.textures;if(ue.length!==ae.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,Pe=ae.length;ee<Pe;ee++)ue[ee]=s.COLOR_ATTACHMENT0+ee;ue.length=ae.length,Te=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Te=!0);Te&&s.drawBuffers(ue)}function $e(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Ft={[ki]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};Ft[ud]=s.MIN,Ft[dd]=s.MAX;const D={[fd]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[Ea]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[xd]:s.DST_COLOR,[vd]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[Aa]:s.ONE_MINUS_SRC_ALPHA,[yd]:s.ONE_MINUS_DST_COLOR,[_d]:s.ONE_MINUS_DST_ALPHA,[Md]:s.CONSTANT_COLOR,[Sd]:s.ONE_MINUS_CONSTANT_COLOR,[Td]:s.CONSTANT_ALPHA,[wd]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(N,re,ue,Te,ae,ee,Pe,Ve,bt,at){if(N===ti){v===!0&&(ye(s.BLEND),v=!1);return}if(v===!1&&(Z(s.BLEND),v=!0),N!==ld){if(N!==m||at!==_){if((p!==ki||y!==ki)&&(s.blendEquation(s.FUNC_ADD),p=ki,y=ki),at)switch(N){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ai:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,S=null,R=null,T=null,A.set(0,0,0),P=0,m=N,_=at}return}ae=ae||re,ee=ee||ue,Pe=Pe||Te,(re!==p||ae!==y)&&(s.blendEquationSeparate(Ft[re],Ft[ae]),p=re,y=ae),(ue!==M||Te!==S||ee!==R||Pe!==T)&&(s.blendFuncSeparate(D[ue],D[Te],D[ee],D[Pe]),M=ue,S=Te,R=ee,T=Pe),(Ve.equals(A)===!1||bt!==P)&&(s.blendColor(Ve.r,Ve.g,Ve.b,bt),A.copy(Ve),P=bt),m=N,_=!1}function He(N,re){N.side===Xt?ye(s.CULL_FACE):Z(s.CULL_FACE);let ue=N.side===jt;re&&(ue=!ue),Oe(ue),N.blending===Bi&&N.transparent===!1?_t(ti):_t(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Te=N.stencilWrite;a.setTest(Te),Te&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ee(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){x!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),x=N)}function we(N){N!==od?(Z(s.CULL_FACE),N!==L&&(N===sc?s.cullFace(s.BACK):N===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),L=N}function xt(N){N!==F&&($&&s.lineWidth(N),F=N)}function Ee(N,re,ue){N?(Z(s.POLYGON_OFFSET_FILL),(B!==re||j!==ue)&&(s.polygonOffset(re,ue),B=re,j=ue)):ye(s.POLYGON_OFFSET_FILL)}function qe(N){N?Z(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function kt(N){N===void 0&&(N=s.TEXTURE0+K-1),fe!==N&&(s.activeTexture(N),fe=N)}function Et(N,re,ue){ue===void 0&&(fe===null?ue=s.TEXTURE0+K-1:ue=fe);let Te=ve[ue];Te===void 0&&(Te={type:void 0,texture:void 0},ve[ue]=Te),(Te.type!==N||Te.texture!==re)&&(fe!==ue&&(s.activeTexture(ue),fe=ue),s.bindTexture(N,re||J[N]),Te.type=N,Te.texture=re)}function C(){const N=ve[fe];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(N){tt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function De(N){ft.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ft.copy(N))}function be(N,re){let ue=c.get(re);ue===void 0&&(ue=new WeakMap,c.set(re,ue));let Te=ue.get(N);Te===void 0&&(Te=s.getUniformBlockIndex(re,N.name),ue.set(N,Te))}function pe(N,re){const Te=c.get(re).get(N);l.get(re)!==Te&&(s.uniformBlockBinding(re,Te,N.__bindingPointIndex),l.set(re,Te))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},fe=null,ve={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,S=null,y=null,R=null,T=null,A=new xe(0,0,0),P=0,_=!1,x=null,L=null,F=null,B=null,j=null,tt.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ye,bindFramebuffer:ke,drawBuffers:Le,useProgram:$e,setBlending:_t,setMaterial:He,setFlipSided:Oe,setCullFace:we,setLineWidth:xt,setPolygonOffset:Ee,setScissorTest:qe,activeTexture:kt,bindTexture:Et,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:de,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:pe,texStorage2D:V,texStorage3D:ie,texSubImage2D:Q,texSubImage3D:I,compressedTexSubImage2D:U,compressedTexSubImage3D:Y,scissor:he,viewport:De,reset:Fe}}function h_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):hr("canvas")}function v(C,b,z){let Q=1;const I=Et(C);if((I.width>z||I.height>z)&&(Q=z/Math.max(I.width,I.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const U=Math.floor(Q*I.width),Y=Math.floor(Q*I.height);u===void 0&&(u=g(U,Y));const V=b?g(U,Y):u;return V.width=U,V.height=Y,V.getContext("2d").drawImage(C,0,0,U,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+U+"x"+Y+")."),V}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,b,z,Q,I=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let U=b;if(b===s.RED&&(z===s.FLOAT&&(U=s.R32F),z===s.HALF_FLOAT&&(U=s.R16F),z===s.UNSIGNED_BYTE&&(U=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(U=s.R8UI),z===s.UNSIGNED_SHORT&&(U=s.R16UI),z===s.UNSIGNED_INT&&(U=s.R32UI),z===s.BYTE&&(U=s.R8I),z===s.SHORT&&(U=s.R16I),z===s.INT&&(U=s.R32I)),b===s.RG&&(z===s.FLOAT&&(U=s.RG32F),z===s.HALF_FLOAT&&(U=s.RG16F),z===s.UNSIGNED_BYTE&&(U=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(U=s.RG8UI),z===s.UNSIGNED_SHORT&&(U=s.RG16UI),z===s.UNSIGNED_INT&&(U=s.RG32UI),z===s.BYTE&&(U=s.RG8I),z===s.SHORT&&(U=s.RG16I),z===s.INT&&(U=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(U=s.RGB8UI),z===s.UNSIGNED_SHORT&&(U=s.RGB16UI),z===s.UNSIGNED_INT&&(U=s.RGB32UI),z===s.BYTE&&(U=s.RGB8I),z===s.SHORT&&(U=s.RGB16I),z===s.INT&&(U=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(U=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(U=s.RGBA16UI),z===s.UNSIGNED_INT&&(U=s.RGBA32UI),z===s.BYTE&&(U=s.RGBA8I),z===s.SHORT&&(U=s.RGBA16I),z===s.INT&&(U=s.RGBA32I)),b===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(U=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(U=s.R11F_G11F_B10F)),b===s.RGBA){const Y=I?po:et.getTransfer(Q);z===s.FLOAT&&(U=s.RGBA32F),z===s.HALF_FLOAT&&(U=s.RGBA16F),z===s.UNSIGNED_BYTE&&(U=Y===ct?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(U=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(U=s.RGB5_A1)}return(U===s.R16F||U===s.R32F||U===s.RG16F||U===s.RG32F||U===s.RGBA16F||U===s.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function y(C,b){let z;return C?b===null||b===Hi||b===rr?z=s.DEPTH24_STENCIL8:b===Pn?z=s.DEPTH32F_STENCIL8:b===sr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===rr?z=s.DEPTH_COMPONENT24:b===Pn?z=s.DEPTH_COMPONENT32F:b===sr&&(z=s.DEPTH_COMPONENT16),z}function R(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),x(b)}function P(C){const b=n.get(C);if(b.__webglInit===void 0)return;const z=C.source,Q=d.get(z);if(Q){const I=Q[b.__cacheKey];I.usedTimes--,I.usedTimes===0&&_(C),Object.keys(Q).length===0&&d.delete(z)}n.remove(C)}function _(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const z=C.source,Q=d.get(z);delete Q[b.__cacheKey],o.memory.textures--}function x(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let I=0;I<b.__webglFramebuffer[Q].length;I++)s.deleteFramebuffer(b.__webglFramebuffer[Q][I]);else s.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let Q=0,I=z.length;Q<I;Q++){const U=n.get(z[Q]);U.__webglTexture&&(s.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(z[Q])}n.remove(C)}let L=0;function F(){L=0}function B(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function j(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function K(C,b){const z=n.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,C,b);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function $(C,b){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){J(z,C,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function te(C,b){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){J(z,C,b);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function q(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Z(z,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const fe={[ln]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[fo]:s.MIRRORED_REPEAT},ve={[on]:s.NEAREST,[Jh]:s.NEAREST_MIPMAP_NEAREST,[Ks]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[io]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},Ae={[Ud]:s.NEVER,[zd]:s.ALWAYS,[Nd]:s.LESS,[lu]:s.LEQUAL,[Fd]:s.EQUAL,[Bd]:s.GEQUAL,[kd]:s.GREATER,[Od]:s.NOTEQUAL};function Ge(C,b){if(b.type===Pn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===io||b.magFilter===Ks||b.magFilter===Qn||b.minFilter===rn||b.minFilter===io||b.minFilter===Ks||b.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,fe[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,fe[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,fe[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ve[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==Ks&&b.minFilter!==Qn||b.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function tt(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const Q=b.source;let I=d.get(Q);I===void 0&&(I={},d.set(Q,I));const U=j(b);if(U!==C.__cacheKey){I[U]===void 0&&(I[U]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),I[U].usedTimes++;const Y=I[C.__cacheKey];Y!==void 0&&(I[C.__cacheKey].usedTimes--,Y.usedTimes===0&&_(b)),C.__cacheKey=U,C.__webglTexture=I[U].texture}return z}function ft(C,b,z){return Math.floor(Math.floor(C/z)/b)}function Ke(C,b,z,Q){const U=C.updateRanges;if(U.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,z,Q,b.data);else{U.sort((ne,he)=>ne.start-he.start);let Y=0;for(let ne=1;ne<U.length;ne++){const he=U[Y],De=U[ne],be=he.start+he.count,pe=ft(De.start,b.width,4),Fe=ft(he.start,b.width,4);De.start<=be+1&&pe===Fe&&ft(De.start+De.count-1,b.width,4)===pe?he.count=Math.max(he.count,De.start+De.count-he.start):(++Y,U[Y]=De)}U.length=Y+1;const V=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),de=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ne=0,he=U.length;ne<he;ne++){const De=U[ne],be=Math.floor(De.start/4),pe=Math.ceil(De.count/4),Fe=be%b.width,N=Math.floor(be/b.width),re=pe,ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Fe,N,re,ue,z,Q,b.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,V),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function J(C,b,z){let Q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=s.TEXTURE_3D);const I=tt(C,b),U=b.source;t.bindTexture(Q,C.__webglTexture,s.TEXTURE0+z);const Y=n.get(U);if(U.version!==Y.__version||I===!0){t.activeTexture(s.TEXTURE0+z);const V=et.getPrimaries(et.workingColorSpace),ie=b.colorSpace===_i?null:et.getPrimaries(b.colorSpace),de=b.colorSpace===_i||V===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ne=v(b.image,!1,i.maxTextureSize);ne=kt(b,ne);const he=r.convert(b.format,b.colorSpace),De=r.convert(b.type);let be=S(b.internalFormat,he,De,b.colorSpace,b.isVideoTexture);Ge(Q,b);let pe;const Fe=b.mipmaps,N=b.isVideoTexture!==!0,re=Y.__version===void 0||I===!0,ue=U.dataReady,Te=R(b,ne);if(b.isDepthTexture)be=y(b.format===ar,b.type),re&&(N?t.texStorage2D(s.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,be,ne.width,ne.height,0,he,De,null));else if(b.isDataTexture)if(Fe.length>0){N&&re&&t.texStorage2D(s.TEXTURE_2D,Te,be,Fe[0].width,Fe[0].height);for(let ae=0,ee=Fe.length;ae<ee;ae++)pe=Fe[ae],N?ue&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,pe.width,pe.height,he,De,pe.data):t.texImage2D(s.TEXTURE_2D,ae,be,pe.width,pe.height,0,he,De,pe.data);b.generateMipmaps=!1}else N?(re&&t.texStorage2D(s.TEXTURE_2D,Te,be,ne.width,ne.height),ue&&Ke(b,ne,he,De)):t.texImage2D(s.TEXTURE_2D,0,be,ne.width,ne.height,0,he,De,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,be,Fe[0].width,Fe[0].height,ne.depth);for(let ae=0,ee=Fe.length;ae<ee;ae++)if(pe=Fe[ae],b.format!==Mn)if(he!==null)if(N){if(ue)if(b.layerUpdates.size>0){const Pe=eh(pe.width,pe.height,b.format,b.type);for(const Ve of b.layerUpdates){const bt=pe.data.subarray(Ve*Pe/pe.data.BYTES_PER_ELEMENT,(Ve+1)*Pe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ve,pe.width,pe.height,1,he,bt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,ne.depth,he,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,be,pe.width,pe.height,ne.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,ne.depth,he,De,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,be,pe.width,pe.height,ne.depth,0,he,De,pe.data)}else{N&&re&&t.texStorage2D(s.TEXTURE_2D,Te,be,Fe[0].width,Fe[0].height);for(let ae=0,ee=Fe.length;ae<ee;ae++)pe=Fe[ae],b.format!==Mn?he!==null?N?ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,be,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ue&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,pe.width,pe.height,he,De,pe.data):t.texImage2D(s.TEXTURE_2D,ae,be,pe.width,pe.height,0,he,De,pe.data)}else if(b.isDataArrayTexture)if(N){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,be,ne.width,ne.height,ne.depth),ue)if(b.layerUpdates.size>0){const ae=eh(ne.width,ne.height,b.format,b.type);for(const ee of b.layerUpdates){const Pe=ne.data.subarray(ee*ae/ne.data.BYTES_PER_ELEMENT,(ee+1)*ae/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,ne.width,ne.height,1,he,De,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,De,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,he,De,ne.data);else if(b.isData3DTexture)N?(re&&t.texStorage3D(s.TEXTURE_3D,Te,be,ne.width,ne.height,ne.depth),ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,De,ne.data)):t.texImage3D(s.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,he,De,ne.data);else if(b.isFramebufferTexture){if(re)if(N)t.texStorage2D(s.TEXTURE_2D,Te,be,ne.width,ne.height);else{let ae=ne.width,ee=ne.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,be,ae,ee,0,he,De,null),ae>>=1,ee>>=1}}else if(Fe.length>0){if(N&&re){const ae=Et(Fe[0]);t.texStorage2D(s.TEXTURE_2D,Te,be,ae.width,ae.height)}for(let ae=0,ee=Fe.length;ae<ee;ae++)pe=Fe[ae],N?ue&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,he,De,pe):t.texImage2D(s.TEXTURE_2D,ae,be,he,De,pe);b.generateMipmaps=!1}else if(N){if(re){const ae=Et(ne);t.texStorage2D(s.TEXTURE_2D,Te,be,ae.width,ae.height)}ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,De,ne)}else t.texImage2D(s.TEXTURE_2D,0,be,he,De,ne);m(b)&&p(Q),Y.__version=U.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Z(C,b,z){if(b.image.length!==6)return;const Q=tt(C,b),I=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const U=n.get(I);if(I.version!==U.__version||Q===!0){t.activeTexture(s.TEXTURE0+z);const Y=et.getPrimaries(et.workingColorSpace),V=b.colorSpace===_i?null:et.getPrimaries(b.colorSpace),ie=b.colorSpace===_i||Y===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!de&&!ne?he[ee]=v(b.image[ee],!0,i.maxCubemapSize):he[ee]=ne?b.image[ee].image:b.image[ee],he[ee]=kt(b,he[ee]);const De=he[0],be=r.convert(b.format,b.colorSpace),pe=r.convert(b.type),Fe=S(b.internalFormat,be,pe,b.colorSpace),N=b.isVideoTexture!==!0,re=U.__version===void 0||Q===!0,ue=I.dataReady;let Te=R(b,De);Ge(s.TEXTURE_CUBE_MAP,b);let ae;if(de){N&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Fe,De.width,De.height);for(let ee=0;ee<6;ee++){ae=he[ee].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Ve=ae[Pe];b.format!==Mn?be!==null?N?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ve.width,Ve.height,be,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Fe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ve.width,Ve.height,be,pe,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Fe,Ve.width,Ve.height,0,be,pe,Ve.data)}}}else{if(ae=b.mipmaps,N&&re){ae.length>0&&Te++;const ee=Et(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ne){N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,be,pe,he[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,he[ee].width,he[ee].height,0,be,pe,he[ee].data);for(let Pe=0;Pe<ae.length;Pe++){const bt=ae[Pe].image[ee].image;N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,bt.width,bt.height,be,pe,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Fe,bt.width,bt.height,0,be,pe,bt.data)}}else{N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be,pe,he[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,be,pe,he[ee]);for(let Pe=0;Pe<ae.length;Pe++){const Ve=ae[Pe];N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,be,pe,Ve.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Fe,be,pe,Ve.image[ee])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),U.__version=I.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ye(C,b,z,Q,I,U){const Y=r.convert(z.format,z.colorSpace),V=r.convert(z.type),ie=S(z.internalFormat,Y,V,z.colorSpace),de=n.get(b),ne=n.get(z);if(ne.__renderTarget=b,!de.__hasExternalTextures){const he=Math.max(1,b.width>>U),De=Math.max(1,b.height>>U);I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?t.texImage3D(I,U,ie,he,De,b.depth,0,Y,V,null):t.texImage2D(I,U,ie,he,De,0,Y,V,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ee(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,I,ne.__webglTexture,0,xt(b)):(I===s.TEXTURE_2D||I>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,I,ne.__webglTexture,U),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(C,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const Q=b.depthTexture,I=Q&&Q.isDepthTexture?Q.type:null,U=y(b.stencilBuffer,I),Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=xt(b);Ee(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V,U,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,V,U,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,U,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,C)}else{const Q=b.textures;for(let I=0;I<Q.length;I++){const U=Q[I],Y=r.convert(U.format,U.colorSpace),V=r.convert(U.type),ie=S(U.internalFormat,Y,V,U.colorSpace),de=xt(b);z&&Ee(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ie,b.width,b.height):Ee(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ie,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const I=Q.__webglTexture,U=xt(b);if(b.depthTexture.format===or)Ee(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,I,0,U):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,I,0);else if(b.depthTexture.format===ar)Ee(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,I,0,U):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function $e(C){const b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const I=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",I)};Q.addEventListener("dispose",I),b.__depthDisposeCallback=I}b.__boundDepthTexture=Q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Q=C.texture.mipmaps;Q&&Q.length>0?Le(b.__webglFramebuffer[0],C):Le(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=s.createRenderbuffer(),ke(b.__webglDepthbuffer[Q],C,!1);else{const I=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,U=b.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,U),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,U)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ke(b.__webglDepthbuffer,C,!1);else{const I=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,U=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,U),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,U)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(C,b,z){const Q=n.get(C);b!==void 0&&ye(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&$e(C)}function D(C){const b=C.texture,z=n.get(C),Q=n.get(b);C.addEventListener("dispose",A);const I=C.textures,U=C.isWebGLCubeRenderTarget===!0,Y=I.length>1;if(Y||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,o.memory.textures++),U){z.__webglFramebuffer=[];for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[V]=[];for(let ie=0;ie<b.mipmaps.length;ie++)z.__webglFramebuffer[V][ie]=s.createFramebuffer()}else z.__webglFramebuffer[V]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let V=0;V<b.mipmaps.length;V++)z.__webglFramebuffer[V]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Y)for(let V=0,ie=I.length;V<ie;V++){const de=n.get(I[V]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let V=0;V<I.length;V++){const ie=I[V];z.__webglColorRenderbuffer[V]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[V]);const de=r.convert(ie.format,ie.colorSpace),ne=r.convert(ie.type),he=S(ie.internalFormat,de,ne,ie.colorSpace,C.isXRRenderTarget===!0),De=xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,he,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,z.__webglColorRenderbuffer[V])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(U){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,b);for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)ye(z.__webglFramebuffer[V][ie],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+V,ie);else ye(z.__webglFramebuffer[V],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let V=0,ie=I.length;V<ie;V++){const de=I[V],ne=n.get(de);let he=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),Ge(he,de),ye(z.__webglFramebuffer,C,de,s.COLOR_ATTACHMENT0+V,he,0),m(de)&&p(he)}t.unbindTexture()}else{let V=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(V,Q.__webglTexture),Ge(V,b),b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)ye(z.__webglFramebuffer[ie],C,b,s.COLOR_ATTACHMENT0,V,ie);else ye(z.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,V,0);m(b)&&p(V),t.unbindTexture()}C.depthBuffer&&$e(C)}function _t(C){const b=C.textures;for(let z=0,Q=b.length;z<Q;z++){const I=b[z];if(m(I)){const U=M(C),Y=n.get(I).__webglTexture;t.bindTexture(U,Y),p(U),t.unbindTexture()}}}const He=[],Oe=[];function we(C){if(C.samples>0){if(Ee(C)===!1){const b=C.textures,z=C.width,Q=C.height;let I=s.COLOR_BUFFER_BIT;const U=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=n.get(C),V=b.length>1;if(V)for(let de=0;de<b.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer);const ie=C.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Y.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let de=0;de<b.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(I|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(I|=s.STENCIL_BUFFER_BIT)),V){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const ne=n.get(b[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,z,Q,0,0,z,Q,I,s.NEAREST),l===!0&&(He.length=0,Oe.length=0,He.push(s.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push(U),Oe.push(U),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),V)for(let de=0;de<b.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const ne=n.get(b[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function xt(C){return Math.min(i.maxSamples,C.samples)}function Ee(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qe(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function kt(C,b){const z=C.colorSpace,Q=C.format,I=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Kt&&z!==_i&&(et.getTransfer(z)===ct?(Q!==Mn||I!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ee}function u_(s,e){function t(n,i=_i){let r;const o=et.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===Tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return s.BYTE;if(n===eu)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===ni)return s.HALF_FLOAT;if(n===iu)return s.ALPHA;if(n===su)return s.RGB;if(n===Mn)return s.RGBA;if(n===or)return s.DEPTH_COMPONENT;if(n===ar)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===Al)return s.RED_INTEGER;if(n===ru)return s.RG;if(n===Rl)return s.RG_INTEGER;if(n===Cl)return s.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Oa||n===Ba||n===za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ll||n===cl||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Su(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m_ extends As{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new p_,p={},M=t.getContextAttributes();let S=null,y=null;const R=[],T=[],A=new oe;let P=null;const _=new nn;_.viewport=new ot;const x=new nn;x.viewport=new ot;const L=[_,x],F=new wp;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=R[J];return Z===void 0&&(Z=new Ko,R[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=R[J];return Z===void 0&&(Z=new Ko,R[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=R[J];return Z===void 0&&(Z=new Ko,R[J]=Z),Z.getHandSpace()};function K(J){const Z=T.indexOf(J.inputSource);if(Z===-1)return;const ye=R[Z];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||o),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",te);for(let J=0;J<R.length;J++){const Z=T[J];Z!==null&&(T[J]=null,R[J].disconnect(Z))}B=null,j=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(S),f=null,d=null,u=null,i=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",$),i.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Le=null;M.depth&&(Le=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?ar:or,ke=M.stencil?rr:Hi);const $e={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:Mn,type:Un,depthTexture:new Mu(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(J){for(let Z=0;Z<J.removed.length;Z++){const ye=J.removed[Z],ke=T.indexOf(ye);ke>=0&&(T[ke]=null,R[ke].disconnect(ye))}for(let Z=0;Z<J.added.length;Z++){const ye=J.added[Z];let ke=T.indexOf(ye);if(ke===-1){for(let $e=0;$e<R.length;$e++)if($e>=T.length){T.push(ye),ke=$e;break}else if(T[$e]===null){T[$e]=ye,ke=$e;break}if(ke===-1)break}const Le=R[ke];Le&&Le.connect(ye)}}const q=new E,fe=new E;function ve(J,Z,ye){q.setFromMatrixPosition(Z.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const ke=q.distanceTo(fe),Le=Z.projectionMatrix.elements,$e=ye.projectionMatrix.elements,Ft=Le[14]/(Le[10]-1),D=Le[14]/(Le[10]+1),_t=(Le[9]+1)/Le[5],He=(Le[9]-1)/Le[5],Oe=(Le[8]-1)/Le[0],we=($e[8]+1)/$e[0],xt=Ft*Oe,Ee=Ft*we,qe=ke/(-Oe+we),kt=qe*-Oe;if(Z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Et=Ft+qe,C=D+qe,b=xt-kt,z=Ee+(ke-kt),Q=_t*D/C*Et,I=He*D/C*Et;J.projectionMatrix.makePerspective(b,z,Q,I,Et,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ae(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let Z=J.near,ye=J.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),F.near=x.near=_.near=Z,F.far=x.far=_.far=ye,(B!==F.near||j!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,j=F.far),F.layers.mask=J.layers.mask|6,_.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;const ke=J.parent,Le=F.cameras;Ae(F,ke);for(let $e=0;$e<Le.length;$e++)Ae(Le[$e],ke);Le.length===2?ve(F,_,x):F.projectionMatrix.copy(_.projectionMatrix),Ge(J,F,ke)};function Ge(J,Z,ye){ye===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let tt=null;function ft(J,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let D=0;D<ye.length;D++){const _t=ye[D];let He=null;if(f!==null)He=f.getViewport(_t);else{const we=u.getViewSubImage(d,_t);He=we.viewport,D===0&&(e.setRenderTargetTextures(y,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(y))}let Oe=L[D];Oe===void 0&&(Oe=new nn,Oe.layers.enable(D),Oe.viewport=new ot,L[D]=Oe),Oe.matrix.fromArray(_t.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(_t.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(He.x,He.y,He.width,He.height),D===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(Oe)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(ye[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(Le&&Le.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ye.length;D++){const _t=ye[D].camera;if(_t){let He=p[_t];He||(He=new Su,p[_t]=He);const Oe=u.getCameraImage(_t);He.sourceTexture=Oe}}}}for(let ye=0;ye<R.length;ye++){const ke=T[ye],Le=R[ye];ke!==null&&Le!==void 0&&Le.update(ke,Z,c||o)}tt&&tt(J,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ke=new Cu;Ke.setAnimationLoop(ft),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const Li=new Tn,g_=new Xe;function v_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,Li.copy(y),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(Li)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function __(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(M,R);const T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const S=u();M.__bindingPointIndex=S;const y=s.createBuffer(),R=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],y=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,A=y.length;T<A;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let _=0,x=P.length;_<x;_++){const L=P[_];if(f(L,T,_,R)===!0){const F=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let K=0;K<B.length;K++){const $=B[K],te=v($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,F+j,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,j),j+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,y,R){const T=M.value,A=S+"_"+y;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){const S=M.uniforms;let y=0;const R=16;for(let A=0,P=S.length;A<P;A++){const _=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,L=_.length;x<L;x++){const F=_[x],B=Array.isArray(F.value)?F.value:[F.value];for(let j=0,K=B.length;j<K;j++){const $=B[j],te=v($),q=y%R,fe=q%te.boundary,ve=q+fe;y+=fe,ve!==0&&R-ve<te.storage&&(y+=R-ve),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=te.storage}}}const T=y%R;return T>0&&(y+=R-T),M.__size=y,M.__cache={},this}function v(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class x_{constructor(e={}){const{canvas:t=rf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=vt;let T=0,A=0,P=null,_=-1,x=null;const L=new ot,F=new ot;let B=null;const j=new xe(0);let K=0,$=t.width,te=t.height,q=1,fe=null,ve=null;const Ae=new ot(0,0,$,te),Ge=new ot(0,0,$,te);let tt=!1;const ft=new Nl;let Ke=!1,J=!1;const Z=new Xe,ye=new E,ke=new ot,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ft(){return P===null?q:1}let D=n;function _t(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const k="webgl2";if(D=_t(k,w),D===null)throw _t(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let He,Oe,we,xt,Ee,qe,kt,Et,C,b,z,Q,I,U,Y,V,ie,de,ne,he,De,be,pe,Fe;function N(){He=new C0(D),He.init(),be=new u_(D,He),Oe=new M0(D,He,e,be),we=new c_(D,He),Oe.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),xt=new D0(D),Ee=new $v,qe=new h_(D,He,we,Ee,Oe,be,xt),kt=new T0(y),Et=new R0(y),C=new Op(D),pe=new y0(D,C),b=new P0(D,C,xt,pe),z=new U0(D,b,C,xt),ne=new I0(D,Oe,qe),V=new S0(Ee),Q=new Kv(y,kt,Et,He,Oe,pe,V),I=new v_(y,Ee),U=new Jv,Y=new s_(He),de=new x0(y,kt,Et,we,z,f,l),ie=new a_(y,z,Oe),Fe=new __(D,xt,Oe,we),he=new b0(D,He,xt),De=new L0(D,He,xt),xt.programs=Q.programs,y.capabilities=Oe,y.extensions=He,y.properties=Ee,y.renderLists=U,y.shadowMap=ie,y.state=we,y.info=xt}N();const re=new m_(y,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize($,te,!1))},this.getSize=function(w){return w.set($,te)},this.setSize=function(w,k,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,te=k,t.width=Math.floor(w*q),t.height=Math.floor(k*q),W===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set($*q,te*q).floor()},this.setDrawingBufferSize=function(w,k,W){$=w,te=k,q=W,t.width=Math.floor(w*W),t.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,k,W,X){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,k,W,X),we.viewport(L.copy(Ae).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Ge)},this.setScissor=function(w,k,W,X){w.isVector4?Ge.set(w.x,w.y,w.z,w.w):Ge.set(w,k,W,X),we.scissor(F.copy(Ge).multiplyScalar(q).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(w){we.setScissorTest(tt=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,W=!0){let X=0;if(w){let O=!1;if(P!==null){const le=P.texture.format;O=le===Cl||le===Rl||le===Al}if(O){const le=P.texture.type,ge=le===Un||le===Hi||le===sr||le===rr||le===Tl||le===wl,Re=de.getClearColor(),Me=de.getClearAlpha(),Be=Re.r,ze=Re.g,Ue=Re.b;ge?(g[0]=Be,g[1]=ze,g[2]=Ue,g[3]=Me,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Be,v[1]=ze,v[2]=Ue,v[3]=Me,D.clearBufferiv(D.COLOR,0,v))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),U.dispose(),Y.dispose(),Ee.dispose(),kt.dispose(),Et.dispose(),z.dispose(),pe.dispose(),Fe.dispose(),Q.dispose(),re.dispose(),re.removeEventListener("sessionstart",On),re.removeEventListener("sessionend",Jl),Ti.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=xt.autoReset,k=ie.enabled,W=ie.autoUpdate,X=ie.needsUpdate,O=ie.type;N(),xt.autoReset=w,ie.enabled=k,ie.autoUpdate=W,ie.needsUpdate=X,ie.type=O}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ee(w){const k=w.target;k.removeEventListener("dispose",ee),Pe(k)}function Pe(w){Ve(w),Ee.remove(w)}function Ve(w){const k=Ee.get(w).programs;k!==void 0&&(k.forEach(function(W){Q.releaseProgram(W)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,X,O,le){k===null&&(k=Le);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Re=ed(w,k,W,X,O);we.setMaterial(X,ge);let Me=W.index,Be=1;if(X.wireframe===!0){if(Me=b.getWireframeAttribute(W),Me===void 0)return;Be=2}const ze=W.drawRange,Ue=W.attributes.position;let Qe=ze.start*Be,pt=(ze.start+ze.count)*Be;le!==null&&(Qe=Math.max(Qe,le.start*Be),pt=Math.min(pt,(le.start+le.count)*Be)),Me!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Me.count)):Ue!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Ue.count));const Lt=pt-Qe;if(Lt<0||Lt===1/0)return;pe.setup(O,X,Re,W,Me);let St,yt=he;if(Me!==null&&(St=C.get(Me),yt=De,yt.setIndex(St)),O.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Ft()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(O.isLine){let Ne=X.linewidth;Ne===void 0&&(Ne=1),we.setLineWidth(Ne*Ft()),O.isLineSegments?yt.setMode(D.LINES):O.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else O.isPoints?yt.setMode(D.POINTS):O.isSprite&&yt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))yt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,At=O._multiDrawCounts,nt=O._multiDrawCount,hn=Me?C.get(Me).bytesPerElement:1,Vi=Ee.get(X).currentProgram.getUniforms();for(let un=0;un<nt;un++)Vi.setValue(D,"_gl_DrawID",un),yt.render(Ne[un]/hn,At[un])}else if(O.isInstancedMesh)yt.renderInstances(Qe,Lt,O.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,At=Math.min(W.instanceCount,Ne);yt.renderInstances(Qe,Lt,At)}else yt.render(Qe,Lt)};function bt(w,k,W){w.transparent===!0&&w.side===Xt&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,xr(w,k,W),w.side=oi,w.needsUpdate=!0,xr(w,k,W),w.side=Xt):xr(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),p=Y.get(W),p.init(k),S.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Re=le[ge];bt(Re,W,O),X.add(Re)}else bt(le,W,O),X.add(le)}),p=S.pop(),X},this.compileAsync=function(w,k,W=null){const X=this.compile(w,k,W);return new Promise(O=>{function le(){if(X.forEach(function(ge){Ee.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){O(w);return}setTimeout(le,10)}He.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let at=null;function Xn(w){at&&at(w)}function On(){Ti.stop()}function Jl(){Ti.start()}const Ti=new Cu;Ti.setAnimationLoop(Xn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){at=w,re.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},re.addEventListener("sessionstart",On),re.addEventListener("sessionend",Jl),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,k,P),p=Y.get(w,S.length),p.init(k),S.push(p),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ft.setFromProjectionMatrix(Z,Vn,k.reversedDepth),J=this.localClippingEnabled,Ke=V.init(this.clippingPlanes,J),m=U.get(w,M.length),m.init(),M.push(m),re.enabled===!0&&re.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&Eo(le,k,-1/0,y.sortObjects)}Eo(w,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,ve),$e=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,$e&&de.addToRenderList(m,w),this.info.render.frame++,Ke===!0&&V.beginShadows();const W=p.state.shadowsArray;ie.render(W,w,k),Ke===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),k.isArrayCamera){const le=k.cameras;if(O.length>0)for(let ge=0,Re=le.length;ge<Re;ge++){const Me=le[ge];ec(X,O,w,Me)}$e&&de.render(w);for(let ge=0,Re=le.length;ge<Re;ge++){const Me=le[ge];Ql(m,w,Me,Me.viewport)}}else O.length>0&&ec(X,O,w,k),$e&&de.render(w),Ql(m,w,k);P!==null&&A===0&&(qe.updateMultisampleRenderTarget(P),qe.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,k),pe.resetDefaultState(),_=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],Ke===!0&&V.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Eo(w,k,W,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ft.intersectsSprite(w)){X&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);const ge=z.update(w),Re=w.material;Re.visible&&m.push(w,ge,Re,W,ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ft.intersectsObject(w))){const ge=z.update(w),Re=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ke.copy(ge.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(Re)){const Me=ge.groups;for(let Be=0,ze=Me.length;Be<ze;Be++){const Ue=Me[Be],Qe=Re[Ue.materialIndex];Qe&&Qe.visible&&m.push(w,ge,Qe,W,ke.z,Ue)}}else Re.visible&&m.push(w,ge,Re,W,ke.z,null)}}const le=w.children;for(let ge=0,Re=le.length;ge<Re;ge++)Eo(le[ge],k,W,X)}function Ql(w,k,W,X){const O=w.opaque,le=w.transmissive,ge=w.transparent;p.setupLightsView(W),Ke===!0&&V.setGlobalState(y.clippingPlanes,W),X&&we.viewport(L.copy(X)),O.length>0&&_r(O,k,W),le.length>0&&_r(le,k,W),ge.length>0&&_r(ge,k,W),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ec(w,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Sn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ni:Un,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const le=p.state.transmissionRenderTarget[X.id],ge=X.viewport||L;le.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);const Re=y.getRenderTarget(),Me=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(j),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),$e&&de.render(W);const ze=y.toneMapping;y.toneMapping=bi;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Ke===!0&&V.setGlobalState(y.clippingPlanes,X),_r(w,W,X),qe.updateMultisampleRenderTarget(le),qe.updateRenderTargetMipmap(le),He.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let pt=0,Lt=k.length;pt<Lt;pt++){const St=k[pt],yt=St.object,Ne=St.geometry,At=St.material,nt=St.group;if(At.side===Xt&&yt.layers.test(X.layers)){const hn=At.side;At.side=jt,At.needsUpdate=!0,tc(yt,W,X,Ne,At,nt),At.side=hn,At.needsUpdate=!0,Qe=!0}}Qe===!0&&(qe.updateMultisampleRenderTarget(le),qe.updateRenderTargetMipmap(le))}y.setRenderTarget(Re,Me,Be),y.setClearColor(j,K),Ue!==void 0&&(X.viewport=Ue),y.toneMapping=ze}function _r(w,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let O=0,le=w.length;O<le;O++){const ge=w[O],Re=ge.object,Me=ge.geometry,Be=ge.group;let ze=ge.material;ze.allowOverride===!0&&X!==null&&(ze=X),Re.layers.test(W.layers)&&tc(Re,k,W,Me,ze,Be)}}function tc(w,k,W,X,O,le){w.onBeforeRender(y,k,W,X,O,le),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,k,W,X,w,le),O.transparent===!0&&O.side===Xt&&O.forceSinglePass===!1?(O.side=jt,O.needsUpdate=!0,y.renderBufferDirect(W,k,X,O,w,le),O.side=oi,O.needsUpdate=!0,y.renderBufferDirect(W,k,X,O,w,le),O.side=Xt):y.renderBufferDirect(W,k,X,O,w,le),w.onAfterRender(y,k,W,X,O,le)}function xr(w,k,W){k.isScene!==!0&&(k=Le);const X=Ee.get(w),O=p.state.lights,le=p.state.shadowsArray,ge=O.state.version,Re=Q.getParameters(w,O.state,le,k,W),Me=Q.getProgramCacheKey(Re);let Be=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?Et:kt).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ee),Be=new Map,X.programs=Be);let ze=Be.get(Me);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===ge)return ic(w,Re),ze}else Re.uniforms=Q.getUniforms(w),w.onBeforeCompile(Re,y),ze=Q.acquireProgram(Re,Me),Be.set(Me,ze),X.uniforms=Re.uniforms;const Ue=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=V.uniform),ic(w,Re),X.needsLights=nd(w),X.lightsStateVersion=ge,X.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function nc(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=co.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function ic(w,k){const W=Ee.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function ed(w,k,W,X,O){k.isScene!==!0&&(k=Le),qe.resetTextureUnits();const le=k.fog,ge=X.isMeshStandardMaterial?k.environment:null,Re=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kt,Me=(X.isMeshStandardMaterial?Et:kt).get(X.envMap||ge),Be=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let Lt=bi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=St!==void 0?St.length:0,Ne=Ee.get(X),At=p.state.lights;if(Ke===!0&&(J===!0||w!==x)){const $t=w===x&&X.id===_;V.setState(X,w,$t)}let nt=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==At.state.version||Ne.outputColorSpace!==Re||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Me||X.fog===!0&&Ne.fog!==le||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==V.numPlanes||Ne.numIntersection!==V.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ze||Ne.morphTargets!==Ue||Ne.morphNormals!==Qe||Ne.morphColors!==pt||Ne.toneMapping!==Lt||Ne.morphTargetsCount!==yt)&&(nt=!0):(nt=!0,Ne.__version=X.version);let hn=Ne.currentProgram;nt===!0&&(hn=xr(X,k,O));let Vi=!1,un=!1,Is=!1;const Rt=hn.getUniforms(),gn=Ne.uniforms;if(we.useProgram(hn.program)&&(Vi=!0,un=!0,Is=!0),X.id!==_&&(_=X.id,un=!0),Vi||x!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Rt.setValue(D,"projectionMatrix",w.projectionMatrix),Rt.setValue(D,"viewMatrix",w.matrixWorldInverse);const cn=Rt.map.cameraPosition;cn!==void 0&&cn.setValue(D,ye.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,un=!0,Is=!0)}if(O.isSkinnedMesh){Rt.setOptional(D,O,"bindMatrix"),Rt.setOptional(D,O,"bindMatrixInverse");const $t=O.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Rt.setValue(D,"boneTexture",$t.boneTexture,qe))}O.isBatchedMesh&&(Rt.setOptional(D,O,"batchingTexture"),Rt.setValue(D,"batchingTexture",O._matricesTexture,qe),Rt.setOptional(D,O,"batchingIdTexture"),Rt.setValue(D,"batchingIdTexture",O._indirectTexture,qe),Rt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",O._colorsTexture,qe));const vn=W.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ne.update(O,W,hn),(un||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,Rt.setValue(D,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(gn.envMap.value=Me,gn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),un&&(Rt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&td(gn,Is),le&&X.fog===!0&&I.refreshFogUniforms(gn,le),I.refreshMaterialUniforms(gn,X,q,te,p.state.transmissionRenderTarget[w.id]),co.upload(D,nc(Ne),gn,qe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(co.upload(D,nc(Ne),gn,qe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(D,"center",O.center),Rt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Rt.setValue(D,"normalMatrix",O.normalMatrix),Rt.setValue(D,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let cn=0,Ao=$t.length;cn<Ao;cn++){const wi=$t[cn];Fe.update(wi,hn),Fe.bind(wi,hn)}}return hn}function td(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function nd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,W){const X=Ee.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ee.get(w.texture).__webglTexture=k,Ee.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const W=Ee.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const id=D.createFramebuffer();this.setRenderTarget=function(w,k=0,W=0){P=w,T=k,A=W;let X=!0,O=null,le=!1,ge=!1;if(w){const Me=Ee.get(w);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)qe.setupRenderTarget(w);else if(Me.__hasExternalTextures)qe.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(Me.__boundDepthTexture!==Ue){if(Ue!==null&&Ee.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const ze=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?O=ze[k][W]:O=ze[k],le=!0):w.samples>0&&qe.useMultisampledRTT(w)===!1?O=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[W]:O=ze,L.copy(w.viewport),F.copy(w.scissor),B=w.scissorTest}else L.copy(Ae).multiplyScalar(q).floor(),F.copy(Ge).multiplyScalar(q).floor(),B=tt;if(W!==0&&(O=id),we.bindFramebuffer(D.FRAMEBUFFER,O)&&X&&we.drawBuffers(w,O),we.viewport(L),we.scissor(F),we.setScissorTest(B),le){const Me=Ee.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,W)}else if(ge){const Me=k;for(let Be=0;Be<w.textures.length;Be++){const ze=Ee.get(w.textures[Be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Be,ze.__webglTexture,W,Me)}}else if(w!==null&&W!==0){const Me=Ee.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,W)}_=-1},this.readRenderTargetPixels=function(w,k,W,X,O,le,ge,Re=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){we.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Be=w.textures[Re],ze=Be.format,Ue=Be.type;if(!Oe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&W>=0&&W<=w.height-O&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(k,W,X,O,be.convert(ze),be.convert(Ue),le))}finally{const Be=P!==null?Ee.get(P).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,X,O,le,ge,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me)if(k>=0&&k<=w.width-X&&W>=0&&W<=w.height-O){we.bindFramebuffer(D.FRAMEBUFFER,Me);const Be=w.textures[Re],ze=Be.format,Ue=Be.type;if(!Oe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(k,W,X,O,be.convert(ze),be.convert(Ue),0);const pt=P!==null?Ee.get(P).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,pt);const Lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await of(D,Lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(Qe),D.deleteSync(Lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,W=0){const X=Math.pow(2,-W),O=Math.floor(w.image.width*X),le=Math.floor(w.image.height*X),ge=k!==null?k.x:0,Re=k!==null?k.y:0;qe.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ge,Re,O,le),we.unbindTexture()};const sd=D.createFramebuffer(),rd=D.createFramebuffer();this.copyTextureToTexture=function(w,k,W=null,X=null,O=0,le=null){le===null&&(O!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=O,O=0):le=0);let ge,Re,Me,Be,ze,Ue,Qe,pt,Lt;const St=w.isCompressedTexture?w.mipmaps[le]:w.image;if(W!==null)ge=W.max.x-W.min.x,Re=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,ze=W.min.y,Ue=W.isBox3?W.min.z:0;else{const vn=Math.pow(2,-O);ge=Math.floor(St.width*vn),Re=Math.floor(St.height*vn),w.isDataArrayTexture?Me=St.depth:w.isData3DTexture?Me=Math.floor(St.depth*vn):Me=1,Be=0,ze=0,Ue=0}X!==null?(Qe=X.x,pt=X.y,Lt=X.z):(Qe=0,pt=0,Lt=0);const yt=be.convert(k.format),Ne=be.convert(k.type);let At;k.isData3DTexture?(qe.setTexture3D(k,0),At=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(qe.setTexture2DArray(k,0),At=D.TEXTURE_2D_ARRAY):(qe.setTexture2D(k,0),At=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vi=D.getParameter(D.UNPACK_SKIP_PIXELS),un=D.getParameter(D.UNPACK_SKIP_ROWS),Is=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const Rt=w.isDataArrayTexture||w.isData3DTexture,gn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const vn=Ee.get(w),$t=Ee.get(k),cn=Ee.get(vn.__renderTarget),Ao=Ee.get($t.__renderTarget);we.bindFramebuffer(D.READ_FRAMEBUFFER,cn.__webglFramebuffer),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let wi=0;wi<Me;wi++)Rt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,O,Ue+wi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.get(k).__webglTexture,le,Lt+wi)),D.blitFramebuffer(Be,ze,ge,Re,Qe,pt,ge,Re,D.DEPTH_BUFFER_BIT,D.NEAREST);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||Ee.has(w)){const vn=Ee.get(w),$t=Ee.get(k);we.bindFramebuffer(D.READ_FRAMEBUFFER,sd),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,rd);for(let cn=0;cn<Me;cn++)Rt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,O,Ue+cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,O),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,le,Lt+cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,le),O!==0?D.blitFramebuffer(Be,ze,ge,Re,Qe,pt,ge,Re,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(At,le,Qe,pt,Lt+cn,Be,ze,ge,Re):D.copyTexSubImage2D(At,le,Qe,pt,Be,ze,ge,Re);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(At,le,Qe,pt,Lt,ge,Re,Me,yt,Ne,St.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(At,le,Qe,pt,Lt,ge,Re,Me,yt,St.data):D.texSubImage3D(At,le,Qe,pt,Lt,ge,Re,Me,yt,Ne,St):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,Qe,pt,ge,Re,yt,Ne,St.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,Qe,pt,St.width,St.height,yt,St.data):D.texSubImage2D(D.TEXTURE_2D,le,Qe,pt,ge,Re,yt,Ne,St);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vi),D.pixelStorei(D.UNPACK_SKIP_ROWS,un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Is),le===0&&k.generateMipmaps&&D.generateMipmap(At),we.unbindTexture()},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?qe.setTextureCube(w,0):w.isData3DTexture?qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qe.setTexture2DArray(w,0):qe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,we.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const y_={flight:{maxSpeed:9.5,accelResponse:2.8,brakeResponse:3.4,maxClimbSpeed:3.2,climbResponse:2.8,yawSpeed:1.5,yawResponse:6,maxTilt:.34,tiltResponse:5.5,holdStrength:4.5,positionHold:2.4,positionHoldMaxSpeed:3,minAltitude:.35,maxAltitude:45,radius:.85,bounce:.35},boundary:{warnDistance:16,brakeDistance:9,pushStrength:2.6,pushMaxSpeed:6},mass:{empty:9.5,maxTakeoff:105,speedPenaltyPerKg:.0045,responsePenaltyPerKg:.0048,climbPenaltyPerKg:.0052},battery:{capacity:240,idleDrain:1,manoeuvreDrain:.85,payloadDrain:.022,warnLevel:.2,criticalLevel:.08,padChargeRate:22,adRefill:.35},foam:{tank:180,drainRate:18,padRefillRate:30,muzzleSpeed:26,gravity:11,range:22,splashRadius:2.6,dps:70,particleRate:90,particleLife:1.1},fire:{health:100,heatRadius:6.5,heatDps:7,thermalHeight:18,thermalRadius:6.5,thermalForce:13,turbulence:5.5,regen:3.5},smoke:{fogDensityMax:.055,fogDensityMin:.0075,fogResponse:.9,particlesPerFire:46,riseSpeed:3.2},winch:{zoneRadius:3.2,maxHoverHeight:13,minHoverHeight:2.5,holdTime:3,maxDriftSpeed:2.4,decayRate:.55,cableSpeed:5.5},hull:{max:100,safeImpactSpeed:3,impactDamagePerSpeed:3.2},wind:{strength:.55,direction:2.35,gustAmplitude:.9,gustFrequency:.19},camera:{distance:5.4,height:1.75,lookAheadY:.55,followResponse:7.5,rotateResponse:9,fov:62,fovSpeedBoost:9,minGroundClearance:.55,pitchMin:-.55,pitchMax:.85},input:{joystickDeadzone:.12,joystickRadius:62,swipeSensitivity:.0045,mouseSensitivity:.002,swipeDamping:6.5},economy:{perSurvivor:300,perFire:80,flawlessBonus:120,reputationPerSurvivor:10},sim:{fixedStep:1/120,maxSubSteps:6,bulletTimeScale:.5,timeScaleResponse:4}};function Uu(){return JSON.parse(JSON.stringify(y_))}const se=Uu();function b_(){const s=Uu();for(const e of Object.keys(s))Object.assign(se[e],s[e])}const M_=[{group:"Полёт",path:"flight.maxSpeed",label:"Макс. скорость",min:4,max:30,step:.5},{group:"Полёт",path:"flight.accelResponse",label:"Отклик разгона",min:.5,max:10,step:.1},{group:"Полёт",path:"flight.brakeResponse",label:"Торможение",min:.2,max:8,step:.1},{group:"Полёт",path:"flight.maxClimbSpeed",label:"Скороподъёмность",min:1,max:15,step:.5},{group:"Полёт",path:"flight.yawSpeed",label:"Скорость рыскания",min:.4,max:5,step:.1},{group:"Полёт",path:"flight.maxTilt",label:"Наклон корпуса",min:0,max:1,step:.02},{group:"Полёт",path:"flight.tiltResponse",label:"Отклик наклона",min:1,max:15,step:.5},{group:"Вес",path:"mass.speedPenaltyPerKg",label:"Штраф скорости /кг",min:0,max:.02,step:5e-4},{group:"Вес",path:"mass.responsePenaltyPerKg",label:"Штраф отклика /кг",min:0,max:.02,step:5e-4},{group:"Батарея",path:"battery.capacity",label:"Ёмкость",min:60,max:600,step:10},{group:"Батарея",path:"battery.idleDrain",label:"Расход на висении",min:0,max:5,step:.1},{group:"Батарея",path:"battery.manoeuvreDrain",label:"Расход на манёврах",min:0,max:5,step:.05},{group:"Батарея",path:"battery.payloadDrain",label:"Расход на груз /кг",min:0,max:.5,step:.005},{group:"Полёт",path:"flight.positionHold",label:"Удержание точки",min:0,max:6,step:.1},{group:"Полёт",path:"flight.positionHoldMaxSpeed",label:"Скорость возврата",min:0,max:8,step:.1},{group:"Граница",path:"boundary.warnDistance",label:"Дистанция барьера",min:4,max:40,step:1},{group:"Граница",path:"boundary.brakeDistance",label:"Полоса торможения",min:2,max:30,step:.5},{group:"Граница",path:"boundary.pushStrength",label:"Сила возврата",min:.5,max:8,step:.1},{group:"Ветер",path:"wind.strength",label:"Сила ветра",min:0,max:8,step:.05},{group:"Ветер",path:"wind.gustAmplitude",label:"Порывы",min:0,max:8,step:.1},{group:"Ветер",path:"fire.thermalForce",label:"Восходящий поток",min:0,max:40,step:.5},{group:"Ветер",path:"fire.turbulence",label:"Турбулентность",min:0,max:20,step:.25},{group:"Пена",path:"foam.muzzleSpeed",label:"Скорость струи",min:8,max:60,step:1},{group:"Пена",path:"foam.gravity",label:"Гравитация струи",min:0,max:25,step:.5},{group:"Пена",path:"foam.dps",label:"Урон огню",min:5,max:250,step:5},{group:"Пена",path:"foam.drainRate",label:"Расход бака",min:2,max:80,step:1},{group:"Пена",path:"foam.tank",label:"Объём бака",min:40,max:400,step:10},{group:"Пена",path:"foam.splashRadius",label:"Радиус накрытия",min:.5,max:8,step:.1},{group:"Трос",path:"winch.zoneRadius",label:"Радиус зоны",min:1,max:8,step:.1},{group:"Трос",path:"winch.holdTime",label:"Время удержания",min:.5,max:10,step:.25},{group:"Трос",path:"winch.maxDriftSpeed",label:"Допустимый снос",min:.3,max:8,step:.1},{group:"Камера",path:"camera.distance",label:"Дистанция",min:3,max:18,step:.25},{group:"Камера",path:"camera.height",label:"Высота",min:.5,max:10,step:.1},{group:"Камера",path:"camera.fov",label:"FOV",min:40,max:100,step:1},{group:"Камера",path:"camera.followResponse",label:"Плавность",min:1,max:20,step:.5},{group:"Ввод",path:"input.swipeSensitivity",label:"Свайп",min:.001,max:.02,step:5e-4},{group:"Ввод",path:"input.mouseSensitivity",label:"Мышь",min:5e-4,max:.01,step:2e-4},{group:"Ввод",path:"input.joystickDeadzone",label:"Мёртвая зона",min:0,max:.4,step:.01},{group:"Прочность",path:"hull.safeImpactSpeed",label:"Безопасный удар",min:0,max:12,step:.2},{group:"Прочность",path:"hull.impactDamagePerSpeed",label:"Урон за м/с",min:0,max:30,step:.5},{group:"Прочность",path:"fire.heatDps",label:"Тепловой урон",min:0,max:40,step:.5}];function wh(s){const[e,t]=s.split(".");return se[e][t]}function S_(s,e){const[t,n]=s.split(".");se[t][n]=e}class T_{handlers=new Map;on(e,t){let n=this.handlers.get(e);return n||(n=new Set,this.handlers.set(e,n)),n.add(t),()=>this.off(e,t)}once(e,t){const n=this.on(e,i=>{n(),t(i)});return n}off(e,t){this.handlers.get(e)?.delete(t)}emit(e,...t){const n=this.handlers.get(e);if(n)for(const i of[...n])try{i(t[0])}catch(r){console.error(`[EventBus] обработчик "${String(e)}" упал:`,r)}}clear(){this.handlers.clear()}}const gt=new T_,Dt=(s,e,t)=>s<e?e:s>t?t:s,it=s=>Dt(s,0,1),Rn=(s,e,t)=>s+(e-s)*t,w_=s=>{const e=it(s);return e*e*(3-2*e)},lt=(s,e,t,n)=>Rn(s,e,1-Math.exp(-t*n)),vl=(s,e,t,n)=>{let i=E_(s,e);return i*=1-Math.exp(-t*n),s+i},E_=(s,e)=>{let t=(e-s)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t},Se=(s,e)=>s+Math.random()*(e-s),ds=s=>Math.sin(s*1)*.5+Math.sin(s*2.37+1.7)*.3+Math.sin(s*5.11+4.2)*.2,A_=s=>{const e=Math.max(0,Math.floor(s));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},gi={rescue:30,fire:15,damage:30,time:25},R_=1.5,C_=.8,P_=1.6,L_=[["S",93],["A",80],["B",64],["C",45]];function D_(s,e){const t=s.survivorsTotal>0?s.survivorsRescued/s.survivorsTotal:1,n=s.firesTotal>0?s.firesExtinguished/s.firesTotal:1,i=it(1-s.damagePercent/100)**R_,r=e*C_,o=e*P_,a=it((o-s.timeSeconds)/(o-r)),l=[{key:"rescue",earned:t*gi.rescue,max:gi.rescue},{key:"fire",earned:n*gi.fire,max:gi.fire},{key:"damage",earned:i*gi.damage,max:gi.damage},{key:"time",earned:a*gi.time,max:gi.time}],c=Math.round(l.reduce((u,d)=>u+d.earned,0));let h="D";for(const[u,d]of L_)if(c>=d){h=u;break}return t<1&&(h==="S"||h==="A"||h==="B")&&(h="C"),{grade:h,score:c,parts:l}}function Eh(s){return{D:0,C:1,B:2,A:3,S:4}[s]}function I_(s,e){return s&&Eh(s)>=Eh(e)?s:e}const fa="do.save.v1",Nu=1;function Zr(){return{version:Nu,money:0,reputation:0,upgrades:{power:0,payload:0,suppression:0,frame:0},unlocked:[],missions:{},adsWatched:0,tutorialSeen:!1}}class U_{data=Zr();constructor(){this.load()}load(){try{const e=localStorage.getItem(fa);if(!e)return;const t=JSON.parse(e);if(t.version!==Nu){console.warn("[Save] версия профиля устарела, начинаем заново");return}this.data={...Zr(),...t,upgrades:{...Zr().upgrades,...t.upgrades}}}catch(e){console.warn("[Save] не удалось прочитать профиль:",e)}}get(){return this.data}flush(){try{localStorage.setItem(fa,JSON.stringify(this.data))}catch(e){console.warn("[Save] не удалось записать профиль:",e)}}addMoney(e){this.data.money=Math.max(0,Math.round(this.data.money+e)),this.flush()}addReputation(e){this.data.reputation=Math.max(0,Math.round(this.data.reputation+e)),this.flush()}buyUpgrade(e,t){return t>this.data.money?!1:(this.data.money-=t,this.data.upgrades[e]+=1,this.flush(),!0)}unlock(e){this.data.unlocked.includes(e)||(this.data.unlocked.push(e),this.flush())}isUnlocked(e){return this.data.unlocked.includes(e)}recordMission(e,t){const n=this.data.missions[e]??{completed:!1,bestTime:1/0,bestDamage:100,survivorsRescued:0};this.data.missions[e]={completed:n.completed||(t.completed??!1),bestTime:Math.min(n.bestTime,t.bestTime??1/0),bestDamage:Math.min(n.bestDamage,t.bestDamage??100),survivorsRescued:Math.max(n.survivorsRescued,t.survivorsRescued??0),bestGrade:t.bestGrade?I_(n.bestGrade,t.bestGrade):n.bestGrade},this.flush()}markTutorialSeen(){this.data.tutorialSeen=!0,this.flush()}countAd(){this.data.adsWatched+=1,this.flush()}hasProgress(){return this.data.money>0||Object.keys(this.data.missions).length>0}reset(){this.data=Zr(),localStorage.removeItem(fa)}}const en=new U_,Ah={ru:"Русский",en:"English",de:"Deutsch"},N_={"game.title":"DROHNE OPERATOR","game.subtitle":"Служба спасения · Беспилотный отряд","menu.play":"Начать смену","menu.continue":"Продолжить","menu.language":"Язык","menu.reset":"Сбросить прогресс","menu.resetConfirm":"Удалить весь прогресс?","menu.credits":"Вертикальный срез · Миссия 1","menu.hangar":"Ангар","hangar.title":"Ангар","hangar.subtitle":"Стриж-1 · модернизация борта","hangar.back":"Назад","hangar.buy":"Установить","hangar.maxed":"Максимум","hangar.level":"Уровень {level} из {max}","hangar.stock":"Базовая комплектация","hangar.notEnough":"Не хватает средств","hangar.installed":"Модуль установлен","hangar.next":"Следующий уровень","upgrade.power":"Энергосистема","upgrade.power.desc":"Ёмкость аккумулятора и экономайзер под нагрузкой","upgrade.payload":"Грузоподъёмность","upgrade.payload.desc":"Предельная масса и управляемость с грузом","upgrade.suppression":"Модуль пожаротушения","upgrade.suppression.desc":"Объём бака и напор струи пены","upgrade.frame":"Прочность рамы","upgrade.frame.desc":"Запас прочности корпуса и стойкость к ударам","menu.balance":"Бюджет: {money} $","menu.reputation":"Репутация: {rep}","brief.title":"МИССИЯ 01 · ПЕРВОЕ КРЕЩЕНИЕ","brief.location":"Пригород · Склад бытовой техники","brief.summary":"Взрыв аккумуляторов на складе электроники. Здание частично обрушено, внутри остались люди. Провести разведку, снять очаг у ворот и эвакуировать выживших.","brief.drone":"Аппарат: «Стриж-1»","brief.loadout":"Экипировка","brief.battery":"Аккумулятор","brief.foam":"Бак с пеной","brief.winch":"Спасательный трос","brief.start":"ВЫЛЕТ","brief.back":"Назад","hud.battery":"ЗАРЯД","hud.foam":"ПЕНА","hud.hull":"КОРПУС","hud.payload":"ГРУЗ","hud.kg":"кг","hud.altitude":"ВЫС","hud.speed":"СКОР","hud.thermal":"ТЕПЛОВИЗОР","hud.geofence":"ГРАНИЦА ЗОНЫ","hud.geofenceHint":"Вернитесь в зону полётов","hud.foamBtn":"ПЕНА","hud.winchBtn":"ТРОС","hud.objective":"ЗАДАЧА","hud.distance":"{d} м","hud.pause":"Пауза","hud.watchAd":"Реклама: +35% заряда","hud.adUsed":"Уже использовано","hud.rescuing":"ПОДЪЁМ","hud.holdPosition":"УДЕРЖИВАЙ ПОЗИЦИЮ","hud.tooFast":"СЛИШКОМ БЫСТРО","hud.tooHigh":"СЛИШКОМ ВЫСОКО","hud.tooLow":"СЛИШКОМ НИЗКО","hud.leftZone":"ВНЕ ЗОНЫ","pause.title":"ПАУЗА","pause.resume":"Продолжить","pause.restart":"Начать миссию заново","pause.quit":"Выйти в меню","pause.haptics":"Вибрация","pause.voice":"Голос диспетчера","common.on":"вкл","common.off":"выкл","pause.debug":"Панель настройки","obj.takeoff":"Взлететь на высоту 5 м","obj.gate":"Долететь до главных ворот","obj.fire":"Потушить горящую балку","obj.courtyard":"Залететь во внутренний двор","obj.rescue":"Зависнуть над выжившим и сбросить люльку","obj.return":"Доставить выжившего на площадку","result.success":"МИССИЯ ВЫПОЛНЕНА","result.failed":"МИССИЯ ПРОВАЛЕНА","result.rescued":"Спасено","result.fires":"Потушено очагов","result.damage":"Повреждения дрона","result.time":"Время","result.batteryLeft":"Остаток заряда","result.reward":"Бюджет МЧС","result.reputation":"Репутация","result.unlock":"Открыто улучшение: «Усиленный аккумулятор»","result.score":"Оценка вылета: {score} из 100","result.best":"лучший ранг {grade}","result.double":"Реклама: удвоить награду","result.doubled":"Награда удвоена","result.continue":"Продолжить","result.retry":"Повторить","fail.battery":"Заряд аккумулятора исчерпан. Дрон совершил аварийную посадку.","fail.destroyed":"Аппарат получил критические повреждения.","fail.checkpoint":"Запуск резервного борта. Возврат к последней контрольной точке.","rotate.title":"Поверните устройство","rotate.text":"Игра рассчитана на горизонтальную ориентацию экрана.","loading.title":"Подготовка вылета","tut.takeoff":"Удерживай ▲ — набор высоты","tut.takeoffKb":"Space — вверх, Shift — вниз","tut.move":"Левый джойстик — движение, свайп справа — обзор","tut.moveKb":"W A S D — движение, мышь — обзор","tut.joystick":"Тяни джойстик вверх — взлёт","tut.joystickKb":"W A S D — движение, Space / Shift — высота","tut.look":"Свайп справа — поворот камеры","tut.lookKb":"Клик по сцене — захват курсора, мышь — обзор","tut.foam":"Удерживай «ПЕНА» и наводи на огонь","tut.foamKb":"ЛКМ — пена","tut.winch":"Нажми «ТРОС» внутри зелёной зоны","tut.winchKb":"E — трос","tut.thermal":"Кнопка сверху — тепловизор сквозь дым","tut.thermalKb":"F — тепловизор","tut.land":"Снижайся на площадку H","speaker.elena":"Диспетчер Елена","speaker.worker":"Кладовщик","speaker.system":"Система","radio.intro":"Так, новобранец, времени на раскачку нет. На связи координатор Елена. На складе бытовой техники рванули аккумуляторы. Твоя задача — разведка и эвакуация. Запускай движки!","radio.airborne":"Отлично, стабилизаторы работают. Теперь лети к главным воротам склада. Не задевай провода!","radio.beamFalls":"Стоп! Путь перекрыт, высокая температура повредит обшивку.","radio.useFoam":"Используй пожарную пену. Наведи прицел на очаг и открывай клапан!","radio.fireOut":"Чисто! Пролетай внутрь двора. Датчики фиксируют живого человека на крыше пристройки.","radio.smoke":"Дым плотный — переключись на тепловизор, если не видишь цель.","radio.seeTarget":"Вижу цель! Это кладовщик. Из-за дыма он теряет сознание, действуй быстро. Зависни прямо над ним и сбрось люльку!","radio.winchHold":"Держи позицию! Ветер сносит — компенсируй.","radio.pickedUp":"Он на борту. Дрон стал тяжелее, заряд падает быстрее!","radio.workerThanks":"Спасибо, железка! Там внутри, на втором этаже, остался мой начальник! Спасите его!","radio.returnHome":"Но у нас ещё есть время. Быстро доставь этого парня в безопасную зону! Площадка на крыше фургона.","radio.lowBattery":"Заряд на исходе, следи за шкалой.","radio.landed":"Первый пошёл! Отличная работа для новичка. Перезаряжай батарею, бери баки побольше и возвращаемся — начальник склада сам себя не спасёт.","radio.wires":"Аккуратнее с проводами!","radio.impact":"Смотри по сторонам! Раму так не сбережёшь.","radio.heat":"Уходи от огня, обшивка греется!","debug.title":"Настройка ощущений","debug.reset":"Сбросить","debug.close":"Закрыть","debug.fps":"FPS","debug.hint":"F9 — открыть/закрыть"},F_={"game.title":"DROHNE OPERATOR","game.subtitle":"Emergency Service · Unmanned Division","menu.play":"Start shift","menu.continue":"Continue","menu.language":"Language","menu.reset":"Reset progress","menu.resetConfirm":"Delete all progress?","menu.credits":"Vertical slice · Mission 1","menu.hangar":"Hangar","hangar.title":"Hangar","hangar.subtitle":"Swift-1 · airframe upgrades","hangar.back":"Back","hangar.buy":"Install","hangar.maxed":"Maxed out","hangar.level":"Level {level} of {max}","hangar.stock":"Stock configuration","hangar.notEnough":"Not enough funds","hangar.installed":"Module installed","hangar.next":"Next level","upgrade.power":"Power system","upgrade.power.desc":"Battery capacity and draw economy under load","upgrade.payload":"Payload capacity","upgrade.payload.desc":"Take-off mass limit and handling when loaded","upgrade.suppression":"Suppression module","upgrade.suppression.desc":"Tank volume and foam jet power","upgrade.frame":"Frame durability","upgrade.frame.desc":"Hull integrity and impact resistance","menu.balance":"Budget: ${money}","menu.reputation":"Reputation: {rep}","brief.title":"MISSION 01 · BAPTISM BY FIRE","brief.location":"Suburbs · Home appliance warehouse","brief.summary":"Battery explosion at an electronics warehouse. The building has partially collapsed with people still inside. Scout the site, clear the fire at the gates and evacuate survivors.","brief.drone":'Airframe: "Swift-1"',"brief.loadout":"Loadout","brief.battery":"Battery pack","brief.foam":"Foam tank","brief.winch":"Rescue winch","brief.start":"LAUNCH","brief.back":"Back","hud.battery":"POWER","hud.foam":"FOAM","hud.hull":"HULL","hud.payload":"LOAD","hud.kg":"kg","hud.altitude":"ALT","hud.speed":"SPD","hud.thermal":"THERMAL","hud.geofence":"ZONE BOUNDARY","hud.geofenceHint":"Return to the flight zone","hud.foamBtn":"FOAM","hud.winchBtn":"WINCH","hud.objective":"OBJECTIVE","hud.distance":"{d} m","hud.pause":"Pause","hud.watchAd":"Ad: +35% power","hud.adUsed":"Already used","hud.rescuing":"HOISTING","hud.holdPosition":"HOLD POSITION","hud.tooFast":"TOO FAST","hud.tooHigh":"TOO HIGH","hud.tooLow":"TOO LOW","hud.leftZone":"OUT OF ZONE","pause.title":"PAUSED","pause.resume":"Resume","pause.restart":"Restart mission","pause.quit":"Quit to menu","pause.haptics":"Haptics","pause.voice":"Dispatcher voice","common.on":"on","common.off":"off","pause.debug":"Tuning panel","obj.takeoff":"Climb to 5 m","obj.gate":"Reach the main gates","obj.fire":"Extinguish the burning beam","obj.courtyard":"Enter the inner courtyard","obj.rescue":"Hover over the survivor and deploy the basket","obj.return":"Deliver the survivor to the pad","result.success":"MISSION ACCOMPLISHED","result.failed":"MISSION FAILED","result.rescued":"Rescued","result.fires":"Fires extinguished","result.damage":"Drone damage","result.time":"Time","result.batteryLeft":"Power remaining","result.reward":"Service budget","result.reputation":"Reputation","result.unlock":'Unlocked upgrade: "Reinforced battery"',"result.score":"Flight score: {score} of 100","result.best":"best rank {grade}","result.double":"Ad: double the reward","result.doubled":"Reward doubled","result.continue":"Continue","result.retry":"Retry","fail.battery":"Battery depleted. The drone made an emergency landing.","fail.destroyed":"The airframe took critical damage.","fail.checkpoint":"Launching backup unit. Returning to the last checkpoint.","rotate.title":"Rotate your device","rotate.text":"This game is designed for landscape orientation.","loading.title":"Preparing for launch","tut.takeoff":"Hold ▲ to climb","tut.takeoffKb":"Space to climb, Shift to descend","tut.move":"Left stick to move, swipe right side to look","tut.moveKb":"W A S D to move, mouse to look","tut.joystick":"Push the stick up to take off","tut.joystickKb":"W A S D to move, Space / Shift for altitude","tut.look":"Swipe on the right to turn the camera","tut.lookKb":"Click the scene to capture the cursor, then mouse to look","tut.foam":'Hold "FOAM" and aim at the fire',"tut.foamKb":"LMB for foam","tut.winch":'Press "WINCH" inside the green zone',"tut.winchKb":"E for the winch","tut.thermal":"Top button switches to thermal vision","tut.thermalKb":"F for thermal vision","tut.land":"Descend onto the H pad","speaker.elena":"Dispatcher Elena","speaker.worker":"Warehouse worker","speaker.system":"System","radio.intro":"Alright rookie, no time to warm up. Coordinator Elena on the line. Battery packs blew at the appliance warehouse. Your job is recon and evacuation. Spin up those motors!","radio.airborne":"Good, stabilisers are holding. Now fly to the main gates. Mind the power lines!","radio.beamFalls":"Hold it! The path is blocked, that heat will damage your shell.","radio.useFoam":"Use the fire foam. Line up the sight on the flames and open the valve!","radio.fireOut":"Clear! Fly into the courtyard. Sensors pick up a living person on the annex roof.","radio.smoke":"Smoke is thick — switch to thermal if you lose the target.","radio.seeTarget":"Target in sight! That is the storekeeper. The smoke is knocking him out, move fast. Hover right above him and drop the basket!","radio.winchHold":"Hold position! The wind is pushing you — compensate.","radio.pickedUp":"He is aboard. The drone is heavier now, power drains faster!","radio.workerThanks":"Thanks, tin can! My boss is still inside on the second floor! Save him!","radio.returnHome":"We still have time. Get that guy to safety, now! Pad is on the van roof.","radio.lowBattery":"Power is running low, watch the gauge.","radio.landed":"First one out! Solid work for a rookie. Recharge, grab bigger tanks and we go back in — the warehouse boss will not save himself.","radio.wires":"Careful with those wires!","radio.impact":"Watch your surroundings! The frame will not survive that.","radio.heat":"Pull away from the fire, the shell is overheating!","debug.title":"Feel tuning","debug.reset":"Reset","debug.close":"Close","debug.fps":"FPS","debug.hint":"F9 to toggle"},k_={"game.title":"DROHNE OPERATOR","game.subtitle":"Rettungsdienst · Drohnenstaffel","menu.play":"Schicht beginnen","menu.continue":"Fortsetzen","menu.language":"Sprache","menu.reset":"Fortschritt zurücksetzen","menu.resetConfirm":"Gesamten Fortschritt löschen?","menu.credits":"Vertical Slice · Mission 1","menu.hangar":"Hangar","hangar.title":"Hangar","hangar.subtitle":"Swift-1 · Aufrüstung","hangar.back":"Zurück","hangar.buy":"Einbauen","hangar.maxed":"Maximum","hangar.level":"Stufe {level} von {max}","hangar.stock":"Grundausstattung","hangar.notEnough":"Nicht genug Mittel","hangar.installed":"Modul eingebaut","hangar.next":"Nächste Stufe","upgrade.power":"Energiesystem","upgrade.power.desc":"Akkukapazität und Verbrauch unter Last","upgrade.payload":"Zuladung","upgrade.payload.desc":"Abflugmasse und Steuerbarkeit mit Last","upgrade.suppression":"Löschmodul","upgrade.suppression.desc":"Tankvolumen und Schaumdruck","upgrade.frame":"Rahmenfestigkeit","upgrade.frame.desc":"Rumpfintegrität und Aufprallschutz","menu.balance":"Budget: {money} $","menu.reputation":"Ansehen: {rep}","brief.title":"MISSION 01 · DIE FEUERTAUFE","brief.location":"Vorstadt · Elektrogerätelager","brief.summary":"Akkuexplosion in einem Elektroniklager. Das Gebäude ist teilweise eingestürzt, es sind noch Menschen darin. Erkunde das Gelände, lösche den Brandherd am Tor und evakuiere die Überlebenden.","brief.drone":"Fluggerät: „Swift-1“","brief.loadout":"Ausrüstung","brief.battery":"Akkupack","brief.foam":"Schaumtank","brief.winch":"Rettungswinde","brief.start":"START","brief.back":"Zurück","hud.battery":"AKKU","hud.foam":"SCHAUM","hud.hull":"RAHMEN","hud.payload":"LAST","hud.kg":"kg","hud.altitude":"HÖHE","hud.speed":"GESCHW","hud.thermal":"WÄRMEBILD","hud.geofence":"ZONENGRENZE","hud.geofenceHint":"Zurück in den Flugbereich","hud.foamBtn":"SCHAUM","hud.winchBtn":"WINDE","hud.objective":"AUFTRAG","hud.distance":"{d} m","hud.pause":"Pause","hud.watchAd":"Werbung: +35 % Akku","hud.adUsed":"Bereits genutzt","hud.rescuing":"BERGUNG","hud.holdPosition":"POSITION HALTEN","hud.tooFast":"ZU SCHNELL","hud.tooHigh":"ZU HOCH","hud.tooLow":"ZU TIEF","hud.leftZone":"AUSSERHALB","pause.title":"PAUSE","pause.resume":"Weiter","pause.restart":"Mission neu starten","pause.quit":"Zum Hauptmenü","pause.haptics":"Vibration","pause.voice":"Stimme der Leitstelle","common.on":"an","common.off":"aus","pause.debug":"Tuning-Panel","obj.takeoff":"Auf 5 m steigen","obj.gate":"Zum Haupttor fliegen","obj.fire":"Brennenden Balken löschen","obj.courtyard":"In den Innenhof fliegen","obj.rescue":"Über dem Überlebenden schweben und Korb abseilen","obj.return":"Überlebenden zum Landeplatz bringen","result.success":"MISSION ERFÜLLT","result.failed":"MISSION GESCHEITERT","result.rescued":"Gerettet","result.fires":"Gelöschte Herde","result.damage":"Drohnenschaden","result.time":"Zeit","result.batteryLeft":"Restakku","result.reward":"Einsatzbudget","result.reputation":"Ansehen","result.unlock":"Freigeschaltet: „Verstärkter Akku“","result.score":"Einsatzwertung: {score} von 100","result.best":"bester Rang {grade}","result.double":"Werbung: Belohnung verdoppeln","result.doubled":"Belohnung verdoppelt","result.continue":"Weiter","result.retry":"Wiederholen","fail.battery":"Akku leer. Die Drohne musste notlanden.","fail.destroyed":"Das Fluggerät wurde kritisch beschädigt.","fail.checkpoint":"Ersatzgerät startet. Rückkehr zum letzten Kontrollpunkt.","rotate.title":"Gerät drehen","rotate.text":"Das Spiel ist für das Querformat ausgelegt.","loading.title":"Startvorbereitung","tut.takeoff":"▲ halten — steigen","tut.takeoffKb":"Leertaste steigen, Shift sinken","tut.move":"Linker Stick bewegen, rechts wischen zum Umsehen","tut.moveKb":"W A S D bewegen, Maus zum Umsehen","tut.joystick":"Stick nach oben ziehen — Start","tut.joystickKb":"W A S D bewegen, Leertaste / Shift Höhe","tut.look":"Rechts wischen — Kamera drehen","tut.lookKb":"Klick in die Szene fängt den Cursor, Maus — Umsehen","tut.foam":"Halte „SCHAUM“ und ziele auf das Feuer","tut.foamKb":"LMT — Schaum","tut.winch":"Drücke „WINDE“ in der grünen Zone","tut.winchKb":"E — Winde","tut.thermal":"Taste oben — Wärmebild durch den Rauch","tut.thermalKb":"F — Wärmebild","tut.land":"Auf dem H-Feld landen","speaker.elena":"Leitstelle Elena","speaker.worker":"Lagerarbeiter","speaker.system":"System","radio.intro":"Also, Neuling, keine Zeit zum Aufwärmen. Hier ist Koordinatorin Elena. Im Elektrolager sind Akkus explodiert. Dein Auftrag: Aufklärung und Evakuierung. Motoren starten!","radio.airborne":"Gut, die Stabilisatoren halten. Jetzt zum Haupttor des Lagers. Achte auf die Leitungen!","radio.beamFalls":"Stopp! Der Weg ist versperrt, die Hitze beschädigt deine Hülle.","radio.useFoam":"Nimm den Löschschaum. Ziel auf den Brandherd und öffne das Ventil!","radio.fireOut":"Frei! Flieg in den Innenhof. Die Sensoren orten eine lebende Person auf dem Anbaudach.","radio.smoke":"Der Rauch ist dicht — schalte auf Wärmebild, wenn du das Ziel verlierst.","radio.seeTarget":"Ziel gesichtet! Das ist der Lagerist. Der Rauch macht ihn bewusstlos, beeil dich. Schwebe genau über ihm und lass den Korb herunter!","radio.winchHold":"Halte die Position! Der Wind drückt dich ab — gleich aus.","radio.pickedUp":"Er ist an Bord. Die Drohne ist schwerer, der Akku fällt schneller!","radio.workerThanks":"Danke, Blechkiste! Mein Chef ist noch drin, im zweiten Stock! Rettet ihn!","radio.returnHome":"Wir haben noch Zeit. Bring den Mann sofort in Sicherheit! Der Landeplatz ist auf dem Wagendach.","radio.lowBattery":"Der Akku geht zur Neige, behalte die Anzeige im Auge.","radio.landed":"Der Erste ist raus! Starke Arbeit für einen Neuling. Akku laden, größere Tanks mitnehmen und zurück — der Lagerchef rettet sich nicht von allein.","radio.wires":"Vorsicht mit den Leitungen!","radio.impact":"Pass auf! So überlebt der Rahmen das nicht.","radio.heat":"Weg vom Feuer, die Hülle überhitzt!","debug.title":"Feintuning","debug.reset":"Zurücksetzen","debug.close":"Schließen","debug.fps":"FPS","debug.hint":"F9 zum Umschalten"},Rh={ru:N_,en:F_,de:k_},Fu="do.locale",_l=["ru","en","de"];function O_(){const s=localStorage.getItem(Fu);if(s&&_l.includes(s))return s;for(const e of navigator.languages??[navigator.language]){const t=e.slice(0,2).toLowerCase();if(_l.includes(t))return t}return"en"}let fr=O_();function ku(){return fr}function B_(s){!_l.includes(s)||s===fr||(fr=s,localStorage.setItem(Fu,s),document.documentElement.lang=s,gt.emit("i18n:changed",{locale:s}))}function Ce(s,e){let t=Rh[fr][s]??Rh.en[s]??s;if(e)for(const[n,i]of Object.entries(e))t=t.replaceAll(`{${n}}`,String(i));return t}function Ou(s=document){s.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.dataset.i18n,n=e.dataset.i18nVars?JSON.parse(e.dataset.i18nVars):void 0;e.textContent=Ce(t,n)})}document.documentElement.lang=fr;gt.on("i18n:changed",()=>Ou());const yo=3,Bu=[1,1.22,1.48,1.8],zu=[1,.88,.76,.62],Hu=[0,18,40,70],Gu=[1,.84,.68,.52],Vu=[1,1.28,1.6,2],Wu=[1,1.16,1.36,1.62],Xu=[0,28,62,105],qu=[1,.78,.6,.42],z_={power:[450,1100,2400],payload:[520,1250,2700],suppression:[400,980,2150],frame:[380,940,2050]},Yu=[{id:"power",nameKey:"upgrade.power",descKey:"upgrade.power.desc",glyph:"⚡",effectAt:s=>`+${Math.round((Bu[s]-1)*100)}% · −${Math.round((1-zu[s])*100)}%`},{id:"payload",nameKey:"upgrade.payload",descKey:"upgrade.payload.desc",glyph:"⬆",effectAt:s=>`+${Hu[s]} ${Ce("hud.kg")} · −${Math.round((1-Gu[s])*100)}%`},{id:"suppression",nameKey:"upgrade.suppression",descKey:"upgrade.suppression.desc",glyph:"≈",effectAt:s=>`+${Math.round((Vu[s]-1)*100)}% · +${Math.round((Wu[s]-1)*100)}%`},{id:"frame",nameKey:"upgrade.frame",descKey:"upgrade.frame.desc",glyph:"⛨",effectAt:s=>`+${Xu[s]} · −${Math.round((1-qu[s])*100)}%`}],fs=s=>Math.max(0,Math.min(yo,Math.round(s||0)));function jl(s){const e=fs(s.power),t=fs(s.payload),n=fs(s.suppression),i=fs(s.frame);return{batteryCapacity:se.battery.capacity*Bu[e],payloadDrainMul:zu[e],foamTank:se.foam.tank*Vu[n],foamDpsMul:Wu[n],hullMax:se.hull.max+Xu[i],impactDamageMul:qu[i],maxTakeoff:se.mass.maxTakeoff+Hu[t],massPenaltyMul:Gu[t]}}function ju(){return jl({power:0,payload:0,suppression:0,frame:0})}function H_(s,e){const t=fs(e);return t>=yo?null:z_[s][t]}function Jr(s,e){return Yu.find(n=>n.id===s).effectAt(fs(e))}const Ch="do.haptics";class G_{supported=!1;enabled=!0;minInterval=.06;lastFire=-1/0;constructor(){const e=typeof navigator<"u"&&typeof navigator.vibrate=="function",t=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;this.supported=e&&t;try{this.enabled=localStorage.getItem(Ch)!=="off"}catch{this.enabled=!0}}get available(){return this.supported}get isEnabled(){return this.enabled}setEnabled(e){this.enabled=e;try{localStorage.setItem(Ch,e?"on":"off")}catch{}}fire(e){if(!this.supported||!this.enabled)return;const t=performance.now()/1e3;if(!(t-this.lastFire<this.minInterval)){this.lastFire=t;try{navigator.vibrate(e)}catch{this.supported=!1}}}impact(e){const t=Math.round(12+Math.min(1,e/25)*48);this.fire(t)}takeoff(){this.fire(18)}landing(){this.fire(26)}pickup(){this.fire([22,60,34])}fireOut(){this.fire([16,40,16])}boundary(){this.fire(14)}missionEnd(e){this.fire(e?[30,70,30,70,90]:140)}stop(){if(this.supported)try{navigator.vibrate(0)}catch{}}}const tn=new G_,ho={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V_=new To(-1,1,1,-1,0,1);class W_ extends Pt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const X_=new W_;class Kl{constructor(e){this._mesh=new Ie(X_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ku extends Ls{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bs.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Kl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ph extends Ls{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class q_ extends Ls{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Y_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ku(ho),this.copyPass.material.blending=ti,this.clock=new Ep}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ph!==void 0&&(o instanceof Ph?n=!0:o instanceof q_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j_ extends Ls{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const K_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ws extends Ls{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(r,o,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Sn(r,o,{type:ni});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Sn(r,o,{type:ni});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=K_;this.highPassUniforms=bs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bs.clone(ho.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,blending:ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new Bt,this._fsQuad=new Kl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ws.BlurDirectionX=new oe(1,0);ws.BlurDirectionY=new oe(0,1);const Qr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $_ extends Ls{constructor(){super(),this.uniforms=bs.clone(Qr.uniforms),this.material=new ip({name:Qr.name,uniforms:this.uniforms,vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader}),this._fsQuad=new Kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ml?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Z_={uniforms:{tDiffuse:{value:null},tHeat:{value:null},uAmount:{value:0},uTime:{value:0},uResolution:{value:new oe(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;

    uniform sampler2D tDiffuse;
    uniform sampler2D tHeat;
    uniform float uAmount;
    uniform float uTime;
    uniform vec2 uResolution;

    varying vec2 vUv;

    // Палитра «железо»: синий -> фиолетовый -> красный -> оранжевый -> белый.
    vec3 ironbow(float t) {
      t = clamp(t, 0.0, 1.0);
      vec3 c0 = vec3(0.004, 0.008, 0.035);
      vec3 c1 = vec3(0.075, 0.030, 0.190);
      vec3 c2 = vec3(0.470, 0.080, 0.380);
      vec3 c3 = vec3(0.930, 0.340, 0.130);
      vec3 c4 = vec3(1.000, 0.790, 0.200);
      vec3 c5 = vec3(1.000, 1.000, 0.960);

      if (t < 0.34) return mix(c0, c1, t / 0.34);
      if (t < 0.55) return mix(c1, c2, (t - 0.34) / 0.21);
      if (t < 0.72) return mix(c2, c3, (t - 0.55) / 0.17);
      if (t < 0.88) return mix(c3, c4, (t - 0.72) / 0.16);
      return mix(c4, c5, (t - 0.88) / 0.12);
    }

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec4 base = texture2D(tDiffuse, vUv);

      if (uAmount < 0.002) {
        gl_FragColor = base;
        return;
      }

      // Лёгкое размытие крестом — сглаживает ступеньки половинного разрешения.
      vec2 texel = 1.0 / uResolution;
      vec4 h = texture2D(tHeat, vUv);
      h += texture2D(tHeat, vUv + vec2(texel.x, 0.0) * 1.5);
      h += texture2D(tHeat, vUv - vec2(texel.x, 0.0) * 1.5);
      h += texture2D(tHeat, vUv + vec2(0.0, texel.y) * 1.5);
      h += texture2D(tHeat, vUv - vec2(0.0, texel.y) * 1.5);
      h /= 5.0;

      float heat = h.r;

      // Структура сцены подмешивается слабо: контуры видны, но не спорят с теплом.
      float luma = dot(base.rgb, vec3(0.299, 0.587, 0.114));
      float signal = clamp(heat + luma * 0.19, 0.0, 1.0);

      vec3 thermal = ironbow(signal);

      // Живые цели подсвечиваются контуром — их видно в дыму первым делом.
      thermal += vec3(0.10, 0.32, 0.18) * h.g * (0.55 + 0.45 * sin(uTime * 3.6));

      // Шум сенсора.
      float grain = hash(vUv * uResolution + uTime * 60.0) - 0.5;
      thermal += grain * 0.045;

      // Строчная развёртка.
      float scan = 0.94 + 0.06 * sin(vUv.y * uResolution.y * 1.5 + uTime * 8.0);
      thermal *= scan;

      // Виньетка объектива.
      vec2 d = vUv - 0.5;
      thermal *= 1.0 - dot(d, d) * 0.85;

      gl_FragColor = vec4(mix(base.rgb, thermal, uAmount), base.a);
    }
  `},_e={cold:.06,warm:.14,machine:.3,human:.62,ember:.8};function J_(s,e){if(!s.attributes.position)return;const t=s.attributes.position.count,n=s.getAttribute("aHeat");n&&n.count===t?(n.array.fill(e),n.needsUpdate=!0):s.setAttribute("aHeat",new Mt(new Float32Array(t).fill(e),1))}function $l(s,e=_e.cold){s.traverse(t=>{const n=t;n.geometry&&(t.isSprite||J_(n.geometry,n.userData.heat??e))})}function Q_(){return new Ut({uniforms:{uTime:{value:0}},vertexShader:`
      attribute float aHeat;
      varying float vHeat;
      varying float vDepth;

      void main() {
        vHeat = aHeat;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDepth = -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = 26.0 / max(vDepth, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      varying float vHeat;
      varying float vDepth;

      void main() {
        float heat = vHeat;

        // Пламя дышит, живые силуэты слегка пульсируют — иначе картинка мёртвая.
        if (heat > 0.75) {
          heat += sin(uTime * 9.0 + vDepth * 2.1) * 0.09;
        } else if (heat > 0.5) {
          heat += sin(uTime * 2.2 + vDepth) * 0.035;
        }

        // Дальние объекты холоднее — имитация ослабления сигнала сенсора.
        float falloff = 1.0 - smoothstep(35.0, 95.0, vDepth);
        heat *= mix(0.45, 1.0, falloff);

        gl_FragColor = vec4(clamp(heat, 0.0, 1.2), vHeat > 0.5 ? 1.0 : 0.0, vDepth / 120.0, 1.0);
      }
    `,side:Xt,fog:!1,transparent:!1,depthWrite:!0,depthTest:!0})}const In={DEFAULT:0,ATMOSPHERE:1};function ex(){const s=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),e=navigator.hardwareConcurrency??4,t=window.devicePixelRatio||1;return s&&e<=4?{name:"low",pixelRatio:Math.min(t,1.25),bloom:!0,bloomStrength:.5,shadows:!1,shadowMapSize:1024,heatScale:.4}:s?{name:"medium",pixelRatio:Math.min(t,1.75),bloom:!0,bloomStrength:.62,shadows:!0,shadowMapSize:1024,heatScale:.5}:{name:"high",pixelRatio:Math.min(t,2),bloom:!0,bloomStrength:.72,shadows:!0,shadowMapSize:2048,heatScale:.5}}class tx{renderer;scene;camera;quality;canvas;composer;bloomPass;thermalPass;heatTarget;heatMaterial;fog;thermalTarget=0;thermalCurrent=0;targetFogDensity=se.smoke.fogDensityMin;elapsed=0;shakeAmount=0;shakeDecay=2.6;constructor(e){this.quality=ex(),this.renderer=new x_({antialias:this.quality.name==="high",powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(this.quality.pixelRatio),this.renderer.toneMapping=Ml,this.renderer.toneMappingExposure=1.22,this.renderer.outputColorSpace=vt,this.renderer.shadowMap.enabled=this.quality.shadows,this.renderer.shadowMap.type=Vh,this.canvas=this.renderer.domElement,this.canvas.classList.add("game-canvas"),e.appendChild(this.canvas),this.scene=new Pf,this.fog=new Il(2826521,se.smoke.fogDensityMin),this.scene.fog=this.fog,this.camera=new nn(se.camera.fov,1,.1,600),this.camera.layers.enable(In.ATMOSPHERE),this.heatMaterial=Q_(),this.heatTarget=new Sn(2,2,{minFilter:rn,magFilter:rn,type:Un,depthBuffer:!0}),this.composer=new Y_(this.renderer),this.composer.addPass(new j_(this.scene,this.camera)),this.quality.bloom&&(this.bloomPass=new ws(new oe(1,1),this.quality.bloomStrength,.62,.72),this.composer.addPass(this.bloomPass)),this.thermalPass=new Ku(Z_),this.thermalPass.uniforms.tHeat.value=this.heatTarget.texture,this.composer.addPass(this.thermalPass),this.composer.addPass(new $_),this.resize(),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize)}resize=()=>{const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.composer.setSize(e,t);const n=this.quality.heatScale*this.quality.pixelRatio;this.heatTarget.setSize(Math.max(2,Math.round(e*n)),Math.max(2,Math.round(t*n))),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.bloomPass?.setSize(e,t),this.thermalPass.uniforms.uResolution.value.set(e*this.quality.pixelRatio,t*this.quality.pixelRatio)};setFogDensity(e){this.targetFogDensity=e}setFogColor(e){this.fog.color.set(e)}setThermal(e){this.thermalTarget=e?1:0}get thermalActive(){return this.thermalTarget>.5}addShake(e){this.shakeAmount=Math.min(1.6,this.shakeAmount+e)}update(e){this.elapsed+=e,this.thermalCurrent=lt(this.thermalCurrent,this.thermalTarget,9,e),this.fog.density=lt(this.fog.density,this.targetFogDensity,se.smoke.fogResponse,e),this.shakeAmount=Math.max(0,this.shakeAmount-this.shakeDecay*e*(.4+this.shakeAmount)),this.thermalPass.uniforms.uAmount.value=it(this.thermalCurrent),this.thermalPass.uniforms.uTime.value=this.elapsed,this.heatMaterial.uniforms.uTime.value=this.elapsed,this.bloomPass&&(this.bloomPass.strength=this.quality.bloomStrength*(1-this.thermalCurrent*.85))}applyShake(){if(this.shakeAmount<.001)return;const e=this.shakeAmount*.09,t=this.elapsed;this.camera.position.x+=Math.sin(t*47.3)*e,this.camera.position.y+=Math.sin(t*39.1+1.4)*e,this.camera.position.z+=Math.sin(t*53.7+2.9)*e,this.camera.rotateZ(Math.sin(t*31.7)*e*.12)}render(){this.thermalCurrent>.004&&this.renderHeatPass(),this.composer.render()}renderHeatPass(){const e=this.camera.layers.mask,t=this.scene.fog,n=this.scene.background,i=this.renderer.getRenderTarget();this.camera.layers.set(In.DEFAULT),this.scene.fog=null,this.scene.background=null,this.scene.overrideMaterial=this.heatMaterial,this.renderer.setRenderTarget(this.heatTarget),this.renderer.setClearColor(0,1),this.renderer.clear(!0,!0,!1),this.renderer.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.scene.fog=t,this.scene.background=n,this.camera.layers.mask=e,this.renderer.setRenderTarget(i)}dispose(){window.removeEventListener("resize",this.resize),window.removeEventListener("orientationchange",this.resize),this.heatTarget.dispose(),this.heatMaterial.dispose(),this.composer.dispose(),this.renderer.dispose(),this.canvas.remove()}}class nx{constructor(e){this.camera=e,this.fov=se.camera.fov,this.raycaster.far=40}yaw=0;pitch=.12;smoothYaw=0;smoothPitch=.12;position=new E;lookAt=new E;desired=new E;raycaster=new Fp;rayDir=new E;fov;initialised=!1;obstacles=[];reset(e,t){this.yaw=t,this.smoothYaw=t,this.pitch=.12,this.smoothPitch=.12,this.initialised=!1,this.update(.016,e,0),this.initialised=!0}rotate(e,t){this.yaw-=e,this.pitch=Dt(this.pitch+t,se.camera.pitchMin,se.camera.pitchMax)}get heading(){return this.smoothYaw}get forward(){return new E(Math.sin(this.smoothYaw),0,Math.cos(this.smoothYaw))}get right(){return new E(Math.cos(this.smoothYaw),0,-Math.sin(this.smoothYaw))}update(e,t,n){const i=se.camera;this.initialised?(this.smoothYaw=vl(this.smoothYaw,this.yaw,i.rotateResponse,e),this.smoothPitch=lt(this.smoothPitch,this.pitch,i.rotateResponse,e)):(this.smoothYaw=this.yaw,this.smoothPitch=this.pitch);const r=Math.cos(this.smoothPitch)*i.distance,o=Math.sin(this.smoothPitch)*i.distance;if(this.desired.set(t.x-Math.sin(this.smoothYaw)*r,t.y+i.height+o,t.z-Math.cos(this.smoothYaw)*r),this.avoidGeometry(t),this.desired.y=Math.max(this.desired.y,i.minGroundClearance),this.initialised){const l=1-Math.exp(-i.followResponse*e);this.position.lerp(this.desired,l)}else this.position.copy(this.desired);this.lookAt.set(t.x,t.y+i.lookAheadY,t.z),this.camera.position.copy(this.position),this.camera.lookAt(this.lookAt);const a=i.fov+i.fovSpeedBoost*n;this.fov=lt(this.fov,a,3.5,e),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}avoidGeometry(e){if(this.obstacles.length===0)return;this.rayDir.copy(this.desired).sub(e);const t=this.rayDir.length();if(t<.05)return;this.rayDir.divideScalar(t),this.raycaster.set(e,this.rayDir),this.raycaster.far=t;const n=this.raycaster.intersectObjects(this.obstacles,!0);if(n.length===0)return;const i=Math.max(.9,n[0].distance-.5);this.desired.copy(e).addScaledVector(this.rayDir,i)}}const Nt=new Map,wt=new Map;function Wt(s){const e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d",{willReadFrequently:!0});return{canvas:e,ctx:t}}function yi(s,e,t){let n=s*374761393+e*668265263+t*2246822519;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function ix(s,e,t,n){const i=Math.floor(s),r=Math.floor(e),o=s-i,a=e-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=S=>(S%t+t)%t,u=h(i),d=h(i+1),f=h(r),g=h(r+1),v=yi(u,f,n),m=yi(d,f,n),p=yi(u,g,n),M=yi(d,g,n);return(v*(1-l)+m*l)*(1-c)+(p*(1-l)+M*l)*c}function an(s,e,t,n,i){let r=0,o=.5,a=0,l=n;for(let c=0;c<t;c++)r+=ix(s*l/n,e*l/n,l,i+c*17)*o,a+=o,o*=.5,l*=2;return r/a}function Ds(s,e,t){const{canvas:n,ctx:i}=Wt(e),r=i.createImageData(e,e),o=(l,c)=>s[(c+e)%e*e+(l+e)%e];for(let l=0;l<e;l++)for(let c=0;c<e;c++){const h=(o(c+1,l)-o(c-1,l))*t,u=(o(c,l+1)-o(c,l-1))*t;let d=-h,f=-u;const g=1,v=Math.hypot(d,f,g);d/=v,f/=v;const m=(l*e+c)*4;r.data[m]=(d*.5+.5)*255,r.data[m+1]=(f*.5+.5)*255,r.data[m+2]=g/v*255,r.data[m+3]=255}i.putImageData(r,0,0);const a=new Wn(n);return a.wrapS=a.wrapT=ln,a}function ci(s,e,t=!0){const n=new Wn(s);return n.wrapS=n.wrapT=ln,n.repeat.set(e,e),n.anisotropy=8,t&&(n.colorSpace=vt),n}function sx(){const s="concrete";if(wt.has(s))return wt.get(s);const e=256,{canvas:t,ctx:n}=Wt(e),i=n.createImageData(e,e),r=new Float32Array(e*e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=an(l,a,5,8,11),h=an(l,a,3,2,42);let u=.52+(c-.5)*.34+(h-.5)*.16;const d=an(l,a,2,32,77);d>.78&&(u-=(d-.78)*1.6),u=Math.max(.08,Math.min(1,u)),r[a*e+l]=u;const f=(a*e+l)*4;i.data[f]=u*176,i.data[f+1]=u*174,i.data[f+2]=u*168,i.data[f+3]=255}n.putImageData(i,0,0);const o={map:ci(t,1),normalMap:Ds(r,e,2.2)};return wt.set(s,o),o}function rx(){const s="asphalt";if(wt.has(s))return wt.get(s);const e=256,{canvas:t,ctx:n}=Wt(e),i=n.createImageData(e,e),r=new Float32Array(e*e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=yi(l,a,5);let u=.3+(an(l,a,4,4,23)-.5)*.22+(c-.5)*.28;u=Math.max(.05,Math.min(1,u)),r[a*e+l]=u;const d=(a*e+l)*4;i.data[d]=u*118,i.data[d+1]=u*118,i.data[d+2]=u*124,i.data[d+3]=255}n.putImageData(i,0,0);const o={map:ci(t,1),normalMap:Ds(r,e,1.4)};return wt.set(s,o),o}function pa(s){const e=`corrugated:${s}`;if(wt.has(e))return wt.get(e);const t=256,{canvas:n,ctx:i}=Wt(t);i.fillStyle=s,i.fillRect(0,0,t,t);const r=new Float32Array(t*t),o=i.getImageData(0,0,t,t),a=32;for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=Math.sin(h/a*Math.PI*2)*.5+.5,d=.72+u*.42,f=an(h*.6,c*.12,4,8,91),g=Math.max(0,f-.58)*2.1*Math.min(1,c/t+.15),v=an(h,c,3,16,5)*.18;r[c*t+h]=u*.8+f*.2;const m=(c*t+h)*4,p=o.data[m]*d*(1-v),M=o.data[m+1]*d*(1-v),S=o.data[m+2]*d*(1-v);o.data[m]=p*(1-g)+138*g,o.data[m+1]=M*(1-g)+74*g,o.data[m+2]=S*(1-g)+38*g}i.putImageData(o,0,0);const l={map:ci(n,1),normalMap:Ds(r,t,3.4)};return wt.set(e,l),l}function ox(){const s="rust";if(wt.has(s))return wt.get(s);const e=256,{canvas:t,ctx:n}=Wt(e),i=n.createImageData(e,e),r=new Float32Array(e*e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=an(l,a,5,6,61),h=an(l,a,4,3,130),u=Math.min(1,Math.max(0,(h-.42)*2.4)),d=.4+(c-.5)*.5;r[a*e+l]=d*.6+u*.4;const f=(a*e+l)*4,g=[96*d*1.6,99*d*1.6,106*d*1.6],v=[150*(.6+c*.7),78*(.6+c*.7),34*(.6+c*.7)];i.data[f]=g[0]*(1-u)+v[0]*u,i.data[f+1]=g[1]*(1-u)+v[1]*u,i.data[f+2]=g[2]*(1-u)+v[2]*u,i.data[f+3]=255}n.putImageData(i,0,0);const o={map:ci(t,1),normalMap:Ds(r,e,2.6)};return wt.set(s,o),o}function ax(){const s="charred";if(wt.has(s))return wt.get(s);const e=256,{canvas:t,ctx:n}=Wt(e),i=n.createImageData(e,e),r=new Float32Array(e*e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=an(l,a,5,5,202),h=an(l,a,3,12,303);let u=.16+(c-.5)*.24+h*.12;u=Math.max(.03,Math.min(1,u)),r[a*e+l]=u;const d=Math.max(0,c-.72)*2.2,f=(a*e+l)*4;i.data[f]=u*90+d*120,i.data[f+1]=u*84+d*42,i.data[f+2]=u*80+d*12,i.data[f+3]=255}n.putImageData(i,0,0);const o={map:ci(t,1),normalMap:Ds(r,e,2)};return wt.set(s,o),o}function lx(){const s="helipad";if(Nt.has(s))return Nt.get(s);const e=512,{canvas:t,ctx:n}=Wt(e);n.fillStyle="#1b1f24",n.fillRect(0,0,e,e);const i=n.getImageData(0,0,e,e);for(let u=0;u<i.data.length;u+=4){const d=(Math.random()-.5)*26;i.data[u]+=d,i.data[u+1]+=d,i.data[u+2]+=d}n.putImageData(i,0,0);const r=e/2;n.strokeStyle="#e8f5ec",n.lineWidth=16,n.beginPath(),n.arc(r,r,e*.38,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(120, 240, 160, 0.55)",n.lineWidth=6,n.beginPath(),n.arc(r,r,e*.45,0,Math.PI*2),n.stroke(),n.fillStyle="#e8f5ec";const o=e*.075,a=e*.4;n.fillRect(r-e*.15-o/2,r-a/2,o,a),n.fillRect(r+e*.15-o/2,r-a/2,o,a),n.fillRect(r-e*.15,r-o/2,e*.3,o),n.strokeStyle="rgba(120, 240, 160, 0.9)",n.lineWidth=8;const l=e*.06,c=e*.1;for(const[u,d,f,g]of[[l,l,1,1],[e-l,l,-1,1],[l,e-l,1,-1],[e-l,e-l,-1,-1]])n.beginPath(),n.moveTo(u+c*f,d),n.lineTo(u,d),n.lineTo(u,d+c*g),n.stroke();const h=new Wn(t);return h.colorSpace=vt,h.anisotropy=8,Nt.set(s,h),h}function Lh(s=[148,84,66]){const e=`brick:${s.join(",")}`;if(wt.has(e))return wt.get(e);const t=256,{canvas:n,ctx:i}=Wt(t),r=i.createImageData(t,t),o=new Float32Array(t*t),l=t/16,c=t/4,h=2.2;for(let d=0;d<t;d++){const f=Math.floor(d/l),g=f%2*c*.5,v=d-f*l;for(let m=0;m<t;m++){const p=((m+g)%c+c)%c,M=v<h||p<h,S=yi(Math.floor((m+g)/c),f,3),y=an(m,d,4,12,61);let R,T,A,P;M?(R=.42+y*.12,T=A=P=150):(R=.62+(S-.5)*.3+(y-.5)*.26,T=s[0]+(S-.5)*46,A=s[1]+(S-.5)*30,P=s[2]+(S-.5)*26);const _=Math.max(0,an(m*.7,d*.3,3,8,13)-.5)*1.4,x=Math.max(.25,1-_*.75);R=Math.max(.06,Math.min(1,R)),o[d*t+m]=M?R*.55:R;const L=(d*t+m)*4;r.data[L]=Math.min(255,T*R*x*1.7),r.data[L+1]=Math.min(255,A*R*x*1.7),r.data[L+2]=Math.min(255,P*R*x*1.7),r.data[L+3]=255}}i.putImageData(r,0,0);const u={map:ci(n,1),normalMap:Ds(o,t,3.4)};return wt.set(e,u),u}function cx(s,e=.34,t=78){const n=`facade:${s}:${e}:${t}`;if(wt.has(n)){const p=wt.get(n);return{map:p.map,emissiveMap:p.normalMap}}const i=256,r=8,o=8,a=i/r,l=i/o,{canvas:c,ctx:h}=Wt(i),{canvas:u,ctx:d}=Wt(i),f=h.createImageData(i,i);for(let p=0;p<i;p++)for(let M=0;M<i;M++){const y=.72+(an(M,p,4,10,s*7+3)-.5)*.4,R=(p*i+M)*4;f.data[R]=t*y,f.data[R+1]=(t-4)*y,f.data[R+2]=(t-10)*y,f.data[R+3]=255}h.putImageData(f,0,0),d.fillStyle="#000",d.fillRect(0,0,i,i);const g=Math.round(a*.22);for(let p=0;p<o;p++)for(let M=0;M<r;M++){const S=M*a+g,y=p*l+g,R=a-g*2,T=l-g*2.4,P=yi(M,p,s)<e;if(h.fillStyle=P?"#ffd9a0":"#12161d",h.fillRect(S,y,R,T),h.strokeStyle="rgba(20,22,26,0.85)",h.lineWidth=1.5,h.strokeRect(S,y,R,T),P){const _=.55+yi(M,p,s+91)*.45,x=d.createLinearGradient(S,y,S,y+T);x.addColorStop(0,`rgba(255,214,150,${_})`),x.addColorStop(1,`rgba(255,176,104,${_*.65})`),d.fillStyle=x,d.fillRect(S,y,R,T)}}const v=ci(c,1),m=new Wn(u);return m.wrapS=m.wrapT=ln,m.anisotropy=8,wt.set(n,{map:v,normalMap:m}),{map:v,emissiveMap:m}}function hx(){const s="glow";if(Nt.has(s))return Nt.get(s);const e=128,{canvas:t,ctx:n}=Wt(e),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,236,205,0.62)"),i.addColorStop(.7,"rgba(255,214,160,0.18)"),i.addColorStop(1,"rgba(255,200,140,0)"),n.fillStyle=i,n.fillRect(0,0,e,e);const r=new Wn(t);return r.colorSpace=vt,Nt.set(s,r),r}function ux(){const s="chainlink";if(wt.has(s)){const l=wt.get(s);return{map:l.map,alphaMap:l.normalMap}}const e=128,{canvas:t,ctx:n}=Wt(e),{canvas:i,ctx:r}=Wt(e);n.fillStyle="#8b8f94",n.fillRect(0,0,e,e),r.fillStyle="#000",r.fillRect(0,0,e,e),r.strokeStyle="#fff",r.lineWidth=2.6;for(let l=-e;l<=e*2;l+=e/4)r.beginPath(),r.moveTo(l,0),r.lineTo(l+e,e),r.stroke(),r.beginPath(),r.moveTo(l,e),r.lineTo(l+e,0),r.stroke();const o=ci(t,1),a=new Wn(i);return a.wrapS=a.wrapT=ln,wt.set(s,{map:o,normalMap:a}),{map:o,alphaMap:a}}function dx(){const s="hazard";if(Nt.has(s))return Nt.get(s);const e=128,{canvas:t,ctx:n}=Wt(e);n.fillStyle="#d9b021",n.fillRect(0,0,e,e),n.fillStyle="#1a1a1c",n.lineWidth=0;for(let r=-e;r<e*2;r+=e/4)n.beginPath(),n.moveTo(r,0),n.lineTo(r+e/8,0),n.lineTo(r+e/8+e,e),n.lineTo(r+e,e),n.closePath(),n.fill();n.globalAlpha=.22,n.fillStyle="#6a6a60";for(let r=0;r<220;r++)n.fillRect(Math.random()*e,Math.random()*e,Math.random()*6,Math.random()*2);n.globalAlpha=1;const i=ci(t,1);return Nt.set(s,i),i}function $u(){const s="sprite:smoke";if(Nt.has(s))return Nt.get(s);const e=128,{canvas:t,ctx:n}=Wt(e),i=n.createImageData(e,e),r=e/2;for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=Math.hypot(l-r,a-r)/r,h=an(l,a,4,5,313),u=Math.max(0,1-c)**2.1*(.55+h*.75),d=(a*e+l)*4,f=190+h*65;i.data[d]=f,i.data[d+1]=f,i.data[d+2]=f,i.data[d+3]=Math.min(255,u*255)}n.putImageData(i,0,0);const o=new Wn(t);return o.colorSpace=vt,Nt.set(s,o),o}function fx(){const s="sprite:flame";if(Nt.has(s))return Nt.get(s);const e=128,{canvas:t,ctx:n}=Wt(e),i=n.createImageData(e,e),r=e/2;for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=(l-r)/r,h=(a-r)/r,u=Math.hypot(c,h*.78),d=an(l,a,4,6,777),f=Math.max(0,1-u)**1.5*(.6+d*.8),g=Math.max(0,1-u*2.2),v=(a*e+l)*4;i.data[v]=255,i.data[v+1]=120+g*130,i.data[v+2]=26+g*170,i.data[v+3]=Math.min(255,f*255)}n.putImageData(i,0,0);const o=new Wn(t);return o.colorSpace=vt,Nt.set(s,o),o}function px(){const s="sprite:foam";if(Nt.has(s))return Nt.get(s);const e=64,{canvas:t,ctx:n}=Wt(e),i=e/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.45,"rgba(238,246,255,0.85)"),r.addColorStop(1,"rgba(210,225,240,0)"),n.fillStyle=r,n.fillRect(0,0,e,e);const o=new Wn(t);return o.colorSpace=vt,Nt.set(s,o),o}function Zu(){const s="sprite:ember";if(Nt.has(s))return Nt.get(s);const e=32,{canvas:t,ctx:n}=Wt(e),i=e/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255,244,214,1)"),r.addColorStop(.3,"rgba(255,170,60,0.9)"),r.addColorStop(1,"rgba(255,90,20,0)"),n.fillStyle=r,n.fillRect(0,0,e,e);const o=new Wn(t);return o.colorSpace=vt,Nt.set(s,o),o}function xn(s,e,t,n=1){const i=s.map.clone(),r=s.normalMap.clone();return i.needsUpdate=!0,r.needsUpdate=!0,i.repeat.copy(t),r.repeat.copy(t),r.wrapS=r.wrapT=ln,i.wrapS=i.wrapT=ln,new mt({map:i,normalMap:r,normalScale:new oe(n,n),...e})}function ma(s,e,t,n){const i=cx(s,e,t),r=i.map.clone(),o=i.emissiveMap.clone();r.needsUpdate=!0,o.needsUpdate=!0;for(const a of[r,o])a.wrapS=a.wrapT=ln,a.repeat.copy(n);return new mt({map:r,emissiveMap:o,emissive:16763274,emissiveIntensity:.42,roughness:.9,metalness:.03})}function mx(){const s=sx(),e=rx(),t=ox(),n=ax(),i=pa("#8d99a6"),r=pa("#4f5a63"),o=pa("#6a6f74"),a=dx().clone();a.needsUpdate=!0,a.wrapS=a.wrapT=ln,a.repeat.set(6,1);const l=lx();return{asphalt:xn(e,{roughness:.96,metalness:.02},new oe(100,100),1.1),concrete:xn(s,{roughness:.92,metalness:.03},new oe(30,30),1),concreteWall:xn(s,{roughness:.88,metalness:.03,color:12170411},new oe(1,1),1.3),siding:xn(i,{roughness:.62,metalness:.38},new oe(1,1),1.6),sidingDark:xn(r,{roughness:.66,metalness:.34},new oe(1,1),1.6),roof:xn(o,{roughness:.7,metalness:.3},new oe(1,1),1.4),rust:xn(t,{roughness:.82,metalness:.5},new oe(1,1),1.5),charred:xn(n,{roughness:.98,metalness:.05},new oe(1,1),1.2),hazard:new mt({map:a,roughness:.7,metalness:.15}),helipad:new mt({map:l,roughness:.78,metalness:.12,emissive:866844,emissiveIntensity:.55}),vanBody:new mt({color:12850218,roughness:.36,metalness:.45}),vanTrim:new mt({color:15922423,roughness:.42,metalness:.28}),glass:new Fn({color:1582124,roughness:.12,metalness:.1,transmission:.35,thickness:.4,transparent:!0,opacity:.72}),tyre:new mt({color:1316378,roughness:.95,metalness:.02}),droneShell:new mt({color:2896960,roughness:.38,metalness:.62}),droneAccent:new mt({color:16742936,roughness:.4,metalness:.25}),droneDark:new mt({color:1119256,roughness:.55,metalness:.55}),rotorBlur:new Bt({color:8161172,transparent:!0,opacity:.1,side:Xt,depthWrite:!1}),cable:new mt({color:1711136,roughness:.8,metalness:.2}),wood:new mt({color:10122312,roughness:.88,metalness:.02}),cardboard:new mt({color:10846543,roughness:.95,metalness:0}),container:new mt({color:3107674,roughness:.6,metalness:.45}),skin:new mt({color:13212274,roughness:.72,metalness:0}),cloth:new mt({color:3625067,roughness:.9,metalness:0}),vest:new mt({color:14215226,roughness:.7,metalness:.02,emissive:2765320,emissiveIntensity:.4}),emissiveGreen:new Bt({color:5111712,transparent:!0,opacity:.85}),emissiveAmber:new Bt({color:16758349,transparent:!0,opacity:.9}),emissiveRed:new Bt({color:16731469,transparent:!0,opacity:.9}),brick:xn(Lh(),{roughness:.94,metalness:.02},new oe(1,1),1.4),brickPale:xn(Lh([132,118,100]),{roughness:.95,metalness:.02},new oe(1,1),1.3),facadeA:ma(1,.36,74,new oe(1,1)),facadeB:ma(2,.22,62,new oe(1,1)),facadeC:ma(3,.44,88,new oe(1,1)),slab:xn(s,{roughness:.93,metalness:.04,color:9408402},new oe(1,1),.9),slabDark:xn(s,{roughness:.95,metalness:.04,color:6053734},new oe(1,1),.9),chainlink:(()=>{const c=ux(),h=c.map.clone(),u=c.alphaMap.clone();h.needsUpdate=!0,u.needsUpdate=!0;for(const d of[h,u])d.wrapS=d.wrapT=ln,d.repeat.set(1,1);return new mt({map:h,alphaMap:u,transparent:!0,alphaTest:.42,side:Xt,roughness:.68,metalness:.55,color:10133670})})(),paint:new mt({color:15262934,roughness:.85,metalness:.02}),lampGlass:new Bt({color:16770749,transparent:!0,opacity:.95})}}function gx(s){for(const e of Object.values(s)){const t=e;t.map?.dispose(),t.normalMap?.dispose(),t.emissiveMap?.dispose(),t.alphaMap?.dispose(),t.roughnessMap?.dispose(),e.dispose()}}class Dh{id;object;colliderAfter;startPos;startRot;endPos;endRot;duration;impactAt;onImpact;elapsed=0;active=!1;impacted=!1;finished=!1;triggered=!1;constructor(e){this.id=e.id,this.object=e.object,this.colliderAfter=e.colliderAfter,this.startPos=e.object.position.clone(),this.startRot=e.object.rotation.clone(),this.endPos=this.startPos.clone().add(e.endPosition),this.endRot=e.endRotation,this.duration=e.duration,this.impactAt=e.impactAt??.82,this.onImpact=e.onImpact}trigger(){this.triggered||(this.triggered=!0,this.active=!0,this.elapsed=0)}snapToEnd(){this.object.position.copy(this.endPos),this.object.rotation.copy(this.endRot),this.elapsed=this.duration,this.active=!1,this.triggered=!0,this.finished=!0,this.impacted||(this.impacted=!0,this.onImpact?.())}reset(){this.object.position.copy(this.startPos),this.object.rotation.copy(this.startRot),this.elapsed=0,this.active=!1,this.triggered=!1,this.impacted=!1,this.finished=!1}update(e){if(!this.active)return;this.elapsed+=e;const t=it(this.elapsed/this.duration),n=t*t,i=w_(t);this.object.position.lerpVectors(this.startPos,this.endPos,n),this.object.rotation.set(this.startRot.x+(this.endRot.x-this.startRot.x)*i,this.startRot.y+(this.endRot.y-this.startRot.y)*i,this.startRot.z+(this.endRot.z-this.startRot.z)*i),!this.impacted&&t>=this.impactAt&&(this.impacted=!0,this.onImpact?.()),t>=1&&(this.active=!1,this.finished=!0)}}function vx(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Pt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ih(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=Ih(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ih(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Mt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Uh(s,e){if(e===Pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ul||e===ou){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ul)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function _x(s,e,t,n,i){const r=s.attributes.uv,o=[[n/i,t/i],[n/i,t/i],[e/i,n/i],[e/i,n/i],[e/i,t/i],[e/i,t/i]];for(let a=0;a<6;a++){const[l,c]=o[a];for(let h=0;h<4;h++){const u=a*4+h;r.setXY(u,r.getX(u)*l,r.getY(u)*c)}}r.needsUpdate=!0}function ce(s,e,t,n,i,r,o,a={}){const l=new sn(s,e,t);_x(l,s,e,t,a.tile??2.5);const c=new Ie(l,n);return c.position.set(i,r,o),a.rotY&&(c.rotation.y=a.rotY),a.rotX&&(c.rotation.x=a.rotX),a.rotZ&&(c.rotation.z=a.rotZ),c.castShadow=a.cast??!0,c.receiveShadow=a.receive??!0,c.userData.heat=a.heat??_e.cold,a.name&&(c.name=a.name),c}function ut(s,e,t,n,i,r,o,a=16,l={}){const c=new Mi(s,e,t,a),h=new Ie(c,n);return h.position.set(i,r,o),l.rotY&&(h.rotation.y=l.rotY),l.rotX&&(h.rotation.x=l.rotX),l.rotZ&&(h.rotation.z=l.rotZ),h.castShadow=l.cast??!0,h.receiveShadow=l.receive??!0,h.userData.heat=l.heat??_e.cold,h}function xx(s,e,t){if(s.length===0)return null;const n=[];for(const o of s){o.updateMatrix();const a=o.geometry.clone();a.applyMatrix4(o.matrix),a.deleteAttribute("uv1"),a.deleteAttribute("uv2"),n.push(a),o.geometry.dispose()}const i=vx(n,!1);for(const o of n)o.dispose();if(!i)return null;const r=new Ie(i,e);return r.castShadow=!1,r.receiveShadow=!1,t&&(r.name=t),r.frustumCulled=!0,r}function pn(s,e,t,n,i,r){return new mn(new E(s-n/2,e-i/2,t-r/2),new E(s+n/2,e+i/2,t+r/2))}function yx(){const s=new ri(280,32,20),e=new Ut({side:jt,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:new xe(1186347)},uHorizon:{value:new xe(6965812)},uGlow:{value:new xe(13922362)},uSunDir:{value:new E(.42,.22,-.88).normalize()},uTime:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform vec3 uZenith;
      uniform vec3 uHorizon;
      uniform vec3 uGlow;
      uniform vec3 uSunDir;
      uniform float uTime;
      varying vec3 vDir;

      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
      }

      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);

        // Вертикальный градиент с сильным сжатием к горизонту.
        vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));

        // Зарево от пожара за складом.
        float toSun = max(0.0, dot(dir, uSunDir));
        col += uGlow * pow(toSun, 6.0) * 0.65;
        col += uGlow * pow(1.0 - abs(dir.y), 8.0) * 0.22;

        // Слоистая дымка, медленно ползущая по небу.
        float band = sin(dir.y * 14.0 + uTime * 0.05 + dir.x * 2.0) * 0.5 + 0.5;
        col = mix(col, col * 1.12, band * (1.0 - h) * 0.5);

        // Дизеринг убирает полосатость градиента на дешёвых экранах.
        col += (hash(dir * 512.0) - 0.5) * 0.012;

        gl_FragColor = vec4(col, 1.0);
      }
    `}),t=new Ie(s,e);return t.name="sky",t.frustumCulled=!1,t.renderOrder=-1e3,t.userData.heat=0,t}function bx(s,e){s.material.uniforms.uTime.value=e}const ga=82,Nh=24;function Mx(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Sx(s){const e=new rt;e.name="surroundings";const t=Mx(20260905),n=T=>T[Math.floor(t()*T.length)%T.length],i=(T,A)=>T+t()*(A-T),r=new Map,o=(T,A,P)=>{let _=r.get(T);_||(_={material:A,meshes:[]},r.set(T,_)),_.meshes.push(P)},a=(T,A)=>{const P=Math.floor(t()*4)%4,_=i(Math.max(T,ga),A),x=i(-A,A);return P===0?{x,z:-_}:P===1?{x,z:_}:P===2?{x:-_,z:x}:{x:_,z:x}},l=(T,A,P)=>Math.abs(T)-P>ga||Math.abs(A)-P>ga,c=[["siding",s.siding],["sidingDark",s.sidingDark],["brick",s.brick],["brickPale",s.brickPale],["slab",s.slab]];for(let T=0;T<54;T++){const A=a(88,142),P=i(14,40),_=i(12,34),x=i(6,16);if(!l(A.x,A.z,Math.max(P,_)/2))continue;const[L,F]=n(c),B=Math.round(t()*4)*(Math.PI/2)+i(-.12,.12);o(L,F,ce(P,x,_,F,A.x,x/2,A.z,{tile:4.5,rotY:B})),o("slabDark",s.slabDark,ce(P+.6,.5,_+.6,s.slabDark,A.x,x+.2,A.z,{tile:6,rotY:B}));const j=Math.floor(i(1,4));for(let K=0;K<j;K++){const $=i(1.6,3.4);o("rust",s.rust,ce($,i(1.2,2.6),$,s.rust,A.x+i(-P/3,P/3),x+1.2,A.z+i(-_/3,_/3),{tile:1.4,rotY:B}))}}for(let T=0;T<14;T++){const A=a(92,146),P=i(3.2,7),_=i(9,22);l(A.x,A.z,P)&&(o("rust",s.rust,ut(P,P,_,s.rust,A.x,_/2,A.z,12,{})),o("slabDark",s.slabDark,ut(P*1.05,P*1.05,.6,s.slabDark,A.x,_,A.z,12)))}const h=[s.container,s.rust,s.sidingDark];for(let T=0;T<34;T++){const A=i(88,126)*(t()<.5?-1:1),P=i(-64,34),_=Math.floor(i(1,4)),x=t()<.5?0:Math.PI/2;for(let L=0;L<_;L++){const F=n(h),B=F===s.container?"container":F===s.rust?"rust":"sidingDark";o(B,F,ce(12.2,2.6,2.9,F,A,1.3+L*2.62,P,{tile:2.2,rotY:x}))}}const u=[["facadeA",s.facadeA],["facadeB",s.facadeB],["facadeC",s.facadeC]];for(let T=0;T<64;T++){const A=a(158,218),P=i(16,34),_=i(16,30),x=i(18,52),[L,F]=n(u),B=Math.round(t()*4)*(Math.PI/2);if(o(L,F,ce(P,x,_,F,A.x,x/2,A.z,{tile:Nh,rotY:B})),o("slabDark",s.slabDark,ce(P+1,.9,_+1,s.slabDark,A.x,x+.4,A.z,{tile:6,rotY:B})),t()<.55){const j=i(4,8);o("slab",s.slab,ce(j,i(2.4,4.2),j,s.slab,A.x+i(-P/4,P/4),x+2.2,A.z+i(-_/4,_/4),{tile:3,rotY:B}))}}for(let T=0;T<62;T++){const A=a(232,305),P=i(18,40),_=i(40,96),x=t()<.45?s.facadeB:s.slabDark,L=x===s.facadeB?"facadeB":"slabDark";o(L,x,ce(P,_,P*i(.7,1.2),x,A.x,_/2,A.z,{tile:Nh,rotY:t()*Math.PI}))}const d=[],f=[{x:-118,z:-126,h:82,r:4.6},{x:-86,z:-146,h:64,r:3.6}];for(const T of f){o("brickPale",s.brickPale,ut(T.r*.72,T.r,T.h,s.brickPale,T.x,T.h/2,T.z,14,{}));for(let A=0;A<3;A++)o("hazardBand",s.vanBody,ut(T.r*.75,T.r*.75,3.2,s.vanBody,T.x,T.h-6-A*8,T.z,14));d.push(new E(T.x,T.h+1.2,T.z))}{for(let x=0;x<10;x++){const L=x/10,F=(x+1)/10,B=K=>15-Math.sin(K*Math.PI*.86)*7.4,j=58/10;o("slab",s.slab,ut(B(F),B(L),j,s.slab,-152,j*(x+.5),-78,20,{}))}d.push(new E(-152,59,-78))}{o("rust",s.rust,ut(16,16,26,s.rust,128,13,-112,18,{})),o("slabDark",s.slabDark,ut(16.4,16.4,1,s.slabDark,128,26,-112,18));for(let P=0;P<8;P++){const _=P/8*Math.PI*2;o("rust",s.rust,ce(.7,28,.7,s.rust,128+Math.cos(_)*16.8,14,-112+Math.sin(_)*16.8,{tile:2}))}d.push(new E(128,27.5,-112))}{for(const _ of[-11,11])for(const x of[-1,1])o("rust",s.rust,ce(1.5,26,1.5,s.rust,112+x*13,26/2,20+_,{tile:2.4}));o("rust",s.rust,ce(40,2.2,3.2,s.rust,112,26+1.1,9,{tile:3})),o("rust",s.rust,ce(40,2.2,3.2,s.rust,112,26+1.1,31,{tile:3})),o("rust",s.rust,ce(4.2,3.4,26,s.rust,112,26+3.4,20,{tile:2.6})),d.push(new E(112,26+5.6,20))}{o("slab",s.slab,ce(300,2.4,13,s.slab,0,13,124,{tile:7})),o("slabDark",s.slabDark,ce(300,1.1,.9,s.slabDark,0,14.8,124-6.6,{tile:4})),o("slabDark",s.slabDark,ce(300,1.1,.9,s.slabDark,0,14.8,124+6.6,{tile:4}));for(let A=-138;A<=138;A+=24)o("slab",s.slab,ce(3.4,12,3.4,s.slab,A,6,124,{tile:3}))}{o("rust",s.rust,ut(.5,1.6,96,s.rust,58,96/2,-168,8,{}));for(let _=1;_<=4;_++){const x=19.2*_,L=3.4*(1-_/6);o("rust",s.rust,ce(L*2,.4,.4,s.rust,58,x,-168,{tile:1.5})),o("rust",s.rust,ce(.4,.4,L*2,s.rust,58,x,-168,{tile:1.5}))}d.push(new E(58,97,-168))}for(const[T,A]of r){const P=xx(A.meshes,A.material,`district:${T}`);P&&(P.userData.heat=_e.cold,e.add(P))}const g=new ri(.9,8,6),v=new Bt({color:16726832,transparent:!0,opacity:1,fog:!1}),m=d.map(T=>{const A=new Ie(g,v.clone());return A.position.copy(T),A.userData.heat=_e.cold,e.add(A),A}),p=$u(),M=[];for(const T of f)for(let A=0;A<7;A++){const P=new _u({map:p,color:4604490,transparent:!0,opacity:0,depthWrite:!1,fog:!0}),_=new Lf(P);_.layers.set(In.ATMOSPHERE),_.renderOrder=4,e.add(_),M.push({sprite:_,base:new E(T.x,T.h,T.z),offset:A/7,speed:i(.03,.05),drift:i(9,16),size:i(14,22)})}let S=0;return{group:e,animate:(T,A)=>{S+=A;const P=Math.max(0,Math.sin(S*1.6));for(let _=0;_<m.length;_++){const x=m[_].material;x.opacity=.12+P*P*.88}for(const _ of M){const x=(_.offset+S*_.speed)%1,L=x*46;_.sprite.position.set(_.base.x+x*_.drift,_.base.y+3+L,_.base.z+x*_.drift*.35);const F=_.size*(.5+x*1.5);_.sprite.scale.set(F,F,1),_.sprite.material.opacity=Math.min(1,x*6)*(1-x)*.34}},dispose:()=>{g.dispose(),v.dispose(),e.traverse(T=>{const A=T;if(A.isSprite){A.material?.dispose();return}T.geometry?.dispose()}),e.clear()}}}class Tx extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Vx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=nr.extractUrlBase(e);o=nr.resolveURL(c,this.path)}else o=nr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new xo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ju){try{o[Je.KHR_BINARY_GLTF]=new Wx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new Ax;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Xx(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new qx;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new Yx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function wx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ex{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wl(h),c.distance=u;break;case"spot":c=new Ru(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ax{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class Rx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Cx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}}class Px{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Lx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}}class Nx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Fx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}}class kx{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ox{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Bx{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class zx{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Hx{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Gx{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Vx{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Xe,m=new E,p=new Si,M=new E(1,1,1),S=new Ff(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,v.compose(m,p,M));for(const y in l)if(y==="_COLOR_0"){const R=l[y];S.instanceColor=new fl(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Tt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ju="glTF",qs=12,Fh={JSON:1313821514,BIN:5130562};class Wx{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ju)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qs,r=new DataView(e,qs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Fh.JSON){const c=new Uint8Array(e,qs+o,a);this.content=n.decode(c)}else if(l===Fh.BIN){const c=qs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=xl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=xl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ms[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},a,c,Kt,d)})})}}class qx{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Yx{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Qu extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,M=1-m,S=p-d+u;for(let y=0;y!==a;y++){const R=o[v+y+a],T=o[v+y+l]*h,A=o[g+y+a],P=o[g+y]*h;r[y]=M*R+S*T+m*A+p*P}return r}}const jx=new Si;class Kx extends Qu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return jx.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kh={9728:on,9729:rn,9984:Jh,9985:io,9986:Ks,9987:Qn},Oh={33071:xi,33648:fo,10497:ln},va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$x={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},_a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),s.DefaultMaterial}function Di(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Qx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ey(s){let e;const t=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xa(t.attributes):e=s.indices+":"+xa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xa(s.targets[n]);return e}function xa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function yl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ty(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ny=new Xe;class iy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new xp(this.options.manager):this.textureLoader=new Tp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Di(r,a,i),Hn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(nr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=va[i.type],a=ms[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Mt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=va[i.type],c=ms[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(M);S||(v=new c(a,p*f,i.count*f/h),S=new vu(v,f/h),t.cache.add(M,S)),m=new dr(S,l,d%f/h,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),m=new Mt(v,l,g);if(i.sparse!==void 0){const p=va.SCALAR,M=ms[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new M(o[1],S,i.sparse.count*p),T=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=R.length;A<P;A++){const _=R[A];if(m.setX(_,T[A*l]),l>=2&&m.setY(_,T[A*l+1]),l>=3&&m.setZ(_,T[A*l+2]),l>=4&&m.setW(_,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=kh[d.magFilter]||rn,h.minFilter=kh[d.minFilter]||Qn,h.wrapS=Oh[d.wrapS]||ln,h.wrapT=Oh[d.wrapT]||ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==rn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new zt(v);m.needsUpdate=!0,d(m)}),t.load(nr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Hn(u,o),u.userData.mimeType=o.mimeType||ty(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new kl,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Fl,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const u=i[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xt);const h=r.alphaMode||_a.OPAQUE;if(h===_a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_a.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bt){const u=r.emissiveFactor;a.emissive=new xe().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&o!==Bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Hn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Di(i,u,r),u})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=ey(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bh(new Pt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Zx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=o[f];let p;const M=c[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new If(v,M):new Ie(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?p.geometry=Uh(p.geometry,ou):m.mode===yn.TRIANGLE_FAN&&(p.geometry=Uh(p.geometry,ul));else if(m.mode===yn.LINES)p=new zf(v,M);else if(m.mode===yn.LINE_STRIP)p=new Mo(v,M);else if(m.mode===yn.LINE_LOOP)p=new Hf(v,M);else if(m.mode===yn.POINTS)p=new Ol(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Qx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),m.extensions&&Di(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Di(i,u[0],r),u[0];const d=new rt;r.extensions&&Di(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(sf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new To(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ul(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let S=0,y=d.length;S<y;S++){const R=d[S],T=f[S],A=g[S],P=v[S],_=m[S];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const x=n._createAnimationTracks(R,T,A,P,_);if(x)for(let L=0;L<x.length;L++)p.push(x[L])}const M=new dp(r,void 0,p);return Hn(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ny)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new yu:c.length>1?h=new rt:c.length===1?h=c[0]:h=new Tt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Hn(h,r),r.extensions&&Di(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new rt;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&Di(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Dn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(vi[r.path]){case vi.weights:c=Ms;break;case vi.rotation:c=Ss;break;case vi.translation:case vi.scale:c=Ts;break;default:switch(n.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=Ts;break}break}const h=i.interpolation!==void 0?$x[i.interpolation]:cr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+vi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ss?Kx:Qu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sy(s,e,t){const n=e.attributes,i=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const h=yl(ms[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=yl(ms[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=xl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Hn(s,e),sy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Jx(s,e.targets,t):s})}const ya=new WeakMap;class ry extends Gi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new xo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,vt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Kt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ya.has(e)){const l=ya.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),ya.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Pt;e.index&&t.setIndex(new Mt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Mt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==vt)return;const n=new xe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),et.colorSpaceToWorking(n,vt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new xo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=oy.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function oy(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(v=>v.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let M,S;if(c.useUniqueIDs)S=h[m],M=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[h[m]]),S===-1)continue;M=a.GetAttribute(d,S)}const y=i(o,a,d,m,p,M);m==="color"&&(y.vertexColorSpace=c.vertexColorSpace),v.attributes.push(y)}return g===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,v=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(v);a.GetAttributeDataArrayForAllPoints(l,u,m,v,p);const M=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:M,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const ba={};class ay{loader;cache=new Map;pending=new Map;getLoader(){if(!this.loader){this.loader=new Tx;const e=new ry;e.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),this.loader.setDRACOLoader(e)}return this.loader}has(e){return ba[e]!==void 0}async preload(){const e=Object.keys(ba);await Promise.all(e.map(t=>this.load(t)))}async load(e){const t=ba[e];if(!t)return null;if(this.cache.has(e))return this.cache.get(e);if(this.pending.has(e))return this.pending.get(e);const n=this.getLoader().loadAsync(t.url).then(i=>{const r=i.scene;return this.normalise(r,t),r.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.cache.set(e,r),r}).catch(i=>(console.warn(`[ModelRegistry] не удалось загрузить ${e} (${t.url}):`,i),null));return this.pending.set(e,n),n}instantiate(e){const t=this.cache.get(e);return t?t.clone(!0):null}normalise(e,t){t.yawOffset&&(e.rotation.y=t.yawOffset);const n=new mn().setFromObject(e),i=n.getSize(new E);if(t.targetHeight&&i.y>1e-4){const o=t.targetHeight/i.y;e.scale.multiplyScalar(o),n.setFromObject(e)}const r=n.getCenter(new E);e.position.x-=r.x,e.position.z-=r.z,e.position.y-=t.groundAlign===!1?r.y:n.min.y}dispose(){for(const e of this.cache.values())e.traverse(t=>{const n=t;n.geometry?.dispose();const i=n.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i?.dispose()});this.cache.clear(),this.pending.clear()}}const Es=new ay,Jt=13,Bn=.7,Ma=5,eo=60;function ly(s){const e=new rt;e.name="level01";const t=[],n=[],i=new Map,r=[];let o=0;const a=(I,U="solid",Y,V=!0)=>{const ie={box:I,kind:U,id:Y??`col${o++}`,enabled:V};return t.push(ie),ie},l=(I,U="solid",Y=!0)=>(e.add(I),I.updateWorldMatrix(!0,!1),a(new mn().setFromObject(I),U),Y&&n.push(I),I),c=I=>(e.add(I),I),h=yx();e.add(h);const u=new yp(7770292,4864816,1.85);e.add(u);const d=new lo(16766120,2.3);d.position.set(48,42,-56),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),d.shadow.camera.near=1,d.shadow.camera.far=180,d.shadow.camera.left=-70,d.shadow.camera.right=70,d.shadow.camera.top=70,d.shadow.camera.bottom=-70,d.shadow.bias=-6e-4,d.shadow.normalBias=.035,e.add(d),e.add(d.target),d.target.position.set(0,0,0);const f=new lo(10335452,.95);f.position.set(-34,30,62),e.add(f);const g=new lo(16751186,.4);g.position.set(10,-18,-30),e.add(g);const v=new si(760,760,1,1);v.rotateX(-Math.PI/2),r.push(v);const m=new Ie(v,s.asphalt);m.receiveShadow=!0,m.userData.heat=_e.cold,m.name="ground",e.add(m);const p=ce(84,.14,54,s.concrete,0,.07,-14,{tile:6,cast:!1});p.receiveShadow=!0,e.add(p);const M=Sx(s);e.add(M.group);const S=ce(16,.1,210,s.asphalt,0,.05,92,{tile:9,cast:!1});S.receiveShadow=!0,e.add(S);for(let I=20;I<190;I+=9){const U=ce(.36,.02,4.4,s.paint,0,.13,I,{tile:2,cast:!1});U.receiveShadow=!1,c(U)}for(const I of[-7.2,7.2])c(ce(.28,.02,200,s.paint,I,.13,96,{tile:40,cast:!1}));for(let I=0;I<4;I++)c(ce(.22,.02,9,s.paint,-13+I*4.6,.16,44,{tile:6,cast:!1}));const y={tile:3.2,heat:_e.warm};l(ce(27,Jt,Bn,s.siding,-18.5,Jt/2,6,y)),l(ce(27,Jt,Bn,s.siding,18.5,Jt/2,6,y)),l(ce(Ma*2+.8,5,Bn,s.siding,0,10.5,6,y)),l(ce(Bn,Jt,42,s.siding,-32,Jt/2,-15,y)),l(ce(Bn,Jt,42,s.siding,32,Jt/2,-15,y)),l(ce(64,Jt,Bn,s.siding,0,Jt/2,-36,y)),l(ce(24,Jt,Bn,s.concreteWall,-20,Jt/2,-16,{tile:3,heat:_e.warm})),l(ce(22,Jt,Bn,s.concreteWall,21,Jt/2,-16,{tile:3,heat:_e.warm})),c(ce(3.2,4.5,Bn+.05,s.charred,-6.4,10.6,-16,{tile:2,rotZ:.14,heat:_e.ember})),c(ce(2.4,3.2,Bn+.05,s.charred,9.2,11.2,-16,{tile:2,rotZ:-.2,heat:_e.ember})),l(ce(64,.7,20,s.roof,0,Jt+.35,-26,{tile:4,heat:_e.warm}));const R=[[-22,11.4,-14.4,-.42,.1],[-4,12.1,-14.8,.34,-.16],[16,11,-14.2,-.55,.22],[27,12.4,-15,.28,.08]];for(const[I,U,Y,V,ie]of R)c(ce(7.5,.45,5.5,s.charred,I,U,Y,{tile:3,rotX:V,rotZ:ie,heat:_e.ember}));for(const I of[-1,1])l(ce(.7,8,1,s.hazard,I*(Ma+.35),4,6,{tile:2,heat:_e.warm}),"solid",!1);c(ce(Ma*2+1.4,.55,1.1,s.hazard,0,8.05,6,{tile:2,heat:_e.warm}));const T=new rt,A=Es.instantiate("building.annex");if(A)A.position.set(-15,0,-8),T.add(A);else{T.add(ce(10,5,10,s.sidingDark,-15,2.5,-8,{tile:2.6,heat:_e.warm})),T.add(ce(10.6,.35,10.6,s.concreteWall,-15,5.15,-8,{tile:2.6,heat:_e.warm}));for(const[I,U,Y,V]of[[0,-5.1,10.6,.35],[0,5.1,10.6,.35],[-5.1,0,.35,10.6],[5.1,0,.35,10.6]])T.add(ce(Y,.45,V,s.concreteWall,-15+I,5.55,-8+U,{tile:2,heat:_e.warm}));T.add(ce(1.6,1,1.6,s.rust,-18.2,5.8,-11,{tile:1.2,heat:_e.machine})),T.add(ut(.45,.45,1.4,s.rust,-11.8,6,-4.9,12,{heat:_e.machine}));for(let I=0;I<9;I++)T.add(ut(.05,.05,.7,s.rust,-10.15,.6+I*.55,-8,6,{rotZ:Math.PI/2}));T.add(ce(.12,5.4,.12,s.rust,-10.15,2.9,-8.38,{tile:1})),T.add(ce(.12,5.4,.12,s.rust,-10.15,2.9,-7.62,{tile:1}))}e.add(T),T.updateWorldMatrix(!0,!0),a(pn(-15,2.75,-8,10.7,5.5,10.7)),n.push(T);const P=[[14,0,-6,.14],[19.5,0,-13.5,-.32],[14.2,2.62,-6.2,.09],[-3,0,-25.5,1.42]];for(const[I,U,Y,V]of P){const ie=ce(6.2,2.55,2.6,s.container,I,U+1.28,Y,{tile:2.2,rotY:V,heat:_e.warm});l(ie);for(let de=-2;de<=2;de++){const ne=ce(.12,2.4,2.66,s.rust,0,0,0,{tile:1.2,heat:_e.warm});ne.position.set(de*1.2,0,0),ie.add(ne)}}for(const[I,U,Y,V]of[[6,-3,.3,3],[-2,-9,-.5,2],[24,-3,.9,4],[-22,-20,.2,3]]){for(let ie=0;ie<V;ie++)c(ce(1.2,.16,1,s.wood,I+ie*.04,.22+ie*.19,U,{tile:.8,rotY:Y}));c(ce(1,.9,.85,s.cardboard,I,.22+V*.19+.45,U,{tile:.9,rotY:Y}))}for(const[I,U]of[[8.5,-18],[9.6,-19.2],[-24,-6]]){const Y=ut(.42,.42,1.1,s.rust,I,.55,U,14,{heat:_e.warm});l(Y,"solid",!1)}for(const[I,U,Y]of[[-8,-15.5,3.2],[11,-15,2.6],[24,-16.5,2.2],[-19,-15.2,2]]){const V=new hs(Y,Y*.55,9,1);r.push(V);const ie=new Ie(V,s.charred);ie.position.set(I,Y*.26,U),ie.rotation.y=Math.random()*Math.PI,ie.castShadow=!0,ie.receiveShadow=!0,ie.userData.heat=_e.ember,e.add(ie),a(pn(I,Y*.28,U,Y*1.7,Y*.6,Y*1.7))}const _=52,x=-50,L=62,F=3.1,B=9,j=new rt,K=(I,U,Y,V)=>{const ie=Y-I,de=V-U,ne=Math.hypot(ie,de);if(ne<.5)return;const he=(I+Y)/2,De=(U+V)/2,be=Math.atan2(ie,de);j.add(ce(.35,.6,ne,s.concreteWall,he,.3,De,{tile:2,rotY:be}));const pe=Math.abs(ie)>Math.abs(de);a(pn(he,F/2,De,pe?ne:.5,F,pe?.5:ne));const Fe=ce(.06,F-.6,ne,s.chainlink,he,.6+(F-.6)/2,De,{tile:.6,rotY:be,cast:!1});j.add(Fe),j.add(ce(.1,.1,ne,s.rust,he,F,De,{tile:1,rotY:be}));const N=Math.max(2,Math.round(ne/4));for(let re=0;re<=N;re++){const ue=re/N;j.add(ut(.09,.09,F+.25,s.rust,I+ie*ue,(F+.25)/2,U+de*ue,8,{}))}};K(-_,x,-_,L),K(_,x,_,L),K(-_,x,_,x),K(-_,L,-B,L),K(B,L,_,L);for(const I of[-1,1])j.add(ce(.12,F,6.4,s.chainlink,I*(B+2.6),F/2,L-2.8,{tile:.6,rotY:I*.42,cast:!1})),j.add(ut(.12,.12,F+.4,s.rust,I*B,(F+.4)/2,L,8));e.add(j);const $=[],te=hx(),q=new si(1,1);q.rotateX(-Math.PI/2),r.push(q);const fe=new Bt({map:te,transparent:!0,depthWrite:!1,blending:ai,opacity:.5,fog:!0}),ve=new Bt({color:16767400,transparent:!0,opacity:1,depthWrite:!1,blending:ai,side:Xt,fog:!0,vertexColors:!0}),Ae=(I,U)=>{const Y=new hs(I,U,14,6,!0),V=Y.attributes.position,ie=new Float32Array(V.count*4);for(let de=0;de<V.count;de++){const ne=V.getY(de)/U+.5,he=.008+Math.pow(ne,2.2)*.075;ie[de*4]=1,ie[de*4+1]=1,ie[de*4+2]=1,ie[de*4+3]=he}return Y.setAttribute("color",new Mt(ie,4)),Y};for(const[I,U]of[[-38,-30],[38,-30],[-38,22],[38,22],[-26,52],[26,52]]){const V=ut(.22,.34,15,s.rust,I,7.5,U,10,{heat:_e.cold});e.add(V),a(pn(I,15/2,U,.8,15,.8));const ie=Math.atan2(-I,-U),de=new rt;de.position.set(I,15-.4,U),de.rotation.y=ie,de.add(ce(3.2,.18,.18,s.rust,0,0,0,{tile:1}));for(const N of[-1.1,1.1]){de.add(ce(.9,.55,.5,s.droneDark,N,-.35,0,{tile:.6}));const re=ce(.78,.42,.06,s.lampGlass.clone(),N,-.35,.28,{tile:.4,cast:!1});re.userData.heat=_e.machine,de.add(re),$.push(re)}e.add(de);const ne=Math.hypot(I,U),he=I-I/ne*9,De=U-U/ne*9,be=new Ie(q,fe);be.position.set(he,.06,De),be.scale.set(34,1,34),be.renderOrder=2,be.userData.heat=_e.cold,e.add(be);const pe=Ae(6,15);r.push(pe);const Fe=new Ie(pe,ve);Fe.position.set((I+he)/2,15/2,(U+De)/2),Fe.rotation.z=Math.atan2(I-he,15)*.6,Fe.rotation.x=-Math.atan2(U-De,15)*.6,Fe.renderOrder=3,Fe.userData.heat=_e.cold,e.add(Fe)}const Ge=new hs(.26,.72,10,1);r.push(Ge);for(const[I,U]of[[-4.5,38],[4.5,38],[-6.5,46],[6.5,46],[-5.5,50],[5.5,50],[-9,12],[9,12],[-11,16],[11,16]]){const Y=new Ie(Ge,s.droneAccent);Y.position.set(I,.36,U),Y.castShadow=!0,Y.userData.heat=_e.cold,e.add(Y),c(ce(.62,.05,.62,s.droneDark,I,.03,U,{tile:.4,cast:!1}))}{const I=new wu([new E(1.6,.09,41),new E(4.2,.09,34),new E(1,.09,27),new E(3.4,.09,20),new E(.8,.09,13)]),U=new _o(I,60,.09,6,!1);r.push(U);const Y=new Ie(U,s.droneAccent);Y.castShadow=!0,Y.receiveShadow=!0,Y.userData.heat=_e.cold,e.add(Y)}for(const[I,U,Y]of[[-9.5,30,1.1],[-12.5,33,.85],[21,30,1]]){const V=new rt;V.position.set(I,Y,U),V.rotation.z=Math.PI/2,V.add(ut(Y,Y,.12,s.wood,0,.42,0,14)),V.add(ut(Y,Y,.12,s.wood,0,-.42,0,14)),V.add(ut(Y*.45,Y*.45,.8,s.cable,0,0,0,12)),e.add(V),a(pn(I,Y,U,Y*2,Y*2,1.1))}for(const[I,U,Y]of[[-27,14,.2],[-27,18.4,-.1],[28,15,1.6]]){const V=ce(2.2,1.35,1.3,s.container,I,.68,U,{tile:1.2,rotY:Y,heat:_e.cold});l(V,"solid",!1),c(ce(2.24,.1,1.34,s.droneDark,I,1.4,U,{tile:1,rotY:Y}))}const tt=new mr(1,14);tt.rotateX(-Math.PI/2),r.push(tt);const ft=new mt({color:1053979,roughness:.06,metalness:.5,transparent:!0,opacity:.78});for(const[I,U,Y]of[[2.5,24,2.6],[-6,31,1.8],[8,33,2.1],[-3,17,1.5],[12.5,21,1.7],[-14,27,2.3],[5,44,1.4]]){const V=new Ie(tt,ft);V.position.set(I,.035,U),V.scale.set(Y,1,Y*.72),V.rotation.y=I*1.7,V.userData.heat=_e.cold,e.add(V)}const Ke=12.3,J=new rt;for(const I of[-1,1]){const U=ut(.19,.26,13.2,s.rust,I*17,6.6,24,10,{heat:_e.warm});J.add(U),J.add(ce(2.6,.16,.16,s.rust,I*17,Ke,24,{tile:1})),a(pn(I*17,6.6,24,.6,13.2,.6))}for(const[I,U]of[[-.9,11],[0,10.8],[.9,11]]){const Y=new Hl(new E(-17,Ke,24+I),new E(0,U*2-Ke,24+I),new E(17,Ke,24+I)),V=new _o(Y,24,.05,5,!1);r.push(V);const ie=new Ie(V,s.cable);ie.castShadow=!0,ie.userData.heat=_e.cold,J.add(ie)}e.add(J),a(pn(0,11.55,24,34,1.75,1.9),"wire","powerline");const Z=new rt;Z.position.set(0,0,42);const ye=Es.instantiate("vehicle.rescueVan"),ke=[];if(ye)Z.add(ye);else{Z.add(ce(3,1.45,2.5,s.vanBody,0,1.62,-3,{tile:1.6,heat:_e.machine})),Z.add(ce(2.86,.85,.18,s.glass,0,2.05,-4.22,{tile:1})),Z.add(ce(.18,.8,2,s.glass,-1.52,2,-3,{tile:1})),Z.add(ce(.18,.8,2,s.glass,1.52,2,-3,{tile:1})),Z.add(ce(3.1,2.5,5.4,s.vanBody,0,2.05,.9,{tile:1.8,heat:_e.machine})),Z.add(ce(3.16,.62,5.44,s.hazard,0,1.25,.9,{tile:1.4})),Z.add(ce(3.14,.16,5.44,s.vanTrim,0,3.24,.9,{tile:1.6})),Z.add(ce(2.7,.35,8.2,s.droneDark,0,.72,-.6,{tile:1.6}));for(const[I,U]of[[-1.5,-2.7],[1.5,-2.7],[-1.5,1.9],[1.5,1.9]])Z.add(ut(.52,.52,.34,s.tyre,I,.52,U,16,{rotZ:Math.PI/2})),Z.add(ut(.24,.24,.36,s.vanTrim,I,.52,U,12,{rotZ:Math.PI/2}));Z.add(ce(.12,2.3,1.9,s.vanBody,-2.05,2.05,3.3,{tile:1.4,rotY:-1.45})),Z.add(ce(.12,2.3,1.9,s.vanBody,2.05,2.05,3.3,{tile:1.4,rotY:1.45})),Z.add(ce(2.4,.14,3,s.droneDark,0,.92,5,{tile:1.2,heat:_e.machine})),Z.add(ce(2.44,.1,.24,s.hazard,0,1.02,6.42,{tile:1}));for(const I of[-1,1])Z.add(ut(.06,.06,.85,s.droneDark,I,.44,6.1,8));Z.add(ce(2.2,.12,.3,s.droneDark,0,3.42,-3.1,{tile:1}));for(const[I,U]of[[-.72,16724770],[.72,3377407]]){const Y=new sn(.52,.2,.26);r.push(Y);const V=new Ie(Y,new mt({color:U,emissive:U,emissiveIntensity:2.4,roughness:.4}));V.position.set(I,3.56,-3.1),V.userData.heat=_e.machine,ke.push(V),Z.add(V)}}const Le=new si(3,3.6);Le.rotateX(-Math.PI/2),r.push(Le);const $e=new Ie(Le,s.helipad);$e.position.set(0,3.34,.6),$e.receiveShadow=!0,$e.userData.heat=_e.machine,Z.add($e),e.add(Z),Z.updateWorldMatrix(!0,!0),n.push(Z),a(pn(0,1.9,42+.4,3.2,3.1,8.6)),a(pn(0,.9,47,2.5,.3,3.1));const Ft=new E(0,3.34,42.6),D={position:new E(0,1.35,47.2),yaw:Math.PI};for(const[I,U]of[[-3.4,46.4],[3.4,46.4],[-4.6,43],[4.6,43]]){const Y=new hs(.28,.72,10);r.push(Y);const V=new Ie(Y,new mt({color:16738848,roughness:.75}));V.position.set(I,.36,U),V.castShadow=!0,V.userData.heat=_e.cold,e.add(V),c(ce(.6,.05,.6,s.droneDark,I,.03,U,{tile:.5,cast:!1}))}for(const I of[-1,1]){const U=new rt;U.add(ut(.14,.18,8.5,s.rust,0,4.25,0,10,{heat:_e.warm})),U.add(ce(.16,.16,2.2,s.rust,0,8.4,I*-1,{tile:1,rotX:.12}));const Y=new sn(.7,.18,1.1);r.push(Y);const V=new Ie(Y,new mt({color:2764598,emissive:16768168,emissiveIntensity:1.5,roughness:.5}));V.position.set(0,8.28,I*-2),V.userData.heat=_e.machine,U.add(V),U.position.set(I*12,0,44),e.add(U),a(pn(I*12,4.25,44,.5,8.5,.5));const ie=new Wl(16766112,22,26,2);ie.position.set(I*12,8.1,44+I*-2),e.add(ie)}const _t=ce(11.5,.85,.85,s.charred,0,7.55,5.1,{tile:2,heat:_e.ember,name:"gateBeam"});e.add(_t);const He=[ce(.3,.7,.9,s.rust,-4.4,7.9,5.5,{tile:1}),ce(.3,.7,.9,s.rust,4.4,7.9,5.5,{tile:1})];He.forEach(I=>e.add(I));const Oe=a(pn(0,4.1,6.4,11.2,8.2,2.6),"soft","gateFireWall",!1),we=a(pn(0,.9,6.9,12.4,1.8,1.6),"solid","gateBeam",!1);i.set("gateBeam",new Dh({id:"gateBeam",object:_t,endPosition:new E(0,-7.1,1.8),endRotation:new Tn(.06,.11,.19),duration:1.15,impactAt:.86,colliderAfter:we.box,onImpact:()=>{we.enabled=!0,Oe.enabled=!0,He.forEach(I=>I.visible=!1)}}));const xt=ce(6,6.5,.6,s.concreteWall,8.5,9.6,-15.7,{tile:3,heat:_e.ember,name:"fallingWall"});e.add(xt);const Ee=a(pn(8.5,1,-12.6,6.4,2,6.4),"solid","fallenWall",!1);i.set("courtyardWall",new Dh({id:"courtyardWall",object:xt,endPosition:new E(.4,-9,3.1),endRotation:new Tn(-Math.PI/2+.14,.06,.1),duration:1.35,impactAt:.88,colliderAfter:Ee.box,onImpact:()=>{Ee.enabled=!0}}));const qe=new mn(new E(-eo,0,-eo+4),new E(eo,46,eo+14)),kt=[{id:"gate-a",group:"gate",position:new E(-3.1,.5,6.4),scale:2,objective:!0,startActive:!1,light:!0},{id:"gate-b",group:"gate",position:new E(.1,.5,6.4),scale:2.4,objective:!0,startActive:!1,light:!0},{id:"gate-c",group:"gate",position:new E(3.3,.5,6.4),scale:2,objective:!0,startActive:!1,light:!1},{id:"amb-1",group:"ambient",position:new E(13.5,.5,-7.2),scale:1.5,objective:!1,startActive:!0,light:!0},{id:"amb-2",group:"ambient",position:new E(-7,.5,-12.5),scale:1.2,objective:!1,startActive:!0,light:!0},{id:"amb-3",group:"ambient",position:new E(24.5,.5,-20),scale:1.7,objective:!1,startActive:!0,light:!1},{id:"amb-4",group:"ambient",position:new E(-2,13.8,-22),scale:1.4,objective:!1,startActive:!0,light:!1},{id:"amb-5",group:"ambient",position:new E(-24,.5,-18),scale:1,objective:!1,startActive:!0,light:!1}],Et=[{id:"storekeeper",position:new E(-15,5.4,-8),mass:78,facing:.6}],C={takeoff:new E(0,5.4,47.2),gate:new E(0,4.4,8.5),courtyard:new E(-15,8.2,-8),helipad:Ft.clone().setY(Ft.y+1.4)};$l(e);let b=0;return{root:e,colliders:t,cameraBlockers:n,spawn:D,helipad:{position:Ft,radius:1.9},fires:kt,survivors:Et,markers:C,destructibles:i,bounds:qe,animate:(I,U)=>{bx(h,I),M.animate(I,U),b+=U;for(let Y=0;Y<ke.length;Y++){const V=ke[Y].material,ie=Math.max(0,Math.sin(b*7+Y*Math.PI));V.emissiveIntensity=.35+ie*3.6}for(let Y=0;Y<$.length;Y++){const V=$[Y].material;V.opacity=.78+Math.sin(b*(11+Y*.7)+Y)*.09}},dispose:()=>{for(const I of r)I.dispose();M.dispose(),e.traverse(I=>{I.geometry?.dispose()}),e.clear()}}}class cy{constructor(e,t){this.opts=t,this.min.copy(e.min),this.max.copy(e.max);const n=new E;e.getSize(n);const i=new E;e.getCenter(i);const r=new sn(n.x,n.y,n.z);r.translate(i.x,i.y,i.z),this.material=new Ut({transparent:!0,depthWrite:!1,side:jt,blending:ai,fog:!1,uniforms:{uDrone:{value:new E},uTime:{value:0},uFade:{value:t.fadeDistance},uAlert:{value:0},uColor:{value:new xe(3655935)},uAlertColor:{value:new xe(16738858)}},vertexShader:`
        varying vec3 vWorld;
        varying vec3 vNormalW;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          vNormalW = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uDrone;
        uniform float uTime;
        uniform float uFade;
        uniform float uAlert;
        uniform vec3 uColor;
        uniform vec3 uAlertColor;
        varying vec3 vWorld;
        varying vec3 vNormalW;

        /**
         * Тонкая сетка постоянной экранной толщины. Деление на fwidth даёт
         * сглаживание: без него линии рябят на косых углах, а вблизи
         * расплываются в сплошную заливку.
         */
        float gridLine(vec2 p, float cell, float width) {
          vec2 q = p / cell;
          vec2 g = abs(fract(q - 0.5) - 0.5) / max(fwidth(q), vec2(1e-5));
          return 1.0 - smoothstep(0.0, width, min(g.x, g.y));
        }

        void main() {
          // Насколько дрон близко именно к этому месту стены: барьер горит
          // пятном вокруг точки сближения, а не всей плоскостью.
          float d = distance(vWorld, uDrone);
          float near = 1.0 - smoothstep(0.0, uFade * 1.35, d);
          if (near <= 0.004) discard;

          // Координаты вдоль поверхности: две оси, не совпадающие с нормалью.
          vec2 uv = abs(vNormalW.x) > 0.5 ? vWorld.zy : vWorld.xy;

          float coarse = gridLine(uv, 5.0, 1.7);
          float fine = gridLine(uv, 1.25, 1.1) * 0.3;
          float cells = max(coarse, fine);

          // Волна снизу вверх — стена «дышит», а не висит статичной сеткой.
          float sweep = 0.62 + 0.38 * sin(vWorld.y * 0.5 - uTime * 2.0);

          vec3 color = mix(uColor, uAlertColor, uAlert);
          float alpha = near * near * cells * sweep * (0.3 + uAlert * 0.7);

          gl_FragColor = vec4(color, alpha * 0.9);
        }
      `}),this.mesh=new Ie(r,this.material),this.mesh.name="boundary",this.mesh.layers.set(In.ATMOSPHERE),this.mesh.renderOrder=30,this.mesh.frustumCulled=!1,this.mesh.visible=!1}mesh;material;min=new E;max=new E;distance=1/0;proximity=0;distanceToWall(e){return Math.min(e.x-this.min.x,this.max.x-e.x,e.z-this.min.z,this.max.z-e.z)}update(e,t){if(this.distance=this.distanceToWall(t),this.proximity=1-Math.min(1,Math.max(0,this.distance)/this.opts.fadeDistance),this.mesh.visible=this.proximity>.001,!this.mesh.visible)return;const n=this.material.uniforms;n.uDrone.value.copy(t),n.uTime.value+=e,n.uAlert.value=Math.min(1,Math.max(0,(this.proximity-.45)/.55))}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const Ii=.78,to=.42;class hy{constructor(e){this.mat=e,this.stats=ju(),this.state={battery:this.stats.batteryCapacity,batteryMax:this.stats.batteryCapacity,foam:this.stats.foamTank,foamMax:this.stats.foamTank,hull:this.stats.hullMax,hullMax:this.stats.hullMax,payload:0};const t=Es.instantiate("drone.swift1");t?(this.body.add(t),this.buildWinch()):(this.buildAirframe(),this.buildWinch()),this.root.add(this.body),$l(this.root,_e.machine)}root=new rt;state;nozzleLocal=new E(0,-.06,.62);winchLocal=new E(0,-.16,-.04);body=new rt;rotors=[];blurDiscs=[];navLights=[];strobe;gimbal=new rt;searchlight;cable;basket=new rt;rotorSpin=0;rotorRpm=0;strobePhase=0;tiltPitch=0;tiltRoll=0;stats;buildAirframe(){const e=this.mat,t=ce(.52,.16,.78,e.droneShell,0,0,0,{tile:.5,heat:_e.machine});this.body.add(t);const n=new ri(.3,20,12,0,Math.PI*2,0,Math.PI/2);n.scale(1,.62,1.35);const i=new Ie(n,e.droneShell);i.position.y=.07,i.castShadow=!0,i.userData.heat=_e.machine,this.body.add(i),this.body.add(ce(.2,.035,.72,e.droneAccent,0,.24,0,{tile:.4,heat:_e.machine})),this.body.add(ce(.46,.04,.14,e.droneAccent,0,.2,-.28,{tile:.4,heat:_e.machine})),this.body.add(ce(.34,.13,.44,e.droneDark,0,-.13,-.05,{tile:.4,heat:_e.machine}));const r=new Bl(.11,.3,6,12);r.rotateX(Math.PI/2);const o=new Ie(r,e.droneAccent);o.position.set(0,-.05,.18),o.castShadow=!0,o.userData.heat=_e.machine,this.body.add(o),this.body.add(ut(.035,.05,.22,e.droneDark,0,-.06,.52,10,{rotX:Math.PI/2,heat:_e.machine}));const a=ut(.05,.05,.1,e.droneDark,0,-.12,.3,10,{heat:_e.machine});this.body.add(a);const l=new ri(.09,14,10),c=new Ie(l,e.droneDark);c.castShadow=!0,c.userData.heat=_e.machine;const h=new Mi(.045,.045,.03,12);h.rotateX(Math.PI/2);const u=new Ie(h,new mt({color:662052,roughness:.08,metalness:.9,emissive:667712,emissiveIntensity:.6}));u.position.z=.075,this.gimbal.add(c,u),this.gimbal.position.set(0,-.2,.3),this.body.add(this.gimbal),this.searchlight=new Ru(16773334,32,34,.55,.45,1.4),this.searchlight.position.set(0,-.16,.36),this.searchlight.target.position.set(0,-2.4,3.2),this.body.add(this.searchlight),this.body.add(this.searchlight.target);const d=[[1,1],[-1,1],[-1,-1],[1,-1]];for(const[v,m]of d){const p=v*Ii*.707,M=m*Ii*.707,S=ce(.07,.06,Ii,e.droneShell,p/2,0,M/2,{tile:.4,rotY:Math.atan2(p,M),heat:_e.machine});this.body.add(S),this.body.add(ut(.075,.09,.13,e.droneDark,p,.05,M,12,{heat:_e.machine})),this.body.add(ut(.055,.055,.05,e.droneAccent,p,.13,M,12,{heat:_e.machine}));const y=new rt;y.position.set(p,.17,M);for(const _ of[0,Math.PI]){const x=new sn(to,.012,.07);x.translate(to/2,0,0);const L=new Ie(x,e.droneDark);L.rotation.y=_,L.rotation.z=.16*(v*m>0?1:-1),L.castShadow=!0,L.userData.heat=_e.machine,y.add(L)}this.body.add(y),this.rotors.push(y);const R=new mr(to,24);R.rotateX(-Math.PI/2);const T=new Ie(R,e.rotorBlur.clone());T.position.set(p,.172,M),T.userData.heat=_e.machine,this.body.add(T),this.blurDiscs.push(T);const A=new tr(to+.04,.012,6,20,Math.PI);A.rotateX(-Math.PI/2);const P=new Ie(A,e.droneShell);P.position.set(p,.2,M),P.rotation.y=Math.atan2(-p,-M),P.userData.heat=_e.machine,this.body.add(P)}for(const v of[-1,1])this.body.add(ce(.045,.045,.66,e.droneDark,v*.24,-.31,.02,{tile:.4,heat:_e.machine})),this.body.add(ce(.04,.2,.04,e.droneDark,v*.24,-.21,.24,{tile:.3,heat:_e.machine})),this.body.add(ce(.04,.2,.04,e.droneDark,v*.24,-.21,-.2,{tile:.3,heat:_e.machine}));const f=new ri(.035,8,6),g=(v,m,p)=>{const M=new Ie(f,new mt({color:v,emissive:v,emissiveIntensity:2.2,roughness:.3}));return M.position.set(m,.02,p),M.userData.heat=_e.machine,this.body.add(M),M};this.navLights.push(g(3407718,Ii*.707,Ii*.707)),this.navLights.push(g(16724804,-Ii*.707,Ii*.707)),this.strobe=g(16777215,0,-.42)}buildWinch(){const e=this.mat;this.body.add(ut(.07,.07,.16,e.droneDark,0,-.14,-.06,10,{rotZ:Math.PI/2,heat:_e.machine}));const t=new Mi(.012,.012,1,6);t.translate(0,-.5,0),this.cable=new Ie(t,e.cable),this.cable.position.copy(this.winchLocal),this.cable.visible=!1,this.cable.userData.heat=_e.cold,this.body.add(this.cable);const n=new Ie(new tr(.34,.025,6,18),e.droneAccent);n.rotation.x=Math.PI/2,n.userData.heat=_e.machine;const i=new Mi(.33,.33,.03,18),r=new Ie(i,e.droneDark);r.position.y=-.32,r.userData.heat=_e.machine;const o=new Ie(new tr(.34,.02,6,18),e.droneAccent);o.rotation.x=Math.PI/2,o.position.y=-.3,o.userData.heat=_e.machine,this.basket.add(n,o,r);for(let a=0;a<4;a++){const l=a/4*Math.PI*2,c=ut(.014,.014,.32,e.droneAccent,Math.cos(l)*.33,-.16,Math.sin(l)*.33,6,{heat:_e.machine});this.basket.add(c);const h=ut(.008,.008,.36,e.cable,Math.cos(l)*.17,.17,Math.sin(l)*.17,4,{rotZ:Math.cos(l)*.5,rotX:-Math.sin(l)*.5});this.basket.add(h)}this.basket.visible=!1,this.body.add(this.basket)}setCable(e){const t=e>.02;this.cable.visible=t,this.basket.visible=t,t&&(this.cable.scale.y=e,this.basket.position.set(this.winchLocal.x,this.winchLocal.y-e,this.winchLocal.z))}setSearchlight(e){this.searchlight&&(this.searchlight.intensity=e?32:0)}updateVisuals(e,t,n,i,r){const o=se.flight,a=t.clone().applyAxisAngle(new E(0,1,0),-n),l=Math.max(1,o.maxSpeed),c=Dt(a.z/l,-1,1)*o.maxTilt,h=-Dt(a.x/l,-1,1)*o.maxTilt;this.tiltPitch=lt(this.tiltPitch,r?c:0,o.tiltResponse,e),this.tiltRoll=lt(this.tiltRoll,r?h:0,o.tiltResponse,e),this.body.rotation.set(this.tiltPitch,0,this.tiltRoll),this.root.rotation.y=n,this.gimbal.rotation.x=-this.tiltPitch*.85;const u=r?Rn(26,46,it(i)):Rn(0,6,it(i));this.rotorRpm=lt(this.rotorRpm,u,4.5,e),this.rotorSpin+=this.rotorRpm*e;for(let g=0;g<this.rotors.length;g++){this.rotors[g].rotation.y=this.rotorSpin*(g%2===0?1:-1);const v=it((this.rotorRpm-8)/22);this.blurDiscs[g].material.opacity=v*.14,this.rotors[g].visible=v<.98}this.strobePhase+=e;const d=this.strobePhase%1.5,f=d<.05||d>.15&&d<.2?2.6:.04;this.strobe.material.emissiveIntensity=f;for(const g of this.navLights)g.material.emissiveIntensity=r?2:.8}get totalMass(){return se.mass.empty+this.state.payload}applyStats(e){this.stats=e,this.resetState()}resetState(){const e=this.stats;this.state.battery=this.state.batteryMax=e.batteryCapacity,this.state.foam=this.state.foamMax=e.foamTank,this.state.hull=this.state.hullMax=e.hullMax,this.state.payload=0,this.tiltPitch=0,this.tiltRoll=0,this.rotorRpm=0,this.setCable(0)}dispose(){this.root.traverse(e=>{e.geometry?.dispose()})}}class uy{position=new E;velocity=new E;yaw=0;landed=!0;grounded=!0;holdAltitude=0;throttle=0;supportY=0;anchorX=0;anchorZ=0;pilotIdle=!0;justTookOff=!1;justLanded=!1;boundaryBlocked=!1;stats=ju();wind=new E;updraft=new E;tmp=new E;closest=new E;normal=new E;impactCooldown=0;reset(e,t){this.position.copy(e),this.velocity.set(0,0,0),this.yaw=t,this.landed=!0,this.grounded=!0,this.holdAltitude=e.y,this.anchorX=e.x,this.anchorZ=e.z,this.supportY=e.y-se.flight.radius,this.throttle=0,this.justTookOff=!1,this.justLanded=!1,this.impactCooldown=0}setWind(e,t,n){this.wind.set(e,t,n)}setUpdraft(e,t,n){this.updraft.set(e,t,n)}speedFactor(e){const t=se.mass.speedPenaltyPerKg*this.stats.massPenaltyMul;return Dt(1-e*t,.32,1)}responseFactor(e){const t=se.mass.responsePenaltyPerKg*this.stats.massPenaltyMul;return Dt(1-e*t,.3,1)}climbFactor(e){const t=se.mass.climbPenaltyPerKg*this.stats.massPenaltyMul;return Dt(1-e*t,.18,1)}update(e,t,n,i,r){const o=se.flight;this.justTookOff=!1,this.justLanded=!1,this.impactCooldown=Math.max(0,this.impactCooldown-e);const a=this.speedFactor(n),l=this.responseFactor(n),c=this.climbFactor(n),h=Math.min(1,Math.hypot(t.moveX,t.moveY)),u=se.mass.empty+n>this.stats.maxTakeoff;if(this.pilotIdle=h<.15&&t.climb<.05,this.landed)if((t.climb>.08||h>.15)&&!u)this.landed=!1,this.justTookOff=!0,this.holdAltitude=this.position.y,this.anchorX=this.position.x,this.anchorZ=this.position.z;else{this.velocity.multiplyScalar(Math.exp(-12*e)),this.throttle=lt(this.throttle,Math.max(0,t.climb)*.5,6,e),this.yaw=vl(this.yaw,t.cameraYaw,o.yawResponse*.5,e);return}const d=Math.sin(t.cameraYaw),f=Math.cos(t.cameraYaw),g=o.maxSpeed*a;let v,m;if(h>.02)v=(t.moveY*d-t.moveX*f)*g,m=(t.moveY*f+t.moveX*d)*g,this.anchorX=this.position.x,this.anchorZ=this.position.z;else{const y=o.positionHoldMaxSpeed;v=Dt((this.anchorX-this.position.x)*o.positionHold,-y,y),m=Dt((this.anchorZ-this.position.z)*o.positionHold,-y,y)}const p=(h>.02?o.accelResponse:o.brakeResponse)*l;this.velocity.x=lt(this.velocity.x,v,p,e),this.velocity.z=lt(this.velocity.z,m,p,e);let M;Math.abs(t.climb)>.05?(M=t.climb*o.maxClimbSpeed*c,u&&(M=Math.min(M,-.6)),this.holdAltitude=this.position.y):(M=Dt((this.holdAltitude-this.position.y)*o.holdStrength,-o.maxClimbSpeed,o.maxClimbSpeed),u&&(M=-1.2)),this.velocity.y=lt(this.velocity.y,M,o.climbResponse,e),this.tmp.copy(this.wind).add(this.updraft).multiplyScalar(e),this.velocity.add(this.tmp),this.yaw=vl(this.yaw,t.cameraYaw,o.yawResponse,e),this.position.addScaledVector(this.velocity,e),this.position.y>o.maxAltitude&&(this.position.y=o.maxAltitude,this.velocity.y=Math.min(this.velocity.y,0),this.holdAltitude=Math.min(this.holdAltitude,o.maxAltitude)),this.clampToBounds(r,e),this.resolveCollisions(i);const S=it(.42+h*.3+Math.abs(this.velocity.y)/Math.max(1,o.maxClimbSpeed)*.35+n/Math.max(1,se.mass.maxTakeoff)*.5);this.throttle=lt(this.throttle,S,5,e)}clampToBounds(e,t){const n=se.flight.radius,i=se.boundary,r=e.min.x+n,o=e.max.x-n,a=e.min.z+n,l=e.max.z-n,c=Math.min(this.position.x-r,o-this.position.x,this.position.z-a,l-this.position.z);if(c<i.brakeDistance){const h=it(1-Math.max(0,c)/i.brakeDistance),u=i.pushStrength*h*h,d=i.pushMaxSpeed,f=(g,v,m,p)=>{const M=g-v,S=m-g;if(M<i.brakeDistance&&p<0){const y=it(1-Math.max(0,M)/i.brakeDistance);return lt(p,Dt(M*i.pushStrength,0,d),u+y*4,t)}if(S<i.brakeDistance&&p>0){const y=it(1-Math.max(0,S)/i.brakeDistance);return lt(p,-Dt(S*i.pushStrength,0,d),u+y*4,t)}return p};this.velocity.x=f(this.position.x,r,o,this.velocity.x),this.velocity.z=f(this.position.z,a,l,this.velocity.z)}this.boundaryBlocked=c<i.brakeDistance*.55,this.position.x<r?(this.position.x=r,this.velocity.x=Math.max(0,this.velocity.x)):this.position.x>o&&(this.position.x=o,this.velocity.x=Math.min(0,this.velocity.x)),this.position.z<a?(this.position.z=a,this.velocity.z=Math.max(0,this.velocity.z)):this.position.z>l&&(this.position.z=l,this.velocity.z=Math.min(0,this.velocity.z)),this.anchorX=Dt(this.anchorX,r,o),this.anchorZ=Dt(this.anchorZ,a,l)}resolveCollisions(e){const t=se.flight.radius;let n=!1,i=-1/0;for(let o=0;o<2;o++){for(const a of e){if(!a.enabled)continue;const l=a.box;this.closest.set(Dt(this.position.x,l.min.x,l.max.x),Dt(this.position.y,l.min.y,l.max.y),Dt(this.position.z,l.min.z,l.max.z)),this.normal.copy(this.position).sub(this.closest);const c=this.normal.lengthSq();if(c>=t*t)continue;const h=Math.sqrt(c);if(h<1e-5){this.pushOutOfBox(l,t),n=!0;continue}this.normal.divideScalar(h),this.position.addScaledVector(this.normal,t-h);const u=this.velocity.dot(this.normal);if(u<0){const d=-u,f=a.kind==="wire"?.1:se.flight.bounce;this.velocity.addScaledVector(this.normal,-u*(1+f)),o===0&&this.reportImpact(d,a.kind)}this.normal.y>.6&&(n=!0,i=Math.max(i,l.max.y))}if(this.position.y<t){const a=-this.velocity.y;this.position.y=t,this.velocity.y<0&&(this.velocity.y=0,o===0&&this.reportImpact(a,"ground")),n=!0,i=Math.max(i,0)}}this.grounded=n,n&&(this.supportY=i===-1/0?0:i);const r=this.velocity.length();!this.landed&&this.pilotIdle&&n&&r<1.1&&this.position.y-t<=this.supportY+.12&&(this.landed=!0,this.justLanded=!0,this.velocity.set(0,0,0),this.holdAltitude=this.position.y)}pushOutOfBox(e,t){const n=this.position.x-e.min.x,i=e.max.x-this.position.x,r=this.position.y-e.min.y,o=e.max.y-this.position.y,a=this.position.z-e.min.z,l=e.max.z-this.position.z,c=Math.min(n,i,r,o,a,l);c===o?this.position.y=e.max.y+t:c===r?this.position.y=e.min.y-t:c===i?this.position.x=e.max.x+t:c===n?this.position.x=e.min.x-t:c===l?this.position.z=e.max.z+t:this.position.z=e.min.z-t,this.velocity.multiplyScalar(.3)}reportImpact(e,t){if(this.impactCooldown>0||e<=se.hull.safeImpactSpeed)return;const n=t==="soft"?0:t==="wire"?1.15:1,i=(e-se.hull.safeImpactSpeed)*se.hull.impactDamagePerSpeed*n*this.stats.impactDamageMul;this.impactCooldown=.35,gt.emit("drone:impact",{speed:e,damage:i,kind:t})}}class uo{points;capacity;count=0;positions;velocities;colorStart;colorEnd;ages;lives;sizeStart;sizeEnd;alphas;drags;gravities;rotations;rotSpeeds;attrPosition;attrColor;attrSize;attrAlpha;attrRot;material;tmpColor=new xe;constructor(e,t,n={}){this.capacity=t,this.positions=new Float32Array(t*3),this.velocities=new Float32Array(t*3),this.colorStart=new Float32Array(t*3),this.colorEnd=new Float32Array(t*3),this.ages=new Float32Array(t),this.lives=new Float32Array(t),this.sizeStart=new Float32Array(t),this.sizeEnd=new Float32Array(t),this.alphas=new Float32Array(t),this.drags=new Float32Array(t),this.gravities=new Float32Array(t),this.rotations=new Float32Array(t),this.rotSpeeds=new Float32Array(t);const i=new Pt;this.attrPosition=new Mt(new Float32Array(t*3),3),this.attrColor=new Mt(new Float32Array(t*3),3),this.attrSize=new Mt(new Float32Array(t),1),this.attrAlpha=new Mt(new Float32Array(t),1),this.attrRot=new Mt(new Float32Array(t),1),this.attrPosition.setUsage(Us),this.attrColor.setUsage(Us),this.attrSize.setUsage(Us),this.attrAlpha.setUsage(Us),this.attrRot.setUsage(Us),i.setAttribute("position",this.attrPosition),i.setAttribute("aColor",this.attrColor),i.setAttribute("aSize",this.attrSize),i.setAttribute("aAlpha",this.attrAlpha),i.setAttribute("aRot",this.attrRot),i.setDrawRange(0,0),i.boundingSphere=new Nn(new E(0,8,-10),200);const r=n.fog??!1;this.material=new Ut({uniforms:bs.merge([r?me.fog:{},{uTexture:{value:e},uHalfHeight:{value:540}}]),vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        attribute float aRot;

        uniform float uHalfHeight;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vRot;

        #include <fog_pars_vertex>

        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vRot = aRot;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = max(1.0, aSize * projectionMatrix[1][1] * uHalfHeight / max(0.001, -mvPosition.z));

          #include <fog_vertex>
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uTexture;

        varying vec3 vColor;
        varying float vAlpha;
        varying float vRot;

        #include <fog_pars_fragment>

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float s = sin(vRot);
          float c = cos(vRot);
          uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c) + 0.5;

          vec4 tex = texture2D(uTexture, uv);
          if (tex.a * vAlpha < 0.004) discard;

          gl_FragColor = vec4(vColor * tex.rgb, tex.a * vAlpha);

          #include <fog_fragment>
        }
      `,transparent:!0,depthWrite:!1,depthTest:!0,blending:n.additive?ai:Bi,fog:r}),this.points=new Ol(i,this.material),this.points.frustumCulled=!1,this.points.layers.set(In.ATMOSPHERE),this.points.renderOrder=n.sortOrder??10}setViewportHeight(e){this.material.uniforms.uHalfHeight.value=e*.5}get active(){return this.count}spawn(e){const t=this.count<this.capacity?this.count++:this.oldestIndex(),n=t*3;this.positions[n]=e.x,this.positions[n+1]=e.y,this.positions[n+2]=e.z,this.velocities[n]=e.vx,this.velocities[n+1]=e.vy,this.velocities[n+2]=e.vz,this.colorStart[n]=e.color.r,this.colorStart[n+1]=e.color.g,this.colorStart[n+2]=e.color.b,this.colorEnd[n]=e.colorEnd.r,this.colorEnd[n+1]=e.colorEnd.g,this.colorEnd[n+2]=e.colorEnd.b,this.ages[t]=0,this.lives[t]=e.life,this.sizeStart[t]=e.size,this.sizeEnd[t]=e.sizeEnd,this.alphas[t]=e.alpha,this.drags[t]=e.drag,this.gravities[t]=e.gravity,this.rotations[t]=Math.random()*Math.PI*2,this.rotSpeeds[t]=e.rotSpeed}oldestIndex(){let e=0,t=-1;for(let n=0;n<this.count;n++){const i=this.ages[n]/this.lives[n];i>t&&(t=i,e=n)}return e}update(e){let t=0;for(;t<this.count;){if(this.ages[t]+=e,this.ages[t]>=this.lives[t]){this.swapRemove(t);continue}const n=t*3,i=Math.exp(-this.drags[t]*e);this.velocities[n]*=i,this.velocities[n+1]=this.velocities[n+1]*i+this.gravities[t]*e,this.velocities[n+2]*=i,this.positions[n]+=this.velocities[n]*e,this.positions[n+1]+=this.velocities[n+1]*e,this.positions[n+2]+=this.velocities[n+2]*e,this.rotations[t]+=this.rotSpeeds[t]*e;const r=this.ages[t]/this.lives[t];this.attrPosition.array[n]=this.positions[n],this.attrPosition.array[n+1]=this.positions[n+1],this.attrPosition.array[n+2]=this.positions[n+2],this.tmpColor.setRGB(this.colorStart[n]+(this.colorEnd[n]-this.colorStart[n])*r,this.colorStart[n+1]+(this.colorEnd[n+1]-this.colorStart[n+1])*r,this.colorStart[n+2]+(this.colorEnd[n+2]-this.colorStart[n+2])*r),this.attrColor.array[n]=this.tmpColor.r,this.attrColor.array[n+1]=this.tmpColor.g,this.attrColor.array[n+2]=this.tmpColor.b,this.attrSize.array[t]=this.sizeStart[t]+(this.sizeEnd[t]-this.sizeStart[t])*r;const o=Math.min(1,r*8)*(1-r)*(1-r*.35);this.attrAlpha.array[t]=this.alphas[t]*o,this.attrRot.array[t]=this.rotations[t],t++}this.points.geometry.setDrawRange(0,this.count),this.count>0&&(this.attrPosition.needsUpdate=!0,this.attrColor.needsUpdate=!0,this.attrSize.needsUpdate=!0,this.attrAlpha.needsUpdate=!0,this.attrRot.needsUpdate=!0)}swapRemove(e){const t=this.count-1;if(e!==t){const n=e*3,i=t*3;for(let r=0;r<3;r++)this.positions[n+r]=this.positions[i+r],this.velocities[n+r]=this.velocities[i+r],this.colorStart[n+r]=this.colorStart[i+r],this.colorEnd[n+r]=this.colorEnd[i+r];this.ages[e]=this.ages[t],this.lives[e]=this.lives[t],this.sizeStart[e]=this.sizeStart[t],this.sizeEnd[e]=this.sizeEnd[t],this.alphas[e]=this.alphas[t],this.drags[e]=this.drags[t],this.gravities[e]=this.gravities[t],this.rotations[e]=this.rotations[t],this.rotSpeeds[e]=this.rotSpeeds[t]}this.count--}clear(){this.count=0,this.points.geometry.setDrawRange(0,0)}dispose(){this.points.geometry.dispose(),this.material.dispose()}}class dy{group=new rt;fires=[];byId=new Map;bars=[];barGroup=new rt;flames;smoke;embers;time=0;flameHot=new xe(16766826);flameCool=new xe(16730642);smokeNear=new xe(4866104);smokeFar=new xe(9406592);emberHot=new xe(16765066);emberCool=new xe(10234376);constructor(e){const t=e==="low"?.45:e==="medium"?.7:1;this.flames=new uo(fx(),Math.round(900*t),{additive:!0,sortOrder:12}),this.smoke=new uo($u(),Math.round(1100*t),{fog:!0,sortOrder:8}),this.embers=new uo(Zu(),Math.round(320*t),{additive:!0,sortOrder:13}),this.group.add(this.smoke.points,this.flames.points,this.embers.points,this.barGroup),this.emissionScale=t}emissionScale;setViewportHeight(e){this.flames.setViewportHeight(e),this.smoke.setViewportHeight(e),this.embers.setViewportHeight(e)}load(e){this.dispose(!1),this.fires=[],this.byId.clear();for(const t of e){const n={spec:t,health:se.fire.health*t.scale,active:t.startActive,flameAccum:0,smokeAccum:0,emberAccum:0,sinceFoam:99,flickerSeed:Math.random()*100};if(t.light){const i=new Wl(16747056,0,34,2);i.position.copy(t.position).setY(t.position.y+t.scale*.9),this.group.add(i),n.light=i}this.fires.push(n),this.byId.set(t.id,n),this.bars.push(this.createBar(t))}}createBar(e){const t=new rt,n=1.9+e.scale*.4,i=.26,r=new Bt({color:724498,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}),o=new Ie(new si(n+.08,i+.08),r);o.renderOrder=24,t.add(o);const a=new Bt({color:16742954,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}),l=new si(n,i);l.translate(n/2,0,0);const c=new Ie(l,a);return c.position.x=-n/2,c.position.z=.001,c.renderOrder=25,t.add(c),t.position.copy(e.position),t.position.y+=2.3+e.scale*1.5,t.traverse(h=>h.layers.set(In.ATMOSPHERE)),t.visible=!1,this.barGroup.add(t),{root:t,fill:c,fillMat:a,frameMat:r,alpha:0}}igniteGroup(e){for(const t of this.fires)t.spec.group===e&&!t.active&&(t.active=!0,t.health=se.fire.health*t.spec.scale)}get all(){return this.fires.map(e=>({id:e.spec.id,group:e.spec.group,position:e.spec.position,active:e.active,objective:e.spec.objective}))}isGroupActive(e){return this.fires.some(t=>t.spec.group===e&&t.active)}countActive(e){return this.fires.filter(t=>t.active&&(e===void 0||t.spec.group===e)).length}nearestActive(e,t){let n=null,i=1/0;for(const r of this.fires){if(!r.active||t&&r.spec.group!==t)continue;const o=r.spec.position.distanceToSquared(e);o<i&&(i=o,n=r.spec.position)}return n}damageArea(e,t,n,i){let r=0;for(const o of this.fires){if(!o.active)continue;const a=o.spec.position.distanceTo(e),l=t+o.spec.scale*.8;if(a>l)continue;const c=1-a/l*.5,h=n*c*i;o.health-=h,o.sinceFoam=0,r+=h,o.health<=0&&(o.health=0,o.active=!1,o.light&&(o.light.intensity=0),gt.emit("fire:extinguished",{fireId:o.spec.id}),this.isGroupActive(o.spec.group)||gt.emit("fire:groupCleared",{group:o.spec.group}))}return r}getUpdraft(e,t){t.set(0,0,0);const n=se.fire;for(const i of this.fires){if(!i.active)continue;const r=i.spec.position,o=e.y-r.y;if(o<-1||o>n.thermalHeight*i.spec.scale)continue;const a=e.x-r.x,l=e.z-r.z,c=1+o/(n.thermalHeight*i.spec.scale)*1.6,h=n.thermalRadius*i.spec.scale*c,u=a*a+l*l;if(u>h*h)continue;const f=1-Math.sqrt(u)/h,g=1-it(o/(n.thermalHeight*i.spec.scale)),v=f*f*g*i.spec.scale;t.y+=n.thermalForce*v;const m=this.time*2.4+i.flickerSeed;t.x+=ds(m)*n.turbulence*v*.6,t.z+=ds(m+3.7)*n.turbulence*v*.6,t.y+=ds(m+7.1)*n.turbulence*v*.35}}getHeat(e){let t=0;for(const n of this.fires){if(!n.active)continue;const i=n.spec.position.distanceTo(e),r=se.fire.heatRadius*(.55+n.spec.scale*.45);i>r||(t+=(1-i/r)**2)}return Math.min(1.6,t)}getSmokeDensity(e){let t=0;for(const n of this.fires){if(!n.active)continue;const i=n.spec.position,r=e.x-i.x,o=e.z-i.z,a=e.y-i.y,l=Math.sqrt(r*r+o*o),c=10*(.6+n.spec.scale*.4),h=20*(.6+n.spec.scale*.4);if(l>c||a<-2||a>h)continue;const u=(1-l/c)*(1-it(a/h)*.55);t+=u*n.spec.scale*.55}return it(t)}update(e,t,n,i){this.time+=e;const r=this.emissionScale;i&&this.updateBars(e,i);for(const o of this.fires){if(!o.active){o.light&&o.light.intensity>0&&(o.light.intensity=Math.max(0,o.light.intensity-e*90));continue}o.sinceFoam+=e;const a=o.spec.scale,l=o.spec.position;o.sinceFoam>1.6&&o.health<se.fire.health*a&&(o.health=Math.min(se.fire.health*a,o.health+se.fire.regen*a*e));const c=it(o.health/(se.fire.health*a)),h=.72+ds(this.time*7+o.flickerSeed)*.28;for(o.light&&(o.light.intensity=26*a*c*h,o.light.distance=30*a),o.flameAccum+=e*30*a*c*r;o.flameAccum>=1;){o.flameAccum-=1;const u=a*.5;this.flames.spawn({x:l.x+Se(-u,u),y:l.y+Se(-.1,.3),z:l.z+Se(-u,u),vx:Se(-.5,.5)+t*.15,vy:Se(2.4,4.6)*a,vz:Se(-.5,.5)+n*.15,life:Se(.45,.95)*(.6+a*.4),size:Se(.7,1.4)*a,sizeEnd:Se(.15,.45)*a,color:this.flameHot,colorEnd:this.flameCool,alpha:Se(.5,.85)*c,drag:1.1,gravity:2.6,rotSpeed:Se(-2.5,2.5)})}for(o.smokeAccum+=e*13*a*(.35+c*.65)*r;o.smokeAccum>=1;){o.smokeAccum-=1;const u=a*.7;this.smoke.spawn({x:l.x+Se(-u,u),y:l.y+a*1.2,z:l.z+Se(-u,u),vx:Se(-.6,.6)+t*.8,vy:se.smoke.riseSpeed*Se(.75,1.3)*a,vz:Se(-.6,.6)+n*.8,life:Se(4.5,8.5),size:Se(1.6,3)*a,sizeEnd:Se(7,13)*a,color:this.smokeNear,colorEnd:this.smokeFar,alpha:Se(.24,.42),drag:.18,gravity:.55,rotSpeed:Se(-.5,.5)})}for(o.emberAccum+=e*5*a*c*r;o.emberAccum>=1;)o.emberAccum-=1,this.embers.spawn({x:l.x+Se(-a*.4,a*.4),y:l.y+Se(0,a*.6),z:l.z+Se(-a*.4,a*.4),vx:Se(-1.4,1.4)+t,vy:Se(3.5,7.5)*a,vz:Se(-1.4,1.4)+n,life:Se(1.4,3.2),size:Se(.06,.16),sizeEnd:Se(.02,.05),color:this.emberHot,colorEnd:this.emberCool,alpha:1,drag:.55,gravity:-1.6,rotSpeed:0})}this.flames.update(e),this.smoke.update(e),this.embers.update(e)}burstDust(e,t,n){for(let i=0;i<t;i++)this.smoke.spawn({x:e.x+Se(-n,n),y:e.y+Se(0,n*.5),z:e.z+Se(-n,n),vx:Se(-4,4),vy:Se(1.2,4.5),vz:Se(-4,4),life:Se(2.5,5),size:Se(1.4,3.2),sizeEnd:Se(5,9),color:new xe(10260870),colorEnd:new xe(7300702),alpha:Se(.3,.55),drag:1.5,gravity:.2,rotSpeed:Se(-1,1)})}burstSparks(e,t){for(let n=0;n<t;n++)this.embers.spawn({x:e.x,y:e.y,z:e.z,vx:Se(-5,5),vy:Se(.5,5),vz:Se(-5,5),life:Se(.4,1),size:Se(.05,.11),sizeEnd:.01,color:this.emberHot,colorEnd:this.emberCool,alpha:1,drag:1.8,gravity:-9,rotSpeed:0})}updateBars(e,t){for(let n=0;n<this.bars.length;n++){const i=this.bars[n],r=this.fires[n];if(!r)continue;const o=se.fire.health*r.spec.scale,a=it(r.health/o),l=r.active&&r.sinceFoam<1.5?1:0;if(i.alpha+=(l-i.alpha)*Math.min(1,e*(l>i.alpha?14:4)),i.alpha<.01){i.root.visible=!1;continue}i.root.visible=!0,i.root.quaternion.copy(t.quaternion),i.fill.scale.x=Math.max(1e-4,a),i.fillMat.opacity=i.alpha,i.frameMat.opacity=i.alpha*.72,i.fillMat.color.setRGB(1,.48+(1-a)*.45,.16+(1-a)*.7)}}reset(){this.flames.clear(),this.smoke.clear(),this.embers.clear();for(const e of this.fires)e.active=e.spec.startActive,e.health=se.fire.health*e.spec.scale,e.sinceFoam=99,e.light&&(e.light.intensity=0);for(const e of this.bars)e.alpha=0,e.root.visible=!1}dispose(e=!0){for(const t of this.fires)t.light&&this.group.remove(t.light);for(const t of this.bars)t.root.traverse(n=>n.geometry?.dispose()),t.fillMat.dispose(),t.frameMat.dispose(),this.barGroup.remove(t.root);this.bars=[],e&&(this.flames.dispose(),this.smoke.dispose(),this.embers.dispose())}}const zh=34;class fy{group=new rt;particles;guideLine;guideDots;guidePositions;impactRing;foamNear=new xe(16777215);foamFar=new xe(13162728);point=new E;vel=new E;impact=new E;hasImpact=!1;impactDistance=0;dpsMultiplier=1;guideVisible=!1;firing=!1;spawnAccum=0;emptyAnnounced=!1;constructor(e){const t=e==="low"?.5:e==="medium"?.75:1;this.particles=new uo(px(),Math.round(700*t),{fog:!0,sortOrder:11}),this.group.add(this.particles.points),this.emissionScale=t,this.guidePositions=new Float32Array(zh*3);const n=new Pt;n.setAttribute("position",new Mt(this.guidePositions,3)),n.setDrawRange(0,0),this.guideLine=new Mo(n,new Fl({color:8384767,transparent:!0,opacity:.65,depthTest:!0,depthWrite:!1})),this.guideLine.frustumCulled=!1,this.guideLine.layers.set(In.ATMOSPHERE),this.guideLine.renderOrder=20,this.guideLine.visible=!1,this.group.add(this.guideLine),this.guideDots=new Ol(n,new kl({map:Zu(),color:10483455,size:.34,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:ai})),this.guideDots.frustumCulled=!1,this.guideDots.layers.set(In.ATMOSPHERE),this.guideDots.renderOrder=20,this.guideDots.visible=!1,this.group.add(this.guideDots);const i=new Gl(.5,.78,28);i.rotateX(-Math.PI/2),this.impactRing=new Ie(i,new Bt({color:8384767,transparent:!0,opacity:.55,side:Xt,depthWrite:!1})),this.impactRing.layers.set(In.ATMOSPHERE),this.impactRing.renderOrder=21,this.impactRing.visible=!1,this.group.add(this.impactRing)}emissionScale;setViewportHeight(e){this.particles.setViewportHeight(e)}setGuideVisible(e){this.guideVisible=e}get isFiring(){return this.firing}update(e,t,n,i,r,o,a){const l=se.foam,c=t&&r.foam>0;if(t&&r.foam<=0&&!this.emptyAnnounced&&(this.emptyAnnounced=!0,gt.emit("foam:empty")),t||(this.emptyAnnounced=!1),c!==this.firing&&(this.firing=c,gt.emit(c?"foam:start":"foam:stop")),this.traceTrajectory(n,i,o),this.updateGuide(),c&&(r.foam=Math.max(0,r.foam-l.drainRate*e),this.emitStream(e,n,i),this.hasImpact)){const h=a.damageArea(this.impact,l.splashRadius,l.dps*this.dpsMultiplier,e);this.emitSplash(e,h>0)}this.particles.update(e)}traceTrajectory(e,t,n){const i=se.foam,r=.028;this.point.copy(e),this.vel.copy(t).multiplyScalar(i.muzzleSpeed),this.hasImpact=!1,this.impactDistance=0;let o=0,a=0;for(let l=0;l<zh;l++){this.guidePositions[a*3]=this.point.x,this.guidePositions[a*3+1]=this.point.y,this.guidePositions[a*3+2]=this.point.z,a++;const c=this.point.y;if(this.vel.y-=i.gravity*r,this.point.addScaledVector(this.vel,r),o+=this.vel.length()*r,this.point.y<=0){const h=c/Math.max(1e-4,c-this.point.y);this.point.lerpVectors(new E(this.guidePositions[(a-1)*3],c,this.guidePositions[(a-1)*3+2]),this.point,h),this.point.y=0,this.markImpact(o,a);return}for(const h of n)if(!(!h.enabled||h.kind==="wire"||h.kind==="soft")&&h.box.containsPoint(this.point)){this.markImpact(o,a);return}if(o>i.range){this.markImpact(o,a);return}}this.markImpact(o,a)}markImpact(e,t){this.impact.copy(this.point),this.impactDistance=e,this.hasImpact=!0,this.guidePointCount=t,this.guidePositions[(t-1)*3]=this.point.x,this.guidePositions[(t-1)*3+1]=this.point.y,this.guidePositions[(t-1)*3+2]=this.point.z}guidePointCount=0;updateGuide(){const e=this.guideVisible;if(this.guideLine.visible=e,this.guideDots.visible=e,this.impactRing.visible=e&&this.hasImpact,!!e&&(this.guideLine.geometry.setDrawRange(0,this.guidePointCount),this.guideDots.material.opacity=this.firing?1:.55,this.guideLine.geometry.attributes.position.needsUpdate=!0,this.guideLine.geometry.computeBoundingSphere(),this.hasImpact)){this.impactRing.position.copy(this.impact).addScaledVector(new E(0,1,0),.06);const t=.7+this.impactDistance*.02;this.impactRing.scale.setScalar(t);const n=this.impactRing.material;n.opacity=this.firing?.85:.42}}emitStream(e,t,n){const i=se.foam;for(this.spawnAccum+=e*i.particleRate*this.emissionScale;this.spawnAccum>=1;){this.spawnAccum-=1;const r=.055;this.particles.spawn({x:t.x,y:t.y,z:t.z,vx:n.x*i.muzzleSpeed+Se(-r,r)*i.muzzleSpeed,vy:n.y*i.muzzleSpeed+Se(-r,r)*i.muzzleSpeed,vz:n.z*i.muzzleSpeed+Se(-r,r)*i.muzzleSpeed,life:i.particleLife*Se(.7,1.15),size:Se(.25,.5),sizeEnd:Se(.8,1.5),color:this.foamNear,colorEnd:this.foamFar,alpha:Se(.5,.85),drag:.9,gravity:-i.gravity,rotSpeed:Se(-3,3)})}}splashAccum=0;emitSplash(e,t){for(this.splashAccum+=e*55*this.emissionScale;this.splashAccum>=1;)this.splashAccum-=1,this.particles.spawn({x:this.impact.x+Se(-.4,.4),y:this.impact.y+.1,z:this.impact.z+Se(-.4,.4),vx:Se(-3.2,3.2),vy:Se(.6,3.4),vz:Se(-3.2,3.2),life:Se(.7,1.8),size:Se(.4,.8),sizeEnd:Se(1.6,3),color:this.foamNear,colorEnd:t?new xe(12109522):this.foamFar,alpha:Se(.35,.7),drag:2.4,gravity:-3.5,rotSpeed:Se(-2,2)})}reset(){this.particles.clear(),this.firing=!1,this.spawnAccum=0,this.splashAccum=0,this.emptyAnnounced=!1,this.guideVisible=!1,this.guideLine.visible=!1,this.guideDots.visible=!1,this.impactRing.visible=!1}dispose(){this.particles.dispose(),this.guideLine.geometry.dispose(),this.guideLine.material.dispose(),this.guideDots.material.dispose(),this.impactRing.geometry.dispose(),this.impactRing.material.dispose()}}class py{root=new rt;spec;state="waiting";leftArm=new rt;rightArm=new rt;torso=new rt;head=new rt;time=0;coughTimer=3;coughing=0;boardProgress=0;boardFrom=new E;constructor(e,t){this.spec=e,this.root.position.copy(e.position),this.root.rotation.y=e.facing;const n=Es.instantiate("character.worker");n?this.root.add(n):this.build(t),$l(this.root,_e.human)}build(e){const t=(u,d,f,g)=>{const v=new sn(u,d,f);v.translate(0,-d/2,0);const m=new Ie(v,g);return m.castShadow=!0,m};for(const u of[-1,1]){const d=t(.14,.78,.16,e.cloth);d.position.set(u*.11,.82,0),this.root.add(d);const f=new Ie(new sn(.16,.09,.26),e.droneDark);f.position.set(u*.11,.045,.04),f.castShadow=!0,this.root.add(f)}const n=new Ie(new sn(.44,.6,.24),e.cloth);n.position.y=1.14,n.castShadow=!0,this.torso.add(n);const i=new Ie(new sn(.47,.44,.27),e.vest);i.position.y=1.16,i.castShadow=!0,this.torso.add(i);for(const u of[1.06,1.26]){const d=new Ie(new sn(.48,.055,.28),e.vanTrim);d.position.y=u,this.torso.add(d)}const r=new Ie(new ri(.13,14,10),e.skin);r.castShadow=!0;const o=new Ie(new ri(.135,14,10,0,Math.PI*2,0,Math.PI*.55),e.droneDark);o.position.y=.01,this.head.add(r,o),this.head.position.y=1.56,this.torso.add(this.head);const a=t(.12,.32,.12,e.cloth),l=t(.11,.32,.11,e.skin);l.position.y=-.32,this.leftArm.add(a,l),this.leftArm.position.set(-.27,1.4,0);const c=t(.12,.32,.12,e.cloth),h=t(.11,.32,.11,e.skin);h.position.y=-.32,this.rightArm.add(c,h),this.rightArm.position.set(.27,1.4,0),this.torso.add(this.leftArm,this.rightArm),this.root.add(this.torso)}get zoneCenter(){return this.spec.position}update(e,t){if(!(this.state==="onboard"||this.state==="delivered")){if(this.time+=e,this.state==="boarding"){this.updateBoarding(e);return}if(this.coughTimer-=e,this.coughTimer<=0&&(this.coughTimer=4.5+Math.random()*4,this.coughing=1.4),this.coughing=Math.max(0,this.coughing-e),this.coughing>0){const n=Math.sin(this.time*16)*.5+.5;this.torso.rotation.x=lt(this.torso.rotation.x,.42+n*.12,8,e),this.leftArm.rotation.x=lt(this.leftArm.rotation.x,-2.1,10,e),this.rightArm.rotation.x=lt(this.rightArm.rotation.x,-2.2,10,e),this.leftArm.rotation.z=lt(this.leftArm.rotation.z,.5,10,e),this.rightArm.rotation.z=lt(this.rightArm.rotation.z,-.5,10,e),this.head.rotation.x=lt(this.head.rotation.x,.5,8,e)}else{const n=t?7.5:4.2,i=t?.55:.35,r=Math.sin(this.time*n);this.torso.rotation.x=lt(this.torso.rotation.x,0,6,e),this.head.rotation.x=lt(this.head.rotation.x,t?-.35:-.1,6,e),this.leftArm.rotation.x=lt(this.leftArm.rotation.x,-2.5+r*i,9,e),this.rightArm.rotation.x=lt(this.rightArm.rotation.x,-2.5-r*i,9,e),this.leftArm.rotation.z=lt(this.leftArm.rotation.z,.35-r*.25,9,e),this.rightArm.rotation.z=lt(this.rightArm.rotation.z,-.35+r*.25,9,e),this.torso.position.y=Math.sin(this.time*n*.5)*.02}}}beginBoarding(e){this.state==="waiting"&&(this.state="boarding",this.boardProgress=0,this.boardFrom.copy(this.root.position),this.boardTarget.copy(e))}boardTarget=new E;setBoardingTarget(e){this.boardTarget.copy(e)}updateBoarding(e){this.boardProgress=it(this.boardProgress+e/.9);const t=this.boardProgress;this.root.position.lerpVectors(this.boardFrom,this.boardTarget,t*t),this.root.position.y+=Math.sin(t*Math.PI)*.35,this.root.scale.setScalar(1-t*.35),this.leftArm.rotation.x=-2.9,this.rightArm.rotation.x=-2.9,this.torso.rotation.x=-.2,t>=1&&(this.state="onboard",this.root.visible=!1)}markDelivered(){this.state="delivered",this.root.visible=!1}reset(){this.state="waiting",this.root.visible=!0,this.root.position.copy(this.spec.position),this.root.rotation.y=this.spec.facing,this.root.scale.setScalar(1),this.boardProgress=0,this.coughTimer=3,this.coughing=0,this.torso.rotation.set(0,0,0),this.torso.position.y=0}dispose(){this.root.traverse(e=>{e.geometry?.dispose()})}}class my{constructor(e){this.mat=e,this.zoneMaterial=new Ut({uniforms:{uTime:{value:0},uProgress:{value:0},uColor:{value:new xe(5111712)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vLocal;
        void main() {
          vUv = uv;
          vLocal = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uTime;
        uniform float uProgress;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying vec3 vLocal;

        void main() {
          float r = length(vLocal.xz);
          float edge = smoothstep(0.72, 1.0, r);
          float pulse = 0.55 + 0.45 * sin(uTime * 3.0 - r * 8.0);
          float ring = smoothstep(0.86, 0.96, r) * (1.0 - smoothstep(0.99, 1.02, r));

          // Сектор заполнения показывает прогресс подъёма прямо на земле.
          float angle = atan(vLocal.z, vLocal.x) / 6.2831853 + 0.5;
          float filled = step(angle, uProgress);

          float alpha = edge * 0.28 * pulse + ring * 0.85 + filled * (1.0 - edge) * 0.16;
          gl_FragColor = vec4(uColor * (0.7 + pulse * 0.5), alpha);
        }
      `,transparent:!0,depthWrite:!1,side:Xt});const t=new mr(1,48);t.rotateX(-Math.PI/2),this.zoneRing=new Ie(t,this.zoneMaterial),this.zoneRing.layers.set(In.ATMOSPHERE),this.zoneRing.renderOrder=5,this.zoneRing.visible=!1;const n=new Mi(1,1,1,32,1,!0);this.zoneColumn=new Ie(n,new Ut({uniforms:{uTime:{value:0},uColor:{value:new xe(5111712)}},vertexShader:`
          varying float vH;
          void main() {
            vH = uv.y;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          precision highp float;
          uniform float uTime;
          uniform vec3 uColor;
          varying float vH;
          void main() {
            float fade = pow(1.0 - vH, 2.2);
            float scan = 0.6 + 0.4 * sin(vH * 22.0 - uTime * 4.0);
            gl_FragColor = vec4(uColor, fade * 0.22 * scan);
          }
        `,transparent:!0,depthWrite:!1,side:Xt,blending:ai})),this.zoneColumn.layers.set(In.ATMOSPHERE),this.zoneColumn.renderOrder=4,this.zoneColumn.visible=!1,this.group.add(this.zoneRing,this.zoneColumn)}group=new rt;survivors=[];target=null;state="stowed";progress=0;cableLength=0;issue="outOfZone";zoneRing;zoneColumn;zoneMaterial;time=0;basketWorld=new E;load(e){for(const t of this.survivors)this.group.remove(t.root),t.dispose();this.survivors=e.map(t=>{const n=new py(t,this.mat);return this.group.add(n.root),n}),this.target=this.survivors[0]??null}setZoneVisible(e){if(this.zoneRing.visible=e,this.zoneColumn.visible=e,e&&this.target){const t=this.target.zoneCenter,n=se.winch.zoneRadius;this.zoneRing.position.set(t.x,t.y+.05,t.z),this.zoneRing.scale.setScalar(n),this.zoneColumn.position.set(t.x,t.y+se.winch.maxHoverHeight/2,t.z),this.zoneColumn.scale.set(n,se.winch.maxHoverHeight,n)}}toggleWinch(e){return this.state==="stowed"?this.canReach(e)?(this.state="lowering",gt.emit("winch:deploy"),!0):!1:this.state==="lowering"||this.state==="hoisting"?(this.state="raising",this.progress=0,gt.emit("winch:retract"),!0):!1}canReach(e){if(!this.target||this.target.state!=="waiting")return!1;const t=this.target.zoneCenter,n=Math.hypot(e.x-t.x,e.z-t.z),i=e.y-t.y;return n<=se.winch.zoneRadius&&i>=se.winch.minHoverHeight&&i<=se.winch.maxHoverHeight}evaluate(e,t){if(!this.target)return"outOfZone";const n=this.target.zoneCenter;if(Math.hypot(e.x-n.x,e.z-n.z)>se.winch.zoneRadius)return"outOfZone";const r=e.y-n.y;return r>se.winch.maxHoverHeight?"tooHigh":r<se.winch.minHoverHeight?"tooLow":t>se.winch.maxDriftSpeed?"tooFast":"ok"}update(e,t,n,i){this.time+=e,this.zoneMaterial.uniforms.uTime.value=this.time,this.zoneColumn.material.uniforms.uTime.value=this.time;const r=this.target?this.target.zoneCenter.distanceTo(n)<14:!1;for(const o of this.survivors)o.update(e,r);switch(this.issue=this.evaluate(n,i),this.state){case"stowed":this.cableLength=lt(this.cableLength,0,8,e),this.progress=lt(this.progress,0,6,e);break;case"lowering":{const o=this.target?Math.max(.6,n.y-this.target.zoneCenter.y-.7):3;this.cableLength=Math.min(o,this.cableLength+se.winch.cableSpeed*e),this.cableLength>=o-.15&&(this.state="hoisting");break}case"hoisting":{if(this.target&&this.target.state==="waiting"){const o=Math.max(.6,n.y-this.target.zoneCenter.y-.7);this.cableLength=lt(this.cableLength,o,5,e),this.issue==="ok"?this.progress=it(this.progress+e/se.winch.holdTime):this.issue==="outOfZone"&&(this.progress=Math.max(0,this.progress-se.winch.decayRate*e)),gt.emit("winch:progress",{value:this.progress}),this.progress>=1&&(this.basketWorld.set(n.x,n.y-this.cableLength-.3,n.z),this.target.beginBoarding(this.basketWorld))}else this.target&&this.target.state==="boarding"?(this.basketWorld.set(n.x,n.y-this.cableLength-.3,n.z),this.target.setBoardingTarget(this.basketWorld)):this.target&&this.target.state==="onboard"&&(this.state="raising",t.state.payload+=this.target.spec.mass,gt.emit("survivor:pickedUp",{id:this.target.spec.id,mass:this.target.spec.mass}),this.setZoneVisible(!1));break}case"raising":this.cableLength=Math.max(0,this.cableLength-se.winch.cableSpeed*e),this.cableLength<=.01&&(this.cableLength=0,this.state="stowed",this.progress=0);break}t.setCable(this.cableLength)}deliverAll(e){let t=0;for(const n of this.survivors)n.state==="onboard"&&(n.markDelivered(),e.state.payload=Math.max(0,e.state.payload-n.spec.mass),gt.emit("survivor:delivered",{id:n.spec.id}),t++);return t}get rescuedCount(){return this.survivors.filter(e=>e.state==="onboard"||e.state==="delivered").length}get deliveredCount(){return this.survivors.filter(e=>e.state==="delivered").length}get onboardCount(){return this.survivors.filter(e=>e.state==="onboard").length}setProgressVisual(){this.zoneMaterial.uniforms.uProgress.value=this.progress}reset(){this.state="stowed",this.progress=0,this.cableLength=0,this.issue="outOfZone";for(const e of this.survivors)e.reset();this.target=this.survivors[0]??null,this.setZoneVisible(!1)}dispose(){for(const e of this.survivors)e.dispose();this.zoneRing.geometry.dispose(),this.zoneColumn.geometry.dispose(),this.zoneMaterial.dispose(),this.zoneColumn.material.dispose()}}class gy{constructor(e,t){this.surface=e,this.canvas=t,this.bindPointer(),this.bindKeyboard(),this.bindMouse()}moveX=0;moveY=0;climb=0;lookDx=0;lookDy=0;inertiaX=0;inertiaY=0;foamHeld=!1;foamPointer=!1;winchEdge=!1;thermalEdge=!1;pauseEdge=!1;joystick={active:!1,originX:0,originY:0,knobX:0,knobY:0};enabled=!1;allowFoam=!0;allowWinch=!0;allowThermal=!0;joystickPointer=null;lookPointer=null;lastLookX=0;lastLookY=0;keys=new Set;pointerLocked=!1;lockUnavailable=!1;mouseDragLook=!1;disposers=[];bindPointer(){const e=i=>{if(!this.enabled||i.target.closest("[data-ui-control]"))return;const r=i.clientX<window.innerWidth*.45;r&&this.joystickPointer===null?(this.joystickPointer=i.pointerId,this.joystick.active=!0,this.joystick.originX=i.clientX,this.joystick.originY=i.clientY,this.joystick.knobX=i.clientX,this.joystick.knobY=i.clientY,this.surface.setPointerCapture(i.pointerId)):!r&&this.lookPointer===null&&(this.lookPointer=i.pointerId,this.lastLookX=i.clientX,this.lastLookY=i.clientY,this.surface.setPointerCapture(i.pointerId))},t=i=>{if(i.pointerId===this.joystickPointer){const r=se.input.joystickRadius;let o=i.clientX-this.joystick.originX,a=i.clientY-this.joystick.originY;const l=Math.hypot(o,a);if(l>r){const u=l-r;this.joystick.originX+=o/l*u,this.joystick.originY+=a/l*u,o=o/l*r,a=a/l*r}this.joystick.knobX=this.joystick.originX+o,this.joystick.knobY=this.joystick.originY+a;const c=o/r,h=-a/r;this.applyStick(c,h)}else if(i.pointerId===this.lookPointer){const r=i.clientX-this.lastLookX,o=i.clientY-this.lastLookY;this.lastLookX=i.clientX,this.lastLookY=i.clientY,this.lookDx+=r*se.input.swipeSensitivity,this.lookDy+=o*se.input.swipeSensitivity,this.inertiaX=r*se.input.swipeSensitivity,this.inertiaY=o*se.input.swipeSensitivity}},n=i=>{i.pointerId===this.joystickPointer?(this.joystickPointer=null,this.joystick.active=!1,this.moveX=0,this.moveY=0,this.climb=0):i.pointerId===this.lookPointer&&(this.lookPointer=null)};this.surface.addEventListener("pointerdown",e),this.surface.addEventListener("pointermove",t),this.surface.addEventListener("pointerup",n),this.surface.addEventListener("pointercancel",n),this.disposers.push(()=>{this.surface.removeEventListener("pointerdown",e),this.surface.removeEventListener("pointermove",t),this.surface.removeEventListener("pointerup",n),this.surface.removeEventListener("pointercancel",n)})}applyStick(e,t){const n=se.input.joystickDeadzone,i=Math.hypot(e,t);if(i<n){this.moveX=0,this.moveY=0;return}const r=Math.min(1,(i-n)/(1-n));this.moveX=e/i*r,this.moveY=t/i*r}setClimbButton(e){this.climbButton=e}climbButton=0;bindKeyboard(){const e=i=>{if(i.repeat)return;const r=i.code;this.keys.add(r),r==="Escape"&&(this.pauseEdge=!0),this.enabled&&(r==="KeyE"&&this.allowWinch&&(this.winchEdge=!0),r==="KeyF"&&this.allowThermal&&(this.thermalEdge=!0),r==="Space"&&i.preventDefault())},t=i=>{this.keys.delete(i.code)},n=()=>{this.keys.clear(),this.foamPointer=!1,this.foamHeld=!1};window.addEventListener("keydown",e),window.addEventListener("keyup",t),window.addEventListener("blur",n),this.disposers.push(()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t),window.removeEventListener("blur",n)})}bindMouse(){const e=l=>{if(this.enabled&&!l.target.closest("[data-ui-control]"))if(l.button===0){if(!this.pointerLocked&&!this.lockUnavailable){this.requestLock();return}this.foamPointer=!0}else l.button===2&&(this.pointerLocked||(this.mouseDragLook=!0))},t=l=>{l.button===0&&(this.foamPointer=!1),l.button===2&&(this.mouseDragLook=!1)},n=l=>{this.enabled&&(this.pointerLocked?(this.lookDx+=l.movementX*se.input.mouseSensitivity,this.lookDy+=l.movementY*se.input.mouseSensitivity):this.mouseDragLook&&(this.lookDx+=l.movementX*se.input.mouseSensitivity*1.6,this.lookDy+=l.movementY*se.input.mouseSensitivity*1.6))},i=()=>{this.pointerLocked=document.pointerLockElement===this.canvas,this.pointerLocked||(this.foamPointer=!1)},r=()=>{this.lockUnavailable=!0,this.pointerLocked=!1},o=l=>{this.enabled&&l.preventDefault()},a=l=>{this.enabled&&(l.preventDefault(),se.camera.distance=Dt(se.camera.distance+Math.sign(l.deltaY)*.4,2.4,14))};this.surface.addEventListener("mousedown",e),window.addEventListener("mouseup",t),window.addEventListener("mousemove",n),document.addEventListener("pointerlockchange",i),document.addEventListener("pointerlockerror",r),this.surface.addEventListener("contextmenu",o),this.surface.addEventListener("wheel",a,{passive:!1}),this.disposers.push(()=>{this.surface.removeEventListener("mousedown",e),window.removeEventListener("mouseup",t),window.removeEventListener("mousemove",n),document.removeEventListener("pointerlockchange",i),document.removeEventListener("pointerlockerror",r),this.surface.removeEventListener("contextmenu",o),this.surface.removeEventListener("wheel",a)})}requestLock(){const e=this.canvas.requestPointerLock;if(!e){this.lockUnavailable=!0;return}try{const t=e.call(this.canvas);t&&typeof t.catch=="function"&&t.catch(()=>{this.lockUnavailable=!0})}catch{this.lockUnavailable=!0}}releasePointerLock(){document.pointerLockElement===this.canvas&&document.exitPointerLock()}get needsCursorCapture(){return!this.pointerLocked&&!this.lockUnavailable}poll(e){if(!this.enabled){this.moveX=0,this.moveY=0,this.climb=0,this.foamHeld=!1;return}let t=0,n=0;if((this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n-=1),t!==0||n!==0){const r=Math.hypot(t,n);this.moveX=t/r,this.moveY=n/r}else this.joystick.active||(this.moveX=0,this.moveY=0);let i=this.climbButton;if(this.keys.has("Space")&&(i+=1),(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.keys.has("KeyC"))&&(i-=1),this.climb=Dt(i,-1,1),this.foamHeld=this.allowFoam&&(this.foamPointer||this.keys.has("ControlLeft")),this.lookPointer===null){const r=Math.exp(-se.input.swipeDamping*e);this.lookDx+=this.inertiaX,this.lookDy+=this.inertiaY,this.inertiaX*=r,this.inertiaY*=r,Math.abs(this.inertiaX)<1e-5&&(this.inertiaX=0),Math.abs(this.inertiaY)<1e-5&&(this.inertiaY=0)}else this.inertiaX=0,this.inertiaY=0}consumeLook(){const e={dx:this.lookDx,dy:this.lookDy};return this.lookDx=0,this.lookDy=0,e}consumeWinch(){const e=this.winchEdge;return this.winchEdge=!1,e}consumeThermal(){const e=this.thermalEdge;return this.thermalEdge=!1,e}consumePause(){const e=this.pauseEdge;return this.pauseEdge=!1,e}pressWinch(){this.enabled&&this.allowWinch&&(this.winchEdge=!0)}pressThermal(){this.enabled&&this.allowThermal&&(this.thermalEdge=!0)}setFoam(e){this.foamPointer=e}reset(){this.moveX=0,this.moveY=0,this.climb=0,this.climbButton=0,this.lookDx=0,this.lookDy=0,this.inertiaX=0,this.inertiaY=0,this.foamHeld=!1,this.winchEdge=!1,this.thermalEdge=!1,this.joystick.active=!1,this.joystickPointer=null,this.lookPointer=null,this.keys.clear()}dispose(){this.disposers.forEach(e=>e()),this.disposers=[]}}const zn=(s,e)=>Number.isFinite(s)?s:e;class vy{ctx;master;compressor;noiseBuffer;rotorOscs=[];rotorGain;rotorFilter;rotorNoiseGain;rotorBeat;windGain;windFilter;fireGain;fireFilter;crackleTimer=0;foamGain;alarmTimer=0;started=!1;muted=!1;volume=.8;currentRotorFreq=60;get isReady(){return this.started}async start(){if(this.started){await this.ctx?.resume().catch(()=>{});return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.compressor=t.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=22,this.compressor.ratio.value=8,this.compressor.attack.value=.004,this.compressor.release.value=.2,this.master=t.createGain(),this.master.gain.value=this.muted?0:this.volume,this.compressor.connect(this.master),this.master.connect(t.destination),this.buildNoiseBuffer(),this.buildRotors(),this.buildWind(),this.buildFire(),this.buildFoam(),this.started=!0,await t.resume().catch(()=>{})}setVolume(e){this.volume=it(e),this.master&&(this.master.gain.value=this.muted?0:this.volume)}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:this.volume)}get isMuted(){return this.muted}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}buildNoiseBuffer(){const e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);let r=0;for(let o=0;o<t;o++){const a=Math.random()*2-1;r=(r+.02*a)/1.02,i[o]=r*3.5}this.noiseBuffer=n}makeNoiseSource(){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuffer,e.loop=!0,e.start(),e}buildRotors(){const e=this.ctx;this.rotorGain=e.createGain(),this.rotorGain.gain.value=0,this.rotorFilter=e.createBiquadFilter(),this.rotorFilter.type="lowpass",this.rotorFilter.frequency.value=900,this.rotorFilter.Q.value=.8,this.rotorGain.connect(this.rotorFilter),this.rotorFilter.connect(this.compressor);const t=[{mult:1,gain:.5,detune:-7,type:"sawtooth"},{mult:2.01,gain:.3,detune:5,type:"square"},{mult:3.02,gain:.16,detune:-11,type:"sawtooth"},{mult:4.98,gain:.08,detune:9,type:"sawtooth"}];for(const o of t){const a=e.createOscillator();a.type=o.type,a.frequency.value=this.currentRotorFreq*o.mult,a.detune.value=o.detune;const l=e.createGain();l.gain.value=o.gain,a.connect(l),l.connect(this.rotorGain),a.start(),this.rotorOscs.push(a),a._mult=o.mult}this.rotorBeat=e.createOscillator(),this.rotorBeat.frequency.value=3.2;const n=e.createGain();n.gain.value=.09,this.rotorBeat.connect(n),n.connect(this.rotorGain.gain),this.rotorBeat.start();const i=this.makeNoiseSource(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=1600,r.Q.value=.7,this.rotorNoiseGain=e.createGain(),this.rotorNoiseGain.gain.value=0,i.connect(r),r.connect(this.rotorNoiseGain),this.rotorNoiseGain.connect(this.compressor)}buildWind(){const e=this.ctx,t=this.makeNoiseSource();this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=480,this.windFilter.Q.value=.5,this.windGain=e.createGain(),this.windGain.gain.value=0,t.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.compressor)}buildFire(){const e=this.ctx,t=this.makeNoiseSource();this.fireFilter=e.createBiquadFilter(),this.fireFilter.type="lowpass",this.fireFilter.frequency.value=700,this.fireFilter.Q.value=1.1,this.fireGain=e.createGain(),this.fireGain.gain.value=0,t.connect(this.fireFilter),this.fireFilter.connect(this.fireGain),this.fireGain.connect(this.compressor)}buildFoam(){const e=this.ctx,t=this.makeNoiseSource(),n=e.createBiquadFilter();n.type="highpass",n.frequency.value=2400;const i=e.createBiquadFilter();i.type="peaking",i.frequency.value=5200,i.gain.value=8,this.foamGain=e.createGain(),this.foamGain.gain.value=0,t.connect(n),n.connect(i),i.connect(this.foamGain),this.foamGain.connect(this.compressor)}update(e,t){if(!this.started||!this.ctx)return;const n=this.ctx.currentTime,i=.08;e=zn(e,1/60);const r=it(zn(t.throttle,0)),o=zn(t.speed,0),a=it(zn(t.fireProximity,0)),l=it(zn(t.batteryRatio,1)),c=t.airborne?Rn(74,168,r):Rn(0,58,r);this.currentRotorFreq=Rn(this.currentRotorFreq,c,Math.min(1,e*6));for(const g of this.rotorOscs){const v=g._mult??1;g.frequency.setTargetAtTime(Math.max(20,this.currentRotorFreq*v),n,i)}const h=t.airborne?Rn(.1,.24,r):r*.08;this.rotorGain.gain.setTargetAtTime(h,n,i),this.rotorFilter.frequency.setTargetAtTime(Rn(600,2100,r),n,i),this.rotorNoiseGain.gain.setTargetAtTime(t.airborne?Rn(.012,.05,r):0,n,i),this.rotorBeat&&this.rotorBeat.frequency.setTargetAtTime(2.4+r*3.4,n,.2);const u=it(o/16);this.windGain.gain.setTargetAtTime(u*.16,n,.12),this.windFilter.frequency.setTargetAtTime(Rn(320,1200,u),n,.12);const d=a;this.fireGain.gain.setTargetAtTime(d*.3,n,.25),this.fireFilter.frequency.setTargetAtTime(Rn(420,1100,d),n,.25),d>.05&&(this.crackleTimer-=e*(.6+d*6),this.crackleTimer<=0&&(this.crackleTimer=.08+Math.random()*.35,this.crackle(d))),this.foamGain.gain.setTargetAtTime(t.foaming?.14:0,n,.05),l>0&&l<.2&&(this.alarmTimer-=e,this.alarmTimer<=0&&(this.alarmTimer=l<.08?.4:.95,this.beep(l<.08?1180:880,.09,.09)))}envelope(e,t,n,i){const r=this.ctx.currentTime;e.gain.cancelScheduledValues(r),e.gain.setValueAtTime(1e-4,r),e.gain.linearRampToValueAtTime(t,r+n),e.gain.exponentialRampToValueAtTime(1e-4,r+n+i)}crackle(e){if(!this.started||!this.ctx)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.playbackRate.value=.6+Math.random()*1.6;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=800+Math.random()*2600,n.Q.value=3+Math.random()*6;const i=this.ctx.createGain();t.connect(n),n.connect(i),i.connect(this.compressor),this.envelope(i,.06+e*.14,.002,.06+Math.random()*.1),t.start(),t.stop(this.ctx.currentTime+.3)}beep(e,t,n=.12,i="square"){if(!this.started||!this.ctx)return;e=zn(e,880),t=zn(t,.1);const r=this.ctx.createOscillator();r.type=i,r.frequency.value=e;const o=this.ctx.createGain();r.connect(o),o.connect(this.compressor),this.envelope(o,n,.005,t),r.start(),r.stop(this.ctx.currentTime+t+.05)}impact(e){if(!this.started||!this.ctx)return;const t=it(zn(e,.3)),n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(160+t*90,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(48,this.ctx.currentTime+.22);const i=this.ctx.createGain();n.connect(i),i.connect(this.compressor),this.envelope(i,.15+t*.35,.003,.25),n.start(),n.stop(this.ctx.currentTime+.4);const r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer,r.playbackRate.value=1.4;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=2200,o.Q.value=1.2;const a=this.ctx.createGain();r.connect(o),o.connect(a),a.connect(this.compressor),this.envelope(a,.1+t*.25,.002,.13),r.start(),r.stop(this.ctx.currentTime+.3)}collapse(){if(!this.started||!this.ctx)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.playbackRate.value=.35;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(1200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(140,this.ctx.currentTime+1.6);const n=this.ctx.createGain();e.connect(t),t.connect(n),n.connect(this.compressor);const i=this.ctx.currentTime;n.gain.setValueAtTime(1e-4,i),n.gain.linearRampToValueAtTime(.5,i+.06),n.gain.exponentialRampToValueAtTime(1e-4,i+2),e.start(),e.stop(i+2.2);const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(70,i),r.frequency.exponentialRampToValueAtTime(28,i+1.4);const o=this.ctx.createGain();r.connect(o),o.connect(this.compressor),this.envelope(o,.42,.02,1.5),r.start(),r.stop(i+1.8)}radioOpen(){!this.started||!this.ctx||(this.staticBurst(.09,.1),this.beep(1500,.04,.05,"sine"))}radioClose(){!this.started||!this.ctx||this.staticBurst(.06,.07)}staticBurst(e,t){const n=this.ctx.createBufferSource();n.buffer=this.noiseBuffer,n.playbackRate.value=2.4;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=2600,i.Q.value=1.6;const r=this.ctx.createGain();n.connect(i),i.connect(r),r.connect(this.compressor),this.envelope(r,t,.004,e),n.start(),n.stop(this.ctx.currentTime+e+.1)}babble(e,t=1){if(!this.started||!this.ctx)return()=>{};const n=e.split(/\s+/).filter(Boolean),i=196*t,r=[];let o=0;for(const a of n){const l=a.replace(/[^\p{L}]/gu,"").length,c=Math.max(1,Math.round(l/3));for(let h=0;h<c;h++){const u=c>1?h/(c-1):.5,d=i*(.88+u*.24)*(.94+Math.random()*.12);r.push(window.setTimeout(()=>this.syllable(d,.085),Math.round(o*1e3))),o+=.105+Math.random()*.03}o+=/[,.;:!?—]$/.test(a)?.26:.07}return()=>{for(const a of r)clearTimeout(a)}}syllable(e,t){if(!this.started||!this.ctx)return;const n=this.ctx.currentTime,i=this.ctx.createOscillator();i.type="square",i.frequency.setValueAtTime(zn(e,200),n),i.frequency.linearRampToValueAtTime(zn(e*.93,190),n+t);const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1500,r.Q.value=.9;const o=this.ctx.createGain();i.connect(r),r.connect(o),o.connect(this.compressor),this.envelope(o,.055,.008,t),i.start(n),i.stop(n+t+.06)}winch(e){if(!this.started||!this.ctx)return;const t=this.ctx.createOscillator();t.type="sawtooth";const n=this.ctx.currentTime;t.frequency.setValueAtTime(e?320:210,n),t.frequency.linearRampToValueAtTime(e?210:340,n+.45);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=5;const r=this.ctx.createGain();t.connect(i),i.connect(r),r.connect(this.compressor),this.envelope(r,.09,.03,.45),t.start(),t.stop(n+.6)}chime(e=!0){if(!this.started||!this.ctx)return;(e?[523.25,659.25,783.99,1046.5]:[392,329.63,261.63]).forEach((n,i)=>{setTimeout(()=>this.beep(n,.32,.11,"triangle"),i*110)})}click(){this.beep(1800,.03,.05,"square")}thermalToggle(e){if(!this.started||!this.ctx)return;this.click();const t=this.ctx.createOscillator();t.type="sine";const n=this.ctx.currentTime;t.frequency.setValueAtTime(e?320:900,n),t.frequency.exponentialRampToValueAtTime(e?900:320,n+.18);const i=this.ctx.createGain();t.connect(i),i.connect(this.compressor),this.envelope(i,.07,.01,.2),t.start(),t.stop(n+.3)}dispose(){this.rotorOscs.forEach(e=>e.stop()),this.rotorBeat?.stop(),this.ctx?.close(),this.started=!1}}const We=new vy,_y={ru:["milena","katya","yandex","alena","google русский"],en:["samantha","karen","moira","tessa","victoria","fiona","serena","allison","ava","susan","zoe","zira","google uk english female","google us english"],de:["anna","helena","petra","katja","hedda","google deutsch"]},xy=["albert","bad news","bahh","bells","boing","bubbles","cellos","good news","jester","organ","superstar","trinoids","whisper","wobble","zarvox","junior","kathy","ralph","fred","grandma","grandpa","flo","eddy","rocko","sandy","shelley","reed"];class yy{synth;voices=[];muted=!1;cancelBabble=null;current;speakingFlag=!1;constructor(){typeof window>"u"||!window.speechSynthesis||(this.synth=window.speechSynthesis,this.refreshVoices(),this.synth.addEventListener?.("voiceschanged",()=>this.refreshVoices()))}refreshVoices(){this.voices=this.synth?.getVoices()??[]}pickVoice(){const e=ku(),t=this.voices.filter(a=>a.lang.toLowerCase().startsWith(e));if(t.length===0)return null;const n=t.filter(a=>!xy.some(l=>a.name.toLowerCase().includes(l))),i=n.length>0?n:[];if(i.length===0)return null;const r=_y[e]??[],o=a=>{const l=a.name.toLowerCase(),c=r.findIndex(h=>l.includes(h));return(c>=0?100-c:0)+(a.localService?10:0)};return i.slice().sort((a,l)=>o(l)-o(a))[0]??null}get mode(){return this.muted?"off":this.synth&&this.pickVoice()?"speech":"babble"}get isSpeaking(){return this.speakingFlag}setMuted(e){this.muted=e,e&&this.cancel()}speak(e,t=1){if(this.cancel(),this.muted||!e)return;const n=this.synth?this.pickVoice():null;if(!this.synth||!n){this.speakingFlag=!0;const r=We.babble(e,t),o=Math.min(11e3,1200+e.length*55),a=window.setTimeout(()=>{this.speakingFlag=!1},o);this.cancelBabble=()=>{r(),clearTimeout(a),this.speakingFlag=!1};return}const i=new SpeechSynthesisUtterance(e);i.voice=n,i.lang=n.lang,i.rate=1.06,i.pitch=t,i.volume=1,i.onend=()=>{this.current===i&&(this.speakingFlag=!1)},i.onerror=()=>{this.current===i&&(this.speakingFlag=!1)},this.current=i,this.speakingFlag=!0,this.synth.speak(i)}cancel(){this.cancelBabble?.(),this.cancelBabble=null,this.current=void 0,this.speakingFlag=!1;try{this.synth?.cancel()}catch{}}}const zi=new yy;function H(s,e,t){const n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n}function G(s,e){return s.appendChild(e),e}function Ct(s){return s.dataset.uiControl="",s}function Sa(s,e,t){let n=!1;const i=o=>{o.preventDefault(),o.stopPropagation(),!n&&(n=!0,s.classList.add("is-held"),e())},r=o=>{o?.stopPropagation(),n&&(n=!1,s.classList.remove("is-held"),t())};return s.addEventListener("pointerdown",i),s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),s.addEventListener("pointerleave",r),window.addEventListener("blur",r),()=>{s.removeEventListener("pointerdown",i),s.removeEventListener("pointerup",r),s.removeEventListener("pointercancel",r),s.removeEventListener("pointerleave",r),window.removeEventListener("blur",r)}}function It(s,e){const t=n=>{n.preventDefault(),n.stopPropagation(),e()};return s.addEventListener("pointerdown",t),()=>s.removeEventListener("pointerdown",t)}const Ta=2*Math.PI*52;class by{constructor(e,t){this.input=t,this.root=G(e,H("div","hud")),this.root.hidden=!0;const n=G(this.root,H("div","gauges")),i=(p,M)=>{const S=G(n,H("div","gauge"));S.style.setProperty("--fill",M);const y=G(S,H("div","label")),R=G(y,H("span"));R.dataset.i18n=p,R.textContent=Ce(p);const T=G(y,H("b")),A=G(S,H("div","track")),P=G(A,H("div","bar"));return{box:S,bar:P,value:T}},r=i("hud.battery","var(--good)"),o=i("hud.foam","var(--info)"),a=i("hud.hull","var(--text-dim)"),l=i("hud.payload","var(--accent)");this.gaugeBattery=r.box,this.barBattery=r.bar,this.valBattery=r.value,this.barFoam=o.bar,this.valFoam=o.value,this.gaugeHull=a.box,this.barHull=a.bar,this.valHull=a.value,this.gaugePayload=l.box,this.barPayload=l.bar,this.valPayload=l.value,this.gaugePayload.style.display="none";const c=G(this.root,H("div","telemetry")),h=G(c,H("span"));h.innerHTML=`<span data-i18n="hud.altitude">${Ce("hud.altitude")}</span> <b>0</b>`,this.altValue=h.querySelector("b");const u=G(c,H("span"));u.innerHTML=`<span data-i18n="hud.speed">${Ce("hud.speed")}</span> <b>0</b>`,this.spdValue=u.querySelector("b"),this.objectiveBox=G(this.root,H("div","objective"));const d=G(this.objectiveBox,H("div","eyebrow"));d.dataset.i18n="hud.objective",d.textContent=Ce("hud.objective"),this.objectiveText=G(this.objectiveBox,H("div","text")),this.objectiveDist=G(this.objectiveBox,H("div","dist")),this.objectiveBox.style.display="none";const f=G(this.root,H("div","top-right"));this.adBtn=Ct(G(f,H("button","icon-btn","⚡"))),this.adBtn.title=Ce("hud.watchAd"),this.adBtn.style.display="none",this.disposers.push(It(this.adBtn,()=>this.onAd())),this.thermalBtn=Ct(G(f,H("button","icon-btn","◉"))),this.thermalBtn.title=Ce("hud.thermal"),this.disposers.push(It(this.thermalBtn,()=>this.input.pressThermal())),this.pauseBtn=Ct(G(f,H("button","icon-btn","❚❚"))),this.pauseBtn.title=Ce("hud.pause"),this.disposers.push(It(this.pauseBtn,()=>this.onPause())),this.markerLayer=G(this.root,H("div","markers")),this.crosshair=G(this.root,H("div","crosshair")),this.hoist=G(this.root,H("div","hoist")),this.hoist.innerHTML=`
      <svg viewBox="0 0 116 116">
        <circle class="track" cx="58" cy="58" r="52"></circle>
        <circle class="value" cx="58" cy="58" r="52"
          stroke-dasharray="${Ta}" stroke-dashoffset="${Ta}"></circle>
      </svg>
      <div class="hint"></div>`,this.hoistValue=this.hoist.querySelector(".value"),this.hoistHint=this.hoist.querySelector(".hint"),this.joystick=G(this.root,H("div","joystick")),this.joystickKnob=G(this.joystick,H("div","knob")),this.joystickHint=G(this.root,H("div","joystick-hint",'<div class="arrow">▲</div>'));const g=G(this.root,H("div","climb"));this.climbUp=Ct(G(g,H("button","","▲"))),this.climbDown=Ct(G(g,H("button","","▼"))),this.disposers.push(Sa(this.climbUp,()=>this.input.setClimbButton(1),()=>this.input.setClimbButton(0)),Sa(this.climbDown,()=>this.input.setClimbButton(-1),()=>this.input.setClimbButton(0)));const v=G(this.root,H("div","actions"));this.winchBtn=Ct(G(v,H("button","action-btn action-btn--winch",`<span class="glyph">⇩</span><span data-i18n="hud.winchBtn">${Ce("hud.winchBtn")}</span>`))),this.disposers.push(It(this.winchBtn,()=>this.input.pressWinch())),this.foamBtn=Ct(G(v,H("button","action-btn action-btn--foam",`<span class="glyph">≈</span><span data-i18n="hud.foamBtn">${Ce("hud.foamBtn")}</span>`))),this.disposers.push(Sa(this.foamBtn,()=>this.input.setFoam(!0),()=>this.input.setFoam(!1)));const m=G(this.root,H("div","bottom-stack"));this.radio=G(m,H("div","radio")),this.radio.innerHTML=`
      <div class="signal"><i></i><i></i><i></i></div>
      <div class="who"></div>
      <div class="line"></div>`,this.radioWho=this.radio.querySelector(".who"),this.radioLine=this.radio.querySelector(".line"),this.tutorial=G(m,H("div","tutorial")),this.toasts=G(this.root,H("div","toasts")),this.geofence=G(this.root,H("div","geofence")),this.geofence.innerHTML=`
      <div class="geofence__frame"></div>
      <div class="geofence__label">
        <span class="geofence__title"></span>
        <span class="geofence__hint"></span>
      </div>`,this.geofenceTitle=this.geofence.querySelector(".geofence__title"),this.geofenceHint=this.geofence.querySelector(".geofence__hint"),this.damageFlash=G(e,H("div","damage-flash")),this.thermalFrame=G(e,H("div","thermal-frame"))}root;gaugeBattery;gaugeHull;gaugePayload;barBattery;barFoam;barHull;barPayload;valBattery;valFoam;valHull;valPayload;altValue;spdValue;objectiveBox;objectiveText;objectiveDist;markerLayer;markerPool=new Map;crosshair;hoist;hoistValue;hoistHint;joystick;joystickKnob;joystickHint;climbUp;climbDown;foamBtn;winchBtn;thermalBtn;adBtn;pauseBtn;radio;radioWho;radioLine;radioTimer=0;tutorial;geofence;geofenceTitle;geofenceHint;toasts;damageFlash;thermalFrame;disposers=[];onPause=()=>{};onAd=()=>{};setGeofence(e,t){const n=e>.02;this.geofence.classList.toggle("is-on",n),this.geofence.classList.toggle("is-blocked",t),n&&(this.geofence.style.setProperty("--strength",String(Math.min(1,e))),this.geofenceTitle.textContent=Ce("hud.geofence"),this.geofenceHint.textContent=Ce("hud.geofenceHint"))}setVisible(e){this.root.hidden=!e,e||this.thermalFrame.classList.remove("is-on")}update(e,t){this.setBar(this.barBattery,this.valBattery,t.batteryRatio,`${Math.round(t.batteryRatio*100)}%`),this.setBar(this.barFoam,this.valFoam,t.foamRatio,`${Math.round(t.foamRatio*100)}%`),this.setBar(this.barHull,this.valHull,t.hullRatio,`${Math.round(t.hullRatio*100)}%`),this.gaugeBattery.style.setProperty("--fill",t.batteryRatio<.2?"var(--bad)":t.batteryRatio<.45?"var(--warn)":"var(--good)"),this.gaugeBattery.classList.toggle("is-critical",t.batteryCritical),this.gaugeHull.style.setProperty("--fill",t.hullRatio<.3?"var(--bad)":t.hullRatio<.6?"var(--warn)":"var(--text-dim)"),t.payload>.5?(this.gaugePayload.style.display="",this.setBar(this.barPayload,this.valPayload,it(t.payload/100),`${Math.round(t.payload)} ${Ce("hud.kg")}`)):this.gaugePayload.style.display="none",this.altValue.textContent=t.altitude.toFixed(1),this.spdValue.textContent=t.speed.toFixed(1);const n=this.input.joystick;this.joystick.classList.toggle("is-active",n.active),n.active&&(this.joystick.style.transform=`translate(${n.originX}px, ${n.originY}px)`,this.joystickKnob.style.transform=`translate(${n.knobX-n.originX}px, ${n.knobY-n.originY}px)`),this.radioTimer>0&&(this.radioTimer-=e,this.radioTimer<=0&&this.radio.classList.remove("is-on"))}setBar(e,t,n,i){e.style.transform=`scaleX(${it(n)})`,t.textContent=i}setObjective(e,t){if(!e){this.objectiveBox.style.display="none";return}this.objectiveBox.style.display="",this.objectiveText.textContent=e,this.objectiveDist.textContent=t===null?"":Ce("hud.distance",{d:Math.round(t)})}setMarkers(e){const t=new Set;for(const n of e){t.add(n.id);let i=this.markerPool.get(n.id);i||(i=H("div","marker",'<div class="diamond"></div><div class="caption"></div>'),this.markerLayer.appendChild(i),this.markerPool.set(n.id,i)),i.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%, -50%)`,i.classList.toggle("is-offscreen",n.offscreen),i.classList.toggle("is-goal",n.goal);const r=i.querySelector(".caption");r.textContent!==n.label&&(r.textContent=n.label),i.style.display=""}for(const[n,i]of this.markerPool)t.has(n)||(i.style.display="none")}setCrosshair(e){this.crosshair.classList.toggle("is-on",e)}setHoist(e,t,n,i){this.hoist.classList.toggle("is-on",e),e&&(this.hoist.classList.toggle("is-blocked",n),this.hoistValue.style.strokeDashoffset=String(Ta*(1-it(t))),this.hoistHint.textContent!==i&&(this.hoistHint.textContent=i))}setButtons(e){this.foamBtn.disabled=!e.foam,this.winchBtn.disabled=!e.winch,this.thermalBtn.disabled=!e.thermal,this.winchBtn.classList.toggle("is-armed",e.winchArmed&&e.winch)}setThermal(e){this.thermalBtn.classList.toggle("is-on",e),this.thermalFrame.classList.toggle("is-on",e)}setAdAvailable(e){this.adBtn.style.display=e?"":"none",this.adBtn.disabled=!e}setHints(e){this.joystickHint.classList.toggle("is-on",e.joystick),this.climbUp.classList.toggle("is-hinted",e.climb)}showRadio(e,t,n){this.radioWho.textContent=e,this.radioLine.textContent=t,this.radio.classList.add("is-on"),this.radioTimer=n,We.radioOpen()}hideRadio(){this.radio.classList.remove("is-on"),this.radioTimer=0}showTutorial(e){if(!e){this.tutorial.classList.remove("is-on");return}this.tutorial.textContent=e,this.tutorial.classList.add("is-on")}toast(e,t="info",n=2.2){const i=G(this.toasts,H("div",`toast is-${t}`,e));setTimeout(()=>{i.style.transition="opacity 0.3s",i.style.opacity="0",setTimeout(()=>i.remove(),320)},n*1e3)}flashDamage(){this.damageFlash.classList.remove("is-on"),this.damageFlash.offsetWidth,this.damageFlash.classList.add("is-on")}clearMessages(){this.hideRadio(),this.showTutorial(null),this.toasts.innerHTML="",this.setGeofence(0,!1)}dispose(){this.disposers.forEach(e=>e()),this.root.remove(),this.damageFlash.remove(),this.thermalFrame.remove()}}const My="mission01";class Sy{constructor(e,t){this.cb=t,this.menu=G(e,H("div","screen"));const n=G(this.menu,H("div","panel")),i=G(n,H("h1","title"));i.dataset.i18n="game.title";const r=G(n,H("div","subtitle"));r.dataset.i18n="game.subtitle",G(n,H("div","rule"));const o=G(n,H("div","row"));this.menuBalance=G(o,H("div","eyebrow")),this.menuReputation=G(o,H("div","eyebrow"));const a=G(n,H("div","row"));a.style.marginTop="20px";const l=Ct(G(a,H("button","btn btn--primary")));l.dataset.i18n="menu.play",It(l,()=>{We.start().then(()=>We.click()),this.cb.onOpenBriefing()});const c=Ct(G(a,H("button","btn btn--ghost")));c.dataset.i18n="menu.hangar",It(c,()=>{We.start().then(()=>We.click()),this.cb.onOpenHangar()});const h=Ct(G(a,H("button","btn btn--ghost")));h.dataset.i18n="menu.reset",It(h,()=>{confirm(Ce("menu.resetConfirm"))&&(en.reset(),this.refreshMenu())}),G(a,H("div","spacer")),a.appendChild(this.buildLanguageSwitch());const u=G(n,H("div","eyebrow"));u.style.marginTop="22px",u.dataset.i18n="menu.credits",this.hangar=G(e,H("div","screen")),this.hangar.hidden=!0;const d=G(this.hangar,H("div","panel panel--wide")),f=G(d,H("div","row")),g=G(f,H("div")),v=G(g,H("h2","title"));v.style.fontSize="clamp(20px, 3.4vw, 30px)",v.dataset.i18n="hangar.title";const m=G(g,H("div","eyebrow"));m.dataset.i18n="hangar.subtitle",G(f,H("div","spacer")),this.hangarBalance=G(f,H("div","hangar-balance")),G(d,H("div","rule")),this.hangarGrid=G(d,H("div","hangar-grid"));const p=G(d,H("div","row row--end"));p.style.marginTop="18px";const M=Ct(G(p,H("button","btn btn--ghost")));M.dataset.i18n="hangar.back",It(M,()=>{We.click(),this.cb.onBackToMenu()});const S=Ct(G(p,H("button","btn btn--primary")));S.dataset.i18n="menu.play",It(S,()=>{We.start().then(()=>We.click()),this.cb.onOpenBriefing()}),this.briefing=G(e,H("div","screen")),this.briefing.hidden=!0;const y=G(this.briefing,H("div","panel")),R=G(y,H("div","eyebrow"));R.dataset.i18n="brief.location";const T=G(y,H("h2","title"));T.style.fontSize="clamp(20px, 3.4vw, 30px)",T.dataset.i18n="brief.title";const A=G(y,H("p","body-text"));A.dataset.i18n="brief.summary",G(y,H("div","rule"));const P=G(y,H("div","eyebrow"));P.dataset.i18n="brief.drone";const _=G(y,H("div","loadout")),x=Ke=>{const J=G(_,H("div","loadout-card")),Z=G(J,H("div","name"));return Z.dataset.i18n=Ke,G(J,H("div","value"))};this.briefBattery=x("brief.battery"),this.briefFoam=x("brief.foam"),this.briefWinch=x("brief.winch");const L=G(y,H("div","row row--end"));L.style.marginTop="22px";const F=Ct(G(L,H("button","btn btn--ghost")));F.dataset.i18n="brief.back",It(F,()=>{We.click(),this.cb.onBackToMenu()});const B=Ct(G(L,H("button","btn btn--primary")));B.dataset.i18n="brief.start",It(B,()=>{We.start().then(()=>We.click()),this.cb.onStartMission()}),this.pause=G(e,H("div","screen")),this.pause.hidden=!0;const j=G(this.pause,H("div","panel"));j.style.maxWidth="380px";const K=G(j,H("h2","title"));K.style.fontSize="26px",K.dataset.i18n="pause.title",G(j,H("div","rule"));const $=G(j,H("div","row"));$.style.flexDirection="column",$.style.alignItems="stretch";const te=(Ke,J,Z)=>{const ye=Ct(G($,H("button",`btn ${J}`)));ye.dataset.i18n=Ke,It(ye,()=>{We.click(),Z()})};te("pause.resume","btn--primary",()=>this.cb.onResume()),te("pause.restart","",()=>this.cb.onRestart()),tn.available&&(this.hapticsBtn=Ct(G($,H("button","btn btn--ghost"))),It(this.hapticsBtn,()=>{tn.setEnabled(!tn.isEnabled),We.click(),tn.isEnabled&&tn.landing(),this.refreshHaptics()}),this.refreshHaptics()),this.voiceBtn=Ct(G($,H("button","btn btn--ghost"))),It(this.voiceBtn,()=>{this.voiceOn=!this.voiceOn,zi.setMuted(!this.voiceOn),We.click(),this.refreshVoice()}),this.refreshVoice(),te("pause.debug","btn--ghost",()=>this.cb.onToggleDebug()),te("pause.quit","btn--ghost",()=>this.cb.onBackToMenu()),this.result=G(e,H("div","screen")),this.result.hidden=!0;const q=G(this.result,H("div","panel")),fe=G(q,H("div","row")),ve=G(fe,H("div"));this.resultTitle=G(ve,H("h2","title")),this.resultTitle.style.fontSize="clamp(22px, 4vw, 34px)",this.resultScore=G(ve,H("div","eyebrow")),G(fe,H("div","spacer")),this.resultGrade=G(fe,H("div","grade")),this.resultStats=G(q,H("div","stats")),this.resultReward=G(q,H("div","reward")),this.resultAmount=G(this.resultReward,H("div","amount")),this.resultNote=G(this.resultReward,H("div","note")),this.resultUnlock=G(q,H("div","eyebrow")),this.resultUnlock.style.marginTop="14px",this.resultUnlock.style.color="var(--good)";const Ae=G(q,H("div","row row--end"));Ae.style.marginTop="22px",this.doubleBtn=Ct(G(Ae,H("button","btn btn--ad"))),this.doubleBtn.dataset.i18n="result.double",It(this.doubleBtn,()=>{We.click(),this.cb.onDoubleReward()}),this.retryBtn=Ct(G(Ae,H("button","btn"))),this.retryBtn.dataset.i18n="result.retry",It(this.retryBtn,()=>{We.click(),this.cb.onRestart()}),this.continueBtn=Ct(G(Ae,H("button","btn btn--primary"))),this.continueBtn.dataset.i18n="result.continue",It(this.continueBtn,()=>{We.click(),this.cb.onBackToMenu()});const Ge=G(e,H("div","rotate-gate"));G(Ge,H("div","phone"));const tt=G(Ge,H("div","title"));tt.style.fontSize="20px",tt.dataset.i18n="rotate.title";const ft=G(Ge,H("div","body-text"));ft.dataset.i18n="rotate.text",Ou(e),this.refreshMenu(),gt.on("i18n:changed",()=>{this.refreshVoice(),this.refreshHaptics(),this.refreshMenu(),this.hangar.hidden||this.refreshHangar(),this.briefing.hidden||this.refreshBriefing()})}menu;hangar;hangarGrid;hangarBalance;briefing;briefBattery;briefFoam;briefWinch;pause;result;menuBalance;menuReputation;langButtons=[];resultTitle;resultGrade;resultScore;resultStats;resultReward;resultAmount;resultNote;resultUnlock;hapticsBtn;voiceBtn;voiceOn=!0;doubleBtn;continueBtn;retryBtn;buildLanguageSwitch(){const e=Ct(H("div","lang"));for(const t of Object.keys(Ah)){const n=G(e,H("button","",t.toUpperCase()));n.title=Ah[t],n.setAttribute("aria-pressed",String(ku()===t)),It(n,()=>{B_(t),We.click(),this.langButtons.forEach(i=>i.setAttribute("aria-pressed",String(i===n))),this.refreshMenu()}),this.langButtons.push(n)}return e}refreshVoice(){this.voiceBtn&&(this.voiceBtn.textContent=`${Ce("pause.voice")}: ${Ce(this.voiceOn?"common.on":"common.off")}`)}refreshHaptics(){this.hapticsBtn&&(this.hapticsBtn.textContent=`${Ce("pause.haptics")}: ${Ce(tn.isEnabled?"common.on":"common.off")}`)}refreshMenu(){const e=en.get();this.menuBalance.textContent=Ce("menu.balance",{money:e.money}),this.menuReputation.textContent=Ce("menu.reputation",{rep:e.reputation})}refreshBriefing(){const e=jl(en.get().upgrades);this.briefBattery.textContent=`${Math.round(e.batteryCapacity)} Wh`,this.briefFoam.textContent=`${Math.round(e.foamTank)} L`,this.briefWinch.textContent=`${Math.round(e.maxTakeoff-se.mass.empty)} kg`}refreshHangar(){const e=en.get();this.hangarBalance.textContent=Ce("menu.balance",{money:e.money}),this.hangarGrid.innerHTML="";for(const t of Yu){const n=e.upgrades[t.id],i=H_(t.id,n),r=i===null,o=!r&&i<=e.money,a=G(this.hangarGrid,H("div","upgrade-card"));r&&a.classList.add("is-maxed");const l=G(a,H("div","upgrade-card__head"));G(l,H("div","upgrade-card__glyph",t.glyph));const c=G(l,H("div"));G(c,H("div","upgrade-card__name",Ce(t.nameKey))),G(c,H("div","upgrade-card__desc",Ce(t.descKey)));const h=G(a,H("div","upgrade-card__pips"));for(let g=0;g<yo;g++){const v=G(h,H("i"));g<n&&v.classList.add("is-on")}const u=G(a,H("div","upgrade-card__status"));u.textContent=n===0?Ce("hangar.stock"):Ce("hangar.level",{level:n,max:yo});const d=G(a,H("div","upgrade-card__gain"));r?d.textContent=Jr(t.id,n):n===0?d.textContent=Jr(t.id,1):d.textContent=`${Jr(t.id,n)}  →  ${Jr(t.id,n+1)}`;const f=Ct(G(a,H("button","btn btn--primary upgrade-card__buy")));r?(f.textContent=Ce("hangar.maxed"),f.disabled=!0):(f.textContent=`${Ce("hangar.buy")} · ${i} $`,f.disabled=!o,It(f,()=>{if(!en.buyUpgrade(t.id,i)){We.chime(!1);return}We.chime(!0),this.refreshHangar(),this.refreshMenu()}))}}show(e){this.menu.hidden=e!=="menu",this.hangar.hidden=e!=="hangar",this.briefing.hidden=e!=="briefing",this.pause.hidden=e!=="pause",this.result.hidden=e!=="result",e==="menu"&&this.refreshMenu(),e==="hangar"&&this.refreshHangar(),e==="briefing"&&this.refreshBriefing()}showResult(e,t,n){this.resultTitle.textContent=Ce(t?"result.success":"result.failed"),this.resultTitle.style.color=t?"var(--good)":"var(--bad)",this.resultGrade.textContent=t?e.grade:"",this.resultGrade.dataset.grade=t?e.grade:"",this.resultGrade.style.display=t?"":"none",this.resultScore.textContent=t?Ce("result.score",{score:e.score}):"";const i=en.get().missions[My]?.bestGrade;t&&i&&i!==e.grade&&(this.resultScore.textContent+=` · ${Ce("result.best",{grade:i})}`);const r=[[Ce("result.rescued"),`${e.survivorsRescued} / ${e.survivorsTotal}`],[Ce("result.fires"),`${e.firesExtinguished} / ${e.firesTotal}`],[Ce("result.damage"),`${Math.round(e.damagePercent)}%`],[Ce("result.time"),A_(e.timeSeconds)],[Ce("result.batteryLeft"),`${Math.round(e.batteryLeft*100)}%`]];this.resultStats.innerHTML="";for(const[o,a]of r){const l=G(this.resultStats,H("div"));G(l,H("span","",o)),G(l,H("span","",a))}if(!t&&n){const o=G(this.resultStats,H("div")),a=G(o,H("span","",n));a.style.color="var(--bad)"}this.resultAmount.textContent=`+${e.reward} $`,this.resultNote.textContent=`${Ce("result.reward")} · ${Ce("result.reputation")} +${e.reputation}`,this.resultReward.style.display=e.reward>0?"":"none",this.resultUnlock.textContent=t?Ce("result.unlock"):"",this.doubleBtn.style.display=t&&e.reward>0?"":"none",this.doubleBtn.disabled=!1,this.doubleBtn.textContent=Ce("result.double"),this.retryBtn.style.display=t?"none":"",this.continueBtn.textContent=Ce("result.continue"),this.show("result"),We.chime(t)}markRewardDoubled(e){this.resultAmount.textContent=`+${e} $`,this.doubleBtn.disabled=!0,this.doubleBtn.textContent=Ce("result.doubled")}}class Ty{root;fpsBox;sliders=[];frames=0;accum=0;worst=0;constructor(e){this.root=Ct(G(e,H("div","debug")));const t=G(this.root,H("div","row")),n=G(t,H("h3"));n.dataset.i18n="debug.title",n.textContent=Ce("debug.title"),G(t,H("div","spacer"));const i=G(t,H("button","btn btn--ghost","✕"));i.style.padding="4px 10px",It(i,()=>this.toggle(!1)),this.fpsBox=G(this.root,H("div","fps","FPS —"));let r="";for(const c of M_){c.group!==r&&(r=c.group,G(this.root,H("div","group-title",r)));const h=G(this.root,H("div","field")),u=G(h,H("label"));G(u,H("span","",c.label));const d=G(u,H("b")),f=G(h,H("input"));f.type="range",f.min=String(c.min),f.max=String(c.max),f.step=String(c.step),f.value=String(wh(c.path)),d.textContent=this.format(Number(f.value)),f.addEventListener("input",()=>{const g=Number(f.value);S_(c.path,g),d.textContent=this.format(g)}),this.sliders.push({input:f,label:d,path:c.path})}const o=G(this.root,H("div","row"));o.style.marginTop="18px";const a=G(o,H("button","btn btn--ghost"));a.dataset.i18n="debug.reset",a.textContent=Ce("debug.reset"),It(a,()=>{b_(),this.syncFromConfig()});const l=G(this.root,H("div","group-title"));l.textContent=Ce("debug.hint"),window.addEventListener("keydown",c=>{c.code==="F9"&&(c.preventDefault(),this.toggle())})}format(e){return Math.abs(e)>=100?e.toFixed(0):Math.abs(e)>=1?e.toFixed(2):e.toFixed(4)}syncFromConfig(){for(const e of this.sliders){const t=wh(e.path);e.input.value=String(t),e.label.textContent=this.format(t)}}toggle(e){const t=e??!this.root.classList.contains("is-open");this.root.classList.toggle("is-open",t),t&&this.syncFromConfig()}get isOpen(){return this.root.classList.contains("is-open")}tick(e){if(this.frames++,this.accum+=e,this.worst=Math.max(this.worst,e),this.accum>=.5){const t=this.frames/this.accum,n=this.worst*1e3;this.fpsBox.textContent=`FPS ${t.toFixed(0)}  ·  worst ${n.toFixed(1)} ms`,this.fpsBox.style.color=t>50?"var(--good)":t>30?"var(--warn)":"var(--bad)",this.frames=0,this.accum=0,this.worst=0}}}function wy(s){return Math.min(11,1.9+s.split(/\s+/).length*.26)}const Ey=new Set(["radio.wires","radio.impact","radio.heat"]),Ay={"speaker.worker":.82};class Ry{constructor(e,t){this.def=e,this.ctx=t,t.say=(n,i,r)=>this.say(n,i,r),t.clearRadio=()=>this.clearRadio()}phaseIndex=-1;queue=[];currentDelay=0;currentHold=0;voiceGrace=0;speaking=!1;lastCheckpointIndex=0;elapsed=0;finished=!1;get currentPhase(){return this.phaseIndex}get phaseId(){return this.def.phases[this.phaseIndex]?.id??""}get totalPhases(){return this.def.phases.length}start(e=0){this.elapsed=0,this.finished=!1,this.queue=[],this.speaking=!1,this.currentDelay=0,this.currentHold=0,this.phaseIndex=-1,this.enterPhase(e)}restart(){this.queue=[],this.speaking=!1,this.currentDelay=0,this.currentHold=0,this.finished=!1;const e=this.lastCheckpointIndex;this.phaseIndex=-1,this.enterPhase(e,!0)}get checkpointIndex(){return this.lastCheckpointIndex}enterPhase(e,t=!1){if(e>=this.def.phases.length){this.finished=!0;return}this.phaseIndex=e,this.lastCheckpointIndex=e;const n=this.def.phases[e];if(t){for(let r=0;r<=e;r++)this.def.phases[r].restore?.(this.ctx);const i=this.def.checkpointFor(e,this.ctx.level);this.ctx.flight.reset(i.position,i.yaw),this.ctx.flight.landed=e===0,this.ctx.drone.root.position.copy(i.position)}n.enter?.(this.ctx),this.ctx.hud.setObjective(Ce(n.objective),null),gt.emit("mission:phase",{index:e,id:n.id})}update(e){if(this.finished)return;this.elapsed+=e,this.ctx.elapsed=this.elapsed,this.updateRadio(e);const t=this.def.phases[this.phaseIndex];if(!t)return;t.update?.(this.ctx,e);const n=t.tutorial?.(this.ctx);if(this.ctx.hud.showTutorial(n?Ce(n):null),t.marker){const i=this.ctx.level.markers[t.marker];i&&this.ctx.hud.setObjective(Ce(t.objective),i.distanceTo(this.ctx.flight.position))}t.done(this.ctx)&&this.enterPhase(this.phaseIndex+1)}say(e,t,n={}){this.queue.push({speaker:e,line:t,delay:n.delay??0,hold:n.hold??0})}clearRadio(){this.queue=[],this.speaking=!1,this.voiceGrace=0,zi.cancel(),this.currentDelay=0,this.currentHold=0,this.ctx.hud.hideRadio()}updateRadio(e){if(this.speaking){if(this.currentHold-=e,this.voiceGrace-=e,this.currentHold<=0&&this.voiceGrace>0&&zi.isSpeaking)return;this.currentHold<=0&&(this.speaking=!1,We.radioClose(),this.ctx.hud.hideRadio(),this.currentDelay=.35);return}if(this.currentDelay>0){this.currentDelay-=e;return}const t=this.queue.shift();if(!t)return;if(t.delay>0){this.currentDelay=t.delay,t.delay=0,this.queue.unshift(t);return}const n=Ce(t.line),i=t.hold>0?t.hold:wy(n);this.ctx.hud.showRadio(Ce(t.speaker),n,i+.4),this.speaking=!0,this.currentHold=i,Ey.has(t.line)?this.voiceGrace=0:(zi.speak(n,Ay[t.speaker]??1),this.voiceGrace=i+6),gt.emit("radio:line",{speaker:t.speaker,key:t.line,duration:i})}}const vr=()=>window.matchMedia("(pointer: coarse)").matches;function ir(s,e,t){const n=s.colliders.find(i=>i.id===e);n&&(n.enabled=t)}function Cy(s){if(!s.flight.landed)return!1;const e=s.level.helipad,t=s.flight.position,n=Math.hypot(t.x-e.position.x,t.z-e.position.z),i=Math.abs(t.y-se.flight.radius-e.position.y);return n<=e.radius+.6&&i<.7}const Hh=new E(0,3,6),Py={id:"takeoff",objective:"obj.takeoff",enter(s){s.input.allowFoam=!1,s.input.allowWinch=!1,s.input.allowThermal=!1,s.foam.setGuideVisible(!1),s.rescue.setZoneVisible(!1),s.hud.setHints({joystick:!1,climb:!0}),s.say("speaker.elena","radio.intro")},tutorial:()=>vr()?"tut.takeoff":"tut.takeoffKb",done:s=>!s.flight.landed&&s.flight.position.y-se.flight.radius>=5,restore(s){s.fires.reset(),s.rescue.reset(),s.drone.resetState();for(const e of s.level.destructibles.values())e.reset();ir(s.level,"gateFireWall",!1),ir(s.level,"gateBeam",!1),ir(s.level,"fallenWall",!1),s.render.setThermal(!1),s.hud.setThermal(!1)}},Ly={id:"approach",objective:"obj.gate",marker:"gate",enter(s){s.hud.setHints({joystick:!0,climb:!1}),s.say("speaker.elena","radio.airborne",{delay:.5})},tutorial:s=>vr()?"tut.move":s.input.needsCursorCapture?"tut.lookKb":"tut.moveKb",done:s=>{const e=s.flight.position;return Math.hypot(e.x-Hh.x,e.z-Hh.z)<21}};let no=0,Ys=!1,js=0;const Dy={id:"extinguish",objective:"obj.fire",marker:"gate",enter(s){no=0,Ys=!1,js=2.6,s.hud.setHints({joystick:!1,climb:!1}),s.level.destructibles.get("gateBeam")?.trigger(),We.collapse(),s.render.addShake(1.3),s.fires.burstDust(new E(0,1.2,6.6),26,4.5),s.setTimeScale(se.sim.bulletTimeScale),s.say("speaker.elena","radio.beamFalls",{delay:.9}),s.say("speaker.elena","radio.useFoam")},update(s,e){no+=e,!Ys&&no>=1&&(Ys=!0,s.fires.igniteGroup("gate"),s.fires.burstDust(new E(0,.8,6.6),18,5),s.render.addShake(.8),s.input.allowFoam=!0,s.foam.setGuideVisible(!0),s.hud.setCrosshair(!0)),js>0&&(js-=e,js<=0&&s.setTimeScale(1))},tutorial:s=>s.input.allowFoam?vr()?"tut.foam":"tut.foamKb":null,done:s=>Ys&&!s.fires.isGroupActive("gate"),restore(s){s.level.destructibles.get("gateBeam")?.snapToEnd(),s.fires.igniteGroup("gate"),s.input.allowFoam=!0,s.foam.setGuideVisible(!0),s.hud.setCrosshair(!0),Ys=!0,js=0,no=2,s.setTimeScale(1)}},Iy={id:"courtyard",objective:"obj.courtyard",marker:"courtyard",goal:!0,enter(s){s.setTimeScale(1),ir(s.level,"gateFireWall",!1),s.input.allowThermal=!0,s.say("speaker.elena","radio.fireOut",{delay:.4}),s.say("speaker.elena","radio.smoke")},tutorial:s=>s.render.thermalActive?null:vr()?"tut.thermal":"tut.thermalKb",done:s=>{const e=s.rescue.target;return e?e.zoneCenter.distanceTo(s.flight.position)<23&&s.flight.position.z<4:!1},restore(s){s.input.allowThermal=!0,ir(s.level,"gateFireWall",!1),s.fires.damageArea(new E(0,.5,6.4),9,1e5,1)}};let wa=!1;const Uy={id:"rescue",objective:"obj.rescue",marker:"courtyard",goal:!0,enter(s){wa=!1,s.rescue.setZoneVisible(!0),s.input.allowWinch=!0,s.say("speaker.elena","radio.seeTarget")},update(s){!wa&&s.rescue.state==="hoisting"&&s.rescue.issue!=="ok"&&(wa=!0,s.say("speaker.elena","radio.winchHold"))},tutorial:s=>s.rescue.state!=="stowed"?null:vr()?"tut.winch":"tut.winchKb",done:s=>s.rescue.onboardCount>0,restore(s){s.rescue.setZoneVisible(!0),s.input.allowWinch=!0}},Ny={id:"evacuate",objective:"obj.return",marker:"helipad",goal:!0,enter(s){s.rescue.setZoneVisible(!1),s.drone.state.battery=Math.min(s.drone.state.battery,s.drone.state.batteryMax*.4),s.say("speaker.elena","radio.pickedUp"),s.say("speaker.worker","radio.workerThanks",{delay:.3}),s.say("speaker.elena","radio.returnHome"),window.setTimeout(()=>{s.level.destructibles.get("courtyardWall")?.triggered||(s.level.destructibles.get("courtyardWall")?.trigger(),We.collapse(),s.render.addShake(.9),s.fires.burstDust(new E(8.5,1.5,-12.6),22,4))},2600)},tutorial:()=>"tut.land",done:s=>Cy(s),restore(s){const e=s.rescue.target;e&&e.state==="waiting"&&(e.state="onboard",e.root.visible=!1,s.drone.state.payload+=e.spec.mass),s.drone.state.battery=Math.min(s.drone.state.battery,s.drone.state.batteryMax*.48),s.rescue.setZoneVisible(!1)}},Ui={id:"mission01",phases:[Py,Ly,Dy,Iy,Uy,Ny],objectiveFireGroups:["gate"],parTime:55,checkpointFor(s,e){switch(s){case 0:return{position:e.spawn.position.clone(),yaw:e.spawn.yaw};case 1:return{position:new E(0,6.5,40),yaw:Math.PI};case 2:return{position:new E(0,6,20),yaw:Math.PI};case 3:return{position:new E(0,5.5,10),yaw:Math.PI};case 4:return{position:new E(-12,9.5,-2),yaw:Math.PI+.6};default:return{position:new E(-15,12,-8),yaw:.2}}}};class Fy{render;rig;materials;level;drone;flight=new uy;fires;foam;rescue;boundary;payloadDrainMul=1;geofenceBeepTimer=0;geofenceWasBlocked=!1;input;hud;screens;debug;runner;ctx;mode="menu";accumulator=0;lastTime=0;worldTime=0;timeScale=1;timeScaleTarget=1;transitionTimer=0;damageTaken=0;adUsedThisFlight=!1;rewardPaid=0;lastResult;windVec=new E;updraft=new E;nozzle=new E;aimDir=new E;camDir=new E;projected=new E;markers=[];constructor(e){this.render=new tx(e),this.rig=new nx(this.render.camera);const t=G(e,H("div","input-layer"));this.input=new gy(t,this.render.canvas),this.materials=mx(),this.level=ly(this.materials),this.render.scene.add(this.level.root),this.rig.obstacles=this.level.cameraBlockers,this.drone=new hy(this.materials),this.render.scene.add(this.drone.root),this.fires=new dy(this.render.quality.name),this.foam=new fy(this.render.quality.name),this.rescue=new my(this.materials),this.render.scene.add(this.fires.group,this.foam.group,this.rescue.group),this.fires.load(this.level.fires),this.rescue.load(this.level.survivors),this.boundary=new cy(this.level.bounds,{fadeDistance:se.boundary.warnDistance}),this.render.scene.add(this.boundary.mesh),this.hud=new by(e,this.input),this.hud.onPause=()=>this.pause(),this.hud.onAd=()=>this.watchAdForBattery(),this.screens=new Sy(e,{onOpenBriefing:()=>this.setMode("briefing"),onOpenHangar:()=>this.setMode("hangar"),onStartMission:()=>this.startMission(),onBackToMenu:()=>this.setMode("menu"),onResume:()=>this.resume(),onRestart:()=>this.startMission(),onToggleDebug:()=>this.debug.toggle(),onDoubleReward:()=>this.doubleReward()}),this.debug=new Ty(e),this.ctx={drone:this.drone,flight:this.flight,fires:this.fires,foam:this.foam,rescue:this.rescue,level:this.level,hud:this.hud,input:this.input,render:this.render,elapsed:0,setTimeScale:n=>{this.timeScaleTarget=n},say:()=>{},clearRadio:()=>{}},this.runner=new Ry(Ui,this.ctx),this.bindEvents(),this.syncViewport(),window.addEventListener("resize",this.syncViewport),this.setMode("menu"),this.lastTime=performance.now(),requestAnimationFrame(this.frame)}bindEvents(){gt.on("drone:impact",({speed:e,damage:t,kind:n})=>{We.impact(it(e/12)),this.render.addShake(it(e/10)*1.1),t>0&&(this.drone.state.hull=Math.max(0,this.drone.state.hull-t),this.damageTaken+=t,this.hud.flashDamage(),tn.impact(t),this.fires.burstSparks(this.flight.position,8),n==="wire"?this.runner.say("speaker.elena","radio.wires"):t>8&&this.runner.say("speaker.elena","radio.impact")),this.drone.state.hull<=0&&this.mode==="playing"&&this.failMission("destroyed")}),gt.on("foam:hit",()=>{}),gt.on("winch:deploy",()=>We.winch(!0)),gt.on("winch:retract",()=>We.winch(!1)),gt.on("survivor:pickedUp",()=>{We.chime(!0),tn.pickup(),this.hud.toast(Ce("hud.rescuing"),"good")}),gt.on("fire:groupCleared",({group:e})=>{Ui.objectiveFireGroups.includes(e)&&(We.chime(!0),tn.fireOut())}),gt.on("foam:empty",()=>this.hud.toast(Ce("hud.foam")+" 0%","bad",1.6))}syncViewport=()=>{const e=this.render.renderer.getDrawingBufferSize(new oe);this.fires.setViewportHeight(e.y),this.foam.setViewportHeight(e.y)};setMode(e){this.mode=e;const t=e==="playing";switch(this.input.enabled=t,this.hud.setVisible(t||e==="paused"||e==="failing"||e==="finishing"),t||this.input.reset(),e!=="playing"&&this.input.releasePointerLock(),e){case"menu":this.screens.show("menu"),this.hud.setVisible(!1),this.resetToIdle();break;case"hangar":this.screens.show("hangar"),this.hud.setVisible(!1);break;case"briefing":this.screens.show("briefing"),this.hud.setVisible(!1);break;case"playing":this.screens.show("none"),We.resume();break;case"paused":this.screens.show("pause"),We.suspend(),zi.cancel(),tn.stop();break;case"result":this.screens.show("none");break;default:this.screens.show("none")}}resetToIdle(){this.fires.reset(),this.rescue.reset(),this.foam.reset(),this.drone.resetState();for(const e of this.level.destructibles.values())e.reset();for(const e of["gateFireWall","gateBeam","fallenWall"]){const t=this.level.colliders.find(n=>n.id===e);t&&(t.enabled=!1)}this.flight.reset(this.level.spawn.position,this.level.spawn.yaw),this.rig.reset(this.flight.position,this.level.spawn.yaw),this.render.setThermal(!1),this.hud.setThermal(!1),this.hud.clearMessages(),this.timeScale=1,this.timeScaleTarget=1}startMission(){this.equipFromHangar(),this.resetToIdle(),this.damageTaken=0,this.adUsedThisFlight=!1,this.rewardPaid=0,this.transitionTimer=0,this.hud.setCrosshair(!1),this.hud.setAdAvailable(!1),this.hud.setHoist(!1,0,!1,""),this.runner.start(0),We.start(),this.setMode("playing")}equipFromHangar(){const e=jl(en.get().upgrades);this.drone.applyStats(e),this.flight.stats=e,this.foam.dpsMultiplier=e.foamDpsMul,this.payloadDrainMul=e.payloadDrainMul}pause(){this.mode==="playing"&&this.setMode("paused")}resume(){this.mode==="paused"&&this.setMode("playing")}watchAdForBattery(){if(this.adUsedThisFlight)return;this.adUsedThisFlight=!0,en.countAd();const e=this.drone.state;e.battery=Math.min(e.batteryMax,e.battery+e.batteryMax*se.battery.adRefill),this.hud.setAdAvailable(!1),this.hud.toast(`+${Math.round(se.battery.adRefill*100)}%`,"good"),We.chime(!0)}doubleReward(){this.lastResult&&(en.countAd(),en.addMoney(this.rewardPaid),this.rewardPaid*=2,this.screens.markRewardDoubled(this.rewardPaid),this.screens.refreshMenu())}failMission(e){this.mode==="playing"&&(this.mode="failing",this.input.enabled=!1,this.transitionTimer=3.2,this.runner.clearRadio(),this.hud.toast(Ce(e==="battery"?"fail.battery":"fail.destroyed"),"bad",3),this.hud.showTutorial(Ce("fail.checkpoint")),We.chime(!1),tn.missionEnd(!1),gt.emit("mission:failed",{reason:e}))}recoverFromCheckpoint(){this.drone.resetState(),this.damageTaken=0,this.adUsedThisFlight=!1,this.foam.reset(),this.runner.restart(),this.rig.reset(this.flight.position,this.flight.yaw),this.hud.clearMessages(),this.hud.setAdAvailable(!1),this.timeScale=1,this.timeScaleTarget=1,this.setMode("playing")}beginFinish(){this.mode="finishing",this.input.enabled=!1,this.transitionTimer=4.5,this.rescue.deliverAll(this.drone),this.runner.clearRadio(),this.runner.say("speaker.elena","radio.landed"),this.hud.showTutorial(null),this.hud.setObjective(null,null)}showResults(){const e=this.level.fires.filter(c=>c.objective),t=Ui.objectiveFireGroups.filter(c=>!this.fires.isGroupActive(c)),n=this.rescue.deliveredCount,i=Dt(100-this.drone.state.hull/this.drone.state.hullMax*100,0,100);let r=n*se.economy.perSurvivor+t.length*se.economy.perFire*e.length;i<1&&(r+=se.economy.flawlessBonus),r=Math.round(r);const o=n*se.economy.reputationPerSurvivor,a={survivorsRescued:n,survivorsTotal:this.level.survivors.length,firesExtinguished:t.length,firesTotal:Ui.objectiveFireGroups.length,damagePercent:i,timeSeconds:this.runner.elapsed,batteryLeft:this.drone.state.battery/this.drone.state.batteryMax,reward:r,reputation:o,grade:"D",score:0},l=D_(a,Ui.parTime);a.grade=l.grade,a.score=l.score,this.lastResult=a,this.rewardPaid=r,en.addMoney(r),en.addReputation(o),en.unlock("battery.reinforced"),en.markTutorialSeen(),en.recordMission(Ui.id,{completed:!0,bestTime:a.timeSeconds,bestDamage:i,survivorsRescued:n,bestGrade:a.grade}),gt.emit("mission:complete",a),tn.missionEnd(!0),this.hud.setVisible(!1),this.screens.showResult(a,!0),this.mode="result"}frame=e=>{requestAnimationFrame(this.frame);const t=Math.max(0,Math.min(.05,(e-this.lastTime)/1e3));switch(this.lastTime=e,this.debug.tick(t),this.input.poll(t),this.input.consumePause()&&(this.mode==="playing"?this.pause():this.mode==="paused"&&this.resume()),this.mode){case"playing":this.stepPlaying(t);break;case"failing":this.stepIdleWorld(t),this.transitionTimer-=t,this.transitionTimer<=0&&this.recoverFromCheckpoint();break;case"finishing":this.stepIdleWorld(t),this.runner.update(t),this.transitionTimer-=t,this.transitionTimer<=0&&this.showResults();break;default:this.stepIdleWorld(t)}this.render.update(t),this.render.applyShake(),this.render.render()};stepIdleWorld(e){this.worldTime+=e,this.level.animate(this.worldTime,e),this.updateWind(),this.fires.update(e,this.windVec.x,this.windVec.z,this.render.camera),this.drone.root.position.copy(this.flight.position),this.drone.updateVisuals(e,this.flight.velocity,this.flight.yaw,this.flight.throttle,!this.flight.landed),(this.mode==="menu"||this.mode==="briefing")&&(this.rig.yaw+=e*.12,this.rig.pitch=.22),this.rig.update(e,this.flight.position,0),this.updateFog(),this.updateAudio(e)}stepPlaying(e){this.worldTime+=e,this.timeScale=lt(this.timeScale,this.timeScaleTarget,se.sim.timeScaleResponse,e);const t=e*this.timeScale,n=this.input.consumeLook();this.rig.rotate(n.dx,n.dy),this.updateWind(),this.fires.getUpdraft(this.flight.position,this.updraft),this.flight.setWind(this.windVec.x,this.windVec.y,this.windVec.z),this.flight.setUpdraft(this.updraft.x,this.updraft.y,this.updraft.z);const i=se.sim.fixedStep;this.accumulator=Math.min(this.accumulator+t,i*se.sim.maxSubSteps);const r={moveX:this.input.moveX,moveY:this.input.moveY,climb:this.input.climb,cameraYaw:this.rig.heading};for(;this.accumulator>=i;)this.accumulator-=i,this.flight.update(i,r,this.drone.state.payload,this.level.colliders,this.level.bounds),this.flight.justTookOff&&(gt.emit("drone:takeoff"),tn.takeoff()),this.flight.justLanded&&(gt.emit("drone:landed",{onHelipad:this.isOnHelipad()}),We.impact(.25),tn.landing());this.drone.root.position.copy(this.flight.position);for(const a of this.level.destructibles.values())a.update(t);if(this.fires.update(t,this.windVec.x,this.windVec.z,this.render.camera),this.updateAim(),this.foam.update(t,this.input.foamHeld,this.nozzle,this.aimDir,this.drone.state,this.level.colliders,this.fires),this.input.consumeWinch()&&(this.rescue.toggleWinch(this.flight.position)||We.beep(220,.12,.08)),this.rescue.update(t,this.drone,this.flight.position,this.flight.velocity.length()),this.rescue.setProgressVisual(),this.input.consumeThermal()){const a=!this.render.thermalActive;this.render.setThermal(a),this.hud.setThermal(a),We.thermalToggle(a)}this.updateBattery(t),this.updateHeat(t),this.level.animate(this.worldTime,t),this.updateBoundary(e),this.drone.updateVisuals(t,this.flight.velocity,this.flight.yaw,this.flight.throttle,!this.flight.landed);const o=Math.hypot(this.flight.velocity.x,this.flight.velocity.z);if(this.rig.update(e,this.flight.position,it(o/Math.max(1,se.flight.maxSpeed))),this.updateFog(),this.updateAudio(t),this.runner.update(t),this.runner.finished){this.beginFinish();return}this.updateHud(e,o)}updateWind(){const e=se.wind,t=1+ds(this.worldTime*e.gustFrequency*Math.PI*2)*(e.gustAmplitude/Math.max(.001,e.strength)),n=e.strength*t;this.windVec.set(Math.cos(e.direction)*n,ds(this.worldTime*.31)*.35,Math.sin(e.direction)*n)}updateBoundary(e){this.boundary.update(e,this.flight.position);const t=this.flight.boundaryBlocked;this.hud.setGeofence(this.boundary.proximity,t),this.geofenceBeepTimer-=e,t&&(this.geofenceWasBlocked||(this.hud.toast(Ce("hud.geofence"),"bad",1.6),this.geofenceBeepTimer=0),this.geofenceBeepTimer<=0&&(this.geofenceBeepTimer=1.1,We.beep(660,.1,.08,"sine"),tn.boundary())),this.geofenceWasBlocked=t}updateAim(){this.drone.root.updateMatrixWorld(),this.nozzle.copy(this.drone.nozzleLocal),this.drone.root.localToWorld(this.nozzle),this.render.camera.getWorldDirection(this.camDir),this.aimDir.copy(this.render.camera.position).addScaledVector(this.camDir,42).sub(this.nozzle).normalize()}updateBattery(e){const t=this.drone.state,n=se.battery;if(this.flight.landed&&this.isOnHelipad())t.battery=Math.min(t.batteryMax,t.battery+n.padChargeRate*e),t.foam=Math.min(t.foamMax,t.foam+se.foam.padRefillRate*e);else if(!this.flight.landed){const r=Math.min(1,Math.hypot(this.input.moveX,this.input.moveY)+Math.abs(this.input.climb)*.6),o=n.idleDrain+n.manoeuvreDrain*r+n.payloadDrain*t.payload*this.payloadDrainMul;t.battery=Math.max(0,t.battery-o*e)}const i=t.battery/t.batteryMax;this.hud.setAdAvailable(!this.adUsedThisFlight&&i<.35&&i>0),t.battery<=0&&(gt.emit("drone:batteryEmpty"),this.failMission("battery"))}updateHeat(e){const t=this.fires.getHeat(this.flight.position);if(t<=.02)return;const n=t*se.fire.heatDps*e;this.drone.state.hull=Math.max(0,this.drone.state.hull-n),this.damageTaken+=n,this.render.addShake(t*e*1.5),t>.55&&(this.heatWarnTimer-=e,this.heatWarnTimer<=0&&(this.heatWarnTimer=7,this.runner.say("speaker.elena","radio.heat")),this.hud.flashDamage()),this.drone.state.hull<=0&&(gt.emit("drone:destroyed"),this.failMission("destroyed"))}heatWarnTimer=0;updateFog(){const e=this.fires.getSmokeDensity(this.flight.position);this.render.setFogDensity(se.smoke.fogDensityMin+(se.smoke.fogDensityMax-se.smoke.fogDensityMin)*e)}updateAudio(e){We.update(e,{throttle:this.flight.throttle,airborne:!this.flight.landed,speed:this.flight.velocity.length(),fireProximity:it(this.fires.getHeat(this.flight.position)*.7+this.fires.getSmokeDensity(this.flight.position)*.5),foaming:this.foam.isFiring,batteryRatio:this.drone.state.battery/this.drone.state.batteryMax})}isOnHelipad(){const e=this.level.helipad,t=this.flight.position;return Math.hypot(t.x-e.position.x,t.z-e.position.z)<=e.radius+.6&&Math.abs(t.y-se.flight.radius-e.position.y)<.7}updateHud(e,t){const n=this.drone.state,i=n.battery/n.batteryMax;this.hud.update(e,{batteryRatio:i,foamRatio:n.foam/n.foamMax,hullRatio:n.hull/n.hullMax,payload:n.payload,altitude:Math.max(0,this.flight.position.y-se.flight.radius),speed:t,batteryCritical:i<se.battery.warnLevel}),this.hud.setButtons({foam:this.input.allowFoam&&n.foam>0,winch:this.input.allowWinch,thermal:this.input.allowThermal,winchArmed:this.rescue.state==="stowed"&&this.rescue.issue==="ok"});const r=this.rescue.state==="lowering"||this.rescue.state==="hoisting";this.hud.setHoist(r,this.rescue.progress,this.rescue.issue!=="ok",this.hoistHint()),this.updateMarkers()}hoistHint(){switch(this.rescue.issue){case"ok":return Ce("hud.holdPosition");case"tooFast":return Ce("hud.tooFast");case"tooHigh":return Ce("hud.tooHigh");case"tooLow":return Ce("hud.tooLow");default:return Ce("hud.leftZone")}}updateMarkers(){this.markers.length=0;const e=Ui.phases[this.runner.currentPhase],t=e?.marker?this.level.markers[e.marker]:null;if(t){const n=window.innerWidth,i=window.innerHeight;this.projected.copy(t).project(this.render.camera);const r=this.projected.z>1;let o=(this.projected.x*.5+.5)*n,a=(-this.projected.y*.5+.5)*i;r&&(o=n-o,a=i-a);const l=46,c=r||o<l||o>n-l||a<l||a>i-l;o=Dt(o,l,n-l),a=Dt(a,l,i-l),this.markers.push({id:"objective",x:o,y:a,offscreen:c,label:`${Math.round(t.distanceTo(this.flight.position))} m`,goal:e.goal===!0})}this.hud.setMarkers(this.markers)}async preloadModels(){await Es.preload()}dispose(){window.removeEventListener("resize",this.syncViewport),this.input.dispose(),this.hud.dispose(),this.fires.dispose(),this.foam.dispose(),this.rescue.dispose(),this.boundary.dispose(),this.drone.dispose(),this.level.dispose(),gx(this.materials),this.render.dispose(),We.dispose(),zi.cancel()}}const Zl=document.getElementById("app");if(!Zl)throw new Error("#app не найден");async function ky(){await Es.preload();const s=new Fy(Zl);window.game=s;const e=()=>{We.start(),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),document.addEventListener("visibilitychange",()=>{document.hidden&&(We.suspend(),zi.cancel())})}ky().catch(s=>{console.error("[boot] игра не запустилась:",s),Zl.innerHTML=`<div style="padding:32px;font-family:monospace;color:#ff6b6b">
    Не удалось запустить игру.<br><br>${String(s)}
  </div>`});
//# sourceMappingURL=index-C7W56eca.js.map
