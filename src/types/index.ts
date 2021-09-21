export enum CellValues {
    None,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Bomb
}

export enum CellStates {
    Open,
    Visible,
    Flag,
    Doubt
}

export type Cell = {value: CellValues; state: CellStates}