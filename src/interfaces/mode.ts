export interface ModeInterface {
    id?:number,
    name:string,
    state:boolean,
    points:number[][],
    extras:number[][],
    setNextBar:()=>boolean,
    setLastBar:()=>boolean,
    barsCount:number
}
