module.exports = {
    age(timestamp){

        const today = new Date()
        const birth = new Date(timestamp)
    
        //2021-2002 = 19
        let age =  today.getFullYear() - birth.getFullYear()
        let month = today.getMonth() - birth.getMonth()
    
    
        // 11 - 12 = -1 / 11 - 11 = 0
        if(month < 0 || month == 0 && today.getDate < birth.getDate){
            age = age - 1;
        }
    
        return age
    },
    date(timestamp){

        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    }

}