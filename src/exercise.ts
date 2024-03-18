export class Utils{
    static test() {
        let array = Utils.duplicate(`value`, 3)
        let array2= Utils.duplicate(4,3);
        console.log(array);
    }

    static duplicate<V>(value: V, count: number): V[] {
        return new Array<V>(count).fill(value);
    }
}