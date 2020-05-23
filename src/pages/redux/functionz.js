export const  calculateWin = async(dat) => {
  
        let wins=[]
       await dat.forEach(async(trade)=>{

           await trade.history.forEach(async(td)=>{
                if(td.profit > 0){
                   await wins.push(td)
                }
            })
        })

        let winratio=dat.length / wins.length
        
        return Math.round((winratio+ Number.EPSILON) * 100) / 100
  }

  export const  calculateloss = async(dat) => {
  
    let loss=[]
   await dat.forEach(async(trade)=>{

       await trade.history.forEach(async(td)=>{
            if(td.profit < 0){
               await loss.push(td)
            }
        })
    })

    let lossratio=dat.length / loss.length
    
    return Math.round((lossratio+ Number.EPSILON) * 100) / 100
}

export const calc_profitfactor = async(accounts) => {
  
        let  profits =[]
   await accounts.forEach(async(account)=>{
           profits.push(account.profitFactor)
    })

    let sum=profits.reduce((previous, current) => current += previous)

    let avgprofit = sum / profits.length
    
    
    return Math.round((avgprofit+ Number.EPSILON) * 100) / 100
}

