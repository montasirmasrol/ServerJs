const express=require('express')
const app=express()
const ok=s=>/^[1-9]\d*$/.test(s)
const gcd=(a,b)=>b?gcd(b,a%b):a
app.get('/montasir_masrol_gmail_com',(q,r)=>{
 let{x,y}=q.query
 r.type('text/plain')
 if(!ok(x)||!ok(y))return r.send('NaN')
 x=BigInt(x);y=BigInt(y)
 r.send((x/gcd(x,y)*y).toString())
})
app.listen(process.env.PORT||3000)
