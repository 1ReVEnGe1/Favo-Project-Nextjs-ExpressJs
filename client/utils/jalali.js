import jMoment from 'jalali-moment'


export const formatDate = (date) => {
    return jMoment(date)
        .locale('fa') 
        .format('dddd D MMMM  HH:mm');
}

export const formatDate2 = (date) => {
    return jMoment(date)
        .locale('fa') 
        .format('dddd D MMMM ');
}
