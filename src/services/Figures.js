export default class Figures{
    makesFigures = (number) =>{
        if (String(Math.floor(+number)).length < 7 && String(Math.floor(+number)).length > 3) {
            return `${String(+number).slice(0, -3)},${String(+number).slice(-3)}`
        }
        if (String(Math.floor(+number)).length < 10 && String(Math.floor(+number)).length > 3) {
            return `${String(+number).slice(0, -6)},${String(+number).slice(-6, -3)},${String(+number).slice(-3)}`
        }
        return number
    }
}