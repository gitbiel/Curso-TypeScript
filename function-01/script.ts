function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);

type Callback = (event: MouseEvent) => void;
