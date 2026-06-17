const express=require('express')
const app=express()

const gcd=(a,b)=>b?gcd(b,a%b):a

app.get('/montasir_masrol_gmail_com',(req,res)=>{
  let{x,y}=req.query

  if(!/^[1-9]\d*$/.test(x)||!/^[1-9]\d*$/.test(y))
    return res.send('NaN')

  x=BigInt(x)
  y=BigInt(y)

  res.send(((x*y)/BigInt(gcd(Number(x),Number(y)))).toString())
})

app.listen(process.env.PORT||3000)
