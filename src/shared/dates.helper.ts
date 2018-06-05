export class DatesHelper {

static farmatDate(date: Date): string {

    const formatedDate = date.toISOString();
   const dateStringtoArray = formatedDate.split('');
       dateStringtoArray.splice(19, 4);
       return dateStringtoArray.join('');

}

static getNextDate(date: Date, addDays: number): Date {

  return new Date(date.setDate(date.getDate() + addDays));
}

}
