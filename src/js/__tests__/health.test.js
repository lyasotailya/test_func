import health from '../health';

test.each([
    [{name: 'мечник', health: 10}, 'critical'],
    [{name: 'маг', health: 100}, 'healthy'],
    [{name: 'лучник', health: 40}, 'wounded'],
    [{name: 'вор', health: -1}, ''],
])(
('should have signal health'),
(pers, expected) => {
    const result = health(pers);
    expect(result).toBe(expected);
});
