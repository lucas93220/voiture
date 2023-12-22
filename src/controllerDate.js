class Dates {
    dateTime = () =>{
        const dataFooter = document.querySelector("footer p")
        let dateTimeFull = new Date().getFullYear()
        dataFooter.innerHTML += ` - LL - ${dateTimeFull}`
        console.log(this)
        
    }
}
export let newDataTime = new Dates()
