export default (num: number): string => (num < 10 ? `0${num}` : num.toString());
