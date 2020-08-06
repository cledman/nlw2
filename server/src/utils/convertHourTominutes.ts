export default function convertHourToMinutes(time: string){
    //retorna um array com 2 posições, por isso montamos um novo objeto pegando os elementos.   
    const [hour, minutes] =   time.split(':').map(Number)
    const timeInMinutes = (hour *60 )+ minutes
    return timeInMinutes
}