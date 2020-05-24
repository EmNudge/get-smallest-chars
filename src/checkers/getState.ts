export interface checkerResult {
    success: boolean;
    killArr: boolean;
}
export const getNegative = (killArr: boolean = false): checkerResult => ({ success: false, killArr });
export const getPositive = (killArr: boolean = false): checkerResult => ({ success: true, killArr });