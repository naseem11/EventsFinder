import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderBy implements PipeTransform {

    transform(eventsArray: any[], sortBy?: string) {
        if (eventsArray) {
            if (!sortBy || sortBy === 'name') {
                eventsArray.sort((event1: any, event2: any) => {

                    if (event1.name.toLowerCase() < event2.name.toLowerCase()) {

                        return -1;
                    }
                    if (event1.name.toLowerCase() > event2.name.toLowerCase()) {

                        return 1;
                    }
                    return 0;
                });
            } else {

                eventsArray.sort((event1: any, event2: any): any => {

                    if (event1.dates.start.localDate < event2.dates.start.localDate) {

                        return -1;
                    }
                    if (event1.dates.start.localDate > event2.dates.start.localDate) {

                        return 1;
                    }
                    return 0;
                });

            }

            return eventsArray;

        }
    }
}
