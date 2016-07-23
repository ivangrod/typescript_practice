enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

/*
The body of an enum consists of zero or more enum members. Enum members have
numeric value associated with them and can be either constant or computed.
*/
enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}

enum Enum {
    A
}
let aEnum = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
