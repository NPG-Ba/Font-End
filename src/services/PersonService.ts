import { Person } from '@/models/Person';
import { FormResponse } from '@/models/http/FormResponse';
import { MyHttpResponse } from '@/models/http/Response';
import { Error } from '@/models/http/Error';

export class PersonService {
    public save(personForm: Person): Promise<MyHttpResponse> {
        const promise = new Promise<MyHttpResponse>((resolve, reject) => {
            const randomNumber: number = Math.floor(Math.random());
            setTimeout(() => {
                if (randomNumber % 2 === 0) {
                    resolve({
                        id: randomNumber,
                    } as FormResponse);
                } else {
                    reject({
                        error: {
                            code: randomNumber,
                        } as Error,
                    } as MyHttpResponse);
                }
            }, 5000);
        });
        return promise;
    }
}
