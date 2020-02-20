declare type DurationPart = {
    literal: string;
    symbol: string;
};
declare type RenderFunction<T> = (parts: DurationPart[]) => T;
interface IOptions<T> {
    allowMultiples?: string[];
    render?: RenderFunction<T>;
}
declare type FormatterFunction<T> = (duration: number) => T;
export declare function durationFormatter<T>(options?: IOptions<T>): FormatterFunction<T>;
export {};
