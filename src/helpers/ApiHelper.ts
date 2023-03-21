import { adviceDto } from "../model/advice";

export class ApiHelper {
  getAdviceAsync = async (): Promise<adviceDto> => {
    const response = await fetch("https://api.adviceslip.com/advice");

    const requestAdvice = response.json();
    console.log(" Helper" + requestAdvice);
    return requestAdvice;
  };
}
