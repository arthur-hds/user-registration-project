export const convertDateObjToPtBr = (date: Date): string => {

    const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()].map((values) => padZero(values));


    const dateString = `${day}/${month }/${year}`

    return dateString;


}

const padZero = (value: number): string => {

    if(value < 10){
        return `0${value}`
    }

    return value.toString();



}