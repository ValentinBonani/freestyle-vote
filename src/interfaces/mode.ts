export interface ModeInterface {
    id?:number,
    name:string,
    state:boolean,
    points:number[][],
    setNextBar:()=>boolean,
    setLastBar:()=>boolean,
    barsCount:number
}
