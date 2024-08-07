import * as zxcvbn from "zxcvbn"

export const getPasswordValue = (password: string): number => {

    if(!password){
        return 0;
    } 

    const passwordScore = zxcvbn.default(password).score;

    const IS_PASSWORD_WEAK = passwordScore <= 1;

    const IS_PASSWORD_MEDIUM = passwordScore <= 3;

    if(IS_PASSWORD_WEAK){
        return 30;
    } else if (IS_PASSWORD_MEDIUM){
        return 60
    }

    return 100


}