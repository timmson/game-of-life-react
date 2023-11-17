# Game Of Life React

## Правила
- Место действия игры — размеченная на клетки плоскость, которая может быть безграничной, ограниченной или замкнутой.

- Каждая клетка на этой поверхности имеет **8 соседей**, окружающих её, и может находиться в двух состояниях: быть «живой» (заполненной) или «мёртвой» (пустой).

|    |    |    |
|:--:|:--:|:--:|
| 🔴 | 🔴 | 🔴 |
| 🔴 | 🟢 | 🔴 |
| 🔴 | 🔴 | 🔴 |

- Распределение живых клеток в начале игры называется первым поколением. Каждое следующее поколение рассчитывается на основе предыдущего по таким правилам: 
  - в пустой (мёртвой) клетке, с которой соседствуют **3 живые клетки**, зарождается жизнь;

  |    |    |    |
  |:--:|:--:|:--:|
  | 🔴 | ⚫️ | ⚫️ |
  | ⚫️ | 🟢 | 🔴 |
  | ⚫️ | 🔴 | ⚫️ |
  - если у живой клетки есть **2 или 3 живые соседки**, то эта клетка продолжает жить; в противном случае (если живых соседей меньше двух или больше трёх) клетка умирает («от одиночества» или «от перенаселённости»).
  
  |    |    |    |
  |:--:|:--:|:--:|
  | 🔴 | ⚫️ | ⚫️ |
  | ⚫️ | 🟢 | 🔴 |
  | ⚫️ | ⚫️ | ⚫️ |

- Игра прекращается, если
  - на поле не останется ни одной «живой» клетки;
  - конфигурация на очередном шаге в точности (без сдвигов и поворотов) повторит себя же на одном из более ранних шагов (складывается периодическая конфигурация)
  - при очередном шаге ни одна из клеток не меняет своего состояния (частный случай предыдущего правила, складывается стабильная конфигурация)
  
Игрок не принимает активного участия в игре. Он лишь расставляет или генерирует начальную конфигурацию «живых» клеток, которые затем изменяются согласно правилам. Несмотря на простоту правил, в игре может возникать огромное разнообразие форм.

## Также
- [Симуляция](https://playgameoflife.com/)
